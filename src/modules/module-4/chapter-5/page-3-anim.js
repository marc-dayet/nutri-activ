;(function(cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = [
    {
      name: "animationfin_atlas_1",
      frames: [
        [1954, 258, 61, 61],
        [1954, 0, 83, 97],
        [1927, 477, 53, 51],
        [1954, 99, 85, 84],
        [1927, 530, 46, 48],
        [1982, 477, 49, 48],
        [1982, 527, 46, 49],
        [1281, 736, 302, 161],
        [1585, 736, 132, 307],
        [1037, 781, 209, 213],
        [1719, 736, 154, 155],
        [1281, 545, 167, 179],
        [1954, 185, 73, 71],
        [1954, 321, 63, 56],
        [1037, 0, 545, 543],
        [1584, 385, 341, 349],
        [1037, 545, 242, 234],
        [2026, 258, 22, 28],
        [1584, 0, 368, 383],
        [1875, 736, 146, 151],
        [1875, 889, 139, 134],
        [1927, 385, 97, 90],
        [0, 0, 1035, 1035],
      ],
    },
  ]
  ;(lib.AnMovieClip = function() {
    this.actionFrames = []
    this.soundStreamDuration = new Map()
    this.streamSoundSymbolsList = []

    this.gotoAndPlayForStreamSoundSync = function(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.gotoAndPlay = function(positionOrLabel) {
      this.clearAllSoundStreams()
      this.startStreamSoundsForTargetedFrame(positionOrLabel)
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function() {
      this.clearAllSoundStreams()
      this.startStreamSoundsForTargetedFrame(this.currentFrame)
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function(positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
      this.clearAllSoundStreams()
    }
    this.stop = function() {
      cjs.MovieClip.prototype.stop.call(this)
      this.clearAllSoundStreams()
    }
    this.startStreamSoundsForTargetedFrame = function(targetFrame) {
      for (var index = 0; index < this.streamSoundSymbolsList.length; index++) {
        if (index <= targetFrame && this.streamSoundSymbolsList[index] !== undefined) {
          for (var i = 0; i < this.streamSoundSymbolsList[index].length; i++) {
            var sound = this.streamSoundSymbolsList[index][i]
            if (sound.endFrame > targetFrame) {
              var targetPosition = Math.abs(
                ((targetFrame - sound.startFrame) / lib.properties.fps) * 1000,
              )
              var instance = this.playSound(sound.id)
              var remainingLoop = 0
              if (sound.offset) {
                targetPosition = targetPosition + sound.offset
              } else if (sound.loop > 1) {
                var loop = targetPosition / instance.duration
                remainingLoop = Math.floor(sound.loop - loop)
                if (targetPosition === 0) {
                  remainingLoop -= 1
                }
                targetPosition = targetPosition % instance.duration
              }
              instance.loop = remainingLoop
              instance.position = Math.round(targetPosition)
              this.InsertIntoSoundStreamData(
                instance,
                sound.startFrame,
                sound.endFrame,
                sound.loop,
                sound.offset,
              )
            }
          }
        }
      }
    }
    this.InsertIntoSoundStreamData = function(
      soundInstance,
      startIndex,
      endIndex,
      loopValue,
      offsetValue,
    ) {
      this.soundStreamDuration.set(
        {instance: soundInstance},
        {start: startIndex, end: endIndex, loop: loopValue, offset: offsetValue},
      )
    }
    this.clearAllSoundStreams = function() {
      var keys = this.soundStreamDuration.keys()
      for (var i = 0; i < this.soundStreamDuration.size; i++) {
        var key = keys.next().value
        key.instance.stop()
      }
      this.soundStreamDuration.clear()
      this.currentSoundStreamInMovieclip = undefined
    }
    this.stopSoundStreams = function(currentFrame) {
      if (this.soundStreamDuration.size > 0) {
        var keys = this.soundStreamDuration.keys()
        for (var i = 0; i < this.soundStreamDuration.size; i++) {
          var key = keys.next().value
          var value = this.soundStreamDuration.get(key)
          if (value.end === currentFrame) {
            key.instance.stop()
            if (this.currentSoundStreamInMovieclip === key) {
              this.currentSoundStreamInMovieclip = undefined
            }
            this.soundStreamDuration.delete(key)
          }
        }
      }
    }

    this.computeCurrentSoundStreamInstance = function(currentFrame) {
      if (this.currentSoundStreamInMovieclip === undefined) {
        if (this.soundStreamDuration.size > 0) {
          var keys = this.soundStreamDuration.keys()
          var maxDuration = 0
          for (var i = 0; i < this.soundStreamDuration.size; i++) {
            var key = keys.next().value
            var value = this.soundStreamDuration.get(key)
            if (value.end > maxDuration) {
              maxDuration = value.end
              this.currentSoundStreamInMovieclip = key
            }
          }
        }
      }
    }
    this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame) {
      for (var frameIndex in this.actionFrames) {
        if (frameIndex > currentFrame && frameIndex < calculatedDesiredFrame) {
          return frameIndex
        }
      }
      return calculatedDesiredFrame
    }

    this.syncStreamSounds = function() {
      this.stopSoundStreams(this.currentFrame)
      this.computeCurrentSoundStreamInstance(this.currentFrame)
      if (this.currentSoundStreamInMovieclip !== undefined) {
        var soundInstance = this.currentSoundStreamInMovieclip.instance
        if (soundInstance.position !== 0) {
          var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip)
          var soundPosition = soundValue.offset
            ? soundInstance.position - soundValue.offset
            : soundInstance.position
          var calculatedDesiredFrame =
            soundValue.start + (soundPosition / 1000) * lib.properties.fps
          if (soundValue.loop > 1) {
            calculatedDesiredFrame +=
              (((soundValue.loop - soundInstance.loop - 1) * soundInstance.duration) / 1000) *
              lib.properties.fps
          }
          calculatedDesiredFrame = Math.floor(calculatedDesiredFrame)
          var deltaFrame = calculatedDesiredFrame - this.currentFrame
          if (deltaFrame >= 2) {
            this.gotoAndPlayForStreamSoundSync(
              this.getDesiredFrame(this.currentFrame, calculatedDesiredFrame),
            )
          }
        }
      }
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  ;(lib.CachedBmp_22 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(0)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_23 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(1)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_21 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(2)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_20 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(3)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_18 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(4)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_17 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(5)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_16 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(6)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_14 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(7)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_15 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(8)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_13 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(9)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_11 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(10)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_10 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(11)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_9 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(12)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_8 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(13)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_19 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(14)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_12 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(15)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_6 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(16)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_3 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(17)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_7 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(18)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_4 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(19)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_2 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(20)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_5 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(21)
  }).prototype = p = new cjs.Sprite()
  ;(lib.CachedBmp_1 = function() {
    this.initialize(ss["animationfin_atlas_1"])
    this.gotoAndStop(22)
  }).prototype = p = new cjs.Sprite()
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop))
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mc_symbol_clone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }

  ;(lib.Path_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.CachedBmp_23()
    this.instance.setTransform(0, -0.15, 0.0625, 0.0625)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, -0.1, 5.2, 6), null)
  ;(lib.et3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.CachedBmp_22()
    this.instance.setTransform(0, 0, 0.32, 0.32)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.et3, new cjs.Rectangle(0, 0, 19.5, 19.5), null)
  ;(lib.et2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.CachedBmp_21()
    this.instance.setTransform(0, 0, 0.32, 0.32)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.et2, new cjs.Rectangle(0, 0, 17, 16.3), null)
  ;(lib.et1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.CachedBmp_20()
    this.instance.setTransform(0, 0, 0.32, 0.32)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.et1, new cjs.Rectangle(0, 0, 27.2, 26.9), null)
  ;(lib.etoile3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.et3()
    this.instance.setTransform(9.8, 9.8, 1, 1, 0, 0, 0, 9.8, 9.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({scaleX: 1.5625, scaleY: 1.5625}, 7)
        .to({scaleX: 1, scaleY: 1}, 7)
        .wait(12),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-5.5, -5.5, 30.5, 30.5)
  ;(lib.etoile2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.et2()
    this.instance.setTransform(8.4, 8.2, 1, 1, 0, 0, 0, 8.4, 8.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({scaleX: 1.5625, scaleY: 1.5625, x: 8.45}, 7)
        .to({scaleX: 1, scaleY: 1, x: 8.4}, 6)
        .wait(11),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-4.7, -4.6, 26.5, 25.5)
  ;(lib.etoile1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.et1()
    this.instance.setTransform(13.6, 13.4, 1, 1, 0, 0, 0, 13.6, 13.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(14)
        .to({scaleX: 1.5625, scaleY: 1.5625}, 11)
        .to({scaleX: 1, scaleY: 1}, 10)
        .wait(16),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-7.6, -7.5, 42.5, 42)
  ;(lib.coupe = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_3
    this.instance = new lib.CachedBmp_3()
    this.instance.setTransform(242.4, 222.8, 0.5, 0.5)

    this.instance_1 = new lib.CachedBmp_2()
    this.instance_1.setTransform(184.15, 203.35, 0.5, 0.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    // Calque_4
    this.instance_2 = new lib.CachedBmp_4()
    this.instance_2.setTransform(215.2, 197.95, 0.5, 0.5)

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1))

    // Calque_1
    this.instance_3 = new lib.CachedBmp_18()
    this.instance_3.setTransform(330, 290.8, 0.5, 0.5)

    this.instance_4 = new lib.CachedBmp_17()
    this.instance_4.setTransform(302.2, 319.3, 0.5, 0.5)

    this.instance_5 = new lib.CachedBmp_16()
    this.instance_5.setTransform(274.7, 347.4, 0.5, 0.5)

    this.instance_6 = new lib.CachedBmp_15()
    this.instance_6.setTransform(169.05, 15.5, 0.5, 0.5)

    this.instance_7 = new lib.CachedBmp_14()
    this.instance_7.setTransform(9.3, 167.1, 0.5, 0.5)

    this.instance_8 = new lib.CachedBmp_13()
    this.instance_8.setTransform(282.6, 301.2, 0.5, 0.5)

    this.instance_9 = new lib.CachedBmp_12()
    this.instance_9.setTransform(245.65, 256.85, 0.5, 0.5)

    this.instance_10 = new lib.CachedBmp_11()
    this.instance_10.setTransform(249.75, 262.05, 0.5, 0.5)

    this.instance_11 = new lib.CachedBmp_10()
    this.instance_11.setTransform(229, 239.5, 0.5, 0.5)

    this.instance_12 = new lib.CachedBmp_9()
    this.instance_12.setTransform(212.3, 222.85, 0.5, 0.5)

    this.instance_13 = new lib.CachedBmp_8()
    this.instance_13.setTransform(201.8, 216.05, 0.5, 0.5)

    this.instance_14 = new lib.CachedBmp_7()
    this.instance_14.setTransform(29.2, 35.3, 0.5, 0.5)

    this.instance_15 = new lib.CachedBmp_6()
    this.instance_15.setTransform(29.15, 35.45, 0.5, 0.5)

    this.instance_16 = new lib.CachedBmp_5()
    this.instance_16.setTransform(174.55, 189, 0.5, 0.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_16},
            {t: this.instance_15},
            {t: this.instance_14},
            {t: this.instance_13},
            {t: this.instance_12},
            {t: this.instance_11},
            {t: this.instance_10},
            {t: this.instance_9},
            {t: this.instance_8},
            {t: this.instance_7},
            {t: this.instance_6},
            {t: this.instance_5},
            {t: this.instance_4},
            {t: this.instance_3},
          ],
        })
        .wait(1),
    )

    // Calque_1
    this.instance_17 = new lib.Path_1()
    this.instance_17.setTransform(240, 266.8, 8, 8, 0, 0, 0, 2.6, 2.9)
    this.instance_17.alpha = 0.2695

    this.instance_18 = new lib.CachedBmp_19()
    this.instance_18.setTransform(8.15, 224.8, 0.5, 0.5)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_18}, {t: this.instance_17}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.coupe, new cjs.Rectangle(8.2, 15.5, 408, 480.8), null)
  ;(lib.coupe1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.instance = new lib.etoile3()
    this.instance.setTransform(307.2, 278.65, 1, 1, 0, 0, 0, 9.8, 9.8)

    this.instance_1 = new lib.etoile2()
    this.instance_1.setTransform(183.4, 10.45)

    this.instance_2 = new lib.etoile1()
    this.instance_2.setTransform(184.2, 170.3, 1, 1, 0, 0, 0, 13.6, 13.4)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_2}, {t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    // Calque_1
    this.instance_3 = new lib.coupe()
    this.instance_3.setTransform(198.8, 213.2, 1, 1, 0, 0, 0, 198.8, 213.2)

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.coupe1, new cjs.Rectangle(8.2, 10.5, 408, 485.8), null)
  ;(lib.mouvementcoupe = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.coupe1()
    this.instance.setTransform(54.3, 444.3, 1, 1, 0, 0, 0, 54.3, 444.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({x: 85.3, y: 425.7}, 49, cjs.Ease.get(1))
        .to({x: 54.3, y: 444.3}, 20, cjs.Ease.get(-1))
        .to({x: 85.3, y: 425.7}, 14, cjs.Ease.get(1))
        .to({x: 54.3, y: 444.3}, 42, cjs.Ease.get(-1))
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(8.2, -8.1, 439, 504.40000000000003)

  // stage content:
  ;(lib.ANIMATION = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    this.actionFrames = [0]
    this.isSingleFrame = false
    // timeline functions:
    this.frame_0 = function() {
      if (this.isSingleFrame) {
        return
      }
      if (this.totalFrames === 1) {
        this.isSingleFrame = true
      }
      this.clearAllSoundStreams()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(1),
    )

    // Calque_1 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p(
      "EgCzAmhQuwgPqiq8Qqiq7AJvrQAJvqKOr5QKOr5PgAMQPfAMM8K9QM8K+ggP9QghP8tBLoQswLZuZABIgmgBg",
    )
    mask.setTransform(280.0803, 271.3317)

    // Calque_1
    this.instance = new lib.mouvementcoupe()
    this.instance.setTransform(236.85, 324.45, 1, 1, 0, 0, 0, 198.8, 248.1)

    var maskedShapeInstanceList = [this.instance]

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // Calque_3
    this.instance_1 = new lib.CachedBmp_1()
    this.instance_1.setTransform(17.7, 9.65, 0.5, 0.5)

    maskedShapeInstanceList = [this.instance_1]

    for (
      shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(308.8, 299.8, 217.59999999999997, 218.09999999999997)
  // library properties:
  lib.properties = {
    id: "8766DDC0BF41F64CB993783BB32571B1",
    width: 550,
    height: 550,
    fps: 24,
    color: "#009999",
    opacity: 0.0,
    manifest: [{src: require("./page-3-anim.png"), id: "animationfin_atlas_1"}],
    preloads: [],
  }

  // bootstrap callback support:
  ;(lib.Stage = function(canvas) {
    cjs.Stage.call(this, canvas)
  }).prototype = p = new cjs.Stage()

  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function() {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function(ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function(ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function() {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }

  p.getTimelinePosition = function() {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }

  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }

  an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }

  an.compositions = an.compositions || {}
  an.compositions["8766DDC0BF41F64CB993783BB32571B1"] = {
    getStage: function() {
      return exportRoot.stage
    },
    getLibrary: function() {
      return lib
    },
    getSpriteSheet: function() {
      return ss
    },
    getImages: function() {
      return img
    },
  }

  an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }

  an.getComposition = function(id) {
    return an.compositions[id]
  }
})(window.createjs, (window.AdobeAn = window.AdobeAn || {}))
var exportRoot
export default null

