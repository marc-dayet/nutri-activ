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

  ;(lib.tetef = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F2B186")
      .s()
      .p("AhdBCQgYgRADgyQADhPgCgNQAHAMARBJQALAwAjAGQAqAHAsgSQAogQAhggQgQBEhDAcQgaALgYAAQgoAAgkgcg")
    this.shape.setTransform(24.3716, 65.1605, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#EFE6E8")
      .s()
      .p("AhegmQANgNAcgLIAxgQQAdgGAnANIA9AXQhYAAg7AYQhSAfgUBKQAAhLAegsg")
    this.shape_1.setTransform(25.2328, 51.2537, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#EFE6E8")
      .s()
      .p("AhGgMQAPg5AugNQARgGAbADIAtADQiGA6gZBvQAAhDAJggg")
    this.shape_2.setTransform(13.5609, 58.392, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#BC8E6F")
      .s()
      .p("AgPCoQgjgFhMggQBlgHBGheQBEhZAAhtQAWBJgMBRQgLBLgnBGQgWAmgwAAIgSgBg")
    this.shape_3.setTransform(28.9486, 67.0132, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#3D3A38")
      .s()
      .p("AgjAQQAAgWAMgTQAUgdAlAfQACAUAAAJQAAASgMAMQgIAEgIAAQgTAAgYgYg")
    this.shape_4.setTransform(27.7992, 56.7286, 0.2813, 0.2813)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#3D3A38")
      .s()
      .p("AgbAMQgHgHAFgMQAEgLAIgJQAKgKAHAAQAMAAAUAUIgBAcQgCAPgHAGQgMAGgJAAQgTAAgJgag")
    this.shape_5.setTransform(16.3135, 61.911, 0.2813, 0.2813)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F2B186")
      .s()
      .p(
        "AhCF4QgfgCgxgKQAAgUgUgeQgUgeAAgUQAUgUAWgbQAVgcAUgUIATgWQANgSAFgFQBKhgAfiCQAYhmAAiNQAAgKAUgUIA0A5QAgAhAGAeQAcCGgcCZQgZCFhBCLQgMASgXAQQgdAUgGAGQgcAMgnAAIgMAAg",
      )
    this.shape_6.setTransform(41.8863, 68.0388, 0.2813, 0.2813)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#EFE6E8")
      .s()
      .p(
        "AieFEQg+gcgegKIgKgUQhpg/gRiFQgPh2A5hzQAshJBJgvQBEgsBVgQQCkgPCHBLQBjA6AoBkQAtBvhABaQgKAKgUAoQggA0g9AzIh1BXQgcAXg1AAQhBAAgXAHQgqAAg4gWg",
      )
    this.shape_7.setTransform(24.8353, 9.7602, 0.2813, 0.2813)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#EFE6E8")
      .s()
      .p(
        "AqBLgQgwgYgogoQhrhygaisQgYidAvinQALgngChGQgDhSAEgcIAehaQASg/AWgtQAdg9ApgpQBGhTBrg5QBXguB+giQAUAAAjgFQAjgFAUAAQAqgGA/gUIBogiQCSgnCuBFQCUBKA+CcQAJAaAIAuIAQBLQAWBWA3AlQB1BDA1BdQCFEsklG3IgahfQgQg7gSgkIAAgeQAAgMgLgLIgTgRQgmhihTg8QhVg+hoAAQgaAAi5ARQiBALhZgSQhhgWhPg6QhPg5gthSQg3CTgaBKQguCCgNBiQgaCTBWCtQgyAAg0gag",
      )
    this.shape_8.setTransform(24.5262, 39.4065, 0.2813, 0.2813)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "ACIOKQh7gVh4hLQhag5h0hrQiLiShdi9QhijFgZjFQgcjXA+i0QBFjHCsiIQAKgFAPgKQAPgKAKgFQCbhXCRAbQDOAgCPCAQAqAkA0BBIBWBtQAFAFAAAPQAAAPAFAFQAYAkAZA2IApBaQBpEsgPE/QgFAogPBLQgPBLgFAoQgNAzgeA6Ig5BlQhKBghoAoQhIAchSAAQghAAgjgEg",
      )
    this.shape_9.setTransform(24.3639, 51.9574, 0.2813, 0.2813)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.tetef, new cjs.Rectangle(0, 0, 49, 78.6), null)
  ;(lib.tete = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ai+FUQhyh3iPj+IgUgUQgyhdAAhwQAAhlAohoQBKhJBCANQATAmgJAvQgPA3gFAeQgdCTBPCPQAxBCBaA8ICgBnIBaBaQA+AtAuASQA9AYA9gHQA3gOA1gkQAngbAxgxQgfAggqA2IhJBdQhZBrhbAeQjNAAixi6g",
      )
    this.shape.setTransform(20.5762, 46.7971, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AhhB0QhHidAph6QAPgeAdgNQAdgOAlAHQA8APAoArQApArAIA7QARAzgKBOQgLBgAEAiIhkAAQgPAKgQAAQgwAAgyhkg",
      )
    this.shape_1.setTransform(3.9877, 29.3568, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#E2A983")
      .s()
      .p("AgEA3QhDgWgpg4QgHgHAFgQQAEgRAIAAQAvAvA3AZQA7AbA6AAQggAcgpAAQgXAAgZgJg")
    this.shape_2.setTransform(28.0291, 51.2895, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AF+HMQhhgShXhlQhbh5g3gyQgTgTgkgCIhAABQgwgDhLAJIh9APQiUALhUhIQg0g0gNhgQgFglAAiGQAth4Bpg8QA8giBMgQQAwgLBggJQCegICWA0QCYAzB3BpQAFAFAFAKQAFAKAFAFQAFAFAKAFQAKAFAFAFQAHAPAOAOQAOANAPAIQBNBkAUAlQAqBPgTBJIAAAyQgTB7gvBJQg3BVhVAAQgMAAgMgBg",
      )
    this.shape_3.setTransform(25.0823, 12.9457, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AAUCGQgqgMgjgqQglgzgZgZQARgWAsgVQA3gaANgKQASgSAbgQIAtgaQAKAAAEABQAGACAAAHQgXAiAHA+QAJBSgDAVQgHAegbATQgTANgUAAQgIAAgJgCg",
      )
    this.shape_4.setTransform(30.7609, 44.607, 0.2813, 0.2813)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#3D3A38")
      .s()
      .p(
        "AgZApQgOgGAAgPQAAgFAFgPQAFgOAAgFQARgSAIgDQAKgGAOAHQAIAAAGAGQAGAGAAAIQAAARgHAQQgJATgOAHQgLAEgKAAQgIAAgGgDg",
      )
    this.shape_5.setTransform(26.2609, 37.4103, 0.2813, 0.2813)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#3D3A38")
      .s()
      .p(
        "AgUAiQgOgGAAgPQAAgFAFgJQAFgKAAgFQAbgdAKAOIAHAMQAGAGAJgDQAAAOgGAOQgGANgIAIQgMAEgJAAQgIAAgGgDg",
      )
    this.shape_6.setTransform(38.2141, 40.9882, 0.2813, 0.2813)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#E2A983")
      .s()
      .p(
        "AAHCZQgtgCgkgeQgagmgHgNQgRghAAgaIAKgKQAOAEApAmQAgAeAXgMQApgXANhAQAEgTAGgmQAGghAJgWQAAgIAGgEQAHgFAHAHQAZAtAFBDIAAB1QAAAQgHANQgJAOgOAHQgrAWgoAAIgFAAg",
      )
    this.shape_7.setTransform(31.4641, 45.2422, 0.2813, 0.2813)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#51495B")
      .s()
      .p("AjbiuIAAgoICWB4QAyAtBbBYQBSBOBCAwQgFAKgFAPQgFAPgFAKg")
    this.shape_8.setTransform(12.1984, 31.0766, 0.2813, 0.2813)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#51495B")
      .s()
      .p("AgCgDQgqgKgoAPIAAgTQAAgOAGgEQAEgCAKAAQAzgJAmANQAuAOAOApIgUAUQgVgkgugJg")
    this.shape_9.setTransform(32.3078, 40.1688, 0.2813, 0.2813)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#51495B")
      .s()
      .p(
        "Ag2DEQhbgRg6hOQggg5AAgzQAAg7AqgqQAlgsAzgYQAxgWA1AAQBbgIBGA2QBHA3AHBZQAAAyghAyQghAwg2AfQg/Adg9AAQgXAAgXgEgAABimQhnAEg9BUQgWAlAAAqQAAAqAWAmQAhApApAVQAvAZAwgHQAtAAArgVQAqgWAeglQAZgpACgrQACgygdgjQg4hOhjAAIgKAAg",
      )
    this.shape_10.setTransform(40.4289, 41.879, 0.2813, 0.2813)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#51495B")
      .s()
      .p(
        "AiACpQhXg0gNhOQgVhgBQhHQBGg/BkgJQBXAJA6AiQBHAqAOBLQAPBohLBLQhDA1hPAHIgZACQhBAAg/gggAhiiMQhaBIAABNQAHBCA6ArQA3ApBFAAQBCAIA3gnQA1gmAQg9QANg2gcgtQgWgig1gkQgtgWg3AAQg2AAgtAWg",
      )
    this.shape_11.setTransform(23.7034, 38.266, 0.2813, 0.2813)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AgdC0QAGiOAAhwQAAhUgUhgQgQhQgihkQCvChALEHQAJD9iRDAIAOj/g")
    this.shape_12.setTransform(43.2355, 24.8891, 0.2813, 0.2813)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABOITQgZgEgTgTQjCiZhBkVQgQhuANhcQANhoAyhdQAKgKAUgoQAmg8A5gqQA5grBDgPIAACkQAFBcAZBAIAAAeQA5BeAaA/QAlBYAABKQAAAqgcA1Ig0BfQgUA8gHAeQgNAyAAAoQgFAYgXAAIgIgBg",
      )
    this.shape_13.setTransform(7.5721, 21.4176, 0.2813, 0.2813)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#F2B186")
      .s()
      .p(
        "ABEFTQh5gshahpQhBhcgqh9QgSg0gti0QgGgZAJgdQAFgQAMgeQAKAeAeAyQAeAyAKAeIAeAeQCqEsDlAnQAvBdA1BDQg9AehEAAQg5AAg+gVg",
      )
    this.shape_14.setTransform(15.1132, 52.0395, 0.2813, 0.2813)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p("ABiAyQgeAAhGgYQhCgWgrAGQAAgKgKgJQAygsBGADQBAABA3AoQAIAPgHAZQgGAUgJAAIgGgBg")
    this.shape_15.setTransform(40.948, 36.0037, 0.2813, 0.2813)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABDA8Qg3gegdgPQgQgGhDgGQgygEgRgXQgQgQANgbQAOgeAdgHQBPAABLAoQBFAkA4A/QARASAFAKQAJARgfAZQgegPg3geg",
      )
    this.shape_16.setTransform(26.4869, 32.7641, 0.2813, 0.2813)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AjcOlQiJhEh6iCQgFgFAAgKQAAgKgFgFQg2g1gjhPQgVgwgehkQgNgZgLgoIgQhBQghjFANiOQAdjhAehvQAvi0BeiGQAFgFAAgKQAAgKAFgFQAog1AzgxQAcgbBHg9IAjgQQAWgLANgNQCYhBCoAiQCeAgCNBtQAqAkAjApQAeAjAhAwIA7B1QAgBCATA5QBRE8hCFBQg/E0jAEcQhmCZiKAbQgIADggAQQgXALgRAAQgZACgYAAQiCAAiDhAg",
      )
    this.shape_17.setTransform(24.3057, 29.3819, 0.2813, 0.2813)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#51495B")
      .s()
      .p("AAZBVQgmhHg0hMIhjiOIAAgoQBGBGA8BaQA7BjAgAvQA2BQA2A1QgFAKgFAPQgFAPgFAKQhQhkgog8g")
    this.shape_18.setTransform(41.8703, 37.2641, 0.2813, 0.2813)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.tete, new cjs.Rectangle(0, 0, 47.1, 62.2), null)
  ;(lib.note2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#443D4F")
      .s()
      .p("AjHDcQgKgFgFgFQA8hQBYhXQA0g0BthkIBah4IATAPQALAJAAAGQhABiiAB8QioCignAtQgFgFgKgFg")
    this.shape.setTransform(3.9357, 10.7775, 0.3749, 0.3749, -59.998)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#443D4F")
      .s()
      .p(
        "AgpBmQgbgEgZgQQgWgXgIgcQgHgdAHgdQAIgRAUgRQAVgTAVgHQAwgYA4AQQA9ASAOAyQAHAwgjAhQgfAdgzAJQgUALgYAAIgNgBg",
      )
    this.shape_1.setTransform(4.9143, 23.9547, 0.3749, 0.3749, -59.998)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.note2, new cjs.Rectangle(0, 0, 8.6, 28.7), null)
  ;(lib.note1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#443D4F")
      .s()
      .p("ADWCVQg5gsgTgOQhPgciChNQiWhZg8gbQAGgHAOgGQANgHAGgHQBcAhCqBpQCqBoBcAhQgLAogcAAQgMAAgRgJg")
    this.shape.setTransform(21.7045, 4.323, 0.2355, 0.2355)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#443D4F")
      .s()
      .p(
        "Ai9FVQgNgHgHAAQAnh7BoikQCWjsAVgnIAVhAQAPgmAQgQQAKAAARAIQAQAIAKAKQgvBdhPCCQh5DEgOAZQgUAngnBJQgnBHgUAoQgHAAgNgGg",
      )
    this.shape_1.setTransform(23.7125, 14.9741, 0.2355, 0.2355)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#443D4F")
      .s()
      .p(
        "AgoCNQgjgEg0gaQgtgkAGg2QAFgsAigjQA6g6A5gSQBHgWA+AtQAhAhAKAnQALAsgbAbQgNAOgXAkQgYAdggAAQgmAfgrAAIgPgBg",
      )
    this.shape_2.setTransform(16.2187, 23.0002, 0.2355, 0.2355)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#443D4F")
      .s()
      .p("Ai8FVQgOgGAAgHQAIgnAag1QAmhNAHgPQBoimAxhSQBTiMAzhtQANANAaANQgvCBiIDYQiLDfgsBxQgGgGgTgHg")
    this.shape_3.setTransform(11.2114, 8.332, 0.2355, 0.2355)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#443D4F")
      .s()
      .p(
        "AiXBSQgRgkALgpQAIgeAZglQAbgtAwgTQAmgOA4AAQAmAAAkAhQAiAfAKApQAAAughAuQgeArgqAVQg7AUgsAAQhMAAgeg7g",
      )
    this.shape_4.setTransform(3.8245, 16.288, 0.2355, 0.2355)

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
  }).prototype = getMCSymbolPrototype(lib.note1, new cjs.Rectangle(0, 0, 28.7, 26.3), null)
  ;(lib.maindroite = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AAUA2QgVgXguAEQguAFgRgNQgQgNgDgLQgCgKACgJQALgSAXgTQAUgIApgHQApgHAlAUIAvAdQAaASAOATIAAALQgbAngfAIQgIACgHAAQgWAAgQgRg",
      )
    this.shape.setTransform(13.1329, 6.0376)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.maindroite, new cjs.Rectangle(0, -1, 26.3, 14.1), null)
  ;(lib.main = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AAVBkQgQgFgTgnQgUgZgXgrQgXgrAYgUQAHgEAJgCIARgGQAGgCALgLQAKgIAOAJQAMAHAFALQAYAmAJAvQAIAvgoA2IAAAAIgPgFg",
      )
    this.shape.setTransform(5.7029, 10.5)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.main,
    new cjs.Rectangle(-1.2, 0, 13.899999999999999, 21),
    null,
  )
  ;(lib.Interpoler7 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AlbW4QjBgRi4hVQiQhLhWilQhBh8gtjOQgojwAAkYQAKiqAGhVQAKiMAOhyIAQhuQALhAANguQAAgUAFgoQAFgoAAgUIAei0QAFgKAFgZQAFgZAFgKQASiFAmi+IBAk9QAUAUAeAoQAeAoAUAUQAMAMAHAXQAJAgACADQARAMAMAZQARAlAEAGQApBTAaBGQAdBTAOBUQAwDSAEEwIABD9QABCWAGBmQAKB4AIA+QAMBmAUBWQAFAZAUAtQAUAtAFAZQAOArAjAnQAeAiApAYQBLAmBpgSQBjAABogbQBbgYBpgxQFji5Edj/QAZAeA3A8QA3A8AZAeQgYAegZAtIgpBLQjbE4jOC5Qj8DiklBhQiTAuiaAAQgtAAgugEg",
      )
    this.shape.setTransform(0.0141, 0.0202, 0.2813, 0.2813)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-31, -41.2, 62.1, 82.5)
  ;(lib.Interpoler5 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#443D4F")
      .s()
      .p(
        "AlECPQAygZBfg3QBfg3AygYQAKgFAPAAQAOAAAKgFQAygZBig8QBXgsBLATQgNAIgXAlQgWAigWALQhaAoizA2Qi0A3haAog",
      )
    this.shape.setTransform(46.0328, -57.8417, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#514C4D")
      .s()
      .p(
        "AodLwQjgiYh4hQIAAgUQDUlZDjkCQD4kaEujgQDYiPBcg3QCqhjCYg1QAKAAAUgFQAUgFAKAAQAxCjAXCRQAZCngHCbQgJB8gVBNQgcBng+BLQgUAagfAcQgTAQgoAeQg7AhhbBJQhmBUgwAeQgNAGgKAQQgHAIgKAUQgPAKgZAUQgZAUgPAKQi+C+gsAxQh+CJhPB8QiMhWjEiEg",
      )
    this.shape_1.setTransform(-30.1647, -105.5766, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "ABBJwQgzggh2hsQjRjDhRlEQCXhWBLjFQAohoAsj9IHfGkQgUAtgeBfQgeBfgUAsQgHAdAGAeQAGAbAPAYQAJAOAeAQQAZAOAGAQQAKCCgBBAQgDBqgaBQQgjBXhBANQgRACgRAAQhSAAhUg0g",
      )
    this.shape_2.setTransform(19.5953, -132.9672, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#302D2E")
      .s()
      .p(
        "Ak6WLQh1hNgcgRIA8nNQAnkGAzjPQAiiLB4nHQBelpA0jqQA8jcBFk2QA3geBzg8QBzg8A3geQgzG7hoHNQhhGsiUHTIgeCWQAAAFgKAPQgKAPAAAFQhIFXggCnQg4EhgTDdQg6gdhXg5g",
      )
    this.shape_3.setTransform(-27.7953, -59.0297, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#514C4D")
      .s()
      .p(
        "EAE+AjTQmygXmfhmQkhhGi8hOQj3hoi6ieQgGgGgMgCIgMgCQBQsaD8upQCXo2FvxiIAAgeIBLjGQAwhzA5hNQAmg+BwgmIAeAAQB/goCiAAQBkAAC+AUQBcAfCMAhIDuA4QAFAAAPAKQAPAKAFAAICQAcQBPARA5AZQAJAAALAIQANAJAHANIAUAAQASAYAgAeIAyAuQAPAUAZAoQAZAoAPAUQBXCcANCGQAhDsgNEwQgFB4gjGkQhpN0gvG4QhSL5gaI0QkvAgkeAAQiEAAiBgHg",
      )
    this.shape_4.setTransform(0.3785, -70.2544, 0.2813, 0.2813)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#51495B")
      .s()
      .p(
        "AopLDQgEkqAdkaQAQiQAhjFIA8lSQBHmdAAkLQATgZAmgLQAVgGAqgIQCygNDTAcQCcAVDqA2QAGAogHA8QgJBMAAAYQAAAPgKAjQgKAjAAAPQAABLgRBpQgKA8gXB4QgaCphzJOQhaHOgdEqQAAAPgKAjQgKAjAAAPQAAAegFBBQgFBBAAAeQiDgFjaAHQkSAIhMAAQgfkygEkSg",
      )
    this.shape_5.setTransform(-24.462, 106.2843, 0.2813, 0.2813)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#443D4F")
      .s()
      .p(
        "Ag5C/QlsgMjYAFQgahIAPhnQAHgyAih8QCegdBYgHQCMgKByAaQATAgAmAUQAXALAxARQBpAhC1AfQDUAkBSATQAgAIAOAfQAPAhgVAcQgJAOgZAQQgVAOgFAQQgFAJgZADQgZACgFAQQidAAmmgNg",
      )
    this.shape_6.setTransform(-17.7241, 146.2972, 0.2813, 0.2813)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#443D4F")
      .s()
      .p(
        "ApYDlQgNgjgKgPQghiWANh3QBQgeCjhBQCQg0BxgNQARAAAbAPQAcAPAIAAQB1ApC9gNQAzgEBpgKQBcgHBBADIA1APQAfAOAGAfQAHAzgnAuQg1AwgZAYIgoAAQjZBEkRAgQjCAmhdAUQigAih6AmIgIACQgSAAgLgWg",
      )
    this.shape_7.setTransform(26.5022, 146.9846, 0.2812, 0.2812, 14.9991)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#51495B")
      .s()
      .p(
        "Aq4d2QgWiRgQjwQgUkagMhnQgGgwADhNQADhVAAgoQgZpTBIsnQApnTBmuiIVFAAQAAEsgfF3QgTDhgyHCQh0IEhoGdQiuL1hMMPg",
      )
    this.shape_8.setTransform(-14.9516, 18.7359, 0.2813, 0.2813)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#443D4F")
      .s()
      .p(
        "EAFNAosQh/k/hNjZQjcpohTn2QgRh4gXhQIholAQg7i5gliHIjgqbQiBl5h1kdIAAgeQhkjcgohuQgsiMiVoMQhzmZhcj3QB4gcFKg/QEbg2CngtQBOAACJgVQCggZA3gEQClIHCEI4QB4IFBmJeQBFFvARBnQAtEEATDRIAeCMQBdJyCTLeQAhBNAkCPQAoChAVA7QBFEUBvD8QBzEFCbDdQiiAykWAwQlKA3huAbIjUoYg",
      )
    this.shape_9.setTransform(11.2966, 51.7631, 0.2812, 0.2812, 14.9991)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#514C4D")
      .s()
      .p(
        "Ag8BSQAAhZgBgsQgBhKgFg8QgCgYgEgeIgKg3QAJADALAIIARAOIASARIATAUQAFAFAHANIAOASIAFAKIAFAKQAMAZAGAfQAGAaADAhQADAfAAAvIAABcQAFBRAWA8IgVAHQgNAGgKABQglAMgnATQgShdgGh4g",
      )
    this.shape_10.setTransform(40.6, -96.575)

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
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-55.1, -152, 110.30000000000001, 304.1)
  ;(lib.Interpoler4 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "ACYEIIg6gVQhXgkhZg8Qg6grgfgiQgqgugPg1QgZhXAshgQANgeAYgkICaBzIgHAKIgdAwQgCAIgBAIQgBAJABAGQAkBHBEBFQAqAqBdBMIAcAVIAcAVIgNAbQgIAQgHAKQgZgDghgMg",
      )
    this.shape.setTransform(0.0086, 0.025)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-23.8, -27.9, 47.6, 55.9)
  ;(lib.Interpoler1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#514C4D")
      .s()
      .p("AjyArICejTIFHAmIklEsg")
    this.shape.setTransform(0.025, 0)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-24.2, -16.9, 48.5, 33.9)
  ;(lib.guitare = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#51495B")
      .s()
      .p(
        "Ah3HPQiwgthiiWQgKgegog8QgMgYgGgpIgMhBQgOhdAbhZQAYhRA/hWQBdiBClgjQCWggCXA4QB1AzBNBqQBJBlAXCEQAQCQhMCHQhNCKiFA0QhkA8hvAAQg3AAg7gPg",
      )
    this.shape.setTransform(41.8128, 90.0466, 0.2811, 0.2811)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#51495B")
      .s()
      .p(
        "AA8D7QgHgZgOgXIgdgqIhcjOQg1h5g2hIQAUgFAegUQAegUAUgFQAbAiAbAwQAQAcAdA8QBLDCBpClQgwAhgZAKQgLAFgKAAQgbAAgJgmg",
      )
    this.shape_1.setTransform(24.2764, 108.7822, 0.2811, 0.2811)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#51495B")
      .s()
      .p("AgpA2QgdgUAAgiQAFgJAEgXQAGgVAZgGQAOgHALgCQAGgBASAAQAYAIAQAaQARAbgHAcQgZAygjAAQgbAAgXgQg")
    this.shape_2.setTransform(200.2912, 17.4546, 0.2811, 0.2811)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#51495B")
      .s()
      .p("AgaBFQgggIgHgiQgIgYAIgYQAIgbAWgOQAWgPAfALQAfAKAPAYQAJAbgFAaQgHAggbAOQgVAFgQAAQgNAAgKgDg")
    this.shape_3.setTransform(187.2151, 23.7375, 0.2811, 0.2811)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#CC8946")
      .s()
      .p(
        "EgjBARUIFQipQGYjQGDjKQCphYEJiOQE/iqCwhcQERiNDPhjQJEkXVKqDIAJASQ1KKDpFEXQjMBhkTCPQiWBOlZC4ImyDmQmDDKmYDQIlQCpg",
      )
    this.shape_4.setTransform(117.5993, 47.741, 0.2812, 0.2812)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#CC8946")
      .s()
      .p("EgiiARnIP5pIQQ2phF/iwQJkkXUqpuIAJARQ0qJvpkEXQl/Cvw1JhIv5JIg")
    this.shape_5.setTransform(119.6871, 50.3912, 0.2812, 0.2812)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#CC8946")
      .s()
      .p("EginASeIE3jFQF0jrFTjPQQ8qYF/ivQJkkXUqpvIAIATQ0qJupkEYQl+Cuw7KXQlUDRlzDpIk2DFg")
    this.shape_6.setTransform(121.3672, 53.4421, 0.2812, 0.2812)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#51495B")
      .s()
      .p(
        "A8xOhIg0hoQCbhrD9iIQGGjRAggSIBGgeIBGgeQAFgFAPgKQAPgKAFgFQBPgoCCg2QCZhAAwgWQC6hUEXhxIHQjAQAZgKAogZQAogZAZgKQEYh1Fbi9QB1hBHmkXIAjBIQAWAvAKAfQAcBcgtA6QgMASgoAQIhEAaQkECWk2CMQgFAAgKgKQgKgKgFAAIgqgSQgWgIgGAGQhLAeiRBLQiRBLhLAeQvcHEj3B5QqwFQnwFAQgdgjgdg9g",
      )
    this.shape_7.setTransform(150.0467, 34.7439, 0.2811, 0.2811)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FA9837")
      .s()
      .p(
        "AwFV7QhvgOhwgxQhXgnh4hOQgKgKAAgKQiEhYhYiEQgKgKgKAAQiPi5hrjXQgHgTAQgIQAIgFAXgIQHpkuITkBQD6h4H0jcQHzjcD6h4IFZixQDJhpCQhYQC+huFojcQAeA8AOAgQAWA0AOAuIAAAeQA6CngWC1QgUCohWCkQg/BmhEBIQhLBOheA6QhGAqhRAWQhDAShcAIQhDADhrgJQiSgMgdgCQjQgJiFBPQgvAignA1QgYAggoBGQgoBJgzBtQg3B5gdA8QhoDYhlCDQjWERj6CSQj5CRj8AAQgqAAgqgEg",
      )
    this.shape_8.setTransform(61.9531, 91.8688, 0.2811, 0.2811)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#51495B")
      .s()
      .p(
        "AAoDNQgFgFgKgPQgKgPgFgFQg7iMghhDQg2hwg1hQQAZgGAdgUIAugiQA3BVBUC5QBVC4A3BVQgLAHgnAPQghALgRARQgog8gKgeg",
      )
    this.shape_9.setTransform(16.4048, 93.7808, 0.2811, 0.2811)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#51495B")
      .s()
      .p(
        "A8xPtQgcglAFgcQAAgRAdgLQAugTAFgDQAggZAtgeIBTg3QAKgFAPgFQAPgFAKgFQDfiUESiQQC7hjE8iVQDLhjJNkKQHrjeEeiYQAJgSgCgtQgDglAQgKQBnhHDmiZQDMiIBxhQQBGANA1BGQAeAnAvBYQqrGxpLELIpqEZQlnClj8B7QqqFPnoFFQgEgVghgsg",
      )
    this.shape_10.setTransform(148.6628, 30.1053, 0.2811, 0.2811)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FA9837")
      .s()
      .p(
        "A+0L9QhHkEAVj0IAeiWQA0ibBOhoQCUjEDthzQDKhhERgqQDggcEAAwQBxAYCcAwIEEBOQCQAgB+gqQBXgoBIhSQAoguBRh6QA6hqA5hQQBEhdBNhHQCChsCxggQCigdC1AnQC4AsCVCAQCPB6BUCwQhWA4h9BKIjbCCIkiCfQieBViEBCQkrCZmSCyIrEE0QgSAGgWAQIgoAcQgoAUhLAeQhLAegoAUQkxCliUBTQkACOi/B4Qg8AegcARQgwAbgiAaQiHjnhBjrg",
      )
    this.shape_11.setTransform(56.6768, 73.3623, 0.2811, 0.2811)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#51495B")
      .s()
      .p(
        "AhmHSQimgkhgiGQgFgFgKgFQgKgFgFgFQhfidAPisQAPiWBph4QCBiIC5gQQC6gQCVB2QCWCHAeDDQAPCVhLCCQhLCCiHA8QhiA0hrAAQgxAAg1gMg",
      )
    this.shape_12.setTransform(41.8549, 92.8976, 0.2811, 0.2811)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#51495B")
      .s()
      .p(
        "AgNBbQhRiygPgeQgPgUgZgtQgZgtgPgUQAZgFAzghQAqgUAMAwQAGAaAPAXIAdApQA7CMAhBEQA1BzA2BWQgaAHgcAPQgQAIgeAUQgvhMg4h9g",
      )
    this.shape_13.setTransform(24.2764, 111.8526, 0.2811, 0.2811)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#443D4F")
      .s()
      .p(
        "A8yOhQgohYgMgVQCMhQBGgyIEJiRIEJiRIBGgeIBGgeQA5gmBOgiQAtgVBaglQEGiAHZjCQIAjVDehoQCDg/CzhdIE2ikQBDgpCshjQCVhVBSg3QAvBUASA+QAaBWgVBEIjcBzIjcBzIiDA+QhNAkg+AMQgZAGgcgOIgvggQiFBQitBXQhoA1jSBkQpyEVk2CPQocD7l/DuQgKAFgPAFQgPAFgKAFQhaA8hQAoQgZAUg3AjQg3AjgZAUQgdgjgdhCg",
      )
    this.shape_14.setTransform(150.069, 37.6958, 0.2811, 0.2811)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#ED8629")
      .s()
      .p(
        "AusV7IhGAEQgoACgegGIhUgdQgtgPgfgGQjkhejKjsQici2iGkMQgHgTAQgJQAIgFAXgHQAKgFAPgFQAPgFAKgFQDaiPE0iiQCwhdFmi1QAegPBBgZQBBgZAegPQAngcBHgfQBUgkAagPQS6oBQFp9QBlDDATDJQAUDXhQC9QhaDCigCSQiyCRjKAPQhGADjSgTQitgRhrAXQhTAQg4AhQhCAmgjA+QgFAFgKAFQgKAFgFAFIgsBGQgYAngMAfQhbDnhfCtQhyDMiLCiIhaBaQhGAygoAeQgFAFgFAKQgFAKgFAFQisCBjGA9QgyAUgaAJQgsAOgoAHIg7AEIgPAAQgXAAgNgEg",
      )
    this.shape_15.setTransform(62.8201, 96.9365, 0.2811, 0.2811)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#51495B")
      .s()
      .p(
        "AgEBuQg8h8gjg8QgHgLgfhKQgWg4gegdQALgIAngNQAhgMARgRQAoA8AKAeQAFAFAKAPQAKAPAFAFQA7CMAgBCQA3BxA1BQQgZAGgdAVIguAhQgjg8g7h9g",
      )
    this.shape_16.setTransform(16.4048, 96.8732, 0.2811, 0.2811)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#51495B")
      .s()
      .p("AgvAxQgjgfAPgrQAPgmAugFQAugEAWAlQATAggPAcQgGALgcAcQgPAFgOAAQgbAAgXgUg")
    this.shape_17.setTransform(190.9341, 2.7236, 0.2811, 0.2811)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#51495B")
      .s()
      .p("AgiA5QgjgRAAgjQAAg4AogNQAPAAAcgDQAXAAANANQAYAfgEAgQgEAigkAWQgMADgLAAQgVAAgUgLg")
    this.shape_18.setTransform(178.3425, 10.011, 0.2811, 0.2811)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#51495B")
      .s()
      .p(
        "A8uPtQgagmgFgbQPQppSfniQAFgFAPgKQAPgKAFgFQDNhZCGhBQC0hXCXhZQAPgKgFgpQgFgsAPgPQB0hUBeguQDeiLDairQBCAUA1A+QAfAmAyBaQhQA8gyAeQnEEcpgElQjZBplECSIokD7QkvCEkPCOQkiCXkUCvQgyAlhLAvIh9BMQgIgUgfgtg",
      )
    this.shape_19.setTransform(148.5349, 32.9166, 0.2811, 0.2811)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FA9837")
      .s()
      .p(
        "A/WJiQhDlsCOkVQBxjUDZiMQC9h6EFhCIAoAAQD2hAEzA7QBuAWCfAtIEMBOQBbAVAmADQBGAGA8gUQB1gnBdhwQAigpArhBIBJhxQAzhVAqg5QA0hIA3g4QBNhGBsgoQBaghB9gRQDsgdDTBsQDLBpCCDOQAKAPAPAeQAPAeAKAPQgPAKgeAPQgeAPgPAKQkGCkjXB5Qj9COjwBxQgFAFgPAKQgPAKgFAFIhGAeIhGAeQgFAFgPAKQgPAKgFAFQg3AZhpAsQhpAtg3AZQgFAFgPAKQgPAKgFAFQsjFIr+GcQgyAehkA3QhkA3gyAeIiSBeQhYA4hCAeQivlfgykLg",
      )
    this.shape_20.setTransform(56.6556, 76.2622, 0.2811, 0.2811)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    lib.guitare,
    new cjs.Rectangle(-0.3, 0, 203.70000000000002, 136.5),
    null,
  )
  ;(lib.goutte = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#66FFFF")
      .s()
      .p("AgHAQQgUgIAEgMQADgNARADQANACAKALQALAKgQAHg")
    this.shape.setTransform(2.4527, 1.5719)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.goutte, new cjs.Rectangle(0, 0, 4.9, 3.2), null)
  ;(lib.Group_28 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p("AjMAFQAUAFAnAPQAhAJASgTQAZglghgbQgvgZgPgKQBCgLB2ADQCJACAwgEQiMA5hDAeQh4AzhSAzg")
    this.shape.setTransform(20.5, 9.5)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0, 0, 41, 19), null)
  ;(lib.Group_27 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p("AAAAAQgigOgPgFIBZAAQAAAFAFAOQAFAPAAAFQgPgFgjgPg")
    this.shape.setTransform(5, 2)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0, 0, 10, 4), null)
  ;(lib.Group_26 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#172316")
      .s()
      .p("AAAAAQgigOgPgFIBZAAQAAAFAFAOQAFAPAAAFQgPgFgjgPg")
    this.shape.setTransform(5, 2)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0, 0, 10, 4), null)
  ;(lib.Group_25 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p("AgKgDQAAgGALAAIAKAJQgFAAgFAFQgEAFgFAAIgCgNg")
    this.shape.setTransform(1.125, 1)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0, 0, 2.3, 2), null)
  ;(lib.Group_24 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F8F5CE")
      .s()
      .p("AgKgDQAAgGALAAIAKAJQgFAAgFAFQgEAFgFAAIgCgNg")
    this.shape.setTransform(1.125, 1)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0, 0, 2.3, 2), null)
  ;(lib.Group_23 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p(
        "ArZLaQhpgUgygFQAAk0ABiYIABhiIgBgBQgDgIAFgKIgBATIASASQAUAGATAPQALAJAUAUQAXAPAVAAQAVAAAPgPQAjgjgZgZQgvgvg1gNQgOgHgQAEQgKADgUAKQgNANgEAKQACi4AFieQAAAGAHADIANABQAAAaAXAOQAQAKAVAAQAcAAARgKQAWgNgHgbQgHgrgsgXQgqgWgvAIIAAj6QBDgvBaguQA1gbBugyQAegKAPgEQAZgGAUAAQEYgaGFAkQBfBxDBAQQA7AEBtgCQB2gDAuACQAeA8AAA8QAAAJgMAfQgKAWAMASQhaAHhNAxQhNAwguBMQg6B1AwBJQATAxAtAeQAaARA8AhQBZAsBlgOIAAAUQhRgQhHAMQhRAOg5AyIgZAdQgNAPgMAGQgMASgGAbIgMAtQgigRgkAGQgoAGAAAjQAAAZAYALQAOAGAgAIIglAlQgUAQghAHIgFAGQgFAIAAAGQAIAegOAVQgNAVgfAIQgFAAAAALQAAAOgFAFQhPA5gnAPQhJAfg7ghQghg3gihkQgphygVgpQgLgXgeggQgngqgKgNQgqgrgvgSQg3gXg4AOQgXAGgZAZQgiAigIAFQhYBxghBgQgrB5AiBuQgkALguAAQgiAAgngGgAB4I2QggALAHAcQAAAkAqAaQAnAaAngIQAogbgXgpQgSghgngTQgMgEgNAAQgPAAgPAFgAB9GLQghAnAuAjQAiAZA1ALQAKgFAcgIQAWgJAAgSQgHgagTgJQgLgFgXAAQAAgPgGgNQgGgMgIAAQgegDgOAAQgXAAgNANgAC5ExQgUAUAAAKQAHATAUANIAhASQAOAGAQgEQAKgCAUgKQAUgUAAgKQgQghgggNQgQgGgPAAQgVAAgUAMgAhIDPQgMANAAAPQAkBJA1AbQAbASAegCQAkgCAHgiIg/hPQgqgpgsAAQgPAAgNAMgAgYAPQgNAKgFAGQgMALAAANQARAzAqAdQAdAOAbgKQAagKAIgYQAAgOgMgQQgIgKgUgUQgPgWgVgIQgLgEgJAAQgLAAgMAEgAo3jXQAaA9AvAUQAoAUAygGQAegEA8gUQAagNgCgQQgCgJgMgMQgSgGgDgNIABgLQAoAAAWgKQAYgLAOgdQA3gLAWgKQAogUANgnQAeAAAPgDQAZgEAUgNQAWgQAGgUQAGgWgPgWQhGhihWgtQhrg3hgAwQgeAegQAMQgcAVgaAHQgcAOgFAgQgDAdAQAZQgUgFghAKQghAKgOgFQgKAAgkgOQgfgMgXAGIgTAQQgLALAAANQAIAfAfAXQAgAXAdgHQAJBLASAsg",
      )
    this.shape.setTransform(88.5498, 73.5518)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0.1, 0, 177, 147.1), null)
  ;(lib.Group_21 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p("AgOBBQjBgYhwhoQBjgMCcAJQDUANAqAAQA3AAAtAeIAeBZQhwAFhRAAQhZAAg0gGg")
    this.shape.setTransform(32, 7.0905)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0, 0, 64, 14.2), null)
  ;(lib.Group_20 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#172316")
      .s()
      .p("AgOBBQjBgYhwhoQBjgMCcAJQDUANAqAAQA3AAAtAeIAeBZQhwAFhRAAQhZAAg0gGg")
    this.shape.setTransform(32, 7.0905)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0, 0, 64, 14.2), null)
  ;(lib.Group_19 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F8F5CE")
      .s()
      .p("AgOBBQjBgYhwhoQBjgMCcAJQDUANAqAAQA3AAAtAeIAeBZQhwAFhRAAQhZAAg0gGg")
    this.shape.setTransform(32, 7.0905)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0, 0, 64, 14.2), null)
  ;(lib.Group_18 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p(
        "ABmEDQgygHgegMQgMgMgWgHIgjgLQhLgtgthLQg4iDBwhwQBjhjCQgRQAAAKAFAPQAFAPAAAKQAHAHAHANQAGAMAAAIIAOAtQAGAZAAAUQAGBIgCBrIgEC0IhQgLg",
      )
    this.shape.setTransform(18.6055, 27)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0, 0, 37.3, 54), null)
  ;(lib.Group_17 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F8F5CE")
      .s()
      .p(
        "ABmEDQgygHgegMQgMgMgWgHIgjgLQhLgtgthLQg4iDBwhwQBjhjCQgRQAAAKAFAPQAFAPAAAKQAHAHAHANQAGAMAAAIIAOAtQAGAZAAAUQAGBIgCBrIgEC0IhQgLg",
      )
    this.shape.setTransform(18.6055, 27)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0, 0, 37.3, 54), null)
  ;(lib.Group_16 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABmEDQgygHgegMQgMgMgWgHIgjgLQhLgtgthLQg4iDBwhwQBjhjCQgRQAAAKAFAPQAFAPAAAKQAHAHAHANQAGAMAAAIIAOAtQAGAZAAAUQAGBIgCBrIgEC0IhQgLg",
      )
    this.shape.setTransform(18.6055, 27)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0, 0, 37.3, 54), null)
  ;(lib.Group_3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgMAPQgjgThNg3IBTATQAwALASAdIAoAAQAoAUAUAUIgKAUQg7gGhEgng")
    this.shape.setTransform(12.5, 6)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0, 0, 25, 12), null)
  ;(lib.Group_1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#76AEA2")
      .s()
      .p(
        "AAULgQnBggjhgKQgKhGgEgjQgFg0gBgrQgKh9AAj/QAAj+gKh9IAAi0QAGg7ADhRIABiMQD5gXGHAHQIDAJB8gDQATA+APBaIAaCeQAQB1AIDGQAIDmAIBUIAAIIQisATjXAAQiHAAiZgHg",
      )
    this.shape.setTransform(69.5, 74.3698)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0.1, 139, 148.6), null)
  ;(lib.notes = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_4
    this.instance = new lib.note2()
    this.instance.setTransform(145.15, 144.4, 0.075, 0.075, 29.998, 0, 0, 4.8, 15)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(16)
        .to({_off: false}, 0)
        .to(
          {
            regX: 4.4,
            regY: 14.3,
            scaleX: 0.75,
            scaleY: 0.75,
            rotation: 29.9989,
            y: 85.35,
            alpha: 1,
          },
          9,
        )
        .to({x: 149.55, y: 75, alpha: 0}, 5)
        .wait(1),
    )

    // Calque_3
    this.instance_1 = new lib.note1()
    this.instance_1.setTransform(119.7, 76.45, 0.1, 0.1, 0, 0, 0, 14.5, 13.5)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(10)
        .to({_off: false}, 0)
        .to({regX: 14.3, regY: 13.2, scaleX: 1, scaleY: 1, x: 138.9, y: 38.1}, 9)
        .to({x: 145.9, y: 22.35, alpha: 0}, 5)
        .to({_off: true}, 1)
        .wait(6),
    )

    // Calque_2
    this.instance_2 = new lib.note2()
    this.instance_2.setTransform(74.95, 48.4, 0.1, 0.1, 0, 0, 0, 4.5, 14.5)
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(3)
        .to({_off: false}, 0)
        .to({regX: 4.3, regY: 14.3, scaleX: 1, scaleY: 1, x: 65.35, y: 14.3}, 9)
        .to({y: 2.95, alpha: 0}, 5)
        .to({_off: true}, 1)
        .wait(13),
    )

    // Calque_1
    this.instance_3 = new lib.note1()
    this.instance_3.setTransform(22, 111.3, 0.1, 0.1, -45, 0, 0, 14.2, 13.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({regX: 14.3, regY: 13.1, scaleX: 1, scaleY: 1, rotation: -44.9994, x: 8.9, y: 93.8}, 9)
        .to({x: -2.45, y: 74.7, alpha: 0}, 5)
        .to({_off: true}, 1)
        .wait(16),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-17.2, -11.3, 177.5, 156.70000000000002)
  ;(lib.jet = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_5
    this.instance = new lib.goutte()
    this.instance.setTransform(88.15, 15.7, 0.5935, 1, 0, 0, 0, 4.2, 2.9)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({_off: false}, 0)
        .to(
          {
            regX: 4,
            scaleX: 0.9781,
            scaleY: 0.629,
            skewX: -114.2992,
            skewY: -99.0353,
            guide: {
              path: [
                88.1,
                15.7,
                85.9,
                12.8,
                82.4,
                9.4,
                75.4,
                2.8,
                68.7,
                0.8,
                57.9,
                -2.3,
                52.4,
                11.4,
                46.8,
                25.1,
                46.5,
                55.6,
              ],
              orient: "fixed",
            },
          },
          9,
        )
        .wait(1),
    )

    // Calque_4
    this.instance_1 = new lib.goutte()
    this.instance_1.setTransform(88.15, 15.7, 0.5935, 1, 0, 0, 0, 4.2, 2.9)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(6)
        .to({_off: false}, 0)
        .to(
          {
            regX: 4,
            scaleX: 0.9781,
            scaleY: 0.629,
            skewX: -114.2992,
            skewY: -99.0353,
            guide: {
              path: [
                88.1,
                15.7,
                85.9,
                12.8,
                82.4,
                9.4,
                75.4,
                2.8,
                68.7,
                0.8,
                57.9,
                -2.3,
                52.4,
                11.4,
                46.8,
                25.1,
                46.5,
                55.6,
              ],
              orient: "fixed",
            },
          },
          9,
        )
        .to({_off: true}, 1)
        .wait(3),
    )

    // Calque_3
    this.instance_2 = new lib.goutte()
    this.instance_2.setTransform(88.15, 15.7, 0.5935, 1, 0, 0, 0, 4.2, 2.9)
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(3)
        .to({_off: false}, 0)
        .to(
          {
            regX: 4,
            scaleX: 0.9781,
            scaleY: 0.629,
            skewX: -114.2992,
            skewY: -99.0353,
            guide: {
              path: [
                88.1,
                15.7,
                85.9,
                12.8,
                82.4,
                9.4,
                75.4,
                2.8,
                68.7,
                0.8,
                57.9,
                -2.3,
                52.4,
                11.4,
                46.8,
                25.1,
                46.5,
                55.6,
              ],
              orient: "fixed",
            },
          },
          9,
        )
        .to({_off: true}, 1)
        .wait(6),
    )

    // Calque_2
    this.instance_3 = new lib.goutte()
    this.instance_3.setTransform(88.15, 15.7, 0.5935, 1, 0, 0, 0, 4.2, 2.9)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to(
          {
            regX: 4,
            scaleX: 0.9781,
            scaleY: 0.629,
            skewX: -114.2992,
            skewY: -99.0353,
            guide: {
              path: [
                88.1,
                15.7,
                85.9,
                12.8,
                82.4,
                9.4,
                75.4,
                2.8,
                68.7,
                0.8,
                57.9,
                -2.3,
                52.4,
                11.4,
                46.8,
                25.1,
                46.5,
                55.6,
              ],
              orient: "fixed",
            },
          },
          9,
        )
        .to({_off: true}, 1)
        .wait(9),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(44.7, -0.9, 43.89999999999999, 61.1)
  ;(lib.homme = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_5
    this.instance = new lib.notes()
    this.instance.setTransform(83.45, 3, 1, 1, 0, 0, 0, 76.6, 58.6)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(67))

    // TETE
    this.instance_1 = new lib.tete()
    this.instance_1.setTransform(81.5, 49, 1, 1, 0, 0, 0, 10, 49)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({rotation: 14.9992, x: 81.45, y: 49.1}, 25)
        .to({rotation: 0, x: 81.5, y: 49}, 29)
        .wait(13),
    )

    // MANCHE
    this.instance_2 = new lib.Interpoler1("synched", 0)
    this.instance_2.setTransform(32.55, 90.2)

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67))

    // MAIN_DROITE
    this.instance_3 = new lib.maindroite()
    this.instance_3.setTransform(53.6, 144.35, 1, 1, 0, 0, 0, 3.2, 1.3)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({regY: 1.2, rotation: 59.9996, x: 64.5, y: 135.75}, 15)
        .to(
          {
            regX: 3.3,
            regY: 1.3,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -17.7277,
            x: 47.2,
            y: 144.75,
          },
          18,
        )
        .to({scaleX: 1, scaleY: 1, rotation: 44.9994, x: 53.65, y: 130.9}, 21)
        .to({regX: 3.2, rotation: 0, x: 53.6, y: 144.35}, 12)
        .wait(1),
    )

    // BRAS_DROIT
    this.instance_4 = new lib.Interpoler4("synched", 0)
    this.instance_4.setTransform(25, 104.25, 1, 1, 0, 0, 0, -4.8, -17.4)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({rotation: -14.9992}, 15)
        .to({rotation: 4.3898, x: 25.05, y: 104.2}, 18)
        .to({scaleY: 0.7885, rotation: 0, x: 25, y: 101.4}, 21)
        .to({scaleY: 1, y: 104.25}, 12)
        .wait(1),
    )

    // MAIN_GAUCHE
    this.instance_5 = new lib.main()
    this.instance_5.setTransform(153.8, 112.5, 1, 1, 0, 0, 0, 9.3, 17.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({x: 138.95, y: 121.65}, 12)
        .to({rotation: 44.9994, x: 151.75, y: 108}, 14)
        .to({rotation: 0, x: 153.8, y: 112.5}, 18)
        .to({rotation: 40.4508, x: 164.75, y: 104.8}, 10)
        .to({rotation: 0, x: 153.8, y: 112.5}, 12)
        .wait(1),
    )

    // GUITARE
    this.instance_6 = new lib.guitare()
    this.instance_6.setTransform(101.35, 136.1, 1, 1, 0, 0, 0, 101.7, 68.3)

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67))

    // CORPS
    this.instance_7 = new lib.Interpoler5("synched", 0)
    this.instance_7.setTransform(63.4, 185.45)

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67))

    // MAIN_DROITE
    this.instance_8 = new lib.Interpoler7("synched", 0)
    this.instance_8.setTransform(101.25, 136.05, 1, 1, 0, 0, 0, -21.7, 33.2)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .to({x: 88.6, y: 140.85}, 12)
        .to({rotation: -6.9887, x: 105.85, y: 135.05}, 14)
        .to({rotation: 0, x: 101.25, y: 136.05}, 18)
        .to({regX: -21.5, regY: 33.3, scaleX: 1.2913, rotation: -14.9992, x: 109.35, y: 141.75}, 10)
        .to({regX: -21.7, regY: 33.2, scaleX: 1, rotation: 0, x: 101.25, y: 136.05}, 12)
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.7, 0, 203.7, 337.5)
  ;(lib.arrosoir = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // ARROISOIR
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#CC524C")
      .s()
      .p(
        "ACLR0QgqhggHgTQgWhEg6ioQgziXgchdQizrBgvikQiKnhiclnQAWgLA6gmQAugeAigLQAtBaBdCwQBOCdAsB1QAFAFAKAPQAKAPAFAFQAIAXAbBFQAYA6ALAoIB3EOQB6FmB6EkQCMFTCcEiQhGAZiHBGQiHBGhGAZQgMgvgdhEg",
      )
    this.shape.setTransform(66.2172, 95.2016, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AqbR9QgghLgGg2QCDhSCOh2QBthbCUiLQBVhVA2hLQBChcAihiQAvitgvjbQgciDhbj2QgKgUgPgjQgPgjgKgUIhWijQgzhggrg9IFJiXQC4hWCShJQAAAFAFAPQAFAPAAAFQCjFOBQEtQBbFbgOE9QgJCFgVBVQgcBxg+BZQhCBfhNBQQhLBMhcBFQgFAFgKAAQgKAAgFAFQgKAFgKAPQgKAPgKAFQiZBki7BfQhtA3jwBuQg8APhGAjIg0h5g",
      )
    this.shape_1.setTransform(129.1027, 35.7172, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AizCjQgUgSgIgYQgWhfAzhNQAwhMBdgfIBMgRQAugJAlAGQAyAOAZAzQAXAvgIAwQgUBrh1A0QhZAoh7AAQgVAAgVgSg",
      )
    this.shape_2.setTransform(52.3717, 42.7101, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AizAsQgbhVAIhjQACgCAJgSQAHgOAMgGQCWglBjAlQAvAwAgA3QAiA8AHA4QAAATgXAUQgbAVgKAKQgFAFgKAAQgKAAgFAFQgjAjg1AUQgqARg7AIQhHg4gehjg",
      )
    this.shape_3.setTransform(107.254, 70.0473, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F15F46")
      .s()
      .p(
        "Ah5ErQAGgsAAgoQAPh4Ath3QAYhDAOhoQAMh3AJg8QAlA9AkBeIA5CbQAFAUgKAoQgKAnAFAUQiNCeh2CiQAKgyAEgag",
      )
    this.shape_4.setTransform(3.49, 90.4092, 0.2811, 0.2811)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F15F46")
      .s()
      .p(
        "AGAE1Qkui0kejVQgKgFgPgFQgPgFgKgFQiOhljfh4QlNi1gggSIgBg3QgCgcgHgbQJZDOH8D+QD6CCCXBDQDcBiC9A2QAHBlAVCBQAOBaAcCMQlBiZkiitg",
      )
    this.shape_5.setTransform(34.9546, 106.1532, 0.2811, 0.2811)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F15F46")
      .s()
      .p(
        "AoxCTQgQiaAah4QA0hgBahHQBWhEBrghQDohGDAB2QDrCCB9FTQggAAgmgGIhGgOQgphUg+hTQgzhEhMhUQgogegUgNQghgVgbgGQikgSiCAsQidA1gwCDQghBVAIBtQAFBBAeCCIAeBaQghAAgjAGQgWAEgoAKQgniygLhhg",
      )
    this.shape_6.setTransform(59.3251, 51.1353, 0.2811, 0.2811)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#F15F46")
      .s()
      .p(
        "AFMN5QgkgdgTgPQAzj6APi/QASjygijOQgjiugnh2QgziahLh8QhuikiLgaQhBgHg6AsQg2AogYA/QgkBbAJCNIALB2QAHBJAAAvQhohXgahnQgKiIAMhRQAQhyA+hZQArgzBCgfQA9geBGgIQCUgHB7B+QBeBfBKCmQBUC4AtDiQBjJNiKHWQgZgMgegYg",
      )
    this.shape_7.setTransform(95.0769, 73.8166, 0.2811, 0.2811)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#F15F46")
      .s()
      .p(
        "AoQTOQgxiMgZhBQhgjhhRkzIiFojQhXmQiFoSIAAg8QAAgKAPAAQAPAAAAgKQAMAFANgGQASgJAHAAQBGgjA8gPQAPgFBBggQAtgXAjAAQAUgFAjgUQAjgUAUgFQA8gQDehNQCtg7BzgSQARAhAoAvQAvA5APAXQAUAoA8BQQDFEYC7EzQCbD9C/FTIAeAeIBICBQAoBFAmA0IAAAUQAKAKAPAZQAPAZAKAKIAAAUQAiAtAKAUQATAngNAaQgGAaggAcIg+AuQgKAAgFACQgIACgHAGIgQAUQgMAOgMAGQhXAvgpAYQhGAog0AnQiiBijQBoIlxCyIi1BaQhpAvhUANQhMg5gyh2g",
      )
    this.shape_8.setTransform(77.3409, 92.096, 0.2811, 0.2811)

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
        .wait(7),
    )

    // BRAS
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#F2B186")
      .s()
      .p(
        "ABOB2QgWgNgjgdQgjgfgngsQgWgagsg3QAJghAfgSQANgHASAKIAeAUQASAMAKAKQAQARAaAVIAcAZIAoCeQgVgFgVgMg",
      )
    this.shape_9.setTransform(64.05, 52.7938)

    this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(7))

    // Calque_5
    this.instance = new lib.jet()
    this.instance.setTransform(-39.95, 105.05, 0.9464, 0.9464, -11.9384, 0, 0, 43.1, 19)
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(3)
        .to({_off: false}, 0)
        .wait(4),
    )

    // Calque_4
    this.instance_1 = new lib.jet()
    this.instance_1.setTransform(-40.4, 89.35, 1, 1, 0, 0, 0, 43.2, 19)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(6)
        .to({_off: false}, 0)
        .wait(1),
    )

    // GOUTTES
    this.instance_2 = new lib.jet()
    this.instance_2.setTransform(-40.25, 98.2, 1, 1, -6.2133, 0, 0, 43.1, 19)

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-1.7, 0, 150.7, 131.6)
  ;(lib.femme = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // ARROISOIR
    this.instance = new lib.arrosoir()
    this.instance.setTransform(142.6, 95.35, 1, 1, 0, 0, 0, 143, 1.6)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({regX: 143.1, rotation: 9.5422, x: 142.7, y: 95.4}, 18)
        .to({regX: 143, rotation: -2.2843, x: 142.65, y: 95.35}, 27)
        .to({rotation: 0, x: 142.6}, 15)
        .wait(25),
    )

    // Calque_4
    this.instance_1 = new lib.tetef()
    this.instance_1.setTransform(89.9, 59.1, 1, 1, 0, 0, 0, 45.8, 59.1)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({regX: 45.9, rotation: 9.8731, x: 92.05, y: 61}, 37)
        .to({regX: 45.8, rotation: 0, x: 89.9, y: 59.1}, 47)
        .wait(1),
    )

    // FEMME
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#51495B")
      .s()
      .p(
        "ABgMDQj9kjhIl7QhIl3CAliQAog8AWgcQAmgwAogiQgoDIgOBmQgXCoAHCMQAQDCAsCvQAAAFAKAKQAKAKAAAFQBEDsCNDqIAjAvQAXAeAMAXQg1ASgmAAQgxAAgUgcg",
      )
    this.shape.setTransform(81.3996, 103.2758, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#62B7B7")
      .s()
      .p("AhcAIQgfkOBjjjQAwCYAeC5QAYCRARDFQAJBZgGBBQgIBUgjA+Qh5j0gajug")
    this.shape_1.setTransform(79.1701, 100.4984, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#62B7B7")
      .s()
      .p(
        "AC0JTQgYgwhViYQhDh4ghhQQAGg+gThRQgMgvgZhZQhvl1jRmDQBSBmBbCHQBDBjBaCQQCfEYBQCVIBzC9QBCBrAxBKQgGBTgUB6IgiDNQhuiqgyhQg",
      )
    this.shape_2.setTransform(122.3484, 112.7328, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#51495B")
      .s()
      .p(
        "ABbNNQgJgLAAgEQgHgKgbgeQgUgXgGgRIgUgKQh/i8hMi+QhMjBgejQQgckEAdiwQAojyCViOICLAeQgGAMgJAHIgOALQjiF4CIHaQBpF3E6GKQguAAhFARQhXATgcAEQAFgGgGgJg",
      )
    this.shape_3.setTransform(110.4848, 92.6234, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#51495B")
      .s()
      .p(
        "AD1THIgOhHQgdiAhAhlQjXlYpCgiIg8loIgQhQQgLgwgNggQgNg1gQhjQgShrgKgtQgoiwhdhjQgFgFgKAAQgKAAgFgFIg8g8QhuhEg1gjQhdg8hAg5IAAgUQDWhUEbhXIH3iVQBQgeAogLQBDgTA1AAQBNA5BDBnQAoA8BLCCQAZAyAyBfQAyBfAZAyIAeBaQAAAFAKAFQAKAFAAAFQAcBGAPAjQAaA9AfAsQAUAaAlAPQARAHAuAMQCnAgCAgkQBRgXC/hPQAvCYAzCxQBnFhAYCUQjvAfj4DEQhKA6iLB/QiSCEhMA9QgFAFgKAAQgKAAgFAFQgvAvgYAWQgmAigpAbIgBAAQgEAAgEgWg",
      )
    this.shape_4.setTransform(122.5102, 149.0186, 0.2813, 0.2813)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#80CFD4")
      .s()
      .p(
        "AnRa9QgHgmgOiEQgMhsgRg+IAAg8QgojcgVhsQgmi+g9h6IAAgeQgPgmgSgaQgRgagegeQgGgNgPgGQgTgGgKgFQkzhahnjcQhEixggjeIgslxQgcjPgmiaQg7hbBChnQAYglAtguIBKhJQAmCXAMAfQAmBjBIAnQBkA1Byg+QBNgqBjhtIALgZQAGgNANgMQAHgHACgIIABgPIAOgKQAGgEAAgGQAbg9AOhLQAJgyAKheQAAg8gDgeQgEgygNgoIgDgYQAAgQANAAQE/gPEsBpQBrAtBBAiQBaAuBEA3QAUAUAtAjQAtAjAUAUQDNDMCfD2QCWDoB0EWQAFAKAFAZQAFAZAFAKQBECYAUEDQAKCNAHBHQAMB7AWBdQAZBJAYBmQAaBzAQA8QAQBSAnDPQAgCwAXBpQgbAOhqBIQg7AohYAYQmIBUmwAeQkIASlBAAQhvAAh3gCg",
      )
    this.shape_5.setTransform(116.8924, 116.3935, 0.2813, 0.2813)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFCAA6")
      .s()
      .p("AAAAxQizgLg8AEIBlg0QA9gfAwgGQA1gGBRACICHAEIAABZQg6ALhSAAQguAAg2gEg")
    this.shape_6.setTransform(138.0984, 313.3579, 0.2813, 0.2813)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFCAA6")
      .s()
      .p("AjqIIQgDiDALmFQAJlCgRjFIHVAAIgBA3QgCAcgHAbQgTBphTFrQhBEcgXCxg")
    this.shape_7.setTransform(143.5709, 297.3734, 0.2813, 0.2813)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#51495B")
      .s()
      .p(
        "AnyBfQgHgUAJgaQAKgXAAgCQAQggAiADQB/AID2gpQEfgyCMgFQAQgGAegUQAkgZASgJQAPAmAOBvQAOBvgIAlIhbADQidAGg7gLQhBgMgsAAQhdAAiDAMQiLAMggAAIgPAAQiYAAgTg7g",
      )
    this.shape_8.setTransform(131.5649, 316.0152, 0.2813, 0.2813)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#51495B")
      .s()
      .p(
        "AnyBfQgHgUAJgZQAKgXAAgDQAQgfAiACQB/AJD2gqQEfgyCMgFQAQgGAfgUQAjgZASgJQAQAmANBvQAOBwgIAkIhbAEQidAFg7gLQhBgMgsAAQhcABiEALQiKAMghAAIgRAAQiWAAgTg7g",
      )
    this.shape_9.setTransform(103.6657, 316.3393, 0.2813, 0.2813)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFCAA6")
      .s()
      .p("AiVgDQBWg6AogRQA+AMBXAAQAyAABkgCIAABZQjdAnlKATQAXgNBnhFg")
    this.shape_10.setTransform(108.9539, 313.9461, 0.2813, 0.2813)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFCAA6")
      .s()
      .p("AjqIIQgDiEALmEQAJlCgRjFIHVAAQAABugUB4QgPBagjCMQgfB1gaCsIgrEig")
    this.shape_11.setTransform(114.6022, 297.3734, 0.2813, 0.2813)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#51495B")
      .s()
      .p(
        "EgDvAnOQiRtRguuZQgLjkgHlbIgMo+IgepOQgonMgZjlQgtl9g7ksQDGgWEFgsQFQg4B7gSQB4C0AzBfQBWCeAhCTQAAAFAKAKQAKAKAAAFQAxC+AWCWQAaCzgHChQgnIvhIHbQhPIIiCH5IgSBaQgMA2AAAkQgMBFAABaQAAAzACBkQAeE7ABFFQgHBigVB6QgJA3giClQgEAPgOAgQgMAdABAYg",
      )
    this.shape_12.setTransform(143.7376, 212.1547, 0.2813, 0.2813)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#62B7B7")
      .s()
      .p(
        "AhgKEQhBgKiCgeQgLgFgCgPQgDgQgEgEQgQjUAFiyQAGjNAji4QAkkaCQieQAAAFAFAKQAFAKAAAFQAiAoAdA5QARAhAdBGQAUAeAUA8QA6BtA2CZIBYELQAAAOAHAVQAFATAIAQQAAAdAIAaQAGAYAQAfQAFAKAAAZQAAAZAFAKQARBDgbA1QghAvg8AVQglAMhQAKQgYACgbAAQhBAAhOgMg",
      )
    this.shape_13.setTransform(79.3728, 104.0399, 0.2813, 0.2813)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#443D4F")
      .s()
      .p(
        "EgIYAnGQiassgQu0QgGnUAgqBQAsrkAUlyQAJj3ASi2QAVjjAqjCQAUhCBNgcQAqgPBlgLQEjhDFmARQAKAAAKAeQBSB2A4B2QA2ByAmCCQB1GRgbFTQgHBogVB+IgqDmQg3D9hVEcQhADWhqE0IhYD6QgyCOggBsIghCCQgVBNgGA1QgZCqAFFPQAFFPgZCqQgrDkhMDog",
      )
    this.shape_14.setTransform(123.1077, 212.3898, 0.2813, 0.2813)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AgdKzQh4gQhEhjQhpilAPjDIAhguQARgcAAgaQgGg+glhQQgWgvgthaQCZkfBrjzQBhBbCICXIDiD4QAdELgZCqQgkD0iUCUQhDBEhgAAQgSAAgUgDg",
      )
    this.shape_15.setTransform(88.814, 74.4516, 0.2813, 0.2813)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFCAA6")
      .s()
      .p(
        "AgIDCQghgEgTgcQgegvAEg2IAKgNQAEgIAAgIQgBgRgLgWIgTgmQArhRAfhEQAbAZAlArIBABFQAIBLgHAvQgKBFgqAqQgTATgbAAIgKgBg",
      )
    this.shape_16.setTransform(88.8081, 74.4618)

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
              {t: this.shape_16},
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
          60,
        )
        .wait(25),
    )

    // BICEPS
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#F2B186")
      .s()
      .p(
        "AhsAnIARAIQANAFAEgNQAPhigKhpIgCgSIBZAKQA2AHAkAAIAAABIABA/QAAAogBAZQgCARgGAaIgJArQgNAxgTAeQgZAngmAMQgMADgMAAg",
      )
    this.shape_17.setTransform(79.2188, 135.1125)

    this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(85))

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-15.2, -2.6, 177.5, 323.3)

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

    // Calque_4
    this.instance = new lib.femme()
    this.instance.setTransform(537.95, 260.2, 1, 1, 0, 0, 0, 81, 160.3)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // Calque_3
    this.instance_1 = new lib.homme()
    this.instance_1.setTransform(233.6, 248.25, 1, 1, 0, 0, 0, 101.7, 168.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1))

    // Ñëîé_4
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#5A6A82")
      .s()
      .p(
        "Ai4L3QobgQlVARQAAg8ANhEQAHgqAUhQICDoPQBMktA/jdIAdh4QAOhDAHg1QCpAALLAWQIfAPFWgRQgQBHgYB9QgbCPgNA9QAAAFgKAPQgKAPAAAFQgKAjgKBBQgKBBgKAjQgjBug3DbQg3DcgjBuQgoCggKBQQiqAArFgVg",
      )
    this.shape.setTransform(342.6078, 238.6359, 0.2813, 0.2813)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#5A6A82")
      .s()
      .p(
        "AC0MKQgqg9gdhfQgdhtgUg3QgniIhem1QhNllhPjRQgFgPAAgjQAAgjgFgPQBfDPBOEzQAtCwBRFnQAAAFAKAPQAKAPAAAFQA8EABkDWIgmAEIgJAAQgNAAAAgEg",
      )
    this.shape_1.setTransform(331.7797, 391.1367, 0.2813, 0.2813)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#5A6A82")
      .s()
      .p(
        "AhPBKQktgVjCAMQiCgChBABQhxAChSATIAAipQBPAABggGICvgOQCdAADuALIGKATQDkASCngBQDYAACzgbIAACpQhaAAi5AKQi5AKhaAAQhCgCmsgdg",
      )
    this.shape_2.setTransform(320.6703, 413.1516, 0.2813, 0.2813)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#5A6A82")
      .s()
      .p(
        "EgHGArNQBCwECGteQA3lKBLloQCwrhBorlQBlrKAmr1QAZAKA3AAQA3AAAZAKQgbL8iNORQhZI4jeRkQhoH7g+I3QgyHGgiJkg",
      )
    this.shape_3.setTransform(328.5453, 337.7766, 0.2813, 0.2813)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#F1F1F9")
      .s()
      .p(
        "AhjAjQgjgFhBAAQhBAAgjgFQh9gGivAIQjIANhkAFIAAhZQA8gFBzgFQBzgFA8gFQCYgDDSAKQB4AGDyAQQHCAZETgiIAABZQjtAVjkAAQkTAAkDgfg",
      )
    this.shape_4.setTransform(499.4047, 374.0694, 0.2813, 0.2813)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#F1F1F9")
      .s()
      .p("AAAAuQi7gJhIAFIAAhZQAsAEB5gDQBngCA9ALQAeAABBACQA5AAAmgMIAABZQg5AGhUAAQg2AAhBgCg")
    this.shape_5.setTransform(435.2797, 374.1523, 0.2813, 0.2813)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#F1F1F9")
      .s()
      .p("AAAAuQi1gIhJAEIAAhZQBAgDC+ALQCgAJBfgRIAABZQg5AHhSAAQg1AAg/gDg")
    this.shape_6.setTransform(420.7953, 374.1405, 0.2813, 0.2813)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#D4E3FB")
      .s()
      .p("AheFNQj9gJidALIAAqdQC/gRE5AKQF5ALCAgEQgZCRg7DCQgiBxhIDjQhCAAlXgMg")
    this.shape_7.setTransform(513.6078, 365.8888, 0.2813, 0.2813)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#D4E3FB")
      .s()
      .p("ABaFYQkSgPiMgFQgeheg4jrQgzjSgrh4QC/gRE5AKQF5ALCAgEIAAKdQh4ANiWAAQhFAAhMgDg")
    this.shape_8.setTransform(485.4828, 365.9265, 0.2813, 0.2813)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#D4E3FB")
      .s()
      .p(
        "AiKFvIgFiAQgDhLACg1IAMi5QAGhtgFhMIAAg2QgBgggGgVIEcAAQgCAagHAqIgLBGQgCADgBAFIgDAJQgCAQgFAWIgJAmIgCAMIgBANQgtCUgjCHIAAAOQgNAygGAoQgGAuAAAsg",
      )
    this.shape_9.setTransform(440.21, 338.6)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#D4E3FB")
      .s()
      .p(
        "AAGUZQgSh2gzkCQgxj4gViIQgFgKgFgZQgFgZgFgKIg4nuQghkdgfjSQhImFhsmRINvAAQAnF2gPHwQgCA6gqMrQgGC2AJD9QAFCRAMEig",
      )
    this.shape_10.setTransform(415.9855, 338.6203, 0.2813, 0.2813)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#D4E3FB")
      .s()
      .p("AhjJxQgMivAJkYQANl8AAhKQARi+gbiWIDHAAQALCvgJEYQgMF9AABJQgSC+AcCWg")
    this.shape_11.setTransform(400.4047, 399.3703, 0.2813, 0.2813)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#D4E3FB")
      .s()
      .p("AhlJxQgQjIARlzQASmMgJi2QAAgPgFgjQgFgjAAgPIDHAAQAAAyABAZQACApAHAiQAICYgYGNQgWFaAcDMg")
    this.shape_12.setTransform(542.2221, 399.3703, 0.2813, 0.2813)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#D4E3FB")
      .s()
      .p(
        "ANcClQnigLmhgwIhaAAQgZgFgygFQgygFgZgFQiFgMjAgHQjXgGhugFQnLgImCAMQnCANmLArIAAjlIFegeQDBgODsgEQCNgCEYAAQLugRJYBDIBjAAQTABwVehwIAADlIhkAAQiuAajRAJQh/AFj6AAQlZALkkAAQiJAAh+gCg",
      )
    this.shape_13.setTransform(471.2797, 378.5336, 0.2813, 0.2813)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#49BC31")
      .s()
      .p(
        "Ah9ZmQkqgLhmADQAAgTgRgTIghggIAAgUQkcmRjjmpQjVmPi6nQQhDisgchaQgvidAMh5QAIgPAOgGQAOgGAOAHQCVBhB9CsQAtA9A8BgIBlCkQDAFLCqHOQBNDSB/F+IgEgQQgPg3gHgtQAAgFgKgKQgKgKAAgFIhYlGQgxi5ghiVQgFgogPhLQgPhLgFgoQhGkng1k9QgukOgplRQgIhTADhDQAEhQAVhGQAKgeAIgMQAMgVAUgHQBBgNAqBBQAIAMAtBqQB5ElBRFmQBAEWA2GFQAgDgA4HCQA2GLA6EQIgQiMQgLhRgNg7QgKhJgKiRQgKiNgKhHQgGhkgCh4QgChIAAiUQAAiNgHlAQgHkoACijQAEoUBYmNQALgzAQgaQAXgnAoAGQBhCuAaEJQAJBeADCKQADCaACBLQANEqgTGNQgFBdgnJZQgEBEADC9QACCjgLBkQgFA5AHBdQAHBcABAoQgEoiBiq5QAmkEBAlxIBxp/QAKg8AHgcQAKgwANgiQAEgDADgRQACgOALgGIAAgeQAKgUAKgjQAKgjAKgUQAPgUAigzQAhgmAmATQA0AaANBRQAFAeAABxQATG6h4JRQggChhSFeQhOFSglC5QAAAPgFAjQgFAjAAAPQgFAKgFAPQgFAPgFAKIgwEJQgeCfgMBqQBVnwC5oMIDyrCQCPmTCHkiQATgPATgdIAfgzQAng7A0gGQAjAcAIAtQAGAigJA1Qg3FMh9FmQhiEaisF5IAAAeQhnDjhtEOQg4CIhECwQBzjyBgi5QCIkGCLjmIAPgjIAPgjQAegtAyhQQAyhQAegtQAKgKAUgYQAUgZAKgKQB2irAqg2QBbhzBjhQQAygeAbgKQArgQAoAGQAeAIAWAVQAVAVAHAeQANBVgfBiQgNAmg7CBQhgDHiNDUQhsChivDjQgeAjgyBGQgyBGgeAjQgGAAgHAFIgHAFIgZAoIgZAoIj6E1QiMCshuCBQhhALiJAAQhMAAhZgDgAm9XSQAAgXgLggQgRgugCgJQgFgFgFgKIgDgGIArCDgADrV+QAKgWAJgOIAAgOIgTAyg",
      )
    this.shape_14.setTransform(429.2496, 255.7919, 0.2813, 0.2813)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#49BC31")
      .s()
      .p(
        "ADqNgIszgeQiOiOhnh7Qh8iUhbiTQg5hpgahEQglhkAAhWQAAgeAegeQALgGAOAHQARAJAIAAQAmATApAmQAXAXAwAyQAoA2BSBqQBHBfAlBKIAUAKQAeA4BUB8QBJBtAhBHQhejrg+jbQhEjtgkjuQgbh9gGhLQgIhoAVhgQAUgyAOgXQAWglAigUQA/gaA5BMQAvA9AhBRQAWA4AcBmQA+DTAqElQAXCnArFSQgHjcATjxQARjSApkCQAFgKAFgUQAFgUAFgKIAAgyQAKgjAPhBQAPhBAKgjQAUgUAAgKQAAgeAWgoQAig9AEgJQAWgfAcgNQAdgOAeAIQAoAAAfAQQAjASAOAkQAvB6AACVQAABpgbCuQgnDQhGD4QgVBKhtFxQDUpTFln4QAjgUA+g6QA5gnA4AlQAKAAgKAUQATAlgJA1QgFAegPA8QhSDwisErQjOFUhkCqQBQhkBrhsQA/g+CMiCIA2goQAbgVATgTQAFgFAPgFQAPgFAFgFQAAgGAFgIIAFgGQBuhPBugpQAegPAjAAQAjAAAeAPQAVAAAVAYQATAVAJAZQANBbg+BYQgYAihrBrQiBBriRBdQiABRioBZQgmAZg0AAQg8gFgeAAg",
      )
    this.shape_15.setTransform(501.2647, 332.4663, 0.2813, 0.2813)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFE882")
      .s()
      .p(
        "EA5WALFIp2gLQl6gHj8gMIq8geQnpgcqsgyIyOhWQ2NhnuXgXUgvKgBAgpmAD+QCph3DkiiIGTkgQAKgFAPgFQAPgFAKgFQAygoBfhBQBfhBAygoQAPgKAegPQAegPAPgKIDSiWICdhkQBVg3A6gtQauhLauAPQM1AQKsAhQMWAlLLBAUAgkACzAduAAjUAgDAAkAeCgCCQDDCgGCFBQFWEbD3C5QgwAMhNAHIh9ALIhkAAQgZAFgyAFQgyAFgZAFImQAeQ6vB96dAAQlSAAlSgFg",
      )
    this.shape_16.setTransform(371.1161, 436.0497, 0.2812, 0.2812)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFA63B")
      .s()
      .p(
        "ASDNeQhagKi1gKQi5gKhdgKQgagFgxgFQgzgFgZgFIhkAAQgZgFgxgFQgzgFgZgFIhkAAQgZgFgxgFQgygFgYgFIhkAAQgZgFgzgFQgxgFgZgFIgzABIgxgBQwchCyiAMQrCAG1pAzQ76BB++BNI4dA8QD8i0IdmVQJbnBDOiWQAJgFAPgFQAQgFAJgFQCwiAE5jYQFPjnCShpIK8geQEngMG4gHILfgLQKtgHMbASQJ1AONTAjQNBAfYaB4QZgB9L6AiQHuATEUAKQGsAOFWAHQRSAJLfgJQPpgMNGgwQDbCWEwC9IIZFKII0FOQFHDBDmCFQAdAPA4AeQA2AeAeAPUgiHADHgjTAARQjUACjVAAUge6AAAggHgCKg",
      )
    this.shape_17.setTransform(373.4919, 435.961, 0.2812, 0.2812)

    this.instance_2 = new lib.Group_1()
    this.instance_2.setTransform(379.45, 131.1, 0.2813, 0.2813, 0, 0, 0, 69.7, 74.5)
    this.instance_2.alpha = 0.4805

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#F4D678")
      .s()
      .p(
        "AAOLiQkZgLmOgjQgSjwgFltIgHpSIAAjSQD+geGCAFQI3AGBIgBQA7DLAVEMQAIBqAMF0QAAA4AJDMQAGCigFBiQi3AMjOAAQiMAAiXgGg",
      )
    this.shape_18.setTransform(307.7683, 119.3379, 0.2813, 0.2813)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p("AgKAGQgKgGAHgHQAHgHALAFQALAEAAAHIgKAKQgIAAgIgGg")
    this.shape_19.setTransform(304.5717, 132.6047, 0.2811, 0.2811)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAAQgFgEAAgFIATAAQAHAHgFAGQgEAGgHAAQAAgFgFgFg")
    this.shape_20.setTransform(312.1229, 109.6134, 0.2811, 0.2811)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAOAqQgEgHgKgKIgJgKQAAgKABgEQACgFAGAAQgGgOgOgKQgJgGgUgKIAKgUQAVAGAXAeQAaAiATAJQAEAEgNAHQgMAIALALIgUAUQAAgOgGgJg",
      )
    this.shape_21.setTransform(304.2054, 109.7539, 0.2811, 0.2811)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p("AgTAPQAFgFAKgOQAJgPAFgFIAKAKQgFAFgKAOQgJAPgFAFg")
    this.shape_22.setTransform(306.1596, 111.7217, 0.2811, 0.2811)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHgOQAMgIAjgMQgFAFgFAKQgFAKgFAFQgYAHgNAIQgPAKgHAOQAGghAagQg")
    this.shape_23.setTransform(310.0952, 110.5973, 0.2811, 0.2811)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAeQAFgKAKgPQAJgOAFgKIAUgUQgFAPgPAYQgOAZgFAPg")
    this.shape_24.setTransform(307.4246, 112.4245, 0.2811, 0.2811)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p("AgHgDQAFgGAMAAIgTATQAAgKACgDg")
    this.shape_25.setTransform(291.2606, 105.9589, 0.2811, 0.2811)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p("AgiBBQAFgPAAgKQAHgHAHgNQAGgNAAgHIALgsQAGgbAMgSQAUAUAAAKQgaBAgGAOQgVAtgaAaQAAgKAFgPg")
    this.shape_26.setTransform(301.0996, 118.8901, 0.2811, 0.2811)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEgDQABgLAJgUIAABFQgNgUADgSg")
    this.shape_27.setTransform(290.2572, 108.6295, 0.2811, 0.2811)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAAQAEgJAFgFQAGAAADAHIABAMQgFAAgKAFQgJAFgFAAQAFgFAFgKg")
    this.shape_28.setTransform(307.4246, 122.9662, 0.2811, 0.2811)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p("AgIAAQgGgMAHgHQAJAKAEAGQAGAKAAANQgOgIgGgMg")
    this.shape_29.setTransform(304.4165, 111.0189, 0.2811, 0.2811)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p("AgUAeQAAgOAHgUQAFgSAIgRQAXAQgCAbQgDAdgcAHg")
    this.shape_30.setTransform(299.9984, 114.3923, 0.2811, 0.2811)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p("AgDAAQAEgOAAgFQAMAYgGAHQgKADgFAFQAAgFAFgPg")
    this.shape_31.setTransform(299.3911, 115.7978, 0.2811, 0.2811)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#FFFFFF")
      .s()
      .p("AgIACQAIgNAUgcQAAgIABAAQABgCAIAAQgKAPgUAiQgTAjgKAPQAGgZAPgXg")
    this.shape_32.setTransform(310.0952, 123.3879, 0.2811, 0.2811)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEgJIAJAJIgJAKg")
    this.shape_33.setTransform(300.959, 115.5167, 0.2811, 0.2811)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#FFFFFF")
      .s()
      .p("AgMAAQAAgGAFgNQABAOAGAJQACAGAKAKQgXgGgBgOg")
    this.shape_34.setTransform(289.7848, 109.6134, 0.2811, 0.2811)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#FFFFFF")
      .s()
      .p("AgSAjIALgjIATgiIAUgjQAOAsgTAkQgTAkgtAXQAMgMAHgXg")
    this.shape_35.setTransform(298.5159, 112.4245, 0.2811, 0.2811)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAAQAEgOAFgKIAKAKQgFAFgKAOQgJAPgFAFQAFgKAFgPg")
    this.shape_36.setTransform(303.489, 119.5929, 0.2811, 0.2811)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#F8C2A4")
      .s()
      .p("AgOAUQAFgKAJgOIAPgZQgFAKgFATQgFAUgEAKg")
    this.shape_37.setTransform(307.9833, 121.9929, 0.2811, 0.2811)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAAOQgVAAgJgHQgJgHAAgPQAhAhAugXQAAASgQADIgYgCg")
    this.shape_38.setTransform(301.6618, 135.0751, 0.2811, 0.2811)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAAAQgFgEAAgFQALAAAAAHQgCAHAAAFQAAgFgEgFg")
    this.shape_39.setTransform(295.0908, 112.7021, 0.2811, 0.2811)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAAFQgEgFgFAAIAJgJQAAAFAFAEQAFAFAAAFQgFAAgFgFg")
    this.shape_40.setTransform(300.5374, 122.2634, 0.2811, 0.2811)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#F8C2A4")
      .s()
      .p("AgTAUQAFgKAOgTQAPgUAFgKQgFAPgFAYQgFAZgFAPg")
    this.shape_41.setTransform(305.8785, 120.0145, 0.2811, 0.2811)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#F8C2A4")
      .s()
      .p("AgEAAIAJgJIAAATg")
    this.shape_42.setTransform(298.7101, 114.3923, 0.2811, 0.2811)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#F8C2A4")
      .s()
      .p("ABzANQgmgYgRgEQgegFg2AKQg3AKgegFQgKAAgUAFQgUAEgKAAQBTgsBaAIQBbAIBLA6QgWAAghgVg")
    this.shape_43.setTransform(315.9985, 106.9629, 0.2811, 0.2811)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#F8C2A4")
      .s()
      .p("AANAiIgMgdQgCgDgZAAQgSAAAGgQQAGgOAPgKQAJgGATgKQgGAYANAeQAVAxACAGQgTgGgJgPg")
    this.shape_44.setTransform(293.77, 110.5973, 0.2811, 0.2811)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#F8C2A4")
      .s()
      .p("AgsAPQAagHAWgNIApgdQgMAJgKAUIgPAdQgHALgKAAQgOAAgVgUg")
    this.shape_45.setTransform(310.5098, 126.6322, 0.2811, 0.2811)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#F8C2A4")
      .s()
      .p("AgRgKQARgiAfgPQgUAogKAdQgEAKgKAPQgKAPgFAKQgHglASghg")
    this.shape_46.setTransform(288.7036, 108.2078, 0.2811, 0.2811)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#F8C2A4")
      .s()
      .p("AgdgTQAGgNAUgEQAKgDAXAAQgRAygqAdg")
    this.shape_47.setTransform(295.4773, 127.8857, 0.2811, 0.2811)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAApQgKgCgUgKQAAgFgFgFQgFgFAAgFQAAgWAHgNQAIgOAPAAQAeAAAPAYQAQAXgWAWQgMAMgOAAIgDAAg")
    this.shape_48.setTransform(301.7027, 133.2515, 0.2811, 0.2811)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#F8C2A4")
      .s()
      .p("AgnAaQgHAAgCgGQgBgEAAgKQAIgPASgKQAUgLANAHQAFAAAPgFQAPgFAFAAQgUAlgOAPQgOAPgQAAQgMAAgNgIg")
    this.shape_49.setTransform(292.6662, 135.8684, 0.2811, 0.2811)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#F8C2A4")
      .s()
      .p("AgnAHQAPgVAVgIQAUgIAXAIQgKAKgUAOQgTAPgKAKg")
    this.shape_50.setTransform(292.3851, 107.1712, 0.2811, 0.2811)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#F8C2A4")
      .s()
      .p("AAtgsQgSAYgbAYIgsApQAPhKBKgPg")
    this.shape_51.setTransform(293.9312, 108.3484, 0.2811, 0.2811)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#F8C2A4")
      .s()
      .p("AgmAPQgQgEgegKQAggSAxgCQAcgCA8ADQgFATgeAAQgeAAgFAUQgaAAgbgGg")
    this.shape_52.setTransform(295.6179, 105.3747, 0.2811, 0.2811)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#F8C2A4")
      .s()
      .p("AgwBHQAbgwAaggQgOAYgZA3QgZA3gPAZQgKAKgKAAQAeg8AQgdgAAuhUIAxhLIgpBPQgZAvgYAYQAMgeAdgtg")
    this.shape_53.setTransform(311.6413, 118.609, 0.2811, 0.2811)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAAPQgQgGgDAGQAAgFAFgFQAFgFAAgEQAFAAAJgFQAKgFAFAAQgFAdgMAAIgDAAg")
    this.shape_54.setTransform(307.2841, 123.5372, 0.2811, 0.2811)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#F8C2A4")
      .s()
      .p("AgHgCQAlhBAogvQgoBQgWAmQglBBgoAuQAohQAWglg")
    this.shape_55.setTransform(314.3119, 117.6251, 0.2811, 0.2811)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#F8C2A4")
      .s()
      .p("AgiAUQgFAAgFAFQgFAFgFAAQATgyAggJIA6AAQgeAUgFAFQgLALAGANQgFAAgOAFQgPAFgFAAg")
    this.shape_56.setTransform(293.369, 104.2722, 0.2811, 0.2811)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#F8C2A4")
      .s()
      .p("AAjg/QgGAbgZAlQgdArgJAUQAghMAlgzg")
    this.shape_57.setTransform(316.1461, 116.2019, 0.2811, 0.2811)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#F8C2A4")
      .s()
      .p("AgnAMQAfg1A/hdQAGgOAPgJQAJgHAUgKQgcBIhJBqQhUB6gYAxQAVhRAshSg")
    this.shape_58.setTransform(307.7057, 115.3762, 0.2811, 0.2811)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#F8C2A4")
      .s()
      .p("AgHgBQgHgMAOAAIAKAKQAAAFgGAEIgJAIQAEgGgGgJg")
    this.shape_59.setTransform(299.4034, 108.5908, 0.2811, 0.2811)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#F8C2A4")
      .s()
      .p("AgCgDQAhgYAJgMIgaAlQgPAWgSAAIgUAUQAGgXAfgUg")
    this.shape_60.setTransform(316.8349, 119.4628, 0.2811, 0.2811)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#F8C2A4")
      .s()
      .p("AhiB0QAKgaAegyQAohPAVgnQAmhAAogvQAKgKAUAAQgaA9hXCHQhPB6gbBRQgHgoARgsg")
    this.shape_61.setTransform(309.7882, 115.2356, 0.2811, 0.2811)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AhLAZQAfg1BciGQAFgKAMgPQAJgNgGgMIgUAAQg7BQhkCfQgFAKgKAPIgOAXQAxhiAbgxQAuhTAuhDQAAgGAYADIAuADQAQgFAOARQAQASAOAAIAEAjQACAXgGAMQhhBqgqA4QhDBaghBXQgNAAgFAEQAkhLBEhoQBxinAKgRQAAgJgGgIQgHgKgHAHQhdBPhDBkQg9BbgwB3QAahjA8hng",
      )
    this.shape_62.setTransform(313.2507, 115.8789, 0.2811, 0.2811)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#F8C2A4")
      .s()
      .p("AgTAPIATgPQAKgMAAgMIAKAAQgFAKgKAOQgJAPgFAKg")
    this.shape_63.setTransform(314.3119, 121.2795, 0.2811, 0.2811)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AAGAKIgHgOIALAGQATALgLAFQAAABgBABQAAAAgBABQAAAAgBAAQAAABAAAAQgEAAgFgMgAgVgVQALAEAJANQgRgKgDgHg",
      )
    this.shape_64.setTransform(305.372, 122.5875, 0.2811, 0.2811)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#F8C2A4")
      .s()
      .p("AgvATQgCgPAGgFQAPgKAagZQAXgSAZANQAGAGgHAOQgJARAAADQgKAOgdAKQgeAKgKAPIgEgdg")
    this.shape_65.setTransform(316.6807, 129.0775, 0.2811, 0.2811)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#F8C2A4")
      .s()
      .p("AhehZIAAg8QASBKA+BSQAiAwBLBfQhghJhdimg")
    this.shape_66.setTransform(293.6501, 114.9545, 0.2811, 0.2811)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#F8C2A4")
      .s()
      .p("AAAAAQgOgTgFgKIAdAdQAGAGADAJIABAPQgFgKgPgUg")
    this.shape_67.setTransform(298.8507, 120.2956, 0.2811, 0.2811)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#F8C2A4")
      .s()
      .p("AgEgJIAJAJIgJAKg")
    this.shape_68.setTransform(297.3046, 110.4567, 0.2811, 0.2811)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#F8C2A4")
      .s()
      .p("AgYgYQAFgFAFgKQAFgKAFgFQACAIAQAuQALAgAAAXQgigjgPgsg")
    this.shape_69.setTransform(288.8712, 111.4406, 0.2811, 0.2811)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#F8C2A4")
      .s()
      .p("AgjgDQAKgdAagbQAFAAAPAFQAPAFAFAAQgKAUgZAiQgYAjgKAUQgUgbANgkg")
    this.shape_70.setTransform(300.5016, 110.4567, 0.2811, 0.2811)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#F8C2A4")
      .s()
      .p("AgjBGQgGgMgIgIQAHgTAlguQAdgpAGghIAOAKQAGAEAAAGQgFAegjAxQgiAygFAeQAAgHgGgNg")
    this.shape_71.setTransform(301.3807, 111.8623, 0.2811, 0.2811)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#F8C2A4")
      .s()
      .p("AAFAUQgNgpgugbQgngXgzgIQAzAHA5AgIBbA8QAeAUA8AUQgUAUgKAAQgrgrhDgRg")
    this.shape_72.setTransform(303.2079, 106.8022, 0.2811, 0.2811)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#F8C2A4")
      .s()
      .p("AgfgVQAhghBFgeQgFAKgPAUQgPAUgFAKQgqAJgdAaQgjAgAHAqQgNg8Aygug")
    this.shape_73.setTransform(289.2525, 106.3806, 0.2811, 0.2811)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#F8C2A4")
      .s()
      .p("AgxAAQAFAAAKgEQAKgFAFAAQAJAJAZgDQAYgCALAPQgegKhFAAg")
    this.shape_74.setTransform(297.1675, 104.2722, 0.2811, 0.2811)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#F8C2A4")
      .s()
      .p("Ag5A/QADgNAPgUQAPgZAggsQAagnAGgfIAUAUQgPAjgjBAQgiBBgPAjQgagZAIgWg")
    this.shape_75.setTransform(303.0673, 114.1112, 0.2811, 0.2811)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#F8C2A4")
      .s()
      .p("AgIgDQAshCAJgeIAKAAIg6BjQghA5gSArQAFgsApg7g")
    this.shape_76.setTransform(304.3324, 115.2356, 0.2811, 0.2811)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#F8C2A4")
      .s()
      .p("AgUgDIAngyQAWgdAGgWIAKAKQgPAjgoBAQgnBBgPAjQgRguAxg+g")
    this.shape_77.setTransform(305.3921, 116.2195, 0.2811, 0.2811)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#F8C2A4")
      .s()
      .p("AgxBVIAeg8QANgKAKgMIABgCQARgaALgVQgJAcgUAVQghA3gKAlgAAoheIAKAKQgFAPgMAXQAHgWAAgag")
    this.shape_78.setTransform(302.224, 112.8462, 0.2811, 0.2811)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#3F3B37")
      .s()
      .p(
        "AF9TlQgPgFgKAAQqMgNsxhDQgSg+gJhdQgFg0gIhnQgKjcgFm9QgFm8gKjcQgGiVAJjOQAFh1AMjuIgCgPQAAgPAMAAQB4gUBGAAQDZgVDygEQDJgDD6AIQC3ALE3gCQFrgDCEAEQAPAFAZAFQAZAFAPAFQB1IHAgK7QAMD9AEFqIAFJoQmGAemGAAQgKAAgPgFgAxFyTQgGBCADBeIADCgQgNFpAIHGQAFEVAUIZQAABxADA5QAEBhANBJQOeBBCZAHQJlAbHTgnQgCjFgDmLQgDldgKjxQgcqghon5QipADtXgNQiVgCiIAAQm1AAkvAWg",
      )
    this.shape_79.setTransform(305.9842, 120.6327, 0.2811, 0.2811)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAcTAQjQgKldgWQmigbiLgIIgNiCQgHhHAAg7IgetmQgNnwANl1IgDilQgDhjAGhCQGrg3JvAMQBrABGhANQFEAJDJAAQAUgGAHAVQADANAAAgQAqDaAZChQAdDEAOCvQAbFiAIG4QAFEJAAISQkgAbliAAQjfAAj6gKg",
      )
    this.shape_80.setTransform(306.0682, 120.6024, 0.2811, 0.2811)

    this.instance_3 = new lib.Group_3()
    this.instance_3.setTransform(371.25, 123.1, 0.2813, 0.2813, 0, 0, 0, 12.6, 6.4)
    this.instance_3.alpha = 0.7383

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#3F3B37")
      .s()
      .p(
        "AktPNQlVgSj0gZQgIgHgGgNQgGgMAAgIQgcmmgGnxQgFmNAJoLQBEgoB7AAIBkAAQA5AAAqgKIKnAEQGaACEOAYQBcGmAZIlQANEPAALDIlKAOQi4AGiSAAQmFgRjDgKgAtYuXQgGA8ACBaIAECWQgJGsAFFBQAGGUAcFaINMAwQHoAVFlgTIgFnSQgDkZgHi5QgWoXhTmIQjMAIpTgOQiXgEiEAAQk1AAjQAUg",
      )
    this.shape_81.setTransform(379.1944, 129.833, 0.2812, 0.2812)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAYPBQpIgjkngPQgNg7gEhRQgDgvAAhdQgUnEgFjZQgIlyANksIAAjmQBAgTBWgCQAygBBkACQFCgOFvAEQEzAEF/AQQBQGlAZIOQAPE7AAJ9QjeATkNAAQi3AAjOgJg",
      )
    this.shape_82.setTransform(379.1532, 129.8026, 0.2812, 0.2812)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#3F3B37")
      .s()
      .p(
        "AEdMGQicgMmsgTQlxgRjYgWQgMAAgCgXQgDgmgDgJQgenCgIjhQgMl5AUkzQAAgHAGgGQAGgHAIAAQFPgpIDAOIGnANQD5AHCxgDQAJAAALAIQANAJAHANQBSFYAbGLQAUEugJG2QjcANhuAFQhwAFhdAAQhEAAg5gDgAtWq3IAACgQgPJQAtJVQEYAPI0AlQHsAXFhgZQAAh4ACjrQAAjNgMiVQgil/hCkzQiqADjqgHQkLgKiFgEQiegGiLAAQknAAjVAYg",
      )
    this.shape_83.setTransform(361.7041, 185.6694, 0.2812, 0.2812)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AAPBBQgwgYgOgJQgigYgNggQAAgKABgFQACgIAHgHQAtgdAsAdQAUAUALAJQATAPAUAGIATASQAGAQgZAZQgUAKgKADIgMACQgKAAgIgFg",
      )
    this.shape_84.setTransform(339.476, 190.1384, 0.2811, 0.2811)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#F8C2A4")
      .s()
      .p("AABBEQgjgNgPgtIgUAAIgBg5QAGgcAtAGQAxAUAYAZQAgAigaAoQgQAVgXAAQgJAAgLgDg")
    this.shape_85.setTransform(338.5002, 179.3286, 0.2811, 0.2811)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#F8C2A4")
      .s()
      .p("AgNA/QgjgHAAgdQgPgsAAgPQAAglAtAHIAKAKQAoAUATAWQAaAegaAbQgYARgaAAIgOgBg")
    this.shape_86.setTransform(338.1819, 166.7769, 0.2811, 0.2811)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AggApQgagggPgOQgHgPAHgNQAIgOAWgIQAkgYArAsIALAPQAHAJAMAGQAJAJACAMQACAPgNANQgIAIgNAGQgPAGgOAAQgYAAgYgXg",
      )
    this.shape_87.setTransform(343.6601, 174.7124, 0.2811, 0.2811)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#F8C2A4")
      .s()
      .p("AAOA0QglgEgfgnIgOgJQgGgEAAgGQAAgNAMgKQAIgHAUgKQAigHAfAYQAbATARAhQgUAhghAAIgIAAg")
    this.shape_88.setTransform(350.716, 180.4719, 0.2811, 0.2811)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#F8C2A4")
      .s()
      .p("AgdAqQgigXgQgnQAAgUAXgLQARgJAUAAQAfAAAdAWQAgAXAHAiQAAANgLALIgTAQQgKACgJAAQgfAAgdgTg")
    this.shape_89.setTransform(362.101, 187.2223, 0.2811, 0.2811)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#F8C2A4")
      .s()
      .p("AgGA8QgqgegTgSQgigiAZglQAPgPAbAAQAaAAAVAPQAGAMATAMIAgAVQAhAageAwQgHAPgZAAQgZAAgWgPg")
    this.shape_90.setTransform(362.0108, 192.8227, 0.2811, 0.2811)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#F8C2A4")
      .s()
      .p("AgPA7QgkgSgQgmQgSgrAogUQAmgIAkAZQAmAZAHAlQAAAbghAMQgQAFgPAAQgMAAgNgEg")
    this.shape_91.setTransform(366.767, 202.4161, 0.2811, 0.2811)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#F8C2A4")
      .s()
      .p("AgzAdQgUgHgFgWQgEgVAJgJQAcgNAKgDQAagHAZANQAYAAASAOQASAPAAAUQgGAogvAAQgkAAgogUg")
    this.shape_92.setTransform(379.583, 204.6512, 0.2811, 0.2811)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#F8C2A4")
      .s()
      .p("AgjAsQgrgLgHgoQAAgOAMgNQAKgNAIAAQA1AAAYAFQAqAJAUAaQAHATgPANQgGAEgaANQgZAGgVAAQgSAAgPgEg")
    this.shape_93.setTransform(375.7626, 195.8469, 0.2811, 0.2811)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#F8C2A4")
      .s()
      .p("AgZAoQgQgIgLgNQgNgPAAgNQAAgQAOgMQAPgMAVAAQAqAOAJAFQAcAPAAAZQAHAcghAJQgLADgLAAQgUAAgVgKg")
    this.shape_94.setTransform(368.4433, 194.2346, 0.2811, 0.2811)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AgjAqQgjgQgNgaQgHgUALgRQAJgNARgJIA7AAQAFAFAKAPQAKAPAFAFQAaAJALAHQANAJAAAOQgGAYgUAIQgYADgKAFQgtgMgQgGg",
      )
    this.shape_95.setTransform(367.5445, 197.3205, 0.2811, 0.2811)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AgpAiIgpgpQgHgHAEgNQAEgLAJgJQAggQAeADQAhAEAOAdQAEAIAVAIQATAHAGAQQAGAagfAOQgYAKgfAAQgZgHgXgVg",
      )
    this.shape_96.setTransform(373.1607, 203.1799, 0.2811, 0.2811)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#F8C2A4")
      .s()
      .p(
        "AAdBEQg2gZgdgPQg0gbAGgqQAGgaAkgCQAbgCAfAKQAOAKAZAUQAZAUAPAKIARAQQAJALgGAMQgJARgTAKQgMAGgNAAQgJAAgIgDg",
      )
    this.shape_97.setTransform(375.343, 200.4687, 0.2811, 0.2811)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjvEmQgPAAgegKQgegKgPAAQiCgKhBgBQhtgChWANQgoh2A8iEQAdhABvibQAjgqA5gGQAzgGA5AYQBuA3BAB6QAyBeAaCUQAuBKBZgUQBAgOBQg8QAAAcAeAYQAZAUAjAIQAYAIAXgIQAagIAHgWQAGgYgYgMQgbgJgFgFQgbgog1AAIAPgSQAJgMAGAAQAcAAAkAbQAoAdAQAEQAfAIAagSQAbgSgOgWQgNgagpgVQgQgJg8gYQAUgnAKgKQAUgFAqACQAkgDAMgYQAHgcgbgPQgZgPgZAIQANgNAEgWQADgMAAgXQAthZBjgpQBigoBiAeQALBtgHC/QgJDWAFBVQgegFhBAPQhBAPgegFQhkAEhrAAQkIAAk0gYgAGaD0QAAAOALAJQAJAHAKAAQAfAZAhgGQASgEAmgPIAAgoQgigigxgCIgFAAQgxAAgNAugAKJhuIABAPQAFgFAJgGQAGgGAAgNQgTAHgCAIg",
      )
    this.shape_98.setTransform(365.769, 198.0376, 0.2811, 0.2811)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjHD7QgagNgWgjQgMgWgUgyIgLgtQgHgbgMgSQAMAAANgGIAZgOQAKgKABgGQACgJgNgOIgUgUQAtgeA3AAQAAgPgCgZQAAgVAMgTQALgQAcgHQAagIAFgJQAng0BGgSQBcAABUA3QBXA5AlBYQgPAlgnAVQgmATgmgIQAGAZgUASQgaARgKAKQgKAFgZAAQgZAAgKAFQgaAagYAQQgcASgVAAQgEAAgqgQQgegMgYASQggAZAbAdQAPAQAoAeQgiASghAAQgWAAgVgIg",
      )
    this.shape_99.setTransform(352.8243, 175.0711, 0.2811, 0.2811)

    this.instance_4 = new lib.Group_16()
    this.instance_4.setTransform(382.05, 181.3, 0.2812, 0.2812, 0, 0, 0, 19.8, 27.4)
    this.instance_4.alpha = 0.3789

    this.instance_5 = new lib.Group_17()
    this.instance_5.setTransform(382.05, 181.3, 0.2812, 0.2812, 0, 0, 0, 19.8, 27.4)
    this.instance_5.alpha = 0.4297

    this.instance_6 = new lib.Group_18()
    this.instance_6.setTransform(382.05, 181.3, 0.2812, 0.2812, 0, 0, 0, 19.8, 27.4)
    this.instance_6.alpha = 0.4805

    this.instance_7 = new lib.Group_19()
    this.instance_7.setTransform(376.2, 166.5, 0.2812, 0.2812, 0, 0, 0, 33.3, 7.3)
    this.instance_7.alpha = 0.4297

    this.instance_8 = new lib.Group_20()
    this.instance_8.setTransform(376.2, 166.5, 0.2812, 0.2812, 0, 0, 0, 33.3, 7.3)
    this.instance_8.alpha = 0.5391

    this.instance_9 = new lib.Group_21()
    this.instance_9.setTransform(376.2, 166.5, 0.2812, 0.2812, 0, 0, 0, 33.3, 7.3)
    this.instance_9.alpha = 0.4805

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#CAE0AE")
      .s()
      .p(
        "ArZLaQhpgUgygFQAAk0ABiYIABhiIgBgBQgDgIAFgKIgBATIASASQAUAGATAPQALAJAUAUQAWAPAWAAQAVAAAPgPQAjgjgZgZQgvgvg1gNQgOgHgQAEQgKADgUAKQgNANgEAKQACi4AFieQAAAGAHADQADABAKAAQAAAaAXAOQAQAKAVAAQAdAAAQgKQAWgNgHgbQgHgrgsgXQgpgWgwAIIAAj6QBCgvBaguQA2gbBugyQAegKAPgEQAZgGAUAAQEYgaGFAkQBeBxDCAQQA7AEBsgCQB3gDAuACQAeA8AAA8QAAAJgMAfQgJAWALASQhaAHhOAxQhNAwgtBMQg6B1AwBJQATAxAtAeQAaARA8AhQBZAsBlgOIAAAUQhRgQhHAMQhRAOg5AyIgZAdQgNAPgMAGQgMASgGAbIgMAtQgigRgkAGQgoAGAAAjQAAAZAYALQANAGAhAIIgmAlQgTAQghAHQgKAKAAAKQAHAegNAVQgOAVgeAIQgFAAAAALQAAAOgFAFQhQA5gmAPQhJAfg7ghQghg3gihkQgphygVgpQgMgXgdggQgngqgKgNQgrgrgtgSQg4gXg4AOQgYAGgZAZQghAigIAFQhXBxgiBgQgrB5AiBuQgkALguAAQgiAAgngGgAB4I2QggALAHAcQAAAkApAaQAoAaAngIQAogbgWgpQgTghgngTQgMgEgNAAQgPAAgPAFgAB9GLQghAnAtAjQAjAZA1ALQAKgFAbgIQAXgJAAgSQgHgagTgJQgMgFgWAAQAAgPgGgNQgGgMgIAAQgegDgNAAQgYAAgNANgAC5ExQgUAUAAAKQAGATAUANIAiASQANAGARgEQAKgCAUgKQAUgUAAgKQgRghgggNQgPgGgPAAQgVAAgUAMgAhHDPQgNANAAAPQAkBJA1AbQAbASAfgCQAjgCAHgiIg/hPQgqgpgsAAQgPAAgMAMgAgYAPQgNAKgGAGQgLALAAANQARAzAqAdQAdAOAbgKQAagKAIgYQAAgOgNgQQgHgKgUgUQgPgWgVgIQgLgEgKAAQgLAAgLAEgAo3jXQAaA9AvAUQAoAUAygGQAegEA8gUQAagNgCgQQgBgJgNgMQgSgGgDgNQgCgGADgFQAnAAAXgKQAXgLAPgdQA3gLAWgKQAogUANgnQAeAAAPgDQAZgEAUgNQAWgQAGgUQAFgWgOgWQhGhihXgtQhqg3hgAwQgeAegQAMQgcAVgaAHQgcAOgEAgQgFAdARAZQgVgFghAKQgfAKgPgFQgKAAgkgOQgggMgWAGQgMAKgGAGQgMALAAANQAIAfAfAXQAgAXAdgHQAJBLASAsg",
      )
    this.shape_100.setTransform(361.3982, 185.0926, 0.2811, 0.2811)

    this.instance_10 = new lib.Group_23()
    this.instance_10.setTransform(362.25, 185.1, 0.2812, 0.2812, 0, 0, 0, 89.8, 73.8)
    this.instance_10.alpha = 0.4805

    this.instance_11 = new lib.Group_24()
    this.instance_11.setTransform(385.2, 194.8, 0.2812, 0.2812, 0, 0, 0, 2.5, 1.3)
    this.instance_11.alpha = 0.4297

    this.instance_12 = new lib.Group_25()
    this.instance_12.setTransform(385.2, 194.8, 0.2812, 0.2812, 0, 0, 0, 2.5, 1.3)
    this.instance_12.alpha = 0.4805

    this.instance_13 = new lib.Group_26()
    this.instance_13.setTransform(382.95, 165.3, 0.2812, 0.2812, 0, 0, 0, 6.2, 2.5)
    this.instance_13.alpha = 0.5391

    this.instance_14 = new lib.Group_27()
    this.instance_14.setTransform(382.95, 165.3, 0.2812, 0.2812, 0, 0, 0, 6.2, 2.5)
    this.instance_14.alpha = 0.4805

    this.instance_15 = new lib.Group_28()
    this.instance_15.setTransform(343.15, 167.4, 0.2812, 0.2812, 0, 0, 0, 21.7, 10)
    this.instance_15.alpha = 0.4805

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#D38529")
      .s()
      .p(
        "EgAaAlXQgNgJAAgGQgvpyAAolQAApfA5o4IAAhjQAFgZAFgyQAFgyAFgZQALiFAHjAIALlFIAAq8QgChBgYlZQgTj8AGieQAAgJAPgCQAOgDAAAOQBOJOgBKFQgCI1hBKdIAABkQgUCFgFCnQgEBkAADIQgfM+BGMCQAAAPgeAPQgTgKgHgFg",
      )
    this.shape_101.setTransform(453.6309, 206.461, 0.281, 0.281)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#D38529")
      .s()
      .p(
        "EgAZAmTQgZisgLjeQgGiBgIkBQgMivAAj6QAAiPACkaQAFhLAFiWQAFiWAFhLQBIqmAHrWQAHqbguriQAAgJAUgCQATgDAAAOQArDJALEgQAGFBAKCgQAPJYgtJYQgFAZgFAyQgFAygFAZIAABkQg4JMAAJ3QAAI7AuKJQAAAFAEAOQgCALgfAAg",
      )
    this.shape_102.setTransform(433.5723, 193.6766, 0.281, 0.281)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#F2A33B")
      .s()
      .p("AhaDXIAAmtICzAAQAFBGgFCQQgFCRAFBGg")
    this.shape_103.setTransform(437.6334, 71.9232, 0.2809, 0.2809)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#F2A33B")
      .s()
      .p("AhXDXQgGhUACiDIAEjWICzAAQADA0gLCiQgJCIARBPg")
    this.shape_104.setTransform(446.2594, 71.9232, 0.2809, 0.2809)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#F2A33B")
      .s()
      .p("AhWDXQgLhNAHiKQAIiagEg8ICpAAQARBPgKCHQgLCjAEA0g")
    this.shape_105.setTransform(454.9367, 71.9232, 0.2809, 0.2809)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#F2A33B")
      .s()
      .p("AheDXQgEg0ALijQAKiHgRhPICzAAQARBPgKCHQgLCjAEA0g")
    this.shape_106.setTransform(463.5851, 71.9232, 0.2809, 0.2809)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#F2A33B")
      .s()
      .p("AhZDXQAAhGAEiRQACiCgGhUICzAAIAAGtg")
    this.shape_107.setTransform(428.8894, 71.9232, 0.2809, 0.2809)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#F2A33B")
      .s()
      .p(
        "EgLBA6hQhw1NAqyfQAPllAioXIA4t8QA/wvgSrKQgKk9gIiZQgMkIgUjOQgFhLgGiRQgHiCgMhaIWBAAQAKBkAPDNQAPDNAKBkQAMCiAHDzIALGVQAOKlglMPQgcJnhFNMQgTEBgJFmQgHGagFDNQAAQrBQNVg",
      )
    this.shape_108.setTransform(446.2035, 180.643, 0.2809, 0.2809)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#D38529")
      .s()
      .p(
        "EgAZAmsQgSg2gEhRIgIiHQgMiQgGjSIgMlaQgPrqBLr7IAAhkQAFgZAFgyQAFgyAFgZQALiFAHjAIALlFIAAruQgCgzgcljQgVj5AMilQAAgJAPgCQAOgDAAAOQBbKLgVNLQgIE4gZGvIgvLmQhKPPBoPPQAAAPgeAPQgdAAAAgKg",
      )
    this.shape_109.setTransform(595.1358, 208.4278, 0.281, 0.281)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#D38529")
      .s()
      .p(
        "AgaXpQgJgVAAgaQgUkTgGh9QgKjdAGizQAFhQAFilQAFilAFhQQARh+AMjGQAPj9AFhIQAMjIgOlKQgRmeAAh0QAAgJAQgCQAQgDAHAOQAgBSACB8QgECQAABGQAgIqgqHmQgiFwgCG0QgCFFASHgQgKAKgKAAQgTgHgLgag",
      )
    this.shape_110.setTransform(584.4541, 136.2172, 0.281, 0.281)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#F2A33B")
      .s()
      .p("AhbDXQgDg0ALijQAJiHgRhPICzAAQAGBUgCCCQgECRAABGg")
    this.shape_111.setTransform(583.452, 71.9232, 0.2809, 0.2809)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#F2A33B")
      .s()
      .p("AhYDXQgFhGAFiRQAFiQgFhGICzAAIAAGtg")
    this.shape_112.setTransform(592.0744, 71.9232, 0.2809, 0.2809)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#F2A33B")
      .s()
      .p("AhZDXIAAmtICzAAIgEDWQgCCDAGBUg")
    this.shape_113.setTransform(600.8183, 71.9232, 0.2809, 0.2809)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#F2A33B")
      .s()
      .p("AhaDXIAAmtICzAAQAFA8gICaQgICKALBNg")
    this.shape_114.setTransform(609.5499, 71.9232, 0.2809, 0.2809)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#F2A33B")
      .s()
      .p("AhUDXQgRhPAKiIQAKiigDg0ICpAAQARBPgJCHQgLCjADA0g")
    this.shape_115.setTransform(574.8323, 71.9232, 0.2809, 0.2809)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#F2A33B")
      .s()
      .p("EgK8A6hQhfvkAUyrQAPtrBa0rQBp3ciH3cIAAhkIWBAAQBUPWgQRvQgNOchVSuQh4ZgCWZSg")
    this.shape_116.setTransform(592.1299, 180.643, 0.2809, 0.2809)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#9D8C21")
      .s()
      .p("AgKC5QhdgKg1hUQgthLAfhSQAfhSBTgeQBVgYBPA2QBSA5gHBcQAAAygKAUQgKAKgUAoQg0BBhQAAIgVgBg")
    this.shape_117.setTransform(622.7085, 68.0723, 0.281, 0.281)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#9D8C21")
      .s()
      .p("Ah0CNQg1gugMhDQgMhDAlg7QAug9BJgSQBJgSBDAlQBQBAAABfQANBCg1A2Qg3A3hHAHIgUABQg/AAgygrg")
    this.shape_118.setTransform(416.4824, 67.2422, 0.281, 0.281)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#9D8C21")
      .s()
      .p(
        "ATYCnQpngOn+g3IhkAAQgYgFgygFQgygFgZgFIhkAAQgZgFgygFQgygFgZgFQhygMikgGIkQgMQipgMjnAAQkJACiHAAQnzgImMANQnaAQmlAxIhkAAIAAizQNhhDKpgLQM8gPLWA/QSFBcOZANQRRAQPGhbIAACzQiWAYjmAOIl8AWQhVAFilAFQilAFhVAFQlDAFkOAAQkrAAjpgGg",
      )
    this.shape_119.setTransform(520.9381, 67.3001, 0.281, 0.281)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#D1904A")
      .s()
      .p(
        "EAAFA0tQ38gcrXATQhCuXAQx1QAJmyAbrgQAgtZAJk4QAl1khKvAQLzgUXlAUQXmAULzgUQAFCvAPFZQAPFZAFCvQAMLugmRfQgxTYgPJsQgQRMBCNwQl+AMonAAQo9AArygNgEAAyAwcQUmAcJVgEQgttVAPtPQAKlyAXoLIApt8QAwxCgMrAIgLnRQgHkXgMi6QqTAAs1gNQnigHvlgUQlUgFiqgBQktgDjRATQAcGRAGHVQAFF1gJHxQgNHPgXJGQgME7ggLZQgNEEgEFKQgDDFAAGJIgDFPQgDDLAGCEQAFBVAFCvQAFCvAFBVICWAAQC9gDDpAAQJXAAN9ATg",
      )
    this.shape_120.setTransform(519.0095, 170.2596, 0.281, 0.281)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#FFE882")
      .s()
      .p(
        "ARWDnQmvgGmFgjQhzgKjlgZQjmgZhzgKIocgeQkTgJjcAEQkIAEjnAVIAAk1QHPghGDAAQG+AAGUArQHqAyGKAUQHYAYGdgOQCCgKBBgEQBtgGBWAAIAAFdQlZANkrAAIiwgCg",
      )
    this.shape_121.setTransform(520.8417, 269.0021, 0.281, 0.281)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#65C1EF")
      .s()
      .p(
        "EAAAA0DQ29gUrfAUQg4sCAQtwQAAqeAmxfQAt1BAHm9QgLh1ADjBQACjigEhUQgIhsgIkpQgHj/gRiWQL/gVWdARQXlASK4gOQAkIRAGJZQAFIEgRJmQgIF9gXLPQgZLsgHFfQgdUFA+OTQlvAKonAAQooAArfgKg",
      )
    this.shape_122.setTransform(521.5759, 173.4188, 0.2811, 0.2811)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
            {t: this.instance_15},
            {t: this.instance_14},
            {t: this.instance_13},
            {t: this.instance_12},
            {t: this.instance_11},
            {t: this.instance_10},
            {t: this.shape_100},
            {t: this.instance_9},
            {t: this.instance_8},
            {t: this.instance_7},
            {t: this.instance_6},
            {t: this.instance_5},
            {t: this.instance_4},
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
            {t: this.instance_3},
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
            {t: this.instance_2},
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
  p.nominalBounds = new cjs.Rectangle(466, 302, 190.5, 162.10000000000002)
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681B",
    width: 750,
    height: 480,
    fps: 24,
    color: "#00B0C5",
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681B"] = {
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

