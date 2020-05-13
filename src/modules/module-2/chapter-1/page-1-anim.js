;(function(cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = []
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

  ;(lib.tetefe = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CC816E")
      .s()
      .p(
        "Ag8DjQg8gNgXgmQAjAWAjAEQAgAEAxgKQAqgIAXghQAWghgMggQgsh2gHhyIAChbQAPCEAxBuQAKAXAWArQANAaAAAHQAABFgwAdQgkAVgrAGIgUABQgaAAgegHg",
      )
    this.shape.setTransform(20.7012, 43.2991, 0.225, 0.225)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEA6QhUAAg3gmQgwghAKgdQAFgSArAIQBQAPA3AAQApAABRgQQA0gKAGAQQAKAggvAhQg3AohbAAIgDAAg")
    this.shape_1.setTransform(20.0919, 52.2498, 0.2249, 0.2249)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#EA5A3D")
      .s()
      .p(
        "AAABFQhcAAgzgrQgsgjADguQABgLAMACQAHABAdAKQBKAbBCABQAzAABGgeQAzgWAFAOQAOAsgtAoQgzAwhjAAIgBAAg",
      )
    this.shape_2.setTransform(20.1069, 52.6562, 0.2249, 0.2249)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#5975A7")
      .s()
      .p("AgrAoQgSgTAAgXQAAg+BCAFQAZADAQAPQAQAQAAAXQAAAXgSATQgTAUgZAAQgYAAgTgUg")
    this.shape_3.setTransform(28.0078, 40.0642, 0.225, 0.225)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#5975A7")
      .s()
      .p("AgqAoQgTgTAAgXQAAgbAOgPQAQgRAjACQAaADAQAPQAQAQAAAXQAAAXgSATQgTAUgZAAQgYAAgSgUg")
    this.shape_4.setTransform(12.8715, 40.0649, 0.225, 0.225)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#E5DFDA")
      .s()
      .p("Ai1A5QgMgjBigmQBSggBKgKQA6gIATACQApAFAEAmQADAcgnANQgXAIgrACQgKABiOAZQg1AJgcAAQgaAAgDgIg")
    this.shape_5.setTransform(11.9648, 36.296, 0.225, 0.225)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#E5DFDA")
      .s()
      .p("ABIA3QhfgQgigCQgqgDgXgHQgngNADgdQADgmAqgEQASgDA6AIQBJAKA8AZQBKAfgMAiQgDALggAAQgUAAgfgEg")
    this.shape_6.setTransform(28.193, 36.1553, 0.225, 0.225)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#EFE6E8")
      .s()
      .p("Ai9FfQhkgshJhaQiQi1CNjnQBQiECGgqQB4gmCGApQCAAoBcBeQBfBiAPB2QAbDJj0B6QhMAmheAZIhOASg")
    this.shape_7.setTransform(30.2053, 8.7226, 0.225, 0.225)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#EFE6E8")
      .s()
      .p(
        "AImKeQAGkDh6heQhphRi5gpQhxgZgigKQhVgZhEgnQiEhKhDiOQgVgsgMguIgIglQggAthrCAQhsCCg3BNQhBBbgSCbQgJBOAEA7QgzgXgyg5Qhlh0gBivQAAixBLiTQAZgxAlgyQATgbAegmQALgQAUg9QAYhKAWgtQBTitDAhvQC9huD2AeQAwAGCCAaQBiAUAtgDQCLgHCQBHQCoBTA8CQQAyB4gOCNIgNBlQgEA1AJAkQAJAgAkA0QAvBCAOAcQBHCHg5C9Qg6DCjGC2QhkBbhYA1QAchvACiBg",
      )
    this.shape_8.setTransform(22.2889, 29.1066, 0.225, 0.225)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AkJPJQiBhUhmieQhlibg5jHQg7jMgDjVQgFmpDOkcQBgiECChLQCChNCUgJQCSgJCFA8QCDA7BjB4QDVEBAGGqQADDVg2DTQg1DOhgCoQhiCqh/BjQiFBpiRAJIgZABQiDAAh7hQg",
      )
    this.shape_9.setTransform(20.5158, 38.4728, 0.225, 0.225)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#CC816E")
      .s()
      .p("AiEBuQh6gXhUg3QAKhKADhRQB6BCEfAMICzAGQBLADABANQAFA4hIAnQhEAmhvAKQgnAEgnAAQhJAAhKgOg")
    this.shape_10.setTransform(19.2488, 60.9114, 0.225, 0.225)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.tetefe, new cjs.Rectangle(0, 0, 44.6, 63.7), null)
  ;(lib.piedg1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "ACMD4QgHgGAAgNQAAgcgOgoQgGgTgTgqQgQgkgdgkQglgrgpgSQjBhrAdghQAcgiBBgrQCLB/AYAUQAXATAVAKQARAIANADIAbAFIAFABQAaAIADAaQACAWgOAvQgHAWgCAWQgCAOAAAaQAAA3gKAqQgDAPgIAGQgDADgEAAQgDAAgEgDg",
      )
    this.shape.setTransform(2.9875, 14.225)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.piedg1,
    new cjs.Rectangle(-16.8, -10.8, 39.6, 50.099999999999994),
    null,
  )
  ;(lib.pie = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "ACGECQgIghAHgnQAIgogKg3QgKg4gSgbQgWgfgqgZQg6glhkgYQisgxBAhKQBAhKBRA2QAaATAyAYQA1AaAaADQASADAYgCIAmgCIATACQARACAhAIQAiAIgQBAQgPBBACAVIAIA5QAFAlABATQABATgSA6QgRA6ghAbQgOAMgKAAQgLAAgFgSg",
      )
    this.shape.setTransform(12.0335, 25.294)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.pie, new cjs.Rectangle(-12.5, -2.2, 49.1, 55.1), null)
  ;(lib.molletg1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFE9DE")
      .s()
      .p(
        "AANDUQg0ggg4g/Qg3g/gihEQgXgtgJglQAiiwCGAuICKCMIAkAiQA9A6AaA4QAIAUgGAcQgGAZgRAaQgRAZgWATQgXATgWAIQgLAEgNAAQgeAAgpgYg",
      )
    this.shape.setTransform(21.7408, 18.4599)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.molletg1,
    new cjs.Rectangle(0, -5.2, 43.5, 47.300000000000004),
    null,
  )
  ;(lib.mol = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F2611E")
      .s()
      .p(
        "ABuC8QgpgEhAgiQg/gihGgjQhHgigQgrQgRgqgBgcQgBgcADgKQAhh8CuA9ICwA9IAUAJQAlAQAPAaQAMAWgCAqQgCAogPAqQgQAsgXAbQgXAagkAAIgJAAg",
      )
    this.shape.setTransform(22.3828, 10.9401)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.mol, new cjs.Rectangle(-1, -7.9, 46.8, 37.7), null)
  ;(lib.jambe = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFE9DE")
      .s()
      .p(
        "AgcLJQgkAAgdgIQgegHgHgMQgRgYgFglQgEgXABgfQABgjAKiYQAKiSABg+QAAgwgNh6IgHhAIggkbQgBgKgEgIQgEgJgHABIgCAAIAAlCIAvAEIAAgDIABAAIAAgCIFmgWQAEDxggE+IgSCfQgMBjgQByQgIA4gNDDQgPCygXAlQgGAPgeAIQgXAFgeAAIgJAAg",
      )
    this.shape.setTransform(20.3673, 71.3317)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.jambe, new cjs.Rectangle(0, 0, 40.8, 142.7), null)
  ;(lib.Interpoler11 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AjTB3Qg5gHgKgLQgUgVgJhEQgEgbABgUQABgWAFgCIgEgZQgBgJAFgCIAAgBQgBgLACgIQACgHAEgBQADgBADAGQAEAGAEANQAZBVATAkQAGAOA4gGQAkgEBXgRIAYgFIBpgSIAbgDQANAAAMADQA3AOAugJQA1gLAJgnQAdA4gKAfQgRAyiBAZQhkAUiRABIgMAAQhCAAgzgFg",
      )
    this.shape.setTransform(29, -6, 1, 1, 0, 0, 0, 29, -6)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-31.1, -12.4, 62.3, 24.9)
  ;(lib.Interpoler9 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AqeHNQpShhhei3QhRihCpkpQB6CNDMAnQB4AXCogOIgBABQAdgEAtAAQBigBCdAWQB8ARC9AkIFbBDQFhBFCcAPQDkAVAdg7QAshZA2iWQAyiJAwiiQAMgoASgcQATgeAMADQARADAFAYQADARgBA3IAAAEIAFACQgTALABAZIAOBZIgIAtQAEABAEAGQgwBFA1FGQgiDuhBBGQgpAtjiAXQjIAUlJADIg+AAQprAAnfhOg",
      )
    this.shape.setTransform(-28.6, -6.3, 0.225, 0.225, 0, 0, 0, -127.1, -27.9)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-31.1, -12.1, 62.3, 24.299999999999997)
  ;(lib.Group_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAqCAEKQjmhkjJgiQk+gtm4grIruhFQuNhZpViOQh0gdiYALIiBALQhPAHg7AAQkkgkkLAAQkMAAkkAkQhEAAhqANQh+APgoADQi/AKiVhZQAggLBOggQBHgdArgOQCLgqB7AeQGHgwDAgNQFFgUEDAhQBYAAB7gHIDKgMQDvgLCvAeQDzAkHWBMQGeBBEaAeQMNBSJ1hfQB6AADtgMQDJAAB5A9QCcAfAhDrQALBTgBCAIgEDLQjUh/i4hQg",
      )
    this.shape.setTransform(309.0042, 47.2756)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 618, 94.6), null)
  ;(lib.Group = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAr+AGiQhGiXgbhvQgRgwgrgXQgagOg8gMQg9gMgagOQgrgXgQgvQr4gmqphOQrhhUrjiNQkqhClfgRQj9gNmDALQo3AQhIABQluADkbggQAQggAjgKQAWgGAwAAQAxAAAVgHQAkgKAQggQG3gxDZgMQFtgUEkAgQCSAAEjgSQEHgLCvAdQDnAlHFBMQGOBAEXAeQL6BSJXheIIXAAQFmAgBKFfQA2D8hhGBQAAAegwANIgxAGQgRgyhQivg",
      )
    this.shape.setTransform(307.0188, 64.3006)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 614.1, 128.6), null)
  ;(lib.cuisseg1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFE9DE")
      .s()
      .p("AlKEyQgGgYAAgUQAAhTBPjYQAbhKAvh3IBKi8IEkAdICaCIQirDDhPCJQguBPhLCLQhNB6hLAAQhJAAhHhxg")
    this.shape.setTransform(33.675, 41.9241)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.cuisseg1, new cjs.Rectangle(0, 0, 67.4, 83.9), null)
  ;(lib.cuis = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F2611E")
      .s()
      .p(
        "AlAFHQhPhLAXgrIAfhKQAag/AqhIQAqhKASgbQAhgwAVgjQA9hiAfhSIE7ADQEVB2kVD/QgsgNhXBPQhYBQgdAgQgfAfgKANQgLAMhcBPQgvAogrAAQgqAAgogmg",
      )
    this.shape.setTransform(39.4379, 36.4754)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.cuis, new cjs.Rectangle(1.2, 0, 76.5, 73), null)
  ;(lib.brg1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AmEKiQlqgLkTgpQkegqgvg3Qgvg2gfiDQgbhygKiQQgIiFAKhlQAKhnAagLQgMhkgBhBQAAhbAXgIIAAgFQgFg5AMgkQAKggARgFQAPgFATAfQAVAhAQA/IBXF9QA0DjAkBSQAdBBEXgqQCogZG4hRIB0gTQFng3CggQQBmgLApgDQgQgdgZg8QgYg5ADAAQEjgvDMhjQEZiJArjPQAbAsAkBzQAoB7AcCHQBJFgg6CaQhWDlpOB0QmuBVoMAAQhnAAhrgDg",
      )
    this.shape.setTransform(33.2346, 15.2321, 0.225, 0.225)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brg1, new cjs.Rectangle(0, 0, 66.5, 30.5), null)
  ;(lib.brd2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AraKBQpthNhXjQQg6iMBBl8QA1kzBLjQQAFBmBBBbQBBBZB0BBQD9COF4gZQgSAygwBLQggAyAPgBQBVgFBaAMID/AlQB+ARECAlQDTAeFlBIQEDArAZg8QAkhUAyjkQA3kJAbhwQAKgtATghQASghAOACQAvAHgPBlIAAAEIAFACQgjAXArDLIgGAxQAFADAEAFQgwBPBOFhQgOCdgIAxQgQBjggAnQgrAzkAAnQjfAiltAWQkfARkAAAQl/AAk6gng",
      )
    this.shape.setTransform(32.9946, 15.3157, 0.225, 0.225)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.brd2, new cjs.Rectangle(0, 0, 66, 30.6), null)
  ;(lib.hommeee = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_3
    this.instance = new lib.brd2()
    this.instance.setTransform(18.45, 115.5, 1, 1, 0, 0, 0, 17, 10.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(40)
        .to({regX: 33, regY: 15.3, scaleX: 1.0046, skewY: -1.4736, x: 34.4, y: 119.8}, 0)
        .wait(1)
        .to({scaleX: 1.0079, skewY: -2.5608, x: 34.35, y: 119.25}, 0)
        .wait(1)
        .to({scaleX: 1.011, skewY: -3.5699, x: 34.3, y: 118.8}, 0)
        .wait(1)
        .to({scaleX: 1.014, skewY: -4.5375, x: 34.25, y: 118.35}, 0)
        .wait(1)
        .to({scaleX: 1.017, skewY: -5.478, x: 34.2, y: 117.9}, 0)
        .wait(1)
        .to({scaleX: 1.0198, skewY: -6.3987, x: 34.15, y: 117.45}, 0)
        .wait(1)
        .to({scaleX: 1.0226, skewY: -7.3036, x: 34.1, y: 117}, 0)
        .wait(1)
        .to({scaleX: 1.0254, skewY: -8.1954, x: 34.05, y: 116.65}, 0)
        .wait(1)
        .to({scaleX: 1.028, skewY: -9.0599, x: 34, y: 116.2}, 0)
        .wait(1)
        .to({scaleX: 1.0305, skewY: -9.8693, x: 33.95, y: 115.8}, 0)
        .wait(1)
        .to({scaleX: 1.0329, skewY: -10.6367, x: 33.85, y: 115.45}, 0)
        .wait(1)
        .to({scaleX: 1.0352, skewY: -11.3711, x: 33.8, y: 115.05}, 0)
        .wait(1)
        .to({scaleX: 1.0374, skewY: -12.0786, x: 33.7, y: 114.75}, 0)
        .wait(1)
        .to({scaleX: 1.0395, skewY: -12.763, y: 114.4}, 0)
        .wait(1)
        .to({scaleX: 1.0416, skewY: -13.4271, x: 33.65, y: 114.1}, 0)
        .wait(1)
        .to({scaleX: 1.0435, skewY: -14.0728, x: 33.55, y: 113.8}, 0)
        .wait(1)
        .to({scaleX: 1.0455, skewY: -14.7015, x: 33.5, y: 113.5}, 0)
        .wait(1)
        .to({scaleX: 1.0474, skewY: -15.3139, x: 33.45, y: 113.15}, 0)
        .wait(1)
        .to({scaleX: 1.0492, skewY: -15.9103, x: 33.4, y: 112.9}, 0)
        .wait(1)
        .to({scaleX: 1.051, skewY: -16.4904, x: 33.3, y: 112.6}, 0)
        .wait(1)
        .to({scaleX: 1.0528, skewY: -17.0532, x: 33.25, y: 112.35}, 0)
        .wait(1)
        .to({scaleX: 1.0544, skewY: -17.597, x: 33.15, y: 112.1}, 0)
        .wait(1)
        .to({scaleX: 1.056, skewY: -18.1178, x: 33.1, y: 111.8}, 0)
        .wait(1)
        .to({scaleX: 1.0576, skewY: -18.6082, y: 111.6}, 0)
        .wait(1)
        .to({scaleX: 1.0589, skewY: -19.0491, x: 33.05, y: 111.4}, 0)
        .wait(1)
        .to({regX: 17, regY: 10.3, scaleX: 1.0598, skewY: -19.3417, x: 17, y: 111.85}, 0)
        .wait(35)
        .to({scaleX: 1, skewY: 0, x: 18.45, y: 115.5}, 33)
        .wait(82),
    )

    // Calque_2
    this.instance_1 = new lib.brg1()
    this.instance_1.setTransform(107.65, 116.25, 1, 1, 0, 0, 0, 42.4, 11.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(40)
        .to({regX: 33.2, regY: 15.2, scaleX: 1.0048, skewY: 1.5026, x: 98.3, y: 119.6}, 0)
        .wait(1)
        .to({scaleX: 1.0082, skewY: 2.6112, x: 98.2, y: 119.2}, 0)
        .wait(1)
        .to({scaleX: 1.0115, skewY: 3.6401, x: 98.05, y: 118.9}, 0)
        .wait(1)
        .to({scaleX: 1.0146, skewY: 4.6268, x: 98, y: 118.5}, 0)
        .wait(1)
        .to({scaleX: 1.0177, skewY: 5.5858, x: 97.9, y: 118.2}, 0)
        .wait(1)
        .to({scaleX: 1.0206, skewY: 6.5245, x: 97.8, y: 117.85}, 0)
        .wait(1)
        .to({scaleX: 1.0236, skewY: 7.4473, x: 97.75, y: 117.5}, 0)
        .wait(1)
        .to({scaleX: 1.0264, skewY: 8.3566, x: 97.65, y: 117.2}, 0)
        .wait(1)
        .to({scaleX: 1.0292, skewY: 9.2382, x: 97.6, y: 116.9}, 0)
        .wait(1)
        .to({scaleX: 1.0318, skewY: 10.0635, x: 97.55, y: 116.6}, 0)
        .wait(1)
        .to({scaleX: 1.0343, skewY: 10.8459, x: 97.45, y: 116.3}, 0)
        .wait(1)
        .to({scaleX: 1.0366, skewY: 11.5948, x: 97.4, y: 116.05}, 0)
        .wait(1)
        .to({scaleX: 1.0389, skewY: 12.3162, y: 115.8}, 0)
        .wait(1)
        .to({scaleX: 1.0411, skewY: 13.014, x: 97.35, y: 115.6}, 0)
        .wait(1)
        .to({scaleX: 1.0433, skewY: 13.6912, x: 97.3, y: 115.3}, 0)
        .wait(1)
        .to({scaleX: 1.0454, skewY: 14.3497, x: 97.25, y: 115.1}, 0)
        .wait(1)
        .to({scaleX: 1.0474, skewY: 14.9907, y: 114.85}, 0)
        .wait(1)
        .to({scaleX: 1.0493, skewY: 15.6152, x: 97.2, y: 114.65}, 0)
        .wait(1)
        .to({scaleX: 1.0513, skewY: 16.2233, x: 97.15, y: 114.4}, 0)
        .wait(1)
        .to({scaleX: 1.0531, skewY: 16.8148, x: 97.1, y: 114.2}, 0)
        .wait(1)
        .to({scaleX: 1.0549, skewY: 17.3887, x: 97.05, y: 114}, 0)
        .wait(1)
        .to({scaleX: 1.0567, skewY: 17.9431, x: 97.1, y: 113.8}, 0)
        .wait(1)
        .to({scaleX: 1.0584, skewY: 18.4742, x: 97.05, y: 113.65}, 0)
        .wait(1)
        .to({scaleX: 1.0599, skewY: 18.9742, y: 113.45}, 0)
        .wait(1)
        .to({scaleX: 1.0614, skewY: 19.4239, x: 97, y: 113.25}, 0)
        .wait(1)
        .to({regX: 42.4, regY: 11.3, scaleX: 1.0623, skewY: 19.7222, x: 106.2, y: 112.6}, 0)
        .wait(35)
        .to({scaleX: 1, skewY: 0, x: 107.65, y: 116.25}, 33)
        .wait(82),
    )

    // BOUCHE
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CC816E")
      .s()
      .p(
        "AgDBmQiOgEhhhKQgmgcgTgfQgRgeAHgSQAHgQAUgCQAPgBApAHQCHAZBeACQBGACCLgUQBZgNAJAYQAHAUgPAeQgRAfglAcQhYBEiQAAIgTAAg",
      )
    this.shape.setTransform(67.4476, 43.6786, 0.225, 0.225)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAXQgggBgVgRQgJgFgEgHQgEgHACgEQABgEAEAAQAEAAAJABQAfAGAUABQAQAAAfgFQAUgDACAGQABAEgDAHQgEAGgIAHQgUAPghAAIgDAAg",
      )
    this.shape_1.setTransform(67.4417, 43.6966)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgEgIQgFgGACgFQACgEAEAAIAOADQAeAFAUABQARAAAegFQAUgEACAGQACAEgEAIQgEAGgIAHQgUAQghAAIgDAAg",
      )
    this.shape_2.setTransform(67.4417, 43.7001)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgFgIQgEgHACgEQABgFAFABIAOADQAeAFAVABQAQAAAfgFQAUgEACAGQABAEgDAIQgFAGgIAHQgUAQghAAIgDAAg",
      )
    this.shape_3.setTransform(67.442, 43.6937)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgFgIQgEgHABgFQABgFAFACIAQADQAdAGAVABQARAAAegGQAUgFACAGQABAFgDAIQgFAGgIAIQgUAPghAAIgDAAg",
      )
    this.shape_4.setTransform(67.4287, 43.6591)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAZQgggBgUgRQgKgHgFgIQgEgHABgFQABgFAFACIAQAEQAdAGAWAAQARAAAegGQAUgFABAGQABAFgDAIQgFAHgJAIQgTAPggAAIgEAAg",
      )
    this.shape_5.setTransform(67.427, 43.6493)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAaQgggBgUgRQgKgIgFgIQgFgIABgFQABgFAGACIAQAFQAeAGAVABQASAAAdgHQAUgGACAGQABAGgEAIQgFAHgJAIQgTAQggAAIgEAAg",
      )
    this.shape_6.setTransform(67.4267, 43.6361)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAaQgggBgUgRQgKgIgFgIQgFgIABgGQAAgGAGAEIASAFQAdAGAVABQATAAAdgIQAUgGABAHQABAFgEAJQgFAHgJAIQgTAQggAAIgEAAg",
      )
    this.shape_7.setTransform(67.4198, 43.6133)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAbQgggBgUgRQgKgJgFgIQgFgIAAgGQABgGAGAEQAGADAMADQAdAGAWABQATAAAcgIQAUgHABAHQABAFgEAJQgFAHgJAJQgTAQggAAIgEAAg",
      )
    this.shape_8.setTransform(67.4077, 43.5729)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAbQgggBgUgRQgKgJgFgIQgGgJABgGQAAgGAHAEQAGAEANADQAcAHAWAAQAUAAAcgIQAUgIABAHQAAAGgEAJQgFAHgJAKQgTAPggAAIgEAAg",
      )
    this.shape_9.setTransform(67.4201, 43.5608)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAcQgggBgTgRQgLgKgGgIQgFgJABgGQgBgHAHAFQAHAEANAEQAcAGAXABQATAAAcgJQAVgIAAAHQABAGgFAJQgFAIgKAJQgSAQggAAIgEAAg",
      )
    this.shape_10.setTransform(67.4252, 43.5357)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAdQgggBgTgSQgLgKgGgIQgFgJAAgHQAAgHAHAFQAHAFANAEQAcAHAXAAQAUAAAcgJQAUgJABAHQAAAHgEAJQgGAIgKAKQgSAQggAAIgEAAg",
      )
    this.shape_11.setTransform(67.4229, 43.5236)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAdQgggBgTgRQgLgKgGgJQgGgJABgHQgBgHAIAFQAHAGAOAEQAcAHAXAAQAUAAAbgKQAVgJAAAHQAAAHgEAJQgGAIgKALQgSAPggAAIgEAAg",
      )
    this.shape_12.setTransform(67.4231, 43.4819)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAeQgggBgTgRQgMgLgFgJQgGgKAAgHQgBgHAIAGQAHAGAPAEQAbAHAYAAQAUAAAbgKQAVgKAAAIQAAAGgFAKQgFAIgLALQgSAQggAAIgDAAg",
      )
    this.shape_13.setTransform(67.3984, 43.4694)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAeQgggBgTgRQgMgLgGgJQgGgKAAgIQgBgHAIAGQAIAHAPAFQAbAGAYABQAVgBAbgLQAUgJAAAHQAAAHgFAKQgFAIgLALQgSARggAAIgDgBg",
      )
    this.shape_14.setTransform(67.3944, 43.4519)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAfQgggBgTgRQgMgMgGgJQgGgKAAgIQgBgIAIAHQAIAHAQAFQAbAHAXAAQAWAAAagLQAVgLAAAIQgBAHgEAKQgGAJgLALQgSAQggAAIgDAAg",
      )
    this.shape_15.setTransform(67.3947, 43.4394)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAgQgggBgTgRQgMgMgGgKQgGgKgBgIQgBgIAJAHQAIAIAQAFQAbAHAYAAQAWAAAagMQAUgLAAAIQAAAHgFAKQgGAJgLAMQgSAQggAAIgDAAg",
      )
    this.shape_16.setTransform(67.3947, 43.3963)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAgQgggBgSgRQgNgMgGgKQgGgKgBgJQgBgIAJAIQAIAIARAFQAaAIAYAAQAXgBAagMQAUgMAAAIQgBAIgFAKQgGAJgLAMQgSAQggAAIgDAAg",
      )
    this.shape_17.setTransform(67.395, 43.3838)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAhQgggBgSgSQgNgMgGgKQgHgLgBgJQgBgJAJAJQAJAJARAGQAaAHAZAAQAXgBAZgMQAUgMAAAIQgBAHgFALQgGAJgMANQgRAQgfAAIgEAAg",
      )
    this.shape_18.setTransform(67.3654, 43.3528)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAiQgggBgSgSQgNgNgGgKQgHgLgBgJQgCgJAKAJQAJAJARAGQAaAIAZAAQAXgBAagNQAUgNgBAJQAAAHgGALQgGAKgMAMQgRARgfAAIgEAAg",
      )
    this.shape_19.setTransform(67.3654, 43.3338)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAiQgggBgSgRQgNgNgGgLQgHgLgCgJQgBgKAKAKQAJAKASAGQAaAIAZgBQAXAAAZgOQAUgNAAAIQgBAJgGAKQgGAKgMANQgRAQgfAAIgEAAg",
      )
    this.shape_20.setTransform(67.3658, 43.2964)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAjQgggBgSgSQgNgNgHgLQgHgLgBgKQgCgKAKALQAKAKASAGQAaAIAZAAQAYgBAZgOQAUgOgBAJQgBAIgGALQgGAKgMAOQgRAQgfAAIgEAAg",
      )
    this.shape_21.setTransform(67.3596, 43.2772)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAjQghgBgRgRQgNgOgHgLQgHgMgCgKQgCgKAKALQALALASAHQAZAHAaAAQAYgBAZgOQAUgOgBAIQgBAJgGALQgHAKgMAOQgQAQggAAIgDAAg",
      )
    this.shape_22.setTransform(67.3364, 43.2646)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAkQghgBgRgRQgNgPgHgLQgIgMgCgKQgCgKALALQALALATAHQAZAIAZAAQAZgBAYgPQAUgPgBAJQgBAJgGALQgHALgMAOQgQAQggAAIgDAAg",
      )
    this.shape_23.setTransform(67.337, 43.2451)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAkQghgBgRgRQgNgPgHgLQgIgMgCgLQgCgKALAMQALALATAIQAZAIAagBQAZgBAYgPQAUgPgBAJQgCAIgGAMQgHALgMAOQgQAQggAAIgDAAg",
      )
    this.shape_24.setTransform(67.337, 43.2078)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAlQghgBgQgRQgOgPgIgMQgHgMgCgLQgDgLALANQAMAMATAHQAZAIAaAAQAagBAXgQQAVgQgCAKQgBAJgHALQgHALgNAPQgQAQgfAAIgDAAg",
      )
    this.shape_25.setTransform(67.3491, 43.1881)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAmQgggBgRgSQgOgPgHgMQgIgNgCgLQgDgLAMANQALANAUAIQAZAIAagBQAagBAYgQQAUgQgBAJQgCAJgHAMQgHALgNAPQgQARgfAAIgEAAg",
      )
    this.shape_26.setTransform(67.3501, 43.1703)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAmQghgBgQgRQgOgQgIgMQgIgNgCgMQgDgLAMANQAMAOAUAIQAYAIAbgBQAbAAAWgRQAVgRgCAJQgCAKgGAMQgIALgNAQQgPARggAAIgDgBg",
      )
    this.shape_27.setTransform(67.3289, 43.1506)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAnQghgBgQgSQgOgQgIgMQgIgNgDgMQgDgMAMAOQANAOAVAJQAXAIAcgBQAbgBAWgRQAUgRgCAJQgCAKgGAMQgIAMgNAQQgPAQgfAAIgEAAg",
      )
    this.shape_28.setTransform(67.3206, 43.1009)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAoQghgBgQgSQgOgQgIgNQgJgNgCgMQgEgMANAOQANAPAVAIQAYAIAbAAQAbgBAWgSQAVgSgCAKQgCAKgHANQgIALgNAQQgPARgfAAIgEAAg",
      )
    this.shape_29.setTransform(67.3218, 43.081)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAoQghgBgPgRQgPgRgIgNQgJgOgDgMQgDgMANAPQANAPAVAJQAYAHAbAAQAcgBAWgSQAUgSgCAKQgCAJgHANQgIAMgOARQgOAQgfAAIgEAAg",
      )
    this.shape_30.setTransform(67.3218, 43.0686)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACApQghgBgPgRQgPgSgIgNQgJgOgDgMQgEgNANAQQAOAPAWAJQAXAIAcgBQAcAAAVgTQAVgTgDAKQgCALgHANQgIAMgOARQgOAQgfAAIgEAAg",
      )
    this.shape_31.setTransform(67.3015, 43.0487)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#CC816E")
      .s()
      .p(
        "AADApQghgBgPgRQgQgSgIgNQgJgOgDgNQgEgNAOAQQANAQAXAKQAXAHAcgBQAcAAAVgTQAVgTgDAKQgCAKgHANQgIANgPARQgOAQgfAAIgDAAg",
      )
    this.shape_32.setTransform(67.2941, 43.0113)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAqQgggBgQgSQgPgRgJgOQgIgOgEgNQgEgNAOAQQAOARAXAJQAXAIAcgBQAdgBAVgTQAUgUgCALQgDAKgIAOQgHAMgPASQgOAQgfAAIgEAAg",
      )
    this.shape_33.setTransform(67.2867, 42.991)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#CC816E")
      .s()
      .p(
        "AADApQghgBgPgRQgQgSgIgNQgJgOgDgNQgEgNANAQQAOAQAXAKQAXAHAcAAQAdgBAUgTQAVgUgDALQgCAKgHANQgIANgPARQgOARgfAAIgDgBg",
      )
    this.shape_34.setTransform(67.2929, 43.0037)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#CC816E")
      .s()
      .p(
        "AADApQghgBgQgRQgPgSgIgNQgJgOgDgNQgEgMAOAQQANAPAXAJQAWAIAdgBQAcAAAVgTQAUgTgCAKQgCAKgHAOQgIAMgOARQgPAQgfAAIgDAAg",
      )
    this.shape_35.setTransform(67.2979, 43.0286)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACApQghgBgPgSQgPgRgIgNQgJgOgDgMQgEgMANAPQAOAPAWAJQAXAIAcgBQAcAAAVgTQAVgTgDALQgCAKgHANQgIAMgOARQgOAQgfAAIgEAAg",
      )
    this.shape_36.setTransform(67.3015, 43.0361)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAoQghgBgPgRQgPgRgIgNQgJgOgDgMQgDgMANAPQANAPAWAJQAXAHAbAAQAcgBAWgSQAUgTgCAKQgCAKgHANQgIAMgOARQgOAQgfAAIgEAAg",
      )
    this.shape_37.setTransform(67.3218, 43.061)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAoQghgBgPgSQgPgQgIgNQgJgNgDgMQgDgMANAOQANAPAVAIQAYAIAbAAQAcgBAVgSQAVgSgCAKQgCAKgHAMQgIAMgOARQgOAQgfAAIgEAAg",
      )
    this.shape_38.setTransform(67.3049, 43.0811)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAnQghgBgQgRQgOgRgIgMQgIgOgDgLQgDgMAMAOQANAOAVAJQAXAIAcgBQAbAAAWgSQAUgSgBAKQgCAKgHAMQgIAMgNAQQgPAQggAAIgDAAg",
      )
    this.shape_39.setTransform(67.3261, 43.106)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAnQghgBgQgSQgOgQgIgMQgIgNgDgMQgDgLAMANQANAOAVAIQAXAJAcgBQAagBAXgRQAUgRgCAJQgCAKgGAMQgIAMgNAQQgPAQggAAIgDAAg",
      )
    this.shape_40.setTransform(67.3289, 43.1133)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAnQghgBgQgSQgOgQgIgMQgIgNgDgLQgDgMANAOQAMANAUAIQAYAJAbgBQAbgBAWgRQAVgRgCAKQgCAJgGAMQgIAMgNAPQgPARgfAAIgEAAg",
      )
    this.shape_41.setTransform(67.3049, 43.1382)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAmQghgBgQgSQgOgPgIgMQgIgNgCgLQgDgLAMANQAMANAUAIQAYAIAbgBQAaAAAXgRQAUgRgBAKQgCAJgHAMQgHALgNAQQgPAQggAAIgDAAg",
      )
    this.shape_42.setTransform(67.3251, 43.1507)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAmQghgBgQgSQgOgPgIgMQgIgNgCgLQgDgLAMANQAMANAUAHQAYAJAbgBQAagBAWgQQAVgQgCAJQgBAJgHAMQgHALgNAPQgPARggAAIgDAAg",
      )
    this.shape_43.setTransform(67.3251, 43.1756)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAlQghgBgRgRQgNgPgIgMQgHgMgCgLQgDgKAMAMQALAMATAHQAZAIAaAAQAZgBAYgQQAUgPgBAJQgCAJgGAMQgHAKgMAPQgQAQggAAIgDAAg",
      )
    this.shape_44.setTransform(67.3328, 43.1828)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAkQgggBgRgRQgOgPgHgLQgHgMgCgLQgDgKALAMQALALATAHQAZAIAaAAQAZgBAYgPQAUgPgBAJQgBAJgGALQgHALgNAOQgQAQgfAAIgEAAg",
      )
    this.shape_45.setTransform(67.3542, 43.2201)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAkQgggBgRgRQgOgPgHgLQgHgMgCgKQgCgKALALQAKALATAHQAZAIAaAAQAZgBAYgPQAUgPgBAJQgBAJgHALQgGALgNAOQgQAQgfAAIgEAAg",
      )
    this.shape_46.setTransform(67.3542, 43.2272)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#CC816E")
      .s()
      .p(
        "AACAjQghgBgRgRQgNgOgHgLQgIgMgBgKQgCgKAKALQALALASAHQAZAHAaAAQAZgBAYgOQAUgPgBAJQgBAJgGALQgHAKgMAOQgQAQggAAIgDAAg",
      )
    this.shape_47.setTransform(67.3364, 43.2646)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAjQgggBgSgRQgNgOgHgLQgHgMgBgJQgCgKAKAKQAKALASAGQAaAIAZAAQAYgBAZgOQAUgOgBAJQgBAIgGALQgGAKgMAOQgRAQgfAAIgEAAg",
      )
    this.shape_48.setTransform(67.3613, 43.2589)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAjQgggBgSgSQgNgNgHgLQgHgLgBgKQgCgJAKAKQAKAKASAGQAaAIAZAAQAYgBAYgOQAVgNgBAIQgBAIgGALQgGAKgMANQgRARgfAAIgEAAg",
      )
    this.shape_49.setTransform(67.3607, 43.2963)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAiQgggBgSgRQgNgNgGgLQgHgLgCgJQgBgKAKAKQAJAKASAGQAaAIAZgBQAXAAAZgOQAUgNAAAJQgBAIgGAKQgGAKgMANQgRAQgfAAIgEAAg",
      )
    this.shape_50.setTransform(67.3658, 43.2964)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAiQgggBgSgSQgNgNgGgKQgHgLgBgJQgCgJAKAJQAJAJARAGQAaAIAZAAQAYgBAZgNQAUgNgBAIQAAAIgGALQgGAKgMAMQgRARgfAAIgEAAg",
      )
    this.shape_51.setTransform(67.3654, 43.3338)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAhQgggBgSgRQgNgNgGgKQgHgLgBgJQgBgJAJAJQAJAJARAGQAaAIAZgBQAXAAAZgNQAVgMgBAIQgBAIgFAKQgGAKgMAMQgRAQggAAIgDAAg",
      )
    this.shape_52.setTransform(67.3904, 43.3278)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAhQgggBgSgSQgNgMgGgKQgHgLgBgJQgBgIAJAIQAJAJARAFQAaAIAZAAQAWgBAagMQAUgMAAAIQgBAHgFALQgGAJgMAMQgRARggAAIgDAAg",
      )
    this.shape_53.setTransform(67.3706, 43.3652)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAgQgggBgTgRQgMgMgGgKQgGgKgBgIQgBgJAJAIQAIAIAQAFQAbAHAYAAQAWAAAagMQAUgLAAAIQAAAHgFAKQgGAJgLAMQgSAQggAAIgDAAg",
      )
    this.shape_54.setTransform(67.3893, 43.3839)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAfQgggBgTgRQgMgMgGgJQgGgKgBgIQgBgIAJAHQAIAHAQAFQAbAHAYABQAWgBAagLQAUgLAAAIQAAAHgFAKQgGAJgLALQgSAQgfAAIgEAAg",
      )
    this.shape_55.setTransform(67.3697, 43.4213)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAfQgggBgTgRQgMgMgGgJQgGgKAAgIQgBgIAIAHQAIAHAQAFQAbAHAXAAQAWAAAagLQAVgLAAAIQgBAHgFAKQgFAJgLALQgSAQggAAIgDAAg",
      )
    this.shape_56.setTransform(67.3947, 43.4145)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAeQgggBgTgRQgMgLgGgJQgGgKAAgIQgBgHAIAGQAIAHAPAFQAbAGAYABQAVgBAbgLQAUgKAAAIQAAAHgFAKQgFAIgLALQgSARggAAIgDgBg",
      )
    this.shape_57.setTransform(67.3944, 43.4519)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#CC816E")
      .s()
      .p(
        "AABAeQgggBgTgRQgMgLgFgJQgGgKgBgHQAAgIAIAHQAHAGAPAEQAbAHAYAAQAVAAAbgKQAUgKAAAHQAAAHgFAKQgFAIgLALQgSAQggAAIgDAAg",
      )
    this.shape_58.setTransform(67.3985, 43.452)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAeQgfgBgTgSQgMgKgFgJQgGgJAAgIQgBgHAIAGQAHAGAPAEQAbAHAXAAQAVAAAbgKQAUgJABAHQAAAHgFAJQgFAIgLALQgSAQggAAIgEAAg",
      )
    this.shape_59.setTransform(67.3984, 43.4893)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAdQgggBgTgRQgLgKgGgJQgFgJAAgHQgBgHAIAFQAHAGAOAEQAcAHAXAAQAUAAAbgKQAVgJAAAHQAAAHgEAJQgGAIgKALQgSAPggAAIgEAAg",
      )
    this.shape_60.setTransform(67.4234, 43.4819)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAdQgggBgTgSQgLgKgFgIQgGgJAAgHQAAgHAHAFQAHAFAOAEQAbAHAXAAQAUAAAcgJQAUgJABAHQAAAHgEAJQgGAIgKAKQgSAQggAAIgEAAg",
      )
    this.shape_61.setTransform(67.4, 43.5191)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAcQgggBgTgRQgLgKgGgIQgFgJAAgGQAAgHAHAFQAHAEANAEQAcAHAXAAQAUAAAcgJQAUgIAAAHQABAGgFAJQgFAIgKAKQgSAPggAAIgEAAg",
      )
    this.shape_62.setTransform(67.4004, 43.5237)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAcQgggBgTgSQgLgJgFgIQgGgJABgGQAAgHAGAFQAHAEANADQAcAHAXAAQATAAAcgJQAUgHABAHQABAGgFAIQgFAIgKAKQgSAQggAAIgEAAg",
      )
    this.shape_63.setTransform(67.4254, 43.5607)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAbQgggBgUgRQgKgJgFgIQgFgIAAgGQABgGAGADQAGAEAMADQAdAGAWABQATAAAdgIQAUgHABAGQAAAGgEAJQgFAHgJAJQgTAQggAAIgEAAg",
      )
    this.shape_64.setTransform(67.4255, 43.5634)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAbQgggBgUgRQgKgJgFgIQgFgIABgGQAAgGAGAEQAGADAMADQAdAGAWABQASgBAdgHQAUgHABAHQABAGgEAIQgFAHgJAJQgTAQggAAIgEAAg",
      )
    this.shape_65.setTransform(67.4198, 43.5883)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAaQgggBgUgRQgKgIgFgIQgFgIABgGQABgFAFADIASAGQAdAFAVABQATAAAdgHQAUgGABAGQABAGgEAIQgFAHgJAIQgTAQggAAIgEAAg",
      )
    this.shape_66.setTransform(67.4437, 43.5999)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAaQgggBgUgRQgKgIgFgIQgFgIABgFQABgGAGADIAQAFQAeAGAVABQASAAAdgHQAUgGACAGQABAGgEAIQgFAHgJAIQgTAQggAAIgEAAg",
      )
    this.shape_67.setTransform(67.4267, 43.6248)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAZQgggBgUgRQgKgHgFgIQgFgHACgGQAAgFAGACIAQAFQAeAGAVABQARgBAegGQAUgGABAHQABAFgDAIQgFAHgJAIQgTAPggAAIgEAAg",
      )
    this.shape_68.setTransform(67.4188, 43.6243)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAZQgggBgVgRQgJgHgFgIQgEgHABgFQABgFAFACIAQAEQAdAGAVAAQASAAAegGQAUgFABAGQABAFgDAIQgFAHgIAHQgUAQghAAIgDAAg",
      )
    this.shape_69.setTransform(67.4424, 43.6492)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgFgIQgEgHABgFQABgFAFACIAPADQAeAGAVABQARAAAegGQAUgFACAGQABAFgDAIQgFAGgIAIQgUAPghAAIgDAAg",
      )
    this.shape_70.setTransform(67.4287, 43.6605)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgFgIQgEgHACgEQABgFAFABIAOADQAeAGAVAAQARAAAegFQAUgEACAFQABAFgDAIQgFAGgIAHQgUAQghAAIgDAAg",
      )
    this.shape_71.setTransform(67.442, 43.6855)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggBgVgRQgJgGgEgIQgFgGACgFQABgEAFAAIAOADQAeAFAUABQARAAAfgFQAUgEABAGQACAFgEAHQgEAGgIAHQgUAQghAAIgDAAg",
      )
    this.shape_72.setTransform(67.4417, 43.6754)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#CC816E")
      .s()
      .p(
        "AAAAYQgggCgVgQQgJgHgEgHQgEgHABgEQACgEAEAAIAOACQAeAGAUAAQAQAAAfgEQAUgEACAGQABAEgDAIQgEAGgIAGQgUARghAAIgDAAg",
      )
    this.shape_73.setTransform(67.442, 43.7003)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}]})
        .to({state: [{t: this.shape_1}]}, 21)
        .to({state: [{t: this.shape_2}]}, 1)
        .to({state: [{t: this.shape_3}]}, 1)
        .to({state: [{t: this.shape_4}]}, 1)
        .to({state: [{t: this.shape_5}]}, 1)
        .to({state: [{t: this.shape_6}]}, 1)
        .to({state: [{t: this.shape_7}]}, 1)
        .to({state: [{t: this.shape_8}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_10}]}, 1)
        .to({state: [{t: this.shape_11}]}, 1)
        .to({state: [{t: this.shape_12}]}, 1)
        .to({state: [{t: this.shape_13}]}, 1)
        .to({state: [{t: this.shape_14}]}, 1)
        .to({state: [{t: this.shape_15}]}, 1)
        .to({state: [{t: this.shape_16}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_18}]}, 1)
        .to({state: [{t: this.shape_19}]}, 1)
        .to({state: [{t: this.shape_20}]}, 1)
        .to({state: [{t: this.shape_21}]}, 1)
        .to({state: [{t: this.shape_22}]}, 1)
        .to({state: [{t: this.shape_23}]}, 1)
        .to({state: [{t: this.shape_24}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_26}]}, 1)
        .to({state: [{t: this.shape_27}]}, 1)
        .to({state: [{t: this.shape_28}]}, 1)
        .to({state: [{t: this.shape_29}]}, 1)
        .to({state: [{t: this.shape_30}]}, 1)
        .to({state: [{t: this.shape_31}]}, 1)
        .to({state: [{t: this.shape_32}]}, 1)
        .to({state: [{t: this.shape_33}]}, 1)
        .to({state: [{t: this.shape_33}]}, 33)
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_25}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_17}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_60}]}, 1)
        .to({state: [{t: this.shape_61}]}, 1)
        .to({state: [{t: this.shape_62}]}, 1)
        .to({state: [{t: this.shape_63}]}, 1)
        .to({state: [{t: this.shape_9}]}, 1)
        .to({state: [{t: this.shape_64}]}, 1)
        .to({state: [{t: this.shape_65}]}, 1)
        .to({state: [{t: this.shape_66}]}, 1)
        .to({state: [{t: this.shape_67}]}, 1)
        .to({state: [{t: this.shape_68}]}, 1)
        .to({state: [{t: this.shape_69}]}, 1)
        .to({state: [{t: this.shape_70}]}, 1)
        .to({state: [{t: this.shape_71}]}, 1)
        .to({state: [{t: this.shape_72}]}, 1)
        .to({state: [{t: this.shape_73}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
        .wait(85),
    )

    // Calque_1
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#000000")
      .s()
      .p(
        "AgYA7QglgLgBggIAAgDQgBgdAVgWQAJgLANgGQARgJAUADQAWADAKAPIACADQAPAVgEAWQgEAVgTAUIgDADQgRAQgVAAQgKAAgMgEg",
      )
    this.shape_74.setTransform(75.7137, 26.273, 0.225, 0.225)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA4QgigLgBgeIAAgDQgBgcAUgUQAJgKALgGQAQgIATACQAUADAKAOIACADQAOAUgEAVQgDAUgSASIgEADQgPAPgUAAQgKAAgLgDg",
      )
    this.shape_75.setTransform(57.7021, 27.5698, 0.225, 0.225)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#CC816E")
      .s()
      .p("AgvAJQgKgOABgPQACgOALgCQAMAVAuAZQAXANATAJQgWAFgSAAQgrAAgVgcg")
    this.shape_76.setTransform(75.3598, 30.7936, 0.225, 0.225)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#CC816E")
      .s()
      .p("AhDAdIA2gUQA4gZAQgYQANAJgFASQgEASgTAOQgaAWggAAQgZAAgcgMg")
    this.shape_77.setTransform(57.9104, 31.4026, 0.225, 0.225)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#CC816E")
      .s()
      .p(
        "AiGEmQg/hUAehAQAKgVASgPQAJgIAHgEQgnAmASBDQARBAAlAIQAmAIBRglQBXgoAIgoQAKgvh3moQgHgaAbA/QAdBDAgBVQBcD1gMA2QgOBAiAAtQg2ATgtACIgGAAQgsAAgTgTg",
      )
    this.shape_78.setTransform(68.2982, 31.1051, 0.225, 0.225)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#E5DFDA")
      .s()
      .p("AADBgQjNgkgOgcQgQggAEg1QAEg0AUgPQAYgSCYApQClAsBIBBQAVAaAAAsQAAArgVACQhngNhngSg")
    this.shape_79.setTransform(74.9518, 22.71, 0.225, 0.225)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#E5DFDA")
      .s()
      .p("AjPB/QgVgCgBgrQAAgsAWgaQBIhBCkgsQCYgpAYASQAUAPAEA0QAEA1gQAgQgOAdjNAkIjNAeIAAAAg")
    this.shape_80.setTransform(58.1216, 23.3875, 0.225, 0.225)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#E5DFDA")
      .s()
      .p(
        "AsZDhQAAjeAYjNQgmgWglgZQhJgxgBgLQAfg9BzgsQA7gWA0gKQghgKgfgMQg/gYAGgNQAxgwBugyQBvgyCMglQFOhXEKAqQFQgPCkDgQA7BQAYBgQAVBOgJAtQA8ApAXCMQAUB4gMCnQgLCZgfB8QgfB+ghAVQgfg2gMlNIgFlBQgkgMgkgOQhIgbgBgLQgBgKAHgaIAIgYQkog4mwA5QiHASiEAbIhpAXIAAA0QgPAHgWADQgsAHgigRQARAwg0F7QgaC9geC0QhzhRgBm8g",
      )
    this.shape_81.setTransform(64.0674, 16.8499, 0.225, 0.225)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "ABbQ0QpJgQixnmQg3iYgIi0QgCg5ADg0IADgqQhHltAXjpQAYjjB1iAQBth4DSgzQC3grEyAAQERAACQBZQCABPArChQAiB9gLDdQgGCAgWEYQgNEbgPB/QgaDXg5CFQhECgh9BMQh7BMi7AAIgxgBg",
      )
    this.shape_82.setTransform(65.264, 31.6591, 0.225, 0.225)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AhBDwQgzgwgdhbQgahQgBhXQgChUAWgwQAjhOBjgJQAwgFAqALIAgBUQAjBlASBXQA4ESiNATQgMACgMAAQg/AAgygwg",
      )
    this.shape_83.setTransform(47.6775, 32.5797, 0.225, 0.225)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AhHEeQiNgTA4kSQAShXAjhlIAghUIAbgFQAigEAdADQBjAJAjBOQAVAwgBBVQgCBWgZBRQgdBagzAxQgyAvg/AAQgMAAgMgCg",
      )
    this.shape_84.setTransform(83.6577, 31.396, 0.225, 0.225)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#CC816E")
      .s()
      .p("AA7CYQiQgJirhAIiNg/IghiZINdgPIgIDAQghAgg+AdQhsA0h8AAIglgBg")
    this.shape_85.setTransform(66.3567, 55.5298, 0.225, 0.225)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AlBILQh8g9hKhoQhEhfgJhoQgJhmAxhDQAxhEAGhnIACmaIPaABQAFE5ARBwQAMBKAjA2QAxBKgIBqQgHBthABiQhIBth7A+QiMBHi7AAQi3AAiOhFg",
      )
    this.shape_86.setTransform(66.6785, 57.3333, 0.225, 0.225)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#1D3F72")
      .s()
      .p(
        "EgPWAurQmLgnjFhCQkUhcg1izQgahYAFhqQAEhygJgnQgpizAljxQAMhRAgiiQAnjEAShjQBHmWAUmoQAbpGg+rPQgRjOhAk/QhVmrgJg9Qgpj/AUiWQAXi5B1hZQDTijGOiLQF0iCEAgRQElgVDCgHQFngNDyATQFcAaFtB6QE7BpCqB1QBeBAAhDWQAcC1gME/QgIDOgkGuQgnHZgLDRQgeI2BFJ4QAZDjArEaIBHG/QBLHhgQDYQgUEmiyCAQiLBkimAjQiFAdjHgHQj1gQiMgGQj9gMjQARQimAOi+AcQjFAfhdAMQi2AYi2AAQiGAAiGgNg",
      )
    this.shape_87.setTransform(67.5414, 123.7371, 0.225, 0.225)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#1D3F72")
      .s()
      .p(
        "Am6RbQg2gfguiDQgehXggiXQhzokBQoUQAnj/BQjHQBSjNB1h5QDOB7DED3QCxDdCREeQCFEHBKD6QBJD4gLCUQgPDIicBlQiNBbluBIQi1AkhOAEIgfABQhbAAg3gfg",
      )
    this.shape_88.setTransform(112.7541, 90.5346, 0.225, 0.225)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#1D3F72")
      .s()
      .p(
        "AJCRbQgrgehJgGQg1gFhnAGQiZAKgmABQh1ADhjgMQkQgjiOhrQiWhygPjKQgLiTBLjyQBMjyCLkCQCUkUC0jXQDHjxDOh7QDtD1BRIWQBRIUh0IkQgMA5ALDOQAEBIgGAZQgFAWgNAAQgHAAgJgGg",
      )
    this.shape_89.setTransform(20.4406, 91.1864, 0.225, 0.225)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#D84A12")
      .s()
      .p(
        "AAMBmQhggQhJgqQhTgvgohMQgDgHACgIQADgIAGgEQAIgEAIADQAHACAEAHQA9ByCmAnQCTAiCAgpQAIgCAHADQAHAEADAIQADAIgEAHQgEAIgIACQg2AShCAEIgpABQgwAAgwgHg",
      )
    this.shape_90.setTransform(79.1418, 301.3225, 0.225, 0.225)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
          ],
        })
        .wait(215),
    )

    // MOLLET
    this.instance_2 = new lib.mol()
    this.instance_2.setTransform(48.2, 263, 1, 1, 52.999, 0, 0, 7.4, 0.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({regX: 22.4, regY: 10.9, rotation: 48.7049, x: 46.75, y: 279.05}, 0)
        .wait(1)
        .to({rotation: 45.5798, x: 45.4, y: 277.2}, 0)
        .wait(1)
        .to({rotation: 42.7324, x: 44.1, y: 275.45}, 0)
        .wait(1)
        .to({rotation: 40.0658, x: 43, y: 273.75}, 0)
        .wait(1)
        .to({rotation: 37.5462, x: 41.8, y: 272.15}, 0)
        .wait(1)
        .to({rotation: 35.1608, x: 40.75, y: 270.6}, 0)
        .wait(1)
        .to({rotation: 32.9072, x: 39.75, y: 269.1}, 0)
        .wait(1)
        .to({rotation: 30.7904, x: 38.75, y: 267.65}, 0)
        .wait(1)
        .to({rotation: 28.822, x: 37.85, y: 266.35}, 0)
        .wait(1)
        .to({rotation: 27.0216, x: 37, y: 265.1}, 0)
        .wait(1)
        .to({rotation: 25.4195, x: 36.25, y: 263.95}, 0)
        .wait(1)
        .to({rotation: 23.9981, x: 35.55, y: 262.95}, 0)
        .wait(1)
        .to({rotation: 22.6248, x: 34.95, y: 261.95}, 0)
        .wait(1)
        .to({rotation: 21.2907, x: 34.25, y: 261}, 0)
        .wait(1)
        .to({rotation: 19.9942, x: 33.65, y: 260.05}, 0)
        .wait(1)
        .to({rotation: 18.7337, x: 33, y: 259.1}, 0)
        .wait(1)
        .to({rotation: 17.5081, x: 32.4, y: 258.2}, 0)
        .wait(1)
        .to({rotation: 16.3164, x: 31.85, y: 257.3}, 0)
        .wait(1)
        .to({rotation: 15.1578, x: 31.25, y: 256.4}, 0)
        .wait(1)
        .to({rotation: 14.0315, x: 30.7, y: 255.6}, 0)
        .wait(1)
        .to({rotation: 12.9373, x: 30.1, y: 254.7}, 0)
        .wait(1)
        .to({rotation: 11.8747, x: 29.55, y: 253.9}, 0)
        .wait(1)
        .to({rotation: 10.8436, x: 29.05, y: 253.1}, 0)
        .wait(1)
        .to({rotation: 9.8442, x: 28.5, y: 252.4}, 0)
        .wait(1)
        .to({rotation: 8.8767, x: 28, y: 251.6}, 0)
        .wait(1)
        .to({rotation: 7.9417, x: 27.5, y: 250.9}, 0)
        .wait(1)
        .to({rotation: 7.0398, x: 27, y: 250.15}, 0)
        .wait(1)
        .to({rotation: 6.1722, x: 26.55, y: 249.5}, 0)
        .wait(1)
        .to({rotation: 5.3402, x: 26.1, y: 248.85}, 0)
        .wait(1)
        .to({rotation: 4.5457, x: 25.7, y: 248.2}, 0)
        .wait(1)
        .to({rotation: 3.7912, x: 25.25, y: 247.65}, 0)
        .wait(1)
        .to({rotation: 3.0798, x: 24.8, y: 247.05}, 0)
        .wait(1)
        .to({rotation: 2.4157, x: 24.5, y: 246.5}, 0)
        .wait(1)
        .to({rotation: 1.8046, x: 24.15, y: 246}, 0)
        .wait(1)
        .to({rotation: 1.2541, x: 23.85, y: 245.55}, 0)
        .wait(1)
        .to({rotation: 0.7753, x: 23.55, y: 245.15}, 0)
        .wait(1)
        .to({rotation: 0.385, x: 23.35, y: 244.85}, 0)
        .wait(1)
        .to({rotation: 0.1101, x: 23.2, y: 244.6}, 0)
        .wait(1)
        .to({regX: 7.3, regY: 0.2, rotation: 0, x: 8.1, y: 233.8}, 0)
        .wait(61)
        .to({x: 7.3}, 0)
        .wait(1)
        .to({regX: 22.4, regY: 10.9, rotation: 0.8556, x: 22.9, y: 245.2}, 0)
        .wait(1)
        .to({rotation: 1.648, x: 23.35, y: 245.8}, 0)
        .wait(1)
        .to({rotation: 2.3953, x: 23.8, y: 246.45}, 0)
        .wait(1)
        .to({rotation: 3.1085, x: 24.15, y: 247}, 0)
        .wait(1)
        .to({rotation: 3.7949, x: 24.6, y: 247.6}, 0)
        .wait(1)
        .to({rotation: 4.4598, x: 24.95, y: 248.05}, 0)
        .wait(1)
        .to({rotation: 5.107, x: 25.3, y: 248.6}, 0)
        .wait(1)
        .to({rotation: 5.7394, x: 25.65, y: 249.1}, 0)
        .wait(1)
        .to({rotation: 6.3594, x: 26, y: 249.6}, 0)
        .wait(1)
        .to({rotation: 6.969, x: 26.4, y: 250.05}, 0)
        .wait(1)
        .to({rotation: 7.5697, x: 26.65, y: 250.55}, 0)
        .wait(1)
        .to({rotation: 8.1628, x: 26.95, y: 251.05}, 0)
        .wait(1)
        .to({rotation: 8.7496, x: 27.35, y: 251.45}, 0)
        .wait(1)
        .to({rotation: 9.3311, x: 27.65, y: 251.95}, 0)
        .wait(1)
        .to({rotation: 9.9083, x: 27.9, y: 252.4}, 0)
        .wait(1)
        .to({rotation: 10.4821, x: 28.25, y: 252.8}, 0)
        .wait(1)
        .to({rotation: 11.0533, x: 28.55, y: 253.25}, 0)
        .wait(1)
        .to({rotation: 11.6227, x: 28.85, y: 253.7}, 0)
        .wait(1)
        .to({rotation: 12.1911, x: 29.2, y: 254.15}, 0)
        .wait(1)
        .to({rotation: 12.7595, x: 29.5, y: 254.6}, 0)
        .wait(1)
        .to({rotation: 13.3286, x: 29.8, y: 255}, 0)
        .wait(1)
        .to({rotation: 13.8993, x: 30.1, y: 255.5}, 0)
        .wait(1)
        .to({rotation: 14.4728, x: 30.4, y: 255.9}, 0)
        .wait(1)
        .to({rotation: 15.0501, x: 30.7, y: 256.35}, 0)
        .wait(1)
        .to({rotation: 15.6327, x: 30.95, y: 256.8}, 0)
        .wait(1)
        .to({rotation: 16.2221, x: 31.3, y: 257.2}, 0)
        .wait(1)
        .to({rotation: 16.8203, x: 31.6, y: 257.7}, 0)
        .wait(1)
        .to({rotation: 17.43, x: 31.9, y: 258.1}, 0)
        .wait(1)
        .to({rotation: 18.0546, x: 32.2, y: 258.55}, 0)
        .wait(1)
        .to({rotation: 18.6989, x: 32.55, y: 259.05}, 0)
        .wait(1)
        .to({rotation: 19.3704, x: 32.95, y: 259.6}, 0)
        .wait(1)
        .to({rotation: 20.0809, x: 33.25, y: 260.1}, 0)
        .wait(1)
        .to({rotation: 20.8368, x: 33.65, y: 260.65}, 0)
        .wait(1)
        .to({rotation: 21.6031, x: 34.05, y: 261.2}, 0)
        .wait(1)
        .to({rotation: 22.3769, x: 34.4, y: 261.8}, 0)
        .wait(1)
        .to({rotation: 23.1582, x: 34.8, y: 262.3}, 0)
        .wait(1)
        .to({rotation: 23.9472, x: 35.2, y: 262.9}, 0)
        .wait(1)
        .to({rotation: 24.7442, x: 35.6, y: 263.5}, 0)
        .wait(1)
        .to({rotation: 25.5492, x: 35.95, y: 264.05}, 0)
        .wait(1)
        .to({rotation: 26.3625, x: 36.35, y: 264.6}, 0)
        .wait(1)
        .to({rotation: 27.1842, x: 36.8, y: 265.2}, 0)
        .wait(1)
        .to({rotation: 28.0145, x: 37.2, y: 265.7}, 0)
        .wait(1)
        .to({rotation: 28.8536, x: 37.55, y: 266.35}, 0)
        .wait(1)
        .to({rotation: 29.7017, x: 38, y: 266.9}, 0)
        .wait(1)
        .to({rotation: 30.5589, x: 38.4, y: 267.55}, 0)
        .wait(1)
        .to({rotation: 31.4254, x: 38.75, y: 268.1}, 0)
        .wait(1)
        .to({rotation: 32.3014, x: 39.25, y: 268.65}, 0)
        .wait(1)
        .to({rotation: 33.1871, x: 39.65, y: 269.25}, 0)
        .wait(1)
        .to({rotation: 34.0825, x: 40.05, y: 269.9}, 0)
        .wait(1)
        .to({rotation: 34.9879, x: 40.5, y: 270.5}, 0)
        .wait(1)
        .to({rotation: 35.9034, x: 40.9, y: 271.1}, 0)
        .wait(1)
        .to({rotation: 36.8291, x: 41.35, y: 271.7}, 0)
        .wait(1)
        .to({rotation: 37.765, x: 41.75, y: 272.25}, 0)
        .wait(1)
        .to({rotation: 38.7114, x: 42.25, y: 272.9}, 0)
        .wait(1)
        .to({rotation: 39.6681, x: 42.65, y: 273.5}, 0)
        .wait(1)
        .to({rotation: 40.6353, x: 43.1, y: 274.1}, 0)
        .wait(1)
        .to({rotation: 41.6129, x: 43.55, y: 274.75}, 0)
        .wait(1)
        .to({rotation: 42.6009, x: 44, y: 275.3}, 0)
        .wait(1)
        .to({rotation: 43.5992, x: 44.45, y: 276}, 0)
        .wait(1)
        .to({rotation: 44.6076, x: 44.9, y: 276.6}, 0)
        .wait(1)
        .to({rotation: 45.6259, x: 45.35, y: 277.15}, 0)
        .wait(1)
        .to({rotation: 46.6539, x: 45.8, y: 277.85}, 0)
        .wait(1)
        .to({rotation: 47.6911, x: 46.3, y: 278.45}, 0)
        .wait(1)
        .to({rotation: 48.7373, x: 46.75, y: 279.05}, 0)
        .wait(1)
        .to({rotation: 49.7918, x: 47.25, y: 279.65}, 0)
        .wait(1)
        .to({rotation: 50.854, x: 47.7, y: 280.25}, 0)
        .wait(1)
        .to({rotation: 51.9234, x: 48.15, y: 280.85}, 0)
        .wait(1)
        .to({regX: 7.4, regY: 0.1, rotation: 52.999, x: 48.2, y: 263}, 0)
        .wait(47),
    )

    // CUISSE
    this.instance_3 = new lib.cuis()
    this.instance_3.setTransform(56.95, 175.65, 1, 1.4207, -21.2609, 0, 0, 56.6, 3.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({regX: 39.4, regY: 36.5, scaleY: 1.3866, rotation: -19.5383, x: 56.05, y: 224.4}, 0)
        .wait(1)
        .to({scaleY: 1.3618, rotation: -18.2847, x: 54.65, y: 223.6}, 0)
        .wait(1)
        .to({scaleY: 1.3392, rotation: -17.1424, x: 53.5, y: 222.8}, 0)
        .wait(1)
        .to({scaleY: 1.3181, rotation: -16.0727, x: 52.35, y: 222.1}, 0)
        .wait(1)
        .to({scaleY: 1.298, rotation: -15.0619, x: 51.4, y: 221.3}, 0)
        .wait(1)
        .to({scaleY: 1.2791, rotation: -14.105, x: 50.5, y: 220.6}, 0)
        .wait(1)
        .to({scaleY: 1.2612, rotation: -13.201, x: 49.6, y: 219.9}, 0)
        .wait(1)
        .to({scaleY: 1.2444, rotation: -12.3518, x: 48.85, y: 219.2}, 0)
        .wait(1)
        .to({scaleY: 1.2288, rotation: -11.5621, x: 48.15, y: 218.6}, 0)
        .wait(1)
        .to({scaleY: 1.2145, rotation: -10.8399, x: 47.5, y: 218.05}, 0)
        .wait(1)
        .to({scaleY: 1.2018, rotation: -10.1972, x: 46.95, y: 217.45}, 0)
        .wait(1)
        .to({scaleY: 1.1905, rotation: -9.627, x: 46.45, y: 217}, 0)
        .wait(1)
        .to({scaleY: 1.1796, rotation: -9.0761, x: 46, y: 216.55}, 0)
        .wait(1)
        .to({scaleY: 1.169, rotation: -8.5409, x: 45.55, y: 216.1}, 0)
        .wait(1)
        .to({scaleY: 1.1587, rotation: -8.0208, x: 45.1, y: 215.65}, 0)
        .wait(1)
        .to({scaleY: 1.1487, rotation: -7.5152, x: 44.75, y: 215.15}, 0)
        .wait(1)
        .to({scaleY: 1.139, rotation: -7.0235, x: 44.35, y: 214.75}, 0)
        .wait(1)
        .to({scaleY: 1.1295, rotation: -6.5454, x: 44, y: 214.3}, 0)
        .wait(1)
        .to({scaleY: 1.1203, rotation: -6.0806, x: 43.65, y: 213.95}, 0)
        .wait(1)
        .to({scaleY: 1.1114, rotation: -5.6288, x: 43.3, y: 213.5}, 0)
        .wait(1)
        .to({scaleY: 1.1027, rotation: -5.1899, x: 43, y: 213.15}, 0)
        .wait(1)
        .to({scaleY: 1.0943, rotation: -4.7636, x: 42.65, y: 212.75}, 0)
        .wait(1)
        .to({scaleY: 1.0861, rotation: -4.35, x: 42.4, y: 212.35}, 0)
        .wait(1)
        .to({scaleY: 1.0782, rotation: -3.9491, x: 42.1, y: 212}, 0)
        .wait(1)
        .to({scaleY: 1.0704, rotation: -3.561, x: 41.85, y: 211.6}, 0)
        .wait(1)
        .to({scaleY: 1.0631, rotation: -3.1859, x: 41.6, y: 211.25}, 0)
        .wait(1)
        .to({scaleY: 1.0559, rotation: -2.8241, x: 41.35, y: 210.9}, 0)
        .wait(1)
        .to({scaleY: 1.049, rotation: -2.476, x: 41.1, y: 210.6}, 0)
        .wait(1)
        .to({scaleY: 1.0424, rotation: -2.1423, x: 40.85, y: 210.3}, 0)
        .wait(1)
        .to({scaleY: 1.0361, rotation: -1.8235, x: 40.7, y: 210}, 0)
        .wait(1)
        .to({scaleY: 1.0301, rotation: -1.5209, x: 40.5, y: 209.7}, 0)
        .wait(1)
        .to({scaleY: 1.0245, rotation: -1.2355, x: 40.3, y: 209.45}, 0)
        .wait(1)
        .to({scaleY: 1.0192, rotation: -0.9691, x: 40.2, y: 209.2}, 0)
        .wait(1)
        .to({scaleY: 1.0143, rotation: -0.7239, x: 40, y: 208.9}, 0)
        .wait(1)
        .to({scaleY: 1.01, rotation: -0.5031, x: 39.85, y: 208.7}, 0)
        .wait(1)
        .to({scaleY: 1.0062, rotation: -0.311, x: 39.75, y: 208.5}, 0)
        .wait(1)
        .to({scaleY: 1.0031, rotation: -0.1544, x: 39.65, y: 208.35}, 0)
        .wait(1)
        .to({scaleY: 1.0009, rotation: -0.0442, x: 39.6, y: 208.25}, 0)
        .wait(1)
        .to({regX: 56.7, regY: 3.2, scaleY: 1, rotation: 0, x: 56.85, y: 175.2}, 0)
        .wait(62)
        .to({regX: 39.4, regY: 36.5, scaleY: 1.0068, rotation: -0.3432, x: 39.7, y: 208.8}, 0)
        .wait(1)
        .to({scaleY: 1.0131, rotation: -0.6611, x: 39.95, y: 209.1}, 0)
        .wait(1)
        .to({scaleY: 1.019, rotation: -0.9609, x: 40.1, y: 209.45}, 0)
        .wait(1)
        .to({scaleY: 1.0247, rotation: -1.247, x: 40.25, y: 209.7}, 0)
        .wait(1)
        .to({scaleY: 1.0301, rotation: -1.5224, x: 40.45, y: 209.95}, 0)
        .wait(1)
        .to({scaleY: 1.0354, rotation: -1.7891, x: 40.65, y: 210.15}, 0)
        .wait(1)
        .to({scaleY: 1.0406, rotation: -2.0487, x: 40.75, y: 210.45}, 0)
        .wait(1)
        .to({scaleY: 1.0456, rotation: -2.3024, x: 40.95, y: 210.7}, 0)
        .wait(1)
        .to({scaleY: 1.0505, rotation: -2.5511, x: 41.1, y: 210.95}, 0)
        .wait(1)
        .to({scaleY: 1.0553, rotation: -2.7957, x: 41.3, y: 211.15}, 0)
        .wait(1)
        .to({scaleY: 1.0601, rotation: -3.0366, x: 41.45, y: 211.4}, 0)
        .wait(1)
        .to({scaleY: 1.0648, rotation: -3.2746, x: 41.6, y: 211.6}, 0)
        .wait(1)
        .to({scaleY: 1.0694, rotation: -3.51, x: 41.8, y: 211.85}, 0)
        .wait(1)
        .to({scaleY: 1.0741, rotation: -3.7432, x: 41.9, y: 212.05}, 0)
        .wait(1)
        .to({scaleY: 1.0787, rotation: -3.9748, x: 42.1, y: 212.25}, 0)
        .wait(1)
        .to({scaleY: 1.0832, rotation: -4.205, x: 42.25, y: 212.5}, 0)
        .wait(1)
        .to({scaleY: 1.0877, rotation: -4.4341, x: 42.4, y: 212.7}, 0)
        .wait(1)
        .to({scaleY: 1.0923, rotation: -4.6625, x: 42.55, y: 212.9}, 0)
        .wait(1)
        .to({scaleY: 1.0968, rotation: -4.8906, x: 42.7, y: 213.15}, 0)
        .wait(1)
        .to({scaleY: 1.1013, rotation: -5.1186, x: 42.9, y: 213.35}, 0)
        .wait(1)
        .to({scaleY: 1.1058, rotation: -5.3468, x: 43.05, y: 213.55}, 0)
        .wait(1)
        .to({scaleY: 1.1103, rotation: -5.5758, x: 43.25, y: 213.75}, 0)
        .wait(1)
        .to({scaleY: 1.1149, rotation: -5.8059, x: 43.4, y: 213.95}, 0)
        .wait(1)
        .to({scaleY: 1.1195, rotation: -6.0375, x: 43.6, y: 214.15}, 0)
        .wait(1)
        .to({scaleY: 1.1241, rotation: -6.2712, x: 43.75, y: 214.4}, 0)
        .wait(1)
        .to({scaleY: 1.1288, rotation: -6.5076, x: 43.9, y: 214.6}, 0)
        .wait(1)
        .to({scaleY: 1.1335, rotation: -6.7476, x: 44.15, y: 214.8}, 0)
        .wait(1)
        .to({scaleY: 1.1384, rotation: -6.9922, x: 44.3, y: 215}, 0)
        .wait(1)
        .to({scaleY: 1.1433, rotation: -7.2427, x: 44.5, y: 215.25}, 0)
        .wait(1)
        .to({scaleY: 1.1485, rotation: -7.5012, x: 44.65, y: 215.45}, 0)
        .wait(1)
        .to({scaleY: 1.1538, rotation: -7.7706, x: 44.95, y: 215.7}, 0)
        .wait(1)
        .to({scaleY: 1.1594, rotation: -8.0556, x: 45.15, y: 215.95}, 0)
        .wait(1)
        .to({scaleY: 1.1654, rotation: -8.3588, x: 45.45, y: 216.2}, 0)
        .wait(1)
        .to({scaleY: 1.1715, rotation: -8.6662, x: 45.65, y: 216.45}, 0)
        .wait(1)
        .to({scaleY: 1.1776, rotation: -8.9766, x: 45.9, y: 216.75}, 0)
        .wait(1)
        .to({scaleY: 1.1838, rotation: -9.2901, x: 46.2, y: 217.05}, 0)
        .wait(1)
        .to({scaleY: 1.1901, rotation: -9.6066, x: 46.45, y: 217.35}, 0)
        .wait(1)
        .to({scaleY: 1.1964, rotation: -9.9263, x: 46.7, y: 217.55}, 0)
        .wait(1)
        .to({scaleY: 1.2028, rotation: -10.2492, x: 46.95, y: 217.85}, 0)
        .wait(1)
        .to({scaleY: 1.2093, rotation: -10.5755, x: 47.3, y: 218.1}, 0)
        .wait(1)
        .to({scaleY: 1.2158, rotation: -10.9051, x: 47.6, y: 218.35}, 0)
        .wait(1)
        .to({scaleY: 1.2224, rotation: -11.2382, x: 47.85, y: 218.6}, 0)
        .wait(1)
        .to({scaleY: 1.229, rotation: -11.5748, x: 48.15, y: 218.95}, 0)
        .wait(1)
        .to({scaleY: 1.2358, rotation: -11.915, x: 48.45, y: 219.2}, 0)
        .wait(1)
        .to({scaleY: 1.2426, rotation: -12.2589, x: 48.8, y: 219.45}, 0)
        .wait(1)
        .to({scaleY: 1.2495, rotation: -12.6065, x: 49.1, y: 219.75}, 0)
        .wait(1)
        .to({scaleY: 1.2564, rotation: -12.9579, x: 49.45, y: 220}, 0)
        .wait(1)
        .to({scaleY: 1.2634, rotation: -13.3132, x: 49.75, y: 220.35}, 0)
        .wait(1)
        .to({scaleY: 1.2706, rotation: -13.6724, x: 50.1, y: 220.6}, 0)
        .wait(1)
        .to({scaleY: 1.2777, rotation: -14.0356, x: 50.4, y: 220.85}, 0)
        .wait(1)
        .to({scaleY: 1.285, rotation: -14.4029, x: 50.75, y: 221.15}, 0)
        .wait(1)
        .to({scaleY: 1.2923, rotation: -14.7742, x: 51.2, y: 221.4}, 0)
        .wait(1)
        .to({scaleY: 1.2998, rotation: -15.1497, x: 51.55, y: 221.7}, 0)
        .wait(1)
        .to({scaleY: 1.3073, rotation: -15.5293, x: 51.85, y: 221.95}, 0)
        .wait(1)
        .to({scaleY: 1.3149, rotation: -15.9131, x: 52.3, y: 222.25}, 0)
        .wait(1)
        .to({scaleY: 1.3226, rotation: -16.3011, x: 52.65, y: 222.6}, 0)
        .wait(1)
        .to({scaleY: 1.3303, rotation: -16.6933, x: 53.1, y: 222.85}, 0)
        .wait(1)
        .to({scaleY: 1.3382, rotation: -17.0896, x: 53.45, y: 223.1}, 0)
        .wait(1)
        .to({scaleY: 1.3461, rotation: -17.4901, x: 53.9, y: 223.4}, 0)
        .wait(1)
        .to({scaleY: 1.3541, rotation: -17.8946, x: 54.35, y: 223.7}, 0)
        .wait(1)
        .to({scaleY: 1.3622, rotation: -18.3031, x: 54.75, y: 223.95}, 0)
        .wait(1)
        .to({scaleY: 1.3704, rotation: -18.7155, x: 55.15, y: 224.2}, 0)
        .wait(1)
        .to({scaleY: 1.3786, rotation: -19.1316, x: 55.6, y: 224.55}, 0)
        .wait(1)
        .to({scaleY: 1.3869, rotation: -19.5513, x: 56.1, y: 224.75}, 0)
        .wait(1)
        .to({scaleY: 1.3952, rotation: -19.9743, x: 56.6, y: 225.05}, 0)
        .wait(1)
        .to({scaleY: 1.4037, rotation: -20.4004, x: 57.05, y: 225.3}, 0)
        .wait(1)
        .to({scaleY: 1.4122, rotation: -20.8294, x: 57.5, y: 225.6}, 0)
        .wait(1)
        .to({regX: 56.6, regY: 3.5, scaleY: 1.4207, rotation: -21.2609, x: 56.95, y: 175.65}, 0)
        .wait(47),
    )

    // PIED
    this.instance_4 = new lib.pie()
    this.instance_4.setTransform(56.35, 312.75, 1, 1, 53.2826, 0, 0, 3.9, 4.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(1)
        .to({regX: 12, regY: 25.3, rotation: 48.9655, x: 45.3, y: 327.1}, 0)
        .wait(1)
        .to({rotation: 45.8238, x: 45.75, y: 323.85}, 0)
        .wait(1)
        .to({rotation: 42.961, x: 46.25, y: 320.85}, 0)
        .wait(1)
        .to({rotation: 40.2802, x: 46.7, y: 317.95}, 0)
        .wait(1)
        .to({rotation: 37.7472, x: 47.1, y: 315.2}, 0)
        .wait(1)
        .to({rotation: 35.349, x: 47.55, y: 312.55}, 0)
        .wait(1)
        .to({rotation: 33.0833, x: 47.95, y: 310}, 0)
        .wait(1)
        .to({rotation: 30.9552, x: 48.35, y: 307.55}, 0)
        .wait(1)
        .to({rotation: 28.9763, x: 48.7, y: 305.3}, 0)
        .wait(1)
        .to({rotation: 27.1662, x: 49.05, y: 303.25}, 0)
        .wait(1)
        .to({rotation: 25.5555, x: 49.35, y: 301.35}, 0)
        .wait(1)
        .to({rotation: 24.1265, x: 49.6, y: 299.65}, 0)
        .wait(1)
        .to({rotation: 22.7459, x: 49.8, y: 298.05}, 0)
        .wait(1)
        .to({rotation: 21.4046, x: 50.05, y: 296.4}, 0)
        .wait(1)
        .to({rotation: 20.1012, x: 50.3, y: 294.8}, 0)
        .wait(1)
        .to({rotation: 18.834, x: 50.6, y: 293.25}, 0)
        .wait(1)
        .to({rotation: 17.6018, x: 50.85, y: 291.75}, 0)
        .wait(1)
        .to({rotation: 16.4037, x: 51, y: 290.25}, 0)
        .wait(1)
        .to({rotation: 15.2389, x: 51.3, y: 288.8}, 0)
        .wait(1)
        .to({rotation: 14.1066, x: 51.5, y: 287.4}, 0)
        .wait(1)
        .to({rotation: 13.0065, x: 51.65, y: 286.05}, 0)
        .wait(1)
        .to({rotation: 11.9382, x: 51.85, y: 284.7}, 0)
        .wait(1)
        .to({rotation: 10.9016, x: 52.05, y: 283.35}, 0)
        .wait(1)
        .to({rotation: 9.8969, x: 52.2, y: 282.05}, 0)
        .wait(1)
        .to({rotation: 8.9242, x: 52.45, y: 280.8}, 0)
        .wait(1)
        .to({rotation: 7.9842, x: 52.6, y: 279.6}, 0)
        .wait(1)
        .to({rotation: 7.0775, x: 52.75, y: 278.45}, 0)
        .wait(1)
        .to({rotation: 6.2052, x: 52.9, y: 277.3}, 0)
        .wait(1)
        .to({rotation: 5.3688, x: 53.05, y: 276.2}, 0)
        .wait(1)
        .to({rotation: 4.5701, x: 53.15, y: 275.15}, 0)
        .wait(1)
        .to({rotation: 3.8115, x: 53.25, y: 274.15}, 0)
        .wait(1)
        .to({rotation: 3.0963, x: 53.45, y: 273.2}, 0)
        .wait(1)
        .to({rotation: 2.4286, x: 53.55, y: 272.35}, 0)
        .wait(1)
        .to({rotation: 1.8142, x: 53.65, y: 271.55}, 0)
        .wait(1)
        .to({rotation: 1.2608, x: 53.75, y: 270.75}, 0)
        .wait(1)
        .to({rotation: 0.7795, x: 53.8, y: 270.1}, 0)
        .wait(1)
        .to({rotation: 0.3871, x: 53.9, y: 269.6}, 0)
        .wait(1)
        .to({rotation: 0.1107, y: 269.2}, 0)
        .wait(1)
        .to({regX: 3.8, regY: 4.9, rotation: 0, x: 45.85, y: 248.65}, 0)
        .wait(62)
        .to({regX: 12, regY: 25.3, rotation: 0.8602, x: 53.85, y: 270.2}, 0)
        .wait(1)
        .to({rotation: 1.6568, x: 53.75, y: 271.25}, 0)
        .wait(1)
        .to({rotation: 2.4081, x: 53.65, y: 272.25}, 0)
        .wait(1)
        .to({rotation: 3.1251, x: 53.5, y: 273.2}, 0)
        .wait(1)
        .to({rotation: 3.8152, x: 53.35, y: 274.15}, 0)
        .wait(1)
        .to({rotation: 4.4837, x: 53.25, y: 275}, 0)
        .wait(1)
        .to({rotation: 5.1343, x: 53.2, y: 275.85}, 0)
        .wait(1)
        .to({rotation: 5.7701, x: 53.05, y: 276.65}, 0)
        .wait(1)
        .to({rotation: 6.3935, x: 53, y: 277.55}, 0)
        .wait(1)
        .to({rotation: 7.0063, x: 52.85, y: 278.3}, 0)
        .wait(1)
        .to({rotation: 7.6102, x: 52.75, y: 279.15}, 0)
        .wait(1)
        .to({rotation: 8.2065, x: 52.65, y: 279.85}, 0)
        .wait(1)
        .to({rotation: 8.7964, x: 52.55, y: 280.65}, 0)
        .wait(1)
        .to({rotation: 9.3811, x: 52.45, y: 281.35}, 0)
        .wait(1)
        .to({rotation: 9.9614, x: 52.3, y: 282.15}, 0)
        .wait(1)
        .to({rotation: 10.5382, x: 52.2, y: 282.85}, 0)
        .wait(1)
        .to({rotation: 11.1124, x: 52.05, y: 283.6}, 0)
        .wait(1)
        .to({rotation: 11.6849, y: 284.35}, 0)
        .wait(1)
        .to({rotation: 12.2564, x: 51.95, y: 285.05}, 0)
        .wait(1)
        .to({rotation: 12.8278, x: 51.8, y: 285.75}, 0)
        .wait(1)
        .to({rotation: 13.3999, x: 51.7, y: 286.5}, 0)
        .wait(1)
        .to({rotation: 13.9737, x: 51.6, y: 287.25}, 0)
        .wait(1)
        .to({rotation: 14.5502, x: 51.5, y: 287.95}, 0)
        .wait(1)
        .to({rotation: 15.1307, x: 51.4, y: 288.65}, 0)
        .wait(1)
        .to({rotation: 15.7163, x: 51.3, y: 289.4}, 0)
        .wait(1)
        .to({rotation: 16.3089, x: 51.15, y: 290.15}, 0)
        .wait(1)
        .to({rotation: 16.9103, x: 51.1, y: 290.9}, 0)
        .wait(1)
        .to({rotation: 17.5233, x: 50.95, y: 291.65}, 0)
        .wait(1)
        .to({rotation: 18.1512, x: 50.8, y: 292.45}, 0)
        .wait(1)
        .to({rotation: 18.799, x: 50.7, y: 293.2}, 0)
        .wait(1)
        .to({rotation: 19.474, x: 50.55, y: 294.05}, 0)
        .wait(1)
        .to({rotation: 20.1884, x: 50.4, y: 294.9}, 0)
        .wait(1)
        .to({rotation: 20.9483, x: 50.3, y: 295.85}, 0)
        .wait(1)
        .to({rotation: 21.7187, x: 50.15, y: 296.75}, 0)
        .wait(1)
        .to({rotation: 22.4966, x: 50, y: 297.7}, 0)
        .wait(1)
        .to({rotation: 23.2821, x: 49.85, y: 298.65}, 0)
        .wait(1)
        .to({rotation: 24.0754, x: 49.75, y: 299.6}, 0)
        .wait(1)
        .to({rotation: 24.8766, x: 49.55, y: 300.55}, 0)
        .wait(1)
        .to({rotation: 25.6859, x: 49.4, y: 301.5}, 0)
        .wait(1)
        .to({rotation: 26.5035, x: 49.25, y: 302.45}, 0)
        .wait(1)
        .to({rotation: 27.3296, x: 49.1, y: 303.45}, 0)
        .wait(1)
        .to({rotation: 28.1644, x: 48.95, y: 304.35}, 0)
        .wait(1)
        .to({rotation: 29.008, x: 48.8, y: 305.35}, 0)
        .wait(1)
        .to({rotation: 29.8606, x: 48.6, y: 306.35}, 0)
        .wait(1)
        .to({rotation: 30.7224, x: 48.5, y: 307.35}, 0)
        .wait(1)
        .to({rotation: 31.5936, x: 48.3, y: 308.35}, 0)
        .wait(1)
        .to({rotation: 32.4743, x: 48.1, y: 309.35}, 0)
        .wait(1)
        .to({rotation: 33.3647, x: 48, y: 310.35}, 0)
        .wait(1)
        .to({rotation: 34.2649, x: 47.8, y: 311.35}, 0)
        .wait(1)
        .to({rotation: 35.1752, x: 47.7, y: 312.35}, 0)
        .wait(1)
        .to({rotation: 36.0955, x: 47.5, y: 313.35}, 0)
        .wait(1)
        .to({rotation: 37.0262, x: 47.35, y: 314.45}, 0)
        .wait(1)
        .to({rotation: 37.9671, x: 47.2, y: 315.45}, 0)
        .wait(1)
        .to({rotation: 38.9185, x: 47.05, y: 316.5}, 0)
        .wait(1)
        .to({rotation: 39.8804, x: 46.85, y: 317.55}, 0)
        .wait(1)
        .to({rotation: 40.8528, x: 46.7, y: 318.6}, 0)
        .wait(1)
        .to({rotation: 41.8356, x: 46.55, y: 319.65}, 0)
        .wait(1)
        .to({rotation: 42.8289, x: 46.35, y: 320.7}, 0)
        .wait(1)
        .to({rotation: 43.8325, x: 46.2, y: 321.75}, 0)
        .wait(1)
        .to({rotation: 44.8463, x: 46.05, y: 322.85}, 0)
        .wait(1)
        .to({rotation: 45.8701, x: 45.9, y: 323.9}, 0)
        .wait(1)
        .to({rotation: 46.9035, x: 45.75, y: 325}, 0)
        .wait(1)
        .to({rotation: 47.9463, x: 45.55, y: 326.1}, 0)
        .wait(1)
        .to({rotation: 48.9981, x: 45.4, y: 327.15}, 0)
        .wait(1)
        .to({rotation: 50.0582, x: 45.25, y: 328.25}, 0)
        .wait(1)
        .to({rotation: 51.1262, x: 45.15, y: 329.35}, 0)
        .wait(1)
        .to({rotation: 52.2012, x: 44.95, y: 330.45}, 0)
        .wait(1)
        .to({regX: 3.9, regY: 4.8, rotation: 53.2826, x: 56.35, y: 312.75}, 0)
        .wait(47),
    )

    // Calque_7
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "Ak5SHQg9gHgdgTQgegUgFgqQgDg4AWgsQAPgdAlgqQAqgtANgWQAagrACgyQAEhTg0q5QhAtngPj7QCbArDhAPQD0ARDigZQjfV1AAHSQAAAuAaAkQAQAVAqAjQAqAiAQAVQAbAlABAuQgBBmhoAXQgoAJhGABIiCgBIjPACIgTAAQhWAAgqgEg",
      )
    this.shape_91.setTransform(82.6519, 332.2558, 0.225, 0.225)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#F2611E")
      .s()
      .p(
        "AgLKoQgvgCgkgIQgngJgHgMQgSgagGgoQgEgYABgiQABgrgFhFQgEhJABg+QABhbgHihQgIi1gMh5QAAgMgFgHQgEgKgIAAIAAl2IGyAEQAADRgRFbQgPEbgOCkIgJBzIgIBeQgJBZgUAbQgLAPgpAHQgdAFglAAIgSAAg",
      )
    this.shape_92.setTransform(85.75, 240.24)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_92}, {t: this.shape_91}]})
        .wait(215),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-1, 0, 132.8, 367.7)
  ;(lib.femmee = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_6
    this.instance = new lib.tetefe()
    this.instance.setTransform(62.5, 62.6, 1, 1, 0, 0, 0, 20.8, 62.6)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(239))

    // Calque_2
    this.instance_1 = new lib.Interpoler9("synched", 0)
    this.instance_1.setTransform(3.45, 104.55, 1, 1, 0, 0, 0, -27.7, -5.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(59)
        .to({startPosition: 0}, 0)
        .to({scaleX: 1.0359, skewY: -15.131, y: 104.6}, 40)
        .wait(20)
        .to({startPosition: 0}, 0)
        .to({scaleX: 1, skewY: 0, y: 104.55}, 38)
        .wait(82),
    )

    // Calque_7
    this.instance_2 = new lib.Interpoler11("synched", 0)
    this.instance_2.setTransform(121.3, 104.4, 1, 1, 0, 0, 0, 28.7, -5.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(59)
        .to({startPosition: 0}, 0)
        .to({scaleX: 1.0356, skewY: 15.0568}, 40)
        .wait(20)
        .to({startPosition: 0}, 0)
        .to({scaleX: 1, skewY: 0}, 38)
        .wait(82),
    )

    // Calque_5
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFAF8A")
      .s()
      .p("Aj2KOQhzhChJh+QiakJBHmtQCDgjgJnAIMUgFQgTHXCOgMQBPIAixEFQiPDQkDABQiSAAh0hDg")
    this.shape.setTransform(62.5507, 68.1192, 0.225, 0.225)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#44D8AE")
      .s()
      .p(
        "AALJDQhUgUg0gJQg0gJgggDQgggCgwgPQgwgOgSgcQgTgbgNglQgNglAOg2QAShBAKgoQAShJAKhQQANhpACiNQAAg9gDhLQgDhZAAgpQgBg9BOgoQA5gdBSgMIDogHQBEAJAoASQBBAbAbA4QARAjAAAoQABAegJAtIgQBOQgIAtAEAlIAEBQQADA0ADAnQANCAAtDYQASBXgMA1QgMAygpAeQgRANgiAJQgjAJgsADQgaACgaAAQhKAAhGgRg",
      )
    this.shape_1.setTransform(61.4989, 121.8282)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#44D8AE")
      .s()
      .p(
        "ApcOUIjt+MQIrCrHAGgQGrGLDOHsQBCCegbBzQgoCujrAwQjPArj0hCQg1gOg4AAQhQAKgoAGQibAXk9A9QgNgjAChBg",
      )
    this.shape_2.setTransform(102.805, 87.2996, 0.225, 0.225)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#44D8AE")
      .s()
      .p(
        "ACjOHQidgVhhAAIAAAAQgJgChAAFQioAOh4gWQjMgnh6iOQhchqCikCQCOjiEukiQEYkQEwjaQE3jgC1g5IlQd3Qi9gjh8gSg",
      )
    this.shape_3.setTransform(20.0824, 87.8565, 0.225, 0.225)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(239),
    )

    // Calque_4
    this.instance_3 = new lib.cuisseg1()
    this.instance_3.setTransform(41.25, 160.1, 1, 1, -14.9992, 0, 0, 34.8, 3.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({regY: 3.7, rotation: 0, y: 160}, 26)
        .to({regY: 3.8, rotation: 23.7316, x: 41.15, y: 160.1}, 62)
        .wait(23)
        .to({regY: 3.7, rotation: 0, x: 41.25, y: 160}, 46)
        .to({regY: 3.8, rotation: -14.9992, y: 160.1}, 46)
        .wait(36),
    )

    // Calque_3
    this.instance_4 = new lib.molletg1()
    this.instance_4.setTransform(35.35, 234.35, 1, 1, 14.9996, 0, 0, 7.9, 5.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({regX: 7.8, rotation: 0, x: 14.8, y: 225.5}, 26)
        .to({regY: 5.6, scaleX: 1.1466, scaleY: 1.3583, rotation: 75, x: -8.75, y: 210.9}, 62)
        .wait(23)
        .to({regY: 5.5, scaleX: 1, scaleY: 1, rotation: 0, x: 14.8, y: 225.5}, 46)
        .to({regX: 7.9, rotation: 14.9996, x: 35.35, y: 234.35}, 46)
        .wait(36),
    )

    // PIED
    this.instance_5 = new lib.piedg1()
    this.instance_5.setTransform(54.85, 271.1, 1, 1, 7.8053, 0, 0, 4, 6.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({rotation: 0, x: 48.75, y: 253.95}, 26)
        .to({rotation: 50.3999, x: 5.55, y: 277.05}, 32)
        .to({rotation: 105.0013, x: -41.15, y: 256.75}, 30)
        .wait(23)
        .to({rotation: 0, x: 48.75, y: 253.95}, 46)
        .to({rotation: 7.8053, x: 54.85, y: 271.1}, 46)
        .wait(36),
    )

    // Calque_1
    this.instance_6 = new lib.jambe()
    this.instance_6.setTransform(78.8, 228.2, 1, 1, 0, 0, 0, 20.4, 71.3)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFAF8A")
      .s()
      .p(
        "AkfOIQhtgLgHhHQgFhRBChlQAlg3ALgYQAXgvACgvQADhPgfnAQgtqJgLjGQCjAuDEALQDwANCeg0QgsEVhYHaQhCGCAADmQAAArAZAoQAOAZAnArQAoAsAPAYQAYApABAsQAABehhAWQgmAIhBABIh5gBIjBACIggAAQhFAAgkgEg",
      )
    this.shape_4.setTransform(75.8461, 309.6433, 0.225, 0.225)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_4}, {t: this.instance_6}]})
        .wait(239),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-77.6, 0, 201.5, 330.1)

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

    // Calque_3
    this.instance = new lib.hommeee()
    this.instance.setTransform(446.9, 233.05, 1, 1, 0, 0, 0, 65.8, 179.2)

    this.instance_1 = new lib.femmee()
    this.instance_1.setTransform(258.25, 232.65, 1, 1, 0, 0, 0, 61.9, 165)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    // illustration
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#333535")
      .s()
      .p("AkjAMQgHjDA5jAIIWAAQg+BsjOD8Qi6DnhQCgQgtjogFiEg")
    this.shape.setTransform(372.82, 120.5035, 0.225, 0.225)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#333535")
      .s()
      .p("ABcDHQgwhIg9h/QhOiegXgpQg9hsg/hEIHlAAIAALvQhShHhFhqg")
    this.shape_1.setTransform(361.9009, 120.5035, 0.225, 0.225)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#333535")
      .s()
      .p("AgjgOQgnhphHhHIEjAAQhIBHgmBpQgjBggBBtQAAhtgjhgg")
    this.shape_2.setTransform(213.8344, 138.694, 0.225, 0.225)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFB85A")
      .s()
      .p("AiRAAQhJkjhJiSIJHAAQgYCSh6EjQh5EkgZCSQhIiShJkkg")
    this.shape_3.setTransform(213.8288, 148.6218, 0.225, 0.225)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFB85A")
      .s()
      .p("AhUAAQgrjUhbiYIG1AAQAACYhVDUQgxB5hsD0Qglj0gYh5g")
    this.shape_4.setTransform(183.7475, 145.8881, 0.225, 0.225)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFB85A")
      .s()
      .p("Ag6C3Igsi3Qg4jhhUiKIHlAAQgwB5huDyQhVDVAACYQgehOgchog")
    this.shape_5.setTransform(219.3017, 103.213, 0.225, 0.225)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#333535")
      .s()
      .p("AgjgOQgnhphHhHIEjAAQhHBHgmBpQgkBggBBtQAAhtgjhgg")
    this.shape_6.setTransform(176.6322, 117.9049, 0.225, 0.225)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#333535")
      .s()
      .p("AhIAAQgYh5gZhIIDyAAQAABwgkBjQgmBphGBHQgZhIgYh6g")
    this.shape_7.setTransform(207.8159, 104.8554, 0.225, 0.225)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#333535")
      .s()
      .p("AhIAAQgYiQgZhKIDzAAIiRG1QgYhJgZiSg")
    this.shape_8.setTransform(193.5908, 134.9423, 0.225, 0.225)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFB85A")
      .s()
      .p("AhUAAQgqjUhciYIG1AAQAACYhVDUQgxB5hsD0Qglj0gYh5g")
    this.shape_9.setTransform(203.4398, 129.475, 0.225, 0.225)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFB85A")
      .s()
      .p("AiDEdQgZhhgljNQgkjEgbhiQgridhBhyILZAAQgRCSg6CfQgjBghVC1QhVC3gjBfQg5CggQCRQhBiBgripg")
    this.shape_10.setTransform(188.1236, 113.6076, 0.225, 0.225)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#69C49E")
      .s()
      .p(
        "ApMLRQg0kdgNi6QgmobDtmMQAlh/BehyQBfh1B+hGQCHhLCNgCQCbgCCLBaQD+C/hTE7QggB1hUCdQgNAZiLDuIj9EyQiQCxheB+QkBFXh+EqQgGgmhPmwg",
      )
    this.shape_11.setTransform(378.7024, 104.9674, 0.225, 0.225)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#69C49E")
      .s()
      .p(
        "Ai0DhQhVjvgrhyQhKjJhaiaQhajAARitQAVjaDGhVQB9guCVATQCNASCDBIQCFBJBWBvQBcB2ARCIIAAGhQhFFlgKFvQgIFHAnFvQmVnnkTnZg",
      )
    this.shape_12.setTransform(356.122, 105.1107, 0.225, 0.225)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#F49E37")
      .s()
      .p("AsOLyIAA3jIYTAAQAQCfgJDWQgEBJgWEzQgQDrAACTQACDPAhClg")
    this.shape_13.setTransform(520.9158, 93.0884, 0.225, 0.225)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#333535")
      .s()
      .p(
        "AJHS0QhzgEnUgWQlmgQjgAAQlBACkHAhQgykJgFlGQgEjvAXlqIAkpXQAQlVgQj6QHSgdK8ALIJHALQFdAHDrAAQAyEJAFFGQAEDvgXFoIgkJZQgQFVAQD6QiiAKjCAAQhtAAh3gDgAu/xYIg9AYQhPJOgZHgQgdInAjIGQDoAAE8AOQC2AJFtATQKjAiGhgcQgQjzALkwQAGi2AYltQAYlrAGi3QAKkvgPj0QlrAcpigiQlHgUijgIQkZgPjJAAQg8AAhJAZg",
      )
    this.shape_14.setTransform(520.7102, 92.9591, 0.2249, 0.2249)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#333535")
      .s()
      .p(
        "A1RbEQgPl3APnsIAltbQAWoBgElZQgFnVgymOQHPgZOCAZQOFAYHNgYQAPF3gPHsIglNaQgWICAEFZQAFHVAyGOgAy/5WQAQFlgKHFQgGEQgYIiQgYIjgHEQQgKHGARFkQFUAZKRAAQKPAAFUAYQBJAACrgYQCqgZBJAAQgQleARnMQAHjAAipzQAdn9AEk1QAGnBghlpQkYAhlUABQjuABl+gRQnwgWh7gDQiCgDh4AAQjJAAipAKg",
      )
    this.shape_15.setTransform(199.5842, 126.0377, 0.2249, 0.2249)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#333535")
      .s()
      .p(
        "EgIdAj8IrIAHQmYABk6gNQgym3ADoTQABl+AhpMQAxteAFhsQAXongQmjQAMj5AAh+QAAjbg8idMA8xAAAQAMB+AeD6QAfD7AMB8QAqG3geE5QhhQUgZIIQgoNlBBK3QjDgYk8AdQiqARhVAHQiTAMhtAAQocgut9AKgEgPrAh6QH1AvMTAKIJ/AHQFzAGEWANQA9AABJgUQAkgLAZgLQAAo9AGkaQAKnQAgmHQAxuaAMnGQAUr+ggpjQpwAwvVgmQoVgXkMgKQnUgTlOABQhJgBiqAVQirAVhJAAQAACxAGBeQALChAgBvQAQGggmIwIhRPXQgyJSgEGHQgGIYBCG4QBdAAB+gMQBJgHCSgRQCVgQB2AAQBfAABLALg",
      )
    this.shape_16.setTransform(368.0132, 106.4084, 0.2249, 0.2249)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#CC8229")
      .s()
      .p(
        "AAETJIpaglQlbgPkKAPQgPkKAPlaIAkpaQAWlpgDjzQgFlKgykaIIXAAQAALlDzGqQEIGeGsDNQHDDYHNhrQAABigMCqQAACSA9B5QkaAylLAFIhFAAQjfAAk3gSg",
      )
    this.shape_17.setTransform(593.5517, 244.8343, 0.2249, 0.2249)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#CC8229")
      .s()
      .p(
        "AAATMIpagkQlbgQkKAQQgPkKAPlbIAkpaQAWlpgDjyQgFlLgykaQEKgPFbAPIJaAlQFpAWDygEQFLgFEagyQAPEKgPFbIglJbQgWFoAEDyQAFFLAyEaQkaAylLAFIhFAAQjfAAk3gTg",
      )
    this.shape_18.setTransform(593.6389, 244.7471, 0.2249, 0.2249)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#333535")
      .s()
      .p(
        "ADCeyQitoJg5pcQgyoZAmpvQAAlEhtn3QiGovgwkMIDzAAQBBCDAyDAQAeB1AwDxQAvFkAFHaQADETgGIeQAAHfAiFIQAsG1B0Fvg",
      )
    this.shape_19.setTransform(661.4404, 321.3227, 0.2249, 0.2249)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#333535")
      .s()
      .p(
        "AlyeyQgiliAomVQAhlCBYmrICnrtQBinBAsk1QAdivgLkfQgSk7AAiTIDzAAQBeC8gVEYQgMCkg9FVQgtE/hxGwQhBD1iGHmQhwGpgqEzQg4GRAiFfg",
      )
    this.shape_20.setTransform(546.2027, 321.3227, 0.2249, 0.2249)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#333535")
      .s()
      .p(
        "AMKE/Itqh2QoIhFljgZQvmhJrxC8IAAm1QH8hOG+gZQH6gdHlAjQE6AwJhBKQJeBIE+AxQGUAlGnglQGsglGOhtIAAG1Qp4A9lCAYQlIAZkaAAQjLAAiygNg",
      )
    this.shape_21.setTransform(604.569, 276.4059, 0.2249, 0.2249)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#333535")
      .s()
      .p(
        "AooKXQAeg3A9hhQBriZCwi3QBlhpDNjLQCvi1BniRQCHi+BDjJQgRENiLDzQhtC/jXDcQhHBJh5BzIjEC7QjkDhh3CyQAAhaA3hig",
      )
    this.shape_22.setTransform(613.7591, 199.8924, 0.2249, 0.2249)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#333535")
      .s()
      .p("AAxJAQhwjQhSknQgvirhKlwQhIlkgyiuQALAMA4AlQAeAUAAAdQBMDFBVEbQAxCiBdFDQCyJMDHFWQjMiqiIj7g")
    this.shape_23.setTransform(591.3412, 196.6095, 0.2249, 0.2249)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#333535")
      .s()
      .p(
        "AqQLZQCMjQC9jHQCoiwDojCQAMgMBuh/QBAhLA5gdQBhhhBbiYQA2haBijEQghDOhqDKQhaCrigDHQhbBaiOB5QikCKhSBGQktEBiPDHg",
      )
    this.shape_24.setTransform(615.9458, 176.3783, 0.2249, 0.2249)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#333535")
      .s()
      .p(
        "AAdI8QhnjbhHkqQgujBg4lfQgukhgdicQAIASALARQAZAlBUBVQA7BXAhCEIAZBtQAPBCAOAsQAjFXBpFjQBaEzCeFjQi7i7h8kGgAlTv8IARBWQgRgoAAgug",
      )
    this.shape_25.setTransform(593.5279, 172.0049, 0.2249, 0.2249)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#333535")
      .s()
      .p(
        "AnZGcQB+h1C+iIQBuhQDfibQDGiPCIh4IBPhLQAzgvAdglQAPgSAMgSQAmhfAUhkQAABog6BbQg8CShoCGQiMC0j2C4Qh/BflLDXQkoC/iRB2QB2inCiiWg",
      )
    this.shape_26.setTransform(620.3192, 154.5057, 0.2249, 0.2249)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#333535")
      .s()
      .p("Ah/AlQgZjVgPlUQgVnZgFhQQB8E4A0GoQAdD5AlIKQAYBhBDDJQA2C6AACUQj3mUhKp1g")
    this.shape_27.setTransform(598.9918, 147.9456, 0.2249, 0.2249)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#333535")
      .s()
      .p(
        "ArSHmQAoguBjhkQCPh/DQh/QBOgwEmilQDmiBCGhdQC/iGCEiUQhmDtjGDBQiiCekACZQh5BJleC3QkuCeiiBsQAghBBIhRg",
      )
    this.shape_28.setTransform(627.4302, 133.7348, 0.2249, 0.2249)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#333535")
      .s()
      .p("AhKI7QgwjqAFksQADjRAjlYQAtmxAIh4QA7FOAAG8QAAD/gMILQAYBhAZDCQAYDCAZBiQiIjfg5kUg")
    this.shape_29.setTransform(606.1706, 123.8919, 0.2249, 0.2249)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#333535")
      .s()
      .p(
        "Aq6GjIBAgZQAkgOAPgPQByiDC8hzQB3hKDxh1QECh+BwhCQDIh1CBiBQhlDci+CfQiYB/j0ByQgbAMmdCuQkMBxigBmQAAg6BPgig",
      )
    this.shape_30.setTransform(635.0808, 115.6903, 0.2249, 0.2249)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#333535")
      .s()
      .p("AhNASQAMiZArk7QApk5ANigQAxDYAFD6QAEC4gWERIgkHJQgQEHAQDMQiXltAqodg")
    this.shape_31.setTransform(615.7793, 106.3983, 0.2249, 0.2249)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#333535")
      .s()
      .p(
        "Ah+hIQB2iXDNjaQEwlCAigmQAAAwgGAYQgKApggAgQhrBQhSC8QgzB0gNAbQgpBNgvAwQgYAYgxAYQgwAYgZAYQiPCPiND7Ih2DWQhICBg8BZQA+m0Fam2g",
      )
    this.shape_32.setTransform(631.7979, 103.6663, 0.2249, 0.2249)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#333535")
      .s()
      .p(
        "AoQYIQAAlgCGoYQCHrmD+sgQDLqFFLs7QhgGMjUKXQj8MZhNEUQiqJdg8HgQhLJNBEINQAAAvAOA3QAIAgAUA9QAiBwgcBSQjnlKAAnkg",
      )
    this.shape_33.setTransform(607.8792, 174.7425, 0.2249, 0.2249)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#333535")
      .s()
      .p("ADiFpQiShliYipQhIhPi/jrQikjKhshtQAxAAAYAGQAoAKAhAhQB8BsCSCaQBUBZChCxQEwFFD6CnQjMgziyh7g")
    this.shape_34.setTransform(574.3928, 205.9016, 0.2249, 0.2249)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#333535")
      .s()
      .p("AijGFQAdhyA6izIBekoQBulpAAkJQAyDKgVDkQgQC1hEDpIiBGXQhODzgdCfg")
    this.shape_35.setTransform(591.7422, 200.4376, 0.2249, 0.2249)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#333535")
      .s()
      .p("AhBBeQj5jik3mPQCEBCCBBvQBcBQB/CKQC6DJAYAZQB7B+BuBOQBJAZBiBhQBYBZBFAbQlliElOkyg")
    this.shape_36.setTransform(569.328, 188.3546, 0.2249, 0.2249)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#333535")
      .s()
      .p("AhZDbQAVhhA1jFQA1jKAYhvIAAm2QBUC5gFDgQgECxg/DwQgkCMhUEWQhGD2gPCjQgfkSBJlOg")
    this.shape_37.setTransform(586.6675, 181.8422, 0.2249, 0.2249)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#333535")
      .s()
      .p("Ag1BbQh+hbjKiqQjrjGhYhFQAxAZBhAYQBhAZAxAYQDCCSFsEWQE5DmD2B7Qlyg+mEkdg")
    this.shape_38.setTransform(562.3632, 173.0954, 0.2249, 0.2249)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#333535")
      .s()
      .p("AhSGiQACiKAlkYQAkkXACiKQACjmhBizQB8CdAVDvQAHBTgCCCIgFDZQg6FggJA+QgdDfAAC+QhBizACjmg")
    this.shape_39.setTransform(578.6658, 164.3486, 0.2249, 0.2249)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#333535")
      .s()
      .p(
        "ADhDzQjJhZkLixQgXgYgxAAQgxAAgYgZQgcgciPhkQhxhPg5hVQDUBbETCfQCeBbFHDBQBnBFB6AvQBnAnCfAoQjoAAkRh6g",
      )
    this.shape_40.setTransform(554.1673, 157.2433, 0.2249, 0.2249)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#333535")
      .s()
      .p(
        "AAeLBQAAgbAGgrQAGgqAAgJQgfifgLjNQgEhGgHkhQgGjZgPiFQgVi8gxiVQB1CpAxDcQAnCwAAD0QAABIgPFkQgLEEAOCcQg9gfAAhbg",
      )
    this.shape_41.setTransform(568.5185, 146.855, 0.2249, 0.2249)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#333535")
      .s()
      .p("AEwDlQibgqi5hiQhKgoj4iRQjFh1h9g4ICSAAQDbBiGEC7QFYChEIBYQgtAFguAAQiOAAiQgpg")
    this.shape_42.setTransform(545.4148, 145.2656, 0.2249, 0.2249)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#333535")
      .s()
      .p("AgZnNQAAg9geg9QgqhIgZgxQC9EcApGTQAPCTAADTQAAB5gDDzQiRpKAApEg")
    this.shape_43.setTransform(558.0235, 135.3763, 0.2249, 0.2249)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#333535")
      .s()
      .p("ABnBbQhwiYg9hNQhoiFhdhdQgbgOgtgPIhDgZQhJgggfg8QC6AzCYB7QB5BhB8CoIDSErQB9C0BnBnQjBiLjXkZg")
    this.shape_44.setTransform(545.9601, 135.3706, 0.2249, 0.2249)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#333535")
      .s()
      .p(
        "AJ4ZGQgwhIAAgxIhQk8Qg1jAg+h9QgwidgojXQgJgyg3lLQhRnkhskNQgvhggYg4QgphbgghiQhXivi6jPQjWjhhhh6QErDIDmFnQCrEOCuG0QBADNA8ETQAPBCBWGqQCAJuCGFeIAADwQgCgwgvhHg",
      )
    this.shape_45.setTransform(572.7514, 185.6366, 0.2249, 0.2249)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#996D37")
      .s()
      .p(
        "AAkJsQgMhVgYgxQgfh/gLikQgEg6gIjpQgFi0gPhwQgWiggxiEICRAAQAxCVAVC7QAPCDAGDVQAHEUAFBFQALDBAgCPQhZAAgVg9g",
      )
    this.shape_46.setTransform(135.1086, 351.6504, 0.2249, 0.2249)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#996D37")
      .s()
      .p(
        "AiVFLQANiBAnjKQAykBAMhKQAdi+AAifICRAAQAdAdgLBKQgSCBAAAMQAABvglCAQgRA7g9CiQgyCJgSBWQgbB9ARByIAFA0QAEAngDAZQgLBPhcAAQgRilATi5g",
      )
    this.shape_47.setTransform(98.076, 351.6504, 0.2249, 0.2249)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#996D37")
      .s()
      .p(
        "AjyCMQmSggkXA+IAAlTQBJAACqgZQCqgYBJAAIFQAqQDQAbCIAKQGRAgEYg+IAAFTQhJAAiqAYQirAZhIAAQnBg9jngSg",
      )
    this.shape_48.setTransform(116.5206, 332.5115, 0.2249, 0.2249)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#1D1E1E")
      .s()
      .p(
        "AkjbXQhbmrgrpxQgkrSgYltIAElIQABjCgLiHQggl1idkbQBgggCUgLQBVgGCeAAQB0GZALJkIACH/QACExAODNQArFVCvERQDSFFEtAhIAAHng",
      )
    this.shape_49.setTransform(112.1407, 289.3139, 0.2249, 0.2249)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#333535")
      .s()
      .p(
        "AmUbQQAAiegGhVQgLiUgghgQgglMAhmpQAJh9BFpqQAynDABkcQABmQhSlKQBighB4gCQBVAACFAQQCwAWArAEQB8AJBfgQQAAJ4gfE2QgyIFiiGEQhiFkgeG+QgSEMAAIXg",
      )
    this.shape_50.setTransform(125.6346, 289.4712, 0.2249, 0.2249)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#333535")
      .s()
      .p(
        "AhcbQQhBkEgylEQgfjHgwmBQAAiCAKnDQAJlogHjbQgVqUi6nQQBjghB4gCQBUAACHAQQCuAWAsAEQB8AJBfgQQBoIIgTImQgRHkh1JIQghEkAVFtQAMDdAxG0g",
      )
    this.shape_51.setTransform(107.6645, 289.4712, 0.2249, 0.2249)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#55A07E")
      .s()
      .p(
        "AE8P+QhUh7hni5Qh1jYg8htQiRk7j0p4Qjyp3iTk9QAxAwB6BnQBvBlA7BYQD/D/DLFVQCnEaCeGCQBYDYCuHoQClHPBmDzQkdifjilHg",
      )
    this.shape_52.setTransform(94.6398, 218.1842, 0.2249, 0.2249)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#69C49E")
      .s()
      .p(
        "ALRXkQiMkKiClwIjSqDQh+l8hwj0QiYlKjHj5IkekLQiiiXhXh0QAwAXB6AZQB6AYAwAZQBiAwDCB6QDDB5BgAxIG2G2QAPAuAkA/QAUAlAsBJQBPCHAABTQESLvhPO3g",
      )
    this.shape_53.setTransform(97.0255, 218.1842, 0.2249, 0.2249)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#55A07E")
      .s()
      .p(
        "AzDLNQB4o8FQnkQA8jyDiirQA8guCLhZQCEhSBAgzQFnkYEui8QFljeFWiJQmMFKnHGWQk/EcoTHoQmbGajFJiQiqIPAAKAQiPoYB9pTg",
      )
    this.shape_54.setTransform(147.9098, 210.5279, 0.2249, 0.2249)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#69C49E")
      .s()
      .p(
        "AzXc4QAApACen0QCtoiFemkQDPjyELjtQDojRE6jsQAYgYAZgwQAYgxAYgYQDzi3B0haQDJigB5iXQhEETiREXQh7DtjHEXQigC1mSGeQlnFxi4DcQkaFRirE+QjLF4hWGag",
      )
    this.shape_55.setTransform(148.7676, 210.5279, 0.2249, 0.2249)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#408966")
      .s()
      .p(
        "AASP3QgmliglooQg2sdgKhxQhFoMi0n+QihnKkPn2QBAA2C/CfQCeCCBcBSQEbD8C4D3QEKGPB7DvQCxFYBDFLIAAHmQAAS8jzW2QgZAYgwBJQgyBJgYAYQkYrrhzwKg",
      )
    this.shape_56.setTransform(107.221, 193.608, 0.2249, 0.2249)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#FFFFFF")
      .s()
      .p("AhBAKIA8gwIBGALIhQBCg")
    this.shape_57.setTransform(256.276, 290.2223, 0.2249, 0.2249)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#EFEAE8")
      .s()
      .p("AgRCIQiaiChghMQgIgkgHgsQA3AoDhC+IDvjWQATANAbARIkcD+g")
    this.shape_58.setTransform(235.1593, 292.6067, 0.2249, 0.2249)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJASQgUgFgyggQA/AIA8ACIgfAYQgGAFgIAAIgIgCg")
    this.shape_59.setTransform(251.6702, 293.6658, 0.2249, 0.2249)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#FFFFFF")
      .s()
      .p("AiVgcQA4AAApgCIAlAYIAqgfQA8gGA+gOIijBzg")
    this.shape_60.setTransform(270.2451, 291.1389, 0.2249, 0.2249)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#FFFFFF")
      .s()
      .p("ABcCJQhWg4jTidIhaBQQgcgPgSgOICGh4IAPAMQB1BWBlBIQBsBNAfAQICAhpIAyAeIh+BnQg9gBhAgIg")
    this.shape_61.setTransform(248.2005, 290.1492, 0.2249, 0.2249)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#FFFFFF")
      .s()
      .p("AB0hRIABBBIhwBNQg9AOg8AHg")
    this.shape_62.setTransform(273.4843, 288.4452, 0.2249, 0.2249)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag+gwIiYB8IhIgMIDcizIFhDkQgpADg4AAg")
    this.shape_63.setTransform(262.5969, 287.8885, 0.2249, 0.2249)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#EFEAE8")
      .s()
      .p("ABTCCQiQh7hjhOIgChIQBGA2C/ChIAqglQAHAUAPAfIhAA5g")
    this.shape_64.setTransform(231.3408, 281.3819, 0.2249, 0.2249)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AuNCeIFMkoIAPAMQB3BZBkBFQBtBNAeARIGXlOIGHD8IE2jaIAGA9Ik7DfImEj7ImHFAQgPALgzgdQhPgvj2i3Ik4EWQgPgfgHgUg",
      )
    this.shape_65.setTransform(254.9826, 278.6151, 0.2249, 0.2249)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#EFEAE8")
      .s()
      .p("ABFBkQhNhChhhPIAEhDIC5CaIASgQIAEBEIgWATg")
    this.shape_66.setTransform(230.1261, 270.6914, 0.2249, 0.2249)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AuUCgIFjk9IAQAMQB3BYBkBHQBtBMAeARIGXlOIGHD8IEkjOIAPA5IkyDWImEj7QlxEvgWARQgPANgygeQhQgvj2i3IljE9g",
      )
    this.shape_67.setTransform(253.0593, 267.6715, 0.2249, 0.2249)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#1D1E1E")
      .s()
      .p("AhrBHQAHhcAJhUIAIhCIAxgQQBAgTBNgUQgVDpALDMIgSAQIi6icg")
    this.shape_68.setTransform(230.2498, 266.5412, 0.2249, 0.2249)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#1D1E1E")
      .s()
      .p("AiWBRQgGi9AKi8QBhBQBMBCIAQAOIAWgTQAVD4BDCnIgqAlQi/ijhGg1g")
    this.shape_69.setTransform(231.056, 276.3319, 0.2249, 0.2249)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#1D1E1E")
      .s()
      .p("AgngIQAsgCAjgEIgqAdg")
    this.shape_70.setTransform(269.947, 290.6328, 0.2249, 0.2249)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#1D1E1E")
      .s()
      .p(
        "AvMCZQgqh6geiMQBgBNCaCBIAQAOIEdj+QCrBoDaAcQAyAgAVAFQANAEAJgHIAegYQBFABA9gGQAygGAZgIQAZgIgcgZQgTgRg5gjIBShDQBwASBKAIQB2ANBmABICGBXIClh1QA/gNAygRQABDOgHCLQl7AXm5ALQj8AGjOAAQoAAAjdgog",
      )
    this.shape_71.setTransform(252.6405, 293.4947, 0.2249, 0.2249)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#1D1E1E")
      .s()
      .p("AjsBfQgji/gMjkQBjBPCRB7IAQANIA/g5QAmBMArA0QBEBSBfBCIjwDXQjgi/g4gng")
    this.shape_72.setTransform(234.1133, 287.0787, 0.2249, 0.2249)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#1D1E1E")
      .s()
      .p("Ag7gOQgNgSA0ADQAbACA4AJIg8AwQg0gfgKgNg")
    this.shape_73.setTransform(254.745, 289.766, 0.2249, 0.2249)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#333535")
      .s()
      .p(
        "Au3gMIFjk9QD2C4BQAuQAyAeAPgNQAWgQFxkwIGED8IEyjXQAtDGAbDtIk3DbImGj9ImXFPQgfgRhthNQhjhGh3hZIgQgMIlMEpQhDingWj4g",
      )
    this.shape_74.setTransform(253.9141, 273.104, 0.2249, 0.2249)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#333535")
      .s()
      .p("AjBgZIBahRQDUCdBVA4QjZgdiqhng")
    this.shape_75.setTransform(245.9004, 290.824, 0.2249, 0.2249)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#333535")
      .s()
      .p("AhrA0IB9hnQA5AjATAQQAbAZgYAIQgZAIgzAGQgwAFg3AAIgZAAg")
    this.shape_76.setTransform(255.506, 292.2781, 0.2249, 0.2249)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#333535")
      .s()
      .p("AA3gmIABAvQgyARg9ANg")
    this.shape_77.setTransform(274.8733, 288.9457, 0.2249, 0.2249)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#333535")
      .s()
      .p(
        "AksEmQhmhJh1hXIgPgMIiGB4QhfhChEhTQgrg0gmhLIE3kXQD3C4BPAvQAyAdAQgMIGGlBIGED8IE8jfQAWDcAGD4IjpCkQgjAEgtACIlijlIjcC0Qg2gIgcgCQg0gEANASQAKAOA0AgIiABpQgfgRhshMg",
      )
    this.shape_78.setTransform(255.5562, 284.1094, 0.2249, 0.2249)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#333535")
      .s()
      .p("AgQBEQhLgHhvgTICYh7ID9CkQhngBh0gOg")
    this.shape_79.setTransform(262.3158, 288.6364, 0.2249, 0.2249)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#333535")
      .s()
      .p("AuBiWQE3hOFrgiQIMgxIkA1QAhBXAeB0IklDOImGj9ImXFOQgfgQhshNQhkhHh3hXIgQgMIlkE9QgKjMAVjog")
    this.shape_80.setTransform(252.8631, 264.8411, 0.2249, 0.2249)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAZgZABQgYgBAAgZg")
    this.shape_81.setTransform(373.9323, 294.9052, 0.225, 0.225)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAZgZABQgYgBAAgZg")
    this.shape_82.setTransform(356.4055, 294.9052, 0.225, 0.225)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZgBQgYABAAgag")
    this.shape_83.setTransform(340.1836, 293.859, 0.225, 0.225)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAZgZAAQgYAAAAgZg")
    this.shape_84.setTransform(336.1338, 290.4616, 0.225, 0.225)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQABgYAXgBQAYABABAYQgBAZgYABQgXgBgBgZg")
    this.shape_85.setTransform(348.8177, 289.5392, 0.225, 0.225)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYgBQAZABAAAYQAAAZgZABQgYgBAAgZg")
    this.shape_86.setTransform(367.1263, 290.0679, 0.225, 0.225)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYAAQAZAAAAAYQAAAZgZAAQgYAAAAgZg")
    this.shape_87.setTransform(383.3369, 292.284, 0.225, 0.225)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYAAQAZAAAAAYQAAAZgZAAQgYAAAAgZg")
    this.shape_88.setTransform(374.326, 285.0956, 0.225, 0.225)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZgBQgYABAAgag")
    this.shape_89.setTransform(358.8916, 282.2157, 0.225, 0.225)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYgBQAZABAAAYQAAAZgZABQgYgBAAgZg")
    this.shape_90.setTransform(342.411, 280.652, 0.225, 0.225)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQABgZAXABQAZgBAAAZQAAAZgZAAQgXAAgBgZg")
    this.shape_91.setTransform(334.8232, 273.981, 0.225, 0.225)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZgBQgYABAAgag")
    this.shape_92.setTransform(351.5682, 274.4985, 0.225, 0.225)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYgBQAZABAAAYQAAAZgZABQgYgBAAgZg")
    this.shape_93.setTransform(367.2613, 276.0735, 0.225, 0.225)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAagZAAQgYAAAAgag")
    this.shape_94.setTransform(382.9431, 277.7721, 0.225, 0.225)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAZgZAAQgYAAAAgZg")
    this.shape_95.setTransform(375.3722, 270.8424, 0.225, 0.225)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSATIgGgMQgLgVAWgNQAVgNALAWIAGAMQALAVgWANQgIAFgGAAQgLAAgHgOg")
    this.shape_96.setTransform(359.8647, 268.8794, 0.225, 0.225)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZgBQgYABAAgag")
    this.shape_97.setTransform(343.0635, 268.2213, 0.225, 0.225)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAZgZAAQgYAAAAgZg")
    this.shape_98.setTransform(336.3925, 262.3378, 0.225, 0.225)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgYAYgBQAZABAAAYQAAAZgZABQgYgBAAgZg")
    this.shape_99.setTransform(352.0856, 263.6427, 0.225, 0.225)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZAAQgYAAAAgag")
    this.shape_100.setTransform(367.655, 263.9015, 0.225, 0.225)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAagZAAQgYAAAAgag")
    this.shape_101.setTransform(384.1243, 264.6889, 0.225, 0.225)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAagZAAQgYAAAAgag")
    this.shape_102.setTransform(385.688, 253.0456, 0.225, 0.225)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZAAQgYAAAAgag")
    this.shape_103.setTransform(375.8897, 257.8942, 0.225, 0.225)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZAAQgYAAAAgag")
    this.shape_104.setTransform(371.3111, 250.3008, 0.225, 0.225)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYABQAZgBAAAZQAAAagZAAQgYAAAAgag")
    this.shape_105.setTransform(361.2428, 255.2731, 0.225, 0.225)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAYAAABAZQgBAagYAAQgYAAAAgag")
    this.shape_106.setTransform(355.0949, 247.4265, 0.225, 0.225)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQAAgZAYAAQAZAAAAAZQAAAagZAAQgYAAAAgag")
    this.shape_107.setTransform(345.9434, 253.5744, 0.225, 0.225)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQABgZAXABQAZgBAAAZQAAAagZAAQgXAAgBgag")
    this.shape_108.setTransform(341.1005, 248.0846, 0.225, 0.225)

    this.instance_2 = new lib.Group()
    this.instance_2.setTransform(450.7, 204.7, 0.2249, 0.2249, 0, 0, 0, 308.1, 64.5)
    this.instance_2.alpha = 0.2813

    this.instance_3 = new lib.Group_1()
    this.instance_3.setTransform(283.75, 200.85, 0.2249, 0.2249, 0, 0, 0, 310.1, 47.4)
    this.instance_3.alpha = 0.2813

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#1D1E1E")
      .s()
      .p(
        "AgwPHQlsgfi3gMQk/gVjkAPIAAlUQAAoXAZkFQAomzCClFIDzAAQh2GuBkGNQBtG2FaDyQApAQCOA+QBwAyBFAYQDSBKCbgfQgQgggjgaQgQgMgxgcQhPgtAAg0QBYAACDANIDbAXQEHAWCvg6QgRAyggCvQgVBzgcAAQj7BUkoAUQhfAGhvAAQibAAi5gMg",
      )
    this.shape_109.setTransform(470.5161, 278.2173, 0.2249, 0.2249)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#333535")
      .s()
      .p(
        "AmxKbQkyioiKkUQhdjYgKk+QgDhoAEioQAFjQAAg3QHGggIYBRQFCAxJ4CSQAADbAMGcQAAFmg8ESQi6A+j8ggQhTgKiIgbQipghgygJQAAAhAfAZQASAPAxAZQAwAYASAPQAfAZAAAhIgxAxQlhgokQiVg",
      )
    this.shape_110.setTransform(475.4839, 275.2434, 0.2249, 0.2249)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#1D1E1E")
      .s()
      .p(
        "AgXUWIqAg6QmCgikHAAQggihgKjkQgGiGAAj/QAdiuAekGIAymwQBBn+B1lDQAggfBCgLQAkgGA9AAQh8HFgoF2QgyHGBEFzQCAC3C4CUQC4CUDRBWQDbBbDSAHQDjAJDChYIAAj0QDjCICoA7QDqBSDFghQgUAogcCOQgWBtgbAAQkvBVlZASQhlAFhxAAQjDAAjmgQg",
      )
    this.shape_111.setTransform(358.4379, 270.5468, 0.2249, 0.2249)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#333535")
      .s()
      .p(
        "AitRtQjggfjEhQQnBi4irl4QhZlGBBnDQALhLA2k1QAqjvAOibQJOhoJrBWQIlBMJwDqQAAJsgMEvQgVH1hBGnQkvAAiSgfQj4gziBihQAAAaAGBSQAEBAgEAjQgKBmhdAfQhRAIhSAAQh+AAiBgSg",
      )
    this.shape_112.setTransform(362.782, 266.5897, 0.2249, 0.2249)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "AQqc3Ql/gCpJghQtagwhtgFQopgXmoAPQj+rag+vqQgYl2gCoAIABtyQBigYDCgZQDDgYBhgYQhVF+AAErQAAF7CGEtQBhCrDBFjQCwE7CODGQC9EHDJCnQDrDDESBWQCChigVipQgQiAhdiMQAAgxAGgSQAKgeAgAAQA8APBWAkICYBAQDABPCOAAQBegfBAhgQAXgiAYgzIAmhPIBFkjQAqioAphwQByk1Ddi9QCwiODbhyQDMhqDjhMQAAOcgSHNQgeMChiJoQmpAvn1AAIgzAAg",
      )
    this.shape_113.setTransform(300.4707, 257.2876, 0.2249, 0.2249)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "An7YgQiQg7iBiBQj0kMh0iJQjBjkiGjCQlOnnhinlQg6jMAWkyIAXj/QANiZAAhnQGlhlH0gmQGNgeIZAFQE4ADJ1ARQI4ANF8gPQA3GCAMBlQAeEHAADfQmHCCjxCPQlAC/imEIQguBdgqCNQgZBTgtCqQhbE+iMCoQhEBVheAJQhMAIhtgpQgigNifhLQh2g4hHgOQgdBXBCCEIA7BtQAkBCAOArQAAAfgYA9QgMAegNAYQhAAghJAAQhRAAhcgmg",
      )
    this.shape_114.setTransform(306.0266, 249.2461, 0.2249, 0.2249)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#333535")
      .s()
      .p(
        "AhgDzQASiVAtjXQAzjzAYh5QAACdgWDPIgsFsQg5HLAbEPQhek7A0mfgAAkrYQgKiTgfhgQCTBYghCbQgGAegiBgQgaBJgBApQAAicgGhUg",
      )
    this.shape_115.setTransform(450.4203, 275.8928, 0.2249, 0.2249)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#333535")
      .s()
      .p(
        "AheJIQAEgOAqhxQAbhJAAgsQAAjCAYmEQAYmFAAjDQBaCWgLDXQgCAxgPCFQgNBzAABEQgsEFgXDIQgeEHAADHQh1hYAsibg",
      )
    this.shape_116.setTransform(451.8687, 235.4361, 0.2249, 0.2249)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#333535")
      .s()
      .p("AgzEEQgDhdAWiPQAbidAIhNQAQiFgQheIAxgwQAABsgPCLQgIBRgUCdQggEkAaDCQgwhjgGh/g")
    this.shape_117.setTransform(433.8034, 286.8263, 0.2249, 0.2249)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#333535")
      .s()
      .p(
        "AheG8QAYilA4kWQBAk9AUh5QAMkvAAieQAAkZg9i1IBhAAQAfGshJIgQgXCogzE0Qg3FSgWCeQAAB5gMDzQAADVA8CYIgwAwQhdmPBKoGg",
      )
    this.shape_118.setTransform(435.5919, 246.3696, 0.2249, 0.2249)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#333535")
      .s()
      .p("AgqAAQALiSAfhgIAxAxQgxAfAABAQAAAfASBcQASBRgIAqQgLA+hAAhQAAieAFhVg")
    this.shape_119.setTransform(417.4788, 292.2959, 0.2249, 0.2249)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#333535")
      .s()
      .p(
        "AilQBQgKkXA0lrQAZi0BZnWQBNmfAajxQAQhRgKhlQgGg9gYh5QgYh6gGg9QgKhmAQhRQB5B6AADhQAABAgMCCQgMCBAAA8QgPENg/F8QgkDWhKGpQg5FwgHEQQgJFaBDEvQhlkhgNlUg",
      )
    this.shape_120.setTransform(419.7316, 250.743, 0.2249, 0.2249)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#333535")
      .s()
      .p("AhGHgQgEgZAEgnIAGgzQAskIAVjFQAfkHAAjHQA+C6ggEUQgSCdg8EwQAAAYAYBJQAYBJAAAYQhbAAgLhPg")
    this.shape_121.setTransform(401.4547, 285.1849, 0.2249, 0.2249)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#333535")
      .s()
      .p("AiIPHQgRi8Apj0QB5oPAwmkQA7n6gjm7QA9C3AAEXQAACfgMEvQgSBvhCFOQg3EbgYCrQhKISBcFyQhmiqgTjhg")
    this.shape_122.setTransform(403.6247, 244.1829, 0.2249, 0.2249)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f("#333535")
      .s()
      .p("AhpMKQAHivAwkfQA0pDAOjGQAemqAAlgQA9CYAADtQAACGgMD/QhKG8giGWQglGjAAGwQhBjDAKkLg")
    this.shape_123.setTransform(386.9175, 269.878, 0.2249, 0.2249)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f("#333535")
      .s()
      .p(
        "AhXI8QAAgZANg3QAMg2AAgZQAsk4AVjdQAfkxAAjnQAyCGAECXQADB0gbCfQgPBbgkC3QgbCkAAB4QAAAZAYBIQAYBJAAAYQh5AAAAhUg",
      )
    this.shape_124.setTransform(388.2906, 227.2345, 0.2249, 0.2249)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f("#333535")
      .s()
      .p(
        "AigTxQAEiBAXi0QAcjKAMhhQBmudAfllQA9q8AAoiIAwAAQAiJfg6KRQguIGh7LqQhJEkAAE8QAAE7BJEkQh+j8AKljg",
      )
    this.shape_125.setTransform(371.4902, 255.6617, 0.2249, 0.2249)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "AlJTYQAAhJgHh1IgLjHQgLjyAdiTQBKm8AjmWQAlmjAAmwIDBDCQCSDpA3F4QAPBmAYDOQAXC1AdB1QAgBwgECXQgCBFgUDLQgRCsAEBkQAHCUAxBzg",
      )
    this.shape_126.setTransform(393.1835, 269.878, 0.2249, 0.2249)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "AlBH/QgQhyAKiOQAGhVAZiqQAYipAGhVQAKiOgQhyIEjEkQAfAfA4AiQAfAUBAAlQBuBCAAA3QAdBXgLCcIgLB+QgHBJAAAsg",
      )
    this.shape_127.setTransform(409.4052, 286.2811, 0.2249, 0.2249)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "Ahsb0QgSgZgSgrQgZg9gGgLQgMhhgfjDQgejCgMhiQgrlUAfjzQBtsJArmFQBJqhgfnvQAMAACRgSQBVgLAAAdQB6DVAAFhQAABlgMDKQgMDKAABgQgbDwhBGZQhJHJgYC2QhfLsBZIdQh7gfg0hIg",
      )
    this.shape_128.setTransform(367.8678, 255.4253, 0.2249, 0.2249)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "Al2PNQgpkfARjzQAUkgBmjLQAphSAwiVQA7i4AWg1QAziABBhRQBQhiB3g0QAYgYAxgYQAxgYAYgYQAAAwAYBJQAYBJAAAxQgOCwgkD9Ig7GkQhCH3AdFdg",
      )
    this.shape_129.setTransform(442.3028, 275.8928, 0.2249, 0.2249)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "AjzQVQgigGgKAAQghlBAzmeQAZjSBmoxQgMieAAhPQAAiMA9g9QAeg7B/ggIB0gZQBJgQAqgOQAfFuiAHfQgmCOhUEIQhVESgjCAQAABJgYB5QgZB6AABJQgeA9hDAAQgUAAghgHg",
      )
    this.shape_130.setTransform(455.6774, 274.3919, 0.2249, 0.2249)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "AlsHsQAAieAGhVQALiTAghgQBGBGBSAuQBJAoByAnQAhAAAKgfQAGgSAAgxQhUi1grhVQhIiShch6Qgeg8AqAAQAZAAA8AMQAlAMBQAlQBUAnAqAPQCYA3Bbg9QAABdgPB+QgIBJgUCRQghEPAbCmg",
      )
    this.shape_131.setTransform(425.6804, 286.6914, 0.2249, 0.2249)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f("#EFEAE8")
      .s()
      .p(
        "Al3dpQhKklABk7QgBk8BKkkQBrvPAakhQA9qxAAo/IBPgYQBVgZAdAAQAABtgNCLQgJBRgTCeQgiEkAcDCQA5CSCUBVICHBGQBWAtA7ArQgbDjhCGBQhJGygWCpQhhLBBaH/g",
      )
    this.shape_132.setTransform(378.9389, 255.1164, 0.2249, 0.2249)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f("#FFFFFF")
      .s()
      .p("AjeFGQAMhmA3l/QgMjPAAhtQAAjDA9h6QAgggBkAUQA+ANCRAwQAgFDgUF+QgKDMgyH0Im1CSQAAjfAekHg")
    this.shape_133.setTransform(457.0664, 235.7573, 0.2249, 0.2249)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag4IdQg0gphEhFQhKhOglglQgQhzATiEQANhcAniSQAyi7AMg0QAdiIAAhwIG0AAQAAEAgeEwQgMB5g3G1QAAAZAZBIQAYBJAAAYQidAAiShzg",
      )
    this.shape_134.setTransform(382.4054, 227.2345, 0.2249, 0.2249)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhpbDQgtgFhAg2QhJhDglgdQg/gyguAAQgeneBhqxQAWicBEmrQA7lvAbjYQAMkwAAieQAAkYg9i2QBRAgBeAKQA4AHBtAAQBtAAA5AGQBdAKBRAgIAAOcQgPDNgrEGQgKA/hHGJQhoI+AAFeQidA/iSg/Qg1gXhDgtQhKg1glgZIgxAxQBMCXBMBuQBSB3BrBqQAgAhAKAoQAFAYAAAxQgsA8g0AAIgMgBg",
      )
    this.shape_135.setTransform(427.2421, 252.5109, 0.2249, 0.2249)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmiO5QAMkLAAh6QBhpzAllAQA8oPAAmlQBBgRBZAKQA1AHBsAYQBuAYA1AGQBYAKBBgQQAAJIgSEdQgeHchhFkQirARhwBdQheBNhCCOQgqBZg3C4Qg6DCgiBQIAAAwQg8iYAAjtg",
      )
    this.shape_136.setTransform(443.039, 245.7088, 0.2249, 0.2249)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAsX2QhjhAhMhMQjnhjg9jrQgtitAtkPQAWiwA4mJQAzliAXjDQBJpzgenrIJ3AAQBaHhhgKuQgZCshIGbQhCF2gaDRQAACSgME8QAAEYA9C2QhqgjhrhEg",
      )
    this.shape_137.setTransform(411.7034, 250.1977, 0.2249, 0.2249)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhaMDQhWkIgql8Qgeg9g9gxIg3gjQAxmzAMjeQAVlsghkkQBRgQBeAKQA4AGBtAYQBtAYA4AGQBeAKBRgQQAAGig9IZQgeEMhoLSQAAB5gMDbQAAC8A9CYQjJjqhslRg",
      )
    this.shape_138.setTransform(397.2476, 242.4308, 0.2249, 0.2249)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f("#333535")
      .s()
      .p(
        "AA7GCQhuglhWiTQg1hbhQjUQhRjYgvhSIIVAAQAABhgMDDQAACpA9B5QAxAAAYAGQAoALAhAgQApAAAUAfQAWAggiAiQiCBHhoAAQguAAgogOg",
      )
    this.shape_139.setTransform(499.8125, 357.1185, 0.2249, 0.2249)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "AC2HLQtJiZrcgRQsigTrgCNQhIjbAAjCQAAjCBIjbQHshmIugMQHLgKJGAzQEiAZLuBZQKXBOGDAbQGwAAGjglQGXgjG8hKIAxAwQgxEkgqCLQhHDpiCCiQpsBJpzAAQpxAAqRhJg",
      )
    this.shape_140.setTransform(425.4873, 310.4585, 0.2249, 0.2249)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "Av8cTQgMgMgNgSQgYgkAAgfQBPmLBtlIQB/l5Crk2QEcpgC+nTQDmo4CrohQC4AADfBVQB/AxD0BuQAAD0hVE1QgxCwhtFUQhgDci0FlQjYGyhDCQQlDKzhaIYQjbBKjaAAQjbAAjbhKg",
      )
    this.shape_141.setTransform(513.794, 277.8525, 0.2249, 0.2249)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "APFK8QmPgjrghjQsKhpligiQnkggpJAyQk8AbryBlIAAyOQIih4J1gWQIQgSKPAyQGzAiLsBZQNSBmFEAfQF9AiGsgcQF4gZHVhPQAtAAA/gHIBogLQB3gLA6AdQBUBUAbB6QAVBggKCOQgHBSgTCkQgOCQAPBZQAAA9g2A3QhDA3gZAYQoiCIplAaQiNAGiWAAQmMAAnJgpg",
      )
    this.shape_142.setTransform(433.7298, 335.2362, 0.2249, 0.2249)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f("#EAEAEA")
      .s()
      .p(
        "AR3YRQnBgZokhPQwPizwVgJQvwgJwQCVIAAjDQJainKugnQIPgeL5AqQFNAdH7BAINLBsQP6B4K/gdQClk6ComKQB3kXCum/QDlpRA2iGQCkmXCOktQCtAjDYBFQDBA9DEBOQklJppANDQgwBHm8J3QksGri7EgQkJATkRAAQjiAAjogNg",
      )
    this.shape_143.setTransform(445.9925, 269.5891, 0.2249, 0.2249)

    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "EAXJAnjQsigJrZhGQtRhqttgJQs0gJuKBMQglAAg8gfQg9geglglQhCoUgJpzQgGnWAbqoQAir+ANmAQAXqYgQnwQB7iZD4gLQBOgDCFAKQCUALAwAAQVqiRVqCRQPMB1NTARQO7AUNkhpQBMAABAAlQBEAnAjBGQA8Dwg2FYQgMBPgqDVQgkC4gNBrQgxGWhbHyQg3Esh5JTQh6JVg2EqQhcHzgwGVQqfAgpaAAQiDAAiAgCg",
      )
    this.shape_144.setTransform(441.6583, 244.8544, 0.2249, 0.2249)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f("#949B9B")
      .s()
      .p(
        "EAa0AwoQn/gsr9hWQtShimqgtQ37ikv9AAQgwqDAOspQAHmpAtv4QApuaACoIQAEsehBqNQBJAACqgTQCbgLBYAeQCGAbC2B9QB9BWAYAPQBYA4BPAfQDDBwEjDrQF8EzBqBLQH2G4JWJTQBHBGO8POQJnJyGuGPQJQImIzGuQCNBqBtCoQBlCdAmCZQAcBVhACMIg8B8QgjBMgPA9QihAAjoAHImBALQh+AEhzAAQkxAAjogWg",
      )
    this.shape_145.setTransform(432.547, 260.6228, 0.2249, 0.2249)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f("#333535")
      .s()
      .p(
        "AmWFJQgRgRAGgiQAGgfAYghQA4hPBHAAIAxAwQA9jBAYhhQArirgfh5IIWAAQgYAxgxB5QgxB6gYAwQg9A8geA9QgSAkglBVQhMCYiaAxQg1AQgzAAQhpAAhfhHg",
      )
    this.shape_146.setTransform(213.4406, 357.1224, 0.2249, 0.2249)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "AKbHXQijgOqrhGQoNg1lKgVQvehArJB8Qg7gdgghKQgdhbgZgxQgPgsgPhBIgZhtQghiDg6hXQEjjCHbgfQEmgUIhAyQHCAAKDA/QFrAkLVBNQJzA6HFgIQJEgLHmh2QBUBUAbBjQAVBNgLBpQgGA8gTB5QgOBsAPBLQAAAkgfAfQgdAeglAAQo2Bqo6AJIhyABQngAAn7hDg",
      )
    this.shape_147.setTransform(287.7252, 310.2013, 0.2249, 0.2249)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "AJad3Qg1gCihgPQiIgNhSAAQgcAAgUgfQglg2gMgNQjrnXi3r1QgWhYh/osQhamOhHkBQgkhtiHlPQhzkgg3jAQAAgfAZgkIAYgfQBJgOBtgdIC3gwQDbg3CRAAQELHdDCMIQAnCbBzH6QBdGfBFD4QCTIAEjH9IAACSQiGBRjTAAIgygCg",
      )
    this.shape_148.setTransform(199.3679, 278.4806, 0.2249, 0.2249)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f("#B8BCBC")
      .s()
      .p(
        "AQ+K9QmoghrmhaQtBhllPgfQmegjm1AdQl6AYnZBPQidAMhJAAQiAAAgfg9QiDmKBTpBQAdh3CxghQAjgHBygMQBagKApgOQHvhEIrADQHSADI/A4QFrAjKlBXQLPBdFLAiQHlAgJJgyQFBgcLthkIAASOQoiB4ptAWQiNAFiVAAQmWAAnXglg",
      )
    this.shape_149.setTransform(279.3997, 334.8199, 0.2249, 0.2249)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f("#EAEAEA")
      .s()
      .p(
        "AXLZyQmXgPodg6Iu0htQo5hCl6gZQoGgjmvAQQhGh+k/oYQj5miiMkYQiNj9kWl7Qlxn2hXiDQChhADLhwQB8hEDxiRQAighBAAVQA2ASArArQD4IvDcMQQB/HHDnOcILZAAQYfDOSWA4QWvBETjiHIAADCQo9CHqbAdQjBAJjXAAQl8AAnFgbg",
      )
    this.shape_150.setTransform(267.1807, 267.258, 0.2249, 0.2249)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f("#D1D1D1")
      .s()
      .p(
        "EAXsAneQutgKrHhdQsohRqkgQQshgUqqBEQiCqqhltwQg9oWhhwoQhgnggsj5QhHmVgglEQAAgpAegzQAhg2AiAAQLmicPZAWQFDAHIXAfQKVAmDPAIQS/BiJgATQP1AeMqhhQB7AAA2BVQARAbASA0QAWA8AJATQA5NTgsU4IgoRHQgVJ+AAHIQAgChi4BLQiFA3jKAAQrhAInpAAQj0AAi3gCg",
      )
    this.shape_151.setTransform(271.9093, 244.4184, 0.2249, 0.2249)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f("#949B9B")
      .s()
      .p(
        "EgzsAudQgTgxgYhhQgYhigTgwQgehRgxhBQB5l9DrlUQDOkqE6kmQD4jpF9kfQHFlLDniqQEYixGUjnIKYl9QMPnKHumWQIBmxF3lfQGzmXF7mdQA9g+BzABQAhAABIAGQBHAGAlAAQA+OCgfTZQgTLOg9WOQAAELgMIXQAAHUA9FOQjiAAkcAeQinATlYAxQoXAgqVAKQmNAGsWAAQsWAAmMAGQqVAKoXAhQhYAPiDAOIjbAaQkHAhiuA6QgxhBgehRg",
      )
    this.shape_152.setTransform(279.1241, 260.4875, 0.2249, 0.2249)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AI2R5QhzgEnDgWQlcgQjbAAQk5ACkHAhQgQj6AQlGIAko2QAWlTgDjkQgFk3gykJMAjtAAAQAQD+gJFCQgEBygWHFQgQFaAADcQACE4AhEIQijAKi+AAQhrAAh0gDg",
      )
    this.shape_153.setTransform(520.2774, 93.2036, 0.225, 0.225)

    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EANXAjyQoBgutnAKQplAHhQAAQmKABkrgOQgxmlAIoMQAGlbAppeQAuqsAJkMQAToUggmdQAMj7AAh9QAAjbg8icMA7PAAAQBTHTgBI2QgBGTgyJ6QhFNugJCmQghJUAgHNQAgBTAKBpQAGA+AAB9QhxgOiOAJQhVAFiqAVQiqAVhVAFQg4AEgzAAQhQAAhFgJg",
      )
    this.shape_154.setTransform(367.8098, 106.5206, 0.225, 0.225)

    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .f("#FFFFFF")
      .s()
      .p("A0gaOQgQloAQnfIAktHQAWn2gDlQQgFnJgyl+MApBAAAQAQFogQHfIgkNGQgWH4ADFPQAFHJAyF+g")
    this.shape_155.setTransform(199.6093, 126.1902, 0.225, 0.225)

    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f("#385B8E")
      .s()
      .p(
        "A82T9Qt2gZhcgxQhZgvAeluQAbk7BqnWQBimxBzleQB3lqBBgvQAtghI4gdQIagcLLgLQLxgLIaAPQJmAQB2AvQCEA0D8FtQDcE9D7HQQDrGwCRFVQCXFkgnAqQg4A9tjAoQsDAkxjAHQkMACj9AAQsHAApogRg",
      )
    this.shape_156.setTransform(466.7941, 413.5187, 0.225, 0.225)

    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f("#213E60")
      .s()
      .p(
        "A9LUVQucgdiDg6QhlgtARlxQAPlSBonOQBonSCJlQQCZl2CEgzQA8gYIzgaQIugaKsgLQL3gNIQANQJpAPCMAvQCzA9EZFyQDzE/EGHWQDwGvCQFfQCUFogvA0Qg9BCt1AsQsaAox8AIQkFACj3AAQsyAAqLgVg",
      )
    this.shape_157.setTransform(466.9759, 414.4243, 0.225, 0.225)

    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f("#39B54A")
      .s()
      .p(
        "A9MT1QtEggg+g6QgrgpBrlkQBmlXC0mzQDAnRCzlAQDOlwB+g4QBwgyJjgXQIYgULyAGQLMAFIaAYQI6AZAvAiQBCAwCDFqQB+FeBxGzQB6HTAmE8QAtFthUAuQhXAwtRAfQsPAdwbACIhvAAQvuAArBgag",
      )
    this.shape_158.setTransform(252.3533, 406.6457, 0.225, 0.225)

    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .f("#388D3B")
      .s()
      .p(
        "A+gULQtVgjhDg/QgzgyBmloQBjlhC5mvQDJnZDIlCQDpl1CrhBQEHhjbsAQQKtAGIvAWQI0AWA9AYQCGA1CkF1QCTFQB3HTQB2HLAcFSQAfFwhgAsQh7A5t1AjQssAhw7ABIhlAAQwLAArageg",
      )
    this.shape_159.setTransform(252.2299, 407.524, 0.225, 0.225)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_159},
            {t: this.shape_158},
            {t: this.shape_157},
            {t: this.shape_156},
            {t: this.shape_155},
            {t: this.shape_154},
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
            {t: this.instance_3},
            {t: this.instance_2},
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
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(451.1, 293.9, 218.10000000000002, 150.3)
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681C",
    width: 750,
    height: 480,
    fps: 24,
    color: "#F9AF0F",
    opacity: 1.0,
    manifest: [],
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681C"] = {
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

