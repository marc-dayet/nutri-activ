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

  ;(lib.tetehommebarbu = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgTAWQgsggiWh+QBOAXBeARQA2AJB2AQIBPAKQAHAtgHA3IgQBiQhlgghwhTg")
    this.shape.setTransform(34.726, 36.4572, 0.2221, 0.2221)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F2ECEB")
      .s()
      .p(
        "AiKB9QhCgeg6gOQgngMgIghQgFgUAFgpQAGgsAhgmQAgglAwgRQBfgYCQAFQBSADCjAIQAYAxgHAxQgGAygkAoIgngFQiSA5hrBvQhMgogngRg",
      )
    this.shape_1.setTransform(33.3867, 34.8823, 0.2221, 0.2221)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#F2ECEB")
      .s()
      .p(
        "AC7GlQingGiXg9QgagLiDgZQhggSgxgtQhqhngcjEQgbjBBBiRQAcgDBggUQBNgQAuAAQA4ApCaCIQCBByBZA5QAvAaBdAwQBRArAzAmQAYANAxAZQApAZAPAiQAsBOgWBCQgUAogmANQiPAuiVAAIgggBg",
      )
    this.shape_2.setTransform(27.2623, 36.2412, 0.2221, 0.2221)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#F2ECEB")
      .s()
      .p(
        "AmqLFQgLgXgghbQg/i2hthrQhPhPgnh1QglhsAEh4QACh0AnhjQAnhlBCg2QCgiCC4hJQCzhHDQgTQClgGBqAMQCQARBuA3IAdAEQAcATA/AhQAzAhANAuQgDAWgQASQgRASgXAFIhsggQhDgSgvgEQiCgNg/BUQgyA+ADBcQADBHAiBWQgBAHAEANQAFAOAGAIQADAXAVAkQAaAqAGARQADAegDAZQgDAYgLAdQgLAWgKBfQgJBSgaAZQgYASgygTQgugRgVgcQAQhCgMhNQgNhXgsgoQgWgSgZgJQgcgKgWAFQhiAfgpBoQgnBjAjBjQAYBFBQAiQAeAOB3AbQhAAEg4AkQghAWhMA6QgiAahvBLQhjBIgSAvQgngWgZg1g",
      )
    this.shape_3.setTransform(17.6225, 17.4074, 0.2221, 0.2221)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#D88D68")
      .s()
      .p(
        "AAkGIQhTgSgmgLQhAgSgkgbQh9hYgijJQgNhIgDhsIgGi2QAqgKBUgdQBVgdApgKIBpB0QA7BDAkA3QAJALAbAYQAbAYAJALQAIAQAUAaQATAYAEALQAdA/AyCSQAtCHAiBEQhMAZhaABIgDAAQhQAAhSgUg",
      )
    this.shape_4.setTransform(21.2566, 37.9674, 0.2221, 0.2221)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F2ECEB")
      .s()
      .p(
        "AjPAlIARgTQAMgOAMgFQB/gvC3AEQAKABAYgDQAUABAGAMQAIARgIAQQgJAQgWAAQgsgBiRAXQg6AJgvAAQgwAAgmgKg",
      )
    this.shape_5.setTransform(34.6205, 19.5709, 0.2221, 0.2221)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#246B93")
      .s()
      .p("AgRAqQgWgMABgSQAGgSAAgHQADgEAEgLQADgKADgEQAfgLASAYQASAYgTAeQgLASgKACIgGABQgGAAgNgEg")
    this.shape_6.setTransform(35.8409, 22.7173, 0.2221, 0.2221)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#F0A476")
      .s()
      .p(
        "ADbN4QlqhRkXhmQh3hggwg2QhRhbgVhgQgvi4AAjOQABiwAjjTQBGkMC/hwQBBglBDgXQBBgXBOgNQDigSCaBVQCsBgBjDrQA2B/AOBcQARBsgbBnQgBAKACAVQACAUgBAJQAIAkAmAvQAXAcAzA8QBeB1gaBwQgkAsh4gdIhfgZQg0gPgYAAQgYAHgLAFQgTAJgBAMQgcBPgFB8QgGCvgEAeQgDAegdAWQgXASgZAAIgJgBg",
      )
    this.shape_7.setTransform(28.6104, 23.0873, 0.2221, 0.2221)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F0A476")
      .s()
      .p(
        "ABoIzQiOgKh5g6QiMhDgrhoQgZgzgUhLQgWhQgBgzQAFh7gWiJQgdiwgEhQIB9hxQA7AUBVAoICOBEQBCAiCDBIQCEBJBCAhQAUBZAhCtQAgCaAeBmIhIBcQgrA2gkAhQheBYhsAAIgEAAg",
      )
    this.shape_8.setTransform(19.258, 40.5434, 0.2221, 0.2221)

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
  }).prototype = getMCSymbolPrototype(lib.tetehommebarbu, new cjs.Rectangle(0, 0, 45, 53.1), null)
  ;(lib.mainsbarbu = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#EDA273")
      .s()
      .p("AiRCVQgggsAbg7QAohCAPgeQAPgPAZgjQAZgjAPgPQAdAoA8BVQA8BUAeAoQhkAegzAKQg9AMg3AAQgWAAgUgCg")
    this.shape.setTransform(23.3304, 5.4794, 0.2221, 0.2221)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#EDA273")
      .s()
      .p("AiRCVQgggsAbg7QAohCAPgeQAPgPAZgjQAZgjAPgPQAdAoA8BVQA8BUAeAoQhkAegzAKQg9AMg3AAQgWAAgUgCg")
    this.shape_1.setTransform(24.2304, 9.2794, 0.2221, 0.2221)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjaFNQgPgDgGgTQgOgoAAgFQgCgZAagUQAogZBGg3QBGg3AogZQBwhdAlhWQAJgkgNgbQgPgigpAHQgfAAgtASQg1AWgeAKQgsAAgQgyQgHgTALgOIAagbQBcg6BUgFQBkgHA/BGQAgA0gLBJIgfB9QgGAegbAhIgvA4QiiCTinBTIgXACIgGAAg",
      )
    this.shape_2.setTransform(19.0932, 12.4639, 0.2221, 0.2221)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhTH7QhFgTg2guQiXisgzkZQgbiUgLlmIN5AAQAQEYg4D5QAAAFgKAPQgKAPAAAFQgQBTgYAvIgBAZQgCALgHAOQgyBtg8BBQhIBOhiAcQgcAGgdAAQgnAAgogLg",
      )
    this.shape_3.setTransform(10.184, 13.6105, 0.1814, 0.1814)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    // Calque_1
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#EDA273")
      .s()
      .p(
        "AhCBkIAAAAQAEgLgCgPQgDgcgIgBQgHAAgCgFQAXg0ANgZQAWgsAbgWQAbgEAYAQQAXAQAJAZQADAKgDAKIgOAeQgIAOgKAPIgYAfIgEAHQgDAEAAACQgCAdgwADIgOAAQgYAAABgFg",
      )
    this.shape_4.setTransform(24.725, 10.4738)

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.mainsbarbu,
    new cjs.Rectangle(2.1, 0, 31.199999999999996, 23),
    null,
  )
  ;(lib.Interpoler14 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#727272")
      .s()
      .p(
        "AB1E+QjfgNisg/QiLgziRhzQgtgkgogmIgggeIBuhWQCMhhCYg1QHpipGzFNQAbAVAFA0QAFAzgSA7QguCUiDAyQhsAoioAAQguAAgygDg",
      )
    this.shape.setTransform(-0.0135, -0.0016, 0.222, 0.222)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-15.1, -7.1, 30.2, 14.3)
  ;(lib.Interpoler13 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#727272")
      .s()
      .p(
        "AB1E+QjfgNisg/QiLgziRhzQgtgkgogmIgggeIBuhWQCMhhCYg1QHpipGzFNQAbAVAFA0QAFAzgSA7QguCUiDAyQhsAoioAAQguAAgygDg",
      )
    this.shape.setTransform(-0.0135, -0.0016, 0.222, 0.222)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-15.1, -7.1, 30.2, 14.3)
  ;(lib.Path_3_0 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiWGgQhBgRgcgaQgWgUg9k8Qg3kcgGhFQgDgnAcgVQAZgTBKgUQBSgWDxAFQEBAGA0AkQAvAihDExQgmCrg2C2QgPA0hZApQhPAkhFACIgXABQhFAAg/gSg",
      )
    this.shape.setTransform(38.8707, 43.3205)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0, 0, 77.7, 86.7), null)
  ;(lib.Path_3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AILDYQg6gDjSgEIkMgFQl7gIk2ggQm3gtj1hZQhUgeBqiGICJgWQBRgOA3gGIAjAAIAZgEQARgCAIgDQAJgDALABIAUACQI5g7J9A7IAyAAQApAFBWAEQBWAFAtAFQAZAEAtAAQD4ATHnAhQAyABAQAeQAOAcgWAlQgYAmgzAcQg6AghNAFQhgAGjyBAQjVA5h1AAIgKAAg",
      )
    this.shape.setTransform(142.1281, 21.5926)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Path_3,
    new cjs.Rectangle(-0.3, 0, 284.90000000000003, 43.2),
    null,
  )
  ;(lib.Path_2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "ABxBxIg6gDIg6gDQhSgEhDgRQhggXg1gvQgSgQAXhGIAegLQASgIALgDIAIAAQADgCAIgDQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAIAEAAQB7gfCKAfIALAAQAJADATACQATADAJACQAFADAKAAQA2AKBqARQAYACgMAwQgMAwghAGQgVADg1AiQgtAdgaAAIgCAAg",
      )
    this.shape.setTransform(30.9021, 11.3285)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0, 0, 61.9, 22.7), null)
  ;(lib.Path_1_2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CECECC")
      .s()
      .p("Aj/AqQhYgRAWgjQAOgKAYgKQAwgVAzgBQFMgGBcAZQBAASARAUQAOASgWAOQgPAJiXADIjlAEIgpABQhKAAg6gMg")
    this.shape.setTransform(32.619, 5.4102)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Path_1_2,
    new cjs.Rectangle(0, 0.1, 65.3, 10.700000000000001),
    null,
  )
  ;(lib.Path_1_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AmXCEQkcAAlLgFQiYACgTg/QgIgZARgcQAQgaAegSQAxgeClAJQBgAFDRAVQBJAHGqABQGEABBsASQBkASBpAMICGggQCRgsA/gzQBDg2gEAcQgEAfgkAWQgMAHiMBLICLgpQBLgXAZgSQAzglAIATQAHAUgYARQgGAEhCAdQhPAigxAYIBcgGQAvgGAXgPQBLgyAyAZQAZALAKAWQhQAbhlAcQjKA2hsAAQg1AAi8gaQiKgThWAXQhXAXnzAAIg+AAg",
      )
    this.shape.setTransform(119.672, 13.1149)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0, -0.1, 239.4, 26.5), null)
  ;(lib.Path_1_0 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EghYBLJQlEiXjMhLQDVqQEgrYQDupZFMrxQAHgHANgTQAOgUAGgHQB2keC5l3QDcm0BwjhQB/juDLlwIFLpYQGErIDpoDQAGgGAOgUQANgUAGgHQKK1xI35jQDvBhEgCBQCzBQFTCdQqnf1vOdiQiSEYovP5QmwMXj7IFQrLX4oQYeQhygwmTi8g",
      )
    this.shape.setTransform(266.475, 504.525)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0, 0, 533, 1009.1), null)
  ;(lib.Path_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EghdBLOQliihiphOQFUv7GZvDQGgvQH2u8IAnhdQAbg7ANghQM92wJMzuQKd2aHE1fQCsBQFfCeIIKDuQngWepqVIQjVHGhlDOQivFoifEiQk8IyiCDvQjyG8i5FvQlZJ5kGJVQhWDGixGPQicFkhhD7QiBE9iYGoQgqB1jbJvQivhRlbidg",
      )
    this.shape.setTransform(266.475, 505.2)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, 0, 533, 1010.4), null)
  ;(lib.Path_0 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EghFBLPQhxg0hhgjQHj27Le5PQAHgHANgTQANgUAHgHQAziIBVimICbklQCSlaDglwQLb0CI7z3QJG0SG71BIDMBRQB5AxBUAqQgXAvgVBPIgjB9QnoV+o6TlQjjHzkpIyQjhGplcJnQhWCfieEwQifEwhWCfQgOAigaA7QgbA8gMAgQgHAGgNAVQgOATgGAHQgUA1guBjQguBigUA2QgHAHgNAUQgNATgHAHQisFuhyEGQiSFQhuEkQgPAqhMCsQg6CDgXBcQgSA0geBDQgSApgoBNQiSGQhFDEQhzFKhPEJQiLhEg+geg",
      )
    this.shape.setTransform(232.75, 491.3)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0, 0, 465.5, 982.6), null)
  ;(lib.Path = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EghJBLbQiMg1hCghQIL4gJn09QAOgbAag8QAag7ANgaIFUquQDKmXCfkOQAOgTAMgoQAOgnANgVQCAjSC1lLQDkmkBHh6IAnhdQAag7ANghQHduRGSvNQF/ujFGvtQBCAhCKA8QCLA7BCAhQmaTanbRMQn7SXppRLQg7Bmi8FhQiWEahpCuQhCB4hxDmQhwDphCB2QhKCSg6CeQgHAGgNAVQgOATgGAHQq1Xgn+YPQhCghiLg1g",
      )
    this.shape.setTransform(232.75, 491.3)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 465.5, 982.6), null)
  ;(lib.ClipGroup_2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p(
      "EgSeBAsIgPjuQgJiOgQhgQgSkBgNk+QgJjNgNlzQgQrCA2vGQBLxWAhoyQA+tpgJsSQgLtXhfsZQFSgFNNAKQLuAKGxgPIAoHcQAREHAOFEQAICxAOGQQAJHYgQIcQgNHBghIzIgoIdQgHAhgGA7QgHA8gGAhQhMQpAANvQAAQHBmORg",
    )
    mask.setTransform(127.9953, 414.1055)

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0, 0, 0, 0), null)
  ;(lib.corpspigeon = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#444444")
      .s()
      .p("AghAQQgEgbANgQQAOgQAVANQAVAMADARQACAOgMAJQgNAMgTACIgEABQgTAAgDgVg")
    this.shape.setTransform(51.1265, 16.813, 0.222, 0.222)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#444444")
      .s()
      .p("AgeABIgVgaIALgBQAOAAASAIQAcAMAgAZQgUAHgYABIAAAAQgPAAgXgag")
    this.shape_1.setTransform(45.0833, 10.6886, 0.222, 0.222)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#444444")
      .s()
      .p("AgeABIgUgaIAKgBQAOAAASAIQAcAMAfAZQgSAHgZABIgBAAQgNAAgYgag")
    this.shape_2.setTransform(46.2101, 9.2454, 0.222, 0.222)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#444444")
      .s()
      .p("AgdABIgVgaIAKgBQAOAAASAIQAcAMAfAZQgTAHgYABIgBAAQgNAAgXgag")
    this.shape_3.setTransform(47.8864, 10.7663, 0.222, 0.222)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#444444")
      .s()
      .p("AguANIgJgFIAdgQQAhgPANAHQAWALAOANQgmALgfAAQgUAAgNgGg")
    this.shape_4.setTransform(41.2699, 13.3144, 0.222, 0.222)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#444444")
      .s()
      .p("AgPAQQgTgCgMgHIgJgHIAggLQAigLAMAJQAUANANAPQgWADgUAAQgPAAgOgCg")
    this.shape_5.setTransform(42.8685, 14.9095, 0.222, 0.222)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#727272")
      .s()
      .p("AhGhIICNA+Ih6BSg")
    this.shape_6.setTransform(48.9855, 20.53, 0.222, 0.222)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AN6F3QADgwgrgjQg1grhjADQhKAChiAPQhpAQhaAXQl6BjjzirQg9grhMhTQg2g7gSAEQiRA2iGAOQhoAKh1gPQhShBhahpIhJheIBLAaQBdAdBYAMQEbApCBiJQF4mKHIB5QCZApCgBjQAwAeCMBoQAuAiBKAhQAqATBWAjQCaBEA/BpQBDBxh6BxQgmAjg0AfIgtAYIhlApQgPgpgag9g",
      )
    this.shape_7.setTransform(27.6463, 10.5861, 0.222, 0.222)

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
  }).prototype = getMCSymbolPrototype(lib.corpspigeon, new cjs.Rectangle(0, 0, 55.3, 22.2), null)
  ;(lib.bicepsbarbu = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#8BA2A5")
      .s()
      .p(
        "ABsDjQgHAAgLgDIgRgIQgZgHgagPQgUgLgagUQgegXgWgVQgZgYgVgbQgUgagJgNQgPgWgDgVQgFgeAHgbIAIgYIAKgeQANgiAHgQQANgcASgRQAOgKALADIADACIAEAAQAIAIAHANIALAYQANAfAZAjQAeAsALAVIAQAdQAJAPAJAKIAXAeQANAQAPAFIAJACQBOBthOA9IgZgBg",
      )
    this.shape.setTransform(17.2087, 22.814)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bicepsbarbu, new cjs.Rectangle(0, 0, 34.4, 45.7), null)
  ;(lib.avantbrasbarbu = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#8BA2A5")
      .s()
      .p(
        "AhnDPQh1hIB0hYQANgKAGgIQAUgdAcgtIAuhLIAZgrIAYgrQAPACAlAIQAhAHAUABQgLAygVA5QgQAqgcA9QgGAMgUAWQgVAZgGAKQgGAJgNAcQgJAUgLAOIgWAUIgWAMQgMAHgLADQgMADgQAAIgDAAg",
      )
    this.shape.setTransform(10.3659, 20.7)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.avantbrasbarbu,
    new cjs.Rectangle(-5.9, 0, 32.6, 41.4),
    null,
  )
  ;(lib.pigeondcopy = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_5
    this.instance = new lib.Interpoler14("synched", 0)
    this.instance.setTransform(23.45, 9.6, 1, 1, -43.6918)

    this.instance_1 = new lib.Interpoler13("synched", 0)
    this.instance_1.setTransform(25.45, 7.15)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({startPosition: 0}, 33)
        .to({_off: true, rotation: 0, x: 25.45, y: 7.15}, 15)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 4)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, rotation: -43.6918, x: 23.45, y: 9.6}, 17)
        .wait(20),
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(33)
        .to({_off: false}, 15)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 4)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, rotation: -43.6918, x: 23.45, y: 9.6}, 17)
        .wait(20),
    )

    // Calque_7
    this.instance_2 = new lib.corpspigeon()
    this.instance_2.setTransform(27.75, 11.25, 1, 1, -44.9994, 0, 0, 27.7, 11.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(33)
        .to({rotation: 0, x: 27.7, y: 11.35}, 15)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 3)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 4)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 3)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({rotation: -44.9994, x: 27.75, y: 11.25}, 17)
        .wait(20),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CCCCCC")
      .s()
      .p("AgFBQQgggKgLgeQgHgVgJg0IgHgxICPAAIgBAxQgEAzgRAjQgQAegZAAQgHAAgHgDg")
    this.shape.setTransform(26.9267, 18.4425, 0.222, 0.222)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#CCCCCC")
      .s()
      .p("AgFBQQgggKgKgeQgHgVgKg0IgHgxICPAAIgBAxQgEAzgRAjQgQAegZAAQgHAAgHgDg")
    this.shape_1.setTransform(31.0232, 18.4425, 0.222, 0.222)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFC84D")
      .s()
      .p(
        "ABfB+QgtgBhNAAQhEAAgWgCQghgCABgWQACgVAigNQAcgLADhaIgChZIBHAAIgEBLQgDBNAHARQAHAQAfACIBGADQAsAEAJAeQAJAbg1AAIgJAAg",
      )
    this.shape_2.setTransform(28.1709, 21.6536, 0.222, 0.222)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFC84D")
      .s()
      .p(
        "ABjB+QgtgBhNAAQhEAAgWgCQgigCACgWQACgVAigNQAcgLADhaIgChZIBHAAIgEBLQgDBNAHARQAIASATAGQALADAvAFQAsAFAVAYQASAVgxAAIgLAAg",
      )
    this.shape_3.setTransform(32.0475, 21.6541, 0.222, 0.222)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(104),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-2, -16.1, 59.2, 54.1)
  ;(lib.pigeond = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_5
    this.instance = new lib.Interpoler13("synched", 0)
    this.instance.setTransform(25.45, 7.15)

    this.instance_1 = new lib.Interpoler14("synched", 0)
    this.instance_1.setTransform(23.45, 9.6, 1, 1, -43.6918)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({_off: true, rotation: -43.6918, x: 23.45, y: 9.6}, 19)
        .to({_off: false, rotation: 0, x: 25.45, y: 7.15}, 15)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 4)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: false, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: true, rotation: -43.6918, x: 23.45, y: 9.6}, 17)
        .wait(19)
        .to({_off: false, rotation: 0, x: 25.45, y: 7.15}, 15)
        .wait(1),
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({_off: false}, 19)
        .to({_off: true, rotation: 0, x: 25.45, y: 7.15}, 15)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 4)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, regY: 0.1, rotation: -28.6922, x: 23.55, y: 9.65}, 3)
        .to({_off: true, regY: 0, rotation: 0, x: 25.45, y: 7.15}, 3)
        .to({_off: false, rotation: -43.6918, x: 23.45, y: 9.6}, 17)
        .wait(19)
        .to({startPosition: 0}, 0)
        .to({_off: true, rotation: 0, x: 25.45, y: 7.15}, 15)
        .wait(1),
    )

    // Calque_7
    this.instance_2 = new lib.corpspigeon()
    this.instance_2.setTransform(27.7, 11.35, 1, 1, 0, 0, 0, 27.7, 11.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({rotation: -44.9994, x: 27.75, y: 11.25}, 19)
        .to({rotation: 0, x: 27.7, y: 11.35}, 15)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 3)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 4)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({regX: 27.6, regY: 11.2, rotation: -23.0232, x: 27.8}, 3)
        .to({regX: 27.7, regY: 11.1, rotation: 0, x: 27.7}, 3)
        .to({rotation: -44.9994, x: 27.75, y: 11.25}, 17)
        .wait(19)
        .to({rotation: 0, x: 27.7, y: 11.35}, 15)
        .wait(1),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CCCCCC")
      .s()
      .p("AgFBQQgggKgLgeQgHgVgJg0IgHgxICPAAIgBAxQgEAzgRAjQgQAegZAAQgHAAgHgDg")
    this.shape.setTransform(26.9267, 18.4425, 0.222, 0.222)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#CCCCCC")
      .s()
      .p("AgFBQQgggKgKgeQgHgVgKg0IgHgxICPAAIgBAxQgEAzgRAjQgQAegZAAQgHAAgHgDg")
    this.shape_1.setTransform(31.0232, 18.4425, 0.222, 0.222)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFC84D")
      .s()
      .p(
        "ABfB+QgtgBhNAAQhEAAgWgCQghgCABgWQACgVAigNQAcgLADhaIgChZIBHAAIgEBLQgDBNAHARQAHAQAfACIBGADQAsAEAJAeQAJAbg1AAIgJAAg",
      )
    this.shape_2.setTransform(28.1709, 21.6536, 0.222, 0.222)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFC84D")
      .s()
      .p(
        "ABjB+QgtgBhNAAQhEAAgWgCQgigCACgWQACgVAigNQAcgLADhaIgChZIBHAAIgEBLQgDBNAHARQAIASATAGQALADAvAFQAsAFAVAYQASAVgxAAIgLAAg",
      )
    this.shape_3.setTransform(32.0475, 21.6541, 0.222, 0.222)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(105),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-2, -16.1, 59.2, 54.1)
  ;(lib.ClipGroup_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p(
      "EgSeBAsIgPjuQgJiOgQhgQgSkBgNk+QgJjNgNlzQgQrCA2vGQBLxWAhoyQA+tpgJsSQgLtXhfsZQFSgFNNAKQLuAKGxgPIAoHcQAREHAOFEQAICxAOGQQAJHYgQIcQgNHBghIzIgoIdQgHAhgGA7QgHA8gGAhQhMQpAANvQAAQHBmORg",
    )
    mask.setTransform(286.2953, 612.2055)

    // Calque_3
    this.instance = new lib.Path()
    this.instance.setTransform(232.8, 491.3, 1, 1, 0, 0, 0, 232.8, 491.3)
    this.instance.alpha = 0.2383

    this.instance_1 = new lib.Path_1()
    this.instance_1.setTransform(331.2, 653.3, 1, 1, 0, 0, 0, 266.4, 505.2)
    this.instance_1.alpha = 0.2383

    var maskedShapeInstanceList = [this.instance, this.instance_1]

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#42B7DB")
      .s()
      .p(
        "EgSeBAsIgPjuQgJiOgQhgQgSkBgNk+QgJjNgNlzQgQrCA2vGQBLxWAhoyQA+tpgJsSQgLtXhfsZQFSgFNNAKQLuAKGxgPIAoHcQAREHAOFEQAICxAOGQQAJHYgQIcQgNHBghIzIgoIdQgHAhgGA7QgHA8gGAhQhMQpAANvQAAQHBmORg",
      )
    this.shape.setTransform(286.2953, 612.2055)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_1,
    new cjs.Rectangle(158.3, 198.2, 256, 828.0999999999999),
    null,
  )
  ;(lib.ClipGroup = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p(
      "EgSbBApQi2+pCb9sIAooQQAHgiAGhBQAHhDAGghQCT+ki664QGwgPLuAKQNKALFWgGIAoHcQBCN4gSPKQgQNghVPhQhYRugFOMQgFQ/BvOwg",
    )
    mask.setTransform(285.9856, 611.187)

    // Calque_3
    this.instance = new lib.Path_0()
    this.instance.setTransform(232.8, 491.3, 1, 1, 0, 0, 0, 232.8, 491.3)
    this.instance.alpha = 0.2383

    this.instance_1 = new lib.Path_1_0()
    this.instance_1.setTransform(331.2, 652.6, 1, 1, 0, 0, 0, 266.4, 504.5)
    this.instance_1.alpha = 0.2383

    var maskedShapeInstanceList = [this.instance, this.instance_1]

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_1}, {t: this.instance}]})
        .wait(1),
    )

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#42B7DB")
      .s()
      .p(
        "EgSbBApQi2+pCb9sIAooQQAHgiAGhBQAHhDAGghQCT+ki664QGwgPLuAKQNKALFWgGIAoHcQBCN4gSPKQgQNghVPhQhYRugFOMQgFQ/BvOwg",
      )
    this.shape.setTransform(285.9856, 611.187)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup,
    new cjs.Rectangle(158.2, 197.5, 255.7, 827.4000000000001),
    null,
  )

  // stage content:
  ;(lib.ANIMATION = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    this.actionFrames = [0]
    // timeline functions:
    this.frame_0 = function() {
      this.clearAllSoundStreams()
    }

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(210),
    )

    // main
    this.instance = new lib.mainsbarbu()
    this.instance.setTransform(254.85, 315.7, 1, 1, 0, 0, 0, 21.2, 15.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({x: 238.55, y: 284.5}, 39)
        .to(
          {regX: 21.1, scaleX: 0.9999, scaleY: 0.9999, rotation: -51.996, x: 204.25, y: 252.5},
          30,
        )
        .to({regY: 15.2, rotation: -68.378, x: 201.45, y: 246.1}, 50)
        .to({regX: 21.2, regY: 15.1, scaleX: 1, scaleY: 1, rotation: 0, x: 238.55, y: 284.5}, 29)
        .to({x: 254.85, y: 315.7}, 25)
        .wait(37),
    )

    // BRAS
    this.instance_1 = new lib.avantbrasbarbu()
    this.instance_1.setTransform(228.05, 310.75, 1.0059, 1, 0, 48.5471, 54.7694, 0.1, 25.7)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({regX: 0, regY: 25.8, scaleX: 1, skewX: 0, skewY: 0, x: 218.25, y: 309.9}, 39)
        .to({rotation: -81.997, x: 228.4, y: 278.9}, 30)
        .to({x: 224.15, y: 271.1}, 50)
        .to({rotation: 0, x: 218.25, y: 309.9}, 29)
        .to(
          {
            regX: 0.1,
            regY: 25.7,
            scaleX: 1.0059,
            skewX: 48.5471,
            skewY: 54.7694,
            x: 228.05,
            y: 310.75,
          },
          25,
        )
        .wait(37),
    )

    // tete
    this.instance_2 = new lib.tetehommebarbu()
    this.instance_2.setTransform(174.1, 280, 1, 1, 0, 0, 0, 22.5, 53.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(39)
        .to({rotation: -14.9992, x: 174.15}, 30)
        .to({regX: 22.4, rotation: -29.9984, x: 178.85, y: 279.65}, 50)
        .to({regX: 22.5, rotation: 0, x: 174.1, y: 280}, 29)
        .wait(62),
    )

    // CORPS
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#204351")
      .s()
      .p(
        "AUycnIjigLQkhgUiFhCQhLgmgZihQgSh6AHj1QAMkiACiSQAEj/gZiYQgXhvgdkuQgXj5gzidQgjhygkhNQgvhkg+hFQj3hFk8gUQl2gMjNgKQh9AAkKgWIjygXQDKiFGoi1QCLg7CHg1QBxgsAGAAQBgglCUhMQDGhkAtgVQEiiIDbAGQBjALApAHQBRANA7ATQAUAKAsASQAmARASAZIAUAAQC7CgBmENQA9ChBGFeQByI5AhLxQAKDuAIGeQAJHUAGC7Qg9gIh/gGg",
      )
    this.shape.setTransform(242.6973, 362.6609, 0.2221, 0.2221)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#F0A476")
      .s()
      .p(
        "AgXE/QiFgyiahZQgogegTgQQgfgcgUgaQA3g3Bph3QBph4A3g3QAKAAAPgFQAPgFAKAAQCLgyBHgUQB3ghBkgHQAeAAAKAUQANBGg2BBQggAlhNBEQAABVgDCuQAACaANBqQiVgOiZg5g",
      )
    this.shape_1.setTransform(172.9401, 357.2218, 0.2221, 0.2221)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#96AEB2")
      .s()
      .p(
        "AimPsQgFgFgKAAQgKAAgFgFQjgjGj2kGQgQgYhDhIQg2g7gXgtQgKgKgKAAQgKgUgGgJQgKgPgOgGQhGhfgegwQgyhQgUhMQgNhJAPhRQAHgrAfhnQAqhoA4huQAshWBEh4QARghA0hNQAthCAQgsQAFgKAPgKQAPgKAFgKQAFgFAAgKQAAgKAFgFQAUgUAJgLQAPgTAGgUQAGgMAVgSIAhgeQAFgFAAgKQAAgKAFgFIA8g8QAMgeDhilQDdiiAAgCQANgNAkgWQAegTALgQQBFgyAyAOQANAEAtAUQAtATAnAMQBnAiAbBgQAUBigVBAQgOArg3BpIABAPIgBAPQhAERimCyIiKCGQhQBPguBFQgrA/gvCEQguB+gxBCQAKAoAHAUQAKAgANAbQA0BhBXBuQAWAdCKCkQAtAtBQBaQBQBaAtAtQB2CECEB2QAPAKAeAZQAeAZAPAKIBLBHQAtArAeAkQAKAKAoAUQAFAFAKAPQAKAPAFAFIBQA9QAyAmAeAfQg/A/haBrQhzCHggAjQn1lPmsmBg",
      )
    this.shape_2.setTransform(146.6334, 320.9297, 0.2221, 0.2221)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRFlQgggUhphRQhlhXhxhtQhEhCiKiJQD5isEZhYQCHgHCyAcQA6AJD4AyQhkEsi0ErQgKAKgKAAQgFAFgFAPQgFAPgFAFQgMAGgHAJIgLAPIgtAgQgaASgTAAQhIAAhQgxg",
      )
    this.shape_3.setTransform(172.3568, 278.688, 0.2221, 0.2221)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#96AEB2")
      .s()
      .p(
        "AjFd+Qh0gCiAgeQg/gPiegxQgUgKgKAAQAAgPgKgUQgKgUAAgPQAAgFgKgFQgKgFAAgFQikmnhwk0QiQmJhulaIgahfQgRg7gRgkIh3mAQhDjbgsimQgLgwgjhNQgYg0AAhJQAGgGADgJIABgPQAvhSAbgpQAuhJAygsQAFgFAAgKQAAgKAFgFQD+j+DhiXQEUi5EdhGQFKgHExBcQFABhEIDGQAaAbAVAoQANAXAUAyIBlFHQAvCfAgCuQAdCiBOC1QAvBvBtDNQBuDPAtBoQBMCwAcCZQAeCqgfCXQgpDOiWBTIgUAAQgGAMgJAHIgPALIgeACQiCBQkvDIQkXCzikBRQlkCukgAAIgOAAg",
      )
    this.shape_4.setTransform(180.7627, 312.5258, 0.2221, 0.2221)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ADwDlQj2iRjfiZQgKgFgPgFQgPgFgKgFQhihEiJhKQibhThQgtQAKgZAegoQAegoAKgZQAuAfC4BqQCPBUBXBFQAKAFAPAFQAPAFAKAFIDYCgQB8BbBjBEQAKAFAPAFQAPAFAKAFQAfAZAuAeIBTA3QAIAEAVAGQAQAFAFAFQAUAPAoAZQAoAZAUAPQAPAKAeAPQAeAPAPAKQgMAMgMAXIgQAjQkNiPjJh2g",
      )
    this.shape_5.setTransform(274.4219, 420.7487, 0.2221, 0.2221)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AhFAtQgFgFAAgFQAZgKAtgiQAsgjAZgKIAKAUQgZAYgpAYIhJApQAAgFgFgFg")
    this.shape_6.setTransform(280.7524, 412.197, 0.2221, 0.2221)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AhFAoQgFgFAAgFQATgHAvgjQAogfAhgGIAFAHQAFAHAAAGQgiAGgnAdQgvAlgTAHQAAgFgFgFg")
    this.shape_7.setTransform(278.9754, 410.0869, 0.2221, 0.2221)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AhKAjQAZgKAtgiQAsgjAZgKIAKAUQgUAUgtAYQgsAZgUAUg")
    this.shape_8.setTransform(276.31, 407.3103, 0.2221, 0.2221)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#183E56")
      .s()
      .p(
        "AJSKAQgVgHhog0QjFhPjiiMQhZg4k9jXQgpgah2hEQhfg4g4gnQhWhwA3inQAeheBvixQB1ALDCAjQDoAqBWAMIAAAUQAgAmAgAvIA4BVQATAeAuBUQAlBDAcAnQAFAKAFAPQAFAPAFAKIAUAUIAPAjIAPAiQA3BfBwC1QBiCiA3B6QAWAtgMAZQgeASgmAAQgaAAgfgJg",
      )
    this.shape_9.setTransform(275.3354, 415.8494, 0.2221, 0.2221)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#133140")
      .s()
      .p(
        "AehaFIiVlFQAAgegUgoQgZgsgdhCIguhuQivmBhYi8QiXlIh+juQhJh+gggsQg+hXhJg1QgmgTg0gJQg8gHgegFQmygRjUgGQlygIkRAeQi8AVm0BZQmZBTjZASQg4gDhqAEQh0AFgzgBQjFgEh8hRQgFgFgKgPQgKgPgFgFQgrgZgog1Qgqg+gZgeQgfglgbhAQgbhKgPgjQh6kHg7lVQgpjmgcmMQHxgaF1gIQHUgKGSAOIEOgEQCigCBsAGQI6AdEmAVQHdAhGEAvQDQAbB/AWQCyAeCdApQB7AfBhBFQAaAbAcAoQAQAXAeAyQBVCdBBDBQBTD+A9G1IAwFbQAeDFAkCUQAsC1CDE7QBLCzCdFmQB+EsAjCZQAtDFhRArQmkAemuAAQg5iKhUi7g",
      )
    this.shape_10.setTransform(230.1316, 384.4539, 0.2221, 0.2221)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p("AglBGIgHgFQAGgcAZgpQAfgzAHgTQAKAAAKAKQgHATgfAyQgaAqgFAcQgGAAgHgFg")
    this.shape_11.setTransform(302.0761, 431.9659, 0.2221, 0.2221)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AgmBLIgGgFQAFggAegtQAegxAEgXQAKAAAKAKQgFAggeAuQgdAwgFAXQgGAAgIgFg")
    this.shape_12.setTransform(299.4107, 430.9663, 0.2221, 0.2221)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p("AgnBGQgFgFgFAAQAPgUAZgxQAYgyAPgUIAGAFQAIAFAGAAQgMAQgYA1QgUAvgXAXQgFAAgFgFg")
    this.shape_13.setTransform(295.7457, 429.9668, 0.2221, 0.2221)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhQBGQntgTkRAaIAAifQDFAABiACQChACCGAGQE+AjDmAOQEkASD5gHQAJAaADAUQAFAXgHAAQgYASgvAAQhDAAgMACQhcAGiKAAQjYAAlHgNg",
      )
    this.shape_14.setTransform(295.904, 436.8002, 0.2221, 0.2221)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#183E56")
      .s()
      .p(
        "AAgEDIlsgZQjdgPiRAAQgtAAgjgcQgjgbgPgtQgdhWAKhhQAJhZAohXIExgSQCzgIB+AGQAoAAAyAMQAeAIA8AUQBZAmDhBOQDIBFBzA2IAeAAQAjAUBIAdQA/AcAeArIAAAeQgbAog1AAQjnA3k1AAQhfAAhogFg",
      )
    this.shape_15.setTransform(295.5113, 432.7749, 0.2221, 0.2221)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
        .to(
          {
            state: [
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
          },
          39,
        )
        .wait(171),
    )

    // biceps
    this.instance_3 = new lib.bicepsbarbu()
    this.instance_3.setTransform(196.75, 283.85, 1, 1, 0, 0, 0, 9, 4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(39)
        .to({regY: 4.2, rotation: -57.5067, x: 196.7, y: 277.85}, 30)
        .to({regX: 8.9, rotation: -68.774, x: 190.85, y: 277.8}, 50)
        .to({regX: 9, regY: 4, rotation: 0, x: 196.75, y: 283.85}, 29)
        .wait(62),
    )

    // PIGEON_GAUCHE
    this.instance_4 = new lib.pigeondcopy()
    this.instance_4.setTransform(524.9, 415.4, 1, 1, 0, 0, 180, 27.7, 12.2)

    this.instance_5 = new lib.pigeond()
    this.instance_5.setTransform(461.5, 415.4, 1, 1, 0, 0, 0, 27.7, 12.2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_5}, {t: this.instance_4}]})
        .wait(210),
    )

    // Calque_11
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f()
      .s("#336666")
      .ss(1, 1, 1)
      .p(
        "AhehQQAFAAAIAAQAHABAEAFIgDADQgJgFgJABQgJABgCAGQgVAkgGAdQgIAkAOAeQACAEAHAEQAHAEAFAAQAFAAAGgFQAEgDAIgHIADADQgFAJgJAGQgLAFgKgCQgJgEgGgJQgGgHgDgJQgJgnAMgcIAAgMQACgEAEgMQAEgLADgGQAJgUAQAAgAgUhZQAAABAAABQAFAggBA3QgBBAADAaQgIgFAAgOQAAgIgBgCQAAgFgDgCQgCgDgIgBQgLAAgDgBQgCALgCAGQgDAJgEAGIgDgDQADgJADgTQADgTADgJQAEgHAEgRQAFgRAEgIQAEgJACgWQACgSAGgLQAAgBABgBgAARhTQAFACAUACQARABAIAHQACACgBABQgBAAgDAAQgJgEgOgDQgRgDgHgCQAGAVAAAcQABAQgBAfQAFABAPABQANABAIADQgHAFgMgDQgPgDgEABQgCAMAEATQAEAXAAAIQAAADgJAAQgIg0gCgjQgCgsAGgngABYhQQAKAGAOgCQAZgEAAAAIADADQgJAEgOABQgIABgQAAIAABaQAFABAQABQAMABAJADQgKAEgMgCQgCAAgSgFIAAA4QAIAEAOgBQAPgCAHAFQgNAEgOgCQgOgBgLgHQgCgeACgwQADg+AAgSgAgyArIAYAAQgBgRAFgsQAEgngFgXQAAAbgKAkQgFATgMApg",
      )
    this.shape_16.setTransform(376.9449, 203.525)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#316077")
      .s()
      .p(
        "AgWBHIgBgKQAAgFgDgCQgCgDgIgBIgOgBIgEARQgDAJgEAGIgDgDQADgJADgTQADgTADgJQAEgHAEgRQAFgRAEgIQAEgJACgWQACgSAGgLIABgCIAAACQAFAggBA3QgBBAADAaQgIgFAAgOgAghgRIgRA8IAYAAQgBgRAFgsQAEgngFgXQAAAbgKAkgABuBWQgOgBgLgHQgCgeACgwIADhQQAKAGAOgCIAZgEIADADQgJAEgOABIgYABIAABaIAVACQAMABAJADQgKAEgMgCIgUgFIAAA4QAIAEAOgBQAPgCAHAFQgJADgKAAIgIgBgAANAAQgCgsAGgnQAFACAUACQARABAIAHQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgEAAQgJgEgOgDIgYgFQAGAVAAAcIAAAvIAUACQANABAIADQgHAFgMgDQgPgDgEABQgCAMAEATQAEAXAAAIQAAADgJAAQgIg0gCgjgAhvBRQgJgEgGgJQgGgHgDgJQgJgnAMgcIAAgMIAGgQIAHgRQAJgUAQAAIANAAQAHABAEAFIgDADQgJgFgJABQgJABgCAGQgVAkgGAdQgIAkAOAeQACAEAHAEQAHAEAFAAQAFAAAGgFIAMgKIADADQgFAJgJAGQgIAEgHAAIgGgBg",
      )
    this.shape_17.setTransform(376.9449, 203.525)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_17}, {t: this.shape_16}]})
        .wait(210),
    )

    // Ñëîé_6
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#6BE4F7")
      .s()
      .p(
        "AhlAoQhOgJg3gLQgZgFAEgRQADgRAXgHQAbgIA2gDIC8gIQB8gHA3AZQAlASABAdQABAQg4ABQhhADgdAFQgYADgfAAQgyAAhIgIg",
      )
    this.shape_18.setTransform(372.2897, 284.9521, 0.222, 0.222)

    this.instance_6 = new lib.Path_1_2()
    this.instance_6.setTransform(373.05, 277.5, 0.222, 0.222, 0, 0, 0, 34.5, 6.3)
    this.instance_6.alpha = 0.8984

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#25C1E5")
      .s()
      .p(
        "Ah4CaQgygGgbgqQgRgbgShIIgahhQgMgqAGgGQAJgLC1gIQC/gJBIAPQBGAPAHA5QAEAfgUBEQgVBHg4AhQg/AmhyAAQg1AAg/gIg",
      )
    this.shape_19.setTransform(372.5022, 287.8958, 0.222, 0.222)

    this.instance_7 = new lib.Path_3_0()
    this.instance_7.setTransform(373.05, 285.05, 0.222, 0.222, 0, 0, 0, 40.8, 43.9)
    this.instance_7.alpha = 0.8984

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#DBDBDB")
      .s()
      .p(
        "AJQCAQgVgGhYgbQiDgqhRAWQhSAWpAAOQpFAOgpAJQiHAfgehTQgMggAMgkQAMgjAcgRQAxgeCmAJIEwAbQBJAGGrABQGDABBtATQBrATBiALIB9gkQCKguA+gzQBDg2gDAdQgFAegjAWIg2AlQguAggkASQC8g/A1gmQAyglAIATQADAHgGAMQgFALgIAGQgQALg6AgQhFAng8AeQBsgJAzghQBKgyArAIQAUAFAHAOQhKArhfAsQi/BXhsAAQg5AAhBgQg",
      )
    this.shape_20.setTransform(336.6495, 300.3769, 0.2221, 0.2221)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#A12B27")
      .s()
      .p("AgGAqQgjgGgXgQQgXgRADgQQADgSAbgIQAbgIAiAGQAjAFAXARQAXARgDAQQgDASgbAIQgPAFgSAAQgOAAgOgDg")
    this.shape_21.setTransform(493.6084, 427.0902, 0.2219, 0.2219)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#A12B27")
      .s()
      .p("AgGArQgjgGgXgRQgXgRADgQQADgSAbgIQAbgIAiAGQAjAGAXAQQAXARgDARQgDARgbAIQgQAFgTAAQgNAAgNgCg")
    this.shape_22.setTransform(487.1389, 425.1195, 0.2219, 0.2219)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#A12B27")
      .s()
      .p("AhAA4QgMgNALgaQALgZAbgXQAbgXAagHQAcgHALANQAMANgLAaQgLAagbAXQgbAXgaAHQgKACgHAAQgPAAgHgJg")
    this.shape_23.setTransform(480.7693, 426.1185, 0.2219, 0.2219)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#DBDBDB")
      .s()
      .p(
        "AkJBpQg+gEhqAAQh7ABgsgCQjGgIhZghQgqgQgQgYQgFgMAIgMQAHgKANgIQAUgMEQgnQEpgpCQAAQHDAAFeAuQCxAYB7AZQARAAALANQAMANgGANQgKAQgJAHQgMAJgSAAQiJA8mbACQjOADhlAAQiuAAiFgLg",
      )
    this.shape_24.setTransform(330.1039, 290.9528, 0.2219, 0.2219)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#F7F7F7")
      .s()
      .p(
        "AlzCzQhWgIiTABQitABg9gDQkVgOh8g3Qg8gbgVgpQgIgVAMgVQAJgSATgNQAbgVF9hBQGehHDKAAQJ2AAHqBPQCLAXCSAhQB2AaAPABQAYAAAQAXQAQAXgIAWQgPAbgMALQgRAQgZAAQhwA8jtAaQipASj3ACQkfAFiPAAQj0gBi5gSg",
      )
    this.shape_25.setTransform(330.8628, 290.9528, 0.2219, 0.2219)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#DBDBDB")
      .s()
      .p(
        "AvkBLQh1gjhWgxQhFgogNAAQgXAAgQgYQgQgXAIgWQAIgQAaAVQAhAbAQAAQBxg8DtgaQCogSD3gCIGugFQD0AAC5ASQBWAJCTgBQCvgBA7ADQEiAOBvAUQBIAMAKAVQAIAUgMAWQgJATgSANQgMAIh1AiQiEAoiUAmQmkBqjFAAQtgAAmUh7g",
      )
    this.shape_26.setTransform(330.7084, 293.9489, 0.2219, 0.2219)

    this.instance_8 = new lib.Path_3()
    this.instance_8.setTransform(329.95, 296.6, 0.222, 0.222, 0, 0, 0, 143, 22.3)
    this.instance_8.alpha = 0.2109

    this.instance_9 = new lib.Path_1_1()
    this.instance_9.setTransform(336.85, 301.45, 0.2221, 0.2221, 0, 0, 0, 120, 13.8)
    this.instance_9.alpha = 0.2109

    this.instance_10 = new lib.Path_2()
    this.instance_10.setTransform(372.8, 293.15, 0.2221, 0.2221, 0, 0, 0, 31.5, 11.7)
    this.instance_10.alpha = 0.2109

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#D8877C")
      .s()
      .p(
        "ACwJVQrkAAovg2QkFgZm+ABQoPACizgIQtHgpl1inQh9g5hBhEQgcgcgcg0QgWg+AihCQAdg4A3gnQAggXFlhMQF3hQHWhQQTnjXJgAAQd0AAXHDvQGoBFG4BjQFlBQAtACQBHAAAxBHQAwBFgYBEQgsBSgkAhQg0AxhNAAQlTC0rNBOQn+A4rpAGQtHAOmvAAIgegBg",
      )
    this.shape_27.setTransform(370.621, 294.602, 0.222, 0.222)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#845349")
      .s()
      .p(
        "ACwJVQrjgBowg2QkFgZm+ACQoOACi0gIQtHgpl1ioQh9g4hBhEQgcgdgcg0QgWg9AihCQAdg4A3gnQAggXFlhMQF3hQHWhQQTmjXJhAAQd0AAXHDvQGoBEG4BjQFkBQAuADQBHAAAxBHQAwBFgYBDQgsBSgkAiQg0AwhNAAQlTC1rNBOQn/A4roAFQtIAPmvAAIgdgBg",
      )
    this.shape_28.setTransform(370.621, 299.8531, 0.222, 0.222)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#133140")
      .s()
      .p(
        "EgBHAscQpygJk5gHQgMhQAihPQAkhQBGgsQBAgeARgPQBDgJBdADIChAGQAapMA2nWQA/oqBxn4QA9j7iDkyQglhYhZirQhZiqgkhVQgukLB5kVQBtj9DajKQiRhGg8gtQhphOAVhpQAJgxBDgtQBRg3ATgdQiZi4j+iDQi+hjkthdIhBAAQgggPgQgFQgagKgWAAQkVgeh6gJQjYgPirAKQBehYChgWQBDgKDgAAQM5gsMaCyQG+hAFPgdQGrgkFtAKQA4AIBoAJQBdAKBEASQAQAHAiAVQAgARAeAAQAJAAAHAJQAMARAEADQooAcllBwQnpCajvFMQBUAXA1BMQA0BMgMBOQgYBNhSA0QhQAyhXAAQDtE9BKEIQBiFii4EQQgvBAh5CRQhvCFg2BNQivD5AKDhQgWHeAuI8QAiGmBXJ1QDegaC1BQQDTBdALDDQl5gSowgKg",
      )
    this.shape_29.setTransform(370.9856, 365.9749, 0.222, 0.222)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#133140")
      .s()
      .p(
        "AgFEyQg4gtgwhGQhfiNAqh9QAYhKAvg+QAtg6AxgcQAzgeAnAOQArAQAQBAQASBIAFBlQAFBtgOBZQgdC0hbAAQgYAAgbgMg",
      )
    this.shape_30.setTransform(407.7784, 302.4795, 0.2221, 0.2221)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#B73E18")
      .s()
      .p(
        "EBO8AdMIspEaItKkiItJECItqkJIspE6ItJk0IrXFkIwsl3IqHF3Ipnl8IvrErItak0IvbGFIoNlPMAPGhAeUARvADhBOpgBaUAnVgAtAjygBaMANQBAZInFF0g",
      )
    this.shape_31.setTransform(377.3145, 117.874, 0.2221, 0.2221)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#133140")
      .s()
      .p(
        "EgCrA2tQgmgVgHgkQgGguAHhFQAJhYAAgbQAJhjAajZQAYjRALhzQAAgPAKgeQAKgeAAgPQAAgZAFgyQAFgyAAgZQAFhBAUiCQAUiCAFhBIA6lxQAfjOAUibQjagsjbhSQjNhOjZh0IgegeQjChoi7ihQiWiBizjEQsqUoqyVkQguAegwgTQgxgTgHg0QgMgwAqg+QLM2KMQzuQlxnqh6pLQiAphCpo9QAAgFAKgKQAKgKAAgFQBfk6DJkBQC/jzESiwQEHipE8hdQE2hbFKgHQgVBAg5BlQguBTgQBSQgPgngigVQgfgTgKgpQhAANhUAAIiRgCQivgChmAzQAUAZAjA3QAjA3AUAZIBHCBQAoBFAnA0QAFAKAFAPQAFAPAFAKIA3BUQAeAtAZAfQAEAIAGAVQAEAPAGAGQAPAUAZAoQAZAoAPAUIB4DSQAKAPAPAeQAPAeAKAPQAKAZAFA3QAFA3AKAZQAUAoAKAeQAtC9BNCnQBOCqB3CkQAPAUAZAtQAZAtAPAUQAjAmBuCDQBYBoA5A5QAiBECbEgQB1DbBACRQhHkOhtkYQAtAZBQA8QBQA8AtAZQA1CNBHDgIB0FsIDSJYQGzjSEJlAQg3hQhpiqQhpipg3hQQA8AFBzAMQBkAJBLgGQAMA9AjBTIA/CRIBXiSQAvhSAahHIBpgTQA/gLAqAAQhoEZi4D3Qi0DxjyC+QGCMeIqPCQBvDMBBBzQBgCpBYCOQAWAmgHAiQgIAjglAXQgbAUgfgGQgYgGgSgSQhShehUiQQheingyhVQg8h4gog8QiEj6ipk2Ik1owQguhThpjeQhdjDhChuQkUC4lOBMQgIACggARQgXALgRAAQg8AFh4AUQh4AUg8AFQheAGh5gEQhOgCiJgKIgeCMQgPBzgjDhQgjDhgPBzQgeDwgyHRQgxHRgeDwQgHANgOALQgJAGgUAKQgLACgKAAQgcAAgagPgAkB1+QCXHJCfIgQBVEiCRHIQCyI1A0CoQFYAAFahuQjimckgorIn6vWQhpi0hUiqIkooVQiokpiIjcQCyHQCrIDgAElQoQidlFkGo7Qklp8h/kLQkJoijhmoQBrEXCHGrIDkLKQAFAPAFAjQAFAjAFAPQAaBJAcBcIAuCkQAMAlBuF5QBJD2BBCgQDUBCELAiIAAAAgAnINWQgbgigbgvQgQgdgeg8QgFgFAAgPQAAgPgFgFQgUgegeg3Qgeg3gUgeQgUgegZhBQgZhBgUgeQgzhTg6hxIhljLIl8q8QgSgjgggxIgyhMQhpjKiBjZQhoiviYjsIgZgoIgZgoQh8JjDsJ2QDfJTHbG7QAFAFAPAFQAPAFAFAFQExEiF3CWIAAAAgAqGBoQgShNgmhwQg4ikgIgaQjUq+iyoMQjdqIjlosQhyCdhDB7QhYCegpCYQAeAeAoBGQAoBGAeAeIAAAUQDoFiDmGXQCmElD8HcIBUCbQArBSAhBJQAPAZAeA2QAeA3APAZIAAAAgEgWMgtVQgVANgPAXQFZJYE7J2QAFAFAKAPQAKAPAFAFIAeBGIAeBGQBtC+CPEsQC6GGA0BkQArBXAzB2IBWDNQgKgogZhQQgZhQgKgoQgFgPgPgeQgPgegFgPQnB1in1x2Qg2AYhWgJQhfgPgtAAQgWAAgWAOg",
      )
    this.shape_32.setTransform(175.7353, 366.2404, 0.2221, 0.2221)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#133140")
      .s()
      .p("AlcI4Qg1AAgmghQgmghgEgwIhGvHQgCgZCtgPQCbgODhAAQDhAACcANQCtAOgCAZIg6PIQgDAxgmAhQgmAhg1AAg")
    this.shape_33.setTransform(586.4455, 417.2525, 0.2219, 0.2219)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#133140")
      .s()
      .p(
        "ApIBFQgZAAgSgTQgTgSAAgaIAAgLQAAgaATgSQASgTAZAAISQAAQAaAAASATQATASAAAaIAAALQAAAagTASQgSATgaAAg",
      )
    this.shape_34.setTransform(586.4456, 405.4844, 0.2219, 0.2219)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#83DB71")
      .s()
      .p("AhaBWIAwg8IAMgTIAUgmIAQgiIANgiIBZA4IgCADIgcAbIhaBFIgoAXIgRAJIgmAMg")
    this.shape_35.setTransform(554.2845, 325.0983, 0.2218, 0.2218)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#83DB71")
      .s()
      .p("AhYBXIAtg4IAOgXIAlhAIAag7IBZA5IgzAzIhsBUIgrAXIgSAHIgOAGIgMADg")
    this.shape_36.setTransform(559.1984, 326.2963, 0.2218, 0.2218)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#83DB71")
      .s()
      .p("AgkBkIABgGIgBhLIgLhKIgKgdIgEgJIgEgJIAbAWIAYAcIAvBFIAgBAIABADIhmATg")
    this.shape_37.setTransform(555.3383, 321.5488, 0.2218, 0.2218)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#F1524E")
      .s()
      .p("AgnhhQAkAnAZBRQANAqAFAhg")
    this.shape_38.setTransform(554.7615, 321.4434, 0.2218, 0.2218)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#83DB71")
      .s()
      .p("AgWBOIgRhrIgHgbIgXhBIgIgNIgHgMIAKAJIAMALIAeAhIAgAvIA4BnIAXA5IAEALIABADIhnATg")
    this.shape_39.setTransform(560.2633, 321.2992, 0.2218, 0.2218)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#83DB71")
      .s()
      .p("Ag0C6IAMg6IAFgcIAEghIAFgiIADhrIgKhWIgKgkIAJAPIAKARIALAYIAWA9IAKAjIAJAlIAWClIACAng")
    this.shape_40.setTransform(566.8743, 321.7984, 0.2218, 0.2218)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#83DB71")
      .s()
      .p("AiRCPIAPgMIAoglIBChRIAUgdIAJgOIBAh2IACgEIBZA5IhCBHIhtBhIgeAVIg4AiIgXALIgSAIIgRAGg")
    this.shape_41.setTransform(564.3786, 329.0306, 0.2218, 0.2218)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#83DB71")
      .s()
      .p(
        "AJpB3IgigWIg4ggQgfgPgugVQgsgSgzgRQg/gVgugLIg6gOIg9gNQhQgNgtgFIi7gNIg9gBIjCAJIhwALIgkAFIhZAOIB8gaIEygnIA9gDIDAABQA6ACBHAJIA/AJIA9ALQAxAJBCARQA4AQAtAQQAxASAkAPQAjAPAcAPIAoAXIAPAKIgyBDg",
      )
    this.shape_42.setTransform(555.5463, 325.8971, 0.2219, 0.2219)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#9AF98A")
      .s()
      .p(
        "AJWKNQiZglkTiaQlUjJjHhtQlkjBkvhsIB1gzQCUhACYg8QHnjBFchXQHph4CPBuQCzCKl1HrIBZAyQBnBABEBEQDYDbjeC2QhUBGh2AAQg2AAg+gPg",
      )
    this.shape_43.setTransform(555.0705, 327.9931, 0.2219, 0.2219)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#83DB71")
      .s()
      .p(
        "EAJOAg1QALnXgYplQguzGiosAQhsnriskOQiHjYishEQiDg0iOAnQgsAMgpAUIggASIgegrQAOgKAZgMQAtgXAygOQCcgrCVA7QC6BJCTDnQCxEYBtHzQBgG0A6JYQAsHHATIIQAOF8AAGAQABDAgDB3g",
      )
    this.shape_44.setTransform(575.2435, 374.1752, 0.222, 0.222)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#83DB71")
      .s()
      .p("AAXBIIgcgtIgZg1IgMgiIgKghIBpgCIgPBMIgDA0IAFAsIACAKIACAIg")
    this.shape_45.setTransform(619.6781, 318.7286, 0.2218, 0.2218)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#83DB71")
      .s()
      .p("AAmBgIgfguIgTgpIgJgVIgchXIgCgIIgBgDIBpgCIgHAiIgEAkIgCAUIgBA/IAHAzIAHAVg")
    this.shape_46.setTransform(615.7197, 317.4812, 0.2218, 0.2218)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#83DB71")
      .s()
      .p("AhYgBIACgBIAGgFIBfgtIAtgMIAMgBIAJgBIAHAAIgMAKIgSAQIgcAkIglBCIgBAEIgBACg")
    this.shape_47.setTransform(620.7369, 316.001, 0.2218, 0.2218)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#F1524E")
      .s()
      .p("AgYAHQA0gsApgMIiJBjg")
    this.shape_48.setTransform(621.1749, 315.6129, 0.2218, 0.2218)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#83DB71")
      .s()
      .p("Ah3AUIADgCIAHgFIBTgzIBBgfIA5gRIAMgCIALgBIggAVIgsArIgPARIgcAiIgVAhIgTAfg")
    this.shape_49.setTransform(617.4771, 313.7668, 0.2218, 0.2218)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#83DB71")
      .s()
      .p("Ah4BZIAggrIBihpIBCgzIASgLIAOgHIANgGIgKAKIgLALIgNAPIgdApIgoBLIgrB1g")
    this.shape_50.setTransform(612.5819, 311.1833, 0.2218, 0.2218)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#83DB71")
      .s()
      .p("AA1COQgFgFgFgHIgYgnIgkhRIgTg5IgIgbIgRhMIBogCIgHBGIgCAaIAAA4IABAdIAMBNIAFATIAFAPIAFANg")
    this.shape_51.setTransform(611.0296, 317.1707, 0.2218, 0.2218)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#83DB71")
      .s()
      .p(
        "AFCB2IjGh6IhbguQgrgTgygUIgvgQIgugPQghgKg3gNQgtgJgigFIhDgHQgngCgNAAIgqACIgHhUIAOAAQAWAAAQACQAYABAhAFQAfAEApAJQAlAIAuAOQA1AQAlAPIAuASIAwAVQA5AdAjATICDBRQASALAXAQIBsBUICdCQg",
      )
    this.shape_52.setTransform(619.1749, 318.3486, 0.2218, 0.2218)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#9AF98A")
      .s()
      .p(
        "AD+HmQlfgKiUgGQj9gKh4gnQiZgzgqh5QhKjaDwg5QB4gdCGAOQgwnuC1gTQCQgPEaEgQDLDOD7FQQB+CoBVB/Qj8g1lFgRg",
      )
    this.shape_53.setTransform(617.1822, 315.0681, 0.2218, 0.2218)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#9AF98A")
      .s()
      .p(
        "EgKXAlYQABidADj2QAInsAUnWQAcqDAwoOQBAq3Bgm1QBtnzCykYQCRjmC8hKQCVg6CcArQBPAVA2AlIgeAsQgugfhIgUQiNgmiDAzQirBEiIDYQitEPhqHrQipL/hCXmQghL2ABJrg",
      )
    this.shape_54.setTransform(598.569, 366.8924, 0.2219, 0.2219)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#83DB71")
      .s()
      .p("AheB6IAJgsIAchSIAMgcIBAh3IBOBHIg1AtIhLBPIggAsIgVAlIgHAOIgFANg")
    this.shape_55.setTransform(623.3758, 369.7491, 0.2218, 0.2218)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#83DB71")
      .s()
      .p("AhtCgIACgTIALgzIAkhgIAPghIAIgPIBGh5IBOBHIhTBMIhUBmIgfAxIgXA1g")
    this.shape_56.setTransform(620.2602, 364.1109, 0.2218, 0.2218)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#83DB71")
      .s()
      .p("AiHg0IADABIAKAAIAhAGQAbAEASAEIBlAdIA6AbIAVAOIgMgCIgNgDIgRgCIhcABIgYADIgXAEIgqAIIgnALg")
    this.shape_57.setTransform(627.4506, 367.2488, 0.2218, 0.2218)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#83DB71")
      .s()
      .p("AjEg0ICVAQIATAEIAkAIIBqAeIAzAYIARAKIAPAJIgRgFIgTgFIg1gJIhFgEIgkABIgjADIiLATIgQADg")
    this.shape_58.setTransform(626.1034, 360.9509, 0.2218, 0.2218)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#83DB71")
      .s()
      .p(
        "Aj/gYIBQgTQBfgTBRgHIAvgCIBGAAIAUABIBhANIAUAGIgugBIggABIhlARIgVAFIgtAMQhFAUhZAlIgzAYIgSAJg",
      )
    this.shape_59.setTransform(623.0432, 353.7549, 0.2218, 0.2218)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#83DB71")
      .s()
      .p("AiJC7IAHggIALgmIA0h/QAmhNAwhNIAvhEIBOBHIg3A0QhBBDguA7IhLBuIgRAhIgNAdIgQAsg")
    this.shape_60.setTransform(615.1653, 358.6557, 0.2218, 0.2218)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#83DB71")
      .s()
      .p(
        "AEmIbIhEk2Ig8i+IgNgmIgPglQgZhBgnhTIgRgkIgSgjQgbg0gJgPQgbgzgwhJQgpg9gjgtQgkgvgigkQgggkgagYQgWgVgRgOIgNgLIA0hCIAQAOQATARAXAYQAcAeAeAlQAbAgArA7QAjAzAmA+QAnBEAgBAQAMAXAWAwIAQAlIAQAlQAhBSAZBIIAvCcIAtDAIAdCwIAUCuIAKChg",
      )
    this.shape_61.setTransform(621.5209, 368.5686, 0.2218, 0.2218)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#9AF98A")
      .s()
      .p(
        "ACLIjQhyh3izixQjRjNg7g7QkZkehgiwQh7jhBUi4QCXlNFVDAQCqBgCMCjQHgpwDlCuQC4CMAOKAQALHJhLKXQglFLgoDwQjqlQlll0g",
      )
    this.shape_62.setTransform(615.2597, 368.8526, 0.2218, 0.2218)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#9AF98A")
      .s()
      .p(
        "AqpX2QAJjoAvlxQBdrgC7rFQB6nMCwj8QCQjRCyg+QCNgwCQAuQBJAYAxAkIgfAqQgqgehBgVQiBgph8ArQihA4iHDCQiqD1h3HDQi7LAhcLcQguFvgKDng",
      )
    this.shape_63.setTransform(600.2391, 384.2531, 0.2219, 0.2219)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#83DB71")
      .s()
      .p("ABcCLQgDgIgEgGIgkg7IgkgrIgSgVIgTgTIhIg/IBOhHIACADIBKCQIAcBSIAJAsIACAeg")
    this.shape_64.setTransform(547.2082, 373.0311, 0.2218, 0.2218)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#83DB71")
      .s()
      .p("ABpChQgEgKgDgHIgKgVIgfgyIg+hNIhphlIBOhGIAKAOIA8BrIAxBxIAUBTIACASIACAQg")
    this.shape_65.setTransform(550.3294, 367.3929, 0.2218, 0.2218)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#83DB71")
      .s()
      .p("AB8AzIhmgVIgXgDIhIgDIgmAEIgNADIgLADIAJgIIAMgHIA6gbIBLgXIAZgGIAugJIArgGIADAAIgJBog")
    this.shape_66.setTransform(543.139, 370.5308, 0.2218, 0.2218)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#83DB71")
      .s()
      .p("ACsAxIh5gSIh9gEIhXAMIgSAFIgRAFIAggUIBUgiIAkgKIAlgJIAkgIIATgDICVgQIgKBog")
    this.shape_67.setTransform(544.4806, 364.2329, 0.2218, 0.2218)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#83DB71")
      .s()
      .p(
        "ADHA/IgygWQhQgkhOgWQgYgHgVgFIgWgGIhkgQIgggBIguABIAFgBIAQgEIAYgGIAhgFICAgFIAwADQBTAHBcASIBQATIglBhg",
      )
    this.shape_68.setTransform(547.5408, 357.0369, 0.2218, 0.2218)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#83DB71")
      .s()
      .p("ACBC+IgOgeIgcgyIhAhdQgwg+g/hAIg3g0IBOhHIANATQAQAVARAcQAxBLAmBQIAUAqIAmBoIAPBKIADAWg")
    this.shape_69.setTransform(555.4187, 361.9377, 0.2218, 0.2218)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#83DB71")
      .s()
      .p(
        "AlELeIADgnIAIhjIApkYIAmirIA6jDQAVhAAkhaIBCiRQAbg3AshNQAnhAAjgxQAng4AegjQAlgsAVgXIAqgpIAQgOIA0BCIgNALIgnAjQgbAagfAiQgcAegqA1QgmAxgmA5QguBFgdA3IgkBDIgjBHQgkBNgcBHIhCC+IgWBLIgKAlIg1DyIgWCNIgSCgg",
      )
    this.shape_70.setTransform(549.4981, 371.8519, 0.2218, 0.2218)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#9AF98A")
      .s()
      .p(
        "AsnKsQhKqXAKnJQAPqAC3iMQDmiuHfJwIBcheQBxhpBqg8QFVjACXFNQBUC4h8DhQhgCwkZEeQlpFfjHDRQlmF0jqFQQgnjwgmlLg",
      )
    this.shape_71.setTransform(555.7621, 372.136, 0.2218, 0.2218)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#83DB71")
      .s()
      .p(
        "AI+OiQhcrbi7rBQh4nEiqj0QiGjDiig4Qh8griBAqQgoANglAUIgcASIghgqQAPgKAVgMQApgXAugPQCRguCMAwQCyA+CQDRQCwD7B6HNQC8LFBcLgQAvFxAKDoIg1ACQgJjngvlvg",
      )
    this.shape_72.setTransform(571.2261, 387.5378, 0.2219, 0.2219)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#FFFFFF")
      .s()
      .p("AG1JaQk+gFmZgWQnSgqmXA4IAAyYQFXgTGBAFQFAAFGWAWQHSAqGXg3IAASYQkIAOkhAAIiugBg")
    this.shape_73.setTransform(378.0364, 203.5321, 0.2221, 0.2221)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#316077")
      .s()
      .p(
        "EAAAA27QxHgNqXAXQgWh2gJjBQgLjjgLhUQgQjGAAkWQADk9AAifQgQqyA5wmIAyttQAdoGAMllQAIj/gLlhQgRmTgGjNQAAh+gUj7QgUj7AAh+QH2gGToALQRcAJKDgOQBUSKgSP8QgRHegfJnIg6RNQgfLPAHJuQAHK6A5J5QhuABikAAQnuAAvfgLg",
      )
    this.shape_74.setTransform(379.8005, 305.4602, 0.2221, 0.2221)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADhAgZQjHgOlJADQmCADiPgFIgorkQgPmmAqqDIAkoSQAWk5AIjdQAVqnhKpOIaBAAQBHK0gsNkQgFBmgdIeQgVGIgID9QgXLkA7IlQjHANhpAEQhBACg8AAQhhAAhSgGg",
      )
    this.shape_75.setTransform(470.5721, 114.1433, 0.2221, 0.2221)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADWAgZQi/gOlKADQmBADiJgFQgljugIkPQgGjYALklIgFkPQgDigAIhvQBCtbANmuQAWrMg9o9IZ0AAQBMJggfM7QgTHfhCO7QgJEaAOFhQAIDTAbGnQjHANhpAEQhBACg8AAQhhAAhTgGg",
      )
    this.shape_76.setTransform(433.785, 114.1433, 0.2221, 0.2221)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#B73E18")
      .s()
      .p(
        "EAFGAgaQk/ADi9gOQjXgDhtAAQjAAAiEAQQg8rOAUrGQA1uMARnFQAcsSg6pAIaBAAQBAL8glKYIgiKpQgVGhgIEHQgXMMA7JGQiKgFlzADg",
      )
    this.shape_77.setTransform(396.79, 114.3811, 0.2221, 0.2221)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADdAgZQjGgOlKADQmCADiPgFQg6pjAjtZQAKj0AcnpQAcnnAKj3QAWqBhLoyIaBAAQAmFnAFGEQAFFagVGRIgiKWQgVGUgIEAQgXL1A7I1QjGANhqAEQhBACg7AAQhiAAhSgGg",
      )
    this.shape_78.setTransform(359.9104, 114.1433, 0.2221, 0.2221)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADaAgZQi/gOlKADQmBADiKgFQhEpTAdsiQAKkZAamkIArrAQAUqdg8qbIZ1AAQBEJTgdMiQgQHUg/OqQgUJgA8JgIAAB3QjHANhpAEQhCACg7AAQhiAAhSgGg",
      )
    this.shape_79.setTransform(322.9612, 114.1433, 0.2221, 0.2221)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADgAgZQjHgOlJADQmCADiPgFQhAr2AlqeQAyuGANnFQAXsNg7o+IaBAAQAABpAICFQAFBJANClQARDGAAEWQgDE+AACeIgWHPQgOEGgRDIQgbEjAAFjQAADVANGoQAACoAEBTQAFCIASBzQjHANhpAEQhCACg7AAQhiAAhRgGg",
      )
    this.shape_80.setTransform(286.1264, 114.1433, 0.2221, 0.2221)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#B73E18")
      .s()
      .p(
        "EAD0AgZQi/gOlLADQmBADiJgFQhLpkAjtYQAKj0AenpQAenpAKj1QAQn4hFq7IIDAAQB6EoB1GGQA2C1CPIXQA6DoBCGFQBLG7AnCyQArCzBADnIB2GaQAGAUAUAnQAUAoAHAUQAlCMA0CPQAsB4BBCYQjHANhpAEQhBACg8AAQhhAAhSgGg",
      )
    this.shape_81.setTransform(507.1706, 114.1433, 0.2221, 0.2221)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#B73E18")
      .s()
      .p(
        "EADFAgZQi/gOlLADQmBADiJgFQBWpaDxrzQBakXCJmBIDvqWQB1lIBhmLQBLkvBRmtIHpAAQAmFnAFGEQAFFZgVGSIgiKWQgVGSgIECQgXL0A7I2QjHANhpAEQhBACg8AAQhhAAhSgGg",
      )
    this.shape_82.setTransform(249.7104, 114.1433, 0.2221, 0.2221)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#AF9E9A")
      .s()
      .p("AgMAAQAHgSAAgOQAAAOAWAXQAMAUgvAIQAAgNAGgUg")
    this.shape_83.setTransform(304.7385, 159.1804, 0.2221, 0.2221)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#AF9E9A")
      .s()
      .p("AgFAgIAAg/QAAANAFASQAGATAAANg")
    this.shape_84.setTransform(341.4695, 159.1971, 0.2221, 0.2221)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#AF9E9A")
      .s()
      .p("AgGAgIAAg/QABANAFASQAHATAAANg")
    this.shape_85.setTransform(452.2141, 159.1971, 0.2221, 0.2221)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#B73E18")
      .s()
      .p(
        "AgaGHQk1gejkjWQjmjYgnkyQBFAAAlgBQA+gDArgJQCfgIDOAIQA4ADEyATQHJAcEOglQgJChhLCTQhICNh4BrQh5BsiUA3QiDAxiIAAIgvgCg",
      )
    this.shape_86.setTransform(507.5891, 168.2539, 0.2221, 0.2221)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#B73E18")
      .s()
      .p(
        "AgTGIQiTgKiOhAQiNg+hwhoQj1jhgUktQBDAAAggCQA3gDAsgIQCggJDOAJQA3ACEyATQHJAcEPgkQgFCghICSQhECKh4BrQh3BqiUA4QiOA1iUAAIgYAAg",
      )
    this.shape_87.setTransform(470.7224, 168.2418, 0.2221, 0.2221)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#B73E18")
      .s()
      .p(
        "AgTGHQjMgWiMhGQhBghhQg8QgNgGgNgbQgOgagNgHQgggQgggmQgjgtgUgUQgGgHgBgNQABgMgIgHQg4hLgihiQgfhYgKhgQBFAAAkgBQA+gDAsgJQCfgIDOAIQA5ADEvATQHGAcEFglQABCghICUQhDCMh5BsQh5BsiWA3QiEAxiJAAIgugCg",
      )
    this.shape_88.setTransform(433.7057, 168.2539, 0.2221, 0.2221)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#B73E18")
      .s()
      .p(
        "AjrFPQhzglhVgzQhTgphOhaQhUhrgug0QgvhLgahVQgWhKgLhhQBFAAAlgBQA+gDArgJQCfgIDOAIQA4ADEyATQHJAcEOglQgWCegsBxQg2CLhbBcIgmAhQgVARgHAQQhyBoieAyQiNAsioAAIjSg5g",
      )
    this.shape_89.setTransform(396.839, 168.2374, 0.2221, 0.2221)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#B73E18")
      .s()
      .p(
        "AggGHQkygejljWQjvjegUksQBCAAAigBQA3gDAsgJQCfgIDOAIQA3ADEyATQHKAcEOglQgFClhKCUQhGCNh6BrQh5BqiYA2QiDAviIAAQgXAAgZgCg",
      )
    this.shape_90.setTransform(359.9723, 168.2544, 0.2221, 0.2221)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#B73E18")
      .s()
      .p(
        "AgTGHQjLgWiNhGQhBghhQg8QgNgGgOgbQgNgagNgHQgggQgggmIg3hBQgHgHAAgNQAAgMgGgHQg5hKgihjQgfhXgLhhQBGAAAkgBQA+gDAsgJQCfgIDOAIQA5ADEvATQHFAcEHglQAACghHCUQhECMh5BsQh4BsiWA3QiFAxiIAAIgvgCg",
      )
    this.shape_91.setTransform(322.9612, 168.2539, 0.2221, 0.2221)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#B73E18")
      .s()
      .p(
        "AmuEEQgTgNghgaQghgbgUgNQgQgYgfgbQghgcgNgOQi0jhgSjtQBFAAAlgBQA+gDArgJQCfgIDOAIQA6ADEuATQHGAcEGglQAJCEg7CLQg1B8hgBrIgmAhQgUARgIAQQhxBnieAzQiNAsipAAQjkgpi2hbg",
      )
    this.shape_92.setTransform(285.9647, 168.2374, 0.2221, 0.2221)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#B73E18")
      .s()
      .p(
        "AggGHQkygejmjWQjujegUksQBDAAAhgBQA3gDAsgJQCfgIDOAIQA3ADEyATQHKAcEOglQgKChhKCTQhICNh4BrQh5BsiUA3QiEAxiIAAIgugCg",
      )
    this.shape_93.setTransform(249.2277, 168.2539, 0.2221, 0.2221)

    this.instance_11 = new lib.ClipGroup()
    this.instance_11.setTransform(307.35, 272.7, 0.2221, 0.2221, 0, 0, 0, 299.4, 579)

    this.instance_12 = new lib.ClipGroup_1()
    this.instance_12.setTransform(455.7, 270.25, 0.2221, 0.2221, 0, 0, 0, 299.4, 580.1)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#EDCF54")
      .s()
      .p(
        "EARPBcIMgjegA3Q1fgiuBgIQi1AWkggGQlqgHhsAEQjRANmjANQmeANjWAOUgBqgbCAA3gmeQAOp5Au24QAr1FAOrqQAT4ahV74UAangBSAlQAAuQKpANVRAmQVSAnKpANQbJAWVbhZUABWAazgAoAjNQgOM0gkSLIg+e/QgIDXADFIIAFIeQgLH8AEGbQAGHuAbGpQAHCSAIEjQAJEFAQCvQxZA12iAAQueAAwmgWg",
      )
    this.shape_94.setTransform(378.3551, 252.5948, 0.2221, 0.2221)

    this.instance_13 = new lib.ClipGroup_2()
    this.instance_13.setTransform(452.9, 277.55, 0.2221, 0.2221, 0, 0, 0, 128.6, 414.4)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AszPZIBah4QAFgFAPgKQAPgKAFgFQBNhiDBjkQCsjLBiiDQAFgFAPgKQAPgKAFgFQB5inCAiOQGJnnE9mnIAUAAQhWCAiICxIjuExQhkB4i5DmQi4DlhkB4QgKAPgZAUQgZAUgKAPQhyCRidC4IkXFBIhaB4g",
      )
    this.shape_95.setTransform(98.5011, 437.7411, 0.2221, 0.2221)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWKCIgFgHQDKkNCyi/QB4iHDlkXQDmkYB4iHIAAAUQgoA3hQBkQhQBkgoA3QgFAFgPAKQgPAKgFAFQhPBhlCF5QjzEdiRC+QAAgGgFgHg",
      )
    this.shape_96.setTransform(91.2266, 395.5378, 0.2221, 0.2221)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwkUHQgCgGgHAAQFxnUD9kxQFYmgE5lUIBah4QAFgFAPgKQAPgKAFgFQAUgZAog3QAog3AUgZQAFgFAPgKQAPgKAFgFQAogtBGhaQBGhaAogtQA9hIBZh8QBpiTAtg5QANgaAFgFQANgQATAHIAAAUQi5D4jKD4QiwDWjjEEIg4BLQgiAtgeAeQgFAFgPAKQgPAKgFAFIhaB4QgFAFgPAJQgOAKgFAFQgbAogiAnQgVAXgwAwQgKAPgUAZQgUAZgKAPQgKAPgZAUQgZAUgKAPIhaB4QgKAPgZAUQgZAUgKAPQlWGkkgFyIgBgOg",
      )
    this.shape_97.setTransform(40.7494, 417.6177, 0.2221, 0.2221)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AszPZIBah4QAFgFAPgKQAPgKAFgFIBah4QDUjuDukuQAFgFAPgKQAPgKAFgFIHjpdQEdlmC/kAIAUAAQhIBriaDDQihDIhJBsQgKAPgZAUQgZAUgKAPQkMFhktFaQgUAZgoA3QgoA3gUAZQhLBQiMClQiMClhLBQIhaB4g",
      )
    this.shape_98.setTransform(200.2331, 437.7411, 0.2221, 0.2221)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWKCIgFgHQAbgoAignQAVgXAwgwQDjkbF0mqQBQhuCgjIQAUgUAjgoQAjgoAUgUIAAAUQjiE3kSEhIhZB3QgFAFgPAKQgPAKgFAFQhLBaiRC0QiRC0hLBaQAAgGgFgHg",
      )
    this.shape_99.setTransform(208.4516, 379.545, 0.2221, 0.2221)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwlUIQgDgHgGAAQG2ohCsjPQFXmeEolDQAUgZAog3QAog3AUgZQAFgFAPgKQAPgKAFgFQBLhpBVhVQAlglAqg7QAuhFAZgjQAKgPAZgUQAZgUAKgPQAjgsCDizQBjiIBLhRQAMgGAAAJIgCARQj6FLkDE8Qj3EtkcFCQgcAVgkAyQgsA5gVAVQgFAFgPAKQgPAKgFAFIhaB4QgFAFgPAKQgPAKgFAFQhLBphVBVQgUAZgoA3QgoA3gUAZQgKAPgZAUQgZAUgKAPQhIBgiYC8QiQCyhIBiIgBgNg",
      )
    this.shape_100.setTransform(142.5091, 417.6114, 0.2221, 0.2221)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AszPZIBah4QERkxFFmOQBShmHzpwQAegoBGhGQA9hIBZh8QBpiTAtg5IAUAAQhHBribDDQigDIhKBsQgKAPgZAUQgZAUgKAPQkMFhktFaQgUAZgoA3QgoA3gUAZQgKAPgZAUQgZAUgKAPQi7DpitC7IhaB4g",
      )
    this.shape_101.setTransform(301.9651, 437.7411, 0.2221, 0.2221)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWKCIgFgHQAegoARgSQAbggAagUQAyg3BVh4QBVh4Ayg3QCTiYDXkGQEEk9BXhiIAAAUQhQBuigDIQgeAihQBkQhBBRgtAtQgcAWglAwQgrA6gVAVQgFAFgPAKQgPAKgFAFQhLBaiRC0QiRC0hLBaQAAgGgFgHg",
      )
    this.shape_102.setTransform(310.1836, 379.545, 0.2221, 0.2221)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwkUIQgCgHgHAAQFSmwGtn6QEilYIApLQAUgZAog3QAog3AUgZQAbgUAbgfQAQgTAegoQAkgsCCizQBjiIBLhRQAKgKAAAeQjuFCkOFIQjfENk1FfQgcAVgkAyQgsA5gVAVQgFAFgPAKQgPAKgFAFIhaB4QgFAFgPAKQgPAKgFAFQhLBphVBVQgUAZgoA3QgoA3gUAZQgKAPgZAUQgZAUgKAPQhIBgiXC8QiQCyhJBiIgBgNg",
      )
    this.shape_103.setTransform(244.2133, 417.6112, 0.2221, 0.2221)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AtMQGICSinIHQozQAUgZAog3QAog3AUgZQAKgPAZgUQAZgUAKgPQBDhYDYkGQCujTBmiUQAKgPAZgUQAZgUAKgPQA8hLBpiRQBpiRA8hLIAUAAQhQB7ihDKQiyDehHBnQgFAFgPAKQgPAKgFAFQkhF1lDGDQjaEDkRE5IjsEfg",
      )
    this.shape_104.setTransform(402.2532, 439.407, 0.2221, 0.2221)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWJ7QCbjIDJjuIFrmlICvjbQBih5BNhaIAAAUQhQBuigDIQgeAihQBkQhBBRgtAtQgcAWglAwQgrA6gVAVQgFAFgPAKQgPAKgFAFQhLBaiRC0QiRC0hLBag",
      )
    this.shape_105.setTransform(412.0266, 379.545, 0.2221, 0.2221)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwoUBQELljERlKQEKlAEvlOIBah4QAFgFAPgKQAPgKAFgFQBLhpBVhVIBah4QAKgPAZgUQAZgUAKgPQAvhEA8hGQAngxBKhTQAug6B8ilQBniKBDhPQAKgKAAAeQjuFCkOFIQjfENk1FfQgaAVgmAyQgsA5gVAVQgFAFgPAKQgPAKgFAFIhaB4QgFAFgPAKQgPAKgFAFQhLBphVBVQgUAZgoA3QgoA3gUAZQgKAPgZAUQgZAUgKAPQhIBgiXC8QiRCyhIBig",
      )
    this.shape_106.setTransform(346.0563, 417.6112, 0.2221, 0.2221)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#2E5C79")
      .s()
      .p(
        "As9PyQCjjIDjkEIBah4QAKgPAZgUQAZgUAKgPQAUgZAog3QAog3AUgZQAKgPAZgUQAZgUAKgPQBEhZDXkFQCujTBmiUQAKgPAZgUQAZgUAKgPQA8hLBpiRQBpiRA8hLIAUAAQhRB7igDKQiyDehHBnQgFAFgPAKQgPAKgFAFQjrExlsGyQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFQhLBfiWCvQiWCvhLBfQgFAFgPAKQgPAKgFAFg",
      )
    this.shape_107.setTransform(504.9848, 438.0742, 0.2221, 0.2221)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWJ7QCxjyCZiyQAwgwAVgXQAignAbgoQAKgPAZgUQAZgUAKgOQAJgPAUgZQAUgZAKgPQAKgPAZgUQAZgUAKgPIDNj+QB6iYBTheIAAAUQhQBuigDIIh+CVQhKBXg8A2IhZB3QgFAFgPAKQgPAKgFAFQgeAog8BLQg8BLgeAoQguAvhUBwQhNBng1Awg",
      )
    this.shape_108.setTransform(494.7671, 400.5356, 0.2221, 0.2221)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwoUBQEKljESlKQEKlAEvlOIBah4QAFgFAPgKQAPgKAFgFQBLhpBVhVIBah4QAKgPAZgUQAZgUAKgPQAvhEA8hGQAngxBKhTQA8hLBuiRQBuiRA8hLQAKgKAAAeQg8BUhaBzIiWC/QjYEMiWC0QjDDoizDIQgaAVgmAyQgsA5gVAVQgFAFgPAKQgPAKgFAFIhaB4QgFAFgPAKQgPAKgFAFQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFQg8BQgfAnQg1BBguAuQgoAthBBfQhBBfgoAtQgoAthLBfQhLBfgoAtg",
      )
    this.shape_109.setTransform(447.7883, 417.6112, 0.2221, 0.2221)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#2E5C79")
      .s()
      .p(
        "As9PyQCjjIDjkEIBah4QAKgPAZgUQAZgUAKgPQAUgZAog3QAog3AUgZQAKgPAZgUQAZgUAKgPQBQhqDHj0QCwjZBoiOQAFgFAPgKQAPgKAFgFQBBhQBzigQBzigBBhQIAUAAQhXCGiXC/QjPEHgtA+QgKAPgZAUQgZAUgKAPQh6ChifDBIkgFZQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFQhLBfiWCvQiWCvhLBfQgFAFgPAKQgPAKgFAFg",
      )
    this.shape_110.setTransform(606.7167, 438.0742, 0.2221, 0.2221)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AoWJ7QCyjyCYiyQAwgwAVgXQAignAbgoQAKgPAZgUQAZgUAKgOQAJgPAUgZQAUgZAKgPQAKgPAZgUQAZgUAKgPIDNj+QB6iYBTheIAAAUQhQBuigDIIh+CVQhLBXg7A2IhZB3Qg2A1g8BJQgkAshGBaQgKAPgZAUQgZAUgKAPQgdAihCBaQg5BOgmAmg",
      )
    this.shape_111.setTransform(599.9975, 399.0363, 0.2221, 0.2221)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwoUBQEKljESlKQEJlAEwlOIBah4QAFgFAPgKQAPgKAFgFQBLhpBVhVIBah4QAKgPAZgUQAZgUAKgPQAwhEA7hGQAngxBKhTQA8hLBuiRQBuiRA8hLQAKgKAAAeQkHFik4FzQj2EllmGRQgTATglA1QgmA0gaAaQgFAFgPAKQgPAKgFAFQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFQgZAjgyBBQgyBBgZAjQgFAFgPAKQgPAKgFAFQgVAbhQBxQg/BYguA0QgoAthLBfQhLBfgoAtg",
      )
    this.shape_112.setTransform(549.5203, 417.6112, 0.2221, 0.2221)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AnVJOIBah4QAFgFAPgKQAPgKAFgFQBziXESlOQD6kxCMi9QAFgFAPgKQAPgKAFgFQBBhQBzigQBzigBBhQIAUAAQhXCGiXC/QjOEHguA+QgKAPgZAUQgZAUgKAPQh6ChifDAIkgFaQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFImuHqQCjjIDjkEg",
      )
    this.shape_113.setTransform(709.1151, 437.1858, 0.2221, 0.2221)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#2E5C79")
      .s()
      .p(
        "AwoUBQBniUCKiuID5k0QBVhVBLhpQAKgPAZgUQAZgUAKgPIBah4QAvgvAWgYQAigmAbgpQAFgFAPgKQAPgKAFgFIBZh3QAFgFAPgKQAPgKAFgFIBah4QAFgFAPgKQAPgKAFgFQCWi5EmlkQEDk9CxjoQAKgKAAAeQlPG0j/E0Qk4F6kzFHIhaB4QgFAFgPAKQgPAKgFAFQgUAZgoA3QgoA3gUAZQgFAFgPAKQgPAKgFAFQgZAjgyBBQgyBBgZAjQgFAFgPAKQgPAKgFAFIh0CkQhEBeg4A+QgjAohBBQQhBBQgjAog",
      )
    this.shape_114.setTransform(651.2522, 417.6112, 0.2221, 0.2221)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#8E817E")
      .s()
      .p(
        "ADVDLQh7gJg2gIQimgWlMgfQlMgfingXQhagHhIglQgbgKgDgZIADgKQACgGAEgFQACgGAEgEQAEgEACAAQBPhABfgUIAHgGQAEgDAEAAIBUgVQAygOAhgFIAWAAQAEgCALgCQAKgCAFgCQAGgDAGABIAMACQFcg5GHA5IAeAAQAaAEA0AEQA1AFAcAEQAPAFAbAAIDiAYQCUAPBNAJQBVAFArAEQBIAGA6AMQAdAHA7AJQAyAMAhAiQAHAUgEAKQgNAggbAIQgBAAgCAEQgBAFgCAAIgoAVQgXALgTADQgBAAgFAFQgEAEgCAAQi9BBjUAWQh6AMiVAAQg+AAhCgCg",
      )
    this.shape_115.setTransform(526.5468, 426.429, 0.2221, 0.2221)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#8E817E")
      .s()
      .p(
        "ADUDLQh6gJg2gIQingWlLgfQlMgfiogXQhagHhHglQgbgJgDgaIADgKIAGgLQACgGAEgEQADgEADAAQBPhABegUIAIgGQAEgDAEAAIBTgVQAygOAigFIAVAAQAFgCALgCQAKgCAFgCQAFgDAHABIAMACQFcg5GHA5IAeAAQAaAEA0AEQA1AFAbAEQAQAFAbAAIDhAYQCVAPBMAJQBVAFAsAEQBHAGA7AMQAdAHA7AJQAyANAhAhQAHATgEALQgOAggaAIQgBAAgCAEQgBAFgCAAIgoAVQgXALgTADQgCAAgEAFQgFAEgBAAQi9BBjVAWQh6AMiVAAQg9AAhDgCg",
      )
    this.shape_116.setTransform(461.8648, 426.429, 0.2221, 0.2221)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#8E817E")
      .s()
      .p(
        "AK6HLQjMgKhWgGQilgLh9gNQolgyxChGQxChGomgyQklgQjthUQhZgWgLg5IALgZQAGgMANgNQAHgNANgJQALgIAJAAQEBiPE5gvIAZgNQAMgHANAAIETgwQCjgeBwgMIBGAAQAPgFAjgFQAjgFAPgFQASgGAWADIAoADQR3h/UGB/IBkAAQBWAKCqAKQCvAKBZAKQAhAHAlACIBGABQD6AUHqAjQHqAjD6AUQEYAKCNAJQDrAPDCAaQBfAPDAAWQCmAcBrBLQAWAsgMAZQgWAkgkAYQghAWgnAIQgFAAgFAKQgFAKgFAAIiDAwQhNAag+AGQgFAAgPAKQgPAKgFAAQpsCSq7AzQmQAcnnAAQjMAAjcgFg",
      )
    this.shape_117.setTransform(376.8254, 428.3511, 0.2221, 0.2221)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#8E817E")
      .s()
      .p(
        "AGQE1QjogFlRgbIlygeQhMgKiWgKQibgKhPgKQgUgFgjgFQgjgFgUgFQj6gWh7gQQjUgdiRg/QgRgIgLgOQgMgRAAgUIAAgUIAfgjQAVgXASgMIAUAAQBohBCUgkQA3gNDVgkQAQgIATgFQAVgHAOAAIEEgeQIQgrJFA/IBaAAQBIAMBsAHIC0ALQBLAKCWAKQCWAKBLAKQAUAFAjAFQAjAFAUAFQEOAZA/AJQC7AcCCA6QAZARALAPQAOARAAAUIgQAiQgLAUgNAGQiuBuj6AxQhYARiGARQiVARhLAKQjVAXj3AAIhugBg",
      )
    this.shape_118.setTransform(297.2561, 439.6195, 0.2221, 0.2221)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#8E817E")
      .s()
      .p(
        "AiFGjIhkAAQhOgMh1gHIjDgLQgZgFgtgFQgtgFgZgFQn0govegyQvegyn0goQixgShYgKQiYgRhxgZQhLgSglgNQhCgZgggsIAAgnQAhg7BHggQAjgQBbgXQNFkDQCg9QLmgtRvA3QFdALIcAuQLZA+ChALQFfAZNqAuQMKApG/AmQEeAZA6AHQDBAaCPA0QAtAPAjAjQAIAHAAARQAAARgIAIIgoAoQg0AnhPAgQgjAOhoAjQkuBZloA9QkSAumUAsQquA+rHAAQr/AAsbhIg",
      )
    this.shape_119.setTransform(184.7679, 436.3233, 0.2221, 0.2221)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#8E817E")
      .s()
      .p("Av/BmQmogqAAg8QAAg6GogrQGogqJXAAQJXAAGpAqQGoArAAA6QAAA8moAqQmpAqpXAAQpWAAmpgqg")
    this.shape_120.setTransform(530.6288, 387.8691, 0.2221, 0.2221)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#8E817E")
      .s()
      .p(
        "AqZBoQsCgqkSgTQg/AAgegFQgzgJgagaQAAgKAKgIQAKgHAAgEQAUgOAfgKQATgGAogKQAjgFBBgPQBBgPAjgFIAeAEQASACAMgGQAPgFAZgFQAZgFAPgFQAMgGAXACIAjAEQDogpERgEQDHgDEyASQBxAAA5ACQBhAEBIAOQEdAZI6AZQI6AZEdAZQBKAAAKABQAzAHAZAfQgGAAgDAKIgBAKQk1BtmyAaQiXAJjkACIl6AEQmAgiqLgjg",
      )
    this.shape_121.setTransform(659.3597, 387.5922, 0.2221, 0.2221)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#8E817E")
      .s()
      .p(
        "ADeCdQjCgGkYgbIlegaQjNgQiRgSIgegBQgRgCgNgHQgtgFgXgFQgogJgMgfQAMgjA5gUQBXgfAEgDIAeAAQChgxC+gQQCegNDJAIQJXAoEsAeQCMAKBGAIQB0AMBeAUQAFAFAPAFQAPAFAFAFQAOAUgPAWQgOATgZAIQhXAihsAXQhBANiCAUQifAPiwAAQhFAAhHgCg",
      )
    this.shape_122.setTransform(615.4545, 387.7798, 0.2221, 0.2221)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f("#8E817E")
      .s()
      .p(
        "AJEBpIh4gEQkyAAmigYIrVguIhoAAQg6gFgmgZQAAgLALgHIATgLQA9gVBFgMQAvgIBTgJQEGgZDVgBQD5gCDhAcQCaAQGRALQFgAKDLAhQAeAAAAAJQgNAZgiALIg/AOIi+AdQhpAOhVAHQgkAEgyAAIgiAAg",
      )
    this.shape_123.setTransform(85.1738, 382.3034, 0.2221, 0.2221)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f("#8E817E")
      .s()
      .p(
        "AH3B2QjSgChpAAQkLgcnUgVQoUgYjUgRQg3AFgdgBQgzgDgZgeQAegYA4gOIBegWIAyAAQFNg8GWAGQDwAEHqAoQC0AKFtAPQFtAPC0AKQAoAAATACQAfAEAUAOQAHAGgFAHQgEAGgIAAQkJBUlkAPQhhADiGAAIhTAAg",
      )
    this.shape_124.setTransform(129.4235, 382.3628, 0.2221, 0.2221)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f("#AF9E9A")
      .s()
      .p(
        "EAw9AcPQvZgU+tg8Q+sg8vZgUQqggOtQgKQnxgGv/gKQsGgD7RgRQ/PgTuTgFUg4ugAXgcLABEQAAmCFJnOQCEi5DNjkQB8iJEHkPQEHkRB8iJQDNjkCEi5QFJnOAAmCUBjLgDYBdzACSUANfAAUAk0ABFQfrA7SpAWQIQAMMYAHIUoALUAfcAAOAjhgAmUAeIgAgAk1gBKQAAGCDCHiQB0EhE2JBQE2JBB1EhQDBHiAAGDUgvVABng6dAASQrUAErAAAUgsVAAAgnJgA3g",
      )
    this.shape_125.setTransform(375.4153, 419.9295, 0.2221, 0.2221)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f("#D63A3A")
      .s()
      .p("AgtJTQgSioAUjnQAckEAKiCQAejIgejIQApC6gEEcIgHDrQgECNADBdQAFAoAOBVQALBNAAAwg")
    this.shape_126.setTransform(274.3232, 298.6926, 0.2221, 0.2221)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f("#D63A3A")
      .s()
      .p("AiJAWQCAgaEDgyQAogKBLgeQBLgeAogKQAeAtAAAtQh7AtioAXQgjAFkHAaQjOAAjgBQQCThEDhgtg")
    this.shape_127.setTransform(236.2169, 300.9138, 0.2221, 0.2221)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AgKIvQgcgCgbgHQgGhFAIhhQANhyAFg8QBAlUAHgsQAijYgGipQAMAsAAA4QAAAhgCBDQAKBmgJCBQgEA1gSCvQggEkAhCoIg2gBg",
      )
    this.shape_128.setTransform(243.6889, 279.479, 0.2221, 0.2221)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AEsLkQgFgKgFgPQgFgPgFgKQhBhbhDh4Ih2jbQiglghEiGQiIkNiRjMQgFgKgFgPQgFgPgFgKQgqg8g/hPIhpiDQHQHfFPKAQAZAfAeAuIA3BTQAFAKAFAPQAFAPAFAKQB8CxBxCPQB5CXCECLQgjAPhBAjQhBAjgjAPQiMi0hGhkg",
      )
    this.shape_129.setTransform(246.2124, 295.4718, 0.2221, 0.2221)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AqsBVQCzhKEJg2QCXgfE6g8QDPgnD9hlQigBahSApQiKBFh4AoQkBBJgzAQQirA3iCBBQgbAShDAgQg7AdgbAVQgehagyhkg",
      )
    this.shape_130.setTransform(273.6445, 312.242, 0.2221, 0.2221)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f("#D63A3A")
      .s()
      .p(
        "EgAaAqaQhzgcg9hjQgPgWgIgcQgHgaAAgYQgVjugEkKQgEjdAJkTQAFhBAFiHQAFiHAFhBQAKhVAPilQAPilAKhVQAajQAukGIBYnVQAaibAUi5QAOh6ATjaQAMhsAHinIALkTQAHkKgMkwQgKj+gZk8QDDRZgtRxQgGDDgZE0QghGIgGBoQAAD3ABB7QACDLAHCnQAIFPAaEYQAdFFA5EiQAHAzgUAyQgTAwgmAfQhDAuhNAAQgiAAgjgJg",
      )
    this.shape_131.setTransform(257.8297, 344.853, 0.2221, 0.2221)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "EAJzAzXQjhgPjOhYQjOhaisidQgKgPgZgUQgZgUgKgPQgGgMgPgNIgdgZQiujUhMkCQhNkGAlkMQgKgKgKAAQgWDdhyDEQhuC8i4CRQgFAFgKAAQgKAAgFAFQhwBUiKAuQhaAUgoAKQkGAzj9hiQjvhei6jRQj6kogUl+QgUmGDmk4IARgjQALgWAMgNQAogoAKgUQlBisi6lOQi5lNAWloQgHhaAThpQAOhTAihwQBkkbCgi7QARgLASgZQAYggALgMQAMgGANgPIAZgdQAUgPAjgeQAjgeAUgPQDXilDNg3QhHkOAdj7QAgkUCWjfQAFgFAAgKQAAgKAFgFQCQjdDXiUQDPiQD3g6QD2g6D5AiQEBAkDhCBQAFAFAPAAQAPAAAFAFQDXCDCaCpQCiCyBYDUQBwgxCMgQQBzgNCPAIQA8AUAoAKQDNAsCpB+QCgB4BpCxQBoCuAgDHQAhDMgwDEQCeAYCBAwQCNA0B6BWQB1BaBBA8QBaBVBEBfQARAXARAkQASAoAIALQBxCyAbCiQAAAbAHAbQADAQAKAeQAwEghREeQhOEQi1DjQi0Dhj4CJQkACOkcAWIAsBGQAYAnAMAfIAPAjIAPAjQBTDigIDpQgHDqhiDZQiREyk7DMQlEC4lOAAQguAAgugEg",
      )
    this.shape_132.setTransform(243.3261, 282.6179, 0.2221, 0.2221)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f("#D63A3A")
      .s()
      .p("AgQEWQgSgZACgpQAGgxAAgZQAdjRAAjSQAXBcgGCPQgKC8ADAuQAAAUAHAZQADAPAKAeIgcAEIgHAAQgJAAgFgEg")
    this.shape_133.setTransform(92.656, 337.725, 0.2221, 0.2221)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f("#D63A3A")
      .s()
      .p("AAtgEQBagPBagtQAFAKAFAPQAFAPAFAKQhkATgyAHQhUANhBAAQgeAFhBAPQhBAPgeAFQCvg7BygKg")
    this.shape_134.setTransform(74.623, 338.6746, 0.2221, 0.2221)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f("#D63A3A")
      .s()
      .p("AgiEIQAAhRAaiGQAdiVAEhBIAAhiQAAAPAFAhQAFAjAAAPQAAA3gOCfQgLCJAFBOg")
    this.shape_135.setTransform(78.177, 328.4792, 0.2221, 0.2221)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AAqCxIihlQQgKgPgPgeQgPgegKgPQgegog3hQQg3hQgegoQB5CGBtChQBeCKBpC6IB1CjQBFBZBAA6QgbAGgaAQQgRAIgeAUQhniBhfi4g",
      )
    this.shape_136.setTransform(79.3986, 336.1202, 0.2221, 0.2221)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f("#D63A3A")
      .s()
      .p(
        "Ak7AjQBcgtCggZQDTghA4gQQAFAAAPgKQAPgKAFAAIAtgLQAPgEAMgFIhDAnQgyAegjALQiWAxhJAcQh7AuhdAuQgUgegUg8g",
      )
    this.shape_137.setTransform(92.1957, 344.2248, 0.2221, 0.2221)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AgUULQg3gQgdg0QgZkcAHjsQAIkQAyj4QBJmaAXlJQAcmEgjlgQCFLEhdLlQAAGkAEBoQAKEmAuDeQgFAPgIAiQgJAdgSAMQghAOgfAAQgVAAgUgGg",
      )
    this.shape_138.setTransform(84.8511, 359.5956, 0.2221, 0.2221)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "ADFYPQiYgkh6hsQgGgMgPgNIgdgZQhbhjgoh/QgpiDAWiFIgKgKQgcBngXA3QgjBRg2A9QhXBfh2AjQhvAih8gYQhugWhVhBQhRg/g2hkQhZiUAYi2QAYizB5h5QichRhbikQhaigAHiuQAAhzA6h5QAohUBciCQAKgPAegUQAegUAKgPQAdgcBAgZQBVgiAWgNQgVhVgFgeQgKg+AGg1QAHhPAehJQAahCAvhIQBwicCwhCQCthCC9AmQCqAlCFBrQCCBoBMCYQA4gbBHgGQA4gFBNAIQB2AWBbBIQBYBFA1BrQAlBRAKBWQAJBRgQBcQDOAWCVCZQCRCVAeDOQAOBbgRBhQgQBTgpBiQgaAvgoA0QgYAfgyA8QidCejzAgQBCBjAOBvQAIBfgKBKQgMBSgkBPQheC9jsBlIgoAAQhVAehYAAQhBAAhDgQg",
      )
    this.shape_139.setTransform(85.7918, 333.9639, 0.2221, 0.2221)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f("#D63A3A")
      .s()
      .p("AgiHlQgUiMATivQALhpAnjRQAGgqgCg6IgEhkIAAiMQAcCXgLEAQgOEvAHBtQAEARADA6QACAuALAdg")
    this.shape_140.setTransform(110.8261, 301.5802, 0.2221, 0.2221)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f("#C6BBB9")
      .s()
      .p("ADTBgQhCgLiCgeQiLgohHgPQh3gYhkAAQAAgtAegtQBqAUCAAsQBMAaCVA7QC4BDCcANQhdAAhvgTg")
    this.shape_141.setTransform(141.926, 303.135, 0.2221, 0.2221)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f("#D63A3A")
      .s()
      .p("AgeHHQgZh8ALi1QATjMAFhkQANiGghimQApCWAHDoIADDAQACB1AGBOIAeCMg")
    this.shape_142.setTransform(135.8496, 285.8095, 0.2221, 0.2221)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f("#D63A3A")
      .s()
      .p(
        "An4MMQg3gZgZgPQAKgPAPgeQAPgeAKgPQBGhuAog8QBniYCDiUQBjhxCcicQBQhkAygyQA0g7A5hNIBliQQAFgKAFgPQAFgPAFgKQAlgxAvhMIBMh9QhQC0gtBZQhLCUhQBxQiHC+kHFhQjaE1hxEBQgZgPg3gZg",
      )
    this.shape_143.setTransform(133.7075, 298.8036, 0.2221, 0.2221)

    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f("#D63A3A")
      .s()
      .p("ABBAyQiqhdiEg9QikhMiZgxQCfAcBaAVQCFAeBsApQC8BLB2AmQCrA4COAUQgUAyg8BkQjbg/i/h1g")
    this.shape_144.setTransform(111.7174, 312.5752, 0.2221, 0.2221)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f("#D63A3A")
      .s()
      .p(
        "EgBiAh6QhVg2AAhdQhOumCetsQB1rjAinZQAuqPhEooQDLPohdRMQgvIpAPH8QAPIiBXIKQAPBAgqA1QgmAvhBAQQgXAEgXAAQhEAAg8glg",
      )
    this.shape_145.setTransform(123.0228, 338.9401, 0.2221, 0.2221)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "EgMqAo4QkNgYjNihQgFgFgKAAQgKAAgFgFQi/iThujPQhqjGgXjuQgPikArinQAqimBaiPQhMgHhSgcQhEgXhUgqQg8gbg/gvQgqgehLhCIhahaQjSkAgelEQgSkdBOjCQAKgPAKgjQAKgjAKgPQCIkXECizQEEi0EygWQgsjlBqjbQBmjUDOiCQDEhxDbgGQDdgGDCBpIB4jSQAFgFAKgFQAKgFAFgFQCSjGDkhmQDahiD3AIQFVAPEXDUQEcDYBgFHIATAeQALASAAAMQAAAdAMApIASBGQAAAlACASQACAcAGAbQAPDJhBDRQDOBUCdCiQChCnBCDPQAAAFAKAKQAKAKAAAFQBADggODEIAABPQAAAKgKAZQgKAZAAAKQAAAegLAtIgTBLQAAAFgKAKQgKAKAAAFQgFAKgFAZQgFAZgFAKQgMAMgGAXQgKAfgCAEQhPCDg/BOQhVBmhnBFQgFAFgFAKQgFAKgFAFQghAcg+AfQhIAkgXAPQAIAPAOAOQANANAPAIQC7DogMEsQgMEsjLDaQgKAPgZAUQgZAUgKAPQiXCXkDAxQjcAmjOg1QjTg2ijiNIgZgdQgNgPgMgGQjSjigekmQgKAtAABbQAABegKAyQgWBxgnBjQgnBlg8BhQgKAPgUAZQgUAZgKAPQiCCRi9BfQjFBZjRAAQgsAAgugEg",
      )
    this.shape_146.setTransform(123.0361, 295.233, 0.2221, 0.2221)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f("#D63A3A")
      .s()
      .p("AgSEYQAFgZgKgtQgKgtAFgZQAsjRgPjSQALAXADArQADA6ADAQQADAugGCjQgECCARBQg")
    this.shape_147.setTransform(626.4671, 337.2308, 0.2221, 0.2221)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f("#D63A3A")
      .s()
      .p("AAtgEQBagPBagtQAFAKAFAPQAFAPAFAKIiWAdQhLAAhiARIimAhQCvg7BygKg")
    this.shape_148.setTransform(608.3826, 338.2303, 0.2221, 0.2221)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f("#D63A3A")
      .s()
      .p("AgiEIQAAhRAaiGQAdiUAEhCIAAhiQAAAPAFAhQAFAjAAAPQAAA3gOCfQgMCJAGBOg")
    this.shape_149.setTransform(611.9366, 328.0349, 0.2221, 0.2221)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f("#D63A3A")
      .s()
      .p(
        "ACWFyQgFgKgFgPQgFgPgFgKQhDhchEiQQhKijgohQQgog8gKgeQggg4gxhDIhZh1ICiDAQBaBvA6BhQBjCrBGBpQBiCQBmBtQgbAGgaAPQgRAJgeAUg",
      )
    this.shape_150.setTransform(613.1583, 335.6759, 0.2221, 0.2221)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f("#D63A3A")
      .s()
      .p(
        "Ak7AjQBcgtCggZQDTghA4gQQAFAAAPgKQAPgKAFAAIAtgLQAPgEAMgFIhDAnQgyAegjALQiWAxhJAcQh7AuhdAuQgUg8gUgeg",
      )
    this.shape_151.setTransform(625.9553, 343.7806, 0.2221, 0.2221)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AgYULQg2gQgeg0QgUjpANkfQAHinAelhQCsrwhJrXQAjCvAUDIQARCnAIDQQAHCfgPDYQgJB9gXD5QgIDQADCiQAEDDAVCvQAKAoAKBVQAKBVAKAoQgFAPgHAiQgJAdgTAMQggAOggAAQgUAAgVgGg",
      )
    this.shape_152.setTransform(618.6857, 359.1513, 0.2221, 0.2221)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "ACFX7Qh4grhZhSQgGgMgPgNIgdgZQhdhkgniHQgkh5AIiQQgXCEhJBrQhNBxh1A6QiBA1iOgXQiRgYhohgQifiYgIjgQgIjlCbibQiahdhZiYQheigAHiuQAIjQCGitQCDirDFhEQgrh0AQh/QAOh1A/huQAKgKAUgoQBliRCrhEQCeg/C0AQQCxAWCSBwQCOBsBUCoQCYg9CbArQCdAsBgCGQAFAFAAAKQAAAKAFAFQA8BSAWBkQAVBkgXBiQDQAmCTCSQCZCXAWDNQAPCDgpCEQgoCAhUBpQhVBqhxA/Qh4BCiEAIQBLB/AICQQAHCPg8CIQhCCSiuBoQhpA1ibARIgkABQhmAAhmgkg",
      )
    this.shape_153.setTransform(619.525, 333.5443, 0.2221, 0.2221)

    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AglIaQgdivAdivQAGhSAViAIAgjbQAGhCgChoIgDh+QACAMAEAOQANAyAAAUIAADIQAGBZgMCbQgOC2AAA/QAAA8AMBVIASCRg",
      )
    this.shape_154.setTransform(639.3187, 291.0655, 0.2221, 0.2221)

    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .f("#D63A3A")
      .s()
      .p("ACMBVQjgg3hzgZQh4gnigAAQAFgPAFgjQAFgjAFgPQCPATC6BEQBqAmDWBUQA9ATBUAPICRAaQiPgGjFgsg")
    this.shape_155.setTransform(675.5746, 292.4731, 0.2221, 0.2221)

    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f("#D63A3A")
      .s()
      .p(
        "Ag9FFQgDhZAIh0QAZkSADg2QAIi4gaiJQAuDFANDLIAADHQgGA7AEBHQACAlAKBdQASB7AWBDQgeAKhFAAQgVhigEhrg",
      )
    this.shape_156.setTransform(668.3998, 272.3711, 0.2221, 0.2221)

    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f("#D63A3A")
      .s()
      .p(
        "AqnNcQBKiaB1inQBLhqCajBQAygyBQhkQD1juDJkDQDFkBCmknQhvEHipEVQhGBugoA8QhQBzigDMQifDNhQBzQhbCFhPCVQhBB4hLCoQh4g8g8gog",
      )
    this.shape_157.setTransform(666.0233, 287.4754, 0.2221, 0.2221)

    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f("#D63A3A")
      .s()
      .p("AhogxQkNiHkPhVQEsAyDwBQQAeAPA8AZQA7AZAeAPQEdBoEdAtQgYAegZA5IgpBdQlGhylNjNg")
    this.shape_158.setTransform(640.3682, 303.4682, 0.2221, 0.2221)

    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .f("#D63A3A")
      .s()
      .p(
        "EgB0AnWQheg+gIhnQgVj1gEkYQgDjpAIkkQAFhfAPi5QAPi5AFhfQAAgPAKgjQAKgjAAgPQAAgZAFgyQAFgyAAgZQAZivA8lTQA8lUAYivQBCnuAGoJQAFnmgvoRQB2KUAgJgQAjKVhBJtIAABjQhLL9BLL9IAABkQAPBuAXDSQAWC7AeCFQAPBJgyA+QgvA8hOAPQgWAEgVAAQhSAAhIgxg",
      )
    this.shape_159.setTransform(653.5541, 334.0451, 0.2221, 0.2221)

    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "EgP8AvVQkUgsjhikQjfiiiIj6QjemPBcnNQAFgeAUg3QAUg3AFgeQAphtBFh5QlZg0kNjxQkNjyhhlZIAAgoQhRktBOk3QBMkuDPj1IAdgZQAPgNAGgMQAKgPAZgUQAZgUAKgPQCBhzCdhNQCOhGC2gwIAoAAQAhgNAlgEQAWgDAwAAQghkHBTjPQB/kuERieQBpg5BcgeQBrgkBqgHQE7gQDhB+QB9kCDDiqQDTi4EMg6QAogKA8gUQEfgsEQBTQEFBQDmC/QAPAKAUAZQAUAZAPAKQAUAUAoA8QDcD6BDFZQBBFMhcFDQCsBPCKBuQCVB3BlCYQDwF4geGoQAFAXgGAgQgJAoAAAOIgeCWQhTEni8DkQi/DnkMB+QA8BQAdAqQAvBEAiA8QAKAeAUAoQBhD3g3EJQg2EHi8DDIhaBaQihCEjPA6QjEA4jYgQQizgSimhOQilhMiBh7QkXkJgWloIgUAAQAfE3hzEZQh5Eoj+C2QgFAFgKAAQgKAAgFAFIgZAYQgLAJgOAHQgoAUgKAKQiiBYi1AbQhPAMhRAAQhhAAhkgRg",
      )
    this.shape_160.setTransform(653.61, 283.273, 0.2221, 0.2221)

    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics
      .f("#6D5A57")
      .s()
      .p(
        "Ag1K3QgMhRAAh3QACiHAAhBQAKhuAjjRQAijSAKhuQAHhPgEhgQgDg1gKh6QAUBJAHBiQADA7AAB4QAHBugGCYQgEBXgJCuQgOE/AuDFg",
      )
    this.shape_161.setTransform(501.292, 277.1467, 0.2221, 0.2221)

    this.shape_162 = new cjs.Shape()
    this.shape_162.graphics
      .f("#6D5A57")
      .s()
      .p("AE4CCQidgZh4goQiLgoivgeQhpgTjSgeQAKgoAHgTQAJgfAOgUQCpATDaBOQB9AtD3BhQDDA8DDAeQi+gUhdgPg")
    this.shape_162.setTransform(545.9663, 279.5901, 0.2221, 0.2221)

    this.shape_163 = new cjs.Shape()
    this.shape_163.graphics
      .f("#6D5A57")
      .s()
      .p(
        "AhGGLQgJiaAGhqQAckFAHiFQANjmgmilIAdB4QAPBDAGA1QAPByAECbQACBYABCwQAEFGA/DIQgqgCgXAAQgngBgZANQgMisgFhYg",
      )
    this.shape_163.setTransform(537.2733, 254.7124, 0.2221, 0.2221)

    this.shape_164 = new cjs.Shape()
    this.shape_164.graphics
      .f("#6D5A57")
      .s()
      .p(
        "ArRReQhLgogogUQAWgbAcg2QAhg/ARgaQAog8BGhuIBkiPQA4hQAsg5QAageBFhYQA3hIAogoQAagUAcgfQAQgTAegoQAFgFAPgKQAPgKAFgFQAog8AUgTQApgcAcgqQAFgFAPgKQAPgKAFgFQAKgPAUgZQAUgZAKgPQAFgFAPgKQAPgKAFgFQCQimCEixQB4ijCGjMQAFgKAFgPQAFgPAFgKQBGhiAshiQhvEJiGDsQiND4iyDtQgEAJgGAUQgFAQgFAFQkGErjYFOQjLE7iyFzQgogUhLgog",
      )
    this.shape_164.setTransform(534.0189, 273.2957, 0.2221, 0.2221)

    this.shape_165 = new cjs.Shape()
    this.shape_165.graphics
      .f("#6D5A57")
      .s()
      .p("ADRCHQkqipibhVQkTiKkThIQDhAeDhA8QCMAlDqBfQEDBmB0AjQEEA8CCAUQgNAYgmBaQgeBHgdAjQjYg5kEiKg")
    this.shape_165.setTransform(502.4304, 293.0285, 0.2221, 0.2221)

    this.shape_166 = new cjs.Shape()
    this.shape_166.graphics
      .f("#6D5A57")
      .s()
      .p(
        "EgALAxlQhjgPhMhJQhNhMgIhgQgfoRAFndQAGoMAynqQAAgPAKgjQAKgjAAgPQAAgZAFgyQAFgyAAgZQAjj3BDmFQBWn6AWiJQASjcAViCIAAhkQBqwchqwOQEhXjh3XfQgoHbgNDgQgXGEAGE4QALESAGB5QAKDfANCsQASC/AnEcIA/HbQgOBmhgA6QhHAshSAAQgXAAgXgEg",
      )
    this.shape_166.setTransform(518.7917, 330.9379, 0.2221, 0.2221)

    this.shape_167 = new cjs.Shape()
    this.shape_167.graphics
      .f("#5BBF1B")
      .s()
      .p(
        "EgSCA5hQh4gSg8gLQhngThNggQiCg8g/giQhrg4hQg8QjoitiWj4QiSjvgykUQgzkUAzkQQA1kYCbjsQjygmjYhvQjdhxiriyQhGhQghgrQg5hHgohCQgPgegeg3Qgeg3gPgeQg+iLgciNQAAgbgGgbQgEgQgKgeQgtlSBZk6QBZk8DZkFQA8hJBThLQAsgoBxhcQDNiJClg/QBwgqCAgcQBrgYCFgQQgNhQAChfQABg2AKh5QAei+BkipQBgigCaiDQEejqFugnQFvgnFBCsQBijDCijDIBZhaIB1haQBFg2A2gkQBLgwBcgmQBBgcBsgkIAoAAQFhhnFvBUQFhBREzDuQAFAFAFAKQAFAKAFAFQF7ExCKHfQCHHYiYHGQDeBVC7CeQC1CZCBDNQCADNA8DmQA+DtgTDtQgHCigsCkQgrCihMCXIgjBBIgjBBQiHDSiyCcQizCcjaBiQCZCSBXDRQBTDGAHDZQAACPgaB3QgdCFhBBzQgjBGgvBDQgpA6g5BBIhaBaQg8A1g4AnQg5AphDAlQhbAxhvAkQhfAeh7AZQkFAskHhAQj+g+jUiZQjWiaiEjbQiKjlgakHIgUAAQAJDFgQCTQgUC4g/CYQiQFRj/DVQhXA+gsAdQhMAyg/ATQgFAAgFAKQgFAKgFAAQkTB9k0AAQg/AAhAgFg",
      )
    this.shape_167.setTransform(520.1909, 269.2454, 0.2221, 0.2221)

    this.shape_168 = new cjs.Shape()
    this.shape_168.graphics
      .f("#9B8884")
      .s()
      .p("AgQEnQgSglACg6QAGhBAAgeQAdjCAAjNQAXBigGCYQgKDIADAxQAAAUAHAZQADAPAKAeg")
    this.shape_168.setTransform(171.5094, 336.4533, 0.2221, 0.2221)

    this.shape_169 = new cjs.Shape()
    this.shape_169.graphics
      .f("#9B8884")
      .s()
      .p(
        "AiiAfQA0gTAuAAQBGgMBTgXICSgsQAAAMAFARQAFASAAADQglASg1AJQg8AHgeAFQhtAFg1AFQhXAIg8AcQA1gbAdgKg",
      )
    this.shape_169.setTransform(152.8017, 337.625, 0.2221, 0.2221)

    this.shape_170 = new cjs.Shape()
    this.shape_170.graphics
      .f("#9B8884")
      .s()
      .p("AgcEYQgMhVAWh4QAdiGAKhGIAAiWQAMAsAAA9QAAAjgCBGIgQCuQgHBjANBMg")
    this.shape_170.setTransform(156.4558, 327.0132, 0.2221, 0.2221)

    this.shape_171 = new cjs.Shape()
    this.shape_171.graphics
      .f("#9B8884")
      .s()
      .p(
        "ADxHmQgkgYgmg8QgphHgZgjQgxhVg9h+IhojQQh0jjhviMIARAQIAjAfQB8CKB0C2QAjBHA8BiIBoCqQAhAyA+BFQBGBOAZAhIgyAjQgSAKgOAAQgKAAgIgFg",
      )
    this.shape_171.setTransform(157.7939, 335.1007, 0.2221, 0.2221)

    this.shape_172 = new cjs.Shape()
    this.shape_172.graphics
      .f("#9B8884")
      .s()
      .p(
        "Ak9BeQgQgbgGgbQBGgUCCgnQBVgPCigaQCIgcBggzQgFAFgPAKQgPAKgFAFQgeAKg8AoQiLA9iMAcQhQAegmARQg+AegoAhQgUgegIgQg",
      )
    this.shape_172.setTransform(171.1351, 343.2281, 0.2221, 0.2221)

    this.shape_173 = new cjs.Shape()
    this.shape_173.graphics
      .f("#9B8884")
      .s()
      .p(
        "Ag6UsQghgagHgmQghiWAAi+QAAg1ANkfQAKiWAoksIAsjbQAXh7AMhhQAfkTAEj1QAEkLgdj9QB9JmhBLfQgZFZAJEXQAJFHA5EhQAHAxgpAhQgkAcgyAAQglAAgggag",
      )
    this.shape_173.setTransform(163.3445, 359.443, 0.2221, 0.2221)

    this.shape_174 = new cjs.Shape()
    this.shape_174.graphics
      .f("#6EDD26")
      .s()
      .p(
        "ADMZOQj0g0iTjWQiSjUAmjyQgRBHgPArQgUA6gcAwQgaA2g0AwQggAchGAyQgkASg2AQIhaAaQhFAOhPgQQhAgNhOgjQhGgjg8g8QgygygyhLQgMgRgGghIgMgyQg1iRAfiUQAgiZBuhoQiehaheilQhfimAHiyQAIjEBviqQBxisCyhSIAjgLQAXgHAMgMQg8jKBSjLQBRjKC7hxQCEhQCbgNQCUgMCQAyQCPAyBsBlQByBpA3CLQCEg6CUAeQCPAcBrBkQBjBjAoCAQApCCgeCFQCUAfB1BMQB9BQBQB7QB2DHgiDlQghDfihCoQgMAGgNAQIgZAcQicCAjgAgQANANAGATIALAmQAAAKAUAUQA8CWgbCgQgcCghpB4QhaBah4A8Qh6A5iIAAQhKAAhOgRg",
      )
    this.shape_174.setTransform(164.3721, 332.6927, 0.2221, 0.2221)

    this.shape_175 = new cjs.Shape()
    this.shape_175.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABETdQsUgOpOkdQi5haiPhpIhphYQiWgIjwggQnihBnHh5QkChFhcimQhTiTBFi0QBDiuCuh8QC6iDDkgMQGLgUEXg4QCMgdA8gYIBrhYQCHhqCMhXQHBkXFOAKQGvANFKBSQFuBaBFCKQKXgcGPBbQHsBwAAEWQHFBAEBA1QEdA8CdBEQCgBGBHBhQBDBbAGCQQALD6pAC5QjkBJkcAxQj+AsjfANQi6D1n5BzQmeBfpPAAIiUgCg",
      )
    this.shape_175.setTransform(538.0935, 148.1667, 0.2221, 0.2221)

    this.shape_176 = new cjs.Shape()
    this.shape_176.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABETdQsTgOpPkeQi5hZiPhqIhphXQiWgIjwghQnihAnHh6QkChFhcilQhTiUBFizQBDiuCuh8QC6iDDkgMQGLgUEXg5QCMgcA8gYIBrhZQCHhpCNhXQHBkYFNALQGvANFKBSQFuBaBFCKQKXgcGPBbQHsBwAAEWQHFBAEBA1QEdA8CdBEQCgBFBHBiQBDBbAGCPQALD7o/C4QjlBJkbAyQj+AsjfANQi7D1n5BzQmdBfpQAAIiUgCg",
      )
    this.shape_176.setTransform(215.3627, 171.889, 0.2221, 0.2221)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_176},
            {t: this.shape_175},
            {t: this.shape_174},
            {t: this.shape_173},
            {t: this.shape_172},
            {t: this.shape_171},
            {t: this.shape_170},
            {t: this.shape_169},
            {t: this.shape_168},
            {t: this.shape_167},
            {t: this.shape_166},
            {t: this.shape_165},
            {t: this.shape_164},
            {t: this.shape_163},
            {t: this.shape_162},
            {t: this.shape_161},
            {t: this.shape_160},
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
            {t: this.instance_13},
            {t: this.shape_94},
            {t: this.instance_12},
            {t: this.instance_11},
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
            {t: this.instance_10},
            {t: this.instance_9},
            {t: this.instance_8},
            {t: this.shape_26},
            {t: this.shape_25},
            {t: this.shape_24},
            {t: this.shape_23},
            {t: this.shape_22},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.instance_7},
            {t: this.shape_19},
            {t: this.instance_6},
            {t: this.shape_18},
          ],
        })
        .wait(210),
    )

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(380.1, 308, 365.69999999999993, 157)
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681D",
    width: 750,
    height: 480,
    fps: 24,
    color: "#EC6680",
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681D"] = {
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
