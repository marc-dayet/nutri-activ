;(function(cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = []

  ;(lib.AnMovieClip = function() {
    this.currentSoundStreamInMovieclip = undefined
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
        if (index <= targetFrame && this.streamSoundSymbolsList[index] != undefined) {
          for (var i = 0; i < this.streamSoundSymbolsList[index].length; i++) {
            var sound = this.streamSoundSymbolsList[index][i]
            if (sound.endFrame > targetFrame) {
              var targetPosition = Math.abs(
                ((targetFrame - sound.startFrame) / lib.properties.fps) * 1000,
              )
              var instance = cjs.playSound(sound.id)
              var remainingLoop = 0
              if (sound.offset) {
                targetPosition = targetPosition + sound.offset
              } else if (sound.loop > 1) {
                var loop = targetPosition / instance.duration
                remainingLoop = Math.floor(sound.loop - loop)
                if (targetPosition == 0) {
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
          if (value.end == currentFrame) {
            key.instance.stop()
            if (this.currentSoundStreamInMovieclip == key) {
              this.currentSoundStreamInMovieclip = undefined
            }
            this.soundStreamDuration.delete(key)
          }
        }
      }
    }

    this.computeCurrentSoundStreamInstance = function(currentFrame) {
      if (this.currentSoundStreamInMovieclip == undefined) {
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
      if (this.currentSoundStreamInMovieclip != undefined) {
        var soundInstance = this.currentSoundStreamInMovieclip.instance
        if (soundInstance.position != 0) {
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

  ;(lib._1200pxMutualite_sociale_agricole_logosvg = function() {
    this.initialize(img._1200pxMutualite_sociale_agricole_logosvg)
  }).prototype = p = new cjs.Bitmap()
  p.nominalBounds = new cjs.Rectangle(0, 0, 1200, 558)

  ;(lib.home1 = function() {
    this.initialize(img.home1)
  }).prototype = p = new cjs.Bitmap()
  p.nominalBounds = new cjs.Rectangle(0, 0, 1920, 1080) // helper functions:

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

  ;(lib.tronc = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#779EED")
      .s()
      .p(
        "ABxEKQg2gagPgDIhGgBQgtgBgQgOIgggeQgLgPAEgQQAIgcABgQQACgdgMgTQgVgkgLggQgPglgBgjQgBgzAOg2QAPg/AYgFIAAAAQAwggBDgDQADgCADABQATAKAYAWQAiAfAaAnQAQAZAJA+QAFAjAHA/QALBKAVBzQAMBOgMAIQgDABgEAAQgPAAgjgQg",
      )
    this.shape.setTransform(17.5592, 28.2304)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.tronc, new cjs.Rectangle(0, 0, 35.2, 56.5), null)

  ;(lib.tetepeintre = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AALCAQgRgDgOgFQgQgHgMgMQgEgGADgJQAOgTgIgYIgCgGIgDgGQgDgEgGAAQgFAAgGADQACAHgDALQgDAEgGAAQgGAAgEgCQgDgIACgGIAHggQADgRABgPIADgOQABgJgCgFQgSgDgMgOQgIgKAAgLQAAgMAIgKQAPgQAPADIAvAKIAtAIQANACAOAGQALAFAOAJQALAFAKAMQAGAIAIAPQARAhgHAfQgEANgHALQgHAKgMAJQgIAHgDAOIgCAaQgEASgTAFQgIACgIAAQgKAAgKgCg",
      )
    this.shape.setTransform(11.8271, 13.0642)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FF9999")
      .s()
      .p(
        "AgfCAQgOgDgNgIQgIgGgGgJQgFgHgEgLQgMgnAEgtQADgoAPgsQAIgZAUgLIANgFIAMgEIAXAAQAOAAAKACQAJACAKAGIAQAMIABACQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQASASAFAeQAEAUgCAiQgEASgFAPQgHARgJAPIgBAEQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgKAPIgCACIgDABQgIAPgOAKQgNAKgPAEIgNABQgIAAgJgCg",
      )
    this.shape_1.setTransform(9.1975, 15.1521)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FF9999")
      .s()
      .p("Ag2AbQgDgLgDgFIAPgTIAWgWQAOgOAfgOQAHAVAKAVQAJAUANALIgIAEIgZAQQgVANglAMQgUgVgEgMg")
    this.shape_2.setTransform(14.875, 26.7)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.tetepeintre, new cjs.Rectangle(0.1, 0, 23.2, 32.7), null)

  ;(lib.teteoldy = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAPQgDgDAEgHQAEgGAGgDQATgLAFABQAEABgBAEQgBAEgJADQgLACgKAJQgFAGgCAAIAAAAg")
    this.shape.setTransform(6.5311, 17.2794, 1.2, 1.2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgbAGQgEgCAEgEQAEgEAbgCQAJgBAIADQAJADAAADQAAABgMgBQgQgCgOAFQgGACgDAAQgEAAgCgBg")
    this.shape_1.setTransform(15.1233, 13.9275, 1.2, 1.2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#CC8A66")
      .s()
      .p(
        "AgKAcQgGgFgBgaIgBgbQABAAAAAAQABgBAAABQAAAAABAAQAAABAAABIACATQAEAZAFAGQABADAIgBIAJgCIAFABQABABgGADIgOAEIgCAAQgFAAgDgDg",
      )
    this.shape_2.setTransform(12.0883, 19.2757, 1.2, 1.2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AghAPQgHgFAAgIQAAgFAEgGQAEgGAHAAQAGgBASAIQARAIAGABQAFAAAJgBQABAAABAAQABAAABAAQAAAAABAAQAAAAAAABQgBAJgVAFQgFABgJgDQgIgCgFAAIgMAEIgHABQgDAAgDgBg",
      )
    this.shape_3.setTransform(18.3139, 22.8951, 1.2, 1.2)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeAZQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBABgBQAIgDADgEQADgDAJgQQAGgQAGgDQAFgDAGABQAGABADAFQAFAHgCAHQgCAFgHABIgLAEQgEACgFAIQgEAHgEACQgFADgHABIgFAAQgFABgCgDg",
      )
    this.shape_4.setTransform(9.9259, 25.9082, 1.2, 1.2)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABVBGQALgPgMgYQgLgYgLAXQgDgcgTgXQgUgYgSADQgLACgRAUQgRATgLABQgDAAgQgIQgNgGgEAGQgFAIAEAbQAEAeAPAkQgbgagKgnQgDgOAEgKQAFgHAAgDQADgfAPgSQALgNAZgMQAbgNAaAAQAfAAASATQARgCAOANQAQAQAJAhQAHAcgNArQgGAWgIAPQABgPgFgJg",
      )
    this.shape_5.setTransform(13.3241, 11.2988, 1.2, 1.2)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#CC8A66")
      .s()
      .p(
        "AgNAGQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAPAGAIgNQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgGALgNAAg",
      )
    this.shape_6.setTransform(15.1207, 16.3856, 1.1997, 1.1997)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#CC8A66")
      .s()
      .p(
        "AgNAGQgBAAAAAAQAAAAAAgBQgBAAABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAKABQAJgBAEgIQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAgBABQAAAAAAAAQgGALgOAAIgIgBg",
      )
    this.shape_7.setTransform(7.3514, 19.2648, 1.1997, 1.1997)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#CC8A66")
      .s()
      .p(
        "AgPAJIgDgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBABABQAAAAABAAIAFACQAGABAGgDQALgEACgIQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAgBABQgDAJgNAGQgEACgFAAQgFAAgEgBg",
      )
    this.shape_8.setTransform(14.2541, 25.5031, 1.1997, 1.1997)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFBF8F")
      .s()
      .p(
        "AACBrQgggIgagpIgGgJQgYgogDgbIgFgZQgCgQAGgIQAEgGAOgFIAWgKIASgIQAVgIAPgCQBSgLAJB2QAEA+gfAaQgLAJgMAFQgOAFgOAAQgIAAgHgBg",
      )
    this.shape_9.setTransform(12.7892, 18.2661, 1.2, 1.2)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#DEA27D")
      .s()
      .p("AgFAkQgDgRgngNIgEgIIAlgOIAzgfIAPBCQACAHgLAIQgKAIgSAFIgIABQgKAAgCgMg")
    this.shape_10.setTransform(20.1163, 29.6748)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFBF8F")
      .s()
      .p("AgYAfQgRgEgBgIIACgRIAAgJIgIgRIBEgKIAFAPQAIASAMAHQAMAIgXAOQgOAHgRAAQgMAAgPgEg")
    this.shape_11.setTransform(19.4237, 31.0931)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.teteoldy, new cjs.Rectangle(0, 0, 26.7, 34.7), null)

  ;(lib.teteetclarinette = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#001443")
      .s()
      .p(
        "Ah9BKQASgIAGgGQACgMgKgkQgHgdAIgTQAJgOAWgEQAMgDAagBQAKgCALgJIATgPQAMgIAOAIIApAdIAlAdQAHgHAQgHQARgIAFgEQAAAGgDADIgJAEQgeAOhzAvQhYAmg2AdQAGgIASgHg",
      )
    this.shape.setTransform(17.3224, 10.2775, 1.1499, 1.1499)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFD878")
      .s()
      .p(
        "AAMCXQgDgZgDgmIgDg/QAAhogZh2IAIgCIAIgBQAGAAgDADQgHADgJAAQAJAaAEAiIAGA/QAEAlAEBKQADBKAEAlIAHAvIABADg",
      )
    this.shape_1.setTransform(39.4595, 55.9666, 1.1495, 1.1495)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FCB259")
      .s()
      .p("AgLATQgJgFgCgJQgDgKAGgJQAFgJAMAAQAHAAAHAFQAIAFACAJQADAJgFAJQgFAKgMAAQgHAAgHgFg")
    this.shape_2.setTransform(61.7062, 85.437, 1.1495, 1.1495)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FCB259")
      .s()
      .p("AgLAUQgJgGgCgJQgDgJAGgJQAFgKAMAAQAHAAAHAFQAIAFADAJQACAKgFAJQgFAJgMAAQgHAAgHgEg")
    this.shape_3.setTransform(60.2238, 76.4709, 1.1495, 1.1495)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FCB259")
      .s()
      .p("AgMANQgDgHAAgLQAAgLANAAQACADAIABQAGADACAJQgCABgBAFIgDAHQgIADgEAAQgGAAgEgDg")
    this.shape_4.setTransform(48.3394, 73.7408, 1.1495, 1.1495)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FCB259")
      .s()
      .p("AgFAQQgFgDgDgFQgEgIACgGQADgFAGgDQAGgEAHADQAFAFAFAIIAAAJQgDAFgGADQgEACgEAAIgFgBg")
    this.shape_5.setTransform(45.3089, 59.9467, 1.1495, 1.1495)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FCB259")
      .s()
      .p("AgDAGQgDgDgBgDQgCgEACgCIAHgDQAEAAAFAJIAAAGQgEADgCABIAAAAQgDAAgDgEg")
    this.shape_6.setTransform(58.102, 81.5603, 1.1495, 1.1495)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FCB259")
      .s()
      .p("AgJACIABgIQACgEAGAAQAEAAAFAJQACACgCAEQgCAEgEACQgMAAAAgJg")
    this.shape_7.setTransform(49.8849, 80.9539, 1.1495, 1.1495)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FCB259")
      .s()
      .p("AgFAKQgHgJAEgGQAGgIAJAEQADAEAAAFIAAAGQgEAFgGAAIgFgBg")
    this.shape_8.setTransform(46.7615, 66.6294, 1.1495, 1.1495)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FCB259")
      .s()
      .p("AgEAIQgFgGgBgCQAAgFALgGQAFAAAFAKIAAAJQgEAEgEAAQgDAAgEgEg")
    this.shape_9.setTransform(43.7403, 52.3744, 1.1495, 1.1495)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFD878")
      .s()
      .p("AgXADIAWgKQAMgFAKAAIACACIABAEIgDADQgZANgQADQgDgHAAgDg")
    this.shape_10.setTransform(26.5563, 27.2433, 1.1495, 1.1495)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FCB259")
      .s()
      .p("AAcA6Igqg2QgYgdgKgaQgEgDAHgFQAHgFAJAGIAqA1QAXAdAPAbIgHAHQgEAEgEAAQgEAAgEgEg")
    this.shape_11.setTransform(60.7158, 62.1926, 1.1495, 1.1495)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFD878")
      .s()
      .p("AgUAdQgXgWgNgJQAXgdADgaIAHgEQAVAPAVAhQAYAkAOAMIAAAHQgRAEgHACQgMAFgGAJQgNgKgWgXg")
    this.shape_12.setTransform(58.9149, 63.2803, 1.1495, 1.1495)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFD878")
      .s()
      .p(
        "ABAFDQg5gRgPhIQgIhXgHgmQgDiUgDguQgHhtgThXIgGgQQgEgJgGgEQgSgJgXAGQgPADgZANQAZgXAcgDQAhgEARAaQAcBUASB7IAcDVIANBCQAIAmAIAZQACAJAGAEQAGADAFgDQAKgIAAgFQgahbgGgtQgJhQAzgpQADAGADAJQAjAwALAUQgFAAgDAFQgCAEAAAEQgEAdAHAsIANBIQAJAigcAiQgZAZgbAAQgIAAgIgCg",
      )
    this.shape_13.setTransform(44.7173, 61.5259, 1.1495, 1.1495)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AgNAEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAIgDQAIgDAIABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAQgHgBgIACIgHAEIgBABIgCgCg",
      )
    this.shape_14.setTransform(27.8788, 16.2524, 1.1499, 1.1499)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AgSAFQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQADgCAJgDQAMgEALAGQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBABIgCAAQgKgFgLADIgKAFIgBABIgCgBg",
      )
    this.shape_15.setTransform(19.3457, 17.0167, 1.1499, 1.1499)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#E56E5E")
      .s()
      .p(
        "AATAWQgMgCgMgHQgLgFgMgIIgKgKIgGgLIATARQALAIALAFQAMAGALACQAJABAEgBIAMgCQgFAEgHADIgFAAIgJAAg",
      )
    this.shape_16.setTransform(18.8233, 30.7841, 1.1497, 1.1497)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#E56E5E")
      .s()
      .p("AAGAXIAAgCIAAgBIgFgMQgJgZgCgPQAJAOAJAXIAEAJIACAHQgBAEgEADIgGACIgPADg")
    this.shape_17.setTransform(25.1994, 21.4462, 1.1499, 1.1499)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#F48F7D")
      .s()
      .p("AgOATQgHgHAAgLQgBgLAHgHQAGgIAJgBQAJAAAGAIQAGAHABALQABAKgHAIQgGAIgJABIgBAAQgIAAgGgIg")
    this.shape_18.setTransform(12.701, 24.7768, 1.1497, 1.1497)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#001443")
      .s()
      .p(
        "AgEAAQABgGADABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAGgFAAQgEgBAAgFg",
      )
    this.shape_19.setTransform(27.5913, 18.938, 1.1499, 1.1499)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#001443")
      .s()
      .p("AgEAAQAAgFAEAAQAFAAAAAFQAAAFgEABQgFAAAAgGg")
    this.shape_20.setTransform(20.2835, 20.2101, 1.1499, 1.1499)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgtBOQgVgVgBgfIgCgxQAAgOAIgMQAIgMANgGIBBgaQATgJASAPQAFAEABANIACBIQABAfgMAYQgRAognAAIgDAAQgaAAgTgTg",
      )
    this.shape_21.setTransform(21.0682, 21.9258, 1.1497, 1.1497)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AAOBxQgIgCgVgNQgTgLgQgEIgOgQIgCAAQgOgCgKgOQgHgHAAgNQgBgQgBgFQgFgTABgKQABgHAJgLQALgLACgGIACgMQADgLAHgGQAFgEALgDQAXgGANgGQARgJAKgCQAOgDAPAHIAhAPQAHADAHAGQAIAJADAGQADAHAAALIgCAPQAAAFACAFIADAKQACAKgDATQgEAQgQAeQgUAkgRAMQgMAJgLAAIgJgCg",
      )
    this.shape_22.setTransform(18.3502, 16.5056, 1.1499, 1.1499)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgEBPQgRgCgKgNQgLgOACgRIABhhQABgGAFgFQAEgEAGABIA1AGQAFABAEAFQADAFgBAHIgBBhQgCARgNAKQgLAJgOAAIgEAAg",
      )
    this.shape_23.setTransform(17.8342, 33.1908, 1.1499, 1.1499)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.teteetclarinette,
    new cjs.Rectangle(0, 0, 66.6, 98.9),
    null,
  )

  ;(lib.ronde = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAUIgDgEIgQAEIgBgIIANgEQgCgHAEgFQAHgKAOgJQANgHAGgBQAMgCAMAFQALAEAEAIIAGgBQAHgCABAFIAAAFIgMACIAAAEQgBASgPAJQgMAIgQABIgBAAQgTAAgMgNg",
      )
    this.shape.setTransform(5.4583, 3.2473)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.ronde, new cjs.Rectangle(0, 0, 10.9, 6.5), null)

  ;(lib.roii = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#51495B")
      .s()
      .p(
        "AgVAnIAAgEQgBAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQALgHAEgOQADgIgBgDQAAgEgFgLQgFgLACgEQACgEgBgCIAEAAIAAgFIASAAIAAAFIAFAAIAAAHQABADgBAEIgHAMQgHALAFARQABAFAGAEIAJAIIAAAHIgSACQgOAAgMgEg",
      )
    this.shape.setTransform(2.2417, 4.2563)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.roii, new cjs.Rectangle(0, 0, 4.5, 8.5), null)

  ;(lib.pull = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AAEAnQgPgIgZggIgWgeIATgKIALAcQANAdANALQANALAVgPQAKgIAJgLQACgBAGAIQgHAKgLAJQgOAMgMAAQgGAAgFgDg",
      )
    this.shape.setTransform(14.4565, 6.4522, 1.1499, 1.1499)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "ABNAhQgHgYgdgFIg4gCQgZgBgagiQgSgYgKgdIAkgOIAQAZQAUAcAWARQAUAQAcAOQAZAMAEADQANAOAEAlQACATgBAQg",
      )
    this.shape_1.setTransform(12.3195, 16.2233, 1.1499, 1.1499)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABNCBIgWgLQADgdAAgdQAAg8gMgEQgEgDgoAAQgqAAgogPQgMgEgQgyIgOgwIBbgxQAIAKAJAQQAGALAIAHQANAMAMgKQAHgGADgHIAsAsIgMAmQgEASAEAIQADAHAQAVQAOAVAMA1QAMAzgCAXIgCAeQgSgdgZgQg",
      )
    this.shape_2.setTransform(14.0992, 19.9894, 1.1499, 1.1499)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.pull, new cjs.Rectangle(0, 0, 28.2, 40), null)

  ;(lib.mainmain = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FC5810")
      .s()
      .p("AgngOQgFgKADgKQADgLAJgGQAJgGAMACQAKADAGAJIAjA0Ig4Avg")
    this.shape.setTransform(7.833, 15.7588, 1.1499, 1.1499)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AADAUIgPgfQAAgHADgBIABgDQACAAAGAEQAIAFACAKIACATQABABAAAAQAAAAgBABQAAAAAAABQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAg",
      )
    this.shape_1.setTransform(3.9788, 2.9227, 1.1493, 1.1493)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgEAEAAQADgBAAAEIAEAeQAAAEgEAAIgBAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBg")
    this.shape_2.setTransform(2.9099, 2.3405, 1.1493, 1.1493)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgEAEAAQADgBAAAEIAEAeQAAAEgEAAIgBAAQgBAAAAAAQAAAAAAAAQAAgBgBgBQAAAAAAgBg")
    this.shape_3.setTransform(2.0479, 2.2245, 1.1493, 1.1493)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgDAEgCQACABABADIAEAeQAAAEgEAAQgDAAAAgDg")
    this.shape_4.setTransform(0.8986, 2.7129, 1.1493, 1.1493)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F48F7D")
      .s()
      .p("AAEAYQgFgCgEgDIgJgJQgHgIABgJQAAgHAJgFQAHgDAHgBQAEgBACABQAEACADAGQADAEACARQADATgNAAIgHgBg")
    this.shape_5.setTransform(3.2277, 5.402, 1.1495, 1.1495)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F48F7D")
      .s()
      .p("AAEAKIgNgOQgDgCADgDQADgDADADIANAOQADACgDADIgDACIgDgCg")
    this.shape_6.setTransform(1.229, 6.1178, 1.1493, 1.1493)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#F48F7D")
      .s()
      .p("AgegiIAagHIAiBEIgcAPg")
    this.shape_7.setTransform(5.8217, 11.1497, 1.1497, 1.1497)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.mainmain, new cjs.Rectangle(0, 0, 12.8, 22.3), null)

  ;(lib.mainnoire = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F7E4CA")
      .s()
      .p("AAJBpQgggKgZg8QgYg5AAg8IBOgaIAgBCQAhBGABAaQACAfgPAOQgKAKgRAAQgKAAgNgEg")
    this.shape.setTransform(10.6114, 29.1592)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    // Calque_1
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#BC8646")
      .s()
      .p(
        "AgRAYIgKgNQgFgIAAgHIABgBQAAgBAAAAQABAAAAAAQABAAABABQAAAAABABQgJgLAAgHIABgDIADAAIAFAFQgFgGgBgLIABgCIABgBQADAAADADQgEgGgBgFIAAgFQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAIADABQAEADAEAIQAPAXARAEIgBggQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIADADQAHANACAXIAGA1QgYAFgVALQgDgXgGgJg",
      )
    this.shape_1.setTransform(5.4411, 14.0914, 1.2499, 1.2499)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#416897")
      .s()
      .p("AgFAvIgbhgIAmAAIAbBjg")
    this.shape_2.setTransform(4.0732, 6.2112, 1.2498, 1.2498)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_2}, {t: this.shape_1}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.mainnoire, new cjs.Rectangle(0, 0, 17.9, 40), null)

  ;(lib.logomsa = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib._1200pxMutualite_sociale_agricole_logosvg()
    this.instance.setTransform(52.05, 53.95)

    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("Ehn7Az5MAAAhnxMDP3AAAMAAABnxg")
    this.shape.setTransform(665.175, 332.075)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}, {t: this.instance}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.logomsa, new cjs.Rectangle(0, 0, 1330.4, 664.2), null)

  ;(lib.jambettasses = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#8060D4")
      .s()
      .p("AAkghQAugBB0APQg0gFhwADQgUABhkAZIhvAdQDDhBAmgCg")
    this.shape.setTransform(44.3727, 41.0626, 1.2, 1.2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#8060D4")
      .s()
      .p(
        "ABkA6QhbgZgagQIgegRQgTgHgLADQg/ARgwAKQhzAZhYACQgFgLgDgPQgFgeALgWIAJgDQgRAUARAMQAOAKAiAEQAzAFB+gcQAkgIASgMQALgGATgQQAOgJAJARIAPAbQAJAHAUAFIAeAGQBcAXBJAIQAOADANAAQAqAAAQgEQAbgFADgSQADgPgtgOIgugLIADg5QA2ATCBA3QAEAXgLAZQgVAyhNACIgLABQhLAAhtgeg",
      )
    this.shape_1.setTransform(57.9337, 51.9067, 1.2, 1.2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#8060D4")
      .s()
      .p(
        "ABkBMQhbgZgagPIgegRQgTgJgLADQg/ASgwALQhzAZhYABQgFgLgDgPQgFgeALgVIBRgcIACAAQDDhCAngCQAvgBB5APIAEABQBTAKAYAHIAOAFQA2ATCBA1QAEAZgLAZQgVAyhNACIgLAAQhLAAhtgeg",
      )
    this.shape_2.setTransform(57.9337, 49.713, 1.2, 1.2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#6840C4")
      .s()
      .p(
        "ABiBMQhYgZgagPIgegRQgSgJgLADQg8ASgxALQhwAZhWABQgFgLgDgPQgFgeALgVICJgvQCPgwAegBQAkAABnALQBpAMAdAJQAmAMCaBBIABAQQAAASgHAQQgVAyhLACIgLAAQhKAAhqgeg",
      )
    this.shape_3.setTransform(58.9783, 43.6558, 1.2, 1.2)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFBF8F")
      .s()
      .p(
        "AggBQQgKgPADgNIANgjQAHgTgBgXIgCgbQACgLAHgNQAJgQAIAAQADAAADADQAJAHgEAVIgHAjQAAAMAKAaIAQAmQAGAPAAARQgCgBgHACIgFACQgNAGgOACIgEAAQgTAAgIgNg",
      )
    this.shape_4.setTransform(7.611, 46.5345, 1.2, 1.2)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#DEA27D")
      .s()
      .p(
        "AggBQQgKgPADgNIANgjQAHgTgBgXIgCgbQADgOAJgOQAKgRAKAIQAJAHgEAWIgHAiQAAANAKAZIAQAmQAGAPAAARQgEgCgKAFQgOAHgNABIgEAAQgTAAgIgNg",
      )
    this.shape_5.setTransform(11.3908, 44.674, 1.2, 1.2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.jambettasses,
    new cjs.Rectangle(2.8, 31, 103.3, 31.4),
    null,
  )

  ;(lib.Path = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#4C4C4C")
      .s()
      .p(
        "A2GF3QkTgJl0gkQl8glk3gyQlXg3iQg1Qijg8CCgwQBDgZCXhAQB8g1BWgbQEEhTHBgXQHBgXEOgYQCmgOFcgkQGNglKEgGQMagILYAzQM5A6HYBfQHpBiiYBZQhvBAhaAmQiWBAjGAwQoVB/u5AZQwWAbo3ACIhlAAQm/AAoBgPg",
      )
    this.shape.setTransform(333.0836, 39.0372)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 666.2, 78.1), null)

  ;(lib.Path_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AqPBGQmpgTiIgdQgSgFgBgSQgCgVApgGQA2gIDMgkQBbgQCcALQBhAHEFAZIEdAeQEbAVDLgaQB7gQEQABQEoABBiAYQASAFgQAZQgRAbgiAGQh7AYooAEQo0AAhMABIg7ABQilAAkmgNg",
      )
    this.shape.setTransform(123.6863, 8.2913)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0.1, 0.1, 247.3, 16.5), null)

  ;(lib.Path_2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AjCBSQjEgCj5gFQgwAAgigPQghgOgCgVQgFgzCjgZQFIgyHuAaQDTALCPAXQCXAXAVAbQAkAxiHAJQjJAEh3AHQhdAGi6AAQhqAAiMgCg",
      )
    this.shape_1.setTransform(75.7226, 8.3561)

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Path_2,
    new cjs.Rectangle(0, -0.1, 151.5, 16.900000000000002),
    null,
  )

  ;(lib.Path_84 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AnSBPQkvgVhhgiQgNgFgBgVQgBgYAdgHQAygMCGglQBBgTBvANQBFAHC6AdQBkANBnADQDHAICTgfQBYgSDCABQDTABBFAcQANAFgMAeQgMAegYAHQhaAbmHAWQjpAOjeAGIgnAAQh3AAjTgPg",
      )
    this.shape.setTransform(88.0863, 9.4699)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Path_84,
    new cjs.Rectangle(0, 0.1, 176.2, 18.799999999999997),
    null,
  )

  ;(lib.Path_26 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AhMA2IiwgFQgtAAgCggQgCgiBAgQQCCghDEARQC/ARARAmQAOAgg1AGQhQADgvAFQgkAEhHAAIhkgCg")
    this.shape.setTransform(30, 5.523)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0, 0, 60, 11.1), null)

  ;(lib.Path_23 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "Ah4BSQh6gCiagFQgeAAgVgPQgUgOgBgVQgEgzBmgZQDLgyExAaQCDALBZAXQBdAXANAbQAXAxhUAJQh9AEhKAHQg5AGhzAAQhCAAhWgCg",
      )
    this.shape.setTransform(46.958, 8.3561)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Path_23,
    new cjs.Rectangle(0.1, -0.1, 93.80000000000001, 16.900000000000002),
    null,
  )

  ;(lib.eaueau = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape.setTransform(-195.1114, -135.804)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_1.setTransform(-195.1114, -135.804)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_2.setTransform(-201.1943, -135.7415)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_3.setTransform(-203.025, -138.2694)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.shape}]}, 4)
        .to({state: [{t: this.shape_1}]}, 1)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .wait(1),
    )

    // Calque_1
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#93DBF8")
      .s()
      .p(
        "Ag5Q1IgJAAIoIAAQBZgQBigIIAKAAIAAgKIAKAAQA1AHAcgPQAEgCAFAAIBQAAIAKAAQBdAHBEgQIAJgBIAAgKIAAgoIAAgKIAAgKQAFgFAGgDQAEgCAFAAIAAgKIA7AAIAKAAQAbgCALAOQACADAAAFQARgBgGAVIgBAKQAFAFADAGQACAEAAAFIAAAKQAFAAADACQACADAAAFQAZAAAYAFQABAAAAAFQAjAAAjAFIAAAFIAeAAIAKAAIAoAAIAKAAIAAgKIAAgeIAAgKIAAgKQAhglAHAvIAAAKQARADgGAbIgBAKQgBAQAWgFIAJgBIAKAAIAKAAQAcACAXAGQAEACAFAAQAUAAATAEQABABAAAFQAYAAAXAEgAH0LdQgFAAAAgBQgFgYAAgZIAKAAIAAgKQAAgogegKIAAgKIgFgBQgFgnAAgoIAKAAIAAgKIAAgKQALgKASAEQABABAAAFQARARgGArIgBAKIAAAKIAAAKQADAbAaAHQABABAAAFIAABQIAAAKQAAAFgCAEQgDAGgFAFIgKABIgIABQgRAAAFgWgAE2K/IAAgKIAAgUIAAgKIgKABQgbAGgDgRQgFAAgCgDQgIgHgFgKQARABgGgWIgBgJIgFgBQgFgiAAgjIAAgKIAAgKQAcgSAUAdQACAEAAAFQAhAHgMA1IgBAKQAYAKgVANQgDACAAAFIAAAKIAAAKQAbgHADARIAAAKQASAWgMAvQgBABgFAAQAAAFgBAAQgIABgHAAQghABAJgvgAjlLTQgFAAgBgCQgEgIAAgKIAAgKIAAgeIAKAAIAAgKIAKAAIAAgKIAAh4IAKAAIAAgKIAAgKIAoAAIAKAAQAPAKAAAUIgFAAIAAAoIAAAKQAAAFgCACQgIAIgKAFIAAAoIAAAKIABAKQAGAggRAIQAAAFgCADQgMAMgYAAIgMAAgAgdKDIAAgKIAAjSQgFAAgCgDQgDgCAAgFQgFAAgEACQgGADgFAFIAAAUIAAAKQAYAKgVANQgDACAAAFQARAIgLAeQgBACgFAAQAAAFgBAAQgpAMAMgvIAAgKIAAgUIAAgKQgFAAgCgDQgDgCAAgFQgFAAgDgCQgTgLAHglIAAgKQAAgUgKgKQgFAAgEACQgGADgFAFQAMANgGAaQgBABgFAAQAAAFgBAAQgyALALg4QAFgFADgGQACgEAAgFIAAgKIAAgUQARABgCgVIAFAAIAAgKIAAgKQARgDgGgbIgBgKIAAgKQAgACAHAcIABAKIAAAoIAAAKQAFAAADACQACADAAAFQAFAAADgDQACgCAAgFIAAgKQAFgFAGgDQAEgCAFAAIAAgKQARABgCgVIAFAAIAAgKQAKAAAIgEQACgBAAgFIABgKQAGgbgRgDIgKAAIAAAKQAAAFgCAEQgDAGgFAFQAAAFgCADQgQAYgMggIAAgKQgFAAAAgBQgFgYAAgZIAAgKIgKAAQAAAFgCAEQgDAGgFAFQAAAFgBAAQguAMAHgvQARgDgGgbIgBgKIAAgKQAKgFALgEQAEgBAFAAIAAgKIAAhGIAKAAIAAgKQAeAEgFghIAFAAIABgKQAGgggRgIIgKAAIgKAAQAAAFgCACQgDADgFAAIAAAKIAAAKIAFAAQgMAvgXglIAAgKIAAgeIgFgBQgFgnAAgoIAAgKIAAgKIAAgKIAAhGIAKAAIAAgKIAKAAIAAgKQALAJASAFQABABAAAFIAAAeIAAAKQAUAPAWANQADACAFAAQARABgCgVIAFAAIAAgKQAFAAADgDQACgCAAgFIAAgKIAAhGIAKAAIAAgKIAAgKIAKAAIAAgKQAFgFAFgDQAEgCAFAAIAAgKQAkgTAWAVQACADAAAFQARADADARIAAAKQAfALAdgTIAAgCIADAAIAJgIQADgCAFAAQAWgGgBAQIgBAKQARgBgGAVIgBAKQAAAFgCAEQgDAGgFAFIgKgBQghgDgRAOIAAAKQARANgGAlIgBAKQAwgSAagoQABgCAFAAIAAgKQAggbAHAlIABAKQAUAeAJAoIABAKQAAAFgCACQgNANgPAKIAAAKIAAAKIAAAeIAAAKIgBAJQgSBEgzhDIAAgKIAAgoIgKAAIgKAAIgUAAIAAAeIAAAKQAFAFADAGQACAEAAAFQARAIgGAgIgBAJIAAAKQAAAFADACQApAuhAAHQAAAFgCABQgIAEgKAAIAAAKIABAKQAHA0gSAcQAAAFgCACQgDADgFAAIAAAKIAAA8IAAAKIAAAKQARgDADgRIAAgKIAAgKIAAgKIAKAAIAAgKQAFgFAGgDQAEgCAFAAIAAgKIAAgKIAAg8IAAgKIAAgKIAAgKQA9gIgaB1QAAABgFAAQAAAFgCACQgIAIgKAFQgHAlAPAPQACADAAAFQAKgFAIgIQACgCAAgFIAAgKIAAgKIAKAAIAAgKQAxgvABBNIAAAKQARARgPAHQgCABAAAFIAABQIAAAKQAAAFgCABQgIAEgKAAQAAAFgCABQgIAEgKAAIAAAKQAAAFgCACQgIAIgKAFQAAAFgCACQgDADgFAAIAAAKQAEBogiheIAAgKIAAgyQgFAAgEgCQgGgDgFgFQAAAFgCACQgDADgFAAIAAAUIAAAKIAFAAQgPAtgUgjQgFAAgBgCQgQgkgmAcQAAAFgCACQgDADgFAAQAAAFgCACQgIAIgKAFIAABkIAAAKQARADgOATQgDADAAAFIAAAKIAAAKQAAAFgCACQgKALgJAAQgLAAgHgSgAgxBTIAAAeIAAAKIAKAAIAKAAQAAgFACgFQAKgagMgOIgKAAIgKAAIAAAKgAgTANQgGAaAYgKQABgBAAgFIAAgKQAAgFgBgBQgIgEgKAAIAAAKgAAKiIIAAAKIAAAKQAFAFAGADQAEACAFAAIABgKQAFgWgRAAIgJACgAAKkUIAAAUIAAAKQgHAbARACIAKABIAAgKIAKAAIAAgKIAAgKIAKAAIAKAAIAAgKIAAgeIgKgBIgGAAQgWAAgMALgAG4GxIAAgKIAAgeQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAAAgBQgFgdAAgeIAKAAIAAgKIAAgKIAAgUQAPAAAOAEQABABAAAFQARgBgGAVIgBAKIAAAeIAAAKQAKAPASAJQACABAAAFIAAAKIAAAKQAAAFgBAEQgIAVgMAAQgIAAgLgKgAE2GnIAAgKIAAgyIAAgKQAzgYgKBUIgBAKQAAAFgCADQgKALgJAAQgLAAgIgTgADcBxIAKAAIAAgKIAKAAIAKAAIAAgKIAAgKIgBgKIgJgoQAFAAADgDQACgCAAgFIAAgKQAUgRASATQACADAAAFQARANgLAjQgBACgFAAIAAAKQgDAWgbgCIAAAoIAAAKIAFAAQgSAkgKAAQgQAAgBhMgAoRCPQAFgFAGgDQAEgCAFAAQAbgCgCAVIgFABQAAAFgBAAQgKADgHAAQgTAAgDgSgAoHBdIAAgKIAAgKQALgKASAEQABABAAAFIAFAAQgBAegOAAQgIAAgMgKgAizBTQgFAAAAgBQgFgdAAgeIAKAAIAAgKIAAgKQAvgCgGA0IgBAKQAAAFgCAEQgDAGgFAFQAAAFgCADQgHAKgGAAQgIAAgHgSgAHWiSQAAgFgCgEQgDgGgFgFQgFAAgCgDQgNgMgKgPQAZglAXAmQACAEAAAFQAKAAAIAEQACABAAAFQAFAAACACQAjA6gSAAQgNAAgpgegAhZkUQgFAAAAgBQgFgYAAgZIAKAAIAAgKQAUgSASAUQACADAAAFQARgBgLATQgBACgFAAIAAAKQgFAegOAAQgJAAgMgKgAAenIIgKABQgfAGgIgRQgFAAAAgBQgFgTAAgUIAAgKIgKAAIgoAAQgFAAAAgCQgFgNAAgPIAAgKIAAgUQgFAAAAgBQgFgdAAgeIAKAAIAAgKIAKAAQAtgFgOA3IgBAKIAKAAIAKAAIAAgKIAAgKQAFgFADgGQACgEAAgFIAAgKIAAgKQAPAAANgFQABAAAAgFIAAgKQAFgFAGgDQAEgCAFAAQAUAAATAEQABABAAAFQAKAKAKAFIAAgFIAAgKIAAgUQAPgeAXAWQACADAAAFQAFAAADACQACADAAAFIAAAyIAAAKQARADADARIAAAKIAAAKQAAAogygKQgFAAgEACQgGADgFAFQAAAFgCAEQgDAGgFAFIAAAoIAAAKQAAAFgCACQgNANgNAAQgLAAgLgKgAk1n6IAAgKIAAgoIAAgKIAAgKQASglAWgMIAAgBIABABQANgIAQACIAAAFQARANgLAjQgBACgFAAQAAAFgBAEQgHAWgWAJIAAAKQgCAogNAAQgKAAgPgUgADSpAIAKAAIAAgKIAKAAIAKAAIAAgKQAKgZAnAJQABABAAAFQARgBgLATQgBACgFAAQAAAFgCACQgDADgFAAQAAAFgBAEQgJAVgKAUQAAAFgCABQgMAFgJAAQgeAAADg9gAiposQgFAAAAgCQgFgNAAgPQgFAAgBgCQgEgIAAgKQgFAAgCgDQgIgHgFgKIAAgKIAAgeQAPAAAOAEQABABAAAFQAFAAADACQACADAAAFQAKAFAIAHQACADAAAFQAFAFADAGQACAEAAAFIAAAeIAAAKQAAAFgCADQgJALgIAAQgGAAgFgJgAg7tsQAAgFgCgEQgDgGgFgFQARABgGgWIgBgJQAAgFgCgEQgDgGgFgFQgFAAgDgDQgLgIgBgTQAVgPAmAJQABABAAAFQARgBgGAVIgBAKQARAIgGAgIgBAKQAAAFgCAEQgDAGgFAFQAAAFgBAAQgNAFgIAAQgNAAgFgKgACCt2QgFAAAAgBQgFgTAAgUIAAgKIAAgoIAKAAIAAgKQAqgHADAkIAFABQARgBgGAVIgBAKQAAAFgCACQgIAIgKAFQAAAFgBAEQgIAVgMAAQgIAAgLgKgAAUvuIgKAAQgFAAAAgBQgFgYAAgZIAKAAIAAgKQArgXAVAeQABADAFAAQAuAUgmAbQgDADgFAAQAAAFgBAAQgRAFgNAAQgSAAgLgKg",
      )
    this.shape_4.setTransform(-203.025, -138.2694)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_5.setTransform(-201.1943, -135.7415)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_6.setTransform(-195.1114, -135.804)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#93DBF8")
      .s()
      .p(
        "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",
      )
    this.shape_7.setTransform(-195.1114, -135.804)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_4}]})
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: []}, 1)
        .wait(4),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-272.2, -246, 154.2, 215.6)

  ;(lib.crochedouble = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AALA0QgJgCgDgFQgFgGAAgGQAAgIAGgBQAGgBAFACQAFABAEAEIABAEQABAAAAAAQABABAAgBQABAAAAAAQABgBAAgBQADgFASglQgFgGgUgKIgSgJQgUAvgHAGQgEAFgIgCQgKgBgFgGQgEgFAAgHQAAgHAHAAQAGgBAGABQADABAFAEIACADQAAAAAAAAQABABAAgBQABAAAAAAQABgBAAAAIANgZIAKgWIABgDQADgEACABQAFABASAKQAXAMADAIQACAAgCAIIgCAIQgXAugFAHQgDADgGAAIgFAAg",
      )
    this.shape.setTransform(5.6, 5.2276)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.crochedouble, new cjs.Rectangle(0, 0, 11.2, 10.5), null)

  ;(lib.croche = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgKBEQgLgCgHgIQgIgIAHgIQAHgIAHgDQAGgDAJABIAFABQAEABgBgGIgLgpIgKgkIgBgGQAAgHADgBQAFgDAKAEQAQAGANAQQgJgFgMABIgLACIAMApQALApAAAIQAAAKgMAHQgKAGgIAAIgEAAg",
      )
    this.shape.setTransform(3.331, 6.8152)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.croche, new cjs.Rectangle(0, 0, 6.7, 13.7), null)

  ;(lib.bulle3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBlQgDgDAAgEQAAgFADgDQAEgEAEAAQAEAAADAEQADADAAAGQAAAJgMAAQgDAAgDgDgAgCA0QgDgHAAgNIABgSIAAgUIAAgsIgBgrQAAgEAEgDQACgDAEAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQACACAAADQAAAYgDAnQgDArAAATIAAAVIgBAIQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgCAAgCgHg",
      )
    this.shape.setTransform(129.975, 34.225)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AApBOIAAgRIAAgRIgCgjIgDggIABgQIABgQIgJAkQgIAfgHAbQgIAagGAAQgDAAgEgDQgDgDAAgFQAAgMgJglQgKglgHgYIgBAdIgDA+IgBAiIAAADIAAAFQAAAEgCACQgBADgFAAQgDgBgDgCQgCgBAAgDQAAgbAEg1QAEg2AAgaIgBgGQAAgDADgBQACgCAFAAQADAAAJAYQAKAaAJAfQAJAeABAOIAEgNIACgGQAIgkAJgeQAFgSAEgKQAFgLAEAAQADAAAEACQADABAAADIABA6IACA2IAAANIgBAOIABAKIABAJIABAEIAAACIABAEQAAAFgDADQgDAEgDAAQgIAAAAgQg",
      )
    this.shape_1.setTransform(115, 36.05)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBBUQABgFAAgoIAAgUIgBgHIAAgMIAAgFIgKgZIgMgeQgEgOAAgFIAAgBIAFgEQAFAAAFALIAKAcIADATIAFgUQADgQAEgNQAFgOAEAAQADAAACACIABAEQABAOgIAYQgHAbgBAMIAABOQAAARgJAAQgEABgBgGg",
      )
    this.shape_2.setTransform(103.45, 35.45)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRBhQgHgGgHgQQgEgJgCgTQgCgPAAgNIgBgLIAAgIIAAgLIABgbQACgNADgOQADgOAHgKQAGgKAMgEQAGgCAEAAQALAAAAAHQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgCACgDAAIgEgBIgDAAQgEAAgEADQgEACgEAHQgFAMgDAPQgCATAAANIgBAYIAAAHIAAAJQgBAOACANQABAPAFALQAEANAJAFQAFACAFAAQAMABAIgMQAAgJgCgIQgBgKgBgDIgBABIgDAAIgHABQgIgBAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQADgBAEgBQAHgCAGAAQAFAAADAEQAEAEAAAGQAAAJACAOQADAQgBAIQABADgCACQgCADgCAAQgIgBgBgFIgGACQgJAFgFAAQgNAAgKgJg",
      )
    this.shape_3.setTransform(95.6, 34.15)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBXQgCgCAAgEQgBgJgCgSIgBgGIgZgEIgFAZQgBAMgEAFQgBACgEAAQgDAAgDgCQgCgCAAgCIAAgCIAAgBQAShEAJhAIAAgEIABgIIABgPQABgGADgCIAIAAQADAAACABQADABABAEQgBAUAGAnQAFAoAAAQIACAIIAAAIIADARIADAQIAAAAQgBAGgEACQgFgBgEgCgAgJAiQAEADASACIgBgKQAAgYgEgkIgDgbQgKA9gEAfg",
      )
    this.shape_4.setTransform(157.7, 2.8)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBWQgEADgFAAQgDAAgCgDQgCgDAAgDIACg7IABg6IAAgCIgBgYQAAgZAJAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIgBAKIgBAKIAAAgIAAAfIgBALIAAADIAAAVIgBAVQAAASAJAAIABAAIADAAIAGAAQAOAAAAAIQAAACgCACIgGACQgJgDgOAAg",
      )
    this.shape_5.setTransform(150.975, 2.975)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAWBrQgEgCAAgFQAAgIgCgSIgBgGIgZgEIgEAZQgCAMgEAFQgCACgDAAQgDAAgCgCQgDgCgBgDIABgBIABgBQARhEAJhBIAAgDIABgIIACgPQAAgGACgDIAIAAQAEAAADACQACABAAAEQABAUAFAnQAFAoAAAQIABAIIACAIIADAQIABAQIAAABQAAAGgDABQgHAAgCgCgAgJA2QAEADASABIAAgJQAAgYgFgkIgCgbQgLA9gEAfgAAChVIgWgIQgKgEAAgBQAAgDADgEQADgDADAAIAMAFIATAMQAJAFAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgPgDg",
      )
    this.shape_6.setTransform(137.95, 0.825)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_7.setTransform(125.825, 2.975)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBXQgDgDAAgDIADgFIAFABIAGAAQAEAAADgDQAEgFACgGQADgNAAgKQAAgRgKgUIgDgEIgIgPIgGgPQgDgKAAgKQAAgNAFgMQADgGAFgEQAFgDAFAAQAEAAAFADQAEACAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDABgCgCQgFAAgDAKQgDAJAAAHQAAAHACAIQACAIAEAGIAFAKIAJARQAEAHACAKQACAKAAAKQAAAQgHAPQgEAHgGAEQgGAFgIAAIAAABQgFgBgEgDg",
      )
    this.shape_8.setTransform(118.475, 2.8)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgHAIABIADAAIADAAIADgBIAAgGIAAgOIgCgWQgCgoAAgUIAAgNIAAgOIgBgOIgGABQgGgBAAgGQAAgDAEgCQAEgCAGgCQAKgBAIAAQADAAACABQACADAAADQAAADgBABQgCADgDAAIgCgBIgCAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAZADAzIACAcQABAMAAANIAAAKIAGgBQALAAAAAKIAAACIgHAEIgCAAIgFAAIgKAAQgXAAAAgHg",
      )
    this.shape_9.setTransform(112.425, 2.7)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AApBOIAAgSIAAgRIgCgiIgDggIABgQIABgRIgJAlQgIAfgHAbQgIAagGAAQgDAAgEgDQgDgDAAgFQAAgLgJgmQgKglgHgYIgCAdIgCA+IgBAhIAAAEIAAAFQAAAEgCACQgBACgFABQgDAAgDgCQgCgCAAgDQAAgbAEg1QAEg1AAgcIgBgEQAAgEADgCQACgBAFAAQADAAAJAZQAKAZAJAfQAJAfABANIAEgNIABgGQAJgkAJgeQAFgSAEgLQAFgLAEAAQADAAAEACQADADAAADIABA4IACA2IAAAPIgBANIABAKIABAJIABAEIAAACIABAFQAAAEgDADQgDAEgDAAQgIAAAAgQg",
      )
    this.shape_10.setTransform(101.95, 3.5)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBXQgDgDAAgDIADgFIAFABIAGAAQAEAAADgDQAEgFACgGQADgNAAgKQAAgRgKgUIgDgEIgIgPIgGgPQgDgKAAgKQAAgNAFgMQADgGAFgEQAFgDAFAAQAEAAAFADQAEACAAAFQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDABgCgCQgFAAgDAKQgDAJAAAHQAAAHACAIQACAIAEAGIAFAKIAJARQAEAHACAKQACAKAAAKQAAAQgHAPQgEAHgGAEQgGAFgIAAIAAABQgFgBgEgDg",
      )
    this.shape_11.setTransform(86.375, 2.8)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgHAIABIADAAIADAAIADgBIAAgGIAAgOIgCgWQgCgoAAgUIAAgNIAAgOIgBgOIgGABQgGgBAAgGQAAgDAEgCQAEgCAGgCQAKgBAIAAQADAAACABQACADAAADQAAADgBABQgCADgDAAIgCgBIgCAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAZADAzIACAcQABAMAAANIAAAKIAGgBQALAAAAAKIAAACIgHAEIgCAAIgFAAIgKAAQgXAAAAgHg",
      )
    this.shape_12.setTransform(80.325, 2.7)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNBZQgFgDgDgFQgHgMgCgOQgBgMAAgQIgBhFIAAgVIAAgFIgBgMQACgGADAAQAEABACAEQADAFgBAFIAABHIACAcIADAcQAAAUAPAAQATAAAAiNIAAgPIAAgCIAAgCQAAgDABgCQACgCAEABQADAAACABQACACAAAEIABAFIgBAOIgBANIgBALIAAALIAAACIAAACQABB1gigBQgGAAgFgCg",
      )
    this.shape_13.setTransform(72.45, 2.75)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBXQgDgDAAgDIADgFIAFABIAGAAQAEAAADgDQAEgFACgGQADgNAAgKQAAgRgKgUIgDgEIgIgPIgGgPQgDgKAAgKQAAgNAFgMQADgGAFgEQAFgDAFAAQAEAAAFADQAEACAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDABgCgCQgFAAgDAKQgDAJAAAHQAAAHACAIQACAIAEAGIAFAKIAJARQAEAHACAKQACAKAAAKQAAAQgHAPQgEAHgGAEQgGAFgIAAIAAABQgFgBgEgDg",
      )
    this.shape_14.setTransform(64.375, 2.8)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_15.setTransform(158.325, -29.525)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAoBOIAAgSIAAgRIgBgiIgCggIAAgQIABgRIgJAlQgHAfgJAbQgHAagFAAQgFAAgCgDQgEgDAAgFQAAgLgJgmQgJglgIgYIgCAdIgDA+IAAAiIAAADIAAAFQAAAEgCACQgCACgFABQgCAAgCgCQgDgDAAgCQAAgbAEg1QAEg1AAgcIgBgEQAAgEACgCQAEgBADAAQAEAAAKAZQAIAYAKAgQAJAfACANIADgNIABgGQAJgkAIgeQAGgSAEgLQAFgLAEABQADAAADABQAEACAAAEIACA4IABA2IAAAPIAAANIAAAKIABAJIABAEIAAACIABAEQAAAFgDADQgDAEgDAAQgJAAAAgQg",
      )
    this.shape_16.setTransform(146.9, -29)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_17.setTransform(131.175, -29.525)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeBfIAAgCIAAgCQAAAAABgBQAAAAAAAAQABgBABAAQAAAAACgBQAMgEAFgEQAHgJAAgVIgChDIgBhDIAAgBIgCAAIgFgBIgHgBIgGgDIAAgCQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQADgCAEAAQANAAAPACQARACAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAIgNAAIABA4IABA2IAAAdQABAJgCAGQgBAKgHAHQgEAIgMAEQgGACgHAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg",
      )
    this.shape_18.setTransform(123.5, -28.375)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIAXQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIAAgBIAGgIQAEgFABgEIAAgCIAAgCQgEAAgDgCQgCgDgBgFQAAgFADgCQAEgDAEAAQAIAAACAJQABAGgFAKQgEALgHAHIgDACg",
      )
    this.shape_19.setTransform(113.3083, -20.775)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgHAIABIADAAIADAAIADgCIAAgEIAAgPIgCgWQgCgoAAgUIAAgNIAAgOIgBgPIgGACQgGgBAAgFQAAgEAEgCQAEgCAGgBQAKgCAIAAQADAAACACQACACAAACQAAAEgBABQgCADgDAAIgCgBIgCAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAZADAzIACAcQABAMAAANIAAAKIAGgBQALAAAAAKIAAACIgHAEIgCAAIgFAAIgKAAQgXAAAAgHg",
      )
    this.shape_20.setTransform(107.525, -29.8)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMBXQgGgEgEgIQgIgQgBgTQgDgSAAgQIAAgGIAAgEIAAgBIAAgFIAAgSIADgbQABgNAFgLQABgGADgCQADgDAEAAQALAAAHAEQAIADAGAHQAFAHAEAJQAEAKABALQACALAAAMIAAADIAAANIABAPQAABMgjAAQgHAAgFgEgAgQhCQgDAIAAANIABAIIAAAIIgBAMIAAAMIAAAbQABAUAFATQAEATAIAAQAEAAAEgEQAEgDACgHQAFgNABgQIABgXQAAgMgCgSIgBgfIAAgEQgBgKgGgIQgGgHgIAAQgJAAgDAKg",
      )
    this.shape_21.setTransform(99.775, -29.625)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AApBOIAAgSIAAgRIgCgiIgDggIABgQIABgRIgJAlQgIAfgHAbQgIAagGAAQgDAAgEgDQgDgDAAgFQAAgLgJgmQgKglgHgYIgCAdIgCA+IgBAiIAAADIAAAFQAAAEgCACQgBACgFABQgDAAgDgCQgCgDAAgCQAAgbAEg1QAEg1AAgcIgBgEQAAgEADgCQACgBAFAAQADAAAJAZQAKAYAJAgQAJAfABANIAEgNIABgGQAJgkAJgeQAFgSAFgLQAEgLAEABQADAAAEABQADACAAAEIABA4IACA2IAAAPIgBANIABAKIABAJIABAEIAAACIABAEQAAAFgDADQgDAEgDAAQgIAAAAgQg",
      )
    this.shape_22.setTransform(87.55, -29)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBUIAAgKIAAgLIAAgJQgBgDgCg2IgEhGQgPAAgEgDQgDgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAQACgCADAAIASABIARABIACAAIACAAQAIAAAAAHQAAADgCACQgDABgDAAIgHAAIgFgBIgBABIAAACQAAAXAFAzQAEAvAAAbQAAADgDADQgDACgDAAg",
      )
    this.shape_23.setTransform(71.475, -29.8)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABBkIgHAAIgJgBQgFgBABgGIAAiZIgCgNIgCgNIAAgBQAFgIACgCIAJgBIAJgBQAEABAFACQADACAAAEQAAAIgMAAIgCAAIgEAAIgDAAIABAVIAAAHIABAQIgBAOIAAAPIADAAIAIgCQADAAADACQACADAAADQAAACgCACQgCACgDAAIgDAAIgDAAQgEAAgBACIAABSIAOgBQAOAAAAAGIAAABQgBAEgEACIgIACg",
      )
    this.shape_24.setTransform(65.1, -30.9)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#4A5689")
      .s()
      .p(
        "AoBM3QATgUAhgxQAigyAmhVQAmhVAAhvQgzgTg1gaQgrgUg6gfIgFgJQiFhFhWhuQhdh5gGiIQgLjAA7ieQBDi0CVhqIApgcIALgFQAGgDAFgFQADgDAEgBIAHgBIAFgGQABgDADAAQAFgCAJgDQAJgCAEgCQADAAACgFQACgEACAAQCXg/C/gPQAzgCBKAEIB8AIIByANQAGAAAKADIAPAGQC2AdB4A2QCcBIBUB/IAJAFQAhA7AaA7IAAAOQAcBOABBiQABBKgQBpQgPBOgYBBQgcBHgrA+QgIAJgKAMIgSAZQg2BChPAyQhCAohcAjQh9AqiVAKQiBAIiXgPQgDAAgEAGIgHAMQgbA3gjAtQgkAugqAwQgqAxhMA5QhMA6h5BHIBQhTg",
      )
    this.shape_25.setTransform(112.6399, 22.2519)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bulle3,
    new cjs.Rectangle(24.5, -68.4, 176.4, 181.3),
    null,
  )

  ;(lib.bulle2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBUIAAgLIAAgKIAAgJQgBgCgCg2IgEhGQgPgBgEgDQgDgCAAgCQAAgCADgDQACgBADAAIASABIARACIACAAIACAAQAIAAAAAFQAAADgCADQgDABgDAAIgHAAIgFgBIgBABIAAABQAAAYAFAyQAEAwAAAbQAAADgDADQgDACgDAAg",
      )
    this.shape.setTransform(83.075, 56.2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg",
      )
    this.shape_1.setTransform(73.875, 56.275)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAWBYQgDgDAAgFQAAgIgDgSIgBgGIgZgEIgEAZQgCANgEAEQgCACgDABQgDAAgDgCQgCgCAAgEIAAgBIABgBQARhEAJhBIAAgDIABgHIABgQQABgGACgDIAIAAQAEABACABQADACAAADQAAAUAGAnQAFAoAAARIACAIIABAIIACAPIACAQIAAABQAAAGgDACQgHgBgCgBgAgJAjQAEACASABIAAgJQgBgYgEgjIgDgcQgKA9gEAgg",
      )
    this.shape_2.setTransform(63.45, 56.3)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg",
      )
    this.shape_3.setTransform(53.325, 56.275)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_4.setTransform(43.575, 56.475)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBUIAAgLIAAgKIAAgJQgBgCgCg2IgEhGQgPgBgEgDQgDgCAAgCQAAgCADgDQACgBADAAIASABIARACIACAAIACAAQAIAAAAAFQAAADgCADQgDABgDAAIgHAAIgFgBIgBABIAAABQAAAYAFAyQAEAwAAAbQAAADgDADQgDACgDAAg",
      )
    this.shape_5.setTransform(35.675, 56.2)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg",
      )
    this.shape_6.setTransform(26.475, 56.275)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIgBIADAAIADAAIADAAIAAgGIAAgNIgCgXQgCgnAAgVIAAgOIAAgMIgBgQIgGABQgGABAAgHQAAgDAEgCQAEgCAGgCQAKgCAIAAQADAAACACQACADAAACQAAADgBADQgCACgDAAIgCAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAaADAyIACAcQABAMAAANIAAAKIAGAAQALAAAAAJIAAABIgHAFIgCAAIgFAAIgKABQgXAAAAgIg",
      )
    this.shape_7.setTransform(17.275, 56.2)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBYQgCgDAAgFQgBgIgCgSIgBgGIgZgEIgEAZQgCANgEAEQgBACgEABQgDAAgDgCQgCgCAAgEIAAgBIAAgBQAShEAJhBIAAgDIAAgHIACgQQABgGADgDIAIAAQADABACABQADACABADQgBAUAGAnQAFAoAAARIACAIIABAIIACAPIADAQIAAABQgBAGgEACQgFgBgEgBgAgJAjQAEACASABIgBgJQAAgYgEgjIgDgcQgKA9gEAgg",
      )
    this.shape_8.setTransform(10.1, 56.3)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AApBNIAAgQIAAgRIgCgjIgDggIABgRIABgPIgJAkQgIAfgHAbQgIAagGAAQgDAAgEgDQgDgDAAgFQAAgMgJgmQgKgkgHgYIgCAeIgCA+IgBAgIAAAFIAAADQAAAFgCACQgBACgFAAQgDAAgDgCQgCgCAAgCQAAgbAEg1QAEg1AAgbIgBgGQAAgCADgCQACgCAFAAQADAAAJAYQAKAaAJAfQAJAeABAOIAEgNIABgGQAJgkAJgeQAFgSAFgKQAEgMAEAAQADABAEACQADACAAACIABA6IACA2IAAANIgBAPIABAJIABAJIABAEIAAABIABAGQAAAEgDAEQgDADgDAAQgIAAAAgRg",
      )
    this.shape_9.setTransform(-1.1, 57)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_10.setTransform(107.125, 29.175)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg",
      )
    this.shape_11.setTransform(96.825, 28.975)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBWQgGgDgEgFQgEgDgCgHIgFgOIgCgPIgBgQIAAgPIAAgKIABgZQAAgMADgNQADgMAFgJQAGgJAKgDQAFgCAFAAQALAAAAAGQAAAEgCACQgDACgDAAIgDgBIgDAAQgDAAgEAFQgDAFgCAIQgFAQgBAUIgBAZIAAAZQACAOADALIAEAKQADAEAEADQADADAFAAQANAAAAgrIAAgMIgGAAIgDAAIgDAAQgIAAAAgHQAAgDACgCQACgCAEAAIAAAAIAEAAQAYAAAAAIIgCAKIgBAJIAAAOIABAOQAAANgJAHQgJAHgMAAQgHAAgGgCg",
      )
    this.shape_12.setTransform(86.175, 29.075)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIAAIADAAIADAAIADgBIAAgGIAAgNIgCgXQgCgoAAgUIAAgNIAAgOIgBgOIgGABQgGAAAAgHQAAgDAEgCQAEgCAGgCQAKgBAIAAQADAAACABQACADAAADQAAADgBABQgCADgDAAIgCgBIgCAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAZADAzIACAcQABAMAAANIAAAKIAGAAQALgBAAAKIAAACIgHAEIgCAAIgFAAIgKAAQgXABAAgIg",
      )
    this.shape_13.setTransform(78.475, 28.9)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBWQgEADgFAAQgDAAgCgDQgCgDAAgDQAAgWACglIABg6IAAgCIgBgYQAAgZAJAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBAKIgBAKIAAAgIAAAfIgBALIAAADIAAAVIgBAVQAAASAJAAIABAAIADAAIAGAAQAOAAAAAIQAAACgCACIgGACQgJgDgOAAg",
      )
    this.shape_14.setTransform(72.475, 29.175)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAWBXQgDgCAAgEQAAgIgDgTIgBgGIgZgEIgEAZQgCAMgEAFQgCADgDAAQgDgBgDgCQgCgCAAgCIAAgCIABgBQARhDAJhBIAAgEIABgIIACgPQAAgGACgCIAIAAQAEgBACACQADACAAADQAAAUAGAnQAFAoAAAQIACAIIABAIIACAQIACARIAAAAQAAAGgDACQgHAAgCgDgAgJAjQAEACASABIAAgJQgBgYgEgkIgDgbQgKA9gEAgg",
      )
    this.shape_15.setTransform(59.4, 29)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AApBNIAAgRIAAgRIgCgiIgDggIABgRIABgQIgJAlQgIAfgHAbQgJAagFAAQgEAAgDgDQgDgDAAgFQAAgLgJgnQgJgkgIgYIgBAdIgEA+IAAAhIAAAFIAAADQAAAFgCACQgBACgGAAQgCAAgCgBQgDgCAAgDQAAgbAEg1QAEg2AAgbIgCgEQAAgDAEgDQACgBAEAAQAEAAAKAZQAJAYAJAgQAJAfABANIAEgNIACgGQAIgkAJgeQAEgSAGgLQAEgKAEgBQADAAADACQAEACAAAEIABA4IACA2IAAAPIgBANIABAKIABAJIAAAEIAAABIACAGQAAAEgDAEQgDADgDAAQgJAAABgRg",
      )
    this.shape_16.setTransform(48.2, 29.7)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_17.setTransform(32.525, 29.175)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBWQgEADgFAAQgDAAgCgDQgCgDAAgDIACg7IABg6IAAgCIgBgYQAAgZAJAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBAKIgBAKIAAAgIAAAfIgBALIAAADIAAAVIgBAVQAAASAJAAIABAAIADAAIAGAAQAOAAAAAIQAAACgCACIgGACQgJgDgOAAg",
      )
    this.shape_18.setTransform(25.575, 29.175)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBWQgEADgFAAQgDAAgCgDQgCgDAAgDQAAgWACglIABg6IAAgCIgBgYQAAgZAJAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBAKIgBAKIAAAgIAAAfIgBALIAAADIAAAVIgBAVQAAASAJAAIABAAIADAAIAGAAQAOAAAAAIQAAACgCACIgGACQgJgDgOAAg",
      )
    this.shape_19.setTransform(18.475, 29.175)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIAAIADAAIADAAIADgBIAAgGIAAgNIgCgXQgCgoAAgUIAAgNIAAgOIgBgOIgGABQgGAAAAgHQAAgDAEgCQAEgCAGgCQAKgBAIAAQADAAACABQACADAAADQAAADgBABQgCADgDAAIgCgBIgCAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAZADAzIACAcQABAMAAANIAAAKIAGAAQALgBAAAKIAAACIgHAEIgCAAIgFAAIgKAAQgXABAAgIg",
      )
    this.shape_20.setTransform(11.475, 28.9)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_21.setTransform(4.925, 29.175)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBYQAAgegFghQgGgggMgvIgDgIQgEgPAAgEIABgDQABgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAEAAADAHQAEAHADAKIAGAbQADAPAFAeIABAKIACAYIACANIAOhSIAKhAIAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAJgCALIgHAaIgEAUIgDATQgCAhgEAZQgDAPgFAJQgFAIgFAAg",
      )
    this.shape_22.setTransform(-3.875, 28.85)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKBOQgGgOgCgPIgCgJQgHglgCgFIgDAAIAAANIAAAPQAAAjAFAUIgDAHIgIAAIgDgEIAAgRQAAgYgCgwIgChIQAAgMAIAAQAPAAAIAHQAJAIAAANIAAASIgBAJIgDAJIgFAJIgEAIIABAGIAEASIAHAhQADANAFAKIACADQACAFAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgFgMgAgMhOIAAACIAAAgIABAeQAGgDAEgNQADgOAAgLQAAgIgCgHQAAgFgDgCQgDgCgFAAg",
      )
    this.shape_23.setTransform(-11.925, 29.125)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNBYQgFgCgDgGQgGgLgCgOQgCgMAAgRIgBhEIAAgVIAAgEIgBgNQACgGADABQADAAADAEQACAFAAAFIAABHIACAcIACAcQABAUAPAAQATAAAAiNIAAgPIAAgCIgBgCQAAgDACgCQABgBAFgBQADAAACACQACADAAADIABAFIgBAOIgBANIAAALIgBALIAAACIABACQAAB0giAAQgGAAgFgDg",
      )
    this.shape_24.setTransform(-20.9, 28.95)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBXQgDgDAAgDIADgFIAFABIAGAAQAEAAADgDQAEgEACgHQADgNAAgLQAAgQgKgUIgDgEIgIgPIgGgPQgDgKAAgKQAAgMAFgNQADgGAFgEQAFgEAFABQAEAAAFACQAEADAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgBQgFAAgDAKQgDAJAAAHQAAAHACAIQACAHAEAHIAFAKIAJARQAEAHACAKQACAKAAAKQAAAQgHAPQgEAHgGAEQgGAFgIAAIAAABQgFgBgEgDg",
      )
    this.shape_25.setTransform(-29.025, 29)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_26.setTransform(71.875, 1.925)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeBfIAAgCIAAgCQAAAAABgBQAAAAAAAAQABgBABAAQABAAABgBQAMgEAFgEQAHgJAAgVIgChDIgBhDIAAgBIgCAAIgEgBIgIgBIgGgDIAAgCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAEgCACAAQAOAAAPACQASACgBACQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBABgEAAIgNAAIABA4IABA2IAAAdQABAJgCAGQgCAKgGAHQgEAIgMAEQgGACgHAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg",
      )
    this.shape_27.setTransform(64.2, 3.075)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIAAIADAAIADAAIADgBIAAgGIAAgNIgCgXQgCgnAAgVIAAgOIAAgMIgBgPIgGAAQgGABAAgHQAAgDAEgCQAEgDAGgBQAKgCAIAAQADAAACACQACADAAADQAAACgBACQgCADgDAAIgCAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAaADAyIACAcQABAMAAANIAAAKIAGAAQALAAAAAJIAAABIgHAFIgCAAIgFAAIgKABQgXAAAAgIg",
      )
    this.shape_28.setTransform(53.475, 1.65)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMBXQgGgEgEgIQgIgQgBgTQgDgSAAgQIAAgGIAAgEIAAgBIAAgFIAAgSIADgbQABgNAFgLQABgGADgCQADgDAEAAQALAAAHAEQAIADAGAHQAFAHAEAJQAEAKABALQACALAAAMIAAADIAAANIABAPQAABMgjAAQgHAAgFgEgAgQhCQgDAIAAANIABAIIAAAIIgBAMIAAAMIAAAbQABAUAFATQAEATAIAAQAEAAAEgEQAEgDACgHQAFgNABgQIABgXQAAgMgCgSIgBgfIAAgEQgBgKgGgIQgGgHgIAAQgJAAgDAKg",
      )
    this.shape_29.setTransform(45.725, 1.825)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAoBNIAAgRIAAgQIgBgjIgCggIAAgRIABgQIgJAlQgHAfgJAbQgHAagFAAQgFAAgCgDQgEgDAAgFQAAgMgJgmQgJgkgIgYIgCAeIgDA+IAAAgIAAAFIAAADQAAAFgCACQgCADgFgBQgCAAgCgBQgDgDAAgCQAAgbAEg1QAEg1AAgbIgBgGQgBgCADgDQAEgBADAAQAEAAAKAYQAIAZAKAgQAJAeACAOIADgNIABgGQAJgkAIgeQAGgSAEgKQAFgMAEAAQADAAADADQAEACAAACIACA5IABA3IAAANIAAAPIAAAJIABAJIAAAEIAAABIACAGQAAAEgDAEQgDADgDAAQgJAAAAgRg",
      )
    this.shape_30.setTransform(33.5, 2.45)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMBXQgGgEgEgIQgIgQgBgTQgDgSAAgQIAAgGIAAgEIAAgBIAAgFIAAgSIADgbQABgNAFgLQABgGADgCQADgDAEAAQALAAAHAEQAIADAGAHQAFAHAEAJQAEAKABALQACALAAAMIAAADIAAANIABAPQAABMgjAAQgHAAgFgEgAgQhCQgDAIAAANIABAIIAAAIIgBAMIAAAMIAAAbQABAUAFATQAEATAIAAQAEAAAEgEQAEgDACgHQAFgNABgQIABgXQAAgMgCgSIgBgfIAAgEQgBgKgGgIQgGgHgIAAQgJAAgDAKg",
      )
    this.shape_31.setTransform(16.575, 1.825)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAQBjQgCgCAAgEQAAg3gCgmIgJAAQgKAAgEABQAAAOACAeIACAtIgBAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgDgMQgEgSgCg5QgCgmAAgsIgBgYQAAgEAFAAIAFABIAEADIgBAUIABAbIABAbIAAAFIAAAFIAAAHIAGgBIAHAAIAMgBIAAgrIgBgsIAAgHIAGABQABABAAAAQABAAAAABQABAAAAAAQABABAAAAQACADABAHIAAAGIACBWQADA6AAAdQAAAEgCADQgDADgDAAQgDAAgCgDg",
      )
    this.shape_32.setTransform(7.175, 0.675)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#E8A334")
      .s()
      .p(
        "AgnN+QhChHguhRQgthQgdhjQgXhRAEhIIgRgDQhhgShZgdQhhgfhXgrQhogwhDg6Qg6gzgkg9QgQgagMgdIgHgFQgLgcgJgmIgPhFQgCgfADgoIAHhHIAIghIAHghQAZhhA8hUQA4hPBUhBQAcgaAhgSQA/gmAkgSQA9gbAjgOQAbgMAzgQQCkgxCAgPQCegSCJAdQEPAyDtDJQBXBPAyBAQBBBUAbBYQAAACAEADQADADAAACQAcBfgKBeQgKBigxBQQhcCRitBdQh8BDi0AvQjLAsjZgZQgRAmgIAhQgKAhAEAoQADASAMA5QAKAsAdBNQAfBSALAoIgGAGQgJgHgGABgAE0GlIgEABIgYADg",
      )
    this.shape_33.setTransform(41.3683, 53.7516)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bulle2,
    new cjs.Rectangle(-55.4, -36.3, 193.6, 180.10000000000002),
    null,
  )

  ;(lib.bulle1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKBOQgGgOgCgPIgCgJQgHglgCgFIgDAAIAAANIAAAPQAAAjAFAUIgDAHIgIAAIgDgEIAAgRQAAgYgCgwIgChIQAAgMAIAAQAPAAAIAHQAJAIAAANIAAASIgBAJIgDAJIgFAJIgEAIIABAGIAEASIAHAhQADANAFAKIACADQACAFAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAgFgMgAgMhOIAAACIAAAgIABAeQAGgDAEgNQADgOAAgLQAAgIgCgHQAAgFgDgCQgDgCgFAAg",
      )
    this.shape.setTransform(127.775, 60.025)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIgBIADAAIADAAIADgBIAAgFIAAgNIgCgXQgCgnAAgVIAAgOIAAgMIgBgQIgGABQgGABAAgHQAAgDAEgCQAEgCAGgCQAKgCAIAAQADAAACACQACADAAADQAAACgBADQgCACgDAAIgCAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAaADAyIACAcQABAMAAANIAAAKIAGAAQALAAAAAJIAAABIgHAFIgCAAIgFAAIgKABQgXAAAAgIg",
      )
    this.shape_1.setTransform(120.675, 59.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBXQAAgegFggQgGgggMgvIgDgIQgEgOAAgFIABgDQABgBAAAAQABgBABAAQAAAAABAAQAAAAABAAQAEgBADAHQAEAGADALIAGAaQADAQAFAeIABAKIACAXIACAPIAOhUIAKhAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAJgCALIgHAaIgEAUIgDAUQgCAggEAZQgDAPgFAJQgFAJgFAAg",
      )
    this.shape_2.setTransform(112.775, 59.75)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNBYQgFgCgDgGQgGgKgCgOQgCgMAAgSIgBhEIAAgVIgBgEIAAgNQADgFADAAQADAAACAEQACAFABAGIAABHIABAcIACAcQAAATAQAAQATAAAAiNIAAgPIAAgCIgBgCQABgEABgBQACgCAEAAQADAAACADQACACABACIAAAHIgBANIgBANIAAALIgBALIAAACIABADQgBBzggABQgHAAgFgEg",
      )
    this.shape_3.setTransform(103.55, 59.85)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMBXQgGgEgEgIQgIgQgBgTQgDgSAAgQIAAgGIAAgEIAAgBIAAgFIAAgSIADgbQABgNAFgLQABgGADgCQADgDAEAAQALAAAHAEQAIADAGAHQAFAHAEAJQAEAKABALQACALAAAMIAAADIAAANIABAPQAABMgjAAQgHAAgFgEgAgQhCQgDAIAAANIABAIIAAAIIgBAMIAAAMIAAAbQABAUAFATQAEATAIAAQAEAAAEgEQAEgDACgHQAFgNABgQIABgXQAAgMgCgSIgBgfIAAgEQgBgKgGgIQgGgHgIAAQgJAAgDAKg",
      )
    this.shape_4.setTransform(94.125, 59.975)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgDAZQgBAAgBgQIgBgbQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCACAAQAFAAACAGIAAABIAAABIAAABQAAAMgDAOQgDAOgDAAg",
      )
    this.shape_5.setTransform(85.875, 50.725)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWBYQgGAAgBgiIABgqIAAgpIgBgaIgCgXQAAgDADgDQADgDAEAAQAJAAAIAEQAIAFAHAHQANAQAFATQADAKgBAKIAAAFIAAAHIAAAPIgBAaQgCANgEAKQgGALgJAJQgFAEgHAEgAgOgvIACA5IACA6IAAAHQAGgBAEgCQADgDADgEIAGgLIACgNQADgLABgNIAAgKQAAhOgegEQgCANAAAPg",
      )
    this.shape_6.setTransform(77.95, 59.95)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBUIAAgLIAAgJIAAgJQgBgDgCg2IgEhGQgPgBgEgDQgDgCAAgCQAAgCADgDQACgBADAAIASABIARACIACAAIACAAQAIAAAAAFQAAADgCADQgDABgDAAIgHAAIgFgBIgBABIAAABQAAAYAFAyQAEAwAAAbQAAADgDADQgDACgDAAg",
      )
    this.shape_7.setTransform(64.575, 59.8)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg",
      )
    this.shape_8.setTransform(55.325, 59.875)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_9.setTransform(45.525, 60.075)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBQQAAgGAIgBIADAAIADAAIADgBIAAgFIAAgNIgCgXQgCgnAAgVIAAgOIAAgMIgBgQIgGABQgGABAAgHQAAgDAEgCQAEgCAGgCQAKgCAIAAQADAAACACQACADAAADQAAACgBADQgCACgDAAIgCAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgBAEQAAAaADAyIACAcQABAMAAANIAAAKIAGAAQALAAAAAJIAAABIgHAFIgCAAIgFAAIgKABQgXAAAAgIg",
      )
    this.shape_10.setTransform(38.625, 59.8)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBXQAAgegFggQgGgggMgvIgDgIQgEgOAAgFIABgDQABgBAAAAQABgBABAAQAAAAABAAQAAAAABAAQAEgBADAHQAEAGADALIAGAaQADAQAFAeIABAKIACAXIACAPIAOhUIAKhAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAJgCALIgHAaIgEAUIgDAUQgCAggEAZQgDAPgFAJQgFAJgFAAg",
      )
    this.shape_11.setTransform(30.775, 59.75)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKBOQgGgOgCgPIgCgJQgHglgCgFIgDAAIAAANIAAAPQAAAjAFAUIgDAHIgIAAIgDgEIAAgRQAAgYgCgwIgChIQAAgMAIAAQAPAAAIAHQAJAIAAANIAAASIgBAJIgDAJIgFAJIgEAIIABAGIAEASIAHAhQADANAFAKIACADQACAFAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgFgMgAgMhOIAAACIAAAgIABAeQAGgDAEgNQADgOAAgLQAAgIgCgHQAAgFgDgCQgDgCgFAAg",
      )
    this.shape_12.setTransform(123.975, 31.725)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_13.setTransform(116.275, 31.775)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBWQgGgDgEgFQgEgDgCgHIgFgOIgCgPIgBgQIAAgPIAAgKIABgZQAAgMADgNQADgMAFgJQAGgJAKgDQAFgCAFAAQALAAAAAGQAAAEgCACQgDACgDAAIgDgBIgDAAQgDAAgEAFQgDAFgCAIQgFAQgBAUIgBAZIAAAZQACAOADALIAEAKQADAEAEADQADADAFAAQANAAAAgrIAAgMIgGAAIgDAAIgDAAQgIAAAAgHQAAgDACgCQACgCAEAAIAAAAIAEAAQAYAAAAAIIgCAKIgBAJIAAAOIABAOQAAANgJAHQgJAHgMAAQgHAAgGgCg",
      )
    this.shape_14.setTransform(107.925, 31.675)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAVBWQgCgBgBgFIgBgFIAAAAIAAgBQAAgJgRgyQgSgygLgYIAACDIABACIABACIABADQAAADgCADQgDACgDAAQgIAAAAgQIgBgtIAAgtIABgYIABgZQAAgMAJgHIAAABIACAAQAGAAAKAVQAHARAGATIAOA0IADAJIAJAfQAGg5AAhMIAAgDIgBgEQAAgIAHAAQADAAACADQACADAAAEIAAAUQAAApgDAuQgDAwgDAGIgKACQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg",
      )
    this.shape_15.setTransform(96.825, 31.575)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAWBXQgDgCAAgEQAAgJgDgSIgBgGIgZgEIgEAZQgCAMgEAFQgCACgDAAQgDAAgDgCQgCgBAAgDIAAgCIABgBQARhEAJhAIAAgEIABgIIABgPQABgGACgCIAIAAQAEAAACABQADABAAAEQAAAUAGAoQAFAnAAAQIACAIIABAIIACARIACAQIAAAAQAAAGgDACQgHgBgCgCgAgJAiQAEADASACIAAgKQgBgYgEgkIgDgbQgKA9gEAfg",
      )
    this.shape_16.setTransform(86.4, 31.6)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHBWQgEADgFAAQgDAAgCgDQgCgDAAgDQAAgWACglIABg6IAAgCIgBgYQAAgZAJAAQADAAACACQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBAKIgBAKIAAAgIAAAfIgBALIAAADIAAAVIgBAVQAAASAJAAIABAAIADAAIAGAAQAOAAAAAIQAAACgCACIgGACQgJgDgOAAg",
      )
    this.shape_17.setTransform(79.675, 31.775)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNBZQgFgDgDgGQgHgLgCgOQgBgMAAgQIgBhFIAAgVIAAgFIgBgMQADgGACAAQADABADAEQACAFAAAFIAABHQAAALADARIACAcQAAAUAPAAQATAAAAiNIAAgPIAAgCIAAgCQAAgDABgCQACgCAEABQADAAACABQACACAAAEIABAFIgBAOIgBANIgBALIAAALIAAACIAAACQABB1gigBQgGAAgFgCg",
      )
    this.shape_18.setTransform(70.75, 31.55)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMBXQgGgEgEgIQgIgQgBgTQgDgSAAgQIAAgGIAAgEIAAgBIAAgFIAAgSIADgbQABgNAFgLQABgGADgCQADgDAEAAQALAAAHAEQAIADAGAHQAFAHAEAJQAEAKABALQACALAAAMIAAADIAAANIABAPQAABMgjAAQgHAAgFgEgAgQhCQgDAIAAANIABAIIAAAIIgBAMIAAAMIAAAbQABAUAFATQAEATAIAAQAEAAAEgEQAEgDACgHQAFgNABgQIABgXQAAgMgCgSIgBgfIAAgEQgBgKgGgIQgGgHgIAAQgJAAgDAKg",
      )
    this.shape_19.setTransform(61.325, 31.675)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWBVIgBgJIABgcIACgcIABgpIABgpIgBgIIgCgGIAAgBQABgGACgDQACgDAEAAQAHAAAHAEQAJAEADAGQAIAMAAATQAAAPgDAJQgCAKgGAIQAHAGADALQACAKAAAQQABAQgGAMQgGAOgMAFQgHACgIAAQgFAAgCgFgAgGAtIgBAKIAAAJIAAABIAAAAIAAAMQAHgCAFgIQAEgIABgLIgBgTIgEgLQgBgFgDgDQgDgEgEgBIAAAogAgGgxIAAAnQANAAAAggQAAgigKgBQgDAGAAAWg",
      )
    this.shape_20.setTransform(52.95, 31.525)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLBZQgDAAgDgDQgCgCgBgEIAAgGIAAgGIAAgFIgBgRIAAgRIAAglIACgnIgBgLIgBgLQAAgTALAAQAJAAAKAEQAMADAAAFQAAACgDADIgFADQgLgEgIgBIAAALIAAATIgBATIABAFIAEgBIAEAAQANAAAAAHQAAADgCACQgDACgDAAIgHAAIgGAAIAAATIAAAXIgBAYIABAPIAHAAIALAAQAKAAAAAGQAAAEgDACQgDACgFAAg",
      )
    this.shape_21.setTransform(40.725, 31.775)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPBkQgDgCAAgEIABgGIABgFQAAgYgChBQgDg5AAghQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQADAAADADQACACAAADIACAwIABAuIABADIAAADIAAACIAAACIAABEIAAAHIATAAQAGAEAAAEQAAADgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAIgCgBIgEABIgFAAIgDgBQgDAEgFAAQgDAAgDgDg",
      )
    this.shape_22.setTransform(33.9, 30.325)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#4A5689")
      .s()
      .p(
        "AWvZlQiDgOiTgqQh0giicg8QgFAAgFgKQgFgKgFAAQhWgihghIQg6gshuhkQhkhkhai0QyTAQtunSQhCgpgvglQg5grgygxQgogog8hQQgyhVgehCQgkhSgOhMQAAgTgIhMQgHg9AFgiQAklrECkxQDnkRFjipQHYjcHeAAQMbgxKODRQCbA2CAA+QCIBCCDBYIAFAGQAFAIAAAGQAFAFAPAFQAPAFAFAFQAAAFAFAFQAFAFAAAFQEHDJByEwQB2E+hfEzIAAAnQgpCFg2BhQhAB0hbBUQjWDCktBxQjwBblPA0QBdDIC6CaQCnCKDgBYQBuAfBaAnIAeAAQAKAKAUAOQAMAKgMAGQg3AihHAIQgXADgbAAQgmAAgugFg",
      )
    this.shape_23.setTransform(79.2568, 60.0786, 0.3657, 0.3657)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bulle1, new cjs.Rectangle(0, 0, 158.6, 120.2), null)

  ;(lib.bribripianiste = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#A54220")
      .s()
      .p(
        "AA5BMIhWguQiPhNBugfQAnANALAHIBnBBQAOAIAEAPIACAGQABAMgGAMQgEAHgHAFIgKAFQgGACgHAAQgHAAgIgDg",
      )
    this.shape.setTransform(2.9858, 7.5386)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AAJAoIgJgJIAAABQgEAEgEgEIgTgVQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIgBgCIgggNQAGgFAFgHQAGgMgCgMIAqAVIAQACQAOACAHALIAbAYQAEADgEAEQgEAEgDgEIgQgPIgCADIAXAWQAEADgDAFQgEAEgDgEQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCADgDgBQgDABgKACIgDAAQgLAAgJgIg",
      )
    this.shape_1.setTransform(18.7067, 15.9357)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bribripianiste,
    new cjs.Rectangle(-8.1, -0.4, 33, 21.099999999999998),
    null,
  )

  ;(lib.bribri = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#001443")
      .s()
      .p("AhHgCIA4g6QA5AlAeAUQgMgHgPADQgPAEgIANQgIANAEAPQADAKAHAHIgCAGg")
    this.shape.setTransform(-1.6625, 0.9)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p(
        "ABtBlIgOgJIjgh9IgHgFQgHgHgCgLQgEgPAIgNQAIgNAPgEQAPgDAMAHIDXCWQARAKAEAEQAGAIgIALQgHANgMADIgGABQgEAAgFgCg",
      )
    this.shape_1.setTransform(14.7667, 10.3011)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F48F7D")
      .s()
      .p("AAJAYQgMgCgGgMIgNgXQgBgCABgEQACgEACgBQAEgCACAEIAiAgQAEAJgEACIgBAFIgCAAIgKgCg")
    this.shape_2.setTransform(27.152, 22.4233, 1.149, 1.149)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F48F7D")
      .s()
      .p("AAFAVIgSgkQgCgFAEgCQAFgDACAFIASAkQACAFgEACIgDABQgCAAgCgDg")
    this.shape_3.setTransform(28.7995, 22.6845, 1.149, 1.149)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AAFAVIgSgkIgBgEQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAFgDACAFIASAlQACAEgEADIgDAAQgDAAgBgDg",
      )
    this.shape_4.setTransform(29.9456, 22.4289, 1.149, 1.149)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AAFAVIgSgkQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAFgDACAFIASAkQACAFgEACIgDABQgDAAgBgDg",
      )
    this.shape_5.setTransform(31.1616, 21.2932, 1.149, 1.149)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AAAAfQgEgBgGgFQgHgFgKgUQgHgOAEgIQAEgHAMgBQAJAAAFACIAQAHQAMAHAEAMQADAJgKAKQgIAIgJAEQgDACgDAAIgCAAg",
      )
    this.shape_6.setTransform(26.9556, 19.3513, 1.1494, 1.1494)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#F48F7D")
      .s()
      .p("AANAHIgagDQgFgBAAgEQABgGAFABIAaADQAGABgBAEQgBAFgDAAIgCAAg")
    this.shape_7.setTransform(28.5907, 16.3109, 1.149, 1.149)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bribri, new cjs.Rectangle(-8.9, -5.2, 41.8, 30.7), null)

  ;(lib.bri = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F48F7D")
      .s()
      .p(
        "Ah7BbQgPgFgHgNQgHgOAFgOQAEgPAOgHIDwhpQASgJAEgBQAKgBAGAMQAFALgSAQIhPBDQg7AyhdAaQgIAEgJAAQgGAAgFgCg",
      )
    this.shape.setTransform(15.0443, 11.13)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p("AACAOIgagCQgCAAgDgDQgDgDABgCQAAgEAFAAIAsgNQAKACAAAEIAEADQgBAEgHAFQgIAJgLAAIgDAAg")
    this.shape_1.setTransform(31.9718, 6.3205, 1.149, 1.149)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgUADQgGAAABgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAoADQAFABAAAEQgBAFgEAAg",
      )
    this.shape_2.setTransform(32.9724, 5.044, 1.149, 1.149)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F48F7D")
      .s()
      .p("AgUADQgFAAAAgEQABgGAEABIApADQAGABgBAEQAAAFgGAAg")
    this.shape_3.setTransform(33.3348, 3.9507, 1.149, 1.149)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F48F7D")
      .s()
      .p("AAUAHIgogDQgFgBAAgEQABgFAEAAIApAEQAGAAgBAEQAAAFgEAAIgCAAg")
    this.shape_4.setTransform(32.9901, 2.3023, 1.149, 1.149)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AAEAbIgPgBQgQgBgEgIQgEgHAGgKQAEgIAEgEIAPgJQALgHAMADQALADADANQADAJgBALQAAAFgDADQgDAEgIACQgFACgHAAIgDAAg",
      )
    this.shape_5.setTransform(28.7227, 4.6341, 1.1494, 1.1494)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F48F7D")
      .s()
      .p("AgKAQQgFgEADgEIAQgVQADgFAEAEQAFAEgEADIgPAWQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBg")
    this.shape_6.setTransform(27.4085, 1.906, 1.149, 1.149)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bri, new cjs.Rectangle(0, 0, 36.4, 20.5), null)

  ;(lib.brassssss = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#D26079")
      .s()
      .p(
        "AgcgvIABAAQAMAAARgEIAegGQARgDAGAGQAJAHgBARQAAAUgDAQQgBAJgCADQgDAIgMAEIgTAHIgwAVIgDABQhEgYBEhSg",
      )
    this.shape.setTransform(2.8771, 5.9359)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brassssss, new cjs.Rectangle(-3.4, 0, 12.6, 11.9), null)

  ;(lib.brasechec2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#9E9396")
      .s()
      .p(
        "AjHA8QgtgxBrgOQA5gKAngUIAugXQAcgOANgJQAPgKAqgGIAsgFQARgCAXAYQAYAZACAUQACATgQAUIgeAdQgJAKg/ARQgwANgjAHIgSAFQgQAEhDAJIgVABQg2AAglgpg",
      )
    this.shape.setTransform(13.7569, 9.953)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.brasechec2,
    new cjs.Rectangle(-7.6, -0.1, 42.7, 20.200000000000003),
    null,
  )

  ;(lib.brasechec1copy = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AA3AYIgdgIQgKgCgjACQgjADgJgEQgUgKAAgCQgBgCAagDIAbgFQAIgIAQgFQAMgGAMACQALABATAHQASAHAJACIADAAQAJANgCAPIgFACQgFACgHAAIgMgBg",
      )
    this.shape.setTransform(8.3922, 8.5032)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brasechec1copy, new cjs.Rectangle(0, 6, 16.8, 5.1), null)

  ;(lib.brasechec1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#9E9396")
      .s()
      .p(
        "AiEA9QgMgCgGgPIgGgoQAAgTAzgMQAcgHA2gKQARgEBYgPIAEAAQA+gFAJA6QAGAuhUARQgWAGgsADQglADgkAAQgvAAgZgEg",
      )
    this.shape.setTransform(31.3995, 6.4291)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.brasechec1,
    new cjs.Rectangle(15.7, 0, 31.400000000000002, 12.9),
    null,
  )

  ;(lib.brasbleus2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#587FD1")
      .s()
      .p("AhPBIQgNgOgJggIgGgbQAkgbBIgZQAlgNAcgHQA6gNgWBVQgoAXgrAVQhBAhgXAAQgHAAgDgEg")
    this.shape.setTransform(60.8502, 7.4108)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#DEA27D")
      .s()
      .p(
        "Aj4BXQgHgJAygjQAVgOA4gGQALgGCPgwICSgxQAGgBAHgJIBAAqQgfAdgKgBQgJgBiaAhQiaAjgDAEQgEAGgVAKQgQAIgKAEQgLADgIgFQgIgFALgDQAOgFAPgIQAPgIgEgBQgDgCgRAEQgRAEgNAFQgKAEgHAIIgJAJQgHAGgJADQgGADgEAAQgEAAgDgEg",
      )
    this.shape_1.setTransform(29.8942, 17.6287, 1.2, 1.2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brasbleus2, new cjs.Rectangle(0, -0.1, 71.7, 28.6), null)

  ;(lib.brasbleus = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#779EED")
      .s()
      .p(
        "AhvBiQgJgFgSgsQgQgsAGgCIAPAeQATAfAXAHQAcAJBKgaQBNgbAMgYQANgagHggQgJgjgcgDIgQgBQAjgJAZAJQAeAMAHAmQAJAygxAgQgWAPg4ARQgfAKgyALQgnAIgPAAQgGAAgCgBg",
      )
    this.shape.setTransform(68.2398, 9.9069)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#779EED")
      .s()
      .p(
        "AhdBSQgHgEgPglQgOglAFgBQAKgDA1gaQAzgaAUgNQAQgJASgEQAdgHAVAHQAZAKAGAgQAHApgpAbQgSAMgvAPQgaAIgpAJQghAHgMAAIgHgBg",
      )
    this.shape_1.setTransform(68.2419, 9.9013, 1.2, 1.2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#DEA27D")
      .s()
      .p("Ag1AYQCHgYAKgEQAagKgGgiQAGgBAHgHIA8AwQgiAZgLgCQgIgCibAUQidAUgEAEQAHgJB8gYg")
    this.shape_2.setTransform(38.9125, 17.6072, 1.2, 1.2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFBF8F")
      .s()
      .p(
        "Aj9BCQgGgKA1geQAXgMA4ABQAMgGCSgiQCQgjAGAAIABgBQAGgBAHgHIA8AwQgiAZgLgCQgIgCicAUQicAUgEAEQgFAFgVAJQgRAGgLADQgKACgIgGQgHgGALgCQAOgDAQgHQAPgGgDgCQgDgCgSACQgRADgNADQgKADgJAGIgKAKQgHAEgKADIgHABQgHAAgCgEg",
      )
    this.shape_3.setTransform(30.5306, 19.1671, 1.2, 1.2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brasbleus, new cjs.Rectangle(0, 0, 83.4, 27.6), null)

  ;(lib.brasgtricot = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CC9987")
      .s()
      .p("AgBAGQgFgBgBgGIgBgGIAKAFQAGADABACQABAEgEABIgBAAIgGgCg")
    this.shape.setTransform(13.7338, 11.9899, 1.1497, 1.1497)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FB9962")
      .s()
      .p(
        "AgKAXQgHgCgEgDQgLgIAHgEQgBgDAEgFQADgGACABQABgFAEgEQAEgEAEACQAFgHAGACIAGADIAJANQAIAPgCACQgDABgFgEIgQgRIAHAMIAEAIQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAIgIgGIgNgLIAPAOQAFAFgDADQgEAEgEgFIgOgKQAQAMgBAEIgCAAIgGgBg",
      )
    this.shape_1.setTransform(11.1168, 13.2154, 1.1497, 1.1497)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AgCAKQgEgBgCgEQgCgEABgDQACgEADgCQAEgCADABQAEACACADQAEAJgJAEIgEABIgCAAg")
    this.shape_2.setTransform(1.0657, 19.2453, 1.1497, 1.1497)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AhWAvQAGgFgBgBQgIACAAgBQAAgBAogUIBcguQAugWAAABQABAEiIBGQgmATgCAAIAAAAg")
    this.shape_3.setTransform(11.2782, 14.0806, 1.1497, 1.1497)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FB9962")
      .s()
      .p("AgrBhQgWglAjhYQAghVAOADQAKACABBaIgbA0IA0gPQgBAPgLAUQgLAVgcAZQgNALgKAAQgMAAgJgOg")
    this.shape_4.setTransform(5.6754, 11.1143)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.brasgtricot,
    new cjs.Rectangle(-0.1, 0, 21.700000000000003, 22.3),
    null,
  )

  ;(lib.brasdtricot = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CC9987")
      .s()
      .p("AAAAFQgFAAgDgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBQACgDAQAAQgEAJgGAAIAAAAg")
    this.shape.setTransform(7.6708, 13.5562, 1.1497, 1.1497)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FB9962")
      .s()
      .p(
        "AAEAXQgFAAAAgCQAAgCAIgEIAJgCIgPADQgGACgCgEQgBgDAGgEIARgGIgPAFIgJACQAAABgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAGgFIAJgIIgTAJQgFACgCgCQgCgCANgLIAMgIIAFAAQAGAAADAIQAEgBACAGQACAEgBAFQACAAABAFQAAAGgBACQAEAGgMADIgHABIgEAAg",
      )
    this.shape_1.setTransform(9.0338, 15.4016, 1.1497, 1.1497)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAHQgHgHAHgGQAGgHAIAHQADADAAADQAAAFgDACQgEADgDAAQgEAAgDgDg")
    this.shape_2.setTransform(15.9284, 23.0977, 1.1497, 1.1497)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AAjApIhHhKQgjglABgBQADgDBrBuQAfAgAAABIgIgEQAFAIgBAAIggggg")
    this.shape_3.setTransform(8.0223, 14.9314, 1.1497, 1.1497)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FB9962")
      .s()
      .p("AAIBXQgjgKgTgSQgCgCgCgPIgCgOIA4AJIgXg5IAMhIQAaARAVBLQAUBIgMAPQgCAGgKAAQgKAAgSgGg")
    this.shape_4.setTransform(15.9936, 10.6573, 1.15, 1.15)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.brasdtricot,
    new cjs.Rectangle(-0.1, 0, 22.200000000000003, 24.3),
    null,
  )

  ;(lib.bicepspians = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#A54220")
      .s()
      .p("AATCbQgagNgOgvIgsiRQA+ikAlBdQAKAQAABzQATA6ACASQAIBGgwAAIgGgBg")
    this.shape.setTransform(6.6302, 12.2226)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bicepspians, new cjs.Rectangle(0, -3.3, 13.3, 31.1), null)

  ;(lib.bicepspeintre = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F15F46")
      .s()
      .p(
        "AmUL/QghgGgfgfQgbgagTgnQgyhugIgZQgahQAVg9QAJgYAhgWIA8goQAbgYAwgvQAvgvAbgYQAdghAigxIA4hTQAbguAvhbQAvhaAcgwIAYgYQBHh/Bnh8QBYhoB6h1QARAJAXAcQAZAfAOALQAIAIAMAUQAMAUAHAHQCBDAgKDCQgIBOgHAnQgMBAgVAvQgLAUgUAqQgUAsgMATIgXAXQgIAMgIAUQgIAUgIALIgXAYQhaCPhsBxQhvBziLBeIgIAQQhsA1g+ASQg4AQgxAAQglAAgigJg",
      )
    this.shape.setTransform(12.5532, 16.5311, 0.2117, 0.2117)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bicepspeintre,
    new cjs.Rectangle(0.1, 0.1, 24.9, 32.9),
    null,
  )

  ;(lib.bicepsosses = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#9C6143")
      .s()
      .p("AgsBWQATgEAQgjIAchAQAMgcgTgVIgTgPIgCgEIA3AQQgJAmgSApIgJASIgCAGQgUAlgSAKQgIAEgGABg")
    this.shape.setTransform(4.8, 8.575)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#B5714E")
      .s()
      .p("AgrAcIAvhxIAKAAIABAEIAVAPQATAVgMAcIgdBAQgPAjgUAEIAAgDIgCADIAAAAQgigXAOgjg")
    this.shape_1.setTransform(2.4013, 8.575)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bicepsosses, new cjs.Rectangle(-2.4, 0, 11.8, 17.2), null)

  ;(lib.bicepsguitare = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FC5810")
      .s()
      .p("AgwBEIAOABQAJAAAFgIQAEgHgEgJQgQgfgagkIgYghQBBiXA4BoIAzDHQADATgIANQgSAQgTAAQgrAAgxhNg")
    this.shape.setTransform(8.7159, 10.299)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bicepsguitare,
    new cjs.Rectangle(0, -4.2, 17.5, 29.099999999999998),
    null,
  )

  ;(lib.bicepspians_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#A54220")
      .s()
      .p("AhUBeIBHi/QAXg/BMA/QgFABg+CjQgGAOAFANQg3AkgaAAQgaAAAFgkg")
    this.shape.setTransform(8.5456, 9.7743)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.bicepspians_1,
    new cjs.Rectangle(0, -3.2, 17.2, 25.9),
    null,
  )

  ;(lib.avtbrassosseseuse = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFBDC3")
      .s()
      .p(
        "AhsA5QgHgGgCgKQgBgHABgKQACgPAEgGQADgDAHgBIALgDIAkgLQAIgCAagEQAUgCALgHQAegPAHgKIAEgBIANgDIAMgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgCACIgKAEIgCACIABAAIAjgCIAMgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIgCACQgKAGgZADIABABIAjgDIACAAQABAAAAABQABAAAAAAQAAABgBAAQAAAAAAABQgBADgFABIgKACIgHADIABAAIAPgBIAEABQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgVAGIADAAIADAAQAIACgBACQgBADgIAAIgeACIgPACQgSACgHADIgNAFQgKAFgTAMQgUANgLAFIgdAOQgNAGgEABIgEAAQgHAAgGgEg",
      )
    this.shape.setTransform(14.8107, 7.6683, 1.2498, 1.2498)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.avtbrassosseseuse,
    new cjs.Rectangle(0, 0, 29.7, 15.3),
    null,
  )

  ;(lib.avtbrasechec3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F2B186")
      .s()
      .p(
        "AgQA8QALhCgPhBQgJACgHgKQgDgEgHgQQAAAEgFADQgHgKAAgVQABgDAGgGQAGgEABgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgFgCgNADQgDACAAAJIgEABQgHgFACgKQAOgRAQAAQACAAAIAIIAPAWIAMATIAlA7QAJAPAUAuIAFAPQALAqAAAhQADAUgNAVQgLASgXALIgGACQg9AAAUhqg",
      )
    this.shape.setTransform(7.5396, 16.6)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.avtbrasechec3, new cjs.Rectangle(0, 0, 15.1, 33.2), null)

  ;(lib.avbrass = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#9C6143")
      .s()
      .p("AAqBBIgGgCIgCgBIgHgDQgRgJgOgZIgLgSIABAAIgBgCQgPgbgOgqIAUAlQAJARAUAkQAXAkARADIgDAAg")
    this.shape.setTransform(20.375, 20.7)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#B5714E")
      .s()
      .p(
        "ABMBhQgWgkgJgRIgUglQgIgXgGgYIgFgUQgFAEgfAEQgdADgQgBQgPgBgMgFQgNgFgCgGQgFgHAKAEQAFACALgBQgLgDgGgEIgJgFQgDgCgFgIQgEgHACgCQACgBAEACIAGAEIAKAGQgEgDgEgJQgEgJABgEQABgEAFAFQAEAEAFAIQAFAJAOAGQgGgIgBgQQgBgNABgIQABgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQACABABADIAAACQAAAEAEAMQAGANAHAHQAIAIAJgBQAJgBAGgGQAGgGgEgLQgGgNgOAAQgegDAAgFIAAgBQACgCAMgBQANgCAPADQARAEAsAdQAJAGARAWQAQAVAOAWQANAWAdA0QAlA+glAdQgRgDgWgkg",
      )
    this.shape_1.setTransform(13.3506, 13.575)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.avbrass, new cjs.Rectangle(0, 0, 26.7, 27.2), null)

  ;(lib.avbraspians = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#A54220")
      .s()
      .p("AASBUIhfheQgTgSAGgcQAbhJBRBRIBEBRQAJAKgDAPIgCAEQgEALgMAIQgIAGgJADIgMACIgCAAQgPAAgKgIg")
    this.shape.setTransform(9.2409, 5.7242)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AARA0QgOgCgGgLIgQgXIgBgBIgIgMIgFgJIgWgSQAJgDAIgFQALgJAFgKIAZAYIADAAIAaAKQAFACgBAFQgCAFgFgCIABACIACACIAXAiQADADgEAEQgFACgCgEIgRgYIgCAEIARAZQAEAFgFACQgEADgDgEQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAABQgDACgDgCIAAABIgEAAIgIAAg",
      )
    this.shape_1.setTransform(20.585, 17.175)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.avbraspians,
    new cjs.Rectangle(0, -3.4, 26.2, 25.799999999999997),
    null,
  )

  ;(lib.avbrasguitare = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgnAcQgIgFgCgEQgCgBgBgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQgEAAgCgFQgBgFAEgBIAegFIAAgEIgbAGQgFABgCgFQgBgFAFgBIAngJIACAAIADgBQgGgCACgFQACgEAFABIAaAMQAFACgBAEIABABIAlADIgEADQgJAIABAMQABAHADAGIgSgCIgJACIgPAEIgJABIgRAEIgFAAQgKAAgIgGg",
      )
    this.shape.setTransform(5.9659, 3.4263)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FC5810")
      .s()
      .p(
        "ABEArIiagYQgLgCgJgJQgDgFgCgEQgDgGgBgGQgBgNAJgIIAEgEQAHgFAJABIBNAEQCWgHgcBDIgBACIgFAGQgNANgRAAIgIAAg",
      )
    this.shape_1.setTransform(22.3854, 6.0791)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.avbrasguitare, new cjs.Rectangle(0, 0, 34, 10.4), null)

  ;(lib.avantbras = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#51495B")
      .s()
      .p("AgFALQgMgCgIgIQARgCAQgKQADgBAFACIAIADQAEAFgEAEIgIAHQgHADgHAAIgHgBg")
    this.shape.setTransform(1.6191, 19.7595)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FF9999")
      .s()
      .p(
        "AALAXIgMgGIgOgEQgQgGgFgKQAFgLANgGQALgEAMAAQAHAAAIAHIAPANIACAMQABAIgDAEQgEAEgHABIgEAAQgFAAgEgCg",
      )
    this.shape_1.setTransform(8.5375, 18.2475)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#51495B")
      .s()
      .p(
        "AhkBCIgDgEQAagVAjgaQAkgYAWgLIAfgQIAdgQIARgJIAEgEIAHAAIAAAFQAAAHgSAPIgrAhQgWAQgLAFIgUAKQg6AZgPAIQgNAHgDAAIgBAAg",
      )
    this.shape_2.setTransform(14.1001, 12.8132)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FF9999")
      .s()
      .p("AhiAjQgCgHAAgJIABgRQBGgNAUgFQAhgKAagOQBSgFgzBIQglANgvABIgNABQgkAAgugHg")
    this.shape_3.setTransform(21.36, 17.0138)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.avantbras, new cjs.Rectangle(-1, 6.2, 32.4, 15), null)

  ;(lib.avantbras_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FC5810")
      .s()
      .p("AgngOQgFgKADgKQADgLAJgGQAJgGAMACQAKADAGAJIAjA0Ig4Avg")
    this.shape.setTransform(7.833, 15.7588, 1.1499, 1.1499)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AADAUIgPgfQAAgHADgBIABgDQACAAAGAEQAIAFACAKIACATQABABAAAAQAAAAgBABQAAAAAAABQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAg",
      )
    this.shape_1.setTransform(3.9961, 2.9266, 1.1494, 1.1494)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgEAEAAQADgBAAAEIAEAeQAAAEgEAAIgBAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAgBg")
    this.shape_2.setTransform(2.9271, 2.3443, 1.1494, 1.1494)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgEAEAAQADgBAAAEIAEAeQAAAEgEAAIgBAAQgBAAAAAAQAAAAAAAAQAAgBgBgBQAAAAAAgBg")
    this.shape_3.setTransform(2.065, 2.2283, 1.1494, 1.1494)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F48F7D")
      .s()
      .p("AgBAQIgEgeQAAgDAEgCQACABABADIAEAeQAAAEgEAAQgDAAAAgDg")
    this.shape_4.setTransform(0.9156, 2.7168, 1.1494, 1.1494)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F48F7D")
      .s()
      .p("AAEAYQgFgCgEgDIgJgJQgHgIABgJQAAgHAJgFQAHgDAHgBQAEgBACABQAEACADAGQADAEACARQADATgNAAIgHgBg")
    this.shape_5.setTransform(3.2351, 5.4038, 1.1496, 1.1496)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F48F7D")
      .s()
      .p("AAEAKIgNgOQgDgCADgDQADgDADADIANAOQADACgDADIgDACIgDgCg")
    this.shape_6.setTransform(1.246, 6.122, 1.1494, 1.1494)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#F48F7D")
      .s()
      .p("AgegiIAagHIAiBEIgcAPg")
    this.shape_7.setTransform(5.8242, 11.1503, 1.1497, 1.1497)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FC5810")
      .s()
      .p(
        "AgZBxQgagDgLgbQgFgQgLgTIgJgPIA5gvIANATQAFAGAFgEQADgCAHgJQAOgoAZgmQAMgTALgLIAXBwIhKBeQgNASgXABg",
      )
    this.shape_8.setTransform(16.3786, 18.4612, 1.1499, 1.1499)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.avantbras_1, new cjs.Rectangle(0, 0, 26.5, 31.5), null)

  ;(lib.pianiste = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_4
    this.instance = new lib.bicepspians_1()
    this.instance.setTransform(11.85, 43.5, 1, 1, 0, 0, 0, 11.7, -1.4)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(70))

    // Calque_2
    this.instance_1 = new lib.avbraspians()
    this.instance_1.setTransform(4.8, 64.25, 1, 1, 0, 0, 0, 4.8, 0.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({regY: 0.3, scaleY: 1.1617, skewX: -9.9811, x: 4.6, y: 65.8}, 14, cjs.Ease.get(1))
        .to({scaleX: 1.1412, scaleY: 0.9623, skewX: 0, x: 5.5, y: 64.85}, 15, cjs.Ease.get(1))
        .to(
          {regX: 4.9, regY: 0.4, scaleX: 0.9434, scaleY: 1.1537, skewX: 22.3194, x: 4.4, y: 64.6},
          15,
        )
        .to(
          {regX: 4.8, regY: 0.5, scaleY: 1.0672, rotation: -9.9191, skewX: 0, x: 3.95, y: 66.2},
          13,
          cjs.Ease.get(1),
        )
        .to({regY: 0.2, scaleX: 1, scaleY: 1, rotation: 0, x: 4.8, y: 64.25}, 12)
        .wait(1),
    )

    // corps_pianiste
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#001443")
      .s()
      .p(
        "AAAAGQgFgCABgEQABgGAEABQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQgBAFgEAAIAAAAg",
      )
    this.shape.setTransform(31.4582, 21.9518, 1.15, 1.15)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#001443")
      .s()
      .p("AAAAGQgFgBABgFQABgGAEABQAFABgBAFQgBAFgDAAIgBAAg")
    this.shape_1.setTransform(38.7976, 23.1493, 1.15, 1.15)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F4F4F4")
      .s()
      .p("AgwAxQgUgUAAgdQAAgcAUgUQAUgVAcABQAdgBAUAVQAUAUAAAcQAAAdgUAUQgUAVgdgBQgcABgUgVg")
    this.shape_2.setTransform(23.2159, 7.98, 1.15, 1.15)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AgLAEIgCgCQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAJgCQAJgCAIADQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQgHgDgIACIgHACg",
      )
    this.shape_3.setTransform(39.6442, 20.7929, 1.1495, 1.1495)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNgDQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAIAJANAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgQAAgJgLg",
      )
    this.shape_4.setTransform(32.8044, 29.1604, 1.1497, 1.1497)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AAQAFQgIgGgMABIgLACIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIANgEQANgBAJAHQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgCACIgBgBg",
      )
    this.shape_5.setTransform(31.7111, 19.4153, 1.1495, 1.1495)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#E56E5E")
      .s()
      .p(
        "AAOAbQgMgFgLgJQgKgIgJgKIgHgLIgDgHIgBgGIAPAVQAIAJAKAIQAJAJAMAFQAHACAFABIANABQgGADgHAAQgIAAgFgDg",
      )
    this.shape_6.setTransform(28.0014, 31.7065, 1.1492, 1.1492)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#E56E5E")
      .s()
      .p(
        "AgHASIAGgCIACAAIACgBIABgBIAAgBIgBgBIgBgGQgCgKAAgOQAEAIADAPIABAGIAAACIAAACQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgEABg",
      )
    this.shape_7.setTransform(35.241, 25.1365, 1.1497, 1.1497)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F48F7D")
      .s()
      .p("AgDAXQgIgCgFgIQgEgHACgJQACgJAHgGQAHgGAHACQAIABAEAIQAEAIgCAJQgCAJgHAGQgFAEgFAAIgDAAg")
    this.shape_8.setTransform(23.3182, 24.2951, 1.1492, 1.1492)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgSBIIgEgBQgNgEgIgOQgHgMAEgPIAahZQADgKAIACIABAAIAzAQQADABACAEQABAEgBAFIgaBYQgDANgMAHQgIAFgKAAIgHAAg",
      )
    this.shape_9.setTransform(25.7291, 33.2338, 1.1495, 1.1495)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgVBcQgdgFgPgZQgRgYAHgfIAFgbQASggBsgoIABgBQAHAJAKAHQAGAFgCAPIgOBGQgFAegSAXQgVAcgcAAIgNgCg",
      )
    this.shape_10.setTransform(32.5209, 24.1384, 1.1495, 1.1495)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#F48F7D")
      .s()
      .p("AgeAVQgNgIAAgNQAAgMANgIQANgJARAAQASAAANAJQANAIAAAMQAAANgNAIQgNAJgSAAQgRAAgNgJg")
    this.shape_11.setTransform(23.954, 39.4265, 1.1498, 1.1498)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#A54220")
      .s()
      .p(
        "AhwAjQgYgBgIgKQgFgGAGgDIALgDIALgDQAKgDAOAAIAWACQAagBAbgOIATgLIARgKQAhgOAaAPQAHAEAKAKIARAPQASAQAXAAQgPAFgVgBQgXgBgLACIgQADQgFAAgHgCIgMgBQgFAAgMADQgNADgFAAQgFAAgJgCQgKgDgFAAQgGgBgcAGQgbAHgTAAIgGgBg",
      )
    this.shape_12.setTransform(26.3785, 96.6956, 1.1497, 1.1497)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FC5810")
      .s()
      .p("AiFAyQACgxAAgZQCaANBngnIAIA+Qg5AbhJAIQgjAEgrAAQgcAAgfgBg")
    this.shape_13.setTransform(26.6472, 71.081, 1.1497, 1.1497)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#A54220")
      .s()
      .p(
        "AiRBzQgEgEAAgLIABgTQAAgNAIg0QAHgvAAgRIABgcQBPAEA6gHQBJgIA4gbIADAXQACAOAAArQAAAiAEAVQAGAbABAXIAAAXQgBAOgHAHg",
      )
    this.shape_14.setTransform(26.561, 85.6668, 1.1497, 1.1497)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#A54220")
      .s()
      .p(
        "AhxCMQAAgkgGghIgPhPQgNhBAFgIQAGgIAdgTQBNgzBNAZQAtAOAhAiQAEAEACAFQAIAPADAZQgIA7AKBbQhOAehrAAQgjAAglgDg",
      )
    this.shape_15.setTransform(24.5819, 52.1299, 1.1497, 1.1497)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#A54220")
      .s()
      .p(
        "AgbD7QgLgGgBgKQgBgIAKgSQAJgPgDgKQgCgEgFgFQgGgGgCgDQgFgKAIgRQALgWAAgHQABgHgFgNQgEgNAAgHQAAgLALgUQALgTAAgMQAAgJgKgRQgKgRAAgKQgBgLAJgUQAJgVAAgLQgBgHgEgJIgHgQQgHgSAEgkQADgkALgRQAKgQANAQQAJALAKAYQAMAfACA1QACAxgDB0IgHDaQgIgCgNABIgTACIgCAAQgKAAgIgFg",
      )
    this.shape_16.setTransform(10.0341, 71.2718, 1.1498, 1.1498)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "ABJA7QgEgCgHgIQgJgMgOgHQgOgHgQgBQgHAAgLACIgTADQgZACgUgHQgJgDgEgEQgFgGgBgJQAAgIAEgIQAJgRADgEQAIgJAMgEQAmgKASABQAFABAQAEIAUAGQAVAEAIAIQAEAEAFALIAIASQAFAJAAAGQABAGgEAJIgFAOIgCANQgBAGgEAAIgEgBg",
      )
    this.shape_17.setTransform(32.3704, 13.676, 1.1497, 1.1497)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AgkBjQgSgQgKgSIgfg0IgFgNIgCgIIAAgEIgBgOIABgCIADgOIADgKIACgDIAMgXIAEgEIAIgJQANgPAZgGQAPgFALAAIAOABIABAAIAbAGIADABQAAACAHAAIADABIAVANIAOANIAAAAIABACIAAABQABAGAKATQAJAPgEAJIgCAGQgCADAAADIADAGIADAFQABAFgEAFIgHALIAAAFQgUAsgRAWQgVAZgbAFIgGABQgRAAgVgTg",
      )
    this.shape_18.setTransform(30.8252, 20.4223, 1.1497, 1.1497)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "Ag1CCQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQABglAQgMQAGgFAPgEQALgDAEgCQAIgFAFgJQAGgJgBgKIgBgIQgBgHAAgGQABgIAGgHIALgNQAKgJAEgFQAKgRgGgRIgHgTQgBgEAAgNQAAgRgEgGQAAAAgBgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAABQAAAAABABQAFAHAAASQgBAJABAHIAHATQAHATgMASIgNAQQgQAOgBAKIAAAMIACAJQAAALgGAKQgFALgKAFQgFADgLADQgNACgGAFQgPALgBAkQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAg",
      )
    this.shape_19.setTransform(38.1064, 29.3392, 1.1497, 1.1497)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(70),
    )

    // Calque_5
    this.instance_2 = new lib.bicepspians()
    this.instance_2.setTransform(38.35, 42.8, 1, 1, 0, 0, 0, 7.9, -2.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(22)
        .to({regY: -2, rotation: -12.7172, x: 38.3, y: 42.9}, 14)
        .to({rotation: 6.4895, x: 38.35}, 14, cjs.Ease.get(1))
        .to({regY: -2.1, rotation: 0, y: 42.8}, 12)
        .wait(8),
    )

    // Calque_3
    this.instance_3 = new lib.bribripianiste()
    this.instance_3.setTransform(43.2, 65.75, 1, 1, 0, 0, 0, -0.7, 1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({rotation: 7.7195}, 9, cjs.Ease.get(1))
        .to(
          {regX: -0.6, scaleX: 0.7339, scaleY: 1.0886, rotation: 0, x: 43.25, y: 65.8},
          13,
          cjs.Ease.get(1),
        )
        .to({x: 47.05, y: 63.55}, 14)
        .to({x: 39.55, y: 65.8}, 14, cjs.Ease.get(1))
        .to({regX: -0.7, scaleX: 1, scaleY: 1, x: 43.2, y: 65.75}, 12)
        .wait(8),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-9.8, 0, 78.6, 100.8)

  ;(lib.peintre = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // biceps
    this.instance = new lib.bicepspeintre()
    this.instance.setTransform(95.5, 32.35, 1, 1, 0, 0, 0, 18.7, 2.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(19)
        .to({regX: 18.8, regY: 2.2, scaleX: 1.2761, x: 95.65, y: 32.45}, 20)
        .to(
          {
            regX: 18.9,
            regY: 2.4,
            scaleX: 1.3907,
            scaleY: 1.0033,
            skewX: -22.3511,
            skewY: -20.4909,
            x: 95.7,
            y: 32.7,
          },
          15,
        )
        .to({regY: 2.5, scaleX: 1.2532, scaleY: 1.0023, skewX: 6.136, skewY: 6.9656}, 14)
        .to(
          {
            regY: 2.6,
            scaleX: 1.2491,
            scaleY: 1.0746,
            skewX: -17.9361,
            skewY: -16.0744,
            x: 95.75,
            y: 32.8,
          },
          20,
        )
        .to({scaleX: 1.1662, scaleY: 1.0033, skewX: -8.1865, skewY: -6.3255, x: 95.7}, 18)
        .to(
          {regX: 18.7, regY: 2.1, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 95.5, y: 32.35},
          18,
        )
        .wait(1),
    )

    // avtbras
    this.instance_1 = new lib.avantbras()
    this.instance_1.setTransform(79.25, 58.45, 1, 1, 0, 0, 0, 27.9, 15.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(19)
        .to({scaleX: 1.1127, x: 74.6}, 20)
        .to({regX: 28, regY: 15.5, scaleX: 1.216, rotation: -10.6673, x: 84.35, y: 64.15}, 15)
        .to(
          {
            regX: 28.1,
            regY: 15.7,
            scaleX: 0.9976,
            scaleY: 0.9997,
            rotation: 0,
            skewX: 9.0379,
            skewY: 8.4719,
            x: 75.05,
            y: 54.25,
          },
          14,
        )
        .to(
          {
            regX: 28.2,
            scaleX: 1.0487,
            scaleY: 1.071,
            rotation: -6.9549,
            skewX: 0,
            skewY: 0,
            x: 84.45,
            y: 63.75,
          },
          20,
        )
        .to({regY: 15.8, scaleX: 0.9791, scaleY: 0.9999, rotation: 8.0438, x: 80.25, y: 60.05}, 18)
        .to({regX: 27.9, regY: 15.4, scaleX: 1, scaleY: 1, rotation: 0, x: 79.25, y: 58.45}, 18)
        .wait(1),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000033")
      .s()
      .p("AgNBmQgCgiAJgxIAHgoIAGgpIAAgTIAFgUIADAeQAAARgBANIgIBGQgEApACAeQgDgBgFACIgHABIgCAAg")
    this.shape.setTransform(121.6402, 92.9417)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#000033")
      .s()
      .p(
        "AglBaQAZlrghlBIAYAAQAIARAEAjQAEAkAGAPIAAAvQAOAmAEA9QACBDAEAfQAHBcgODGQgNC8AMBnQAOCbASBhQgwABgWAHQgrjeAbkag",
      )
    this.shape_1.setTransform(124.0103, 91.5133, 0.2118, 0.2118)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#000033")
      .s()
      .p(
        "AgLA9QgJgEgRgMIgDgFQgBgDACgEQALgWALgNQAWgXAZgnIACACIACACIAAgDQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAFAEQABADgBADQAAAZgFAbQgDAWgJAdIgCAIQgCAGgEABIgJABQgIAAgKgEgAAKgOQgRAVgHAMQgEAGAAAEIgCABIgBACIAAADQAIAJAGACQAJAFAHgGIAOguQAJgcAAgUQgIAPgOAUg",
      )
    this.shape_2.setTransform(119.6, 84.555)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#000033")
      .s()
      .p(
        "AgYAyIgDgRQgCgRgEglQAAgSgFgUIAFAAIgBgCIgBgBIACgBIABgBQADgBADACQADABAAADQAqAuAUA4QgIAMgRAFQgOAFgRAAQgFgFgCgKgAgTgLIAEAmIADALQACAGADAEQAaAAACgPIgVgqQgMgZgNgRQADARADAXg",
      )
    this.shape_3.setTransform(126.95, 84.9179)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#000033")
      .s()
      .p(
        "AitFbQgEgqgBg4IAAhjQACgyAHhQIANiBIAAhEIgEhDQgDgogFgaIAOgUIAOgUQADAPAHAfQAIAdACAQIALA4IALA4IAGATQAEAJAIACQA7AUBGAHQA3AGBLAAIAAAWQgvgCg7gGIhqgMIgSgBIgRABQgEAHgDAJIgDARIgLA6QgFAegCAcQgHA7gBBJQgBArACBXQgNAOgUAGQgJACgIAAQgLAAgJgEg",
      )
    this.shape_4.setTransform(111.275, 87.221)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#CC524C")
      .s()
      .p(
        "AifOFQgah9gTieQgKhbgQjAQgEh9AEj4QAEj3gEh/QB4ijAnhCQBPiHAVh8QAsCJAeCfQAYCCAUCsQAMBugBDAQgCDPAHBYQAFCIAVCnQALBaAhDVg",
      )
    this.shape_5.setTransform(100.3308, 63.9341, 0.2117, 0.2117)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F15F46")
      .s()
      .p(
        "AiNECQgEgVgDgdIgFgyQgCgfgChLQgChCgEgnIgIg6QgFgjgCgYQgBgZACgPQADgWALgOQAggmAzgHQA0gGAkAfQAGABAGAHIAKAMQAOAQAZA1QAZA2AWBKQAWBKALA8QAMA8ACADIACAFQACAWAFAgIAIA0IgjAAQguAdhfAEIgSABQhSAAgtgjg",
      )
    this.shape_6.setTransform(110.8969, 56.9525)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#51495B")
      .s()
      .p(
        "AmoYvQgZgKgRglIgdhHIAAgYIgLgTQgFgKAAgKIgXhuQgnjfgDj8QgCjHAUkPIAYj0QAAgLAIgUQAHgUAAgMIBHouQBApgggoFIPXAAQAkE/hcEfQhcCuhXEJQhcEtgzCVIghE6QgTC6gTCBQgXCtgCEUQgCFpgFBYQACBAgCAiQgDA6gUAoQgYAeghARQghAQgjAAQgxAGguAAQiRAAh6g9g",
      )
    this.shape_7.setTransform(105.9392, 117.8239, 0.2117, 0.2117)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F1F1F9")
      .s()
      .p("AhLAQQAQgmAygGQAqgGAoATQAGAGgFAJQgFAKgMAGQghANggABIgJABQgiAAgYgPg")
    this.shape_8.setTransform(81.2062, 70.6626, 0.2117, 0.2117)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#F1F1F9")
      .s()
      .p("AhAAYQgZgXAhgPQBXglAtAlQgQAkguAJQgNACgMAAQgaAAgbgJg")
    this.shape_9.setTransform(76.9739, 72.6504, 0.2117, 0.2117)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#F1F1F9")
      .s()
      .p("AhAAYQgKgKgBgGQgCgMAVgKQBZgjAsAjQgRAkgtAJQgNACgNAAQgaAAgbgJg")
    this.shape_10.setTransform(71.6379, 73.654, 0.2117, 0.2117)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#F1F1F9")
      .s()
      .p("AhIALQgLgKATgKQAQgKAPAAQAngKAQgBQAigCAVAVQgaAfgrAJQgMACgMAAQggAAgYgUg")
    this.shape_11.setTransform(66.4647, 73.261, 0.2117, 0.2117)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#F1F1F9")
      .s()
      .p("AhAAYQgZgXAhgPQAdgSAlAAQAlAAAdASQgQAkguAJQgNACgMAAQgaAAgbgJg")
    this.shape_12.setTransform(63.9746, 71.3192, 0.2117, 0.2117)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#F1F1F9")
      .s()
      .p("AhKALQAEgEAEgHQAEgIAEgEQBYgkAtAkIAAAPQgfAYgsADIgLABQgmAAgZgUg")
    this.shape_13.setTransform(66.8384, 69.267, 0.2117, 0.2117)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#F1F1F9")
      .s()
      .p("AhEAKQgLgKATgKQAQgKAPAAQApgKANgBQAhgCAPAVQAAAKgFAEIgLAIQgrASgZADIgMABQggAAgNgWg")
    this.shape_14.setTransform(72.2127, 68.443, 0.2117, 0.2117)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#F2B186")
      .s()
      .p("AhaAHQAagZAmgFQAIgBA9AAQALAGANABIAXABQAAAQgCAFQgDAKgLAAQgNgChHAKQgMACgLAAQgjAAgWgSg")
    this.shape_15.setTransform(78.8373, 68.0143, 0.2117, 0.2117)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjdC9QijgKh7g1QgfgNgSgaQgTgeAFgiQALgeAYgZQANgOAngfQAJgKASgFIAcgKQB3g7CXgTQB0gPCkAHICPAJQBXAFA9AJIA6ANQAfAIAVALQAGAGAVAOQAQALAFAJQAGAkgVAmQgVAngjAMQicCHkNAOQh8AKhdAAQgrAAgkgCg",
      )
    this.shape_16.setTransform(72.6724, 70.8288, 0.2117, 0.2117)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#D4E3FB")
      .s()
      .p(
        "AimC9QihgJibguQhAgZgXguQgLghASgjQAPgfAhgaQBUg9BogfQBbgbBzgGQCygEBZABQCZABByAZIAnAAQBAAVAHAEQAlASALAkQAKAjgcAhIg1AxQgFgFgHAGQgJAHgDAAQiABZh0AVIhPAYQh8AShyAAQgqAAgogDg",
      )
    this.shape_17.setTransform(72.8234, 71.8208, 0.2117, 0.2117)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#443D4F")
      .s()
      .p(
        "ACvaoQhTgFh0gUQgzg4gZhZQgPg0gUhuQhSlsgcn5QgGh0gMk6QgKkPgLihQgYkdg2kMQg2kPhZkOQgOhMgRgqQAQgIAfgIQAggIAPgIQAqgMBNgPQBUgRApgLIAoAAQAIgEAQgEQAPgEAIgEIAnAAQCTgfCvAAQA/AIAgAHQA0ALAqAVQAcARATAcQARAbAHAeQBAFahYEcQgjBTgMBiQAAAIgIAMQgIAMAAAIQgHBAgSBeQgVBpgKA1QgiC9ATCEIAYDzQAIBtACApQADBSgFBDIAAD8QAEAoAEBOQAEBPAEAnIAsFHQAbDDAACEQALAXgLAYQgLAZgfAFQgFABgwAAQhCAMhKAAQgeAAgfgCg",
      )
    this.shape_18.setTransform(118.4497, 115.7796, 0.2117, 0.2117)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFCCCC")
      .s()
      .p(
        "AADA5Qg8AAgtgHIAAghQANgDAhgGQAggFAQgEQA1gPARgpQARAKAKAMQANAPABAQQADATgQARQgOAPgVAFIgFAAQgKAEgNABIgKABIgOgBg",
      )
    this.shape_19.setTransform(91.0419, 66.0125)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#774228")
      .s()
      .p(
        "ACVCUQhSgLilgUQilgUhTgMQhyAAgcg3Qgfg5A2g0QApgnBGgYQBogjCVAHQCrAQBXAEQAAAQATAKQAIAFAcAIQA3ANAvgCQAzgBA0gRIA/BYQAfA2gQAtQgZBdh2AJIgWABQhAAAh1gYg",
      )
    this.shape_20.setTransform(116.7623, 155.3466, 0.2117, 0.2117)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFCAA6")
      .s()
      .p("AgDAaQhVgIgxAOIAAg/QAjgDBmAJQBUAIA2gOIgBAfQgCAPgFARIgVAAQglAAhLgGg")
    this.shape_21.setTransform(122.6678, 152.3181, 0.2117, 0.2117)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#ECB64F")
      .s()
      .p(
        "AhyBsIgLgdQgGgPACgFQABgEAXgHQAbgJALgLQAKgKgDgNQgCgKAOgFQAQgHABgOQgBgUADgRQAEgZgPgHQBEgIBGgGQgGADACAIIAjCaIACAGQABAIgFAHQgOAWhCAIIhTAKQgdADgTAAQgcAAgCgHg",
      )
    this.shape_22.setTransform(48.643, 64.2311)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#BA5325")
      .s()
      .p(
        "AiqBJQgQgHAng9QAog9AbgFQAmgGBlgHIA/A0QA+A0gKAHQgEAEgeACQgKAAgFAEQhGAGhEAIQgIgEgOABIhCAMQgiAFgTAAQgLAAgFgCg",
      )
    this.shape_23.setTransform(45.9205, 48.0293)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(125),
    )

    // tete
    this.instance_2 = new lib.tetepeintre()
    this.instance_2.setTransform(103.65, 27.45, 1, 1, 0, 0, 0, 19.4, 27.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(19)
        .to({regX: 19.5, rotation: -20.4812, x: 103.75, y: 27.4}, 20)
        .wait(35)
        .to({rotation: -9.4528, y: 27.5}, 14)
        .to({regX: 19.4, rotation: 0, x: 103.65, y: 27.45}, 12)
        .wait(25),
    )

    // chevalet
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p("AAEAQQhBgIghAEQAAgEgEgIQgDgHAAgDQAlgPA9AGQBCAJAfAAQAIAWAAAIIgXACQgdAAgugGg")
    this.shape_24.setTransform(46.4666, 20.7905, 0.2117, 0.2117)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p("AAEAPQg+gIgkAOQAAgEgDgMQgFgLAAgEQAmgOA9AFQBCAJAfAAQAJAXgBAIIgNAAQgbAAg6gGg")
    this.shape_25.setTransform(23.1389, 20.7847, 0.2117, 0.2117)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p("AAMAjQhPgHgfADQABgmgYgYQArgIBHAGQBPAGAigEQAEANAEASQAEAUAEALQgXAGgkAAQgXAAgcgCg")
    this.shape_26.setTransform(73.8798, 98.8695, 0.2117, 0.2117)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p("AAIAjQhPgHgeADQgEgLgEgUQgEgSgEgNQAngIBHAGQBPAGAegEQAFANADASQAEAUAEALQgXAGgkAAQgXAAgcgCg")
    this.shape_27.setTransform(41.799, 98.8695, 0.2117, 0.2117)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#CE7B42")
      .s()
      .p(
        "ADsBAQlIgsjKgKQkkgNjwAkIgvhGQDrglEeAJQDFAHFIAlQFMAjEigrIAkAlQAXAXAUAKQidAQhAAEQh5AJhjgGQggAAhCADIghABQgnAAgbgEg",
      )
    this.shape_28.setTransform(70.1277, 139.0011, 0.2117, 0.2117)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#D4E3FB")
      .s()
      .p(
        "AGOcaQhMimhGjKQg0iUhGjoQhelPgvj3QgbiRgwlTQgskwgmizIghisQgThjgThEQhQkmhIjWQhakLhojgICVAAQDNHLCJIgQB0HMBUJOQAcCjAqC3QAhCPA3DMIBHDkQB+FwB9Elg",
      )
    this.shape_29.setTransform(20.7204, 59.713, 0.2117, 0.2117)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#F1F1F9")
      .s()
      .p(
        "ALgcvQmXgFp/gdQg2AAjCgHQiZgFhfAEQiNm7iPp8QhSlriirpIgUhuQgMhEgPgrQgFgGgFgJQgFgKAAgGQgOhggRg2QhLj7gviQQhGjWhEiqQgFgIAAgMQAAgLgEgIQgPgggfhHQgJgqgfg8QHsgjKWANQL+AaGCAMQAqBjA3CVQA8ClAgBTQAXBQAzCYQA0CcAXBMQCTIaBBDlQB3GkBtFTQDSJlEPIJQlqAUmhAAQiDAAiJgCg",
      )
    this.shape_30.setTransform(49.0492, 59.6582, 0.2117, 0.2117)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#774228")
      .s()
      .p(
        "AEPCqIhagCQg9gFjGgZQihgUhjgFQhLAAghgJQg5gPgQgvQgahIBGg0QA0goBVgQQD7hEETBMQAQAIAIAIQAzAXA/gDQA7gDA3gZQAwBFASAjQAhA9gUA2Qg3A9hmAKQgZADgiAAIgggBg",
      )
    this.shape_31.setTransform(94.6278, 155.4565, 0.2117, 0.2117)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#FFCAA6")
      .s()
      .p("AgHAaQhRgIgxAOIAAg/QAjgDBmAJQBUAIA2gOQgEANgEASIgIAgIgUAAQglAAhIgGg")
    this.shape_32.setTransform(101.2031, 152.3518, 0.2117, 0.2117)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#CE7B42")
      .s()
      .p(
        "EAQPA0dQhei8i2mDQgPgfgghHQjZoDiYm3Qixn4h7nmQhCkEhqn6Qhqn8hDkEQiToci6oAQi3n5jon6QgEgDgHgMQgJgMgDgEQgkhYhHiQQhYiugag6IDNAAQINQEFlRxQADALAEAcQAEAbAEAMQBnFEBfGfQAjCZCAJbQAAADAIAMQAIANAAADQBEFMBpE6QAEAMAEAbQAEAcAEAMQDAJeDXIPQDpI/ERH/g",
      )
    this.shape_33.setTransform(69.1275, 84.4537, 0.2117, 0.2117)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#CE7B42")
      .s()
      .p(
        "EAKZA0dQgSg4hAilQg1iKgWhaQgEgKgMgZQgLgXgFgNQiuoqhwnBQiEoQhNnzQgkjqgllkQgxnhgMhlQhptojptUQiBnSiDlgQgDgTgNgpQgLgmgEgUQgUg4grhuQgshugTg3IDMAAQBcDyBjEnQBJDZBqFMQA6DHA6DvQAhCEBIE4QBBE4AoDuQAvEcAcEEQApG7AmEoQBLIpB+IhQB5IRCuIiQAEAMAMAXQALAXAEAMQArCMBIDFQBSDeAnBug",
      )
    this.shape_34.setTransform(38.5496, 84.4537, 0.2117, 0.2117)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#CE7B42")
      .s()
      .p(
        "EgI2AkyQAIgwAEhaQAEhcAIguQAAgcAEg2QAEg4AAgbQAAgMAIgcQAIgbAAgMQAil7BRmPQBJlpB3mbIBGjlQCNmEBunVQBmmpA2leQA9mRAMl2IDkAAQgGEGglE0QgaDcg5FfQhCFZhUE8QhVFBhvE8QhBDCg9DoQgvCvg/EJQhKFcgvFjQgrFJgZFxg",
      )
    this.shape_35.setTransform(25.803, 95.6963, 0.2117, 0.2117)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#F1F1F9")
      .s()
      .p(
        "ACcGFQhWgBiHgGIg0gBIg1gBQgmhdgYhpQgXhqgOhPIgRhmQgCgPgDgJIgCgDIgBgDQgEgVgDgLIgahUQgPgtgOgkIgBgEIgBgEIgKgWQgCgJgHgNQBpgHCMADIDzAIIAUA0IAUA1IAQAxIAQAxIAtCiQAZBZAXBHQAsCCA5BuQhLAFhXAAIg7gBg",
      )
    this.shape_36.setTransform(48.95, 59.5571)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
          ],
        })
        .to(
          {
            state: [
              {t: this.shape_35},
              {t: this.shape_34},
              {t: this.shape_33},
              {t: this.shape_32},
              {t: this.shape_31},
              {t: this.shape_30},
              {t: this.shape_29},
              {t: this.shape_28},
              {t: this.shape_27},
              {t: this.shape_26},
              {t: this.shape_25},
              {t: this.shape_24},
            ],
          },
          19,
        )
        .to(
          {
            state: [
              {t: this.shape_35},
              {t: this.shape_34},
              {t: this.shape_33},
              {t: this.shape_32},
              {t: this.shape_31},
              {t: this.shape_36},
              {t: this.shape_29},
              {t: this.shape_28},
              {t: this.shape_27},
              {t: this.shape_26},
              {t: this.shape_25},
              {t: this.shape_24},
            ],
          },
          20,
        )
        .wait(86),
    )

    // Calque_6
    this.instance_3 = new lib.Path()
    this.instance_3.setTransform(71.2, 151.3, 0.2118, 0.2476, 4.2084, 0, 0, 333.9, 39.3)
    this.instance_3.alpha = 0.2891

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, -0.2, 142.1, 166.29999999999998)

  ;(lib.ombrageee = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.Path_23()
    this.instance.setTransform(56.45, 10.2, 1.2, 1.2, 0, 0, 0, 47.1, 8.4)
    this.instance.alpha = 0.1992

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.ombrageee, new cjs.Rectangle(0, 0, 112.7, 20.3), null)

  ;(lib.notemusiquecopy = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_3
    this.instance = new lib.ronde()
    this.instance.setTransform(57.55, 48.65, 0.25, 0.25, 0, 0, 0, 5.6, 3.2)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.5,
            regY: 3.3,
            scaleX: 1.5,
            scaleY: 1.5,
            guide: {
              path: [
                57.7,
                48.7,
                56.8,
                44,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.2,
                112.9,
                -11.7,
                148.2,
                -36.4,
                156.3,
                -50.2,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.3,
                105.1,
                -145.3,
                92.9,
                -163.4,
                90.4,
                -167.2,
                88.4,
                -171,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 44.9996,
            guide: {
              path: [
                88.3,
                -171,
                76.6,
                -193.1,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.3,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.6,
                135.7,
                -304.6,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(73),
    )

    // Calque_2
    this.instance_1 = new lib.croche()
    this.instance_1.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(42)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(60),
    )

    // Calque_1
    this.instance_2 = new lib.crochedouble()
    this.instance_2.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 5.6, 5.2)
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(55)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.7,
            scaleX: 1.875,
            scaleY: 1.875,
            rotation: -44.9997,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.8,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                85.1,
                -175.2,
                81.7,
                -187.8,
              ],
            },
          },
          65,
        )
        .to(
          {
            scaleX: 1.8749,
            scaleY: 1.8749,
            rotation: 14.9998,
            guide: {
              path: [
                81.7,
                -187.7,
                77.8,
                -202.2,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(47),
    )

    // Calque_9
    this.instance_3 = new lib.croche()
    this.instance_3.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_3._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(72)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(30),
    )

    // Calque_8
    this.instance_4 = new lib.crochedouble()
    this.instance_4.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 5.6, 5.2)
    this.instance_4._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(88)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.7,
            scaleX: 1.875,
            scaleY: 1.875,
            rotation: -44.9997,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.8,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                85.1,
                -175.2,
                81.7,
                -187.8,
              ],
            },
          },
          65,
        )
        .to(
          {
            scaleX: 1.8749,
            scaleY: 1.8749,
            rotation: 14.9998,
            guide: {
              path: [
                81.7,
                -187.7,
                77.8,
                -202.2,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(14),
    )

    // Calque_7
    this.instance_5 = new lib.croche()
    this.instance_5.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_5._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(101)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .wait(2),
    )

    // Calque_6
    this.instance_6 = new lib.ronde()
    this.instance_6.setTransform(57.55, 48.65, 0.25, 0.25, 0, 0, 0, 5.6, 3.2)
    this.instance_6._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(124)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.5,
            regY: 3.3,
            scaleX: 1.5,
            scaleY: 1.5,
            guide: {
              path: [
                57.7,
                48.7,
                56.8,
                44,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.2,
                112.9,
                -11.7,
                148.2,
                -36.4,
                156.3,
                -50.2,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.3,
                105.1,
                -145.3,
                92.9,
                -163.4,
                90.4,
                -167.2,
                88.4,
                -171,
              ],
            },
          },
          82,
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, -316.9, 169.2, 374.09999999999997)

  ;(lib.notemusique = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_3
    this.instance = new lib.ronde()
    this.instance.setTransform(57.55, 48.65, 0.25, 0.25, 0, 0, 0, 5.6, 3.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to(
          {
            regX: 5.5,
            regY: 3.3,
            scaleX: 1.5,
            scaleY: 1.5,
            guide: {
              path: [
                57.7,
                48.7,
                56.8,
                44,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.2,
                112.9,
                -11.7,
                148.2,
                -36.4,
                156.3,
                -50.2,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.3,
                105.1,
                -145.3,
                92.9,
                -163.4,
                90.4,
                -167.2,
                88.4,
                -171,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 44.9996,
            guide: {
              path: [
                88.3,
                -171,
                76.6,
                -193.1,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.3,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.6,
                135.7,
                -304.6,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(73),
    )

    // Calque_2
    this.instance_1 = new lib.croche()
    this.instance_1.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(13)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(60),
    )

    // Calque_1
    this.instance_2 = new lib.crochedouble()
    this.instance_2.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 5.6, 5.2)
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(26)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.7,
            scaleX: 1.875,
            scaleY: 1.875,
            rotation: -44.9997,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.8,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                85.1,
                -175.2,
                81.7,
                -187.8,
              ],
            },
          },
          65,
        )
        .to(
          {
            scaleX: 1.8749,
            scaleY: 1.8749,
            rotation: 14.9998,
            guide: {
              path: [
                81.7,
                -187.7,
                77.8,
                -202.2,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(47),
    )

    // Calque_9
    this.instance_3 = new lib.croche()
    this.instance_3.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_3._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(43)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(30),
    )

    // Calque_8
    this.instance_4 = new lib.crochedouble()
    this.instance_4.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 5.6, 5.2)
    this.instance_4._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(59)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.7,
            scaleX: 1.875,
            scaleY: 1.875,
            rotation: -44.9997,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.8,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                85.1,
                -175.2,
                81.7,
                -187.8,
              ],
            },
          },
          65,
        )
        .to(
          {
            scaleX: 1.8749,
            scaleY: 1.8749,
            rotation: 14.9998,
            guide: {
              path: [
                81.7,
                -187.7,
                77.8,
                -202.2,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .to({_off: true}, 1)
        .wait(14),
    )

    // Calque_7
    this.instance_5 = new lib.croche()
    this.instance_5.setTransform(57.9, 50.3, 1, 1, 0, 0, 0, 3.3, 6.8)
    this.instance_5._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(72)
        .to({_off: false}, 0)
        .to(
          {
            regX: 3.4,
            scaleX: 1.5,
            scaleY: 1.5,
            rotation: -29.9989,
            guide: {
              path: [
                58,
                50.3,
                56.7,
                45,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.3,
                112.9,
                -11.7,
                148.2,
                -36.5,
                156.3,
                -50.3,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.4,
                105.1,
                -145.3,
                92.9,
                -163.5,
                91.3,
                -165.9,
                89.8,
                -168.4,
              ],
            },
          },
          65,
        )
        .to(
          {
            rotation: 30.0008,
            guide: {
              path: [
                89.8,
                -168.3,
                76.3,
                -191.6,
                80,
                -217.8,
                83.1,
                -240.6,
                106.8,
                -272.2,
                115.1,
                -283.3,
                124.5,
                -293.5,
                132,
                -301.7,
                135.7,
                -304.7,
              ],
            },
            alpha: 0,
          },
          39,
        )
        .wait(2),
    )

    // Calque_6
    this.instance_6 = new lib.ronde()
    this.instance_6.setTransform(57.55, 48.65, 0.25, 0.25, 0, 0, 0, 5.6, 3.2)
    this.instance_6._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(95)
        .to({_off: false}, 0)
        .to(
          {
            regX: 5.5,
            regY: 3.3,
            scaleX: 1.5,
            scaleY: 1.5,
            guide: {
              path: [
                57.7,
                48.7,
                56.8,
                44,
                57.3,
                38.3,
                58.4,
                25,
                67.9,
                18.3,
                70.3,
                16.6,
                86.3,
                6.2,
                102.3,
                -4.2,
                112.9,
                -11.7,
                148.2,
                -36.4,
                156.3,
                -50.2,
                166,
                -66.7,
                160.5,
                -87.3,
                153.9,
                -111.9,
                126.9,
                -130.3,
                105.1,
                -145.3,
                92.9,
                -163.4,
                90.4,
                -167.2,
                88.4,
                -171,
              ],
            },
          },
          82,
        )
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(51.3, -316.9, 117.89999999999999, 374.09999999999997)

  ;(lib.Interpoler3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.bri()
    this.instance.setTransform(-11.45, 12, 1, 1, 0, 0, 0, 1.1, 15)

    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#001443")
      .s()
      .p(
        "AAOCSIgCgBQgMgEgIgJQgJgJgCgLQgCgPgDgHIgLgOQgEgHgDgOQgCgOgEgHIgJgMQgIgMACgYQACgbgGgLIgIgNQgEgIgBgFQAAgEADgHQADgHAAgEQAAgRALgNQAKgNARgDIAagDQASgDAOALQAPALADASIAVB7QADAZAHAcIAIAdQAFATgKAQQgJARgTAEQgGACgGAAQgKAAgKgFg",
      )
    this.shape.setTransform(-14.5029, -0.1411, 1.1497, 1.1497)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}, {t: this.instance}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-23.8, -17.5, 47.6, 35)

  ;(lib.Interpoler2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.bri()
    this.instance.setTransform(-11.45, 12, 1, 1, 0, 0, 0, 1.1, 15)

    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#001443")
      .s()
      .p(
        "AAOCSIgCgBQgMgEgIgJQgJgJgCgLQgCgPgDgHIgLgOQgEgHgDgOQgCgOgEgHIgJgMQgIgMACgYQACgbgGgLIgIgNQgEgIgBgFQAAgEADgHQADgHAAgEQAAgRALgNQAKgNARgDIAagDQASgDAOALQAPALADASIAVB7QADAZAHAcIAIAdQAFATgKAQQgJARgTAEQgGACgGAAQgKAAgKgFg",
      )
    this.shape.setTransform(-14.5029, -0.1411, 1.1497, 1.1497)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}, {t: this.instance}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-23.8, -17.5, 47.6, 35)

  ;(lib.gymnastes = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // bras_v
    this.instance = new lib.brasbleus()
    this.instance.setTransform(131.55, 117.15, 1, 1, 0, 0, 0, 79.5, 11.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({rotation: 19.4972, x: 169, y: 128.55}, 70, cjs.Ease.get(-1))
        .to({regX: 79.6, rotation: 111.1582, x: 170.4, y: 131.8}, 46)
        .to(
          {regY: 11.5, scaleX: 0.9999, scaleY: 0.9999, rotation: 147.367, x: 170.45, y: 131.75},
          48,
        )
        .to(
          {regX: 79.5, regY: 11.6, scaleX: 1, scaleY: 1, rotation: 0, x: 131.55, y: 117.15},
          75,
          cjs.Ease.get(-1),
        )
        .wait(16),
    )

    // teute
    this.instance_1 = new lib.teteoldy()
    this.instance_1.setTransform(129.85, 105.85, 1, 1, 0, 0, 0, 23.9, 32.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({regX: 24, regY: 32.6, rotation: 34.4973, x: 171.05, y: 116.95}, 70, cjs.Ease.get(-1))
        .to({rotation: 83.9051, x: 180.55, y: 125.25}, 46, cjs.Ease.get(0.75))
        .to(
          {regY: 32.5, scaleX: 0.9999, scaleY: 0.9999, rotation: 25.4428, x: 180.3, y: 121.65},
          48,
          cjs.Ease.get(-0.9),
        )
        .to(
          {regX: 23.9, scaleX: 1, scaleY: 1, rotation: 0, x: 129.85, y: 105.85},
          75,
          cjs.Ease.get(-1),
        )
        .wait(16),
    )

    // tronc
    this.instance_2 = new lib.tronc()
    this.instance_2.setTransform(148.1, 156.5, 1, 1, 0, 0, 0, 34.1, 55.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({rotation: 49.4965, x: 144.7, y: 166.65}, 70, cjs.Ease.get(-1))
        .to({regX: 34.2, rotation: 60.2028, x: 142.55, y: 167.6}, 46, cjs.Ease.get(0.75))
        .wait(48)
        .to({regX: 34.1, rotation: 0, x: 148.1, y: 156.5}, 75, cjs.Ease.get(-1))
        .wait(16),
    )

    // bras_v_derriere
    this.instance_3 = new lib.brasbleus2()
    this.instance_3.setTransform(117.9, 114.25, 1, 1, 0, 0, 0, 66.7, 9.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({regX: 66.8, rotation: 19.4972, x: 157.2, y: 121.25}, 70, cjs.Ease.get(-1))
        .to(
          {regY: 9.4, scaleX: 0.9999, scaleY: 0.9999, rotation: 111.158, x: 177.85, y: 120.35},
          46,
          cjs.Ease.get(0.75),
        )
        .to({regY: 9.3, rotation: 141.1572, x: 177.9, y: 120.4}, 48, cjs.Ease.get(-0.9))
        .to(
          {regX: 66.7, regY: 9.5, scaleX: 1, scaleY: 1, rotation: 0, x: 117.9, y: 114.25},
          75,
          cjs.Ease.get(-1),
        )
        .wait(16),
    )

    // homme
    this.instance_4 = new lib.jambettasses()
    this.instance_4.setTransform(130.5, 150.2, 1, 1, 0, 0, 0, 88.5, 46)

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255))

    // Calque_11
    this.instance_5 = new lib.ombrageee()
    this.instance_5.setTransform(40.55, 159.05, 1, 1, 0, 0, 0, 0, 10.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({regX: 0.1, scaleX: 1.1917, x: 40.65}, 70, cjs.Ease.get(-1))
        .to({scaleX: 1.5151, x: 40.7}, 46, cjs.Ease.get(0.75))
        .to({scaleX: 1.6504}, 48, cjs.Ease.get(-0.9))
        .to({regX: 0, scaleX: 1, x: 40.55}, 75, cjs.Ease.get(-1))
        .wait(16),
    )

    // brass
    this.instance_6 = new lib.avbrass()
    this.instance_6.setTransform(65.3, 71.05, 1, 1, 0, 0, 180, 26.7, 27.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({skewX: 71.4572, skewY: 251.4572, x: 65.15, y: 68.45}, 51, cjs.Ease.get(0.6))
        .to({skewX: 52.002, skewY: 232.002, x: 69.4, y: 65.75}, 45)
        .to(
          {scaleX: 0.9999, scaleY: 0.9999, skewX: -64.4728, skewY: 115.5272, x: 67.75, y: 70.35},
          61,
        )
        .wait(46)
        .to({scaleX: 1, scaleY: 1, skewX: 0, skewY: 180, x: 65.3, y: 71.05}, 51, cjs.Ease.get(-1))
        .wait(1),
    )

    // biceps
    this.instance_7 = new lib.bicepsosses()
    this.instance_7.setTransform(62.7, 62.45, 1, 1, 0, 0, 180, 4.7, 8.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(51)
        .to({skewX: -19.4552, skewY: 160.5448, x: 65.05, y: 60.9}, 45)
        .to({regX: 4.6, skewX: 3.0308, skewY: 183.0308, x: 62}, 61)
        .wait(46)
        .to({skewX: 3.0308}, 0)
        .to({regX: 4.7, skewX: 0, skewY: 180, x: 62.7, y: 62.45}, 51, cjs.Ease.get(-1))
        .wait(1),
    )

    // brass
    this.instance_8 = new lib.avbrass()
    this.instance_8.setTransform(26.6, 71.05, 1, 1, 0, 0, 0, 26.7, 27.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .to({rotation: -66.9388, x: 26.75, y: 67.85}, 51, cjs.Ease.get(0.6))
        .to({rotation: -51.9398, x: 23.7, y: 65.15}, 45)
        .to({regX: 26.5, scaleY: 0.9577, rotation: 60.3625, x: 26.85, y: 72.7}, 61)
        .wait(46)
        .to({rotation: 60.3625}, 0)
        .to({regX: 26.7, scaleY: 1, rotation: 0, x: 26.6, y: 71.05}, 51, cjs.Ease.get(-1))
        .wait(1),
    )

    // biceps_n
    this.instance_9 = new lib.bicepsosses()
    this.instance_9.setTransform(29.2, 62.45, 1, 1, 0, 0, 0, 4.7, 8.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(51)
        .to({rotation: 14.9992, x: 27.45, y: 60.55}, 45)
        .to({rotation: -14.9994, x: 31.9, y: 62.05}, 61)
        .wait(46)
        .to({rotation: 0, x: 29.2, y: 62.45}, 51, cjs.Ease.get(-1))
        .wait(1),
    )

    // nana
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#E2E2E2")
      .s()
      .p("AAPAHQgNgHgMABQgKAAgCgDQgDgDAEgDQAGgDAVAFQAIACAGAEQAFAFgBAEIgBABIgIgDg")
    this.shape.setTransform(48.4409, 20.4201, 1.1999, 1.1999)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#E2E2E2")
      .s()
      .p("AgXAKQgBgEAFgGQAGgEAIgCQAVgFAGADQAEADgDADQgCADgKAAQgMgBgMAHIgJADIgBAAg")
    this.shape_1.setTransform(40.4183, 20.448, 1.1999, 1.1999)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#9C6143")
      .s()
      .p(
        "AAIAbIgMgBQgFgBgDgFQgBgCADgHIAFgMIAFgaQACAAABAJQAAAJgCAJIgDALIgDAHQAAACAGACIAJABIADADQAAAAAAABQAAAAAAAAQgBAAAAAAQgBABgBAAIgCgBg",
      )
    this.shape_2.setTransform(44.0926, 24.8613, 1.1999, 1.1999)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#E2E2E2")
      .s()
      .p(
        "ABPBnQgMgGACgIIAEgHQgSgJAHgMQAEgGAHgEQgUAFgHgNIgDgNQgRAJgIgJIgFgKQgLAEgFgGIgEgHQgOADgDACIgBACQgEAMgSgFQAAANgOACIgPgCQAKAFgEAKQgCAGgEAEQANAFgFANQgCAGgFAFQABADgEADQgGAGgTgBQgSAAAAgIIAFgHQgdAEgEgSIACgTQgXgFAHgPIAMgPQgLgLALgGIAFgDQgEgBgCgLQgEgOALgEQAGgBAGABQgDgEgBgFQgBgKAIgGQAOgJAUAHQgDgFABgGQABgNASgHQASgHAEAHQACADgCAFQAMgPAPABQAHAAAFAEIAHgIQALgHASgBQASAAANALQAHAGACAGIAHgFQAKgCANAKQANAJADAPQABAIgCAFQAMAEgCAHQgBADgDADIAKABQALADAHAKQAMAQgMgUIAPAJQAOAKgBAQQgBAPgQAPQgQALAAACIABAKQgBAJgEAHQgFAMgdABQgDAAAAAFIgBABQgDAAgIgEg",
      )
    this.shape_3.setTransform(45.3254, 12.7833, 1.1999, 1.1999)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#8FB5FF")
      .s()
      .p(
        "AArBgQgqgGg0gVQhWghgug3QgogyARgbQALgTAagEQAYgFAhAJQARAEAVAJQARAHAjAWIB3BRIBzBAIgGAXQgJAYgQADg",
      )
    this.shape_4.setTransform(36.101, 81.1597, 1.1999, 1.1999)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#587FD1")
      .s()
      .p("AhOAcIgFgXIBzg8IA0BYIiKAXQgPgEgJgYg")
    this.shape_5.setTransform(40.5899, 87.8827, 1.1999, 1.1999)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#779EED")
      .s()
      .p("AgBgdQArgSAkACQAmACAOAYQADAFgUAHQgUAHgCgJQgEgTgrAdQgNAJgVgEQgSgGgFABQgJABhrAsQBag7AmgQg")
    this.shape_6.setTransform(65.6917, 71.8518, 1.1999, 1.1999)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#8FB5FF")
      .s()
      .p(
        "Ah/BqIgPgGIgbhAIBMgyQBag8AlgQQAsgSAkACQAmACAOAYQAFAJgCAOQgGAhgnAlQguArhHAZQgrAPggAHQgYAEgRAAQgKAAgIgBg",
      )
    this.shape_7.setTransform(61.3228, 79.1986, 1.1999, 1.1999)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F7D354")
      .s()
      .p(
        "AgQDMQgqgCgdgJQgngLAMgQQAPgSAEg1QAFgsgGgeIgBgFIgFgOIgGgKIgGgIIgGgGIgOAAQgigCgSgNIgFgDIAAgDQgDgnAZgxQAVgnAVgRQAWgSArADIAAACQARA4AogBQAcAAASgeQAKgPADgOQAIABAPAAQAbAEAfAeIACABQAHAHAIALQASAcANAuQAGAWADARIglASQgLAEgWAAIgNAAIgKAgQgMAsAAAbQABAZARApQAIATAJAPQhYAQgcABg",
      )
    this.shape_8.setTransform(45.9592, 57.7)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#844C34")
      .s()
      .p(
        "AgKACIgEgCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABIAJADQAIACAIgFQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABACIgBABQgGAFgJAAQgEAAgGgDg",
      )
    this.shape_9.setTransform(48.4229, 22.7525, 1.1997, 1.1997)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#844C34")
      .s()
      .p(
        "AgKACQgEgCAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABIAJADQAIACAHgFQABgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQgGAFgIAAQgFAAgGgDg",
      )
    this.shape_10.setTransform(40.2798, 22.7671, 1.1997, 1.1997)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#844C34")
      .s()
      .p(
        "AgBAGQgIAAgGgEQgEgCAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAFADQAFADAGgBQALAAAGgGQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgHAIgNAAg",
      )
    this.shape_11.setTransform(44.524, 30.8648, 1.1997, 1.1997)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#B5714E")
      .s()
      .p(
        "AgNBXIgCAAQgygHgNg6IgBgIQgMhFAmgVQANgIAUgCIAGAAIAZAAIAVADIABAAQAgAHALAVQAOAbgNA2QgLAvglALQgKADgXAAIgJAAg",
      )
    this.shape_12.setTransform(45.114, 24.4669, 1.1999, 1.1999)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#587FD1")
      .s()
      .p("AhNgNIAugVIBnAAIAGAtIhNAYg")
    this.shape_13.setTransform(45.0296, 79.8733, 1.1999, 1.1999)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#9C6143")
      .s()
      .p(
        "AgbAqQAfgHgCgZQgCgVgLgKQgDgCgcgKQABgNgCgEQgCgFAaABIAaACIABAiQABALALACIATACQAMACgQAnIg2ARQgggHAYgGg",
      )
    this.shape_14.setTransform(47.334, 37.8553, 1.1999, 1.1999)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#B5714E")
      .s()
      .p(
        "Ag9AMIAAgIQACgIAFgBIARgCQAFAAADgEQAEgEAAgFIABgQQABgNgCgEQgCgFAaABIAaACIAAAjQABAKAKABIAVADQAMACgRAnIhJAXg",
      )
    this.shape_15.setTransform(45.1827, 38.2152, 1.1999, 1.1999)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#9C6143")
      .s()
      .p(
        "AgnAyIgDgRQgBgDgFgHQgFgGgBgGQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAEACAIALQAIAJADABQAEACAKgOIAXgfQAPgTACgeQAFAEAKgEQAUAmgMABQgIABgQAOQgOAKgIAJIgOAZQgKARgIACIgCAAQgGAAgDgJg",
      )
    this.shape_16.setTransform(26.7866, 96.9534, 1.1999, 1.1999)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#9C6143")
      .s()
      .p(
        "AAABCQADAAAGgGQAHgIACgMQACgOgFgXIgMgnQgDgPgRABIgQAEIgCgOQAIACADgBIAMgGQAKgCAHAHQAHAGAEAOIAGAWIAIASIAGANQABAFgEAGIgFAJQgIAYgHAFQgGAEgGAAIgBAAg",
      )
    this.shape_17.setTransform(64.3003, 97.1919, 1.1999, 1.1999)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#B5714E")
      .s()
      .p(
        "AgnA1IgDgRQgBgDgFgHQgFgGgBgGIAAgDQAAgIAMgJIATgOQAEgDAFgNQAFgOAFgFQAGgHALACQAIABAGAEQAFAEAKgEQAUAmgMABQgIABgQAOQgOAKgIAJIgOAZQgKARgIACIgCAAQgGAAgDgJg",
      )
    this.shape_18.setTransform(26.7866, 96.6075, 1.1999, 1.1999)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#B5714E")
      .s()
      .p(
        "AAHBCIgBAAIgBAAIAAAAQgEgCgBgEIgBgVQgCgSgCgHQgCgFgPgKQgOgMgFgKQgFgMAHgOIAIgMIAEABQAIACADgBIAMgGQAJgCAIAHQAHAGAEAOIAGAWIAIASIAGANQABAFgEAGIgFAJQgIAYgHAFQgGAEgFAAIgDAAg",
      )
    this.shape_19.setTransform(63.3354, 97.1919, 1.1999, 1.1999)

    this.instance_10 = new lib.Path_26()
    this.instance_10.setTransform(46.4, 98, 1.1999, 1.1999, 0, 0, 0, 30.2, 5.7)
    this.instance_10.alpha = 0.1992

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_10},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11, p: {x: 44.524, y: 30.8648}},
            {t: this.shape_10, p: {x: 40.2798, y: 22.7671}},
            {t: this.shape_9, p: {x: 48.4229, y: 22.7525}},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .to(
          {
            state: [
              {t: this.instance_10},
              {t: this.shape_19},
              {t: this.shape_18},
              {t: this.shape_17},
              {t: this.shape_16},
              {t: this.shape_15},
              {t: this.shape_14},
              {t: this.shape_13},
              {t: this.shape_12},
              {t: this.shape_11, p: {x: 44.5588, y: 30.8893}},
              {t: this.shape_10, p: {x: 40.3144, y: 22.7913}},
              {t: this.shape_9, p: {x: 48.4578, y: 22.7768}},
              {t: this.shape_8},
              {t: this.shape_7},
              {t: this.shape_6},
              {t: this.shape_5},
              {t: this.shape_4},
              {t: this.shape_3},
              {t: this.shape_2},
              {t: this.shape_1},
              {t: this.shape},
            ],
          },
          96,
        )
        .wait(159),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-14.1, 0, 252.1, 169.2)

  ;(lib.fontaine = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // fontaine
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#C9C8C8")
      .s()
      .p("AhKAmQgigqgLgbQgRgsAfgZQAhgWAqALQAmALAZAfQgJA0AgBOQAeAtAoAJQh8AAhMhNg")
    this.shape.setTransform(231.6553, -88.3799, 1.1249, 1.1249)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#AFAFAF")
      .s()
      .p("AgSB0Qg3gCgchMQgdhMAlg5QA4gYA2AEQA8AFAmAnQAAAxgQAvQggBchOAAIgHgBg")
    this.shape_1.setTransform(247.6534, -88.15, 1.1249, 1.1249)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#979695")
      .s()
      .p("AgyAcQAPgnAIhEQASgSAZgJQAdgKAcAGQA3ATgJArQgWBGhIAtQg/AohSAGQAvgaAXg7g")
    this.shape_2.setTransform(263.7553, -88.1307, 1.1249, 1.1249)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AAHAPQg9ACgwAqQgaghgogWQgugYggALQgEAEgEAKQgEAMgEAEQgGgXALgUQALgUAXgGQAwgKBEApQAmgsBGADQBBADAyAmQBQggA0AJQAPAFACAUQABALgCAZQgFgPgQgKIgagNQgaAAghAaQgaAUgWAeQgogtg/ABg",
      )
    this.shape_3.setTransform(247.5295, -98.6021, 1.1249, 1.1249)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#E2E2E2")
      .s()
      .p(
        "AipAXQgHgMgUgOQgTgQgIgLQghgxgNgZQgWgsAdgdQAfgaAwAFQAUACBAATIAfAXIAfAXQgFB9BlBcQBaBRCCAaQghAGghAAQi2AAjIiwg",
      )
    this.shape_4.setTransform(203.9601, 76.1423, 1.1249, 1.1249)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#E2E2E2")
      .s()
      .p(
        "AAZB8QhJgehFg6QgEgEgEgHQgEgIgEgEQgpgfgSgYQgcglAKgfQAQg0BAANQA1AKAtAlQAABjBMBHQBGBCBkASIgXAAIgXABQhHAAhIgdg",
      )
    this.shape_5.setTransform(213.0094, 11.1051, 1.1249, 1.1249)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#E2E2E2")
      .s()
      .p("AB4BwQhbAAhPg1QhVg4gXhTQAAgIALgLQANgMAPAAQAbAAAWAKQAQAIAcAUQAABIA5A0QA1AxBLAMg")
    this.shape_6.setTransform(221.0016, -43.584, 1.1249, 1.1249)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#C9C8C8")
      .s()
      .p("AgnA/QhQg4AAhWQAUgpA0AJQAcAFA1AbQgEAaACAgQADAUAHAlQAJAJAPAeQAFAPAQAKQAKAGAXAHQhZAAhGgyg")
    this.shape_7.setTransform(231.4631, -42.8795, 1.1249, 1.1249)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#C9C8C8")
      .s()
      .p("AAEB8QhTgrgug7Qg7hKAbhPQAsghA+ALQA5ALAlAqQgHBZAZBAQAfBRBLAVQgNACgOAAQg7AAhNghg")
    this.shape_8.setTransform(227.9613, 11.697, 1.1249, 1.1249)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#C9C8C8")
      .s()
      .p(
        "AgMCTQhtg6g/hmQgZgygFgfQgIgzAegfQAXgRAhgGQAhgGAjAGQA3AJATAJQApARAAAjQASCJAVA5QAoBrBbAfQh8AAhpg4g",
      )
    this.shape_9.setTransform(223.1298, 76.8358, 1.1249, 1.1249)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#AFAFAF")
      .s()
      .p("AgfAwQAEgSgBgcIgDguIAggDQARgBAEAEQAKAKAAAWIgCAlIAAAXQgZgMgkAMg")
    this.shape_10.setTransform(246.8179, -65.1186, 1.1249, 1.1249)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#979695")
      .s()
      .p("AgiAVQgNgFgGgGQgLgKAPgYIBjAAQAIAAAAAXQgRAQgOAGIghADIgKABQgLAAgHgEg")
    this.shape_11.setTransform(247.1042, -72.5741, 1.1249, 1.1249)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#AFAFAF")
      .s()
      .p("AgmAAQgIgtAAgMQAgAIAOABQAaACAUgLIAABrQg1AAgfAIQAFgXgFgjg")
    this.shape_12.setTransform(248.449, -17.4583, 1.1249, 1.1249)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#AFAFAF")
      .s()
      .p("AgxAzIAAhkQAeAHARACQAbABAZgKQAAAPgGAiQgDAgAJATg")
    this.shape_13.setTransform(250.6144, 40.8674, 1.1249, 1.1249)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#AFAFAF")
      .s()
      .p("Ag0BmQhDhCAMhvQAogtBCACQA+ABAwAqQAAA5gKAlQgPA0glAfQgXASgaAAQgbAAgXgSg")
    this.shape_14.setTransform(247.4459, -43.3336, 1.1249, 1.1249)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#979695")
      .s()
      .p("AhiASQgNgGgGgOQgHgRALgQQBwALBvgLQANANgDAOQgDAPgWALQguASgyAAQgyAAgvgSg")
    this.shape_15.setTransform(248.1836, -26.9356, 1.1249, 1.1249)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#979695")
      .s()
      .p("AiKgDIAAgfQAcgEAmAGIBBAOQAXAAAygIQAygIAXAAQggBEhdACIgDAAQhMAAhJgng")
    this.shape_16.setTransform(250.1645, 32.1035, 1.1249, 1.1249)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#AFAFAF")
      .s()
      .p(
        "Ag2CUQgigUgbgoQgWgsgJgxQgIgrAAg5QBAg6BaAAQBbAABAA6QAAB6g3BWIggAkQgUASgZAAQgOAHgPAAQgXAAgZgQg",
      )
    this.shape_17.setTransform(249.3208, 11.4089, 1.1249, 1.1249)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#979695")
      .s()
      .p("AgrAeQAQgnAIhHQAPgZAkgFQAIgBA4AAQAXAAAAAfQALBVhUA5QhJAyhdAAQA0gUAZg+g")
    this.shape_18.setTransform(262.8627, -42.7403, 1.1249, 1.1249)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#AFAFAF")
      .s()
      .p(
        "AgVDQQgfgCgUgOQgUgQgVgYQgNgPgXgeQgbhDgLgxQgOhAAFg7QBShMBzAAQB0AABRBMQAABygkBUQgsBohaAlIgkACIgNgBg",
      )
    this.shape_19.setTransform(251.4122, 76.3203, 1.1249, 1.1249)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#979695")
      .s()
      .p(
        "AiJCSIAXgXQApg3AVg2IAAgeIAOguQAGgbgEgTQAjgqBAgDQBCgDAjAoQAKBahQBPQg1AwhCAaQhDAahIABQAUgBAHgHg",
      )
    this.shape_20.setTransform(270.9029, 11.8012, 1.1249, 1.1249)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#979695")
      .s()
      .p(
        "Ai0C2QAXgMAIgIQAzg+AahQQAYhKAAhUQAbghAwgQQAqgNA0AAQAMAEAaAEQAWAFAJAKQAqA+gnBRQgdA8hCA7QhAA1hUAcQg/AVhiAOQAIgIAXgLg",
      )
    this.shape_21.setTransform(279.2446, 77.0046, 1.1249, 1.1249)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#7F7E7C")
      .s()
      .p("AghAtQA8g0AAhFQAUgIAngSQAjgMAeAPIAEAFQAEAFAAAFQgcBbhjA2QhXAwhnAAQBLgVAygrg")
    this.shape_22.setTransform(274.1247, -43.1809, 1.1249, 1.1249)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AD2ANQgPgKgSAAQhIAAgdAnQgogthFgCQhDgBgvAoQgTgkhUAQIgcAEQgMACgEAOQgSgRgagLQgagKgXAAQgOAAgMAMQgRAQgEACQAIgTAGgJQAKgRAPAAIBNAAQAJAEAPgJQARgLAGAAQBJAAAzAfQAzgnBAADQA/ACA1ApQAygYAbgFQAvgIAfAeQAegHAQgDQAagDAVAFIAVALQAKAHAAAUQAAgFgEgFIgEgFQgdgRgkAJQgkAJgXAeQgGgSgPgLg",
      )
    this.shape_23.setTransform(247.1273, -55.6604, 1.1249, 1.1249)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#7F7E7C")
      .s()
      .p("AjYCXQCWgxBKiBQAEgIAMglQAJgaANgNQA6ghAfgFQAzgIAfAuQgWBLhAA/QigB8ihAAIgaAAg")
    this.shape_24.setTransform(285.8798, 11.2792, 1.1249, 1.1249)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AmKAaQgMgFgpgLQgagGgaAKQgeAKgLAbIgCgdQgCgSAFgEIAXgXQAegMAkABQAmACAcARQAWgWAhgIQAegIAfAHQATAIAqAJQAlALASASQAxhFB4APQA3AIAYAIQAoAPAVAeQBLghAhgGQA+gLAuAjQA3gPAiAAQAzAAAfAeIAAAfQAAgEgEgEQgEgEAAgEQglgeg0AOQglAKg0AlQgcgxhHADQhDADgrArQg6g+hagBQhYgChBA6QgVghg0gHQgtgGguAMQgQAGgJAMQgGAIgGAUQgKgUgfgMg",
      )
    this.shape_25.setTransform(249.1045, -5.5917, 1.1249, 1.1249)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#7F7E7C")
      .s()
      .p(
        "Aj6C+IggAAQCDgpBXhLQBqhbAAh1QBGguA4gKQBOgOAkA+QgiBxhhBIQg9AyhKAiQg+AehYAZQgmAIgVACIgXACQgSAAgQgEg",
      )
    this.shape_26.setTransform(298.5068, 76.4821, 1.1249, 1.1249)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AkSAPQgwgUguAFQhFANgUAyQgcghgrgSQgogPgsAAQgbgHgYAKQgdAKgFAgQgGgYAHgTQAIgWAWgLQBqgfA5AmQBvhTDGBjQBPhJB5AIQBzAIBPBHQBggqAsgIQBTgPA4AzQAxgTAwgCQA0gEAsARQAPAIAIANQALAUgLAUQgFgWgVgNQgTgKgYAAQg6AMgdAKQgzARgZAdQgNgXgIgKQgNgQgUgFQg8gLg5AMQg9AOgnAnQhKhJh2AFQh0AEhSBNQgdgpgvgWg",
      )
    this.shape_27.setTransform(251.1618, 54.8506, 1.1249, 1.1249)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    // Calque_8
    this.instance = new lib.eaueau()
    this.instance.setTransform(276.15, 13.3, 0.5272, 1.2732, -7.4454, 0, 0, -202.8, -138.1)
    this.instance.alpha = 0.3203

    this.instance_1 = new lib.eaueau()
    this.instance_1.setTransform(224.55, 11.65, 0.5272, 1.2573, 7.4342, 0, 0, -202.7, -138.2)
    this.instance_1.alpha = 0.3203

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.fontaine,
    new cjs.Rectangle(172.4, -126.9, 157.9, 280.1),
    null,
  )

  ;(lib.echecs = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_4
    this.instance = new lib.brasechec1copy()
    this.instance.setTransform(110.95, 60.45, 1, 1, -4.9678, 0, 0, 16.7, 9.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(73)
        .to({regX: 16.8, rotation: -14.9996, x: 96.55, y: 49.8}, 31)
        .to(
          {
            regY: 9.3,
            scaleX: 1.0201,
            scaleY: 1.0097,
            rotation: 0,
            skewX: -9.436,
            skewY: -5.7732,
            x: 89.6,
            y: 49.9,
          },
          36,
        )
        .to(
          {
            regX: 16.9,
            scaleX: 0.953,
            scaleY: 1.0096,
            skewX: -17.9664,
            skewY: -14.305,
            x: 102.3,
            y: 57.45,
          },
          33,
        )
        .to(
          {
            regX: 16.7,
            regY: 9.2,
            scaleX: 1,
            scaleY: 1,
            rotation: -4.9678,
            skewX: 0,
            skewY: 0,
            x: 110.95,
            y: 60.45,
          },
          19,
        )
        .wait(26),
    )

    // roiii
    this.instance_1 = new lib.roii()
    this.instance_1.setTransform(85.95, 56.7, 1, 1.1235, 0, 0, 0, 2.3, 4.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(104)
        .to({x: 75.75}, 36)
        .wait(78),
    )

    // Calque_8
    this.instance_2 = new lib.roii()
    this.instance_2.setTransform(85.95, 56.7, 1, 1.1235, 0, 0, 0, 2.3, 4.3)

    this.instance_3 = new lib.roii()
    this.instance_3.setTransform(75.75, 56.7, 1, 1.1235, 0, 0, 0, 2.3, 4.3)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_3}, {t: this.instance_2}]})
        .wait(218),
    )

    // Calque_3
    this.instance_4 = new lib.brasechec1()
    this.instance_4.setTransform(136.3, 59.05, 0.8807, 1, 11.0136, 0, 0, 45.6, 2.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(73)
        .to({regX: 45.4, regY: 2.1, scaleX: 1, rotation: 0, x: 124.7, y: 43.45}, 31)
        .to({scaleX: 1.1362, x: 121.55}, 36)
        .to({regX: 45.5, regY: 2.3, scaleX: 0.9777, rotation: 7.4884, x: 129.6, y: 54.75}, 33)
        .to({regX: 45.6, regY: 2.2, scaleX: 0.8807, rotation: 11.0136, x: 136.3, y: 59.05}, 19)
        .wait(26),
    )

    // Calque_2
    this.instance_5 = new lib.brasechec2()
    this.instance_5.setTransform(139.05, 33.4, 0.8366, 1, -45.6695, 0, 0, 27.9, 1.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(73)
        .to({regX: 27.8, regY: 0.9, scaleX: 1, rotation: 0, x: 147.1, y: 32.7}, 31)
        .to({regX: 27.9, scaleX: 1.1362, x: 147.05}, 36)
        .to({regY: 1, scaleX: 0.9558, rotation: -26.9674, x: 143.1, y: 31.9}, 33)
        .to({regY: 1.2, scaleX: 0.8366, rotation: -45.6695, x: 139.05, y: 33.4}, 19)
        .wait(26),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#51495B")
      .s()
      .p("AgPABQAKACAVgHQgDAEgJAEQgEABgDAAQgHAAgFgEg")
    this.shape.setTransform(31.7313, 19.4226, 1.25, 1.25)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FCFCFC")
      .s()
      .p("AgTACQgPgFAUABQAdABALgGQAAAIgIAEQgEACgLABIgCAAQgGAAgOgGg")
    this.shape_1.setTransform(31.9601, 17.3833, 1.25, 1.25)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFCAA6")
      .s()
      .p("AgQAnIANheQAYAkgGAMQgOAdALAMQAGAHgBAFQgBAGgHABIgKADg")
    this.shape_2.setTransform(34.6159, 17.2813, 1.25, 1.25)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#51495B")
      .s()
      .p("AgOACIAKAAQALgBAIgHQgEAKgLACIgGABQgHAAgBgFg")
    this.shape_3.setTransform(123.5438, 22.7599, 1.25, 1.25)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAGIAKgCQANgEAPgIQARgKgKAMQgLAMgHADIgNAFIgBAAQgIAAgFgIg")
    this.shape_4.setTransform(122.2398, 20.9116, 1.25, 1.25)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "Ag8BtQgigHgPgkQgJgWgGguQgCgWAAhYIAjAAQAVAAAPADIAOAAIAKABQAGAAADACQAAAPgCAxQgBAoADAYQADATAJADQAJAEALgBIAVgFQAagHAOgGQAVgIAQgLQAGAHANAKQgmAtgsATQAAABAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgdAMgUAEQgOADgMAAQgOAAgNgEg",
      )
    this.shape_5.setTransform(25.9117, 59.9598, 1.2498, 1.2498)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#62B7B7")
      .s()
      .p(
        "AhCCsQgQgRgJgdQgGgSgFgjQgIgsAMg/QAMhDAVhKQgEAQgCAXIgEApQAVA7ARBRQAKAOAQAOIAdAYIAJADIAiAEQAOAAAdADQAFAXgEALQgDAJgKAHIgSALIhDACQgmABgcACIgEADIgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBg",
      )
    this.shape_6.setTransform(20.3179, 57.2038, 1.2498, 1.2498)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#62B7B7")
      .s()
      .p(
        "AgSB5QgMgEgJgKQgIgLgBgNQgGg2AZhJQAHgeAAgxQAEATAEAmIAIAvQAFAaAJARQAJAOAIAEQAKAlAPAfQgaAOgaAAQgFAAgLgDg",
      )
    this.shape_7.setTransform(26.6103, 51.9911, 1.2498, 1.2498)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#726A6D")
      .s()
      .p("Ag+AXQgDgbgFgOQAHgEAMAAQANgBAGgCQALgFAqgMQAggJASgPQgJBBgoAeQgNALgTAJIgmAMIgOAGQACgPgCgdg")
    this.shape_8.setTransform(141.4232, 50.6163, 1.2498, 1.2498)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNAUQAAgEABgBQALgHAAgSQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIADgEQADgBADADQACADgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAOQACAJAHADIABAEIgOABIgNgBg",
      )
    this.shape_9.setTransform(111.5846, 58.6752, 1.2498, 1.2498)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNAUQAAgEABgBQALgHAAgSQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIADgEQADgBADADQACADgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAOQACAJAHADIABAEIgOABIgNgBg",
      )
    this.shape_10.setTransform(117.2086, 58.6752, 1.2498, 1.2498)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgMAUIAAgFQABgDAGgBIAEgMQACgHgEgFIgBgDQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAEgBADADQABADAAAFIgDAAQgDAUANAGIABAEIgOABIgMgBg",
      )
    this.shape_11.setTransform(103.6797, 58.6618, 1.2498, 1.2498)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNAUQAAgEABgBQALgHAAgSQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgGADgBQACgBADADQADADgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAPQABAIAIADIABAEIgOABIgNgBg",
      )
    this.shape_12.setTransform(71.5914, 58.6775, 1.2498, 1.2498)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgNAVIAAgGQACgDAFgBIAFgLQABgFgCgFQgBgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAFgDADAHQAAADgCAGQgCAGABADQAAAKAJAEQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgOAAIgNAAg",
      )
    this.shape_13.setTransform(76.9655, 58.615, 1.2498, 1.2498)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNAUIAAgFQAGgEADgIIAEgNQgDgBAAgEQgBgEACgBQADgBADADQACADgBAEQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIAAAOQACAJAHADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgOABIgNgBg",
      )
    this.shape_14.setTransform(53.157, 58.6596, 1.2498, 1.2498)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNAUQAAgEABgBQAHgEACgIIADgNQgDgBAAgEQAAgEACgBQADgBADADQACADgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAOQACAJAHADIABAEIgOABIgNgBg",
      )
    this.shape_15.setTransform(66.1548, 58.6752, 1.2498, 1.2498)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNAUQAAgEABgBQALgHAAgSQgGgDAGgHQACgBADADQADADgBAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABgBAAIABAPQABAIAIADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgOABIgNgBg",
      )
    this.shape_16.setTransform(95.7748, 58.6775, 1.2498, 1.2498)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQAlIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAQgMgEgXIgCgEIgCgFQAAgDADgFIADgGQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgBgBAAIAAgGQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABABIADAAQADACgBAEQgBAEACACIAEAGQACAEgBAEQgBAEgEAFQgGAJAFAOQABADAEAEIAHAGIAAAGIgPABQgKAAgJgDg",
      )
    this.shape_17.setTransform(57.7084, 56.3525, 1.2498, 1.2498)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#51495B")
      .s()
      .p(
        "AgQAlIgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAIgGADgLQADgJgCgJIgCgEIgCgFQAAgDADgFIAEgGQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBIAAgGIACgBIAEABQACADgBAJIAFAGQADAEgBAEIgGAJQgFAJAEAOQABADAEAEIAHAGIAAAGIgPABQgKAAgJgDg",
      )
    this.shape_18.setTransform(86.9846, 56.3317, 1.2498, 1.2498)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FCFCFC")
      .s()
      .p(
        "Ag3BnQgIgIgIgWQgDgJgMgUQgKgTgDgQQgFgYADgRQAEgWAQgWQAPgUAlgEIA0gFQAbgGASANIAUAQQAKAKADAMIABAGQABAEgBACQgLAegRAGQgNAEgZgIIAAAZQgBAQgDALQgCAEgHAEIgQAGQgIAFgDAHQgDAOgEAFIgRAWQgIAFgGAAQgHAAgGgFg",
      )
    this.shape_19.setTransform(23.1376, 13.4438, 1.2498, 1.2498)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFCAA6")
      .s()
      .p("AgaAXQgYgDgBgLQgBgJABgIQAWgQAcACQAZABAaAPQAEACgCADQgEAEgZALQgVAJgSAAIgKAAg")
    this.shape_20.setTransform(44.5775, 61.409)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#F5A06A")
      .s()
      .p(
        "ADfAbIhigBQhJABglAAQg+AAgwgFQgZgDgiAAIg8AAIhwAAQgHAAgFgLQgCgGADgFQACgFAFgEQAFgEASgCQB/gOBqALQCPAMCOgGIAwgDQANgBAVAEIAiAFQAGAAAEAGQAEAGgCAGQgHAPgLAAQgkAEgzAAIgLAAg",
      )
    this.shape_21.setTransform(84.1263, 63.0958, 1.2498, 1.2498)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#B86632")
      .s()
      .p("AgaAAIguAAQgcAAgTAEIAAgFQAigHArABQAUABA4AGQAwAEAmgHIAAAGQgdAFggAAQgoAAgtgIg")
    this.shape_22.setTransform(22.4389, 101.6061, 1.2496, 1.2496)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#B86632")
      .s()
      .p("AgaCCIgBgqQAAgYABgQQAKg5ADgcQAHgygCglIAkgEQAAAogIAoIgQA6QgJAkgEAYQgFAsgBAQg")
    this.shape_23.setTransform(6.5686, 113.2168, 1.2496, 1.2496)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#B86632")
      .s()
      .p(
        "AARCAQgFgFgCgKIgEgQQgIgeAAglQgEg5gDgXQgGgsgMgjIAUACIATADQAFARADAsQABARgCA7QgBAwAEAeIACATQABAMADAHIgHABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg",
      )
    this.shape_24.setTransform(37.4033, 113.2481, 1.2496, 1.2496)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#B86632")
      .s()
      .p(
        "AAnAUQg6gHgggBQgygDgoAEQgKAAgEgFQgEgGACgGQACgGAGgEQAGgEAJAAQBIgEAYACIA0AHQArAFA6gCQAZgEAGABQAHABADAFQAEAGgDAFQgCAHgGAEQgGAEgJAAQgeADgbAAIgmgCg",
      )
    this.shape_25.setTransform(21.9, 95.5791, 1.2496, 1.2496)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FA9837")
      .s()
      .p(
        "ACpC7QgDgCgMgnIgTg5QgKgbgJgmIgOhAQgxgIhhgLQgcgCgmgBIhDgCQgigDgZgWQgggiACgyQB6gQCYACQAgAFA5ATIBXAeQAXAIAJANQALARgBAmIgFBEQgBAXAcBMQAYBDgGAEQgKAGgiABIgRAAQgUAAgQgBg",
      )
    this.shape_26.setTransform(35.6091, 101.167, 1.2498, 1.2498)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#80CFD4")
      .s()
      .p(
        "Ah3DDQgJgfgDgSIAAgIQgFgcAKgpQAOgvAEgWQALg7AJgaQANgpAagkQAGgJAUgTQANgMAHgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBQAEAAAIgCQApAJAeAhQAHAHAEAZQAEAbADAHQADAHANAOQAJALABAMQACApgTAdQgHALACANQAGAcARA1QAMAugNAhQgyANg8AAQg+AAhKgPg",
      )
    this.shape_27.setTransform(16.7123, 54.9678, 1.2498, 1.2498)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AALBpQgOgCgNgKIgEgBQgrglgHg5QgHgiAOgfQAPghAigEQATgCASAJQARAJAMAQQAOAUACAKQAJAcgHAtIgFAjQgFASgVAPQgKAHgMAAIgGgBg",
      )
    this.shape_28.setTransform(26.2952, 15.9671, 1.2498, 1.2498)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#F2B186")
      .s()
      .p("AgJAoIghgIQABgKAJgQIAOgZQAIgPADgMQAJAHALANIAUAXIAKAHQgGAPgNAcQgMgCgVgFg")
    this.shape_29.setTransform(22.0999, 26.6204, 1.2498, 1.2498)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#B86632")
      .s()
      .p(
        "AAaAHIgngFQgKgCgNAAIgXAAIgeAAQgSABgMADIAAgFQAhgIAsACQAZABAyAGQAwAEAngHIAAAHQgoAEgcAAIgagBg",
      )
    this.shape_30.setTransform(143.9971, 101.6205, 1.2496, 1.2496)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#B86632")
      .s()
      .p("AAQCCQgMgigFguQgCgTgFg9QgCg3gRgrQAOgBAZAFQAGAgAAAdIABBgQAAA7AJAmg")
    this.shape_31.setTransform(159.7425, 113.2168, 1.2496, 1.2496)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#B86632")
      .s()
      .p("AgaCCQgFhAAUhhIAEgoQABgLgBgQIAAgaQALgDAYgBQAAA2gRA8QgXBVgCA7g")
    this.shape_32.setTransform(128.8863, 113.2168, 1.2496, 1.2496)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#B86632")
      .s()
      .p(
        "AAnATIhWgHQgygDglAEIgLAAQgGgBgEgEQgEgGADgGQABgGAGgEQAGgEAJAAQBVgFBAAJQAdAEAkAAIBBgDQANAAAAANQAAAGgFAFQgFAGgHAAQgaAEgdAAQgXAAgYgCg",
      )
    this.shape_33.setTransform(144.5306, 95.5588, 1.2496, 1.2496)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#FFFFFF")
      .s()
      .p("AgUALQgFgGABgGQABgGAGgCQARgGANACQAKABACAEQACAFgEADQgFAEgGADQgFADgNAEIgDABQgFAAgGgEg")
    this.shape_34.setTransform(125.7696, 28.8521, 1.2498, 1.2498)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguAqQgLgRACgUQACgHANgLQAFgEANgGQAMgGAEgFQAGgGAAgEQAAgJAAgFIAAgFQARgFAPAOQANAMAFASIAAAFQAIAWgDATQgGAVgXAMQgSAJgZABQgSgGgLgRg",
      )
    this.shape_35.setTransform(134.1151, 15.8976, 1.2498, 1.2498)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#51495B")
      .s()
      .p(
        "AjtBVQAWhIABgbIABhCQACgnAKgaQANgOAYgHQA8gSBrAAQBeALAeACQBHAGA3gDQAFAmgPAiQgQAlgiAOIgPAEQgFACgIAAIgNgBQgTABgagBIgtgEQg7gHgfgCQgrgFglADIgDAbQgDAjgJAwIgQBVIgGApIg1ABQgqABgMACQgFgkAUhAg",
      )
    this.shape_36.setTransform(132.6573, 100.639, 1.2498, 1.2498)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#9E9396")
      .s()
      .p(
        "Ag1DSIgGgBIgGgCQgegBghgLQgDAAgDgIIgEgKQgJgjAMgsIAPgnQAKgZAEgQQADgMgEgQIgGgcQgJg9AfhDQAKgWAOgJQARgMAXgCIArgBQAQACARATQAEAFAdAqIALATIAEAEQAmBEAFA/QAFAygEAcIgEAmIACAlQABARgEAVQg1AMhDAAQggAAglgDg",
      )
    this.shape_37.setTransform(146.9019, 54.6573, 1.2498, 1.2498)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#F2BD99")
      .s()
      .p("AgCAwIgEgZQgCgMgCgDIgLgIQgHgDABgcIACgaIA2BTIgFAWQgJAGgJADIgCABQgEAAgCgKg")
    this.shape_38.setTransform(120.7604, 22.2067, 1.25, 1.25)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#F2BD99")
      .s()
      .p(
        "AAABwQgIgCgKgNIgNgUQgZgfgLgUQgRgfADgcQAEgjAegWIAYgOQAfgRAeAUQALAHALAOIAKAQIAEAJQAFARACALQAKBQgvApQgOAMgFADQgIAEgJAAIgIgBg",
      )
    this.shape_39.setTransform(127.6718, 19.2794, 1.2498, 1.2498)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#F2B186")
      .s()
      .p("AhUAVQAEgLAagbQAagaADgMQAQALAJAOIAEADQAKANBHA+QgBABgqgPIgqgNQgLAGgPALQgSAOgIAEQgTgWgNgNg")
    this.shape_40.setTransform(143.2042, 26.183, 1.2498, 1.2498)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#443D4F")
      .s()
      .p("Ag/ATQgIgBADgQQAEgRAAgFIALAHQAPAGAXgIIAdAHQAZAGAPgBQATAAgEAKQgDALgNABQgLACgvAAQgwAAgKgCg")
    this.shape_41.setTransform(67.0172, 126.994, 1.2496, 1.2496)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#FFCAA6")
      .s()
      .p("AABAHIgXAAIgDgOQAHAAASABQAQABAKgCIAAAOIgKABIgPgBg")
    this.shape_42.setTransform(61.9368, 124.7521, 1.2498, 1.2498)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#B86632")
      .s()
      .p(
        "AhVECQgBgHADgHQADgIAGgEIAHgEIAbAAQAFhzARhOQAFgXgLgbQgPgfgGgQQgEgZAKgZQAJgXATgSIgSgLQgIgHABgJQABgFAGgEQAGgFACgDQgWgcg2gSIgFAAIgJgDQgrgFgYABQAJgIAOgCQAEgBAUAAQBDgEBGAQQBRgMA0ACIAbAEQAGAEAEAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABABAAQgvADgfAKQgpAOgVAfQAIACAEAHQAFAGgCAIQgCAHgHAFQgGAEgIAAQAvBDgbArIgdAnQgPAVABAVQgDBMAPB0QATgCAPAHQASAJABARIiegEg",
      )
    this.shape_43.setTransform(84.308, 96.9232, 1.2498, 1.2498)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#F2B186")
      .s()
      .p(
        "AhzBsQgGgGAFgIIAJgMIAHgGQAKgIAGgCQAKgFAIAEQAigOBBgiQAcgRALgLQAjgpALg5QAFA4gLA+IAAAIIgEAVQgDANgFAHQgKAMgXAHQgdALg+ALIgoAHQgYAEgQAAQgKAAgBgCg",
      )
    this.shape_44.setTransform(120.9772, 69.0819, 1.2498, 1.2498)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#443D4F")
      .s()
      .p(
        "AhKAVQgIgGACgJQACgKAXgEQAFAAAWgFQAYgGAPgCQAMAHAOgBQAHgBAQgGQAOAAAFAVQAGATgKADQgEABgOAAIgegBIg+ACQgjAAgEgCg",
      )
    this.shape_45.setTransform(105.3857, 126.7596, 1.2498, 1.2498)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#FFCAA6")
      .s()
      .p("AgYAIIAAgOIAYABQAQABAJgCIgBAOg")
    this.shape_46.setTransform(109.8661, 124.0335, 1.2498, 1.2498)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_46},
            {t: this.shape_45},
            {t: this.shape_44},
            {t: this.shape_43},
            {t: this.shape_42},
            {t: this.shape_41},
            {t: this.shape_40},
            {t: this.shape_39},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(218),
    )

    // Calque_7
    this.instance_6 = new lib.avtbrasechec3()
    this.instance_6.setTransform(37.2, 56.15, 1, 1, 105.0002, 0, 0, 7.6, 28.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(21)
        .to({regX: 7.5, rotation: 0, x: 37.25, y: 56.1}, 34)
        .wait(140)
        .to({regX: 7.6, rotation: 105.0002, x: 37.2, y: 56.15}, 22)
        .wait(1),
    )

    // Calque_6
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#F2B186")
      .s()
      .p("AgKBNQgggHgTgbQgSgbAIgnQAIgeAigbIAUAbQALAPANAJQBYA6gqArQgUAHgPABIgKABQgNAAgNgEg")
    this.shape_47.setTransform(33.6802, 53.4641)

    this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(218))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 164.8, 129.8)

  ;(lib.couplebras = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.avtbrassosseseuse()
    this.instance.setTransform(3, 10.2, 1, 1, 0, 0, 0, 0.3, 10.2)

    this.instance_1 = new lib.brassssss()
    this.instance_1.setTransform(4.5, 12.2, 1, 1, 0, 0, 0, 4.5, 5.9)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.couplebras, new cjs.Rectangle(-3.4, 0, 35.8, 18.2), null)

  ;(lib.clarinettiste = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // bras_devant
    this.instance = new lib.Interpoler2("synched", 0)
    this.instance.setTransform(23.8, 59.45)

    this.instance_1 = new lib.Interpoler3("synched", 0)
    this.instance_1.setTransform(26, 59.65, 1, 1, -9.2372)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({_off: true, rotation: -9.2372, x: 26, y: 59.65}, 24)
        .wait(130)
        .to({_off: false, rotation: 0, x: 23.8, y: 59.45}, 32)
        .wait(17),
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({_off: false}, 24)
        .to({regX: 0.1, regY: 0.1, rotation: -24.2361, x: 31.65, y: 57}, 20)
        .to({regX: 0.2, scaleX: 0.8668, rotation: 24.7955, x: 15.55, y: 62.95}, 33)
        .to(
          {
            regX: 0.3,
            regY: 0.4,
            scaleX: 0.888,
            scaleY: 0.981,
            rotation: 0,
            skewX: 18.0263,
            skewY: 12.2381,
            x: 17.8,
            y: 60.3,
          },
          17,
        )
        .to(
          {
            regX: 0.5,
            regY: 0.5,
            scaleX: 0.8984,
            scaleY: 0.9718,
            skewX: 21.5196,
            skewY: 28.5055,
            x: 15.95,
            y: 66.2,
          },
          15,
        )
        .to(
          {
            regX: 0.2,
            regY: 0.1,
            scaleX: 0.8668,
            scaleY: 1,
            rotation: 24.7955,
            skewX: 0,
            skewY: 0,
            x: 15.55,
            y: 62.95,
          },
          13,
        )
        .to(
          {
            regX: 0.3,
            regY: 0.4,
            scaleX: 0.888,
            scaleY: 0.981,
            rotation: 0,
            skewX: 18.0263,
            skewY: 12.2381,
            x: 17.8,
            y: 60.3,
          },
          17,
        )
        .to(
          {
            regX: 0.5,
            regY: 0.5,
            scaleX: 0.8984,
            scaleY: 0.9718,
            skewX: 21.5196,
            skewY: 28.5055,
            x: 15.95,
            y: 66.2,
          },
          15,
        )
        .to(
          {
            _off: true,
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            x: 23.8,
            y: 59.45,
          },
          32,
        )
        .wait(17),
    )

    // Calque_3
    this.instance_2 = new lib.teteetclarinette()
    this.instance_2.setTransform(34, 49.5, 1, 1, 0, 0, 0, 33.3, 49.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({rotation: -9.2372, x: 34.5, y: 48.15}, 24)
        .to({rotation: -24.2361, x: 36.8, y: 43.7}, 20)
        .to({regY: 49.4, rotation: 24.7955, x: 27.55, y: 55.4}, 33)
        .to({rotation: 24.7955}, 17)
        .wait(60)
        .to({regY: 49.5, rotation: 0, x: 34, y: 49.5}, 32)
        .wait(17),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F48F7D")
      .s()
      .p("AgjAYQgPgKAAgOQAAgNAPgKQAPgKAUAAQAVAAAPAKQAPAKAAANQAAAOgPAKQgPAKgVAAQgUAAgPgKg")
    this.shape.setTransform(18.1558, 39.842, 1.1498, 1.1498)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#001443")
      .s()
      .p(
        "AhvAkQgZgCgJgKQgFgGAFgDIALgCIAKgEQALgDAOABIAXABQAagBAagOIAjgWQAQgHAQABQAPAAAMAHQAJAFAMAKIASAPQAUAPASABQABAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAQgMADgVgBQgUgBgMACIgQADQgFABgIgCIgMgCQgGAAgMADQgMAEgFAAQgGAAgJgDQgKgDgFAAQgJgBgaAHQgfAGgRAAIgFAAg",
      )
    this.shape_1.setTransform(28.881, 98.6093, 1.1496, 1.1496)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#001443")
      .s()
      .p(
        "AhuEaQgEgEgBgMIgDgTQgBgNACg2QAAgxgCgRIgIhWQgGgxgMgpIgbhRQgVhDAEgIQAGgKAagSQBWg9BgAtQAyAYATA0QANAnACAjQAFBOAVAwQAMAdAGAsIAKBLQACANAIAVIAKAiQADAKAFAiQgDAEgEAEg",
      )
    this.shape_2.setTransform(24.8121, 68.4403, 1.1496, 1.1496)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#001443")
      .s()
      .p(
        "AAAECQgLgHgCgKQgCgJAIgSQAHgQgFgJQgCgEgHgGIgJgJQgGgLAGgRQAHgWAAgIQgBgHgGgNQgGgOgBgGQgCgMAJgUQAKgUgCgMQgCgJgMgRQgMgSgCgKQgDgMAHgVQAGgVgCgLQgBgHgFgKIgKgQQgJgSgBglQgBglAIgRQAOgdAjBAQAPAfAJA4QAKA5ALBwIAWDfQgIgCgMACIgVACIgCAAQgKAAgJgFg",
      )
    this.shape_3.setTransform(9.2863, 72.4944, 1.1497, 1.1497)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FC5810")
      .s()
      .p(
        "AgcDZQAThCACgKIAGgfIAGgeIAMgiQAHgVAAgPIgDgRIgEgSQgBgJgBgYQgBgVgDgLQgDgKgIgSQgKgTgDgKQgCgIgCgNIgEgWQgCgMgIgTIgLgfIgFgZQAAgQAOAGQAEACAIgGQAHgFACAEQANAfAOA7IAUBdQAIAgACAWQALBQghBrQgKAhgUAxQgXA3gJAaQgCgiANgsg",
      )
    this.shape_4.setTransform(14.037, 134.0736, 1.1497, 1.1497)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FC5810")
      .s()
      .p(
        "AgwFnIgPgCQgQABgJgNQgKgOAEgUIA7jUQANg0gJg0IgokAQgHghASgcQASgbAfgHQANgDAPACQAcgBAWASQAWASAGAdQABAIAAAKIgCEXQAAAygSAtIhYDsQgFAMgJAGQgJAGgKAAIgDAAg",
      )
    this.shape_5.setTransform(20.5057, 131.0426, 1.1497, 1.1497)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#2C2655")
      .s()
      .p(
        "AAGAGIg5gKIgQAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDgFIAAgDQAcADAuAHIBLAMQgIAGgDAAQgWgCgkgGg",
      )
    this.shape_6.setTransform(18.4948, 180.6496, 1.1495, 1.1495)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#336A9E")
      .s()
      .p(
        "AAAATIhKgMQADgJAAgXIADgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQAJADAOAAQAQgBAGABQAcAHA7AVIADAFIAEAFIAAAQQgcgCgvgIg",
      )
    this.shape_7.setTransform(18.4948, 178.2068, 1.1495, 1.1495)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F48F7D")
      .s()
      .p("AgXAeIAJg9IAmABIgLA/g")
    this.shape_8.setTransform(13.7763, 172.0601, 1.1497, 1.1497)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FC5810")
      .s()
      .p(
        "AgVDPQAPgaAFgOIAHgZQAFgLAMgPQAOgSAEgIQAGgJAFgRQAHgTADgHIAQgcQAIgQgCgMQgBgMgLgLQgGgHgQgLQgggWgNgVQgIgSgGgIQgGgHgMgIIgUgMQgTgNgVgZQgXgcgFgUQgDgOAPAJQAIAEAPAMQAXAPATAQIAlAiIAkAiQAoAhAJAKQAbAbAEAdQAHAlglA7QgTAfgrA8QgjA2gOApQgGgSALgZg",
      )
    this.shape_9.setTransform(36.2829, 127.845, 1.1495, 1.1495)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FC5810")
      .s()
      .p(
        "AhEE6QgOgIgEgPQgEgQAIgOIBIiFQAmhHAMgfQAFgNgDgNQgEgNgLgJQgggbhEg9IhIhAQgagVgDghQgCgiAWgaQAWgaAigEQAigEAaAVQAFADAHAJIC5DlQAhArgiA2IipEGQgKAOgQAFIgLABQgKAAgKgFg",
      )
    this.shape_10.setTransform(42.5561, 123.9886, 1.1495, 1.1495)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#001443")
      .s()
      .p(
        "AABALQgXgkgJgKQgKgGgDgDQADgHAAgDQAUAQAYAkQAdAoANAOQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAABIgCABQgSgPgUgdg",
      )
    this.shape_11.setTransform(31.0976, 171.15, 1.1494, 1.1494)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#336A9E")
      .s()
      .p(
        "AgHANQgcgogOgOIAPgPQAKgKAHACQAGACAIANQAGALAIAAQAIANAMAbQALAbAIANQAAADgDAKQgKAFAAAFQgTgQgZgkg",
      )
    this.shape_12.setTransform(32.4195, 169.6079, 1.1494, 1.1494)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#F48F7D")
      .s()
      .p("AgkAVIAhg6IAnATIgmA4g")
    this.shape_13.setTransform(33.6112, 161.6535, 1.1495, 1.1495)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_13, p: {scaleX: 1.1495, scaleY: 1.1495, x: 33.6112, y: 161.6535}},
            {t: this.shape_12, p: {scaleX: 1.1494, scaleY: 1.1494, x: 32.4195, y: 169.6079}},
            {t: this.shape_11, p: {scaleX: 1.1494, scaleY: 1.1494, x: 31.0976, y: 171.15}},
            {t: this.shape_10, p: {scaleX: 1.1495, scaleY: 1.1495, x: 42.5561, y: 123.9886}},
            {t: this.shape_9, p: {scaleX: 1.1495, scaleY: 1.1495, x: 36.2829, y: 127.845}},
            {t: this.shape_8, p: {x: 13.7763, y: 172.0601}},
            {t: this.shape_7, p: {scaleX: 1.1495, scaleY: 1.1495, x: 18.4948, y: 178.2068}},
            {t: this.shape_6, p: {scaleX: 1.1495, scaleY: 1.1495, x: 18.4948, y: 180.6496}},
            {t: this.shape_5, p: {x: 20.5057, y: 131.0426}},
            {t: this.shape_4, p: {x: 14.037, y: 134.0736}},
            {t: this.shape_3, p: {x: 9.2863, y: 72.4944}},
            {t: this.shape_2, p: {x: 24.8121, y: 68.4403}},
            {t: this.shape_1, p: {x: 28.881, y: 98.6093}},
            {t: this.shape},
          ],
        })
        .to(
          {
            state: [
              {t: this.shape_13, p: {scaleX: 1.1494, scaleY: 1.1494, x: 33.5976, y: 161.6385}},
              {t: this.shape_12, p: {scaleX: 1.1493, scaleY: 1.1493, x: 32.3984, y: 169.5831}},
              {t: this.shape_11, p: {scaleX: 1.1493, scaleY: 1.1493, x: 31.0767, y: 171.125}},
              {t: this.shape_10, p: {scaleX: 1.1494, scaleY: 1.1494, x: 42.5417, y: 123.9771}},
              {t: this.shape_9, p: {scaleX: 1.1494, scaleY: 1.1494, x: 36.2691, y: 127.8331}},
              {t: this.shape_8, p: {x: 13.7713, y: 172.0532}},
              {t: this.shape_7, p: {scaleX: 1.1494, scaleY: 1.1494, x: 18.4826, y: 178.1903}},
              {t: this.shape_6, p: {scaleX: 1.1494, scaleY: 1.1494, x: 18.4826, y: 180.6328}},
              {t: this.shape_5, p: {x: 20.5004, y: 131.0373}},
              {t: this.shape_4, p: {x: 14.032, y: 134.0683}},
              {t: this.shape_3, p: {x: 9.2814, y: 72.4915}},
              {t: this.shape_2, p: {x: 24.8048, y: 68.4367}},
              {t: this.shape_1, p: {x: 28.8735, y: 98.6041}},
              {t: this.shape},
            ],
          },
          122,
        )
        .wait(81),
    )

    // brasderriere
    this.instance_3 = new lib.bribri()
    this.instance_3.setTransform(35.6, 66.4, 1, 1, 0, 0, 0, 2.4, 3.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({rotation: -9.2372, x: 38.75, y: 64.6}, 24)
        .to({rotation: -24.2361, x: 45.15, y: 58.45}, 20)
        .to({regX: 2.5, rotation: 24.7955, x: 21.75, y: 71.4}, 33)
        .to({rotation: 24.7955}, 17)
        .wait(60)
        .to({regX: 2.4, rotation: 0, x: 35.6, y: 66.4}, 32)
        .wait(17),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-13.8, -3.4, 97.39999999999999, 185.8)

  ;(lib.bulles = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.instance = new lib.bulle2()
    this.instance.setTransform(-259.35, 84.4, 0.0209, 0.0209, 0, 0, 0, 26.4, 141.2)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(75)
        .to({_off: false}, 0)
        .wait(1)
        .to({regX: 41.4, regY: 53.8, scaleX: 0.4357, scaleY: 0.4357, x: -252.75, y: 46.3}, 0)
        .wait(1)
        .to({scaleX: 0.5952, scaleY: 0.5952, x: -250.35, y: 32.35}, 0)
        .wait(1)
        .to({scaleX: 0.7049, scaleY: 0.7049, x: -248.7, y: 22.8}, 0)
        .wait(1)
        .to({scaleX: 0.7842, scaleY: 0.7842, x: -247.55, y: 15.9}, 0)
        .wait(1)
        .to({scaleX: 0.8409, scaleY: 0.8409, x: -246.7, y: 10.95}, 0)
        .wait(1)
        .to({scaleX: 0.8825, scaleY: 0.8825, x: -246.05, y: 7.3}, 0)
        .wait(1)
        .to({scaleX: 0.9138, scaleY: 0.9138, x: -245.55, y: 4.55}, 0)
        .wait(1)
        .to({scaleX: 0.9377, scaleY: 0.9377, x: -245.25, y: 2.45}, 0)
        .wait(1)
        .to({scaleX: 0.956, scaleY: 0.956, x: -244.9, y: 0.9}, 0)
        .wait(1)
        .to({scaleX: 0.97, scaleY: 0.97, x: -244.75, y: -0.35}, 0)
        .wait(1)
        .to({scaleX: 0.9808, scaleY: 0.9808, x: -244.55, y: -1.3}, 0)
        .wait(1)
        .to({scaleX: 0.9889, scaleY: 0.9889, x: -244.45, y: -2}, 0)
        .wait(1)
        .to({scaleX: 0.9952, scaleY: 0.9952, x: -244.35, y: -2.55}, 0)
        .wait(1)
        .to({regX: 27.5, regY: 141.4, scaleX: 1, scaleY: 1, x: -259.35, y: 84.4}, 0)
        .wait(140)
        .to({alpha: 0}, 7)
        .to({_off: true}, 1)
        .wait(123),
    )

    // Calque_3
    this.instance_1 = new lib.bulle3()
    this.instance_1.setTransform(-175.7, 102.95, 0.0362, 0.0362, 0, 0, 0, 26.3, 154.7)
    this.instance_1.alpha = 0
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(151)
        .to({_off: false}, 0)
        .wait(1)
        .to(
          {
            regX: 112.6,
            regY: 22.3,
            scaleX: 0.4295,
            scaleY: 0.4295,
            x: -138.6,
            y: 46.05,
            alpha: 0.408,
          },
          0,
        )
        .wait(1)
        .to({scaleX: 0.6222, scaleY: 0.6222, x: -121.95, y: 20.5, alpha: 0.608}, 0)
        .wait(1)
        .to({scaleX: 0.7521, scaleY: 0.7521, x: -110.7, y: 3.35, alpha: 0.7427}, 0)
        .wait(1)
        .to({scaleX: 0.8304, scaleY: 0.8304, x: -103.95, y: -7.05, alpha: 0.8241}, 0)
        .wait(1)
        .to({scaleX: 0.8823, scaleY: 0.8823, x: -99.5, y: -13.85, alpha: 0.8779}, 0)
        .wait(1)
        .to({scaleX: 0.9192, scaleY: 0.9192, x: -96.3, y: -18.8, alpha: 0.9162}, 0)
        .wait(1)
        .to({scaleX: 0.9452, scaleY: 0.9452, x: -94.05, y: -22.2, alpha: 0.9431}, 0)
        .wait(1)
        .to({scaleX: 0.9631, scaleY: 0.9631, x: -92.5, y: -24.55, alpha: 0.9617}, 0)
        .wait(1)
        .to({scaleX: 0.9753, scaleY: 0.9753, x: -91.5, y: -26.2, alpha: 0.9744}, 0)
        .wait(1)
        .to({scaleX: 0.9834, scaleY: 0.9834, x: -90.75, y: -27.25, alpha: 0.9828}, 0)
        .wait(1)
        .to({scaleX: 0.9889, scaleY: 0.9889, x: -90.3, y: -28, alpha: 0.9885}, 0)
        .wait(1)
        .to({scaleX: 0.993, scaleY: 0.993, x: -89.95, y: -28.55, alpha: 0.9927}, 0)
        .wait(1)
        .to({scaleX: 0.9964, scaleY: 0.9964, x: -89.65, y: -29, alpha: 0.9963}, 0)
        .wait(1)
        .to({regX: 26.3, regY: 154.5, scaleX: 1, scaleY: 1, x: -175.7, y: 102.9, alpha: 1}, 0)
        .wait(93)
        .to({alpha: 0}, 8)
        .to({_off: true}, 1)
        .wait(93),
    )

    // Calque_1
    this.instance_2 = new lib.bulle1()
    this.instance_2.setTransform(-309.1, 116.75, 0.0205, 0.0205, 0, 0, 0, 136.3, 116.9)
    this.instance_2.alpha = 0
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(15)
        .to({_off: false}, 0)
        .wait(1)
        .to(
          {
            regX: 79.3,
            regY: 60.1,
            scaleX: 0.2757,
            scaleY: 0.2757,
            x: -324.8,
            y: 101.05,
            alpha: 0.2605,
          },
          0,
        )
        .wait(1)
        .to({scaleX: 0.4481, scaleY: 0.4481, x: -334.65, y: 91.3, alpha: 0.4366}, 0)
        .wait(1)
        .to({scaleX: 0.5772, scaleY: 0.5772, x: -342.05, y: 83.95, alpha: 0.5684}, 0)
        .wait(1)
        .to({scaleX: 0.6773, scaleY: 0.6773, x: -347.7, y: 78.25, alpha: 0.6705}, 0)
        .wait(1)
        .to({scaleX: 0.7558, scaleY: 0.7558, x: -352.2, y: 73.75, alpha: 0.7507}, 0)
        .wait(1)
        .to({scaleX: 0.8184, scaleY: 0.8184, x: -355.75, y: 70.25, alpha: 0.8146}, 0)
        .wait(1)
        .to({scaleX: 0.8685, scaleY: 0.8685, x: -358.65, y: 67.4, alpha: 0.8657}, 0)
        .wait(1)
        .to({scaleX: 0.9083, scaleY: 0.9083, x: -360.85, y: 65.15, alpha: 0.9064}, 0)
        .wait(1)
        .to({scaleX: 0.9394, scaleY: 0.9394, x: -362.65, y: 63.35, alpha: 0.9381}, 0)
        .wait(1)
        .to({scaleX: 0.963, scaleY: 0.963, x: -364.05, y: 62.05, alpha: 0.9622}, 0)
        .wait(1)
        .to({scaleX: 0.9801, scaleY: 0.9801, x: -365, y: 61.05, alpha: 0.9797}, 0)
        .wait(1)
        .to({scaleX: 0.9916, scaleY: 0.9916, x: -365.65, y: 60.4, alpha: 0.9914}, 0)
        .wait(1)
        .to({scaleX: 0.998, scaleY: 0.998, x: -366, y: 60.05, alpha: 0.9979}, 0)
        .wait(1)
        .to({regX: 136.3, regY: 116.7, scaleX: 1, scaleY: 1, x: -309.15, y: 116.7, alpha: 1}, 0)
        .wait(110)
        .to({alpha: 0}, 7)
        .to({_off: true}, 1)
        .wait(213),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-445.4, -120, 445.4, 240.2)

  ;(lib._3femmmes = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.instance = new lib.brasdtricot()
    this.instance.setTransform(118.1, 29.9, 1, 1, 0, 0, 0, 15.5, 0.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({regY: 0.4, rotation: 14.9992, x: 118.05, y: 30}, 10, cjs.Ease.get(1))
        .to({regY: 0.3, rotation: 0, x: 118.1, y: 29.9}, 10, cjs.Ease.get(0.91))
        .to({regY: 0.4, rotation: 14.9992, x: 118.05, y: 30}, 7, cjs.Ease.get(1))
        .to({regY: 0.3, rotation: 0, x: 118.1, y: 29.9}, 5, cjs.Ease.get(0.77))
        .to({regY: 0.4, rotation: 14.9992, x: 118.05, y: 30}, 9, cjs.Ease.get(1))
        .to({regY: 0.3, rotation: 0, x: 118.1, y: 29.9}, 10, cjs.Ease.get(1))
        .to({regY: 0.4, rotation: 14.9992, x: 118.05, y: 30}, 10, cjs.Ease.get(1))
        .wait(11),
    )

    // Calque_3
    this.instance_1 = new lib.brasgtricot()
    this.instance_1.setTransform(95.35, 29, 1, 1, 0, 0, 0, 7.3, 0.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(11)
        .to({regY: 0.2, rotation: -18.4513, y: 29.05}, 10, cjs.Ease.get(1))
        .to({regY: 0.1, rotation: 0, y: 29}, 10, cjs.Ease.get(1))
        .wait(11)
        .to({regY: 0.2, rotation: -18.4513, y: 29.05}, 10, cjs.Ease.get(1))
        .to({regY: 0.1, rotation: 0, y: 29}, 10, cjs.Ease.get(1))
        .wait(11),
    )

    // Calque_4
    this.instance_2 = new lib.pull()
    this.instance_2.setTransform(106.6, 60.1, 1, 1, 0, 0, 0, 14.1, 19.9)

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73))

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#718E32")
      .s()
      .p("AgNABQgBgDAEADQAGAFAEgBQAFgDAJgYIgEATQgDAUAFAGQgXgNgCgJg")
    this.shape.setTransform(60.303, 47.9192, 1.15, 1.15)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#718E32")
      .s()
      .p("AgFAwQAZgjAAgNQAAgEgMgrQgIgeAKgCIAGAHQAHAKABAJIAGAiQADAXgCAEQgSAqgRAKQgKAFgJAIIgIAHg")
    this.shape_1.setTransform(79.208, 44.038, 1.15, 1.15)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#86AF3E")
      .s()
      .p(
        "Ag+B7QgHgKACgUQAAgHAdghQAegiALgHQgEhPABgcQABgRAKgMQAFgGAFgCQATgGASBNQARBKgJAcQgJAagjAfQgkAhgaABQgCACgEAAQgIAAgIgLg",
      )
    this.shape_2.setTransform(81.7734, 42.9947, 1.1499, 1.1499)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgsAfQgVgGgDgJQgBgCAGABIAGAAQgEAAgFgEQgFgDgBgDQAAgBAGACQAKADAFAAQgSgDABgGQAAgBAFABQAKAEAKgCIANgCQABAAgGgDIgIgFQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAAAABAAIALACIALABQAEABADABQAEAEAJABIA9gZQgDgKAJAOQAHAKAAAPIhCAUIgZAFQgQADgIAAIgCAAg",
      )
    this.shape_3.setTransform(74.1065, 54.6656, 1.1499, 1.1499)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#86AF3E")
      .s()
      .p("AgOAYQgDgHADgRQACgTAHgGIAVAFIgDATQgDATADAIg")
    this.shape_4.setTransform(60.6536, 54.3935, 1.1497, 1.1497)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgZATQgSgCgBgEQgBgDAFgIIAJgNIASgEQATgFAOABQACAAAQAHQAFACAAADQAAADgGgBIgNgEIgMABIAMABIARAGQAEABAAACQABADgGAAIgPgDIgOgBQAbAEACACQADACgCADQgCACgFgBQgJgDgJAAIgHAAIAUACQAHAFgKAAIgfACIgMABIgIgBg",
      )
    this.shape_5.setTransform(65.0298, 53.9663, 1.1497, 1.1497)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#86AF3E")
      .s()
      .p(
        "AgWBbQAAgYgGgUQgHgUAAgDQAAgQALgwQADgKgCgeQgBgYAEgBQADAAAXgQQAVgOAAAEQAAASAJAgIgJAqQgKAugBAYQgBAnAFA+IgsABg",
      )
    this.shape_6.setTransform(63.1255, 39.4289, 1.1499, 1.1499)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#86AF3E")
      .s()
      .p(
        "AAGCCQgYgCgKgKQgMgMgBgkQgCgqAUgQQAfgZALhHIAFgnQACgLADAJQATA7gHAgQgDASgNAeQgCAIADAJIAGANQAEANgCBIIgWABIgGAAg",
      )
    this.shape_7.setTransform(57.9761, 42.5242, 1.15, 1.15)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#86AF3E")
      .s()
      .p(
        "AApCOQhegWgnACIgFi2IAVhSIAOAYQAOAZAIgBQALgCAKgJQANgMAPgdIAbAIQAeANATAVQACABgGAiQgHAmAAANIABAxQAEA1ASA2QADAJgTAAQgOAAgagFg",
      )
    this.shape_8.setTransform(75.1915, 40.4818, 1.15, 1.15)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#2355C4")
      .s()
      .p(
        "AApB1QgjgDgPgEQgEgBgTgMQgQgLgOABQgIABgKAHQgHAFgPgFQgQgGgRAAIgOABQAHgpAAgZQAAhLAEgYQAHggAYgLIEBArQgQADgSAIQgjARgEAXQgCAOAFA9IAEBAQgBAEgPAAIgbgCg",
      )
    this.shape_9.setTransform(63.3555, 75.9937, 1.1499, 1.1499)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#2355C4")
      .s()
      .p(
        "AiqA5IACgVQADgSALgNQAXgcAvgYQAggRAWgFQAXgHCaAEQARAUAGAhQAEAdgHARQgKAYhFAKIhDAFQgxAGgxACIgaABQhHAAAEgSg",
      )
    this.shape_10.setTransform(67.5548, 61.7471, 1.15, 1.15)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#98694F")
      .s()
      .p(
        "AARASQgBgDgFgFIgJgFQgNgCgJAEIgKAEIACgBQAMgIADgEQAEgDAJgQQADgDAGgBQAHgBADABQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAEAJIAFAIIgMAeg",
      )
    this.shape_11.setTransform(63.4992, 101.9172, 1.1499, 1.1499)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#643C25")
      .s()
      .p("AgXAOIALgeQADAEADAAIAGgCIARgLQAGAIABANQAAAOgHAPIgoACQABgIgBgFg")
    this.shape_12.setTransform(68.503, 103.3257, 1.1499, 1.1499)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#98694F")
      .s()
      .p("AggAMQABgHACgEQADgFAJgGIAKgEQAIgEAOACIAJAFQAFAFABADIACAHQACAFgBAIIhBABg")
    this.shape_13.setTransform(62.0562, 104.469, 1.1499, 1.1499)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#643C25")
      .s()
      .p("AhRAWIACgEQA/gEAZABQAOABAOgJQAPgIAEgOIAVgIQAEALABALQAAAJgDAMIgBAEg")
    this.shape_14.setTransform(51.976, 102.5496, 1.1499, 1.1499)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#875838")
      .s()
      .p(
        "Ag9ASQAGgFALgDIAagKIARgIQAJgGAHgHQAGgFAHABQAJAAAJAIIAIAIQACAEACABQADAAAHgCQgEANgPAJQgPAJgNgBQgagBg+AEg",
      )
    this.shape_15.setTransform(50.6209, 101.5409, 1.1499, 1.1499)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgfCeQgPgBgGgFQgHgFAHgFQArgdADgXQAFgtgIhDQgIhBgNgcQgDgIALgMQALgLAOgHQAogRADAtQAQAZgJBjQgFAwgIAsIAKAcQAEAOgGAFQgRANgOgIQgDgCgQAJQgQAIgLAAIgCAAg",
      )
    this.shape_16.setTransform(64.7821, 88.3952, 1.15, 1.15)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgxCSQgNgBABgGQAAgFAJgFIAYgNQAYgOACgNQAGgrgFhAQgGg+gLgbQgDgHALgLQAKgLAOgGQAogPAAArQAPAYgMBdQgHAugJAqIAJAaQAEAOgGAEQgHAGgIABQgJABgFgDQgEgDgZAFQgZAFgKAAIgEgBg",
      )
    this.shape_17.setTransform(54.7814, 87.8692, 1.15, 1.15)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#241614")
      .s()
      .p("AgHAOIACgKQABgFACgEIAEgGQAEgCACABIAAABQgDgCgEAEIgDAGIgFARIAAAAIAAAAg")
    this.shape_18.setTransform(64.1691, 5.3004, 1.1495, 1.1495)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#241614")
      .s()
      .p(
        "AA5BIIACgKQABgGgBgHIgDgHIgEgDIgNgFIgGgDIgBgDIgBgDIAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgGgEQgCAAgCgDIAAgGQABgGgCgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgEgBQgEgBgCgCIgEgHIgDgJQgBgGgBgDQgDgEgHgBIgLgBIgKgCQgFgCgCgFIgDgIIgDgJQgDgDgDgCQgEgBgEACIAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAHAAAEAIIADAIQABAGACACQADAFAFABIALABQAPAAAEAIQACAEAAAEQABAFACAFQADAGADABIAGACQAEACABADIAAAGQgBAEACACIAEAEIAFAEQABACgCADQABAEADACIAHAEQAIACAEACQAEADABAIQABAHgBAGIgBAJg",
      )
    this.shape_19.setTransform(73.2073, 12.2859, 1.1495, 1.1495)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#777A7C")
      .s()
      .p(
        "AAoAiQgBgCgGgDQgEgCgCgDIgFgLQgCgEgGgCQgDgBgIAAQgFAAgGgFQgCgCgDgIQgDgIgDgDQgEgDgCAFQgBADAAAGIAAAJQgBAEgEADIgJAEQgFACgCAEIgBAJQgBAFgDADQgNgkAqgeQAogfAZAjQAKAPADAVQADAWgMARQgCgJgEgEg",
      )
    this.shape_20.setTransform(68.8476, 8.3072, 1.1499, 1.1499)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#A86548")
      .s()
      .p(
        "AAFAXIgGAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBgEACgHIADgLQACgOgBgGQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQACAHgBAJIgDAOIgCALIADACIAFAAQABABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAAAg",
      )
    this.shape_21.setTransform(67.4126, 13.7184, 1.1499, 1.1499)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#D15232")
      .s()
      .p("AgCAHQgMgCABgMQAFAHAIACQAGACAIgGQgEAKgJAAIgDgBg")
    this.shape_22.setTransform(67.7225, 18.2242, 1.15, 1.15)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#777A7C")
      .s()
      .p(
        "AAGADQgEgEgCgBIgIgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAHAAAFAEIAFAHQACAEAAACQgCgBgEgFg",
      )
    this.shape_23.setTransform(70.1984, 11.6247, 1.1499, 1.1499)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#777A7C")
      .s()
      .p(
        "AgCgDQAIgDAFAEQABAAAAAAQABABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgCQgDAAgEADIgHADQADgGAIgDg",
      )
    this.shape_24.setTransform(65.1378, 10.5247, 1.1499, 1.1499)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#1D2730")
      .s()
      .p(
        "AgCABQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQACgBABAEQABADgDABIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAg",
      )
    this.shape_25.setTransform(64.9733, 12.8237, 1.1499, 1.1499)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#1D2730")
      .s()
      .p(
        "AgCACQgCgDADgBQABgBAAAAQAAAAABAAQAAABABAAQAAAAABABQAAABAAAAQABAAAAABQAAAAgBABQAAAAgBABIgCABQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg",
      )
    this.shape_26.setTransform(69.8573, 13.3231, 1.1499, 1.1499)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgPBMQgLgCgMgYQgQgfAGgyQABgGAGgMQAFgMANgHQALgGANgBQAPgBALAFQAeAOgIAzQgGAtgcAZQgOANgMAAIgEgBg",
      )
    this.shape_27.setTransform(68.6211, 13.4821, 1.1497, 1.1497)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#E76325")
      .s()
      .p("AgEAPQgDgCABgHQAAgGADgGQADgKADACQAGABgCALQgCAHgDAFQgCAFgDAAIgBAAg")
    this.shape_28.setTransform(73.6917, 15.2503, 1.1495, 1.1495)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#E76325")
      .s()
      .p(
        "AgCAOQgEgGABgNQAAgEACgEQADgEABAAQAEABABAJIAAAMQAAAHgCADQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgCAAgCgEg",
      )
    this.shape_29.setTransform(62.45, 14.0968, 1.1495, 1.1495)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#E76325")
      .s()
      .p("AgLAaQgFgVgOgTQgIgKANAAIA7gBIgFAOQgEALgEAFQgFAKgJAFQgHAGgJAAIgCAAg")
    this.shape_30.setTransform(68.8786, 19.8174, 1.1495, 1.1495)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgJA+QgLAAgQgWIgOgWQATgLAAgLIgBgCIgFgNQgGgLAAgDIgBgHQAAgCAGAAQAHAAARgKQAPgKADAAIAKACIAJAoIAFAPIAJAMIAHAFQAHAEAAABQAAAGgcAUQgaAUgFAAIgBgBg",
      )
    this.shape_31.setTransform(71.3111, 23.5808, 1.1495, 1.1495)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#5E5F60")
      .s()
      .p(
        "AgYA4IgZgHIgLAAQgIABgCgEQgCgCABgIQAAgJgCgDIgEgLQgBgGADgGIAFgKQACgFgCgHQgHgZAUgJQAFgCAKAAIArAAIALgBQAHgBAEACQADACAFAGQAFAHAAADIgBALQgBAFAHADQAEABAHABQAFABABAHQABADgCAIQgBAHACAFQADAFAGADIAMAFQgIAIgNAHIgXALQgRAHgSAAQgMAAgMgDg",
      )
    this.shape_32.setTransform(71.2464, 19.8053, 1.1499, 1.1499)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#777A7C")
      .s()
      .p(
        "AhCCAQgMgCgFgCQgKgDgDgIIgIgQQgEgKACgIIADgJQACgFgBgDQAAgEgEgFIgGgJQgEgJADgJIAFgSQAAgEgBgFIgDgKQgCgKAHgJIAGgHQACgEgBgFIgCgKQgBgFACgFQABgFAEgDIAHgGQABgCABgGQABgGACgDQAFgIALAAQAJgBAHADQgBgIAMgIQAKgHAKgCQAKgBAGADIAGAFQAEADAEAAIAIgBQAFAAAEABQAEABACAFIABAIQABAHAKAHQANAHADAFQADAGgCANQgCAMAFAGQAEAGAIAHQAFAHgGAKQgKAUAWAGQAOAEABAFQABADgBAGIAAAIQAAAEAEAEIAGAGQADAEAAANQAAANgBAFQgDAJgIACQgaAHgMADIg1AKQgfAIgaAAIgVgBg",
      )
    this.shape_33.setTransform(71.8711, 14.7592, 1.1499, 1.1499)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#8C3C31")
      .s()
      .p("AgCAHIgDgDQgDgEAAgDIgCgCIAAgCIABABQAGAEANgCIABABQgCAEgEAFIgCACIgDAAIgCgBg")
    this.shape_34.setTransform(23.5496, 23.7693, 1.15, 1.15)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#8C3C31")
      .s()
      .p("AgBAEIgBgEQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAEAAgCAHIgCACg")
    this.shape_35.setTransform(22.9093, 18.219, 1.15, 1.15)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AgIAEQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAHgGAJABQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgIAAgFAEIgCABg",
      )
    this.shape_36.setTransform(22.7014, 17.0059, 1.15, 1.15)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#BC1934")
      .s()
      .p("AALAeQgLgEgTgUQgUgUADgIQADgGAFgCIAEAAIAIAJQALAKANAJQANAHAQACQABAJgJAJQgGAGgHAAIgFgBg")
    this.shape_37.setTransform(14.207, 29.3862, 1.1499, 1.1499)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#EABCB0")
      .s()
      .p(
        "AgLBZQgPgEgLgGQgLgHgIgIQgFgEADgKIAEgPIAQgvQgJgCgDgJQgEgJAFgIQADgFAIAAIAGABIAFADQAIAAADgCIAJgGQAGgFAGgQQAHgQgBgHQAIAAAGAIQADAEAHAYQAIATAPAQQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgBADQgFAIgJAFQAAASgCAMQgBALgHADIgIABIgJgBQgGAAgCAEIgDAKIgDAOQAAADAEAIIAEAJQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABIgCAAQgEAAgPgFg",
      )
    this.shape_38.setTransform(20.2064, 21.9868, 1.15, 1.15)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#BC1934")
      .s()
      .p("Ag9BhQgKgRAEgeQAGgiACgQQAEgpAMgkQAMglAKABQALAAAFAbQAFAegCA2IgBAtIBEAPQAKACgSA2QhtgCgJgPg")
    this.shape_39.setTransform(7.8556, 42.2967, 1.1499, 1.1499)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#FFFFFF")
      .s()
      .p("AgNARQgBgHAEgMQAFgPAGgEQAGACAGAAIABAJQAAANgHATg")
    this.shape_40.setTransform(15.2879, 51.5138, 1.1495, 1.1495)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#EABCB0")
      .s()
      .p(
        "AAbAWQgMgCgWgBQgSgCgEgCQgUgFgBgEQgBgEAHgHIANgOIAUgCQAXgCAOAEQAEABAPAJQAGAEAAADQgBACgGgBIgKgEIgFgCIgMgCIAMADIASAJQAEACAAADQAAADgGgBIgJgDIgHgCIgQgDIATAFQALADACADQADADgDACQgDADgFgDQgKgEgJgCIgIgBIAWAGQAFAGgGAAIgEgBg",
      )
    this.shape_41.setTransform(19.488, 51.8202, 1.1495, 1.1495)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#EABCB0")
      .s()
      .p(
        "AgDAYQgLgBgBgEQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQgHgBAAgEQABgDADgBQgHgBgCgEQAAgDAFgDQADABAGgCIAHgDIgLACIgFACQgDAAgBgDQgBgEAKgGQAJgFAFgBQALgBAFAEQACADACAEIADAIQACAFgBAEQAAAIgCAFQgBAEgDABIgHABIgKABIgEAAg",
      )
    this.shape_42.setTransform(30.4936, 50.5498, 1.15, 1.15)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#E59D5C")
      .s()
      .p("AgGAJQgDgDAAgEQgBgEADgDQADgEAEAAQADgBADADQADACABAEQAAADgCAEQgDAEgEAAIgBAAQgDAAgDgBg")
    this.shape_43.setTransform(26.5895, 56.6819, 1.1499, 1.1499)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#FFFC99")
      .s()
      .p(
        "AgdARQgagHgFgEIgCgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAZgUAmgEQAkgEAbAQIgEAFQgEAEgWANQgXAOgFAAQgIAAgbgIg",
      )
    this.shape_44.setTransform(25.5929, 53.6963, 1.1497, 1.1497)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#FFFFFF")
      .s()
      .p("AglgJQAOgQAWgCQASgCAQAOQAPAMACATIgIgBQgBgPgMgKQgNgLgRACQgSACgLAOQgMAMACASIgJABQgCgWAOgPg")
    this.shape_45.setTransform(25.9708, 50.7912, 1.1499, 1.1499)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#F4EC56")
      .s()
      .p(
        "AhFAiIAAgBQgQgfAZgXQAWgVAjgFQAggEAZAPQAbAQgFAcIgBACQgCAPgRAGIgnAHIgLADIgsAHIgCAAQgWAAgHgOg",
      )
    this.shape_46.setTransform(26.0627, 56.9952, 1.1499, 1.1499)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#BC1934")
      .s()
      .p("AgBAUQgIgEgEgIIgEgFIAEgCQAFgCADgFQAFgJgBgFIATAOIgIAWQgDAFgEAAIgEgBg")
    this.shape_47.setTransform(20.3509, 29.767, 1.1499, 1.1499)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAHApIgNgJQgCgBgGAEQgFADgEgGIgLgPQgFgIADgGQABgDAJADQAKADALgRQAIgQAFgMQABgEADAAQAFABAMAeQAGAGACAGQACAFgEABQgDABgCAGQgBAFABADQADAGACAAQABAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgCAEgFACQgGADgCACQgBADgEAAQgDAAgFgDg",
      )
    this.shape_48.setTransform(23.6689, 25.7499, 1.15, 1.15)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#BC1934")
      .s()
      .p(
        "Ah3CWQAFgbAJgeQAJgdABgHIgEhGQgCg9AOgdQAMgZAwgZIAQAmQAGAOAVASQAZAVATAAIASgNQALgUgVguIAFAFIAWARQAFADgCAZIAHAcQAHAeAAAHQABAIgJAnQgFAXAVBGIgyAkIgDgVQg9AMgxAHQgqAGgTAAQgQAAABgEg",
      )
    this.shape_49.setTransform(14.6486, 44.4923, 1.15, 1.15)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#BC1934")
      .s()
      .p(
        "AAnBtQgWgKgcgDQgGgBgNgKIgMgKIAFgFIAEh5IgQg5QAYADALApIASBKQADAHAZAdQATAWgBATQgCAWgHAAIgCAAg",
      )
    this.shape_50.setTransform(28.6588, 42.1779, 1.15, 1.15)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#000000")
      .s()
      .p(
        "AhaCfQgBgCAShCQAShDgCgOIABgMQAAgIgEgEQgvgGgXgEQgpgHgEgKQgMgcAchTIBNgGQBPgFAMAEIAYAGQASAIAJAXIA8AVIAcAOQALAIADAWIASCYIhKALIgLAGQgFABgJgBQgIgCgEABQgLADgGAEIgaAPQgmATgpAHQgSADgJAAQgKAAAAgDg",
      )
    this.shape_51.setTransform(21.5838, 72.0391, 1.1499, 1.1499)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#7F5030")
      .s()
      .p(
        "AAcA1QgOgDgagSQgJgFgRgTQgTgTAAgFQgBgGAHgMQAIgNAJgGIAQAeQARAdAGADQAEACAOgDQAMgCADAFQADAEAMAMQAJAMgGAGQgJAJgMAAIgHgBg",
      )
    this.shape_52.setTransform(17.6649, 102.4241, 1.1499, 1.1499)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#EABCB0")
      .s()
      .p(
        "AgZCkQgKgDgOgSQgNgPgEAAQgIABgHgFQgIgFgEgJQgEgIAKgLQAPgOAHgJQALguARgxQAhhkAZgQQAWgrAgAiQAMANAFAQQAGAQgGAGQgZAVgjA8QglA+gOAuQgIAXAcAuQAFAIgHACIgGABQgIAAgKgEg",
      )
    this.shape_53.setTransform(22.419, 87.5448, 1.1499, 1.1499)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#7F5030")
      .s()
      .p(
        "AASAtQgRgHgHgKQgOgSgLgDQgGgCgKgHQgKgJgBgFQAAgGAJgKQAIgLAJgFIASAcQATAcAGADQAEADALgBQAJAAADAEIAPAPQAKAJgHAEQgIAEgJAAQgKAAgLgEg",
      )
    this.shape_54.setTransform(22.8163, 101.3928, 1.1499, 1.1499)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#D19F95")
      .s()
      .p(
        "AgSCbQgJgEgXgVQgVgTgFAAQgHAAgGgGQgHgFgDgJQgDgIAKgKQAQgLAHgIQAPgrAVgsQAphbAagNQAZgmAbAjQAKANADAQQAEAQgHAFQgZASgnA0QgpA3gSAqQgGAOANAZQAGAOAJAMQAFAJgDAFQgBACgDAAQgEAAgHgDg",
      )
    this.shape_55.setTransform(28.2595, 88.8941, 1.1499, 1.1499)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#BC1934")
      .s()
      .p("Ag2BlIgbi/IAugWIA/AaQAKADAVgYIAXAaIgHDCg")
    this.shape_56.setTransform(14.8028, 39.5949, 1.1499, 1.1499)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "Ag3CHQgRgDgHgIQgkgiALgRIAKgPQADgFAJgLQAGgKgEgFQgGgHABgLQABgJAHgIQAEgEgBgLQgBgJAHgBQAJgBAFgDQAKgGABgSQgCgTABgJQADgWASgMQAkgVA/ARQAOAEAGAEQAFAEAEASQADAOAAALQgBAKgHALQgEAHgMAMQgiAlgIAjIgEAlQgDAWgIAOQgEAGgNAEIgUAGQgQAHgRAAIgMgBg",
      )
    this.shape_57.setTransform(13.1049, 23.1269, 1.15, 1.15)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AgSAbQgXgPABgVQAAgIAEgIQAJgMARABQAPAAAOAJQAXAPgBAVQABAKgFAGQgIAMgSAAQgPABgOgLgAghgXQgEAHAAAHQAAAUAVAOQANAJAOAAQAQAAAHgLQAEgFAAgJQAAgJgGgIQgFgKgKgGQgOgJgNAAQgPAAgIAKg",
      )
    this.shape_58.setTransform(131.575, 62.5493, 1.1495, 1.1495)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AgSAcQgWgPAAgWQgBgJAFgGQAJgNARABQAOAAAOAJQAYAPAAAWQAAAJgGAGQgIANgSAAQgOAAgOgKgAghgWQgEAFAAAIQAAAUAVAOQANAJANAAQARAAAHgLQAEgGAAgHQAAgTgWgPQgNgJgNAAQgQAAgHALg",
      )
    this.shape_59.setTransform(132.2647, 62.1429, 1.1495, 1.1495)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AgSAcQgXgQAAgUQAAgJAFgHQAIgMASAAQAPgBAOAKQAXAQAAAVQAAAIgFAHQgIANgSAAQgPAAgOgKgAghgWQgEAFAAAJQgBARAWAQQAOAJANAAQAQAAAHgLQAEgGAAgHQABgSgWgQQgOgJgNAAQgQAAgHALg",
      )
    this.shape_60.setTransform(129.9369, 63.354, 1.1495, 1.1495)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AgSAbQgWgPAAgVQgBgIAFgIQAIgLASgBQAPAAAOAKQAWAQABAUQgBAJgEAHQgIAMgSAAQgOAAgPgKgAghgWQgEAGAAAHQAAATAVAPQAOAJANAAQAPAAAIgLQAEgGAAgIQAAgIgFgJQgGgJgKgHQgNgJgOAAQgQAAgHALg",
      )
    this.shape_61.setTransform(130.5979, 62.3769, 1.1495, 1.1495)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#BDEEFF")
      .s()
      .p(
        "AgfAYQgNgKAAgOQAAgNANgKQANgKASAAQASAAANAKQANAKABANQgBAOgNAKQgNAKgSAAQgSAAgNgKgAgcgUQgMAJAAALQAAAMAMAJQAMAJAQAAQARAAAMgJQAMgJAAgMQAAgLgMgJQgMgJgRAAQgQAAgMAJg",
      )
    this.shape_62.setTransform(131.029, 61.7159, 1.1495, 1.1495)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#FFFFFF")
      .s()
      .p("AglAhQgQgOAAgTQAAgSAQgOQAPgNAWAAQAWAAAQANQAQAOAAASQAAATgQAOQgQANgWAAQgWAAgPgNg")
    this.shape_63.setTransform(131.1755, 62.6716, 1.1497, 1.1497)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAMA1QgGgJgIgGQgHgFgGAAQgPAAgJgiQgJgfgCgEQgIgOgdgRIADgFQAeAQAKAQQAEAIAHAdQAIAeAKAAQARAAAQAWQALARAbAAQARAAALgIIAEAFQgOAKgSAAQgeAAgOgUg",
      )
    this.shape_64.setTransform(122.9181, 60.0911, 1.1499, 1.1499)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#5D315E")
      .s()
      .p(
        "AgvCuIgJgGQgHhRgFhLIgEg6QgBgNAAgTQgDgQAUglQAKgSALgQIAYgLQAfgHAmAQIgMAGIAOAIQAWATgNAZQgMAVghARIACAMQADAkgRC6IgNALQgEADgJAAIAAACIgHAAQgPAAgLgFg",
      )
    this.shape_65.setTransform(109.5112, 78.2765, 1.15, 1.15)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#5D315E")
      .s()
      .p(
        "AgfC3QgKgBgUgGQgRgFAAgzQgBhVgCgOIgMhLQgFgfgBgUQgBgUAVgYQAUgZAWgIICKAOIhCAvQAAATABAIQgIAGgJADQgHA/ADAXQAGAvABAcQABAdgDBAQgGAFgRACQgOAHgNAAIgBAAg",
      )
    this.shape_66.setTransform(98.8591, 78.6547, 1.15, 1.15)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#000000")
      .s()
      .p(
        "AAcCGQg4gUgpAAQgFAAABg7QADg/gBgLQAAgLAEgqIADgnQABABAZgSIAcgVQAMAMAJACQANADAEADQALAHAIAaQAJAfgKAWQgSApAUAvQAaBBAAAoIgugQg",
      )
    this.shape_67.setTransform(113.6173, 43.348, 1.15, 1.15)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#000000")
      .s()
      .p(
        "AhBCJIAYh+QALg7gBgEQgBgDgCg+IAJgFQAHgFADABQAGABAQgGIAPgGQALAUASAIQAJAFAHAAQgEDfgEAAQgsgHgvARQgaAJgGAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAABgBg",
      )
    this.shape_68.setTransform(99.3769, 42.6172, 1.15, 1.15)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#360A2B")
      .s()
      .p("AANA+QgWgjgFgFQgFgFg3gGIg1gGIAJggQALglAHgMIC9gDIAjBDIAEAkQgBAogfAKQgTAGgQAAQgcAAgUgSg")
    this.shape_69.setTransform(107.1685, 60.1541, 1.15, 1.15)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#000000")
      .s()
      .p("AgNA0QgZgJADgSIAIgvQACgNgCgPQA1gKgCALQgBANAKAoQAJAhgMAJQgMAKgOAAQgHAAgKgEg")
    this.shape_70.setTransform(107.0706, 101.0554, 1.15, 1.15)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#000000")
      .s()
      .p("AhJAbQgMgRAtgQQAzgUADgHIAagEQAagCAAAHQABAGAIAbQAFAZgOABIhYAKIgQABQgbAAgIgLg")
    this.shape_71.setTransform(92.1444, 101.607, 1.15, 1.15)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#000000")
      .s()
      .p(
        "AA5ABQgXgrgggBQgfgCgWAeQgRAXgFAhQgCALgJgEQAGgtAXgcQAYgeAfgDQAngDAbA3QANAbAFAdIgDADIgGAGQABgXgTgjg",
      )
    this.shape_72.setTransform(134.9628, 44.8149, 1.1499, 1.1499)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#000000")
      .s()
      .p("AhZhIIAHAEQANAHAgAJQAgAKAsgPQAXgIAQgJIAiCUIjfABg")
    this.shape_73.setTransform(135.394, 56.4403, 1.1499, 1.1499)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#262525")
      .s()
      .p(
        "Ag7ANQgNgIgHgKIgEgJQAEAAALACIAYAGQAOADAmgDQAlgEAMgEIATgGQAHgCABAGQABAbglAGQgfAFgaAAQgjAAgPgJg",
      )
    this.shape_74.setTransform(134.6787, 49.7712, 1.1499, 1.1499)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#1B0C00")
      .s()
      .p(
        "AgCADQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQACADgCACQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgCABIgCgCg",
      )
    this.shape_75.setTransform(109.0721, 15.1234, 1.15, 1.15)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#1B0C00")
      .s()
      .p(
        "AgCAEQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAABABQAAAAABAAQAAAAAAABQACADgDADIgCABIgCgBg",
      )
    this.shape_76.setTransform(104.4647, 15.1526, 1.15, 1.15)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#FFFFFF")
      .s()
      .p("AgBAIQgGgBgDgDIgBgBIgBgDQABgBALgDQAKgDACABQACABgBAEQgCADgEAEQgDACgEAAIgBAAg")
    this.shape_77.setTransform(107.3684, 20.051, 1.15, 1.15)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#E58251")
      .s()
      .p(
        "AAEATIgEgCIgEgDQgCgEAEgMQADgMADgDQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAABQgCADgDAMQgBALAAADQACAEACAAIABACg",
      )
    this.shape_78.setTransform(105.9087, 16.2632, 1.15, 1.15)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#E5E4E3")
      .s()
      .p(
        "AgIAEQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQABgBAGgBIAHgCIADACQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAIgHACIgFADQgFAAgBgBg",
      )
    this.shape_79.setTransform(104.4157, 13.3331, 1.15, 1.15)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#E5E4E3")
      .s()
      .p(
        "AAEADQgDgCgBAAQgFABgDgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIADgBQAFAAAFADQAGACgBACIgCABIgBABIgEgCg",
      )
    this.shape_80.setTransform(109.3105, 13.2773, 1.15, 1.15)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#FB9962")
      .s()
      .p("AgFAKQgDgCAAgIQAAgGAEgDQAEgCAEACQAFADAAADQABADgCACIgDAEQgFAFgDAAIgCgBg")
    this.shape_81.setTransform(112.0617, 17.705, 1.15, 1.15)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#FB9962")
      .s()
      .p(
        "AgdBEQgGgHgBgIQgKgzAGghQAMgIAGgGQAMgMAIgPQgDAYAJAIQADADAJADQANAEALAFQAIADgJBNQgFALgcAFQgKACgHAAQgNAAgFgFg",
      )
    this.shape_82.setTransform(107.3092, 15.9449, 1.15, 1.15)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#CCCCCC")
      .s()
      .p("AANAMIgLgJIgFgDQgSgKgFgJIALAAIAKABQATAFAMAOQABACAAAEIAAAIIgCAFQgFgCgHgGg")
    this.shape_83.setTransform(112.746, 8.6756, 1.15, 1.15)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#CCCCCC")
      .s()
      .p("AAHAZIgHgDQgIgGgGgQQgBgCABgIQAAgEADgEIAEgIIACAQQABAJACADQACAGAGAHIAJALg")
    this.shape_84.setTransform(100.5848, 16.6681, 1.15, 1.15)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AAHAUQgCgBAAgEIgCgGIgEgLIgBgBIgJADQgBgEAAgFQAEgHAFgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAABIADAFQACACAAADQAAANAFAHQADADgCAFIgCABIgBAAIgCgBg",
      )
    this.shape_85.setTransform(100.3103, 11.8669, 1.15, 1.15)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#E5E4E3")
      .s()
      .p(
        "AgnBIIgKgMQgFgHgDgGQgCgDgBgKIgCgPIgEAHQgDAFAAADQgBAIABADQAGARAIAFIAIAEQgcgHgGgQQgEgJAEgMQAEgLAKgJIgBgFIAJgCIAAABIAGAMIABAFQABAEABACQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQACgEgEgEQgFgGAAgOQAAgCgCgDIgDgFQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgEAEgFAHQAAgIACgHQADgIAQgQIAHgHQgDAEgCAGQgDAIAAALIACAUQACAQAHAFIAFACIAAABIAAgBIgFgTIgDgTQgBgFACgFIALgYIABgDQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEAAIACgBQAKgDAHACQAHgJAEgEIACAEQABADAGABIAaADQANACAIgEQAFAFAFAJQANAHADAJQAEAJgFAPIABgJQAAgDgCgCQgMgQgTgEIgLgBIgLAAQAFAIATALIAGAEIALAJQAGAGAGACIAAAAIgEAJQgCAEABADQABADAFADQAEADABACQAEAHgGALQgGgBgEgEQgFgEgCgJQgCgPgFgHQgCgEgIgIQgDgDgBABQgGADAAAHQgBAFADAGIAMAbQADAGAIAFIAMAFQgFAFgFACQgGADgJgBIgWgDQgRgBgSAIQgRAHgLAAIgCAAgAgJgxQgKAIAAAJQgBAKAEAIQACAIANAGQAEgEANgFIABgCIABgMQACgEgFgFIgRgNQgDgEgDAAIgBAAg",
      )
    this.shape_86.setTransform(106.9187, 11.4663, 1.15, 1.15)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#CCCCCC")
      .s()
      .p("AAIAJIgZgDQgHgBgBgDIgDgDQAGgEAGgDQALgDALAEQANAEAKAKQgGADgHAAIgIgBg")
    this.shape_87.setTransform(109.6122, 3.3935, 1.15, 1.15)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AAFAnIgEgCQgGgFgCgRIgCgTQAAgLADgIQACgGACgEIAIgFIADAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADIgKAYQgCAFAAAEIACAUIAGATg",
      )
    this.shape_88.setTransform(102.281, 9.3944, 1.15, 1.15)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#CCCCCC")
      .s()
      .p("AgPALQgEgIABgKQAAgJAKgHQACgCAFAFIARANQAFAFgCADIgBANIgBABQgNAGgEAEQgNgHgCgHg")
    this.shape_89.setTransform(106.8436, 8.5407, 1.15, 1.15)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#CCCCCC")
      .s()
      .p("AAEAcQgIgFgDgGIgLgaQgEgGABgGQABgHAFgDQABgBAEADQAHAIADAFQADAHACAOQADAJAFAEQAEAEAFABIgHAKg")
    this.shape_90.setTransform(113.5669, 13.6653, 1.15, 1.15)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#FFAF2D")
      .s()
      .p("AgHASQgIgEgDgJQgDgJAEgHQAFgJAOABQANABAEAHQACADgBALIgBAIQgCAGgJACIgHABQgEAAgEgCg")
    this.shape_91.setTransform(112.2312, 18.5377, 1.15, 1.15)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#FB9962")
      .s()
      .p(
        "AgNA5QgWgCgIgOQgEgFgOgKIgMgJQAcgDAHgYQAEgdACgKQACgFAIgCQgCAWAIAOQADAFAEABIAMAGQAJADAJAAQAHACAIgBQAKAYAbADQAHABgYAIQgdALgEADQgNALgSAAIgFAAg",
      )
    this.shape_92.setTransform(107.7071, 26.251, 1.15, 1.15)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#F1804A")
      .s()
      .p("AAPAZQgKAAgIgDIgNgGQgDgBgDgFQgIgNABgWQANgCAQAGQASAGAEAJIADAMQACAMADAIIgHAAIgIgBg")
    this.shape_93.setTransform(108.4199, 22.6599, 1.15, 1.15)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#E5E4E3")
      .s()
      .p(
        "AgbAuQgRgLgGgRQgFgOAEgQQADgQALgLQACAQAKALIARAPIADAEQAEAEAEAAQAFAAADgDQACgCgDgDIgFgEIgIgIQgQgJgFgLQgDgGACgOIAEgBQAGgCAKABIAYAGQAXAGADAIQABADgBAEIgCAGIgRgEQgRgNgLgHQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgEAKACAKIADAEQAaAQAWAEIAJACIgDALIgFAMIgBAAIgKgEQgHgCgFABQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQgCAFACAFQABACACADIgJgFQgGgDgDACIgEADQgDgCgDgEIgQgbIgGgJQgEgGgFgBQgFAMAHAOQADAHAMAQQAGAIAIAHQgDACgDAAQgHAAgLgHg",
      )
    this.shape_94.setTransform(116.0991, 24.9914, 1.15, 1.15)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#CCCCCC")
      .s()
      .p("AAAASQgMgQgDgHQgHgOAFgNQAFACAEAGIAGAKIAPAZQAEAFADACQgCALgEADIgBABQgIgHgFgIg")
    this.shape_95.setTransform(114.1447, 27.1043, 1.15, 1.15)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AAHAaIgDgEIgQgQQgKgKgCgQQAFgGAHgDQgCANADAGQAFAKAPAJIAJAIIAFAFQADADgCACQgDADgFABQgFgBgEgEg",
      )
    this.shape_96.setTransform(114.565, 22.7631, 1.15, 1.15)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AAWAWQgWgGgagPIgDgEQgDgJAEgKQABAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQAMAGAPAOIASADIABAGQABADAEADQADADABADIABAEg",
      )
    this.shape_97.setTransform(118.7569, 22.7056, 1.15, 1.15)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AgHAIQgDgDAAgCQgCgEACgFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAFgBAFACIALAEIAAAAQgFAJgGACIgDABIgFgBg",
      )
    this.shape_98.setTransform(119.9334, 28.5155, 1.15, 1.15)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_98},
            {t: this.shape_97},
            {t: this.shape_96},
            {t: this.shape_95},
            {t: this.shape_94},
            {t: this.shape_93},
            {t: this.shape_92},
            {t: this.shape_91},
            {t: this.shape_90},
            {t: this.shape_89},
            {t: this.shape_88},
            {t: this.shape_87},
            {t: this.shape_86},
            {t: this.shape_85},
            {t: this.shape_84},
            {t: this.shape_83},
            {t: this.shape_82},
            {t: this.shape_81},
            {t: this.shape_80},
            {t: this.shape_79},
            {t: this.shape_78},
            {t: this.shape_77},
            {t: this.shape_76},
            {t: this.shape_75},
            {t: this.shape_74},
            {t: this.shape_73},
            {t: this.shape_72},
            {t: this.shape_71},
            {t: this.shape_70},
            {t: this.shape_69},
            {t: this.shape_68},
            {t: this.shape_67},
            {t: this.shape_66},
            {t: this.shape_65},
            {t: this.shape_64},
            {t: this.shape_63},
            {t: this.shape_62},
            {t: this.shape_61},
            {t: this.shape_60},
            {t: this.shape_59},
            {t: this.shape_58},
            {t: this.shape_57},
            {t: this.shape_56},
            {t: this.shape_55},
            {t: this.shape_54},
            {t: this.shape_53},
            {t: this.shape_52},
            {t: this.shape_51},
            {t: this.shape_50},
            {t: this.shape_49},
            {t: this.shape_48},
            {t: this.shape_47},
            {t: this.shape_46},
            {t: this.shape_45},
            {t: this.shape_44},
            {t: this.shape_43},
            {t: this.shape_42},
            {t: this.shape_41},
            {t: this.shape_40},
            {t: this.shape_39},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(73),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 148.3, 108.6)

  ;(lib._3femmes = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // BULLES
    this.instance = new lib.bulles()
    this.instance.setTransform(302.6, -105.5)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // Calque_1
    this.instance_1 = new lib._3femmmes()
    this.instance_1.setTransform(74.15, 51.3, 1.1, 1.1, 0, 0, 0, 74.2, 54.3)

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib._3femmes,
    new cjs.Rectangle(-7.5, -8.5, 163.1, 119.5),
    null,
  )

  ;(lib.musiciens = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // notes_de_musique
    this.instance = new lib.notemusique()
    this.instance.setTransform(124, 5.15, 0.675, 0.675, 0, 0, 0, 12.1, 22.6)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(90))

    // Calque_15
    this.instance_1 = new lib.notemusiquecopy()
    this.instance_1.setTransform(62.6, -8.95, 0.675, 0.675, 9.7404, 0, 0, 12.2, 22.6)

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90))

    // AVTGUITARE
    this.instance_2 = new lib.avbrasguitare()
    this.instance_2.setTransform(240.45, 66, 1, 1, 0, 0, 0, 34.8, 3.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({regX: 17, regY: 5.2, rotation: -6.1253, x: 222.95, y: 69.65}, 0)
        .wait(1)
        .to({rotation: -9.1193, x: 223.15, y: 70.6}, 0)
        .wait(1)
        .to({rotation: -11.1148, x: 223.35, y: 71.15}, 0)
        .wait(1)
        .to({rotation: -12.3313, x: 223.45, y: 71.55}, 0)
        .wait(1)
        .to({rotation: -13.0881, x: 223.55, y: 71.75}, 0)
        .wait(1)
        .to({rotation: -13.598, y: 71.9}, 0)
        .wait(1)
        .to({rotation: -13.9466, x: 223.65, y: 72}, 0)
        .wait(1)
        .to({rotation: -14.1861, y: 72.1}, 0)
        .wait(1)
        .to({rotation: -14.3527, y: 72.15}, 0)
        .wait(1)
        .to({rotation: -14.4743, x: 223.7, y: 72.2}, 0)
        .wait(1)
        .to({rotation: -14.5749}, 0)
        .wait(1)
        .to({rotation: -14.6779, y: 72.25}, 0)
        .wait(1)
        .to({rotation: -14.8087, x: 223.75, y: 72.3}, 0)
        .wait(1)
        .to({regX: 34.9, regY: 3.5, rotation: -14.9992, x: 240.55, y: 66.05}, 0)
        .wait(1)
        .to({regX: 17, regY: 5.2, rotation: -8.784, x: 223.1, y: 70.45}, 0)
        .wait(1)
        .to({rotation: -4.7678, x: 222.85, y: 69.25}, 0)
        .wait(1)
        .to({rotation: -1.4427, x: 222.7, y: 68.15}, 0)
        .wait(1)
        .to({rotation: 1.2509, x: 222.6, y: 67.3}, 0)
        .wait(1)
        .to({rotation: 3.1647, x: 222.5, y: 66.75}, 0)
        .wait(1)
        .to({rotation: 4.6721, x: 222.55, y: 66.3}, 0)
        .wait(1)
        .to({rotation: 5.9703, x: 222.5, y: 65.8}, 0)
        .wait(1)
        .to({rotation: 7.0696, y: 65.5}, 0)
        .wait(1)
        .to({rotation: 7.9818, x: 222.6, y: 65.2}, 0)
        .wait(1)
        .to({rotation: 8.7194, x: 222.55, y: 65}, 0)
        .wait(1)
        .to({rotation: 9.2951, y: 64.85}, 0)
        .wait(1)
        .to({rotation: 9.7219, y: 64.7}, 0)
        .wait(1)
        .to({rotation: 10.0121, x: 222.6, y: 64.55}, 0)
        .wait(1)
        .to({rotation: 10.178, y: 64.5}, 0)
        .wait(1)
        .to({regX: 34.9, regY: 3.5, rotation: 10.2309, x: 240.55, y: 66.05}, 0)
        .wait(1)
        .to({regX: 17, regY: 5.2, rotation: 2.1132, x: 222.55, y: 67.1}, 0)
        .wait(1)
        .to({rotation: -2.6165, x: 222.75, y: 68.5}, 0)
        .wait(1)
        .to({rotation: -6.1888, x: 222.9, y: 69.6}, 0)
        .wait(1)
        .to({rotation: -8.7426, x: 223.1, y: 70.4}, 0)
        .wait(1)
        .to({rotation: -10.3602, x: 223.2, y: 70.9}, 0)
        .wait(1)
        .to({rotation: -11.549, x: 223.35, y: 71.3}, 0)
        .wait(1)
        .to({rotation: -12.4511, x: 223.4, y: 71.6}, 0)
        .wait(1)
        .to({rotation: -13.1389, x: 223.5, y: 71.75}, 0)
        .wait(1)
        .to({rotation: -13.6624, x: 223.55, y: 71.9}, 0)
        .wait(1)
        .to({rotation: -14.0584, x: 223.6, y: 72}, 0)
        .wait(1)
        .to({rotation: -14.3557, y: 72.15}, 0)
        .wait(1)
        .to({rotation: -14.5782, x: 223.65}, 0)
        .wait(1)
        .to({rotation: -14.7467, y: 72.2}, 0)
        .wait(1)
        .to({rotation: -14.8806, x: 223.7, y: 72.3}, 0)
        .wait(1)
        .to({regX: 34.9, regY: 3.5, rotation: -14.9992, x: 240.55, y: 66.05}, 0)
        .wait(2)
        .to({regX: 17, regY: 5.2, rotation: -12.5662, x: 223.45, y: 71.6}, 0)
        .wait(1)
        .to({rotation: -8.2619, x: 223.05, y: 70.25}, 0)
        .wait(1)
        .to({rotation: -3.2812, x: 222.75, y: 68.8}, 0)
        .wait(1)
        .to({rotation: 0.0165, x: 222.6, y: 67.7}, 0)
        .wait(1)
        .to({rotation: 1.7766, y: 67.2}, 0)
        .wait(1)
        .to({rotation: 2.9568, y: 66.8}, 0)
        .wait(1)
        .to({rotation: 3.8459, x: 222.5, y: 66.55}, 0)
        .wait(1)
        .to({rotation: 4.5609, x: 222.55, y: 66.3}, 0)
        .wait(1)
        .to({rotation: 5.1785, y: 66.15}, 0)
        .wait(1)
        .to({rotation: 5.7572, y: 65.9}, 0)
        .wait(1)
        .to({rotation: 6.3494, x: 222.5, y: 65.75}, 0)
        .wait(1)
        .to({rotation: 7.0096, y: 65.5}, 0)
        .wait(1)
        .to({rotation: 7.8037, x: 222.55, y: 65.25}, 0)
        .wait(1)
        .to({rotation: 8.8252, y: 64.95}, 0)
        .wait(1)
        .to({regX: 34.9, regY: 3.5, rotation: 10.2309, x: 240.55, y: 66.05}, 0)
        .wait(1)
        .to({regX: 17, regY: 5.2, rotation: 2.1132, x: 222.55, y: 67.1}, 0)
        .wait(1)
        .to({rotation: -2.6165, x: 222.75, y: 68.5}, 0)
        .wait(1)
        .to({rotation: -6.1888, x: 222.9, y: 69.6}, 0)
        .wait(1)
        .to({rotation: -8.7426, x: 223.1, y: 70.4}, 0)
        .wait(1)
        .to({rotation: -10.3602, x: 223.2, y: 70.9}, 0)
        .wait(1)
        .to({rotation: -11.549, x: 223.35, y: 71.3}, 0)
        .wait(1)
        .to({rotation: -12.4511, x: 223.4, y: 71.6}, 0)
        .wait(1)
        .to({rotation: -13.1389, x: 223.5, y: 71.75}, 0)
        .wait(1)
        .to({rotation: -13.6624, x: 223.55, y: 71.9}, 0)
        .wait(1)
        .to({rotation: -14.0584, x: 223.6, y: 72}, 0)
        .wait(1)
        .to({rotation: -14.3557, y: 72.15}, 0)
        .wait(1)
        .to({rotation: -14.5782, x: 223.65}, 0)
        .wait(1)
        .to({rotation: -14.7467, y: 72.2}, 0)
        .wait(1)
        .to({rotation: -14.8806, x: 223.7, y: 72.3}, 0)
        .wait(1)
        .to({regX: 34.9, regY: 3.5, rotation: -14.9992, x: 240.55, y: 66.05}, 0)
        .wait(1)
        .to({regX: 17, regY: 5.2, rotation: -9.0522, x: 223.1, y: 70.55}, 0)
        .wait(1)
        .to({rotation: -6.1063, x: 222.9, y: 69.6}, 0)
        .wait(1)
        .to({rotation: -4.0861, x: 222.75, y: 69}, 0)
        .wait(1)
        .to({rotation: -2.7828, x: 222.7, y: 68.55}, 0)
        .wait(1)
        .to({rotation: -1.9738, y: 68.35}, 0)
        .wait(1)
        .to({rotation: -1.4191, x: 222.65, y: 68.2}, 0)
        .wait(1)
        .to({rotation: -1.0314, x: 222.6, y: 68.05}, 0)
        .wait(1)
        .to({rotation: -0.7588, y: 68}, 0)
        .wait(1)
        .to({rotation: -0.5662, y: 67.9}, 0)
        .wait(1)
        .to({rotation: -0.4273, y: 67.85}, 0)
        .wait(1)
        .to({rotation: -0.3208, y: 67.8}, 0)
        .wait(1)
        .to({rotation: -0.2274, x: 222.55}, 0)
        .wait(1)
        .to({rotation: -0.1276, y: 67.75}, 0)
        .wait(1)
        .to({regX: 34.8, regY: 3.4, rotation: 0, x: 240.45, y: 66}, 0)
        .wait(1),
    )

    // BICEPSGUITARE
    this.instance_3 = new lib.bicepsguitare()
    this.instance_3.setTransform(231.45, 44.75, 1, 1, 0, 0, 0, 7.9, -2.9)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(13)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(1)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(14)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(1)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(14)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(2)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(14)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(1)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(14)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(1)
        .to({regX: 8.7, regY: 10.3, x: 232.25, y: 57.95}, 0)
        .wait(13)
        .to({regX: 7.9, regY: -2.9, x: 231.45, y: 44.75}, 0)
        .wait(1),
    )

    // main_guitare
    this.instance_4 = new lib.mainmain()
    this.instance_4.setTransform(194.95, 54.75, 1, 1, 0, 0, 0, 13.3, 15.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({regX: 13.4, scaleX: 1.1581, scaleY: 1.0068, rotation: 6.6876, x: 192.9, y: 53.2}, 19)
        .wait(1)
        .to(
          {
            regX: 6.4,
            regY: 11.1,
            scaleX: 1.1192,
            scaleY: 0.9648,
            rotation: 0,
            skewX: 4.7253,
            skewY: 4.442,
            x: 185.85,
            y: 48.3,
          },
          0,
        )
        .wait(1)
        .to({scaleX: 1.0941, scaleY: 0.9376, skewX: 3.46, skewY: 2.9944, x: 186.2, y: 48.85}, 0)
        .wait(1)
        .to({scaleX: 1.0736, scaleY: 0.9154, skewX: 2.4251, skewY: 1.8103, x: 186.45, y: 49.25}, 0)
        .wait(1)
        .to({scaleX: 1.0575, scaleY: 0.8981, skewX: 1.6155, skewY: 0.884, x: 186.65, y: 49.55}, 0)
        .wait(1)
        .to({scaleX: 1.0466, scaleY: 0.8862, skewX: 1.062, skewY: 0.2508, x: 186.85, y: 49.85}, 0)
        .wait(1)
        .to({scaleX: 1.0375, scaleY: 0.8764, skewX: 0.6037, skewY: -0.2737, x: 187, y: 50}, 0)
        .wait(1)
        .to({scaleX: 1.0298, scaleY: 0.8681, skewX: 0.216, skewY: -0.7172, x: 187.1, y: 50.1}, 0)
        .wait(1)
        .to(
          {scaleX: 1.0234, scaleY: 0.8612, skewX: -0.1051, skewY: -1.0846, x: 187.15, y: 50.25},
          0,
        )
        .wait(1)
        .to({scaleX: 1.0183, scaleY: 0.8556, skewX: -0.3642, skewY: -1.381, x: 187.25, y: 50.35}, 0)
        .wait(1)
        .to({scaleX: 1.0143, scaleY: 0.8513, skewX: -0.5658, skewY: -1.6116, x: 187.35, y: 50.4}, 0)
        .wait(1)
        .to({scaleX: 1.0113, scaleY: 0.8481, skewX: -0.7148, skewY: -1.7821, y: 50.45}, 0)
        .wait(1)
        .to({scaleX: 1.0093, scaleY: 0.8459, skewX: -0.8158, skewY: -1.8977, x: 187.4, y: 50.55}, 0)
        .wait(1)
        .to({scaleX: 1.0082, scaleY: 0.8447, skewX: -0.8733, skewY: -1.9635, y: 50.6}, 0)
        .wait(1)
        .to(
          {
            regX: 13.5,
            regY: 15.9,
            scaleX: 1.0078,
            scaleY: 0.8443,
            skewX: -0.8916,
            skewY: -1.9844,
            x: 194.55,
            y: 54.3,
          },
          0,
        )
        .to(
          {regX: 13.3, regY: 15.8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 194.95, y: 54.75},
          11,
        )
        .to({regX: 13.4, scaleX: 1.1581, scaleY: 1.0068, rotation: 6.6876, x: 192.9, y: 53.2}, 9)
        .wait(1)
        .to(
          {
            regX: 6.4,
            regY: 11.1,
            scaleX: 1.1383,
            scaleY: 0.9854,
            rotation: 0,
            skewX: 5.689,
            skewY: 5.5446,
            x: 185.6,
            y: 47.95,
          },
          0,
        )
        .wait(1)
        .to({scaleX: 1.1025, scaleY: 0.9467, skewX: 3.8816, skewY: 3.4768, x: 186.1, y: 48.7}, 0)
        .wait(1)
        .to({scaleX: 1.0725, scaleY: 0.9143, skewX: 2.3707, skewY: 1.7481, x: 186.5, y: 49.3}, 0)
        .wait(1)
        .to({scaleX: 1.0582, scaleY: 0.8988, skewX: 1.6481, skewY: 0.9214, x: 186.65, y: 49.55}, 0)
        .wait(1)
        .to({scaleX: 1.0497, scaleY: 0.8896, skewX: 1.2203, skewY: 0.4319, x: 186.8, y: 49.7}, 0)
        .wait(1)
        .to({scaleX: 1.0436, scaleY: 0.883, skewX: 0.9142, skewY: 0.0816, x: 186.95, y: 49.85}, 0)
        .wait(1)
        .to({scaleX: 1.0388, scaleY: 0.8778, skewX: 0.6708, skewY: -0.1968, x: 187, y: 50}, 0)
        .wait(1)
        .to({scaleX: 1.0345, scaleY: 0.8732, skewX: 0.4523, skewY: -0.4468, y: 50.05}, 0)
        .wait(1)
        .to({scaleX: 1.03, scaleY: 0.8683, skewX: 0.2275, skewY: -0.7041, x: 187.1, y: 50.1}, 0)
        .wait(1)
        .to(
          {scaleX: 1.0248, scaleY: 0.8626, skewX: -0.0367, skewY: -1.0063, x: 187.15, y: 50.25},
          0,
        )
        .wait(1)
        .to({scaleX: 1.0179, scaleY: 0.8552, skewX: -0.3841, skewY: -1.4038, x: 187.25, y: 50.4}, 0)
        .wait(1)
        .to(
          {
            regX: 13.5,
            regY: 15.9,
            scaleX: 1.0078,
            scaleY: 0.8443,
            skewX: -0.8916,
            skewY: -1.9844,
            x: 194.55,
            y: 54.3,
          },
          0,
        )
        .to(
          {regX: 13.3, regY: 15.8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 194.95, y: 54.75},
          14,
        )
        .wait(11),
    )

    // GUITARISTE
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#383838")
      .s()
      .p("AgEAAQAAgGAEABQAFAAAAAFQgBAGgEAAQgFgBABgFg")
    this.shape.setTransform(214.0392, 25.8954, 1.1499, 1.1499)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#383838")
      .s()
      .p(
        "AgCAFQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgFAEAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgEAAIgBAAIgCgBg",
      )
    this.shape_1.setTransform(207.6594, 26.5077, 1.1499, 1.1499)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAhgmQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_2.setTransform(204.9383, 60.4734, 1.1495, 1.1495)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAhgmQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_3.setTransform(200.5888, 56.6853, 1.1496, 1.1496)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAhgmQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_4.setTransform(196.2202, 52.8915, 1.1496, 1.1496)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAhgmQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_5.setTransform(191.8372, 49.0977, 1.1496, 1.1496)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAhgmQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_6.setTransform(187.4686, 45.304, 1.1496, 1.1496)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAhgmQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_7.setTransform(183.1001, 41.5102, 1.1496, 1.1496)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "AgRAVIAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAhgmQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIghAmIgBABIgBAAg",
      )
    this.shape_8.setTransform(178.7149, 37.7129, 1.1495, 1.1495)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#A54220")
      .s()
      .p(
        "AAJAvIg6gzQgEgCAAgFQAAgEADgDIAZgdQADgDAEgBQAEAAADADIA6AyQAHAGAAAIQABAIgGAGIgMAPQgFAGgJABIgBAAQgIAAgFgFgAgmgOQgDADADADIAyArQACACADgDQADgDgDgDIgxgqIgDgBQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAgAgdgZQgCADADADIAxArQADADADgEQADgDgEgCIgxgrIgDgBIgDABgAgTgkQgDADADADIAyArQADADACgEQADgCgDgDIgxgrIgDgBIgDABg",
      )
    this.shape_9.setTransform(172.5074, 32.3932, 1.1496, 1.1496)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#383838")
      .s()
      .p("AgeAkQgPgNgCgTQgBgTANgPQANgPAUgCQASgBAQANQAOANACAUQABASgNAPQgNAPgTACIgEAAQgRAAgNgMg")
    this.shape_10.setTransform(213.091, 67.6556, 1.1496, 1.1496)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#383838")
      .s()
      .p("AiihsIAgglIElD+IggAlg")
    this.shape_11.setTransform(192.8544, 50.0154, 1.1498, 1.1498)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#AA6826")
      .s()
      .p(
        "AgRCcQgQgMgTgfQgRgcgHgVQgHgYgEgJQgGgRgQgGIgRgHQgIgDgHgHQgfgeADgfQADgaAcgkQAfghAagHQAfgHAhAaQAIAHAFAHIAJAQQAPAaA1AJQAVAEANAGQAPAHAPAOQAkAigEAsQgDAqghAoQgdAvgnARQgRAIgRAAQgZAAgXgTg",
      )
    this.shape_12.setTransform(213.9265, 69.8463, 1.1498, 1.1498)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#383838")
      .s()
      .p(
        "AgGAIQAAgBgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAIgKQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABIgIAJIgDACIgCgBg",
      )
    this.shape_13.setTransform(172.7901, 27.6565, 1.1496, 1.1496)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#383838")
      .s()
      .p("AADAKQgEAAgEgDQgEgEgBgDQAAgEACgDQACgDAFABQADAAAEADQAEADABAEQABAEgDADQgCACgDAAIgBAAg")
    this.shape_14.setTransform(173.6587, 26.6426, 1.1496, 1.1496)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#383838")
      .s()
      .p(
        "AgFAIQgBgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAIgJQABgBAAAAQABgBAAAAQABAAABAAQAAABABAAIABADIgBACIgIAJIgCACIgCgBg",
      )
    this.shape_15.setTransform(176.2376, 30.6805, 1.1496, 1.1496)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#383838")
      .s()
      .p("AACAKQgDAAgEgDQgDgDgBgEQgBgEACgDQACgDAFABQADAAAEADQAEAEABADQABAEgDADQgCACgEAAIgBAAg")
    this.shape_16.setTransform(177.1624, 29.6317, 1.1496, 1.1496)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#383838")
      .s()
      .p("AgGAIQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAIgJQACgDADACQACADgCACIgIAKIgCABIgDgBg")
    this.shape_17.setTransform(168.7792, 34.3659, 1.1496, 1.1496)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#383838")
      .s()
      .p("AACAKQgDAAgEgDQgEgDAAgEQgBgEACgDQADgDAEABQADAAAEADQADAEABADQACAEgDADQgCACgEAAIgBAAg")
    this.shape_18.setTransform(167.9106, 35.3798, 1.1496, 1.1496)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#383838")
      .s()
      .p(
        "AgGAIQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBIAIgJQACgDADACQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABIgIAJIgCACIgDgBg",
      )
    this.shape_19.setTransform(172.07, 37.2192, 1.1496, 1.1496)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#383838")
      .s()
      .p("AgFAHQgEgEgBgDQAAgEACgDQACgDAFABQADAAAEADQAEAEABACQAAAFgCADQgCADgFgBQgDAAgEgDg")
    this.shape_20.setTransform(171.187, 38.2251, 1.1496, 1.1496)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AAKAEQgKgFgKABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAKgDAMAGQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAAg",
      )
    this.shape_21.setTransform(207.0333, 23.8436, 1.1496, 1.1496)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLAFQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAMACAIgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABIABABIgBABQgHAGgLAAg",
      )
    this.shape_22.setTransform(211.9701, 32.1526, 1.1496, 1.1496)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AAOAEQgOgIgNAHQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQABgBAAAAQAAAAABAAQAPgJAQAKQABABAAAAQAAAAAAABQABAAgBAAQAAABAAAAIgCABg",
      )
    this.shape_23.setTransform(214.2552, 23.579, 1.1496, 1.1496)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#E56E5E")
      .s()
      .p(
        "AgbAWQgFgBgHgEIAMABQAFABAGgCQAIgBANgHQALgHAHgGIARgRIgGALIgIAJQgIAGgLAHQgLAHgLACIgJABIgDAAg",
      )
    this.shape_24.setTransform(215.7871, 35.1421, 1.1491, 1.1491)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#E56E5E")
      .s()
      .p(
        "AABAZIgBgBIgDgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIABgBIAAgBIABgGQAEgKAAgZQADAHgBANQgBAKgBAGIgCAHIAAAAIAAABIAJAFg",
      )
    this.shape_25.setTransform(210.1112, 27.3586, 1.1495, 1.1495)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#F48F7D")
      .s()
      .p("AgLAPQgFgGgBgJQAAgHAFgGQAFgHAHAAQAGAAAGAGQAFAGAAAIQABAIgFAHQgFAFgHABIgBAAQgGAAgFgGg")
    this.shape_26.setTransform(221.0055, 29.1405, 1.1495, 1.1495)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#F48F7D")
      .s()
      .p(
        "AgOA4QgKgIgCgMIgLhQQgBgFADgDQACgDADAAIAvgIIABAAQAHAAABAKIAMBPQABAOgIAKQgIALgNACIgDAAIgCABQgKAAgJgIg",
      )
    this.shape_27.setTransform(217.8304, 36.7898, 1.1496, 1.1496)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#F48F7D")
      .s()
      .p("AgwA4QgMgWgBgcIgChAQgBgNAHgFIARgLIABABQBZAvANAiIABAZQABAcgSAUQgRATgaABIgDAAQgfAAgSggg")
    this.shape_28.setTransform(213.2645, 27.3936, 1.1496, 1.1496)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#F48F7D")
      .s()
      .p("AgdAUQgMgIAAgMQAAgLAMgIQAMgJARAAQARAAANAJQAMAIAAALQAAAMgMAIQgNAJgRAAQgRAAgMgJg")
    this.shape_29.setTransform(218.7276, 41.4844, 1.1499, 1.1499)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#FC5810")
      .s()
      .p(
        "AA7AcQgagFgHAAQgEAAgKADQgJADgFgBQgFAAgMgDQgLgDgGAAIgLACQgHACgFgBIgPgDQgLgCgXABQgTABgPgEQANAAAKgEQAIgDAJgIIAQgPQAKgKAIgEQAZgOAfANQAMAGAXAOQAbAOAYABIAWgCQANAAAKADIAKADIALACQAFADgEAGQgHAKgYACIgCAAQgTAAgegHg",
      )
    this.shape_30.setTransform(216.7664, 97.0361, 1.1498, 1.1498)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#FC5810")
      .s()
      .p(
        "AiUEGQgGgGgBgOIABgWQABgXAGgaQAEgVABgiQABgqABgNQALhKAEgnQAHhCgGgyQADgXAIgQQADgGAEgDQAagaAMgHQAkgUAzANQALADAkAFQAiAGAPAJQAHAGAOAOQAPARAEALQADAIgOAzIgRA/QgGAnAAAuIABBRQgBARAHAuQAGAzABAMIAAASQAAAMgEADg",
      )
    this.shape_31.setTransform(217.8542, 69.0328, 1.1498, 1.1498)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#FC5810")
      .s()
      .p(
        "AgOC+QgMgBgIACIgDjTQgChlADg7IABgLIA/AAIgGAOQgEAJAAAHQgBAKAIAUQAJAUgBAKQgBAKgKARQgJAQgBAKQAAALALATQALASgBALQAAAHgFAMQgEANAAAGQABAIAJAUQAIARgFAJQgCADgGAGQgFAGgCAEQgDAJAIAPQAKARgBAIQgCAKgKAGQgIAFgLAAIgTgCg",
      )
    this.shape_32.setTransform(233.0027, 78.8864, 1.1499, 1.1499)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AhPApIABgLIgDgNQgCgJABgFQABgDAGgJIAKgQIAKgMQAJgGASAAIATgCQANgCAFAAQASACAgAOQAKAFAFAJQACAEAFAPQADAIgBAIQgCAIgGAEQgEADgIABQgUAEgUgFQgWgIgLgBQgNgCgOAEQgNAEgKAKQgIAHgDAAIgCABQgFAAgBgHg",
      )
    this.shape_33.setTransform(214.4223, 17.8877, 1.1498, 1.1498)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "AgYBnQgXgIgPgZQgNgWgMgqIABgEIgEgKQgDgGABgEQAGgGABgDQAAgCgCgJQgCgJAJgMQAMgPACgGIAAgBIABgBIALgIIAEgCQANgGAHgCIACAAQAHAAAAgBIADgBQAMgBAMAAIABAAIANABQAJABAOAHQAVAJAJAOIAJAOIAIAWIABADIACAWIAAACIgCALIgBAHIAAgCQAAgBAAgBQAAgBAAAAQAAAAAAAAQAAABAAABIgDAHIgGALIgQATIgTAXQgLAPgSALQgRALgOAAQgFAAgFgBg",
      )
    this.shape_34.setTransform(215.2176, 24.6441, 1.1498, 1.1498)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#F48F7D")
      .s()
      .p("AggAFIAigPIAFAGQABACAEAAIARAAQADAAAAADIAAADQgHAHgMAAQgjAAgKgGg")
    this.shape_35.setTransform(228.4173, 176.5951, 1.1495, 1.1495)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#B2CFEB")
      .s()
      .p("AAAANQgqgEgQACIAAgJQADgCADgHQAfgHAxAHQAOAFAQgLQADAIgDAOQgPAFgXAAIgUgBg")
    this.shape_36.setTransform(225.5368, 178.3712, 1.1495, 1.1495)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#2C2655")
      .s()
      .p("AAGAIQgsgEgKABQgDAAgHgFIASgEQAKgBAIACQANADAbgFQAbgEALADQAFAAgDAIQgPAGgYAAIgNAAg")
    this.shape_37.setTransform(225.4897, 179.8282, 1.1496, 1.1496)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#2C355B")
      .s()
      .p(
        "AgBDCIgSh3QgKhCAFgpQACgTAIgfIALgzQAEgfABg1QAChQAQgPQAHAOgBApQAAAigEAXIgGAaQgFARgBAKQgBAOACAcQACAdgBANIgHAkQgEAWAAANIAEAZQADAPgBAJIgCAUQgDANABAIQAAANAGAbQABAMgCAVQgCAXABAKQAAAMAEAZQAFAmgNAjQADgzgHhFg",
      )
    this.shape_38.setTransform(232.815, 134.219, 1.1496, 1.1496)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#2C355B")
      .s()
      .p(
        "AAhFJQgOAAgLgLQgKgKgCgPQgXiUgYjAQgWjBgJhEIAAgFIAAgPIClAFIgBAWQgNBygECaQgFCzALCQQABARgLAMQgKAKgPAAIgDAAg",
      )
    this.shape_39.setTransform(225.5357, 135.1146, 1.1496, 1.1496)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#F48F7D")
      .s()
      .p("AgIAfIgMg+IAlABIAEA9g")
    this.shape_40.setTransform(229.6474, 173.1569, 1.1498, 1.1498)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#F48F7D")
      .s()
      .p("AgkAGIArgRIAEAGQACACAEAAIARAAQADAAAAADIAAAEIgOAFQgLADgGAAQgiAAgIgGg")
    this.shape_41.setTransform(212.7461, 176.4966, 1.1496, 1.1496)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#B2CFEB")
      .s()
      .p("Ag7AJIAAAAQAAgQAWgEQAPgDASAEQApAHAVgKQADAIgEANIgPACQgJACgFgBQgGAAglACIgMABQgSAAgOgFg")
    this.shape_42.setTransform(210.3337, 178.3935, 1.1496, 1.1496)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#2C2655")
      .s()
      .p("AAKAGIgugCIgMgCQgJgCAAgFQAOABAdAAQAdAAAOACIAPgDQAJgCAFACIAAADQAAACgDADQgRAEgTAAIgJgBg")
    this.shape_43.setTransform(210.2161, 180.0589, 1.1498, 1.1498)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#2C355B")
      .s()
      .p(
        "AAADDIgSh3QgKhDAEgoQACgUAIgfIALgzQADgbABg5QAChQAQgPQAIAOgBApQAAAhgEAYIgGAaQgFARgBAKQgBAOACAcQACAdgBANQAAAJgGAbQgFAWABANIADAZQADAPAAAJIgDAUIgCAVQAAANAHAbQABAMgCAVQgCAXABAKQAAAMAEAZQAFAlgNAjQADgygHhEg",
      )
    this.shape_44.setTransform(217.3524, 134.0356, 1.1498, 1.1498)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#2C355B")
      .s()
      .p(
        "AAjFJQgPgBgKgKQgKgLgDgPQgXiUgYi/IggkGIAAgEIAAgQIClAGIAAARIgBAFQgNBxgDCaQgFCzALCQQABASgLALQgKAMgPAAIgCgBg",
      )
    this.shape_45.setTransform(210.0005, 134.9311, 1.1498, 1.1498)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#F48F7D")
      .s()
      .p("AgIAgIgMhAIAlAEIAEA9g")
    this.shape_46.setTransform(214.5016, 172.9234, 1.1499, 1.1499)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#F4F4F4")
      .s()
      .p("Ag9AHQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAYgVANQgRALgcAAQg5AAAAgwg")
    this.shape_47.setTransform(222.7812, 32.2848, 1.1499, 1.1499)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_47},
            {t: this.shape_46},
            {t: this.shape_45},
            {t: this.shape_44},
            {t: this.shape_43},
            {t: this.shape_42},
            {t: this.shape_41},
            {t: this.shape_40},
            {t: this.shape_39},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(90),
    )

    // autrebras
    this.instance_5 = new lib.avantbras_1()
    this.instance_5.setTransform(194.95, 54.75, 1, 1, 0, 0, 0, 13.3, 15.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({regX: 13.4, scaleX: 1.1581, scaleY: 1.0068, rotation: 6.6876, x: 192.9, y: 53.2}, 19)
        .to(
          {
            regX: 13.5,
            regY: 15.9,
            scaleX: 1.0078,
            scaleY: 0.8443,
            rotation: 0,
            skewX: -0.8916,
            skewY: -1.9844,
            x: 194.55,
            y: 54.3,
          },
          14,
        )
        .to(
          {regX: 13.3, regY: 15.8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 194.95, y: 54.75},
          11,
        )
        .to({regX: 13.4, scaleX: 1.1581, scaleY: 1.0068, rotation: 6.6876, x: 192.9, y: 53.2}, 9)
        .to(
          {
            regX: 13.5,
            regY: 15.9,
            scaleX: 1.0078,
            scaleY: 0.8443,
            rotation: 0,
            skewX: -0.8916,
            skewY: -1.9844,
            x: 194.55,
            y: 54.3,
          },
          12,
        )
        .to(
          {regX: 13.3, regY: 15.8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 194.95, y: 54.75},
          14,
        )
        .wait(11),
    )

    // clarinette
    this.instance_6 = new lib.clarinettiste()
    this.instance_6.setTransform(145.7, 91.2, 1, 1, 0, 0, 0, 33.6, 91.2)

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90))

    // Calque_1
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#702C11")
      .s()
      .p("AgJAEQgWABgMgFQAKgFAQAAIAZACIAPACQAJAAAIgCIAEADIgEADIgIACIgIABQgKgDgXABg")
    this.shape_48.setTransform(20.3299, 173.8446, 1.1498, 1.1498)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#702C11")
      .s()
      .p("AAAADQgZgDgNABIADgFIAlABQATABASADIgDADIgLABQgLAAgOgCg")
    this.shape_49.setTransform(127.2594, 172.8825, 1.1498, 1.1498)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#6D72A0")
      .s()
      .p("AgMAKQgCgCAAgHQAAgJAEgDQADgCAGAAQAIACAFAEQAFAEgDAEQgEANgLABQgJAAgCgFg")
    this.shape_50.setTransform(128.9878, 89.1524, 1.1496, 1.1496)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#6D72A0")
      .s()
      .p(
        "AAAgWQAAgBAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAApQAAADgGAAQgKgYAKgXg",
      )
    this.shape_51.setTransform(24.293, 89.4363, 1.1496, 1.1496)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#6D72A0")
      .s()
      .p(
        "AAAgWQAAgBAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABIAAApQAAADgGAAQgKgYAKgXg",
      )
    this.shape_52.setTransform(26.5348, 89.4363, 1.1496, 1.1496)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#6D72A0")
      .s()
      .p("AgBgWQABgDAEACQADABAAADIAAApQAAADgIAAQgKgYAKgXg")
    this.shape_53.setTransform(28.949, 89.4363, 1.1496, 1.1496)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#6D72A0")
      .s()
      .p(
        "AAAgWQAAgBAAAAQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAApQAAADgGAAQgKgYAKgXg",
      )
    this.shape_54.setTransform(31.3632, 89.4363, 1.1496, 1.1496)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#001443")
      .s()
      .p(
        "ACGAtIkIgLQjJgKi1ANQgFAAgGgCQgGgCgCgCQgLgUADgVQAFgZAWgEQC2gODOALQC7AICDACQCsADCTgHQAjAAgKA8QgDAHgNAGQgaAIgjAAIg+gBQg/AEhNAAQg6AAhDgDg",
      )
    this.shape_55.setTransform(73.8806, 89.0996, 1.1496, 1.1496)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#702C11")
      .s()
      .p(
        "ACgAPQh5gDi4gMQhDgBhgACIijAGIAAgMQAagGApAAQA3AAAOgBQAkgEAzAAIBXABIBhAEQA6ACAnAEQBDAFBdABICfgBQBVgFAgAAIACACIACADQgBADgGAHQhgAHhuAAIhkgCg",
      )
    this.shape_56.setTransform(73.6976, 94.109, 1.1496, 1.1496)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#702C11")
      .s()
      .p(
        "AgrgjIgzgnQgFgDgHgHQgGgJgGgDQhKg7hnhJIiyh8QAPAEAWAQQAXASAOAFQDkCeEhD1QCFBtDBB8QATAMALAKIgDAEQkRivjxjVg",
      )
    this.shape_57.setTransform(73.5252, 132.8377, 1.1496, 1.1496)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#702C11")
      .s()
      .p(
        "AnZFkQBPhLB5hbQCNhmBFg0QBig6B5hYIDWihQAFgDAGgIQAHgIAFgDQAagUAwgqIAHAAQACAGgFAFQgCACgIADIiQB2QhRBChDAuQgYAPgqAfQgqAegYAPQgRAIgTAMIgfAYQgKAGgTAKQhrBLg6ArQhWA/hGA+IghAXQgTANgMAMIgLAOQgHAJgIAAg",
      )
    this.shape_58.setTransform(73.558, 133.2113, 1.1496, 1.1496)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#FBE2DC")
      .s()
      .p(
        "AhRAXQj9gNiPAOQgJgCgDgDQgBgCAAgGIgBgPQAAgKAEgGQApgKA9AAIBmAAQBmgECGAGIDrAOQAzACBkgFQBlgFAxACQAHAOgHAbQgmAIgxACIhYAAQghABgwAAQh0AAjGgJg",
      )
    this.shape_59.setTransform(74.0282, 84.6972, 1.1496, 1.1496)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#91C5DE")
      .s()
      .p(
        "AgqDSQAbg+ADgJIAKgdIAJgdIAQgfQAKgTABgOIAAgRIgBgSQgBgJACgXQACgUgCgMQgBgLgHgSQgHgTgBgKIgBgVIgBgVQgBgMgFgUIgHgfQgFgtATANQADACAJgFQAIgEABAEQAKAgAFA6IAHBdQAEAfAAAXQgCBPgsBiQgOAegZAtQgeAxgMAZQADghASgog",
      )
    this.shape_60.setTransform(49.4239, 131.2309, 1.1499, 1.1499)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#91C5DE")
      .s()
      .p(
        "AhZFXIgPgDQgQgBgHgOQgHgPAGgSIBUjGQATgxgBgzIgHj9QgCggAVgZQATgYAggDQANgBAOAEQAbADAUAUQATAUACAdIgBARIgmEOQgHAvgXArIhzDYQgGAKgKAFQgHAEgHAAIgHgBg",
      )
    this.shape_61.setTransform(57.1856, 129.2132, 1.1499, 1.1499)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#2C2655")
      .s()
      .p(
        "AgCAGQgngWgSgHQgDgEAAgDIAAgDQAWAIAoAXQAoAVAXAJIgDAEQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgZgHgigVg",
      )
    this.shape_62.setTransform(47.8383, 177.2961, 1.1498, 1.1498)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#FFD878")
      .s()
      .p(
        "AAsApQg4gkg1gVQADgDAHgQQAFgMAHACQANAAAaANQAZAQAtAmIAAAKQgEAFgDAIQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgHgFg",
      )
    this.shape_63.setTransform(48.212, 175.3672, 1.1498, 1.1498)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#F48F7D")
      .s()
      .p("AgHgjIAlAGIgTA8IgoAFg")
    this.shape_64.setTransform(45.4568, 168.6022, 1.1499, 1.1499)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#91C5DE")
      .s()
      .p(
        "AAsDKIAEhNIgBgeQgBgTABgMIAFgjQACgVgDgNIgGgRIgHgQIgKgfQgFgTgFgLQgGgJgMgPQgMgQgEgJIgJgTIgIgUQgFgLgLgRIgRgbQgIgQgBgGQgEgQAPADQAIACAKAOQAwBCAjBJQAMAYAJAaQAaBKgJBsQgDAhgJAzQgLA4gDAcQgIggADgsg",
      )
    this.shape_65.setTransform(71.1851, 135.4862, 1.1499, 1.1499)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#91C5DE")
      .s()
      .p(
        "AACFXQgKgLgBgUIALjWQACg1gSgvIhbjsQgNgeALgeQALgeAdgNQAOgGANAAQAagHAYAMQAZANALAaIAGARIA3ELQAKAvgIAvIglDzQgBAMgIAIQgIAIgLACIgPACIgIABQgLAAgIgIg",
      )
    this.shape_66.setTransform(77.8011, 130.4865, 1.1499, 1.1499)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#2C2655")
      .s()
      .p(
        "AACAFQg0gBgQABQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgEgEIAAgDQASgBA2ADQAtACAcgEQAAADgEACQgUAFgeAAIgRgBg",
      )
    this.shape_67.setTransform(87.2758, 177.733, 1.1498, 1.1498)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#FFD878")
      .s()
      .p(
        "AAFAWIgmgEQgXgCgQABQABgCgBgPQgBgKAIgEIASgBQAMAAAGgFQAHgEAPAHIAcAJQAHADASABQAPABAJAEQADADAAAKQAAAIgGAAIgKgBIgpACIgLgBg",
      )
    this.shape_68.setTransform(87.2453, 175.1306, 1.1498, 1.1498)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#F48F7D")
      .s()
      .p("AgTgaIAkgHIADA+IgiAFg")
    this.shape_69.setTransform(81.6207, 170.4133, 1.1499, 1.1499)

    this.instance_7 = new lib.Path_1()
    this.instance_7.setTransform(142.2, 177.3, 1.15, 1.15, 0, 0, 0, 123.7, 8.3)
    this.instance_7.alpha = 0.1992

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_7},
            {t: this.shape_69},
            {t: this.shape_68},
            {t: this.shape_67},
            {t: this.shape_66},
            {t: this.shape_65},
            {t: this.shape_64},
            {t: this.shape_63},
            {t: this.shape_62},
            {t: this.shape_61},
            {t: this.shape_60},
            {t: this.shape_59},
            {t: this.shape_58},
            {t: this.shape_57},
            {t: this.shape_56},
            {t: this.shape_55},
            {t: this.shape_54},
            {t: this.shape_53},
            {t: this.shape_52},
            {t: this.shape_51},
            {t: this.shape_50},
            {t: this.shape_49},
            {t: this.shape_48},
          ],
        })
        .wait(90),
    )

    // pianiste
    this.instance_8 = new lib.pianiste()
    this.instance_8.setTransform(74.7, 50.7, 1, 1, 0, 0, 0, 34.4, 50.4)

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 284.4, 186.8)

  ;(lib.jeucarte = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.instance = new lib.couplebras()
    this.instance.setTransform(42.7, 65.5, 1, 1, 0, 0, 0, 0, 18.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(53)
        .to({rotation: -37.4641}, 22)
        .wait(13)
        .to({rotation: 29.2756, x: 40.05, y: 66.55}, 33)
        .wait(50)
        .to({rotation: 29.2756}, 0)
        .to({rotation: 0, x: 42.7, y: 65.5}, 28)
        .wait(41),
    )

    // main_noire
    this.instance_1 = new lib.mainnoire()
    this.instance_1.setTransform(191.25, 75.3, 1, 1, 0, 0, 0, 14.7, 40.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(19)
        .to({regY: 40.5, rotation: -74.9987, x: 190.7, y: 65.15}, 23)
        .wait(83)
        .to({regY: 40.3, rotation: 0, x: 191.25, y: 75.3}, 39)
        .wait(76),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#BE0000")
      .s()
      .p("AgJARIhOgEIAFgaICIgDQAGADAUADQAPAFgMALQgLALhGAAIgLAAg")
    this.shape.setTransform(68.7754, 127.9704, 1.25, 1.25)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "Ag7AxIgEgJQgCgFgCgCIABAFQgIgXACgJQAEgRAGgFIAHgLQgEACgEAEQALgSAMgJQAEgEAKgCQALgDAEgCIgBgBQABABAMgCIARgBQAFABAGAEQAGAEAAAFQAIAAAEACQAIADAIAOIgEAAIADAEQAMAOgBAPQACAPgGAKIgCALIgCgGQgCgGgKgPQADAKAEAGQgSgSgFgNIgCgBQgMAOgUAHIALgMQgGABgJAHIgRAKIARgPIgPAIIgOAIQABgEAGgIIgLAJQgHAGgFADIAFgLIgGAHIADASQABAKgFAFIgBAAIABADg",
      )
    this.shape_1.setTransform(118.4007, 7.8998, 1.25, 1.25)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#C9683E")
      .s()
      .p(
        "AgDAVIgBgDIgBgFIgDggIACgCQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIACAeIABAGIABABIAAABIAAAAIABABIACgBQAEgBACAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgCABIgGABIgBAAIgDgBg",
      )
    this.shape_2.setTransform(119.4962, 16.6139, 1.2496, 1.2496)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#D44237")
      .s()
      .p("AgLAGIgGgFQAGABAEAAIAIgCQAGAAALgJQgDAPgLADIgEABQgFAAgGgEg")
    this.shape_3.setTransform(120.0659, 20.8434, 1.2497, 1.2497)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#4F3B3A")
      .s()
      .p(
        "AgDABQgCgDAFgBQAAAAAAAAQABAAABAAQAAABABAAQAAABAAAAQACACgDACIgCABQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg",
      )
    this.shape_4.setTransform(122.2212, 14.0844, 1.2496, 1.2496)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#4F3B3A")
      .s()
      .p("AgCADQgCgDACgCQACgDADADQADACgDADIgDABIgCgBg")
    this.shape_5.setTransform(116.1378, 14.8934, 1.2496, 1.2496)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#EFEFEF")
      .s()
      .p("AgQAGQAFgFAKgBQARgIABAEQAAAEgQADIgIACIgHACIgCgBg")
    this.shape_6.setTransform(115.6536, 13.4023, 1.2496, 1.2496)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#EFEFEF")
      .s()
      .p("AgRABQAAgCAJgBIAKABQALAAAFACQgCACgGAAIgKAAIgIAAQgIAAgBgCg")
    this.shape_7.setTransform(122.5249, 12.2433, 1.2496, 1.2496)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgHBTIgQgPQgcgegIg7QgBgHACgPQADgOAMgNQALgLAQgFQAQgGAOACQAlAGAIA9QAHA3gYAkQgPAWgRABQgIAAgJgIg",
      )
    this.shape_8.setTransform(119.2057, 14.2776, 1.2499, 1.2499)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#E76325")
      .s()
      .p("AADAgQgGgBgKgGQgOgNgDgBIgGgUIgBAAIBEgVQAFgCAAACIgBAIIACAiIABADQgIAKgKADQgIAEgHAAIgCAAg")
    this.shape_9.setTransform(120.3783, 22.5061, 1.2497, 1.2497)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgfArQgGgCACgVQABgKgBgJQgCgQgFgKIgBAAIBEgVIAFgBIgBAHIACAlIABADIAJAUQAGALgFADQgSALgUADIgHABQgOAAgOgGg",
      )
    this.shape_10.setTransform(121.1297, 24.5455, 1.2497, 1.2497)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#E76325")
      .s()
      .p("AAAATQgCgBgCgFIgCgGQAAgFACgJQADgMAEABQADAAABAEIAAAFQAAAOgCAGQgCAIgDAAIAAAAg")
    this.shape_11.setTransform(126.7779, 15.372, 1.2497, 1.2497)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#E76325")
      .s()
      .p("AAAANQgEgGgEgNQgDgIAEgCQAEgCAGAKIAGANQADAJgGAEIgBAAQgCAAgDgFg")
    this.shape_12.setTransform(112.9234, 17.5552, 1.2497, 1.2497)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p("AgOgcQAOgEAJAaQAEAMABAOIgFAJQgFgfgSgag")
    this.shape_13.setTransform(84.7479, 10.5207, 1.25, 1.25)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p("AgyAOIAegyIA0gCQAXAPgFAIQgbAEgSgLQgMgHgTAaQgTAYgBASg")
    this.shape_14.setTransform(76.6883, 8.906, 1.25, 1.25)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AANAFIgMgDQgDAAgIACQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAHgDAHABQAKABAEAFQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIAAAAg",
      )
    this.shape_15.setTransform(75.2616, 11.5249, 1.25, 1.25)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AANAFIgMgDQgFAAgGACQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAHgDAIABQAJABAEAFQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIAAAAg",
      )
    this.shape_16.setTransform(81.3864, 11.8999, 1.25, 1.25)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#3B2645")
      .s()
      .p(
        "AAAAEQgCAAgBgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIABgBIACABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAFgDAAIgBgBg",
      )
    this.shape_17.setTransform(75.6572, 13.5809, 1.25, 1.25)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#3B2645")
      .s()
      .p(
        "AAAAEQgCAAgBgEQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgBIACABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAAAQAAAFgDAAIgBgBg",
      )
    this.shape_18.setTransform(81.5918, 13.6968, 1.25, 1.25)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p("AAAAHQgHgBgGgGIgEgGIAjACQgHALgLAAIAAAAg")
    this.shape_19.setTransform(78.0918, 20.8757, 1.25, 1.25)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#E0855C")
      .s()
      .p(
        "AgFAYIgBgCIABgBIAFABQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgDgEgQQgCgOgBgLIABAAQAEAOADAfQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAg",
      )
    this.shape_20.setTransform(78.4981, 15.3278, 1.25, 1.25)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#F5A784")
      .s()
      .p("AgDBRQgjgCgPgpQgLgfAJgiQAJglAbgLQANgGAKACIAYAGQAZAOAGAlQAFAjgOAeQgSAmggAAIgDAAg")
    this.shape_21.setTransform(78.2794, 15.298, 1.25, 1.25)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#F5A784")
      .s()
      .p("AgLAVIgCgLQAAgMADgEIAFgJQAFgIAIAGQAKAIgIAPQgIAPgLAAIgCAAg")
    this.shape_22.setTransform(86.4413, 16.3679, 1.25, 1.25)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#F5A784")
      .s()
      .p("AgJAEQgHgQALgGQAHgGAGAJQACAEABAFQAFAHgGAUQgNAAgGgRg")
    this.shape_23.setTransform(70.0572, 15.8333, 1.25, 1.25)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#E0855C")
      .s()
      .p("AgiAFIAEgWIA/ADIACAgIgLAAQgfAAgbgNg")
    this.shape_24.setTransform(77.8731, 24.2399, 1.25, 1.25)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#F5A784")
      .s()
      .p("AAAAfQgPgBgNgHIgJgHIAJgvIA/ADIADAwQgDADgGADQgKAGgOAAIgFgBg")
    this.shape_25.setTransform(77.6544, 25.8833, 1.25, 1.25)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AA2AwQgDgJgYgWIgZgSIg7A0IgKgRQgGheBNAHQAbACALAMQAGAGABAFQAOAEAEAPQAFAUgHAdQgFAOgDAAQgCAAgBgGg",
      )
    this.shape_26.setTransform(78.4182, 8.9755, 1.25, 1.25)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#F39764")
      .s()
      .p(
        "AAHAwQgEgFgDgLQgDgNgDgEQgGgIgHgCIgJgCIgEgBQgBgBAAAAQAAgBAAAAQgBAAABAAQAAgBAAAAQgJgCgCgBIgBgDIACgCIAIgBIAJABIgNgFQgBgBgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgCIABgCIADAAIAMAAIgLgGIgCgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIADAAQAVABASAEIgOgKQgFgDABgEQAAgFAGACIATAKQAGAEAEADIAHAJQAJAPAMAgIABAEQgBACgDABIgKAEIgXALIgBABg",
      )
    this.shape_27.setTransform(146.3089, 30.2317, 1.25, 1.25)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#F39764")
      .s()
      .p(
        "AgYAmQgMABgKgCIgCAAIgBgDQAAgHACgJIAGgSQAJgWAVgKIAOgFIADACIABABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgFADIgFAFQAAAEAGgEQAKgGAJgBQAJgBAKADQAFACADADQADADAAAGQAAAFgDAFQgDAEgEABIgLACQgOAEgHAEIgGAGQgCADgCAHIgBAJIgBACIgCAAIgSAAg",
      )
    this.shape_28.setTransform(139.2154, 30.0305, 1.25, 1.25)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#416897")
      .s()
      .p("AglgrIA5gFIASBfIg3ACg")
    this.shape_29.setTransform(142.434, 25.3431, 1.25, 1.25)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#EDEDED")
      .s()
      .p(
        "AAYBCIgCgBIgDgFIgCgCIAAgCQADACAFgBQAEgCACgDQAEgEABgFQACgFgCgEQgBgFgFgBQgEAAgFADQgFgBgDgEQgCgFABgEQAIgMACgLQAFgZgbgGQgEgBgOADIgaAFQgGABgGgBQgIgCACgGQAEgNAfgJQAcgIARAFQAXAGANASQAHALACAKQACAGgCAJQgDAZgEANQgDAJgOALQgMALgDAAIAAAAg",
      )
    this.shape_30.setTransform(152.8552, 9.1499, 1.25, 1.25)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#D44237")
      .s()
      .p(
        "AAAAFQgHgBgEgCIgBgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAGABAFgBQAHAAACgEIACAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAACgDADQgFADgFAAg",
      )
    this.shape_31.setTransform(147.6609, 19.7062, 1.2499, 1.2499)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#8C3C31")
      .s()
      .p(
        "AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg",
      )
    this.shape_32.setTransform(145.0451, 12.9184, 1.25, 1.25)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#8C3C31")
      .s()
      .p(
        "AgCAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAAAgDg",
      )
    this.shape_33.setTransform(149.5901, 13.142, 1.25, 1.25)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#EDEDED")
      .s()
      .p(
        "AAHAFQgHgFgIAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAIABAIAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABg",
      )
    this.shape_34.setTransform(149.9252, 11.78, 1.2499, 1.2499)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#EDEDED")
      .s()
      .p(
        "AgHACQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAMgCIAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgGAAgEACQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAg",
      )
    this.shape_35.setTransform(145.307, 11.3738, 1.2499, 1.2499)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#F08958")
      .s()
      .p("AgHATIABgEQACgFACgLIACgRIABgBIABABQgCAUgDAMIgBADQABABALAAIAAABIgBAAIAAAAIgJABQgFAAAAgBg")
    this.shape_36.setTransform(146.786, 15.1635, 1.2499, 1.2499)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#F39764")
      .s()
      .p(
        "AgLBfQgFgBgCgFQgCgEgBgKIgBgEIgCAAIgJAAIgDgBQgFgBgIgRQgCgFgBgEQgDgTgBgZQAAgGACgKQACgIgCgJQgFgYARgYQAFgGADgCIAIgCQAWgEAQADIAUAFQAPAGADAEQACACgBAPIAAASQAAACgGAGQgFAFACACIAIAEIAHAWQgCAMgJAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAACQAAAEACAPIAEAUQABALgCADQgDAJgMAEQgRAIgUADIgDABIgDgBg",
      )
    this.shape_37.setTransform(150.5276, 14.9345, 1.25, 1.25)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgnAaQgFgGgBgMQgBgNADgHQAFgOARgEQASgEAbAFQAQAEAFAIQAEAHgGAKQgFAJgIAGQgMAKgTAFQgLADgJAAQgLgBgHgGg",
      )
    this.shape_38.setTransform(152.7972, 24.4353, 1.25, 1.25)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#FFC38D")
      .s()
      .p(
        "AAmCpQgQgKgJgTQglgKgigBQgXAHgQAAQgWABgIgIIgHgLQgKgbgHgdIgIgmIgFguIgEgsQAAgEAEAAQAVgDAiADIAFAAIAHAxIAJAxIgDhwQgBgWACgNQACgTAHgOQAHgNARgEQA0gJAlACQAjAAA0AXQATAJAIAHQAVATACAjQABAUgJAoIgXBlQgEATgNAeQgSAqgbAHIgLABQgOAAgNgIg",
      )
    this.shape_39.setTransform(152.5338, 43.6491, 1.25, 1.25)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#0F376A")
      .s()
      .p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg")
    this.shape_40.setTransform(120.2783, 39.1865, 1.25, 1.25)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#0F376A")
      .s()
      .p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg")
    this.shape_41.setTransform(120.2783, 36.1241, 1.25, 1.25)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#0F376A")
      .s()
      .p(
        "AgQAgIgCgBQgQgNgIgQQgEgGAAgGQAAgKAHgEIABAAIAAACQgGADAAAJQAAAGAEAFQAIARAPAMIABAAIAIgHQAIgKAEAAIAEACIAOAOIALgKQAHgKAEgNQADgKgFgHQgDgFgHgDIAAgCQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAIAEACAFQAGAIgDAKQgEANgIALIAAABQgJALgDgBIgBAAQgEgFgGgFIgFgFQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgEAAgHAJIgHAIIgBAAg",
      )
    this.shape_42.setTransform(121.4695, 29.8274, 1.25, 1.25)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#F2844F")
      .s()
      .p(
        "AgcAlQgCgBgCgHIgBgJIgFgQQgBgEAAgEQABgGAKgIQARgLANgGQAFgDAAADQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgFAGQAHgEAIgCQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAgBABQAAAAAAABQgBAAAAABIgIAHQAMgGAHABIACABQAAAAAAAAQABAAAAAAQAAABAAAAQgBABAAAAIgBACIgLAIQAKgEAFAAQAGAAgBAEIgCACIgSAKIgIAGQgBACABAHQABAGgCACQgCACgGABIgHACQgMAEgIAFIgCABIgCgBg",
      )
    this.shape_43.setTransform(103.093, 38.1718, 1.25, 1.25)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#153B68")
      .s()
      .p("AgxgRIAwgfIA0BFIgyAcg")
    this.shape_44.setTransform(104.4974, 34.3429, 1.25, 1.25)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#3E6E9E")
      .s()
      .p("AgXAqIgJhUIA5gBIAIBXg")
    this.shape_45.setTransform(105.7474, 32.593, 1.25, 1.25)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#B7D5ED")
      .s()
      .p("AgqAYIAjhNIAyAcIgmBPg")
    this.shape_46.setTransform(107.9661, 32.2805, 1.25, 1.25)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgQAUIABgIQAJACAEgBQAEgBAFgFQADgGgCgEQgBgEgEgCQgGgEgIABIgCgHQALgDAJAGQAGAEACAFQAFAKgHAIQgFAHgIADIgGAAg",
      )
    this.shape_47.setTransform(130.7569, 59.9622, 1.2499, 1.2499)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgYApQgEAAgEgDQgDgDgBgEIgIhBQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIBOAAQAGAAAAAGIgIBBQgBAEgDADQgDADgFAAg",
      )
    this.shape_48.setTransform(123.9801, 60.0871, 1.2499, 1.2499)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#416897")
      .s()
      .p(
        "Ah6CaQgRAAgJgJIgGgJQgIgHgIg/IgGg/IAAgKIABgEQAAAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQgBgEAFgGQAIgJAOgMIAKgIQAEgDADgGIAQgbQAEgGAOgIQAdgTAagGQAAgLALgIQAIgFAOgDQALgCAMACQAPABAGADQAMAFABAMQAtgBARAEQATAGARAkQAOAdAHAgIAGAeQAEAVgEALQgDAGgKAMIgnA8IiqgGIgJAAQgFABgBAFIgBAOQAAAFgCAEQgDAFgHAFQgHAFgJACIgKABIgVgBg",
      )
    this.shape_49.setTransform(120.9116, 44.577, 1.25, 1.25)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#FFBE71")
      .s()
      .p(
        "AAPAIQgMAAgMgFIgFgCQgCgCABgDQABgDAFAAIABABIgBABQgEABAAABQgBABAAAAQAAAAAAABQAAAAABABQAAAAABAAIAEACQAMAEALAAIABAAIABABIgBABg",
      )
    this.shape_50.setTransform(120.7431, 56.1549, 1.25, 1.25)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#FFBE71")
      .s()
      .p(
        "AgGABIgBgBIABAAIANAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgIAAg",
      )
    this.shape_51.setTransform(124.0532, 57.0361, 1.25, 1.25)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#FFBE71")
      .s()
      .p(
        "AgPAHIABgBIAOgBQAHgBAEgDQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEgBIAAgBIABgBQAAAAABABQAAAAABAAQABAAAAAAQABABAAAAQAEABgBAEQAAABgEACQgEACgIACIgOABg",
      )
    this.shape_52.setTransform(127.292, 56.1861, 1.25, 1.25)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#8C3C31")
      .s()
      .p(
        "AgIAHIgFAAIgJgCIgQgEQgBgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAFAAAJgCQAKgDAFAAQAGABALAFQAEAAANgCIAKAAIAFABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIgBABQgFADgGACQgGABgNAAg",
      )
    this.shape_53.setTransform(124.0009, 56.1817, 1.25, 1.25)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#D36666")
      .s()
      .p(
        "AgJAGIgQgBIgLgEIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABgBIAEgBIAJAAQALACAFAAIAHgDIAIgCQAEgBAJADQAJACAEAAIgBACIgDABIgUAEg",
      )
    this.shape_54.setTransform(83.7753, 63.1495, 1.25, 1.25)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#153B68")
      .s()
      .p(
        "AABATQgIgCgEgHQgGgIAEgIQACgFAGgEQAIgFAJACIgCAHQgGgBgGAEQgDACgCADQgBAEADAFQADAEAEACQAGABAGgCIACAHIgKABg",
      )
    this.shape_55.setTransform(77.8289, 65.8945, 1.2499, 1.2499)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#153B68")
      .s()
      .p("AgXAeQgJAAgBgHIgHgwQAAgEAFAAIBHAAQAGAAgBAEIgHAwQgCAHgJAAg")
    this.shape_56.setTransform(83.781, 65.649, 1.2499, 1.2499)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#AA493F")
      .s()
      .p(
        "AgJAGQgLABgFgCQgGgBgFgDIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABgBIAEgBIAJAAQAKACAGgBIAPgEQAEAAAJACQAJADAEgBIgBABIgPAFIgIABg",
      )
    this.shape_57.setTransform(139.0864, 62.8735, 1.25, 1.25)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AABATQgHgCgFgHQgGgIAEgIQADgFAFgEQAIgFAJACIgBAHQgHgBgFAEQgEACgBADQgCAEADAFQADAEAFACQAFABAGgCIACAHIgJABg",
      )
    this.shape_58.setTransform(132.9166, 66.332, 1.2499, 1.2499)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#F7E4CA")
      .s()
      .p("AgXAlQgEABgDgDQgDgCAAgFIgHg7QgBgFAGAAIBHAAQAGgBgBAHIgIA6QAAAFgDACQgDADgEgBg")
    this.shape_59.setTransform(139.0785, 66.4302, 1.2499, 1.2499)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#FFCACD")
      .s()
      .p(
        "AgpBkQgKgCgHgHQgIgHgBgJQgBgMAJgRIARgaQASgdAGgQIANgdIgCAGIACgGIADgHIAHgKIAIgJQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAADIgDAHIgCAFIABAAIAIgIIARgRIAIgJIACgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIgBADQgDALgRATIACAAIARgRIAJgKQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAADgCAEIgFAIIgFAGIACAAQAGgFAEgGIAEgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgDAGgDAEIgDAFIgDADIADgBIACgCQAHgFABADQABACgGAGIgfAhQgFAGgFAQIgeBIIgHAQQgEAJgHADQgEABgFAAIgGAAg",
      )
    this.shape_60.setTransform(29.4264, 59.4712, 1.25, 1.25)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#8C3C31")
      .s()
      .p("AgCAIIgDgEQgDgEABgEIgCgBIgBgCIABAAIAAABQAHAFAMgEIABABIAAABQgBAEgFAFIgCACIgCABg")
    this.shape_61.setTransform(25.5619, 35.6866, 1.25, 1.25)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#8C3C31")
      .s()
      .p("AgBAEIgBgEQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAEAAgCAHIgCACg")
    this.shape_62.setTransform(24.8816, 29.56, 1.25, 1.25)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AgIAEQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAHgGAJABQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgIgBgFAFIgBABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg",
      )
    this.shape_63.setTransform(24.6088, 28.2102, 1.25, 1.25)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#FFCACD")
      .s()
      .p(
        "AAIBgQgEAAgQgFQgOgEgLgHQgMgGgIgJQgFgEADgLIAEgPIAQgvQgJgDgDgJQgEgJAFgHQADgGAIAAIAGABIAGAEQAIgBACgCQADgBAGgFQAHgFAGgQQAIgQgBgIQAIAAAGAIQADAEAHAYQAIAUAPAQIACAFIgBACQgGAJgIAFQAAANgCASQgCALgHADIgIABIgJgBQgGAAgCAEIgDAKIgDAPQAAACAEAIIAEAKQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgCABIgBAAg",
      )
    this.shape_64.setTransform(21.8812, 33.6971, 1.25, 1.25)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#153B68")
      .s()
      .p("AgygRIAxgfIA0BFIgyAcg")
    this.shape_65.setTransform(34.7804, 47.4676, 1.25, 1.25)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#B7D5ED")
      .s()
      .p("AgkglIA5gHIAQBVIg4AEg")
    this.shape_66.setTransform(36.1554, 46.4051, 1.25, 1.25)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#D26079")
      .s()
      .p(
        "AhQDJQgIgEgLgCIgSgEQgVgDgCgNIgGhIQgDgqgMgZQgagzgIg4QgEgfAEgVQAFgcASgRQAKgKAUgJQAQgJAVgHQADgDAIAAQAxgCArAaQAcASApArIAmAlQAXAXAMAQQAQASAKABQBAA0hAA1QgJAEgFABQgKABgHgGIgSAUIg3A1QghAegdAKIgUAIQgUAGgKABIgFAAQgPAAgKgGg",
      )
    this.shape_67.setTransform(26.0894, 57.4772)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AhACJQgRgCgIgJQgKgKgBgRQgBgRAIgNQAHgJADgGQAEgHgDgHIgIgMQgGgHABgLQACgKAHgIQAEgEgBgMQgBgJAHgBIANgDQALgHABgSQgCgTABgJQADgXATgMQAkgWBAASQAPAEAGAEQAFAEAEASQADAQgBAJQAAALgHAMIgQATQgjAkgIAlQgDAMgCAaQgCAWgJAOQgEAHgNAEIgUAGQgPAGgRAAIgOgBg",
      )
    this.shape_68.setTransform(15.0284, 34.9604, 1.25, 1.25)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#F5A784")
      .s()
      .p(
        "AhxBUQgVgEgJgXIgFgWQgGgjABgtIACgnQAIAJAoAAIAGBbQCYgQAKgHQAGgFADgHIAGgLQAEgGAKgCIASgFIAHgBIADAAQAEABgIAIIgIAEQAPgFAUgBQAFAAgBADIgBABQgFAEgHACIALgCQAGAAAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgQAIQAHgBAHAAQAFgBAAADQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgFAEgIACIAIAAIACACQABABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgiAJQgcAIgKAFQgQAHg1AVQg3AWgQAEIgcAHIgOACIgGgBg",
      )
    this.shape_69.setTransform(75.458, 56.0025, 1.25, 1.25)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#B7D5ED")
      .s()
      .p("AgYglIA4AAIgIBIIg4ADg")
    this.shape_70.setTransform(94.3021, 48.8696, 1.2499, 1.2499)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#F5A784")
      .s()
      .p("AgMAuQgCgDAAgGIgBgKIgFhCIAIADIAMgBQALgCAGgFIABAKIACA1IABANQAAAMgCABIAAAAIgaABg")
    this.shape_71.setTransform(96.7539, 52.5612, 1.25, 1.25)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#416897")
      .s()
      .p(
        "AgKAbQgTgBgJgIQgKgJACgLQACgMAKgHQAEgCADAAIAIAAQAVgGAVAFQAIABAIAFQAHAGABAIQACAIgKAJQgPAOgbAAIgHAAg",
      )
    this.shape_72.setTransform(77.3731, 29.355, 1.25, 1.25)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#153B68")
      .s()
      .p(
        "Ah1CGQgGgBgCgEQgDgDgBgIQgCgoAKg0QgRADgSgGQgRgHgMgNQgDgDgBgEIACgHIAUgwQAGgRAIgJQAJgLAQgHQAKgFAVgGQAsgMAlgGQA5gJA5ARQAPAFAIAGQANAIAQAaQAFAIAJAbQAIAVAJAKQAIAJAAAMQABAMgGANIgMAWQgIANgCAJIgEAXQgDANgKAFQgDACgHAAIgLAAIgZABIgQACQgLABgDgGQgBgCgHgDIgJgFQgdgDgnAKQgtANgXAFQgMADgJAAIgMgCg",
      )
    this.shape_73.setTransform(77.1255, 43.2542, 1.25, 1.25)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#416897")
      .s()
      .p("AgHADIAAgBQAHgBAHgEIABABIAAABQgHADgHACg")
    this.shape_74.setTransform(113.966, 111.5285, 1.25, 1.25)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#416897")
      .s()
      .p("AAVAgQgMAAgQgIQgMgGgDgDIAAgBIAIgsIABgBIABABIgIAsIAQAJQAOAIALAAIACAAIABAAIgBABg")
    this.shape_75.setTransform(125.1844, 106.2162, 1.25, 1.25)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAKAGQgIgHgNABQAAAAgBAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAOgDAMAKQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAABIgCABg",
      )
    this.shape_76.setTransform(106.129, 123.165, 1.2499, 1.2499)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAKAHQgJgLgLAEQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIABgCIABgBQAPgFALANQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgCABg",
      )
    this.shape_77.setTransform(107.0805, 121.2984, 1.2499, 1.2499)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAKAGQgJgKgLAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAHgCAHACQAHACAFAFQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgCABg",
      )
    this.shape_78.setTransform(107.9008, 119.3063, 1.2499, 1.2499)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#5E341D")
      .s()
      .p(
        "AgpAzQgQgIgBgTQgBgHADgIQACgJAFgDQACgBAFAAQANACAQAIIALAIQAGAFAGgBQAHgCAJgMIALgTIAWgoQAAAPgHAKIgSAeQgMAVgGAIQgMAQgNAGQgIAFgIAAQgIAAgIgFg",
      )
    this.shape_79.setTransform(107.6484, 126.0125, 1.25, 1.25)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#5E341D")
      .s()
      .p(
        "AgXBFQgPgFgIgJQgLgLACgPQABgFAFgKQAKgRARgVIAMgOQAGgIgCgEIgDgIQgDgEADgEQACgCACgBQAGgCAPABIAKACQAFABADAFIAEANQABAHADACQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIAEgEQAGAUgLARIgiA7IgLAMQgJAIgKAAQgEAAgEgCg",
      )
    this.shape_80.setTransform(107.9631, 123.1363, 1.25, 1.25)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgOAFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAMgJAOAEQABAAAAABQABAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBgBQgLgCgKAHIgBABIgDgBg",
      )
    this.shape_81.setTransform(129.9924, 120.4466, 1.2499, 1.2499)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgNAGQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAMgMAPAGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgMgEgJAKIgCABg",
      )
    this.shape_82.setTransform(129.1599, 118.5112, 1.2499, 1.2499)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgNAGQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAMgMAPAHQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBgBAAAAQgGgCgGABQgFABgEAEIgCABg",
      )
    this.shape_83.setTransform(128.535, 116.442, 1.2499, 1.2499)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#5E341D")
      .s()
      .p(
        "AAEA2QgMgIgLgQQgFgJgKgVIgQghQgGgLABgOIATApIAKAUQAHANAHACQAGACAHgEIALgHQASgJAMAAQAFAAACACQAEAEACAKQABAIgBAHQgCASgRAHQgGADgHAAQgJAAgKgFg",
      )
    this.shape_84.setTransform(128.4418, 123.0576, 1.25, 1.25)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#5E341D")
      .s()
      .p(
        "AgIA+IgKgNIgeg8QgJgSAIgUQACACABADQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABgBQADgCACgHQACgKADgDQADgDAFgCIALgBQANAAAHADIAEADQACADgCAFIgFAHQgBADABAEIAEAGIAKAPQAQAWAIASQAFAIAAAIQADAbglAKIgHABQgKAAgKgKg",
      )
    this.shape_85.setTransform(128.2039, 120.3389, 1.25, 1.25)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#CC5C50")
      .s()
      .p("AhADrQAMhaAiiRQArixAKg5IAeAAQgKAogPBQQgPBQgKAnQgPAngOBQQgPBLgPAkg")
    this.shape_86.setTransform(53.4316, 102.0513, 1.2499, 1.2499)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#153B68")
      .s()
      .p("AAMAWIg9gQQArgqA4AXQgGAjgdAAIgDAAg")
    this.shape_87.setTransform(101.5389, 68.2082, 1.2497, 1.2497)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#B7D5ED")
      .s()
      .p("AgEAQQgUgFgKgFQAAgUANgHQASgMAmAUQAAAFgFAOQgFAPAAAFQgKgFgTgFg")
    this.shape_88.setTransform(104.6632, 69.3778, 1.2497, 1.2497)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#3E6E9E")
      .s()
      .p("AgmALQAAgFAFgJQAFgKAAgFQA+gHAEAQQADAIgKAWQgUgKgxAAg")
    this.shape_89.setTransform(112.6614, 68.8015, 1.2497, 1.2497)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#153B68")
      .s()
      .p("AgfARIAAgdQA8gSADASQAAAFgEALQgDALADACIgdAEIgJABQgMAAgJgFg")
    this.shape_90.setTransform(118.0386, 70.4993, 1.2497, 1.2497)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#E8807F")
      .s()
      .p(
        "AhKBEQh6gIitgaIhFAAQgqgEgTgaQAmglBLgPIB/gRQCNgNC8ANIFKAeQAPAFAnAIQAhAJANARQgzAmhVALQhjAGgtAFQhRAIhWAAQg+AAhBgEg",
      )
    this.shape_91.setTransform(109.0372, 65.9014, 1.2497, 1.2497)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#CC5C50")
      .s()
      .p(
        "Ah3BMQjOgKiugxIAAgdQAtggBDgNIB2gPQCZgNC1APQBhAHDuAfQAzAAAHACQAjAGAHAfQgoAohIANQgrAHhVAAQiQAMh7AAQg6AAg2gDg",
      )
    this.shape_92.setTransform(109.0372, 66.7604, 1.2497, 1.2497)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#09213A")
      .s()
      .p(
        "AhsCbIgSgIQgMgZgOhrIgOh9QgCgTAHgKQAEgEAFgBIAHgKIE4gBIhYEiQgfAHgXgKIgSgLIAvj0IhvACQADALgHACIgIAAQAKA9AIDCQgYAJgTAAIgOgBg",
      )
    this.shape_93.setTransform(121.3145, 92.8557, 1.25, 1.25)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#F2844F")
      .s()
      .p("AgWASIgKg/IA9gBIAEBAIgHAdg")
    this.shape_94.setTransform(110.4973, 115.8097, 1.25, 1.25)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#F2844F")
      .s()
      .p("AgnAZIATg+IA8AEIgYA8Ig1ALg")
    this.shape_95.setTransform(126.5594, 112.4973, 1.25, 1.25)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#FF9F50")
      .s()
      .p(
        "AgCAFIAAgBIADgIQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAEgCAEIgBAAg",
      )
    this.shape_96.setTransform(199.8727, 68.1738, 1.2496, 1.2496)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#BCBBBB")
      .s()
      .p(
        "AAKADQgKgDgJABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQALgBALADQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgCABg",
      )
    this.shape_97.setTransform(186.0941, 27.0002, 1.2499, 1.2499)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#8C3C31")
      .s()
      .p("AgBAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDADgBQACAAABAEQABABgCADIgBABg")
    this.shape_98.setTransform(186.1294, 28.3083, 1.25, 1.25)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#EAA9AF")
      .s()
      .p(
        "AgCAHQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBIABgBIABgBQADAAABgCIABgEIABgCIABgBIABABQACAGgDADIgEADg",
      )
    this.shape_99.setTransform(186.592, 34.6837, 1.2499, 1.2499)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AgDAbQgDgBgDgDQgHgHgEgLQgDgJACgKQACgIALgDQAJgDAHADQAHAEAEAJQAEAIAAAIQgBAKgGAFQgCADgGADQgEACgEAAIgDAAg",
      )
    this.shape_100.setTransform(200.4748, 17.062, 1.2497, 1.2497)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AgNAYQgDgCgCgEQgEgJABgKQABgLAGgIQAFgHAKABQAKABAGAGQAEAFABALQAAAKgDAGQgEAJgIADQgEACgFAAIgDAAQgFAAgDgDg",
      )
    this.shape_101.setTransform(200.5899, 31.81, 1.2497, 1.2497)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AgNAZQgDgCgCgEQgEgKABgKQABgLAGgIQAFgHAKABQAKABAGAHQAEAFABALQAAAJgDAGQgFAKgHACQgEACgFAAQgIAAgDgCg",
      )
    this.shape_102.setTransform(201.7146, 21.8608, 1.2497, 1.2497)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#E5E5E5")
      .s()
      .p("AgMAZIgEgGQgEgKAAgKQABgMAGgIQAEgHAKABQAKABAFAHQAFAGAAAKQABAJgEAIQgDAIgIAEIgIACQgIAAgDgDg")
    this.shape_103.setTransform(203.1746, 28.2658, 1.2497, 1.2497)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#476B95")
      .s()
      .p(
        "AAQBOQhugGAAgIQAAgKAxAAQAugBAAgDIg8gDQhBgEgYggIgZgVQgMgKANgJQAjgYALgDIAGgCIBogPIAXgEIAZgDQASgBAVAHQAKADAJAEQADACADAGIAFAKQAFAJAEADQAHAIAMACIAVABIACAAQAGgBAEADIAIAGQAMAJgDAHQgDAEgCAJIgDANIgJAgQgHASgPAGIgOACQg3gBg3gDg",
      )
    this.shape_104.setTransform(172.4443, 78.6814, 1.2499, 1.2499)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#8C3C31")
      .s()
      .p("AgDABIAAAAIAHgBIABAAIgBAAIgHACg")
    this.shape_105.setTransform(149.3148, 69.4095, 1.2495, 1.2495)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#8C3C31")
      .s()
      .p("AgNAEIABAAQALgEAPgDIAAAAIAAAAQgOADgMAFg")
    this.shape_106.setTransform(146.6284, 70.1592, 1.2495, 1.2495)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#8C3C31")
      .s()
      .p("AgIADIAAgBQAHgDAKgBIABAAIgBABQgJABgIADIAAAAg")
    this.shape_107.setTransform(145.0041, 71.3462, 1.2495, 1.2495)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#BC8646")
      .s()
      .p(
        "AgpAgQAAAAgBAAQAAAAAAAAQgBgBAAAAQABAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgCADgCIABgBIADgCIAOgIIAFgCQABgBAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDAAIgNAGIgLAGIgDABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgEAGgEIADgCQAGgEAHgDIAJgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgIABgIAEIgLAEIgCAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAABgBIAHgEIAFgCIgBAAIgDgBIgBgBIABgBQAFgEALgDIBBgTQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABIACACQAGALgDARIgBAEQgBACgDABIgEADQgGAEgPAFIgkAMIgFAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIADgCQANgGgCgBIgCAAIgGACIgBAAIgYAMg",
      )
    this.shape_108.setTransform(148.6907, 72.1023, 1.2498, 1.2498)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#F7E4CA")
      .s()
      .p("AhNAFQgFAAAAgFIABgCQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAICcAAQAFAAAAAEQAAAFgEAAg")
    this.shape_109.setTransform(145.1266, 127.2005, 1.2492, 1.2492)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#0F376A")
      .s()
      .p(
        "AgSASIgBgDQgCgKAHgIQAEgFALgJQAAAAABAAQABgBAAAAQAAAAABABQAAAAAAAAQAHAHAEAJQAGAOgBADQgCACgPAAIgSAAIgBABIgCgBg",
      )
    this.shape_110.setTransform(137.4472, 124.4815, 1.2493, 1.2493)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#0F376A")
      .s()
      .p(
        "AgUAvIgQgCIgWgDQgPgDgFgFQgEgGAGgIQAHgIAWgMIAugTIAGgDQADgCAAgEQABgEgBgEIAAgKQAaAAAZADIARAEIACAAIABAOQgBAOADAwQAAAFgDABIgBABIgHABIghAAIgiAAIgTACIgEAAg",
      )
    this.shape_111.setTransform(145.3297, 121.6298, 1.2497, 1.2497)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#476B95")
      .s()
      .p(
        "Ah4CXQACgWgBh3IgBhyQgHghALgQQAGgIAHgBIAYgEIDKAdIgyAxIh3ADQAGAQgGBFIgUCbQgOAIgOADIgLABQgQAAABgQg",
      )
    this.shape_112.setTransform(162.915, 97.9526, 1.2498, 1.2498)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#F7DCBC")
      .s()
      .p("AhNAFQgFAAAAgFIABgCIADgCICcAAQAEAAABAEQAAAFgEAAg")
    this.shape_113.setTransform(141.0666, 124.8894, 1.2492, 1.2492)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#0B2F56")
      .s()
      .p(
        "AgSASIgBgCQgBgLAGgIQAEgFALgIQABgBAAAAQABAAAAgBQAAAAABABQAAAAABAAQAGAHAEAJQAHAOgCADQgCACgPAAIgRABg",
      )
    this.shape_114.setTransform(133.3481, 122.1769, 1.2493, 1.2493)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#0B2F56")
      .s()
      .p(
        "AgkAsIgWgDQgPgCgFgFQgEgHAGgHQAJgKAUgKIAtgUIAGgCQAEgCAAgEIgBgSQAaAAAaADQAKABAHADIACAAIABAOQgBANADAwQAAAFgDACIgBABIgHAAIghAAIgiABIgXACg",
      )
    this.shape_115.setTransform(141.2683, 119.3703, 1.2497, 1.2497)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#3B648C")
      .s()
      .p(
        "Ah5CeQACgVgBh4IgBhyQgIgmAQgPQANgLASgFQAQgEAYgCQAxgEAZAEQAZADAZANQAFACAQANQANAKAIABIgyAxIh4AEQAFAPgFBFIgVCcQgOAHgOADIgLACQgQAAABgRg",
      )
    this.shape_116.setTransform(158.3546, 94.0074, 1.2498, 1.2498)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#BC8646")
      .s()
      .p(
        "AAaBXQgBAAgEgHQgBgGgDgHQgBgCgOACQgPABgGgBQgHgBgDgFQgBgFgCgCQgDgDgCgFQgHgNgEgRQgKgDgFgFIgCgCIABgFQAPgcgHgMQgHgMAKgYQADgJAJgDQABAJAIAOQAHAPAHADQAOAGARgDIAEgDIAGgDQAHgDAFAFQAHAFgBALQgCAKgHAEIAOAVIAUAgQgKAGgDAMQgBAHAEAOQgQALgKABIgCAAIgCAAg",
      )
    this.shape_117.setTransform(190.1157, 31.1235, 1.2499, 1.2499)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgiApQgDgWAGgTQAEgKAEgFIANgQQAKgOAPgBQAGAAAGADQAGADACAGQACAFgBAIIgDANQgEAKgNAKIgVAPIgWASIgDACIgBAAQgDAAAAgGg",
      )
    this.shape_118.setTransform(195.3271, 40.5332, 1.2499, 1.2499)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AAhBQQgLACgMgJQgIgGgIgNIgPgVQgTgWgQADQgNACgGgDQgEgDgDgEIgHgKQgCgIAAgRQAAgSAEgFQAJgNAQgHQAFgDANAGQAMAGAFgDIAMgJQAIgFAGgCQAJgDAWAFQARAFAKANQAFAIAEASQAFASAFAHQANAVACAPQACAKgDAGQgDAHgKABQgIACgHAGQgGAFgCAIIgDAJQgEAFgFAAIgBAAQgDAAgFgEg",
      )
    this.shape_119.setTransform(191.8331, 24.7167, 1.2499, 1.2499)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "ABKCvQgPgCgIgDQgLgEgIgHIgIgHIgQgLIgEgFQgIgNgbgIIgMgDQgHgDgOgNQgBgBgHABIgIACIg1AIQguAFgTAHQgEABgDACQgIgTAAgOIAAgCQAGgEAJgDIAzgSQAbgKAPgKQAXgOAPgWIAbgoIArhLQAFgGALgLQALgNAagJQAHgCAOgBIAVgEQAJgCALgGIAUgKIAaABIAXAHQAXAMACAcQACAegBALIgKAuIguB4QgKAagJAKIgDAVQgGAWgOAHQgPAGgOACg",
      )
    this.shape_120.setTransform(180.5626, 57.2785, 1.2499, 1.2499)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AgJAOQgHgDgBgDQgCgEACgFQADgIADgDQAEgFgDAGQADgEAGAAQAJgCAIALQACAEABAFQAAAGgDADIgHAEIgIABQgEAAgGgDg",
      )
    this.shape_121.setTransform(192.7406, 15.0481, 1.2499, 1.2499)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AhdABQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAICvgCQAGAAgBAFQABAFgGAAIivABQgEAAgCgFg",
      )
    this.shape_122.setTransform(134.773, 121.4332, 1.2496, 1.2496)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgSATIgBgDQgCgLAHgIQAFgGALgIQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAHAHADAJQAHAOgDAEQgCACgPABIgSAAIgCAAIgBAAg",
      )
    this.shape_123.setTransform(125.9039, 118.7329, 1.2497, 1.2497)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AACAJQgCgIgHgFQgDgBACgEQADgCACACQAIAGAEAKQAAAAABABQAAAAgBABQAAABAAAAQgBABgBAAIgBAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg",
      )
    this.shape_124.setTransform(131.2181, 113.9562, 1.2496, 1.2496)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AACAKQgBgKgHgGQgDgBACgEIAAAAQADgCACABQAKAIABANQAAADgDABQgBAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg",
      )
    this.shape_125.setTransform(133.1297, 113.1767, 1.2496, 1.2496)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAEALQgEgLgIgGQgDgCACgDQACgDADACQAKAJAEAMQABABAAABQAAAAAAABQgBABAAAAQgBAAgBABIgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg",
      )
    this.shape_126.setTransform(134.5324, 112.7066, 1.2496, 1.2496)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f("#FFA300")
      .s()
      .p(
        "AgqA0IgVgCQgQgBgEgGQgEgGAHgIQAIgKAYgNQAfgQAZgMQAGgDAFgIQAHgKADgDQAIgGAFAAQADAAACACQADADgDAFQgGANgLAFQAGAJANAEQAMADALgDQAFgBACAEQABACAAAGQgBATAFAPQABAEAAAFQAAAEgCACQgCACgFAAQgbABgbgBIgXgBIgYADg",
      )
    this.shape_127.setTransform(134.316, 114.7159, 1.25, 1.25)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f("#153B68")
      .s()
      .p("Ag+ChIgQgKIAikOIBvgvIAMAvIg0BgIgjC7QgNADgLAAQgRAAgNgGg")
    this.shape_128.setTransform(146.8402, 88.6478, 1.25, 1.25)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f("#EDEDED")
      .s()
      .p("AgkAmIAOhGIA7gHIgSBPg")
    this.shape_129.setTransform(141.2153, 109.8411, 1.25, 1.25)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f("#FFAF6E")
      .s()
      .p(
        "ABDCcQgCgCAAgFQAAgQAHgKIgCggIgagzIjJAFIgTAAQgLgBgFgHIgLgQIgEgHQgKgYgOg5QgDgPANgRQARgWAtgRQAngQAagBQAJgBAHADQAGACAJAJQAJAJANASQAEAFAEABIAKgBQAKAAAVAEQBAAIAlAKQAmAKANAGQAaAKAKAQQAIAMgDAaQgEAhAAAKQABAZAMAOQALANAIARQADAHAAAGQgBAIgGACQgGABgFgGIgHgLIAAAKQAAAHgEACQgEAEgHgFQgDgCgEgIQACAHgCAHQgCAGgEABIgEgBQgMgFgBgOIAAAOQgBAGgDADQgFAEgFgDQgEgCgEgGQgFgGgCgLQABAJAAAGQgBAJgGAEIgDABIgDAAQgEgCgDgIQgDgKAAgFIAAAPQAAAKgGAEQgGAEgHgEQgDgDgDgKIAAgGQgEALgGAIIgEAEIgCABIgDgBg",
      )
    this.shape_130.setTransform(46.2549, 85.2323, 1.25, 1.25)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f("#FFCACD")
      .s()
      .p(
        "AhGg4QgCgSADgKQAFgNASgMQAPgJALgBQAQgCAIAKQAIAJABAPIAAAZQAAAHgKA4QgIA0ABAMQABAFALAIIASAKIAuAdIiAADg",
      )
    this.shape_131.setTransform(65.7967, 112.0085, 1.25, 1.25)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f("#BE0000")
      .s()
      .p("AgGAOIhNgHIAAgSIB5gDQAGADAaADQAVAEgJALQgHAIgpAAIgogBg")
    this.shape_132.setTransform(72.4795, 124.9951, 1.25, 1.25)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f("#E2ACB1")
      .s()
      .p(
        "AhCgIIgEgwQgCgTADgJQAFgNARgLQANgJANgCQARgCAIAKQAHAJACAPIAAAZQAAAHgLA4QgIA0ACAMQACARAIAGIBCAdIiAAEIgKiBg",
      )
    this.shape_133.setTransform(68.8858, 109.3601, 1.25, 1.25)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgMAJQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAJgMAPgBQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgNABgHAKIgDABg",
      )
    this.shape_134.setTransform(95.5743, 117.2684, 1.2499, 1.2499)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgMAKQAAgBgBAAQAAAAAAgBQgBAAABgBQAAAAAAgBQAEgGAHgFQAGgEAIAAQABAAAAAAQABAAAAABQAAAAABABQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgNgBgHANQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg",
      )
    this.shape_135.setTransform(94.1419, 115.7342, 1.2499, 1.2499)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AgMAJQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBQADgGAIgEQAGgEAIABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgOgBgGAMQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg",
      )
    this.shape_136.setTransform(92.8773, 114.0148, 1.2499, 1.2499)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f("#476B95")
      .s()
      .p(
        "AAAAiQgHgEgJgJIgPgPIgagZQgJgIgEgPIAhAhIAQAQQALAKAIAAQAEgBAHgGIAKgKQAQgNALgEQAGgCACABQAGADAEAIQAEAHACAHQACAOgHAKQgIALgOABIgGAAQgTAAgSgJg",
      )
    this.shape_137.setTransform(94.2555, 120.79, 1.25, 1.25)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f("#476B95")
      .s()
      .p(
        "AAKBAIgOgJIgwgxQgPgPACgaIAKACQAFgBAAgHIACgKQABgEAFgDIALgEQAMgFAKAAIAFACQADACgBAGIgCAIQgBAFAHAGIAQALQAXARANANQAHAHADAGQAGAOgJAOQgHALgOAIQgHAFgIAAQgHAAgIgEg",
      )
    this.shape_138.setTransform(93.7268, 117.4513, 1.25, 1.25)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAMAFQgLgGgMACQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAPgEANAHQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg",
      )
    this.shape_139.setTransform(71.6597, 118.2852, 1.25, 1.25)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAMAFQgLgIgNAEQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAQgGANAKQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIgCABg",
      )
    this.shape_140.setTransform(72.0116, 116.5211, 1.25, 1.25)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f("#F7E4CA")
      .s()
      .p(
        "AAMAFQgFgEgHgBQgGAAgFACQgBABgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABgBQAOgHAOAKQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCABg",
      )
    this.shape_141.setTransform(72.2393, 114.5884, 1.25, 1.25)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f("#476B95")
      .s()
      .p(
        "AgbAyQgNgFgDgIQgDgJABgMQAhgLAgASQAEADACgEQAGgQAEgVIAHgnQAGALgDALIgMA7IgHAOQgKANgPABIgCAAQgPAAgMgFg",
      )
    this.shape_142.setTransform(72.8005, 118.9997, 1.25, 1.25)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f("#476B95")
      .s()
      .p(
        "AgcA9QgMgFgDgHQgDgHAAgJQAAgIACgEIAahAQgBgCABgEIABgHQAAgFADgCIAFgBIAbgBQAGAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAMQABABAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgDACgCQAOAPgFASIgLA6IgHAOQgKAOgPAAIgCAAQgQAAgMgFg",
      )
    this.shape_143.setTransform(72.756, 117.5935, 1.25, 1.25)

    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f("#487887")
      .s()
      .p(
        "AhVCSQgKgHgdhlIgfh7IgDhAQEkAEAOAIQAJAFABASQABAKgBAIIgcDnQgUANgdgFIgZgJIAJjkIh2ADQAHAeAnC9QgbAVgcABg",
      )
    this.shape_144.setTransform(78.0085, 89.2478, 1.25, 1.25)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f("#EDEDED")
      .s()
      .p("AgRAYIgTg9IA8gJIANA+IgDAfg")
    this.shape_145.setTransform(72.592, 109.7786, 1.25, 1.25)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f("#EDEDED")
      .s()
      .p("AggAgIADhAIA+gLIgJBBIgzAWg")
    this.shape_146.setTransform(89.5603, 109.6848, 1.25, 1.25)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f("#AA4335")
      .s()
      .p(
        "AgMCwIiagSQgGAAgRgUQgSgUgdAAQAKgUAAgoQBxgyCwAAQBQh3AogyQAPgPASAAQARAAAAAPQAOBLgiBXQgYBAg4BTQgyAdhLAAIgUgBg",
      )
    this.shape_147.setTransform(182.4098, 75.3701, 1.2499, 1.2499)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f("#D66D5F")
      .s()
      .p("AgnCHQAKhaAnizQAKAAAUAKQgGA1gUBMIghCCg")
    this.shape_148.setTransform(171.5437, 112.0502, 1.2499, 1.2499)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f("#D66D5F")
      .s()
      .p("AAFBfQAAgvgPhBQgVhXgDgUIAMgFQAMgFAGAAQAMA8ALBKIAQCHQgUAAgKgog")
    this.shape_149.setTransform(195.916, 112.0502, 1.2499, 1.2499)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f("#AA4335")
      .s()
      .p("AgaAOQgbgNgGgYQAygMAQAAQAoAAANAgQgIAOgMANQgMAMgIAAIgugWg")
    this.shape_150.setTransform(49.0571, 94.3959, 1.2499, 1.2499)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f("#AA4335")
      .s()
      .p(
        "AAbC3QhWgEhOgfIgrhkQgYg3gNgsIAAgeIgRgoQgJgWAGgSQARgQASgEQAVgEAOAOQALAhAkA0QAqA+ALAXIErA7QgDAMAEARIAHAaQAEAZgqAAIgKAUQg/AZhQAAIgWAAg",
      )
    this.shape_151.setTransform(30.0198, 77.9662, 1.2499, 1.2499)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f("#D66D5F")
      .s()
      .p("AAPCCQgRgugKhQQgQhqgGgbIAeAAQAJAtAKBUQAKBVAKAtg")
    this.shape_152.setTransform(49.682, 115.1748, 1.2499, 1.2499)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f("#D66D5F")
      .s()
      .p("AgxAAQAZhkAAgyIAxAAQgPAfAVA6IAmBjQARA2gZAaQggAhhoAAQAAgyAahlg")
    this.shape_153.setTransform(18.1596, 116.0284, 1.25, 1.25)

    this.instance_2 = new lib.Path_84()
    this.instance_2.setTransform(110.25, 129.5, 1.25, 1.25, 0, 0, 0, 88.2, 9.5)
    this.instance_2.alpha = 0.1992

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_2},
            {t: this.shape_153},
            {t: this.shape_152},
            {t: this.shape_151},
            {t: this.shape_150},
            {t: this.shape_149},
            {t: this.shape_148},
            {t: this.shape_147},
            {t: this.shape_146},
            {t: this.shape_145},
            {t: this.shape_144},
            {t: this.shape_143},
            {t: this.shape_142},
            {t: this.shape_141},
            {t: this.shape_140},
            {t: this.shape_139},
            {t: this.shape_138},
            {t: this.shape_137},
            {t: this.shape_136},
            {t: this.shape_135},
            {t: this.shape_134},
            {t: this.shape_133},
            {t: this.shape_132},
            {t: this.shape_131},
            {t: this.shape_130},
            {t: this.shape_129},
            {t: this.shape_128},
            {t: this.shape_127},
            {t: this.shape_126},
            {t: this.shape_125},
            {t: this.shape_124},
            {t: this.shape_123},
            {t: this.shape_122},
            {t: this.shape_121},
            {t: this.shape_120},
            {t: this.shape_119},
            {t: this.shape_118},
            {t: this.shape_117},
            {t: this.shape_116},
            {t: this.shape_115},
            {t: this.shape_114},
            {t: this.shape_113},
            {t: this.shape_112},
            {t: this.shape_111},
            {t: this.shape_110},
            {t: this.shape_109},
            {t: this.shape_108},
            {t: this.shape_107},
            {t: this.shape_106},
            {t: this.shape_105},
            {t: this.shape_104},
            {t: this.shape_103},
            {t: this.shape_102},
            {t: this.shape_101},
            {t: this.shape_100},
            {t: this.shape_99},
            {t: this.shape_98},
            {t: this.shape_97},
            {t: this.shape_96},
            {t: this.shape_95},
            {t: this.shape_94},
            {t: this.shape_93},
            {t: this.shape_92},
            {t: this.shape_91},
            {t: this.shape_90},
            {t: this.shape_89},
            {t: this.shape_88},
            {t: this.shape_87},
            {t: this.shape_86},
            {t: this.shape_85},
            {t: this.shape_84},
            {t: this.shape_83},
            {t: this.shape_82},
            {t: this.shape_81},
            {t: this.shape_80},
            {t: this.shape_79},
            {t: this.shape_78},
            {t: this.shape_77},
            {t: this.shape_76},
            {t: this.shape_75},
            {t: this.shape_74},
            {t: this.shape_73},
            {t: this.shape_72},
            {t: this.shape_71},
            {t: this.shape_70},
            {t: this.shape_69},
            {t: this.shape_68},
            {t: this.shape_67},
            {t: this.shape_66},
            {t: this.shape_65},
            {t: this.shape_64},
            {t: this.shape_63},
            {t: this.shape_62},
            {t: this.shape_61},
            {t: this.shape_60},
            {t: this.shape_59},
            {t: this.shape_58},
            {t: this.shape_57},
            {t: this.shape_56},
            {t: this.shape_55},
            {t: this.shape_54},
            {t: this.shape_53},
            {t: this.shape_52},
            {t: this.shape_51},
            {t: this.shape_50},
            {t: this.shape_49},
            {t: this.shape_48},
            {t: this.shape_47},
            {t: this.shape_46},
            {t: this.shape_45},
            {t: this.shape_44},
            {t: this.shape_43},
            {t: this.shape_42},
            {t: this.shape_41},
            {t: this.shape_40},
            {t: this.shape_39},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.shape_31},
            {t: this.shape_30},
            {t: this.shape_29},
            {t: this.shape_28},
            {t: this.shape_27},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(240),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 220.3, 141.3)

  // stage content:
  ;(lib.animdefdef = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    this.actionFrames = [0]
    this.isSingleFrame = false
    // timeline functions:
    this.frame_0 = function() {
      if (this.isSingleFrame) {
        return
      }
      if (this.totalFrames == 1) {
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

    // Calque_1
    this.instance = new lib.logomsa()
    this.instance.setTransform(1711.35, 930.2, 0.1406, 0.1406, 0, 0, 0, 665.6, 332.4)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // Calque_20
    this.instance_1 = new lib.echecs()
    this.instance_1.setTransform(1399.55, 755.25, 1.05, 1.05, 0, 0, 0, 82.4, 64.8)

    this.instance_2 = new lib.Path_2()
    this.instance_2.setTransform(1398.55, 815.95, 1.25, 1.25, 0, 0, 0, 75.7, 8.4)
    this.instance_2.alpha = 0.1992

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_2}, {t: this.instance_1}]})
        .wait(1),
    )

    // MUSICIENS
    this.instance_3 = new lib.musiciens()
    this.instance_3.setTransform(628.6, 764.9, 1.05, 1.05, 0, 0, 0, 142.2, 93.5)

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1))

    // Calque_20
    this.instance_4 = new lib.jeucarte()
    this.instance_4.setTransform(455.3, 669.1, 1, 1, 0, 0, 0, 110.1, 70.6)

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1))

    // gymnastes
    this.instance_5 = new lib.gymnastes()
    this.instance_5.setTransform(1152.45, 745.5, 1, 1, 0, 0, 0, 77.3, 83.7)

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1))

    // FONTAINE
    this.instance_6 = new lib.fontaine()
    this.instance_6.setTransform(996.15, 586.7, 1, 1, 0, 0, 0, 251.3, -2.7)

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1))

    // _femmes_bulles
    this.instance_7 = new lib._3femmes()
    this.instance_7.setTransform(818.95, 643.8, 1, 1, 0, 0, 0, 74.1, 54.4)

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1))

    // PEINTRE
    this.instance_8 = new lib.peintre()
    this.instance_8.setTransform(879.1, 810.5, 1.155, 1.155, 0, 0, 0, 71.3, 84.5)

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1))

    // LOGO
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#28A952")
      .s()
      .p(
        "AgZBSIABgIIAAgnIAAgIIAAgDIAAheIgBgNQAAgDAFgBIAGACIAUgCQASABAAAGQAAAEgJAAIgMgCIgIABQgFACAAAEIABAIIgBA9IAGAAIAEAAIABAAQAIgBAAAFQAAAFgGAAIgNgEIAAACIACAZIAAADIACAqIAAACQAMAAAKgDIACAAIAGACQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAEgFAAIgEAAIAAAAQgLAEgSAAQgNAAAAgGg",
      )
    this.shape.setTransform(1140.9, 89.8, 4, 4)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#28A952")
      .s()
      .p(
        "AAXBiQgCgDAAgDIAAgMQAAgLgEgaQgCgMgJgOQgIgNgGgDIgDAdIAAAHQAAARgEAeIAAADIAAACIAAABIAAADQABAHgHAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgCgDgDAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQABgKACgRQADgRAAgHIACgtIAAgGQgBgTADgmQAAgXAFgDQAIgFAHAAQAIAAAIAFQAFAEACADQAJATAAAJQAAAPgKANQgFAHgPANIgDACIgBABQAYASAHAcIAEAWIABAiQAAAIgEAAQgDAAgCgDgAgGhSIACAaIgBAGIAAAEIgBAEIAAAAIABABIgBACIABADIgBAQQAagRAAgYQAAgGgCgFIgGgKQgBgDgGgCQgFgCgDAAQgCAAgBAHg",
      )
    this.shape_1.setTransform(1111.4, 82.3, 4, 4)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#28A952")
      .s()
      .p(
        "AgFBhIABgEIgBgPIABgGIgBAAIAAgvIgEhkIgBgMIgBAAIgTADQgGAAAAgGQAAgGANgBIAQgBIABAAIABAAIAFAAIAggCQADAAACAEIAAACQAAAGgFAAIgJgBIgNABIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQABAIAAAaIAAAFIACApIgBAHQAAAHACAOIADAWIABAeIAAAVQAAACgFACIgDABIgCAAIgEACQgFAAAAgEg",
      )
    this.shape_2.setTransform(1082.5, 80.7, 4, 4)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#28A952")
      .s()
      .p(
        "AgZBkIACgIIgBgFIAAgiIABgIIgBgDIgBgUIABgEIgBg5IABgNIgBgNQAAgDAGAAIAFABIAVgBQARAAAAAGQAAAEgJAAIgLgBIgJAAQgEACAAAEIABAIIgCAnIAAAVIAGAAIAEAAIABAAQAJAAgBAFQABAFgHAAIgMgDIgBABQADASAAAHIgBADIADArIAAABQAMAAAKgCIABAAIAHACIACADQgBAFgEAAIgEAAIAAgBQgMAEgRAAQgOAAAAgGgAgXhPQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQABgBAHgJIADgGQADgFADAAIACABIADgCQACAAACADIAKAHQAMAHAAACIAAADQAAAFgFAAIgBAAIgJgHIgFgEQgEgDgCAAIgGAHIgDAEQgEADgBAAIgFgBg",
      )
    this.shape_3.setTransform(1056.4, 82.5, 4, 4)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#28A952")
      .s()
      .p("AgUAAQAAgGADAAIAigCQADAAABAIQAAAHgDAAIgiACQgEAAAAgJg")
    this.shape_4.setTransform(1030.8, 85.7, 4, 4)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#28A952")
      .s()
      .p(
        "AggBhIgBgBIgCAAQgFAAgBgGIABgHQAAgUABgEQABgIAAgdIADgxIAAgBIgBgDIAAgBIADgeIAAgWQAAgPAFAAQAEAAAIALIAIAQIANATIAUAaIAAgIIAAgBQAAgKADgPIADgZQAAgKAEAAQAGAAAAAHIgDAdQgFAZAAAPIABAJIgBABIgCAhIgBAOIgBAkIABAQIgBADQgDADgDAAIgDgCQgCgCAAgDIAAAAIAGhdIAAgBIgBgCQgMgUgHgIQgEgFgKgPQgGgGgEgHIAAgBIAAAKIgBAHIABAFIgCAnIAAAKIgBA2IAAAGIAAAHQgBANACAKQAAAJgHAAQgDAAAAgDg",
      )
    this.shape_5.setTransform(999.4, 86.3, 4, 4)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#28A952")
      .s()
      .p(
        "AgZBSIACgIIgBgFIAAgiIABgIIgBgDIgBgUIABgEIgBg6IABgMIgBgNQAAgDAFgBIAGACIAVgCQARABAAAGQAAAEgJAAIgLgCIgJABQgEACAAAEIAAAIIgCAmIABAXIAGAAIAEAAIABAAQAIgBAAAFQAAAFgGAAIgNgEIAAACQADARAAAIIgBADIACAqIAAACQAMAAAKgDIACAAIAHACIABAEQAAAEgFAAIgEAAIAAAAQgLAEgRAAQgOAAAAgGg",
      )
    this.shape_6.setTransform(967.3, 89.8, 4, 4)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#28A952")
      .s()
      .p(
        "AgGBIIgBgVIABAAIgCg/IACgzIAAgQQAAgEAFAAIABAAIADgBQAEAAAAAEIgBBMIAAAFIgBAjQAAALABABIAAAAIACAYIAAADIABAEQAAAGgHAAQgHAAgBgNg",
      )
    this.shape_7.setTransform(944.9, 81.9, 4, 4)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#28A952")
      .s()
      .p(
        "AgeBfIAAgCIAAgDIAAgFIAAgEIACg1IAAgJIABg5IgBglIAAgEIAAgOQACgEADAAIACAAQAIgDAEAAQAGAAAEADQASAKAAAYQAAAMgFAIQgFAGgMALIAAAAIAKAJQAGAGABAEQAFAIAGAOIAEAMIADAKIAAAGQgBAPgFAKQgFAKgOAKIgTAIIgEACIgBgBIgBABIgBAAIAAAAQgBADgFAAQgFAAAAgGgAgNgIIAAAcIAAAEIABAEIgBAEIAAATIABADIgDASIACAGIgCAGIABABQAGAAAHgEIAHgEQAOgLACgTIAAgJQgBgGgEgKIAAAAIgHgRQgFgKgFgCIgGgGIgGgFgAgMhYIAAAFIABAzQAUgMAAgUIgBgKQgFgPgMAAQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAg",
      )
    this.shape_8.setTransform(925.8, 87.9, 4, 4)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#28A952")
      .s()
      .p(
        "AgQBkIgCAAQgGAAAAgGIABgKIAAgSIgBgEIABgGQAAgggDg1IgBgBIAAgbQAAgQABAAIgBgFIABgIIABgHQAFgFAIgCIABAAQATAEAGAHQALAOACArIABAFQgBAfgQALQgUAMAAADIABAVIACARIAAACIgBAEQACAIAAAKQAAAJgGAAgAgLhLIgBA1IACAmQAbgJAAgjQgCgbgHgXQgCgGgFgCIgKgCIgCANg",
      )
    this.shape_9.setTransform(879.9, 87.9, 4, 4)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#28A952")
      .s()
      .p(
        "AAbBVQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgBQAAgPgGghQgCgOgDgMIgBgJIgBAAIgGAAIgDgDIgDABIgDAAQgCAAgDAUQgHAWABAKIAAABQAAANgEAMQgDANgFAAQgCAAgCgEQgEgDgBgHIADgOQAAgXAKgjQAHgrAFgUIABgBQABgHAFgOIAFAAQAHAAACANIACASQADAaAFASIAFAhIABAGIAAAHIAFATIAAABQACANAAAHIAAACIABAEIAAABQAAADgEABIgEgCgAABgrIgCAOQABAJgDAFIAAACIAMgCIACABIgDgMIgEgeQgBAFgCAIg",
      )
    this.shape_10.setTransform(851, 83.4, 4, 4)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#28A952")
      .s()
      .p(
        "AgVBNQgEgMgCgKIgBgGIAAAAIgDgiIgDggIABgbQAAgLACgMIAEgSQAEgPAPABQAHgBAGAJQAIAHAAAIQAAAHgFAAQgCAAgDgJQgEgJgEgCIgBAAQgEAAgCAMQgCAJAAAIIAAAEIgCARIACAvQAEAwAHAfQABADADAAQAJAAAEgFQADgDAGgLQADgDgBgIIAAgCIABgEIgCgDIAGgFQAFACAAAGIAAALQAAAHgHALQgFAIgFADQgIAHgKgBQgMABgJgYg",
      )
    this.shape_11.setTransform(820.4, 88, 4, 4)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAAAHQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAAAIgBgCIAAgBIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAIABAAIABgBIACABQABAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgBAAIAAACIAAABIABAAIABAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAIABABIAAABIAAABIACgBIAAAAIABAAIABABIAAABIgBAAIAAAAIAAABIgEABg",
      )
    this.shape_12.setTransform(828.9, 86.3, 4, 4)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAHIAAgBIAAAAIgCgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIABgCIABAAIAAAAIABgBQACAAACADIABADIAAACIgBADIgBABIgBAAIgBAAIgBABgAAAgCIAAADIAAABIAAACIAAAAIABAAIABgBIAAgBIAAAAIAAgCIgBAAIAAgBIgBgBIAAAAIAAgBIAAABg",
      )
    this.shape_13.setTransform(737.6, 109.4, 4, 4)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#BDE0E1")
      .s()
      .p(
        "AABAHIgBAAIAAAAIgBgBIAAgBIAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIABABIAAABIAAABIABAAIAAgBIAAAAIAAgBIAAgCIgBgBIgBAAQgEAAAAgBQgBgEAFgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAIgBABIgBgBIAAAAIAAABIAAABIAAAAIABAAIACAAIACACIABABIAAADIgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAg",
      )
    this.shape_14.setTransform(794.3692, 143.65, 4, 4)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAIIgBAAIgBgBIAAgBIAAgBIAAgCIgBAAIAAgBIAAgCIAAgCIgBAAIAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIADABIABAAIAAABIABAAIAAgCQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAABQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAIABADIAAABIAAAAIAAADIABAAIAAACIAAAAIgBABIgBAAIgBgBIAAgBIgBgDIAAgBIgCAAIgBgBIAAABIABAAIAAABIAAADIAAABIAAABIAAAAIAAABIAAABg",
      )
    this.shape_15.setTransform(771.325, 51.575, 4, 4)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAaBoIAAgBIAAABIgjhWIAAgBIAAAAIhdAKIgBAAIAAgBIAAgBIBWgiIABAAIgBgBIgJhcIAAgBIABAAIAAAAIAjBWIAAABIAAAAIBdgLIABABIAAABIgBABIhVAiIgBAAIABABIAJBcIAAABIAAAAgAgHARIAcBHIAAgBIgVhUgAhVAUIBTgUIgPgHgAADAAIAPAIIBGgcIAAAAgAgUhWIAUBUIAIgOIgchHg",
      )
    this.shape_16.setTransform(782.8, 97.9, 4, 4)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.shape_14},
            {t: this.shape_13},
            {t: this.shape_12},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.shape_9},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    )

    // Calque_10
    this.instance_9 = new lib.home1()

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(960, 540, 960, 540)
  // library properties:
  lib.properties = {
    id: "734EB31CE8A9084FB0FF77AFEBD5E96A",
    width: 1920,
    height: 1080,
    fps: 24,
    color: "#283D69",
    opacity: 1.0,
    manifest: [
      {
        src: require("./login-anim-1.png"),
        id: "_1200pxMutualite_sociale_agricole_logosvg",
      },
      {src: require("./login-anim-2.png"), id: "home1"},
    ],
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
  an.compositions["734EB31CE8A9084FB0FF77AFEBD5E96A"] = {
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
