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

  ;(lib.teteold = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#EAEAEA")
      .s()
      .p(
        "AgnBNQgBgEgGgQIgKgUQgKgXAAgRQABgVALgSQAJgSASgLQAIgGAagFIAUgCQAFAAAUAfQATAegFADIgEAEIgEAFIgFAGQgDADgBADIAEANQADAMgBABQAAACgGACIgHACQgMgVgLgFQgLgEgFAJQgIAPAIAPQAJANgEAEQgFAEgJAFIgOAIIgLAHIgEACQgDAAgBgIg",
      )
    this.shape.setTransform(13.6998, 16.9306, 2, 2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#EAEAEA")
      .s()
      .p("AgBAFQgFAAgFgCQgIgCAFgDQAEgEAKABQAIAAAGACQAEACgCAEQgBADgGAAIgKgBg")
    this.shape_1.setTransform(32.7263, 20.2138, 2, 2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#361C15")
      .s()
      .p(
        "AgBADQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABgBABQAAAAgBABIgBABIgBgBg",
      )
    this.shape_2.setTransform(33.6536, 23.4889, 2, 2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFA47D")
      .s()
      .p("AhDAfIAohgIAWAQIAXAPQADAAAvAmQgOgEgIAIQgJAIgSAyg")
    this.shape_3.setTransform(13.65, 41.95, 2, 2)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFA47D")
      .s()
      .p(
        "AAlBoQgQAAgigIQgngJgGgGQgHgIgFgqQgGgqAFgUQAHgcAHgPQAMgXATgFQAUgFAcAPQAbANAIAQQAbAtgPBMIgCALQgFAUgFAHQgGAIgNAAIgBAAg",
      )
    this.shape_4.setTransform(21.6397, 21.9746, 2, 2)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFA47D")
      .s()
      .p("AAAAVIgJgFIADgmIAIAUQAJAUgBADQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgDAAgFgCg")
    this.shape_5.setTransform(37.5526, 28.3382, 2, 2)

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
  }).prototype = getMCSymbolPrototype(lib.teteold, new cjs.Rectangle(0, 0, 39.6, 55.1), null)
  ;(lib.canards = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#AE927A")
      .s()
      .p(
        "AhTBJQgTgNgKgUQgJgTABgVQABgTAEgXIAFgdQADgCAEACQAFAEACAAIAFgBQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQADAFAEABQACABADgCIAEAAQABAGAEAAIgEANQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQAEACAIgIQALgLAJgDQAmgQAzAbQgcgJgZAFQgWAGgTAOQgXASgBAVQgBAUARAOQAJAHAKACIAlAGIAYAFQANACALgDQACAAAGgDQAIgEAAgDIAAgCQgCgEgGgDIgDgCIACABQARAGALgFQAKgEgBgGQgBgFgFgEQARAIAKACIgEAEIgPAMQgRAPgPALgAhUA8QgBABAEAGIACABQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgEgGIgBAAIgBAAgAgvA7IgBACIAEAEQAAAAABABQABAAAAAAQABAAAAAAQABAAAAAAQACgBgGgGIgCgBIgBABgAhGAyQgDABAEAFQADAEACgCQABgBgDgEQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAAAgAhkAqQAAADACADQABABAAAAQABABAAAAQABAAAAgBQAAAAAAgBIgCgGIgCgBIgBABgAhFAeQgCABABAFQACAFACgBQACgBgBgFQgCgEgCAAIAAAAgAhYAYQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIABADIACADQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIgCgHIgBgBIgBAAgAhoAKQgCABABAFQACAGACAAQADgBgCgFQgBgGgDAAIAAAAgAhcgDQgCAAABAFQABAGACgBQADAAgBgGQgBgEgDAAIAAAAgAhMgNQgCABABAFQAAAEACABQADABgBgGQAAgGgDAAIAAAAgAhvgHQADABABgHQAAgHgCAAQgDAAABANgAhcgbQgBADABADIACACQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgHgCAAIgCABgAhlguQgCABABAGQABAHADgBQACAAgBgHQgBgGgDAAIAAAAg",
      )
    this.shape.setTransform(39.24, 31.025, 2, 2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#DBA983")
      .s()
      .p(
        "AAPAWIgBgCIgEABIgDgDIgEAAIgDgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBgDQgBgEgEgBIgGgBIABgBIgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgCIgCgDIAAgJIgBgBQAFgGAFgCQADgBAGAAQAHAAAGAFQAHAHAAAOQAAAKgDAHIAAACIgBAAIgBgBgAgHgNQgEABABADIACABQAAABABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAg",
      )
    this.shape_1.setTransform(124.8031, 28.9125, 2, 2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#383433")
      .s()
      .p("AgCAAQAAgCAEACQABAAAAABQgBAAAAAAQAAAAAAAAQgBAAgBAAIgCgBg")
    this.shape_2.setTransform(144.2542, 40.125, 2, 2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#383433")
      .s()
      .p("AgBABIgBgBIAEAAIAAABg")
    this.shape_3.setTransform(141.4625, 39.3875, 2, 2)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#383433")
      .s()
      .p("AgBABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIACAAIAEAAIABAAIgDABg")
    this.shape_4.setTransform(140.9167, 40.9, 2, 2)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#383433")
      .s()
      .p("AgBAAIABAAIACAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgBAAIgBgBg")
    this.shape_5.setTransform(138.1286, 40.1417, 2, 2)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#383433")
      .s()
      .p("AgDABQAAgBgBAAQAAAAABAAQAAAAABAAQAAAAACAAIAEAAIABAAIgBABIgEAAIgCAAIgBAAg")
    this.shape_6.setTransform(138.3385, 41.65, 2, 2)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#383433")
      .s()
      .p("AgDABQgCgBAIAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABg")
    this.shape_7.setTransform(138.6762, 43.05, 2, 2)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#383433")
      .s()
      .p(
        "AgCAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIACAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgCAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg",
      )
    this.shape_8.setTransform(135.6817, 42.7833, 2, 2)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#383433")
      .s()
      .p("AgDABIAAgBIABAAIAEAAIACAAIgBABIgDAAg")
    this.shape_9.setTransform(135.1, 41.35, 2, 2)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#383433")
      .s()
      .p(
        "AgCAAIABAAIADAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBg",
      )
    this.shape_10.setTransform(135.75, 40, 2, 2)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#383433")
      .s()
      .p(
        "AAAABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABAAIABAAIACAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAg",
      )
    this.shape_11.setTransform(138.5167, 38.8, 2, 2)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#383433")
      .s()
      .p("AgBAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABgBAAQAAAAAAAAg")
    this.shape_12.setTransform(140.8355, 37.9667, 2, 2)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#383433")
      .s()
      .p("AgCgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAAAIgFgDg")
    this.shape_13.setTransform(143.275, 38.5717, 2, 2)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#383433")
      .s()
      .p(
        "AACABIgEgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQACgBACABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAg",
      )
    this.shape_14.setTransform(140.5933, 36.5267, 2, 2)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#383433")
      .s()
      .p("AgBAAIABAAIACAAIAAABQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg")
    this.shape_15.setTransform(137.5429, 37.525, 2, 2)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#383433")
      .s()
      .p("AgDABQAHgDAAACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg")
    this.shape_16.setTransform(134.39, 38.6333, 2, 2)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#383433")
      .s()
      .p("AADgBIAAABIgEABQgDgBAHgBg")
    this.shape_17.setTransform(132.4435, 40.4, 2, 2)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#383433")
      .s()
      .p("AABABIgDgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAEAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAg")
    this.shape_18.setTransform(132.2875, 42.2, 2, 2)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#383433")
      .s()
      .p(
        "AgCAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIgBABIgBAAIgCgBg",
      )
    this.shape_19.setTransform(130.2855, 41.39, 2, 2)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#383433")
      .s()
      .p("AgCABQAEgDAAACQABAAAAAAQgBAAAAAAQAAAAAAAAQgBABgBAAIgBABIgBgBg")
    this.shape_20.setTransform(130.7583, 39.73, 2, 2)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#383433")
      .s()
      .p("AACgBQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDACQgBAAAAgBQAAAAAAAAQABgBABAAQAAAAACgBg")
    this.shape_21.setTransform(132.6303, 37.9417, 2, 2)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#383433")
      .s()
      .p(
        "AgCAAIABAAIABAAIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIAAAAIgBgBg",
      )
    this.shape_22.setTransform(137.41, 35.91, 2, 2)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#383433")
      .s()
      .p("AAAAAIACAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIgDABQAAAAAAAAQgBAAAAAAQABAAAAgBQAAAAABAAg")
    this.shape_23.setTransform(134.5357, 36.4, 2, 2)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#383433")
      .s()
      .p("AgDABQAAgBAHAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBABIgCAAIgBAAg")
    this.shape_24.setTransform(135.7026, 35.15, 2, 2)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#383433")
      .s()
      .p(
        "AAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABIgCABQgBAAAAAAQAAAAAAAAQAAgBABAAQAAgBABAAg",
      )
    this.shape_25.setTransform(132.6521, 36.1714, 2, 2)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#383433")
      .s()
      .p("AgBACIAAgCIACgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgBACIgBAAIAAAAg")
    this.shape_26.setTransform(130.85, 37.69, 2, 2)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#383433")
      .s()
      .p(
        "AgBADQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAABAAAAQAAABAAAAQgBAAgBABIAAACIgBAAg",
      )
    this.shape_27.setTransform(129.3822, 39.3621, 2, 2)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#383433")
      .s()
      .p(
        "AgBADIgCgCQgBgCAEgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgBABAAAAIgCABIgBAAg",
      )
    this.shape_28.setTransform(123.3068, 26.6333, 2, 2)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#AE927A")
      .s()
      .p(
        "AAJARQgIgDgLABIgIAAIAKgHQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQACgDgEgGQgDgGgGgGIgDgDQAIAFAGACQAFABAIgBIAJgBQAEACgIAHIgJAGQAKAFgBAHIgBAAIgEAAg",
      )
    this.shape_29.setTransform(147.6833, 40.275, 2, 2)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#383433")
      .s()
      .p(
        "AgBACIAAgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAg",
      )
    this.shape_30.setTransform(119.69, 28.1714, 2, 2)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAABIgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBAAIgBgBg",
      )
    this.shape_31.setTransform(130.225, 44.7542, 2, 2)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAg",
      )
    this.shape_32.setTransform(128, 42.2417, 2, 2)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAACQgBgDABgBQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIAAgBg",
      )
    this.shape_33.setTransform(127.3, 38.1083, 2, 2)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQABgBAAAAIAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBgBg",
      )
    this.shape_34.setTransform(126.6538, 44.95, 2, 2)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#836D65")
      .s()
      .p("AAAABIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABACIAAABIgBgBg")
    this.shape_35.setTransform(125.2, 43.2143, 2, 2)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#836D65")
      .s()
      .p("AAAABIAAgBIAAgBQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABACIAAACIgBgCg")
    this.shape_36.setTransform(126.2, 41.6733, 2, 2)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg",
      )
    this.shape_37.setTransform(125.8, 39.0429, 2, 2)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#836D65")
      .s()
      .p("AAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAACIgBAAIAAgBg")
    this.shape_38.setTransform(125.85, 36.5792, 2, 2)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#836D65")
      .s()
      .p("AAAgCQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAgFg")
    this.shape_39.setTransform(124.7667, 40.4429, 2, 2)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#836D65")
      .s()
      .p("AAAADQgBgFABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgBADIAAAAg")
    this.shape_40.setTransform(124.06, 37.5684, 2, 2)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBg",
      )
    this.shape_41.setTransform(124.95, 35.15, 2, 2)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#AE927A")
      .s()
      .p(
        "AAAAbIgLgCIgSgDQgFgBgEgDQgIgGABgLQAAgJALgIQAIgHAMgCQALgDANAFQAJADAMAJIAEAEQAFAFAEAGQAEAHgCACQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBgBAAQgHgBgGgDIADAEQAAACgEADQgDABgKgCIgBAAIABABQADABABACIAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABgBAAIgEACIgFAAIgFAAgAACAUIAHAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgIAAACABgAgMASQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIACAAQAAgBABAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgEgBIgBAAIgBABgAgdAQIAFAAIABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgFgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgAACAMQgBAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAAgBABAAIAEAAIABgBIgBgBgAgOALIgBAAIAAABIACAAIAEAAIABgCIgCAAgAgmALQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAAAAAgAANAJQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAIADAAIACgBIAAgBIgFAAgAgbAIIAFgBIAAgCQgIACADABgAACAEIgCABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIgBAAIgCAAgAgKAEIgCABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIAEgBQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAgAgkAEQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgFADgAgpAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIACgCQABgBABgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgBAAIgBABgAARAAIABACIAEAAIAAgBIgFgBIAAAAgAAZgEIAGAEQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBIgDgBIgBAAgAACgBQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIADAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgCgBIgCAAgAgTgBQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAGgDIgBAAIgHACgAgWgHQgCABgBABQgBAAAAABQgBAAAAAAQAAABABAAIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIAAAAgAAOgFIAEABQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDAAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAgAgjgGIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIADgDQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAAAIgEADgAAAgIIgBABQgBAAAAAAQAAAAABAAQAAABABAAQAAAAACAAIAAgCIgBAAIgBAAgAANgNQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAFABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgDgCIgCABgAgQgNQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAABAAIADgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAgAgZgOQgBAAAAABQgBAAAAABQAAAAAAAAQABAAAAAAIAEgBQAAgBABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBAAIgDACgAgCgOQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIgCAAIgBAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAgAgMgSQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQABgBAAAAQABAAABAAQAAgBAAAAQAAAAAAAAQgIAAABACg",
      )
    this.shape_42.setTransform(137.6137, 39.1607, 2, 2)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#DBA983")
      .s()
      .p(
        "AgoAiQgRgNABgVQABgOAEgSQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIADABIAEAAIADADIAEAAIABABQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIgCAHIABABQACABAEgEQAFgFAEgBQARgIAZANQgOgEgLACQgLADgIAHQgLAIAAAJQgBAKAIAGQAEAEAFABIARACIALACQAGABAFgBIAEgBQABgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBIAAgBQgBgCgDgBIgBgBIABABQAKACADgCQAEgCAAgDIgDgEQAGADAHACIgJAHQgHAHgHAFgAgmAgQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgBAAQAAAAAAAAQgBAAABABQAAAAAAABQAAAAABABgAgWAdIACACIACAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBIgBAAIgBABgAggAPQAAAAAAAAQgBABABAAQAAABAAAAQABABABABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgCIAAAAgAgpAMIAAABIAAACQABABAAAAQAAABABAAQAAAAAAAAQAAgBAAgBIgBgDIAAgBIgBABgAgwAFQAAAGABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgCgDIAAAAgAgrgBQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgCgCIAAAAgAgjAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgCAAACAFgAgzgDQAAABAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAAAQgBAAABAFgAgqgMQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIAAAAgAgvgRQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABABg",
      )
    this.shape_43.setTransform(134.4444, 38.85, 2, 2)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#E09E55")
      .s()
      .p(
        "AANAKIgNABQgGAAgGgEQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAAFgEIAIgHIACgBIAAABIABAIIACADIAAADQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAAABIAAABgAACAAIAAAAIAAACIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAg",
      )
    this.shape_44.setTransform(118.8667, 28.1875, 2, 2)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#DBA983")
      .s()
      .p(
        "AAOAUIgEABIgDgDIgFAAIgCgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBgDQgBgEgEgBIgGgCIAAgBIgBgDIAAgCIgCgDQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgFIgBgBQAFgGAFgCQADgBAGAAQAHAAAGAFQAHAHAAAOIgDARIgBACIAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBgAgHgNQgEABABADQABADAEgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgCgBIgCAAg",
      )
    this.shape_45.setTransform(86.8031, 28.9071, 2, 2)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#383433")
      .s()
      .p("AgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgBg")
    this.shape_46.setTransform(106.1946, 40.125, 2, 2)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#383433")
      .s()
      .p("AAAABQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIABABg")
    this.shape_47.setTransform(103.3938, 39.3667, 2, 2)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#383433")
      .s()
      .p("AgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIACAAIAEAAIAAAAIgCABg")
    this.shape_48.setTransform(102.875, 40.9, 2, 2)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#383433")
      .s()
      .p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBAAIAAAAIgBgBg")
    this.shape_49.setTransform(100.1205, 40.1667, 2, 2)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#383433")
      .s()
      .p("AgDABQgBgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIABAAIgCABIgDAAIgCAAIgBAAg")
    this.shape_50.setTransform(100.3091, 41.675, 2, 2)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#383433")
      .s()
      .p("AgCABQgDgBAIAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBABg")
    this.shape_51.setTransform(100.6075, 43.04, 2, 2)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#383433")
      .s()
      .p(
        "AgCAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAIADAAIAAABIgCAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg",
      )
    this.shape_52.setTransform(97.5929, 42.7833, 2, 2)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#383433")
      .s()
      .p("AgCABIgBgBIABAAIAEAAIACAAIgBABIgDAAg")
    this.shape_53.setTransform(97.0167, 41.35, 2, 2)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#383433")
      .s()
      .p("AgCAAIABAAIADAAIABAAIAAAAIgEABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBg")
    this.shape_54.setTransform(97.7, 40, 2, 2)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#383433")
      .s()
      .p("AAAABIgCgBIABAAIABAAIACAAIABABg")
    this.shape_55.setTransform(100.4667, 38.8, 2, 2)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#383433")
      .s()
      .p("AgBAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAAAAAAg")
    this.shape_56.setTransform(102.7654, 37.9667, 2, 2)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#383433")
      .s()
      .p("AgCgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAIgBAAIgEgDg")
    this.shape_57.setTransform(105.225, 38.5717, 2, 2)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#383433")
      .s()
      .p(
        "AACABIgEgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABgCADACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgBgBg",
      )
    this.shape_58.setTransform(102.5691, 36.5037, 2, 2)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#383433")
      .s()
      .p("AgBAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAIABABIgBAAQgCAAAAAAQgBAAAAAAQgBAAAAAAQAAgBABAAg")
    this.shape_59.setTransform(99.5179, 37.4857, 2, 2)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#383433")
      .s()
      .p("AgDABQAHgDAAACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg")
    this.shape_60.setTransform(96.39, 38.6333, 2, 2)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#383433")
      .s()
      .p("AgBAAIADgBQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgDABQgBAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAg")
    this.shape_61.setTransform(94.5111, 40.4, 2, 2)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#383433")
      .s()
      .p("AABABIgDgBQAAAAAAAAQgBAAAAAAQABAAAAAAQAAAAABAAIAEAAQAAAAAAAAQAAAAAAAAQABAAgBABQAAAAAAAAg")
    this.shape_62.setTransform(94.2257, 42.2, 2, 2)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#383433")
      .s()
      .p("AAAABIgCgBQAAAAAEAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCABIgBAAIAAAAg")
    this.shape_63.setTransform(92.2358, 41.375, 2, 2)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#383433")
      .s()
      .p("AgCABQADgDABACQABAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgBABIgBgBg")
    this.shape_64.setTransform(92.7571, 39.73, 2, 2)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#383433")
      .s()
      .p("AACgBQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgDACQgDgBAGgCg")
    this.shape_65.setTransform(94.6306, 37.925, 2, 2)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#383433")
      .s()
      .p("AgCAAIABAAIABAAIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgEAAIgBAAIAAgBg")
    this.shape_66.setTransform(99.36, 35.9286, 2, 2)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#383433")
      .s()
      .p("AgBAAIADAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIgDABQAAAAAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAg")
    this.shape_67.setTransform(96.525, 36.4, 2, 2)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#383433")
      .s()
      .p("AgDABQAAgBAHAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABIgCAAIgBAAg")
    this.shape_68.setTransform(97.65, 35.15, 2, 2)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#383433")
      .s()
      .p(
        "AAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAABIgDABQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAg",
      )
    this.shape_69.setTransform(94.6335, 36.19, 2, 2)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#383433")
      .s()
      .p(
        "AgBACIAAgCQABAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgBACIgBAAIAAAAg",
      )
    this.shape_70.setTransform(92.8, 37.69, 2, 2)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#383433")
      .s()
      .p(
        "AAAADQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIABgCQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBABIgBADIAAAAg",
      )
    this.shape_71.setTransform(91.3267, 39.4071, 2, 2)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#383433")
      .s()
      .p(
        "AgDABQgBgCAEgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAAAAAAAQgBABAAAAQgBABgBAAIgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg",
      )
    this.shape_72.setTransform(85.304, 26.6467, 2, 2)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#AE927A")
      .s()
      .p(
        "AAJARQgIgDgLABIgHAAIAHgFIACgCIAFAAQACgDgEgGQgEgGgFgGIgEgDQAIAFAHACQAEABAIgBIAJgBQAEACgIAHIgIAGQAJAFgBAHIgBAAIgEAAg",
      )
    this.shape_73.setTransform(109.6391, 40.275, 2, 2)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#383433")
      .s()
      .p(
        "AgBACIAAgCIAAAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAg",
      )
    this.shape_74.setTransform(81.6, 28.1714, 2, 2)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#836D65")
      .s()
      .p("AAAABIgBgBIABgBQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBAAIgBgBg")
    this.shape_75.setTransform(92.175, 44.7775, 2, 2)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#836D65")
      .s()
      .p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIAAAAIgBgCg")
    this.shape_76.setTransform(89.9, 42.2538, 2, 2)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#836D65")
      .s()
      .p("AAAACQgBgDABgBQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAADIgBgBg")
    this.shape_77.setTransform(89.2357, 38.125, 2, 2)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAABQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIABABIgCgBg",
      )
    this.shape_78.setTransform(88.6938, 45.025, 2, 2)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#836D65")
      .s()
      .p("AAAABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAABIABACIAAAAIgBgBg")
    this.shape_79.setTransform(87.16, 43.1991, 2, 2)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#836D65")
      .s()
      .p("AABACIgBgBIAAgBIAAgBQAAAAAAAAQAAgBAAABQAAAAABAAQAAAAAAAAIAAACIAAACIAAgBg")
    this.shape_80.setTransform(88.1333, 41.6225, 2, 2)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#836D65")
      .s()
      .p("AAAgCQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgBgEABgBg")
    this.shape_81.setTransform(87.7604, 39.0429, 2, 2)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#836D65")
      .s()
      .p("AAAAAIAAgBQAAgBAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAACIgBgDg")
    this.shape_82.setTransform(87.85, 36.7258, 2, 2)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#836D65")
      .s()
      .p("AAAgCQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgCgEABgBg")
    this.shape_83.setTransform(86.7167, 40.4429, 2, 2)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAADQAAgFAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIAAAAg",
      )
    this.shape_84.setTransform(86.0375, 37.5533, 2, 2)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#836D65")
      .s()
      .p("AAAgCQAAAAAAAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgFg")
    this.shape_85.setTransform(86.9667, 35.15, 2, 2)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#AE927A")
      .s()
      .p(
        "AAAAbIgMgCIgRgDQgFgBgEgDQgIgHAAgKQABgJALgIQAIgHAMgCQALgDAMAFQAKADAMAJIAEAEQAFAFAEAGQAEAHgCACIgFAAQgKgCgDgCIADAEQAAACgEADQgDABgKgCIgCAAIACABQADABABACIAAABQAAAAAAAAQgBABAAAAQAAABgBAAQgBABgBAAIgEACIgFAAIgFAAgAACAUIAGAAQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgDAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABABAAgAgMASQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIACAAIAAgBIgEgBIgBAAIgBABgAgdAQIAEAAIACAAQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgFgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAACAMQgBAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAFAAIABgBIgBgBgAgPALIgBAAIABABIACAAIAEAAIABgCIgCAAgAgnALIACABIACAAIACgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQgFAAAAABgAANAJQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAIACAAIADgBIAAgBIgGAAgAgaAGQgBAAAAABQAAAAAAAAQgBAAABAAQAAABAAAAIAFgBQAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgEABgAAAAFQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQgBAAgBAAQgBAAgBAAQAAABAAAAQgBAAAAAAgAgKAEIgCABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIAEgBIABgBIgBgBgAgkAEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAQABAAgBAAIAAgBIgFADgAgpAAQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAAAIACgCIABgCQABAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgAAWACIgBgBQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQABAAAAABQAAAAABAAIAEAAIAAAAgAAZgEIAGAEQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBIgDgBIgBAAgAABgBIADABIADAAIAAgBIgDgBIgCAAgAgTgBQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIAGgDIgBAAIgHACgAgWgHQgHADADABIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBAAgAAOgFIAEABQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAABQABAAAAAAgAgjgGIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACgDQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBABgAgCgHQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIABgBIAAgBIgCAAIgCABgAANgNQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAFABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgDgCIgCABgAgQgNQAAAAgBABQAAAAAAAAQAAAAAAABQABAAAAAAIADgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAgAgZgOQAAAAgBABQgBAAAAABQAAAAAAAAQAAAAABAAIAEgBQABgBAAAAQAAgBAAAAQABAAgBAAQAAgBAAAAIgBAAIgDACgAgCgOQAEAAAAgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIgBAAIgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAAAgAgNgSQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBABAAQABAAAAAAQABgBAAAAQAAAAAAAAQgIAAAAACg",
      )
    this.shape_86.setTransform(99.5637, 39.1607, 2, 2)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#DBA983")
      .s()
      .p(
        "AgoAiQgRgMABgWQABgOAEgSQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIADABIAFAAIADADIAEAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBAHIABABQACABAEgEQAFgFAEgBQARgIAYANQgNgEgLACQgLADgIAHQgLAIgBAJQAAAKAIAGQAEADAFACIAQACIAMACQAGABAFgBIAEgBQABgBABAAQAAgBABAAQAAgBABAAQAAAAAAgBIAAgBQgBgCgDgBIgCgBIACABQAKACADgCQAEgCAAgDIgDgEQACADALACIgCACIgHAFIgOAMgAgnAdQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBAAIAAAAgAgWAdIACACQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgBAAIgBABgAguAXQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAgBIgBgDIgBAAIAAADgAggAPQAAAAgBAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBAAAAAAIAAAAgAgpAMIAAABIAAACIABABIABgBIgBgDIAAgBIgBABgAgwAFQgCABADAFQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgDIAAAAgAgrgBQgBABACAEQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgBgCIgBAAgAgjAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgCAAACAFgAg0gDQABAAAAAAQAAAAABAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIAAAAQgBAAAAAFgAgrgMIAAADQABABAAAAQABABAAAAQAAAAAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBAAgAgugOQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAHABAAg",
      )
    this.shape_87.setTransform(96.3943, 38.85, 2, 2)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#E09E55")
      .s()
      .p(
        "AAOAKIgOABQgGgBgGgEQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAQAEAAAGgFIAIgHIABgBIABABIgBAGQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAAAIACADIAAACIABAEIAAABIAAABgAACAAIAAAAIAAACIABAAQAAAAABAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAg",
      )
    this.shape_88.setTransform(80.8167, 28.2, 2, 2)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#565F56")
      .s()
      .p(
        "AAeArIgEABQgDABgCgBQgEgBgDgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIgFAAQgCAAgEgDQgEgDgDADIgBgIQgDgIgIgDIgOgCIABAAIABAAIgBgCIgDgIQACgEgBgBQAAgCgEgEQgEgDADgRIgBgDQAKgLALgEQAGgDANAAQAQAAAMALQAQAOgBAgQgBAUgFAPIgBAFIgBAAQgDAAgBgGgAgQgdQgDABgCACQgDADABACQABADADAAQAEABADgCQACgBACgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgCgDgEAAIgDABg",
      )
    this.shape_89.setTransform(18.7517, 9.7964, 2, 2)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#383433")
      .s()
      .p("AABACQgEAAgBgCQgCgFALAFQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCgBg")
    this.shape_90.setTransform(60.1648, 33.512, 2, 2)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#383433")
      .s()
      .p("AgCABQgGgBAEgCQABgBADACIAFABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCABIgGgCg")
    this.shape_91.setTransform(54.1544, 32.1163, 2, 2)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#383433")
      .s()
      .p(
        "AgDACQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAKAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAIgBACg",
      )
    this.shape_92.setTransform(53.145, 35.225, 2, 2)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#383433")
      .s()
      .p("AgEABQAAgBAEgBQAEgBABACQACABgGABIgCAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAg")
    this.shape_93.setTransform(47.1488, 33.5933, 2, 2)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#383433")
      .s()
      .p(
        "AgIACQAAgBgBAAQAAAAAAgBQABAAAAAAQAAAAABAAIAEgBIALAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgJABIgEAAIgCAAg",
      )
    this.shape_94.setTransform(47.62, 36.8583, 2, 2)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#383433")
      .s()
      .p("AACACIgIgBQgFgDARACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBACg")
    this.shape_95.setTransform(48.1603, 39.8385, 2, 2)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#383433")
      .s()
      .p(
        "AACACQgHAAgBgCQAAAAAAgBQAAAAABAAQAAgBABAAQABABACAAIAGABQABAAAAAAQABAAAAAAQAAAAAAAAQAAABgBABIgBABIgDgBg",
      )
    this.shape_96.setTransform(41.8909, 39.2464, 2, 2)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#383433")
      .s()
      .p(
        "AgFADIgCgBIAAgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAIgCIAEABQABABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgIADg",
      )
    this.shape_97.setTransform(40.6727, 36.3, 2, 2)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#383433")
      .s()
      .p(
        "AgGABQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAQACgCAGAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIgBABIgIACQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg",
      )
    this.shape_98.setTransform(41.95, 33.35, 2, 2)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#383433")
      .s()
      .p(
        "AgBACQgBAAgBgBQAAAAgBAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIAFABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEAAg",
      )
    this.shape_99.setTransform(47.9733, 30.8889, 2, 2)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#383433")
      .s()
      .p("AgDAAQgGgDALACQAHACgGABg")
    this.shape_100.setTransform(52.8792, 28.9107, 2, 2)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#383433")
      .s()
      .p("AgFgDQABgCAFAEQAHAEgCACQgMgGABgCg")
    this.shape_101.setTransform(58.1139, 30.2607, 2, 2)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#383433")
      .s()
      .p("AAEADIgIgCQgFgBAGgCQAGgBAEADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgCAAg")
    this.shape_102.setTransform(52.3308, 25.9709, 2, 2)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#383433")
      .s()
      .p(
        "AgDAAQAGgCACABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgHAAQgGAAAFgCg",
      )
    this.shape_103.setTransform(45.8075, 28.0438, 2, 2)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#383433")
      .s()
      .p("AgHACQABgCAHgCQAHgCAAADQAAABgIABIgGADQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg")
    this.shape_104.setTransform(39.2286, 30.4082, 2, 2)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#383433")
      .s()
      .p("AgEADQgHgCAQgDQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAAAIgFACIgEABIgBAAg")
    this.shape_105.setTransform(35.0639, 34.2569, 2, 2)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#383433")
      .s()
      .p(
        "AgFAAIgBAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAKABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgDAAQgHAAgBgCg",
      )
    this.shape_106.setTransform(34.6333, 38.0833, 2, 2)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#383433")
      .s()
      .p("AgBACIgDgCQgDgDALADQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBABIgCABIgCAAIgCAAg")
    this.shape_107.setTransform(30.35, 36.1719, 2, 2)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#383433")
      .s()
      .p("AgEACQgBgBAFgCQAEgDABACQABACgGACIgDACQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAgBg")
    this.shape_108.setTransform(31.5097, 32.7361, 2, 2)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#383433")
      .s()
      .p("AgDAEQgGgBANgGQAEAAgEADIgEADIgDABIAAAAg")
    this.shape_109.setTransform(35.4158, 28.9575, 2, 2)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#383433")
      .s()
      .p(
        "AgFAAIACgBIADAAIACAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAgBABIgFAAIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAg",
      )
    this.shape_110.setTransform(45.5773, 24.6563, 2, 2)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#383433")
      .s()
      .p("AgEABIACgBQAFgCABAAQAFACgLADIgBAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAABgBg")
    this.shape_111.setTransform(39.3345, 25.65, 2, 2)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#383433")
      .s()
      .p("AAAACQgJgCADgBQABgCAHACQAHABgBACQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgFgBg")
    this.shape_112.setTransform(48.6465, 22.625, 2, 2)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#383433")
      .s()
      .p("AgHACQAAgCAHgBQAIgCAAACQABABgIACIgGABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg")
    this.shape_113.setTransform(41.9029, 22.9, 2, 2)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#383433")
      .s()
      .p("AgFACIAEgCQAFgEABABQADACgFACQgEADgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg")
    this.shape_114.setTransform(35.4533, 25.18, 2, 2)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#383433")
      .s()
      .p("AgEAEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQADgEACAAQAEAAgEAEIgFAEIgBABIgBgBg")
    this.shape_115.setTransform(31.55, 28.3389, 2, 2)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#383433")
      .s()
      .p("AgCAGQgDgCAFgFQABgFACAAQAAABABAAQAAAAAAABQAAAAAAABQAAABgBAAIgCADIgBAEIgBACIgBgBg")
    this.shape_116.setTransform(28.375, 32.024, 2, 2)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#383433")
      .s()
      .p(
        "AgDAGQgDgBgBgCQgBgCADgCQACgDADgBQAGgBACADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgCADgCABIgEABIgCAAg",
      )
    this.shape_117.setTransform(15.575, 4.8375, 2, 2)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#383433")
      .s()
      .p(
        "AAUAjQgTgGgYACIgPABIAOgLIAFgFQAIACACgCQAEgFgIgOQgIgPgLgLIgIgHQATALAMADQAKADASgBIATgCQAIADgRAQIgSAOQAVAKgCAOQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgHgCg",
      )
    this.shape_118.setTransform(67.4612, 33.9633, 2, 2)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#383433")
      .s()
      .p("AgEAEIAAgEIABAAQADgFADACQACABgBADQgBAEgFAAg")
    this.shape_119.setTransform(7.7833, 8.1429, 2, 2)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#836D65")
      .s()
      .p("AAAADIgDgDIABgCQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAFAFgBABIgBAAIgDgBg")
    this.shape_120.setTransform(30.28, 43.4833, 2, 2)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#836D65")
      .s()
      .p("AgBABQgCgEACgBQABAAACAEQACAEgCABIgBAAQgBAAgBgEg")
    this.shape_121.setTransform(25.5, 38.0617, 2, 2)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#836D65")
      .s()
      .p("AAAAFQgBgBAAgEQgBgEACgBQACAAAAAFQABAGgCAAIgBgBg")
    this.shape_122.setTransform(23.9798, 29.4095, 2, 2)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f("#836D65")
      .s()
      .p("AgBACQgDgEACgBQACgBACAEQADADgCABIgBABQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAg")
    this.shape_123.setTransform(25.4958, 41.8915, 2, 2)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f("#836D65")
      .s()
      .p(
        "AAAADQgDgFABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAFQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg",
      )
    this.shape_124.setTransform(22.8216, 43.85, 2, 2)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f("#836D65")
      .s()
      .p("AAAACQgCgCAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIADAFIgBABIgCgCg")
    this.shape_125.setTransform(19.55, 40.1135, 2, 2)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f("#836D65")
      .s()
      .p(
        "AABAFIgCgDIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAABIABAGIAAABIgBAAg",
      )
    this.shape_126.setTransform(21.6667, 36.7986, 2, 2)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f("#836D65")
      .s()
      .p("AgCAAQgBgEADgBQABAAABAFQACAFgDABIAAAAQgCAAgBgGg")
    this.shape_127.setTransform(20.85, 31.3497, 2, 2)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f("#836D65")
      .s()
      .p("AAAAEIgBgCQgBgCABgCQADgEAAAJQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg")
    this.shape_128.setTransform(20.975, 26.1658, 2, 2)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f("#836D65")
      .s()
      .p("AgBAAQgCgEADgBQABAAABAFQACAFgDABQgBAAgBgGg")
    this.shape_129.setTransform(18.55, 34.2462, 2, 2)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f("#836D65")
      .s()
      .p("AgBAGQgBgMACAAQACABAAAGQAAAGgCAAIgBgBg")
    this.shape_130.setTransform(17.1583, 28.1133, 2, 2)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f("#836D65")
      .s()
      .p("AgCAAQgBgFADgBQABAAABAGQACAGgDAAIAAABQgBAAgCgHg")
    this.shape_131.setTransform(19.0777, 23.0089, 2, 2)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f("#836D65")
      .s()
      .p(
        "AgBA5IgYgFIgmgFQgKgDgJgGQgRgPABgUQABgVAXgRQATgPAXgFQAZgFAbAJQAbAKAUARIAIAHQAKALAIAOQAIAPgDAFQgCACgJgCQgKgCgRgHQAFADABAFQABAHgKADQgLAFgRgGIgCgBIADACQAGAEACAEIAAABQAAAEgIAEQgGADgCAAIgNABIgKgBgAAEArIAJAAIAFAAIABgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgJAAQgHAAADADgAgaAmQAAACAJAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAgBAAAAQABgBgBAAQAAAAAAgBQAAAAgBAAIgIgBIgCAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABgAg/AfIABACQABACAIAAIADgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgLgBIAAAAIgCAAgAAEAZIgEABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABACAEgCIAKAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgCAAIgKABgAggAXQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIAAACIACAAIAEAAIAIgCQABAAABAAQAAAAABAAQAAgBAAAAQgBAAAAgBIgEgBgAhTAXIAEACIAFAAIACgBQABgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgIgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAgAAfARQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAQABAAABAAIALAAIABgCQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgFgBIgGABgAgwAKQgSAFAIACIAFgBIAFgCQABgBAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAIAAAAgAAFAIQgFABABACQAAACAGgBQAFgBgCgCIgCgBIgDAAgABCAKQABACAFAAQABAAABAAQABAAABAAQAAAAAAgBQAAAAAAgBQgGgDgCAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABgAgXAIQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAQABAAABAAIAJgCIABgCQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQgGAAgDACgAhIAEQgFADAAABQAAADAGgDQAGgDgBgCIgCgBIgEACgAhYAAQgFAHADACQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgDIACgEQABAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAIAAAAQgCAAgCADgAAkAAQgEADAGABQAHADACgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgBIgDgBIgCAAgAAEgCQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAQAGABACgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgBIgFAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABgAA2gJQAAACAMAGQADgCgHgEQgEgDgCAAIgCABgAgggIQgIACgBADQgBADAJgDQAIgCAAgCQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgFABgAgwgQQgOAHAGABIAEgBIAEgDQABgBABgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIgBAAgAAegMIAIACQAFgBgGgDIgGgBQgBAAgBAAQAAABAAAAQAAAAAAABQABAAAAABgAhLgPQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAgBIAGgFQAEgEgEAAQgDAAgEAFgAgEgRQgFADAGAAIAHgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgBIgGACgAAbgeQgFADAEABIAKACQAFABgDgEQgCgDgGAAIgDAAgAgjgeIgDADQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQANgDgFgCIgBAAIgGABgAg2ggIgDADQgBAAAAABQAAAAAAABQAAAAABAAQAAAAABAAQACAAAFgDQAFgDgCgCIgBAAQgCAAgFADgAgHgiQgCADAEAAIAFgBQABAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgCABIgDAAgAgUgsQgIACAAACQABACAIgCQAIgCAAgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgHABgAAGguQgDADAJABQAIACABgCQABgCgHgCIgGgBIgDABg",
      )
    this.shape_132.setTransform(45.9551, 31.5603, 2, 2)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f("#E09E55")
      .s()
      .p(
        "AgbAOIgCgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQACgCAGAAQAJAAANgKIARgPIADgDIABADQgCARADACQAEAEABACQAAACgBAEIADAIIAAACIgBAAIAAAAIgdABQgOgBgNgIgAAFAAIgBAAIAAAEIACABQAFAAACgEQABgDgCgBIgCgBQgDAAgCAEg",
      )
    this.shape_133.setTransform(6.0833, 8.15, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
        .wait(1),
    )

    // Calque_2
    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f("rgba(0,0,0,0.169)")
      .s()
      .p(
        "AnjAfQhYgEgvgPQgvgOAhgNQgPgHDDgEIDigFQAZgBAfAFQAeAFgVABQgRABgIAJQgIALgHAHQgLALhZAIQhDAGhAAAIgzgBgAHgAOQgsgCgYgJQgXgHAQgHQgHgFBigCIBygCQAMgCAQADQAPADgLABQgIABgEAFIgIAJQgFAHgtAEQggAEgeAAIgegBgABoAOQgsgCgYgJQgYgHARgHQgIgFBigCIBygCQANgCAPADQAQADgLABQgIABgEAFIgIAJQgGAHgtAEQgfAEgfAAIgdgBg",
      )
    this.shape_134.setTransform(85.3769, 46.6087)

    this.timeline.addTween(cjs.Tween.get(this.shape_134).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.canards, new cjs.Rectangle(0, 0, 151.5, 49.8), null)
  ;(lib.bulle3 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape.setTransform(123.475, 82.875)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABguIAAgBIgBgTQAAgVAHABQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAIIgBAIIABAaIAAAZIgBAJIAAACIgBARIAAARQAAAOAHAAIAAAAIADAAIAFgBQALABAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEADQgIgDgKAAg",
      )
    this.shape_1.setTransform(117.925, 82.9)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBFQgEgDgDgGQgHgMgBgQQgCgPAAgMIAAgFIAAgDIAAgBIAAgDIAAgPIACgVQABgLAEgKQABgEADgCQACgCADAAQAIAAAGADQAHADAEAGQAFAFADAHQADAJABAIQABAJAAAJIAAACIAAALIABAMQAAA9gcAAQgFAAgFgEgAgNg0QgCAGAAAKIABAHIAAAGIgBAKIAAAJIAAAVQABARAEAPQADAPAGAAQADAAADgDQAEgDABgGQAEgKABgMIABgTIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAJg",
      )
    this.shape_2.setTransform(110.875, 82.8)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAABGIgGgDQgOgJAAgoIAAgGIAAgHIAAgFIAAgOIAAgOIACgOIAFgLQACgGADgEQAFgDAEgCQAFgDAIAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEACIgKAAQgEAAgCAGQgDAFgBAIQgDAQAAAKIAAABIgBATIAAAUIAAANQACAIACAFQADAGAFACQADACAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAFABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAAJgMAAIgKgCg",
      )
    this.shape_3.setTransform(104.3, 82.825)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAHAAIACAAIACAAIADgBIAAgEIAAgLIgCgSIgCgwIAAgLIAAgLIAAgLIgFABQgFAAAAgFQAAgDADgCIAIgDIAOgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAIgBAAIgEABIgBAEQAAAUADAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgBABIgFAAIgIAAQgSAAAAgGg",
      )
    this.shape_4.setTransform(98.8, 82.675)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAFAoQgOgxgKgrIAABEIABAeIABAeQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGABQgEAAAAgDIAAgHIAAgIIgBgkIgBgdIAAgbIABgTIABgUIAAgBQAAgKAEAAQADAAAEAJQAHAPAKAnQAGAWAIAkIADAOIAAACIAAgCIABgjIAAgkIAAg+QABgGAGAAQAGAAAAAJIAAABQgCACAAAEIAAAnIgBAmIAABAQAAAEgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgFAAgNgsg",
      )
    this.shape_5.setTransform(91.95, 81.625)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_6.setTransform(81.025, 82.875)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAIA+QgEgLgCgMIgCgHIgHghIgCAAIAAAKIAAALQAAAdADAPIgCAHIgGAAIgCgDIAAgPIgCg4IgCg6QAAgKAHAAQAMAAAFAGQAIAFAAALIAAAPIgBAHIgCAHIgFAIIgDAGIABAFIADAOIAGAaQACALAFAHIABADIACAHQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgGAAgDgKgAgJg+IAAABIAAAZIABAZQAEgDADgKQACgLABgJQgBgGgBgGIgDgGQgCgBgDAAg",
      )
    this.shape_7.setTransform(75, 82.85)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAABWQgCAAgCgCQgCgCgBgDIAAgGIAAgEIAAgEIAAgOIgBgNIABgfIABgeIgBgJIgBgIQAAgQAIAAQAHAAAJADQAKADAAAEQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgFADQgIgEgIgBIABAJIgBAQIAAAPIAAADIAEAAIAEAAQAKAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgDAAIgGAAIgFAAIABAQIgBATIAAATIAAAMIAHAAIAJgBQAIAAAAAFQAAADgDACQgCACgEAAgAAAhCIgRgGQgJgEAAgBQAAgCADgDQACgDACAAIAKAEIAPAKQAIAEAAACQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgMgDg",
      )
    this.shape_8.setTransform(67.925, 81.425)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAIAkIAAgMIABgKIAAAAIAAgCIAAgFIgBgBIgBgBIgEABIgGgBIgGgBIAAAYIABARIAAASQAAADgCACQgBACgDAAQgEAAgCgHQgCgJAAgMIABgSIAAgPIAAgDIAAgDIAAgEIAAgBIAAgMIAAgYIgBgYQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAGAAAAANIgBAaIAAAaIALABIAIAAIAAgCIgCgeIgBgeQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIADABIADABQAAAeACAxIABA1QABADgDACQgCACgDAAQgHAAAAgjg",
      )
    this.shape_9.setTransform(62.2, 82.625)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABBGIgHgDQgOgJgBgoIAAgGIAAgHIAAgFIAAgOIABgOIADgOIAEgLQACgGAEgEQAEgDAEgCQAGgDAHAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEACIgKAAQgEAAgCAGQgDAFgCAIQgCAQAAAKIAAABIAAATIgBAUIABANQAAAIADAFQACAGAGACQADACAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAFABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAJgLAAIgJgCg",
      )
    this.shape_10.setTransform(55.9, 82.825)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_11.setTransform(45.675, 82.725)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAhA+IAAgNIAAgOIgCgcIgCgZIABgNIAAgNIgHAdIgMAvQgHAUgEAAQgDAAgCgCQgDgCAAgFQAAgJgHgeIgOgwIgBAXIgCAyIgBAaIABADIAAADQAAAEgCACQgBABgEAAIgEgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgVADgqQADgrAAgWIgBgEQAAAAAAgBQAAAAAAgBQABgBAAAAQABAAAAgBQADgBADAAQADAAAHAUQAIAUAHAZQAHAYABALIADgKIABgGIAOg0QAEgPAEgIQADgJAEAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIACAuIABArIAAALIAAALIAAAIIABAHIAAADIAAABIABAEQAAAEgCACQgCADgDAAQgGAAAAgNg",
      )
    this.shape_12.setTransform(36.675, 83.275)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_13.setTransform(113.325, 57.725)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABBGIgHgDQgPgJAAgoIAAgGIAAgHIAAgFIAAgOIACgOIACgOIADgLQADgGAEgEQADgDAFgCQAGgDAHAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgCACIgKAAQgFAAgCAGQgDAFgCAIQgCAQAAAKIAAABIAAATIgBAUIABANQABAIACAFQACAGAGACQADACAEAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIAEABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAJgLAAIgJgCg",
      )
    this.shape_14.setTransform(107.4, 57.675)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_15.setTransform(101.025, 57.575)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgUQAAgTAHgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBAQIAAARQAAAPAHAAIAAAAIADAAIAFAAQALAAAAAGQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgEABQgIgCgKAAg",
      )
    this.shape_16.setTransform(95.575, 57.75)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPBFQgDgLAAgVIABgTIAAgSIgBgEIAAgBQACgEAAgOIAAgKIABgKQAAgNgCgHIACgFQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAJAAQAFAAAEADQAFACADAFQADAJAAAMIAAAMQAAAHgCAFIgBAFIgEADQgDAFgHACIgGACIAAAXIABAOIAAAGIABAUQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFACgAgFgvIAAAWIABAPIAAAEIAAABQALgDAAghIAAgJIgCgFIgEgCIgDgBIgDgBg",
      )
    this.shape_17.setTransform(89.7, 57.85)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_18.setTransform(79.725, 57.725)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRBGQgGAAAAgbIABgiIAAggIgBgUIgBgTQAAgDACgCQACgCADAAQAHAAAHADQAGADAGAGQALANADAQQACAHAAAIIAAAFIAAAGIAAAKIgBAWQgBAKgEAIQgEAJgIAHIgJAGgAgLglIACAtIABAvIAAAFQAEAAAEgCQADgDACgDIAEgJIADgKQACgJAAgKIAAgIQAAg/gYgCIgBAWg",
      )
    this.shape_19.setTransform(73.025, 57.625)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBFQgDgCAAgDIADgEIADABIAGABQADAAACgDQADgEACgFQACgKAAgIQAAgOgIgPIgCgEIgHgMIgEgMQgCgIAAgIQAAgKADgJQACgGAFgCQADgDAFgBQADABAEACQADACAAADQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgEABIgEgBQgDAAgDAIQgDAHABAFQAAAGABAGQACAGADAGIAEAIIAIAMQADAGABAJQACAHAAAIQAAANgGAMQgDAGgGADQgEAEgGAAIAAABQgEgBgDgDg",
      )
    this.shape_20.setTransform(62.65, 57.6)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgFQgFgJgBgKQgCgKAAgOIgBg3IAAgQIAAgEIAAgJQACgFACAAQADAAACAEQACAEAAAEIAAA4IABAWIACAXQAAAQAMAAQAPAAAAhxIAAgLIAAgCIAAgCIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAEIAAAFIgBALIAAAKIgBAJIAAAJIAAABIAAADQAABcgaAAQgFAAgEgCg",
      )
    this.shape_21.setTransform(56.325, 57.55)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgUQAAgTAHgBQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBAQIAAARQAAAPAHAAIAAAAIADAAIAFAAQALAAAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgEABQgIgCgKAAg",
      )
    this.shape_22.setTransform(50.175, 57.75)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPBFQgDgLAAgVIABgTIAAgSIgBgEIAAgBQACgEAAgOIAAgKIABgKQAAgNgCgHIACgFQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAJAAQAFAAAFADQAEACADAFQADAJAAAMIAAAMQAAAHgCAFIgBAFIgEADQgDAFgHACIgGACIAAAXIABAOIAAAGIABAUQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFACgAgFgvIAAAWIABAPIAAAEIAAABQALgDAAghIAAgJIgCgFIgEgCIgDgBIgDgBg",
      )
    this.shape_23.setTransform(44.25, 57.85)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAHAAIACAAIACAAIACgBIABgEIgBgLIgBgSIgCgwIAAgLIAAgLIAAgLIgFABQgFAAAAgFQAAgDADgCIAIgDIAOgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQABAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgCAAIgEABIgBAEQABAUACAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgCABIgEAAIgIAAQgSAAAAgGg",
      )
    this.shape_24.setTransform(114.8, 32.425)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_25.setTransform(109.125, 32.475)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgCAUQgBAAgBgNIgBgVQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIADgCQAEAAACAFIgBABIABAAIAAABQgBAKgCAKQgDAMgCAAg",
      )
    this.shape_26.setTransform(103.3, 25.175)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAQBGIgBgGIgCgDIAAgBIAAAAQAAgIgNgoIgXg7IAABpIABACIABABIAAACQAAADgBACQgCACgDAAQgHAAAAgNIAAgkIAAgkIAAgTIABgUQAAgJAIgHIAAACIABgBQAFAAAIARIAKAdIAMApIACAIIAHAZQAEguAAg8IAAgEIAAgCQAAgHAFAAQADAAACADQABACAAAEIAAAPIgCBGQgCAmgDAFIgIACIgEgBg",
      )
    this.shape_27.setTransform(95.425, 32.45)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_28.setTransform(83.725, 32.625)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgXBNIAAgCIAAgDIADgCQAKgCAEgFQAFgGABgRIgCg1IgBg2IAAgBIgCAAIgDAAIgGgCQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAEgCIAYACQANABAAACQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgEACIgLAAIABAsIABArIAAAXIgBAMQgCAJgEAFQgEAHgJADQgFABgGAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg",
      )
    this.shape_29.setTransform(77.6, 33.55)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBWQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDACQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgDIABgFIABgNQABgEABgDIAHAAQADAAACACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAQAEAgQAEAfAAAOIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAsQADABAOACIAAgIQAAgTgEgcIgCgXIgLBLgAABhEIgRgGQgIgDAAgBQAAgDACgDQACgDADAAIAKAFIAPAJQAHAFAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgNgDg",
      )
    this.shape_30.setTransform(68.075, 30.9)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgTQAAgVAHAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBAQIAAARQAAAPAHAAIAAAAIADAAIAFAAQALAAAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEACQgIgCgKAAg",
      )
    this.shape_31.setTransform(62.675, 32.65)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBWQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDACQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgDIABgFIABgNQABgEABgDIAHAAQADAAACACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAQAEAgQAEAfAAAOIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAsQADABAOACIAAgIQAAgTgEgcIgCgXIgLBLgAABhEIgRgGQgIgDAAgBQAAgDACgDQACgDADAAIAKAFIAPAJQAHAFAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgNgDg",
      )
    this.shape_32.setTransform(56.125, 30.9)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgTQAAgVAHAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBAQIAAARQAAAPAHAAIAAAAIADAAIAFAAQALAAAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEACQgIgCgKAAg",
      )
    this.shape_33.setTransform(50.725, 32.65)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgGBRQgEgEgEgGQgGgMgDgUQgCgNgBgSIAAgLIAAgLIAAgNIABgXQAAgKAEgKQADgIAHgEQADgCAEAAQAKAAAHAJQAHAKACAMQAEAPAAAOIABAbIAAAMIgBAOIgBANIAAABQgBAGAAAIQAAAFgDAHQgCAGgFAFQgEAFgGAAQgFAAgFgEgAgLhAQgDAIgBALIgBAVIgBAHIAAAIIAAABQAAANADAVQAEAcAGAMQAEAHAEAAQAEAAADgIQADgHABgKIACgWIAAgPIAAgSIgCgcQgCgPgFgLQgCgFgDgDQgDgDgDAAQgFAAgDAIg",
      )
    this.shape_34.setTransform(43.625, 31.575)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#4A5689")
      .s()
      .p(
        "A2keBIAAgUQA4grBqhGQBzhMAvgiQC1iGBLiPQBaiaAAj2Qhvgph2g4Qhegth/hEIgKgUQkmiXi7jyQjNkKgOksQgZmmCDldQCUmLFGjqIBag8IAZgLQAMgGANgNQAGgGAJgCQAFgCAKAAIAKgNQAEgHAGAAQAKgFAUgFQAUgFAKgFQAFAAAFgKQAFgKAFAAQFKiJGkghQBxgGCiAJQBbAFC3AMQCgAUBaAKQAOAAAVAHQATAFAQAIQGPA+EHB5QFXCdC5EYIAUAKQBICCA6CCIAAAeQA9CsADDXQABCkgjDlQggCsg2CQQg8CcheCJQgTATgVAcIgoA1Qh2CSiwBtQiPBZjLBMQkUBclHAWQkaATlOghQgHAAgIANQgFAHgKAUQg9B5hNBjQhOBlhoBZQjcC2iRBRQjZB5jQAGg",
      )
    this.shape_35.setTransform(76.6482, 75.9704, 0.3956, 0.3956)

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
  }).prototype = getMCSymbolPrototype(lib.bulle3, new cjs.Rectangle(0, 0, 153.4, 152), null)
  ;(lib.bulle2 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgGBOQgCgDAAgDQAAgDADgCQACgDADAAQACAAACADQACADABACQAAAIgIAAQgDAAgCgCgAgBA4QgEAAgBgEQAAgNACgPIAFgkIABgGQADgTAAgMQAAgUgGAAQgDAAAAAKIABALIgBABQgDADgCAAQgGAAAAgOIAAgCIABgJQABgEADgDQAEgDAFAAQAEAAAEACIAFAEQADAFABAKIAAAIQAAATgGAWQgDAJgBANQgCAOAAAOIAAAPIgEAAIgBAAg",
      )
    this.shape.setTransform(107.35, 82.775)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBGQgCgCgBgEIADgDIADABIAGAAQADAAACgDQADgDACgGQADgLgBgHQABgOgJgQIgBgCIgIgNIgEgMQgDgIAAgJQAAgIAFgLQABgEAEgEQAFgDADAAQAEAAADACQADADABAEQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgEABIgEgBQgDABgDAHQgDAIAAAFQABAGACAGQACAHACAEIAEAJIAIANQACAGACAHQACAIAAAJQAAAMgGAMQgDAGgFAEQgFADgHAAIAAAAQgDAAgDgCg",
      )
    this.shape_1.setTransform(97.9, 83.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAGAAIADAAIACAAIADgBIAAgEIAAgLIgCgSIgCgwIAAgLIAAgLIAAgLIgFABQgFAAAAgFQAAgDADgCIAJgDIANgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAIgBAAIgDABIgCAEQAAAUADAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgBABIgFAAIgIAAQgSAAAAgGg",
      )
    this.shape_2.setTransform(93.05, 83.675)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAhA+IAAgNIAAgOIgCgcIgCgZIABgNIAAgNIgHAdIgMAvQgHAUgEAAQgDAAgCgCQgDgCAAgFQAAgJgHgeIgOgwIgBAXIgCAyIgBAaIABADIAAADQAAAEgCACQgBABgEAAIgEgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgVADgqQADgrAAgWIgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgBADAAQADAAAHAUQAIAUAHAZQAHAYABALIADgKIABgGIAOg0QAEgPAEgIQADgJAEAAQADAAACACQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIACAuIABArIAAALIAAALIAAAIIABAHIAAADIAAABIABAEQAAAEgCACQgCADgDAAQgGAAAAgNg",
      )
    this.shape_3.setTransform(84.675, 84.275)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_4.setTransform(75.525, 83.725)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBGQgDgCAAgEIACgDIAEABIAFAAQAEAAACgDQADgDACgGQADgLAAgHQgBgOgHgQIgDgCIgGgNIgFgMQgDgIABgJQAAgIADgLQADgEAEgEQAEgDAEAAQADAAAEACQACADAAAEQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgEABIgEgBQgDABgDAHQgDAIABAFQAAAGABAGQACAHADAEIAEAJIAHANQADAGACAHQACAIAAAJQAAAMgGAMQgDAGgGAEQgEADgGAAIAAAAQgEAAgDgCg",
      )
    this.shape_5.setTransform(65.9, 83.75)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_6.setTransform(60.625, 83.875)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgvIABgvIAAgBIgBgUQAAgTAHAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAIIgBAIIABAaIAAAZIgBAJIAAACIgBARIAAARQAAAOAHAAIAAAAIADAAIAFgBQALAAAAAHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgEADQgIgDgKAAg",
      )
    this.shape_7.setTransform(55.075, 83.9)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBFQgCgCgBgDIACgEIAFABIAEABQAEAAACgDQADgEACgFQACgKAAgJQABgNgJgPIgBgEIgHgMIgFgMQgCgIgBgIQAAgJAFgKQACgGADgCQAFgDADAAQAEAAADACQADACAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgFgBQgDgBgDAJQgDAHAAAFQAAAGADAGQACAGACAGIAEAIIAHAMQAEAHABAIQACAHAAAIQAAANgGAMQgDAFgFAEQgFAEgHAAIAAABQgDgBgDgDg",
      )
    this.shape_8.setTransform(114.45, 58.6)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAHAAIACAAIACAAIADgBIAAgEIAAgLIgCgSIgCgwIAAgLIAAgLIAAgLIgFABQgFAAAAgFQAAgDADgCIAIgDIAOgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAIgCAAIgEABIgBAEQAAAUADAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgBABIgFAAIgIAAQgSAAAAgGg",
      )
    this.shape_9.setTransform(109.6, 58.525)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBDIAAgIIAAgIIAAgIIgDgtIgDg4QgMgBgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAFgBIAOABIAOABIABAAIACAAQAHAAgBAFQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgBIgFgBIAAABIgBABQABATADAoQADAnAAAVQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgDACgDAAg",
      )
    this.shape_10.setTransform(104.05, 58.525)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgFQgFgIgBgLQgCgKAAgOIgBg3IAAgQIAAgEIAAgJQACgFACAAQADAAACAEQACAEAAAEIAAA4IABAXIACAWQAAAQAMAAQAPgBAAhwIAAgLIAAgCIAAgCIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAFIAAAEIgBALIAAAKIgBAJIAAAJIAAACIAAACQAABcgaAAQgFAAgEgCg",
      )
    this.shape_11.setTransform(97.925, 58.55)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBGQgEgEgDgGQgHgNgBgPQgCgOAAgNIAAgFIAAgCIAAgBIAAgFIAAgOIACgWQABgKAEgJQABgEADgDQACgCADAAQAIAAAGADQAHADAEAFQAFAGADAIQADAHABAJQABAJAAAKIAAACIAAAKIABAMQAAA9gcAAQgFAAgFgDgAgNg1QgCAHAAAKIABAHIAAAGIgBAKIAAAJIAAAVQABAQAEAQQADAPAGAAQADAAADgDQAEgDABgFQAEgLABgNIABgSIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAIg",
      )
    this.shape_12.setTransform(90.375, 58.65)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUBEQADgRABglIABgsIAAgFIAAgdQABgDACgCQACgBAEAAIAPABQAFABAEACQACACABACQgBAGgKAAQgEgCgGAAIgDAAIAAADIgBAVIgBAVIAAAGIACAAIACAAQAKAAAAAFQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQgCABgDAAIgHgBIAAA8QAAAJgGAAQgDAAgFgDg",
      )
    this.shape_13.setTransform(84.35, 58.625)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAAAQAAgBgBgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_14.setTransform(78.075, 58.575)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgTQAAgVAHAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBAQIAAARQAAAPAHAAIAAAAIADAAIAFAAQALAAAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEACQgIgCgKAAg",
      )
    this.shape_15.setTransform(72.675, 58.75)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABBGIgHgDQgOgJgBgoIAAgGIAAgHIAAgFIAAgOIABgOIACgOIAFgLQACgGAEgEQAEgDAEgCQAGgDAHAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEACIgKAAQgEAAgCAGQgDAFgBAIQgDAQAAAKIAAABIAAATIgBAUIABANQABAIACAFQADAGAFACQADACAEAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAFABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAAJgMAAIgJgCg",
      )
    this.shape_16.setTransform(66.6, 58.675)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgFQgFgIgBgLQgCgKAAgOIgBg3IAAgQIAAgEIAAgJQACgFACAAQADAAACAEQACAEAAAEIAAA4IABAXIACAWQAAAQAMAAQAPgBAAhwIAAgLIAAgCIAAgCIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAFIAAAEIgBALIAAAKIgBAJIAAAJIAAACIAAACQAABcgaAAQgFAAgEgCg",
      )
    this.shape_17.setTransform(55.775, 58.55)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRBGQgGAAAAgbIABgiIAAggIgBgUIgBgTQAAgDACgCQACgCADAAQAHAAAHADQAGADAGAGQALANADAQQACAHAAAIIAAAFIAAAGIAAAKIgBAWQgBAKgEAIQgEAJgIAHIgJAGgAgLglIACAtIABAvIAAAFQAEAAAEgCQADgDACgDIAEgJIADgKQACgJAAgKIAAgIQAAg/gYgCIgBAWg",
      )
    this.shape_18.setTransform(48.475, 58.625)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTBFQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgMAEgVIAPgyIALgpIgIABIgIABQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgGAWAAQALAAAAAGQAAAGgEAOQgFALgBAHQgCAPgJAgIgJAlIAFAAIAEAAIAEgBQAIAAAAAFQAAABAAAAQAAABgBABQAAAAAAAAQgBABgBAAQgCACgCAAIgGgBIgGAAIgDABIgFABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg",
      )
    this.shape_19.setTransform(114, 33.475)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_20.setTransform(108.025, 33.625)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgCQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgwIABgtIAAgCIgBgTQAAgVAHAAQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAIIgBAIIABAZIAAAYIgBAJIAAADIgBARIAAAQQAAAPAHAAIAAAAIADAAIAFgBQALABAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEACQgIgCgKAAg",
      )
    this.shape_21.setTransform(102.475, 33.65)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgFQgFgIgBgMQgCgJAAgNIgBg4IAAgPIAAgFIAAgKQACgEACAAQADAAACAEQACADAAAFIAAA4IABAXIACAWQAAAQAMAAQAPgBAAhwIAAgMIAAgBIAAgCIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAFIAAAEIgBALIAAALIgBAIIAAAJIAAACIAAACQAABcgaAAQgFAAgEgCg",
      )
    this.shape_22.setTransform(95.375, 33.45)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBGQgEgEgDgGQgHgMgBgQQgCgOAAgNIAAgFIAAgCIAAgBIAAgFIAAgOIACgWQABgKAEgKQABgDADgDQACgCADAAQAIAAAGADQAHADAEAFQAFAGADAIQADAHABAJQABAJAAAKIAAABIAAALIABAMQAAA9gcAAQgFAAgFgDgAgNg1QgCAHAAAKIABAHIAAAGIgBAKIAAAJIAAAVQABAQAEAQQADAPAGAAQADAAADgDQAEgDABgGQAEgKABgMIABgTIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAIg",
      )
    this.shape_23.setTransform(87.825, 33.55)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBGQAAgYgFgaQgEgZgKgmIgCgGQgEgMAAgDIACgEIADgBQAEAAACAFQADAFACAJIAGAVIAGAkIABAIIABATIACALIALhCIAIgzIAFAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIACADIgCARIgFAVIgEAQIgCAPQgCAagDAUQgDAMgDAHQgEAHgEAAg",
      )
    this.shape_24.setTransform(80.075, 33.375)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBFQgCgBgBgEIADgEIADACIAGAAQADAAACgDQADgDACgGQADgKgBgJQABgNgJgPIgBgDIgIgNIgEgMQgDgIAAgJQAAgIAFgKQACgFADgEQAFgCADAAQAEAAADACQADACABAEQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgDAAIgFAAQgEgBgCAJQgDAHAAAFQABAGACAGQACAGACAGIAEAIIAIAMQACAHACAIQACAHAAAJQAAAMgGAMQgDAFgFAEQgFAEgHAAIAAABQgDgBgDgDg",
      )
    this.shape_25.setTransform(70, 33.5)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgFQgFgIgBgMQgCgJAAgNIgBg4IAAgPIAAgFIAAgKQACgEACAAQADAAACAEQACADAAAFIAAA4IABAXIACAWQAAAQAMAAQAPgBAAhwIAAgMIAAgBIAAgCIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACAFIAAAEIgBALIAAALIgBAIIAAAJIAAACIAAACQAABcgaAAQgFAAgEgCg",
      )
    this.shape_26.setTransform(63.675, 33.45)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBGQgEgEgDgGQgHgMgBgQQgCgOAAgNIAAgFIAAgCIAAgBIAAgFIAAgOIACgWQABgKAEgKQABgDADgDQACgCADAAQAIAAAGADQAHADAEAFQAFAGADAIQADAHABAJQABAJAAAKIAAABIAAALIABAMQAAA9gcAAQgFAAgFgDgAgNg1QgCAHAAAKIABAHIAAAGIgBAKIAAAJIAAAVQABAQAEAQQADAPAGAAQADAAADgDQAEgDABgGQAEgKABgMIABgTIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAIg",
      )
    this.shape_27.setTransform(56.125, 33.55)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBGQAAgYgFgaQgEgZgKgmIgCgGQgEgMAAgDIACgEIADgBQAEAAACAFQADAFACAJIAGAVIAGAkIABAIIABATIACALIALhCIAIgzIAFAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIACADIgCARIgFAVIgEAQIgCAPQgCAagDAUQgDAMgDAHQgEAHgEAAg",
      )
    this.shape_28.setTransform(48.375, 33.375)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#E8A334")
      .s()
      .p(
        "EgdpAhJIAAgUQBVg+C9hsQCxhmBZhEQBzhcAdgcQBKhIAghOQAuhiAdiAQAHgcAmjOQnajKkvjsQmEktilmGQhYjcAQj0QAPjpBrjfQAAgFAKgFQAKgFAAgFQBnjODCizQCTiJD2ieQKZmMKtgOQFbgOF9BtQE2BYF9C7QB4A8A8AoQBQAyCMBaQBQA8CMB4QBIA6A6BIQC0DDBpDYQByDoAVD3QAAAeAFA3QAFA3AAAeIgMCuQgJBjgTBMQgoBugWA2QgmBZgoBDIgUAKQiDDWjrCPQi+B0kSBNQm5CFoDAMQmtAKoWhLQgVDBh1CnQhqCWiwB4QjTCPjWBTQjYBUjvAeQgKgKgeAAg",
      )
    this.shape_29.setTransform(80.7284, 71.9453, 0.3376, 0.3376)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.bulle2, new cjs.Rectangle(0, 0, 161.5, 143.9), null)
  ;(lib.bulle1 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAGAAIADAAIACAAIACgBIABgEIgBgLIgBgSIgCgwIABgLIAAgLIgBgLIgFABQgFAAAAgFQAAgDADgCIAIgDIAOgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIgBAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgDAAIgDABIAAAEQgBAUADAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgCABIgEAAIgIAAQgSAAAAgGg",
      )
    this.shape.setTransform(111.45, 59.375)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgEQgFgKgBgLQgCgJAAgNIgBg3IAAgQIAAgFIAAgKQACgEACAAQADAAACADQACAFAAAEIAAA5IABAVIACAXQAAAPAMAAQAPABAAhxIAAgMIAAgCIAAgBIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIACADIAAAFIgBALIAAALIgBAIIAAAJIAAABIAAACQAABdgaAAQgFAAgEgCg",
      )
    this.shape_1.setTransform(105.225, 59.4)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAIAkIAAgMIABgKIAAAAIAAgCIAAgFIgBgBIgBgBIgEABIgGgBIgGgBIAAAYIABARIAAASQAAADgBACQgCACgDAAQgEAAgBgHQgDgJAAgMIABgSIAAgPIAAgDIAAgDIAAgEIAAgBIAAgMIAAgYIgBgYQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQAHAAAAANIAAAaIAAAaIAKABIAIAAIAAgCIgBgeIgCgeQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAFABIACABQAAAeABAxIACA1QAAADgCACQgCACgDAAQgHAAAAgjg",
      )
    this.shape_2.setTransform(97.95, 59.325)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgCAUQgBAAgBgNIgBgVQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIADgCQAEAAACAFIgBABIABAAIAAABQgBAKgCAKQgDAMgCAAg",
      )
    this.shape_3.setTransform(91.7, 52.125)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRBGQgGAAAAgbIABgiIAAggIgBgUIgBgTQAAgDACgCQACgCADAAQAHAAAHADQAGADAGAGQALANADAQQACAHAAAIIAAAFIAAAGIAAAKIgBAWQgBAKgEAIQgEAJgIAHIgJAGgAgLglIACAtIABAvIAAAFQAEAAAEgCQADgDACgDIAEgJIADgKQACgJAAgKIAAgIQAAg/gYgCIgBAWg",
      )
    this.shape_4.setTransform(85.375, 59.475)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAIA+QgFgLgCgLIgBgIIgHghIgCAAIAAAKIAAALQAAAdADAPIgCAGIgGAAIgDgCIAAgPIgBg4IgCg6QAAgKAHAAQAMAAAFAGQAIAFAAALIAAAPIgBAHIgCAHIgFAIIgDAGIABAFIADAOIAGAaQADALAEAIIABACIACAHQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgFAAgEgKgAgJg+IAAABIAAAZIABAZQAEgDADgKQACgLAAgJQABgGgCgGIgCgGQgDgBgDAAg",
      )
    this.shape_5.setTransform(78.7, 59.55)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgEQgFgKgBgLQgCgJAAgNIgBg3IAAgQIAAgFIAAgKQACgEACAAQADAAACADQACAFAAAEIAAA5IABAVIACAXQAAAPAMAAQAPABAAhxIAAgMIAAgCIAAgBIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIACADIAAAFIgBALIAAALIgBAIIAAAJIAAABIAAACQAABdgaAAQgFAAgEgCg",
      )
    this.shape_6.setTransform(71.525, 59.4)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBFQgEgDgDgGQgHgMgBgQQgCgOAAgOIAAgEIAAgDIAAgBIAAgDIAAgPIACgVQABgLAEgKQABgEADgCQACgCADAAQAIAAAGADQAHADAEAGQAFAFADAHQADAJABAIQABAJAAAJIAAACIAAALIABAMQAAA9gcAAQgFAAgFgEgAgNg0QgCAGAAALIABAGIAAAGIgBAJIAAAKIAAAWQABAQAEAOQADAQAGAAQADAAADgDQAEgDABgGQAEgKABgMIABgTIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAJg",
      )
    this.shape_7.setTransform(63.975, 59.5)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYBMIAAgCIABgBIADgCQAKgEADgDQAHgHAAgRIgBg1IgCg2IAAgBIgCAAIgDgBIgGAAQgBgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAFgBIAXABQAOACAAACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgFAAIgKAAIABAtIABAsIAAAWIgBANQgCAHgEAGQgDAGgKADQgEACgHAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBg",
      )
    this.shape_8.setTransform(57.2, 60.5)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgEQgFgKgBgLQgCgJAAgNIgBg3IAAgQIAAgFIAAgKQACgEACAAQADAAACADQACAFAAAEIAAA5IABAVIACAXQAAAPAMAAQAPABAAhxIAAgMIAAgCIAAgBIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIACADIAAAFIgBALIAAALIgBAIIAAAJIAAABIAAACQAABdgaAAQgFAAgEgCg",
      )
    this.shape_9.setTransform(50.975, 59.4)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_10.setTransform(43.925, 59.425)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAQBFIgBgEIgCgFIAAAAIAAgBQAAgGgNgpIgXg7IAABpIABABIABACIAAACQAAADgBACQgCACgDAAQgHAAAAgNIAAgkIAAgjIAAgUIABgTQAAgLAIgFIAAABIABAAQAFAAAIARIAKAcIAMAqIACAHIAHAYQAEgtAAg9IAAgCIAAgDQAAgGAFgBQADABACACQABACAAAEIAAAQIgCBFQgCAmgDAFIgIABIgEgBg",
      )
    this.shape_11.setTransform(121.475, 34.3)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBFQgEgDgDgGQgHgNgBgPQgCgOAAgOIAAgEIAAgDIAAgBIAAgDIAAgPIACgVQABgLAEgJQABgEADgDQACgCADAAQAIAAAGADQAHADAEAGQAFAFADAHQADAJABAIQABAJAAAJIAAACIAAALIABAMQAAA9gcAAQgFAAgFgEgAgNg0QgCAGAAALIABAGIAAAGIgBAJIAAAKIAAAWQABAQAEAOQADAQAGAAQADAAADgDQAEgDABgFQAEgLABgNIABgSIgBgYIgCgYIAAgEQAAgIgFgGQgFgGgGAAQgHAAgDAJg",
      )
    this.shape_12.setTransform(112.675, 34.4)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRBEIgBgHIABgWIABgXIABggIAAgiIgBgFIAAgGIAAgBQAAgEABgDQACgCAEAAQAFAAAGADQAGADADAFQAGAKAAAPQAAAMgBAHQgCAIgFAHQAGAEACAJQACAIAAANQAAANgFAKQgFAKgJAEQgFACgGAAQgFAAgBgEgAgFAkIgBAIIAAAHIAAABIAAAAIAAAKQAGgCAEgGQAEgHAAgIIgBgQIgDgJIgDgGQgCgDgDgBIgBAggAgEgnIAAAgQAJgBAAgZQAAgbgHgBQgCAEAAASg",
      )
    this.shape_13.setTransform(105.975, 34.275)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAIA+QgEgLgDgLIgBgIIgHghIgDAAIAAAKIAAAMQAAAcAFAPIgDAGIgGAAIgDgCIAAgPIgCg4IgBg6QAAgKAHAAQALAAAHAGQAHAFAAALIAAAPIgBAHIgDAHIgDAIIgEAGIABAFIADAOIAGAaQACAKAEAJIACACIACAHQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgEgKgAgJg+IgBABIABAZIAAAZQAFgDADgKQACgLAAgJQAAgHgBgFIgCgGQgDgBgEAAg",
      )
    this.shape_14.setTransform(96.1, 34.45)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgIBHQgDAAgCgCQgCgCgBgDIAAgFIAAgEIAAgFIAAgNIgBgOIABgdIABgfIgBgJIgBgJQAAgPAJAAQAHAAAIADQAKADAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADQgIgDgHgBIABAJIgBAPIAAAPIAAAEIAEgBIADAAQAKAAAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgFAAIABAPIgBATIAAATIAAAMIAGAAIAJAAQAIAAAAAFQAAADgDABQgCACgEAAg",
      )
    this.shape_15.setTransform(89.925, 34.475)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBFQgDgLgBgVIABgSIABgTIgCgFIAAAAQADgEAAgOIAAgKIAAgKQAAgMgCgIIADgFQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAJAAQAFAAAEACQAFADACAFQAEAJABALIAAAOQgBAGgCAFIgCAFIgDADQgDAEgGADIgHACIAAAXIABANIAAAHIABAUQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABIgFABgAgFgvIAAAWIABAPIAAAEIAAAAQALgCAAghIgBgKIgCgDIgCgEIgFgBIgCAAg",
      )
    this.shape_16.setTransform(84.15, 34.6)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKBHQgEgCgDgEQgFgKgBgKQgCgKAAgNIgBg3IAAgQIAAgFIAAgKQACgEACAAQADAAACADQACAEAAAFIAAA5IABAVIACAXQAAAPAMAAQAPABAAhxIAAgMIAAgCIAAgBIABgEIAEgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIACADIAAAFIgBALIAAAKIgBAJIAAAJIAAABIAAACQAABdgaAAQgFAAgEgCg",
      )
    this.shape_17.setTransform(76.975, 34.3)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgOBGQgDgCAAgEIACgDIAFAAIAEABQAEAAACgDQADgDACgGQADgLAAgHQgBgOgHgQIgDgCIgGgNIgFgMQgDgIABgJQAAgIADgLQACgEAEgEQAFgDAEAAQADAAAEACQACADAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABIgFgBQgEABgCAHQgCAIgBAFQAAAGACAGQADAHACAEIAEAJIAHANQADAGACAHQACAIAAAIQAAANgGAMQgDAFgGAFQgEADgGAAIAAAAQgEAAgDgCg",
      )
    this.shape_18.setTransform(70.5, 34.35)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AACBDIAAgIIAAgIIAAgIIgCgtIgEg4QgMgBgDgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBIAEgBIAPABIANABIABAAIADAAQAFAAAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgGgBIgEgBIAAABIgBABQAAATAEAoQAEAngBAVQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgDAAg",
      )
    this.shape_19.setTransform(61.05, 34.275)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAGAAIADAAIACAAIACgBIABgEIgBgLIgBgSIgCgwIABgLIAAgLIgBgLIgFABQgFAAAAgFQAAgDADgCIAJgDIANgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIgBAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgDAAIgCAAIgCABIgBAEQAAAUACAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgCABIgEAAIgIAAQgSAAAAgGg",
      )
    this.shape_20.setTransform(56.35, 34.275)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AARBGQgCgBAAgEIgCgWIgBgEIgUgDIgEATQgBALgDADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgFgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgBIAAgBQAOg2AHg0IAAgCIABgGIABgNQABgEABgDIAHAAQADAAACACQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABQAAAQAEAfQAEAgAAANIABAGIACAHIACAMIACAOQAAAEgEACQgFAAgCgCgAgHAcQADACAOABIAAgIQAAgTgEgcIgCgWIgLBKg",
      )
    this.shape_21.setTransform(50.675, 34.325)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgUBEQACgRACglIABgsIAAgFIABgdQgBgDADgCQADgBADAAIAOABQAGABADACQAEACAAACQAAAGgLAAQgEgCgGAAIgDAAIAAADIgBAVIAAAVIAAAGIABAAIACAAQAKAAgBAFQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgCABgDAAIgHgBIAAA8QAAAJgGAAQgDAAgFgDg",
      )
    this.shape_22.setTransform(45.45, 34.375)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgFBFQgEACgDAAQgDAAgCgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgvIABgvIAAgBIgBgUQAAgTAHAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAIIgBAIIABAaIAAAZIgBAJIAAACIgBAQIAAASQAAAOAHAAIAAAAIADAAIAFgBQALAAAAAHQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgEACQgIgDgKAAg",
      )
    this.shape_23.setTransform(36.175, 34.5)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSBAQAAgFAHAAIACAAIACAAIACgBIABgEIgBgLIgBgSIgCgwIAAgLIAAgLIAAgLIgFABQgFAAAAgFQAAgDADgCIAIgDIAOgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIgBAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgDAAIgDABIAAAEQAAAUACAoIACAXIABATIAAAIIAEAAQAJAAAAAIIAAABIgFADIgCABIgEAAIgIAAQgSAAAAgGg",
      )
    this.shape_24.setTransform(30.55, 34.275)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#4A5689")
      .s()
      .p(
        "AWvZlQiDgOiTgqQh0giicg8QgFAAgFgKQgFgKgFAAQhWgihghIQg6gshuhkQhkhkhai0QyTAQtunSQhCgpgvglQg5grgygxQgogog8hQQgyhVgehCQgkhSgOhMQAAgTgIhMQgHg9AFgiQAklrECkxQDnkRFjipQHYjcHeAAQMbgxKODRQCbA2CAA+QCIBCCDBYIAFAGQAFAIAAAGQAFAFAPAFQAPAFAFAFQAAAFAFAFQAFAFAAAFQEHDJByEwQB2E+hfEzIAAAnQgpCFg2BhQhAB0hbBUQjWDCktBxQjwBblPA0QBdDIC6CaQCnCKDgBYQBuAfBaAnIAeAAQAKAKAUAOQAMAKgMAGQg3AihHAIQgXADgbAAQgmAAgugFg",
      )
    this.shape_25.setTransform(79.2568, 60.0786, 0.3657, 0.3657)

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
  }).prototype = getMCSymbolPrototype(lib.bulle1, new cjs.Rectangle(0, 0, 158.6, 120.2), null)
  ;(lib.bicepsdroit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#D4C2BE")
      .s()
      .p(
        "AAfD8QgjgMgYghIhfiFQhGhjgGgfQgGgdBiixQAhAKAcAbQA2A4AXAtIABABQAXAtAdAxIAXAjQCDCPg2BCQgsAwg2AAQgaAAgdgLg",
      )
    this.shape.setTransform(20.0061, 26.0327)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(lib.bicepsdroit, new cjs.Rectangle(0, -0.2, 40, 52.5), null)
  ;(lib.avtbrasdroitcopy = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#FFA47D")
      .s()
      .p(
        "AAFAqQgOgEgGgJQgDgGgCgMIgEgJIgFgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAABAAQAGgBAGAFIAGAJQAGAHACAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBABgBIABgEIACgFQADgHgBgCQgBgHgGgDIgMgFIgDgDIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQACgFAOABQAMACAKAIQAJAIABAPIAAAZIgBAUIgKABQgLAAgGgBIAEABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAg",
      )
    this.shape.setTransform(9.6667, 8.3779, 2, 2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#D4C2BE")
      .s()
      .p(
        "AhWDMIAAjtIACAEQgDgcAviYIA9BCIAiAkQAeAiACAHQACAHgPA7QgQA8gOAoQgPApgQAXQgOAYghAOQgRAIgOAAQgMAAgJgGg",
      )
    this.shape_1.setTransform(10.0864, 46.6644)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AANAdIg9hBIAEgOIADgPIAqAiQAhAaAKAJIADAEQADAFgCAeIgBAXIgiglg")
    this.shape_2.setTransform(10.89, 29.325)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFA47D")
      .s()
      .p("AABAwIgqgiIgDAOIAShbIAqgTIAdAcIgBCJQgKgKghgZg")
    this.shape_3.setTransform(10.875, 21.375)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    )

    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.avtbrasdroitcopy,
    new cjs.Rectangle(1.4, 0, 17.400000000000002, 67.7),
    null,
  )
  ;(lib.avtbrasdroit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#F4DC67")
      .s()
      .p("AAKAOIgHgGQgJgGgHABQgJABgCgJQgBgLAMAAQAZAAAJALQAGAHgCAJQgCAGgFAAQgDAAgFgDg")
    this.shape.setTransform(4.992, 4.9882, 2, 2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#FFA47D")
      .s()
      .p(
        "AAFAqQgOgEgGgJQgDgGgCgMIgEgJIgFgIQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAABAAQAGgBAGAFIAGAJQAGAHACAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBABgBIABgEIACgFQADgHgBgCQgBgHgGgDIgMgFIgDgDIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQACgFAOABQAMACAKAIQAJAIABAPIAAAZIgBAUIgKABQgLAAgGgBIAEABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAg",
      )
    this.shape_1.setTransform(9.6667, 8.3779, 2, 2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#D4C2BE")
      .s()
      .p(
        "AhWDMIAAjtIACAEQgDgcAviYIA9BCIAiAkQAeAiACAHQACAHgPA7QgQA8gOAoQgPApgQAXQgOAYghAOQgRAIgOAAQgMAAgJgGg",
      )
    this.shape_2.setTransform(10.0864, 46.6644)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AANAdIg9hBIAEgOIADgPIAqAiQAhAaAKAJIADAEQADAFgCAeIgBAXIgiglg")
    this.shape_3.setTransform(10.89, 29.325)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFA47D")
      .s()
      .p("AABAwIgqgiIgDAOIAShbIAqgTIAdAcIgBCJQgKgKghgZg")
    this.shape_4.setTransform(10.875, 21.375)

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
  }).prototype = getMCSymbolPrototype(lib.avtbrasdroit, new cjs.Rectangle(0, 0, 18.8, 67.7), null)
  ;(lib.fluxcanard = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_1
    this.instance = new lib.canards()
    this.instance.setTransform(229.3, 22.8, 1, 1, 0, 0, 0, 75.8, 22.8)

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({x: -306.95}, 331)
        .wait(25)
        .to({skewY: 180, x: -307.05}, 0)
        .to({x: 224.8}, 327)
        .wait(22),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-382.7, 0, 687.7, 49.8)
  ;(lib.bulles = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Calque_3
    this.instance = new lib.bulle3()
    this.instance.setTransform(523.5, 240.4, 0.0362, 0.0362, 0, 0, 0, 26.3, 154.7)
    this.instance.alpha = 0
    this.instance._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(158)
        .to({_off: false}, 0)
        .wait(1)
        .to(
          {regX: 76.6, regY: 76, scaleX: 0.6222, scaleY: 0.6222, x: 554.8, y: 191.4, alpha: 0.608},
          0,
        )
        .wait(1)
        .to({scaleX: 0.8304, scaleY: 0.8304, x: 565.3, y: 174.95, alpha: 0.8241}, 0)
        .wait(1)
        .to({scaleX: 0.9192, scaleY: 0.9192, x: 569.75, y: 167.95, alpha: 0.9162}, 0)
        .wait(1)
        .to({scaleX: 0.9631, scaleY: 0.9631, x: 571.95, y: 164.55, alpha: 0.9617}, 0)
        .wait(1)
        .to({scaleX: 0.9834, scaleY: 0.9834, x: 573, y: 162.95, alpha: 0.9828}, 0)
        .wait(1)
        .to({scaleX: 0.993, scaleY: 0.993, x: 573.45, y: 162.15, alpha: 0.9927}, 0)
        .wait(1)
        .to({regX: 26.3, regY: 154.5, scaleX: 1, scaleY: 1, x: 523.5, y: 240.35, alpha: 1}, 0)
        .wait(93)
        .to({alpha: 0}, 8)
        .to({_off: true}, 1)
        .wait(93),
    )

    // Calque_2
    this.instance_1 = new lib.bulle2()
    this.instance_1.setTransform(286.8, 141.4, 0.0209, 0.0209, 0, 0, 0, 26.4, 141.2)
    this.instance_1._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(82)
        .to({_off: false}, 0)
        .wait(1)
        .to({regX: 80.7, regY: 71.9, scaleX: 0.6353, scaleY: 0.6353, x: 321.3, y: 97.35}, 0)
        .wait(1)
        .to({scaleX: 0.858, scaleY: 0.858, x: 333.4, y: 81.9}, 0)
        .wait(1)
        .to({scaleX: 0.9546, scaleY: 0.9546, x: 338.65, y: 75.25}, 0)
        .wait(1)
        .to({scaleX: 0.9887, scaleY: 0.9887, x: 340.5, y: 72.85}, 0)
        .wait(1)
        .to({scaleX: 0.9965, scaleY: 0.9965, x: 340.9, y: 72.3}, 0)
        .wait(1)
        .to({scaleX: 0.9964, scaleY: 0.9964, y: 72.35}, 0)
        .wait(1)
        .to({regX: 27.5, regY: 141.4, scaleX: 1, scaleY: 1, x: 286.8, y: 141.4}, 0)
        .wait(89)
        .to({alpha: 0}, 7)
        .to({_off: true}, 1)
        .wait(174),
    )

    // Calque_1
    this.instance_2 = new lib.bulle1()
    this.instance_2.setTransform(136.35, 210.05, 0.0205, 0.0205, 0, 0, 0, 136.3, 116.9)
    this.instance_2.alpha = 0
    this.instance_2._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(22)
        .to({_off: false}, 0)
        .wait(1)
        .to(
          {
            regX: 79.3,
            regY: 60.1,
            scaleX: 0.4481,
            scaleY: 0.4481,
            x: 110.75,
            y: 184.6,
            alpha: 0.4366,
          },
          0,
        )
        .wait(1)
        .to({scaleX: 0.6773, scaleY: 0.6773, x: 97.7, y: 171.55, alpha: 0.6705}, 0)
        .wait(1)
        .to({scaleX: 0.8184, scaleY: 0.8184, x: 89.65, y: 163.55, alpha: 0.8146}, 0)
        .wait(1)
        .to({scaleX: 0.9083, scaleY: 0.9083, x: 84.55, y: 158.45, alpha: 0.9064}, 0)
        .wait(1)
        .to({scaleX: 0.963, scaleY: 0.963, x: 81.35, y: 155.35, alpha: 0.9622}, 0)
        .wait(1)
        .to({scaleX: 0.9916, scaleY: 0.9916, x: 79.75, y: 153.7, alpha: 0.9914}, 0)
        .wait(1)
        .to({regX: 136.3, regY: 116.7, scaleX: 1, scaleY: 1, x: 136.3, y: 210, alpha: 1}, 0)
        .wait(86)
        .to({alpha: 0}, 7)
        .to({_off: true}, 1)
        .wait(237),
    )

    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 650.6, 240.3)

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
        .wait(150),
    )

    // bulles
    this.instance = new lib.bulles()
    this.instance.setTransform(2.8, 37.65)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150))

    // Calque_20
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f("#542814")
      .s()
      .p("Ag9AaQgGgIAVgKQA2gYARgEIAZgJQALgFABADQACAIgBACQgCAJgQAGQgZAJhGAeg")
    this.shape.setTransform(236.5767, 401.8107, 2, 2)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f("#D4C2BE")
      .s()
      .p(
        "AhHCtIgYgPIALg3QALg5ADgJQAEgNAeg3IAvhZQARgeAcgUQAOgKAKgEIALAgQAKAfgIgJQgHgIgLBsQgLBwgFAEIgRANQgJAHgEAIQgDAIgKAGQgPAKgDAEQgFAEgKAVQgIAQgJACIgDAAQgLAAgXgMg",
      )
    this.shape_1.setTransform(124.7657, 327.875, 2, 2)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f("#D4C2BE")
      .s()
      .p(
        "AhkDfQgGgGABgYIABggQgDgSABgkQABgogCgPIgLhkQgGg8AIgnQAIglAYgkQAGgJAGgDQAGgEALAAQASAAASAJIAeASIAeAQQAjASAOATQAPAUAHAlQAFAgACAtIABBNIABAoQABAagCAKQgDAOgMAMQgIAIgPALQhVA9grAAQgoAAgOgOg",
      )
    this.shape_2.setTransform(154.9093, 337.75, 2, 2)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AgvgMQAJgVAEAAQADAAAdAQIAnAWQAJAGACAMIAAALQhggtABgBg")
    this.shape_3.setTransform(155.149, 294.05, 2, 2)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("AhWBFQgKgGgFg6IDLhLQgLAWgPAYQgeAxgXAPQgYARgoAJQgXAFgMAAQgHAAgDgCg")
    this.shape_4.setTransform(155.85, 381.1352, 2, 2)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AATASIgvgRIAFgTIAgAAQABAAATAWIgEAHQgDAIgCAAIgBgBg")
    this.shape_5.setTransform(110.35, 363.2031, 2, 2)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f("#632B1C")
      .s()
      .p(
        "AhVBRQhLgDgsgRQghgOgKgaIgDgNQgCgKADgBICthOQAcAGAmAFQBLAKAygEQA5gDAfAHQAZAGAPAPQAIAJABAUQABAQgFANQgGAPgQAKQgOAJgSADQhaARhFAHQggACgjAAIg1gBg",
      )
    this.shape_6.setTransform(188.7382, 382.7941, 2, 2)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f("#632B1C")
      .s()
      .p("AhTA6QgKgOgFgfQgFgeAGgKQAIgMA9gcIBAAyQBBAxABACQABACgwAKIg2AMQgeAHgKABIgRACQgVAAgGgKg")
    this.shape_7.setTransform(183.3773, 366.9191, 2, 2)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f("#66341B")
      .s()
      .p(
        "AgsAjQgQgKgOgZIgNgJIAygdQAPADAWABIAaAAIAUgBIACAAIAVgCQAOgBAEALQAFAMgNAHQg6AdgvARIgBAAIgDABQgGAAgIgEg",
      )
    this.shape_8.setTransform(231.6657, 400.7071, 2, 2)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f("#FFA47D")
      .s()
      .p(
        "AgkAeQgNgHgKgUIgDgiQgBgDAQAEIAAAAQAFADALACQANADAOAAIA1gCQAKgBADAJQAEAJgKAFQgrAVgkANIAAABIgEAAQgEAAgFgDg",
      )
    this.shape_9.setTransform(229.9427, 400.683, 2, 2)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f("#FFA47D")
      .s()
      .p("ABPBaIgsgaIgzggQhIgsglgjIgDgDIAQgcQALgRAJgLQAEgFA0AiIAXAQICOCSIgXAWg")
    this.shape_10.setTransform(196.65, 379.7234, 2, 2)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f("#F08659")
      .s()
      .p(
        "AgPAHIgCgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAJgEQAHgEAEAAIAMgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgMABQgEAAgOAHg",
      )
    this.shape_11.setTransform(92.9214, 377.6, 2, 2)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f("#FFA47D")
      .s()
      .p(
        "AARAPIgdgDIgYgBIgEgDIgKgCQgEgCACgFQAAgBATgHQATgGAFAAIAkACQACAAAZARIgCAEQgDAFgFACIgKABIgRgBg",
      )
    this.shape_12.setTransform(97.755, 377.7, 2, 2)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f("#FFA47D")
      .s()
      .p("AgyBNIAmioIA3AJIAIAPIhDCaIgXAFg")
    this.shape_13.setTransform(111.85, 361, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
        .wait(150),
    )

    // Calque_23
    this.instance_1 = new lib.teteold()
    this.instance_1.setTransform(159.3, 293.25, 1, 1, -7.7063, 0, 0, 15.4, 43.9)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(57)
        .to({rotation: 0, y: 293.2}, 21)
        .to({regX: 15.5, rotation: 6.7325, x: 159.4}, 10)
        .to({regX: 15.4, rotation: 0, x: 159.3}, 18)
        .wait(24)
        .to({rotation: -7.7063, y: 293.25}, 16)
        .wait(4),
    )

    // biceps
    this.instance_2 = new lib.bicepsdroit()
    this.instance_2.setTransform(170.85, 304.1, 1, 1, 0, 0, 0, 13.3, 2.5)

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(42)
        .to({regX: 13.4, rotation: -3.2277, x: 171, y: 303.65}, 36)
        .to({x: 168.5, y: 300.95}, 10)
        .wait(1)
        .to({regY: 2.6, rotation: -8.2033, x: 168.45, y: 301}, 38)
        .to({regX: 13.3, regY: 2.5, rotation: 0, x: 170.85, y: 304.1}, 5)
        .wait(18),
    )

    // avant_bras
    this.instance_3 = new lib.avtbrasdroit()
    this.instance_3.setTransform(189.95, 342.35, 1, 1, 90, 0, 0, 3.3, 55)

    this.instance_4 = new lib.avtbrasdroitcopy()
    this.instance_4.setTransform(188.15, 335.45, 1, 1, -20.2439, 0, 0, 3.1, 55.1)
    this.instance_4._off = true

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(42)
        .to({regX: 3.1, regY: 55.1, rotation: -18.2425, x: 191, y: 337.9}, 36)
        .to({rotation: -20.2439, x: 188.15, y: 335.45}, 10)
        .to({_off: true}, 1)
        .wait(38)
        .to({_off: false, regX: 3.3, regY: 55, rotation: 90, x: 189.95, y: 342.35}, 5)
        .wait(18),
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(89)
        .to({_off: false}, 0)
        .to({regX: 3.2, rotation: 97.0251, x: 188.45, y: 335.5}, 38)
        .to({_off: true, regX: 3.3, regY: 55, rotation: 90, x: 189.95, y: 342.35}, 5)
        .wait(18),
    )

    // Calque_4
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f("#EDAD47")
      .s()
      .p(
        "AAAAGQgSgBgOgFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQANAFARAAQAMABAKgDIAJgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABQgBAAAAABQAAAAgBAAIgIADQgLADgLAAg",
      )
    this.shape_14.setTransform(295.8777, 376.8167, 2, 2)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AgBAMQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIADgRQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgDAQQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAg",
      )
    this.shape_15.setTransform(303.925, 383.475, 2, 2)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AABAIQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBgJQAAAAgBgBQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABQABAAAAABIABAKQABABAAAAQAAAAgBABQAAAAAAAAQgBABgBAAg",
      )
    this.shape_16.setTransform(303.3464, 368.5958, 2, 2)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AACAIQgUgBgWgJQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAABQAVAIATAAIAbgBIALgBQAAAAABAAQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABIgKABIgaABg",
      )
    this.shape_17.setTransform(294.0714, 358.9667, 2, 2)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f("#FFCA75")
      .s()
      .p(
        "AgPAxIgGgEIgBgBIAAgBQgJgRgBgRQgDgPgBgfIACgEQAKgLAXAAQAOAAAMAEIAJAEIACACIABAKQgCAagCANQgDAWgHAQIgBACQgLAGgKAAQgHAAgJgEg",
      )
    this.shape_18.setTransform(295.9, 383.8798, 2, 2)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWBhQgJgCgDgEQgIgKgFgeQgDgSACgdQABgOAFgeQABgOgHgNIgIgNIgFgEIgDgFQgBgHAOgBQASgDAYACQAYACAHAEQAFACABAFIABALQgBARABAOQAHgHAJAAQAJABAGAKQAFAIAAAKQAAAagjAwIgBAGQgHAegGAFQgHAEgLABIgDABQgJAAgIgDgAAmggQgGADAAACIgBABIAAABQAEARAAATIgBARIAIgOQAGgMADgJQAGgXgLgEIgBAAIgHACg",
      )
    this.shape_19.setTransform(297.4438, 375.8021, 2, 2)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_20.setTransform(249.4, 354.7, 2, 2)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_21.setTransform(246.6, 356.6, 2, 2)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_22.setTransform(243.5, 357.6, 2, 2)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_23.setTransform(240.1, 358.5, 2, 2)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg",
      )
    this.shape_24.setTransform(236.5, 359.1, 2, 2)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg",
      )
    this.shape_25.setTransform(232.9, 359.1, 2, 2)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_26.setTransform(228.8, 358.5, 2, 2)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_27.setTransform(225.7, 357.4, 2, 2)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCATIAAglQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAlQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg",
      )
    this.shape_28.setTransform(222.9, 356.3, 2, 2)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgCASIAAgjQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAAAjQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg",
      )
    this.shape_29.setTransform(220.4, 354.65, 2, 2)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics
      .f("#CC492D")
      .s()
      .p(
        "AgFATQgwgCgUgQQgJgHgBgJQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAHAJAGQASANAsACQAtACAYgOQAMgGACgIQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAQAAAHgOAIQgWAPgrAAg",
      )
    this.shape_30.setTransform(234.775, 350.4, 2, 2)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics
      .f("#F4DC67")
      .s()
      .p("AgPALQgJgFgCgJQgCgKAOACQAEACAGAAQAKACAGgEQAIgEAFAJQAGAIgLAFQgPAGgJAAQgGAAgFgCg")
    this.shape_31.setTransform(244.8641, 348.5539, 2, 2)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics
      .f("#F4DC67")
      .s()
      .p("AgPALQgJgFgCgJQgCgKAOACQAEACAGAAQAKACAGgEQAIgEAFAJQAGAIgLAFQgPAGgJAAQgHAAgEgCg")
    this.shape_32.setTransform(239.9583, 348.1539, 2, 2)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics
      .f("#F4DC67")
      .s()
      .p("AALAUQgYgEgHgNQgEgIAEgJQAEgKAKAKQAJAOAMAAQAJABgBAKQgBAJgIAAIgDAAg")
    this.shape_33.setTransform(226.9713, 348.357, 2, 2)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f("#F4DC67")
      .s()
      .p("AgQAKQgJgFgBgJQgBgKAOACIAJADQAKADAGgEQAJgEAEAKQAFAIgLAEQgNAFgIAAQgJAAgFgDg")
    this.shape_34.setTransform(235.9417, 342.3409, 2, 2)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f("#F4DC67")
      .s()
      .p("AgQAKQgJgFgBgJQgBgLAOADIAJADQAKADAGgEQAJgEAEAKQAFAIgLAEQgNAFgIAAQgJAAgFgDg")
    this.shape_35.setTransform(235.9417, 350.2242, 2, 2)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f("#F4DC67")
      .s()
      .p("AgQAKQgJgFgBgJQgBgKAOACIAJADQAKADAGgEQAJgEAEAKQAFAIgLAEQgNAFgIAAQgJAAgFgDg")
    this.shape_36.setTransform(243.4417, 343.5409, 2, 2)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics
      .f("#F4DC67")
      .s()
      .p("AgQAKQgJgFgBgJQgBgLANADIAKADQAKADAGgEQAJgEAEAKQAFAIgLAEQgNAFgIAAQgJAAgFgDg")
    this.shape_37.setTransform(239.0413, 345.0242, 2, 2)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics
      .f("#F4DC67")
      .s()
      .p("AgQAKQgIgFgCgJQgBgLAOADIAJADQAKADAHgEQAIgEAFAKQAEAIgLAEQgNAFgIAAQgIAAgGgDg")
    this.shape_38.setTransform(234.8661, 348.2242, 2, 2)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f("#F4DC67")
      .s()
      .p("AALAUQgZgFgGgMQgFgIAEgJQAEgKALAKQAJAOAMAAQAJAAgBALQAAAJgJAAIgDAAg")
    this.shape_39.setTransform(230.3144, 343.057, 2, 2)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics
      .f("#F4DC67")
      .s()
      .p("AALAUQgYgFgHgMQgFgIAEgJQAEgKALAKQAJAOAMAAQAJABgBAKQgBAJgIAAIgDAAg")
    this.shape_40.setTransform(227.2317, 345.557, 2, 2)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics
      .f("#F4DC67")
      .s()
      .p("AAOANQgPgIgKAGQgJAEgEgKQgFgJALgDQAXgJAMAHQAJAFABAJQABAIgJAAIgFAAg")
    this.shape_41.setTransform(245.1583, 344.8591, 2, 2)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics
      .f("#F4DC67")
      .s()
      .p("AAKAOIgHgGQgJgGgHABQgJABgCgJQgBgLAMAAQAZAAAIALQAHAGgDAKQgBAGgFAAQgDAAgFgDg")
    this.shape_42.setTransform(224.8614, 347.9382, 2, 2)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f("#E8664A")
      .s()
      .p(
        "Ag4AxQgUgJgEgJQgCgDgCgYQgBgYACgHQADgJAXgLQAcgNAfABQAqACAWALQAPAIADALQABAEAAAXQABAYgCAEQgCAIgUAKQgaAOgkAAQgfAAgZgLg",
      )
    this.shape_43.setTransform(234.8482, 351.8926, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
          ],
        })
        .wait(150),
    )

    // Calque_3
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f("#72747C")
      .s()
      .p("Ah2AmQghgGAPgVIAng1QBuAzAwAGQAfAEAcALIAWALIhuACIgTAAQhkAAgfgFg")
    this.shape_44.setTransform(393.2574, 409.6042, 2, 2)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AAJADQgIgCgJABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAQAJgBAJACQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg",
      )
    this.shape_45.setTransform(308, 375.91, 2, 2)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AgEADQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAIAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg",
      )
    this.shape_46.setTransform(303.7, 373.1, 2, 2)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AAMAEIgYgDQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAYACQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg",
      )
    this.shape_47.setTransform(296.6, 375.2, 2, 2)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AgKABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAJACALAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgLAAgJgCg",
      )
    this.shape_48.setTransform(291.95, 371.9, 2, 2)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AgNACQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAbABQAAAAABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAg",
      )
    this.shape_49.setTransform(308.35, 365.55, 2, 2)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics
      .f("#D9B38D")
      .s()
      .p(
        "Ag7gBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQA3AGA/ACQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQg+gCg4gGg",
      )
    this.shape_50.setTransform(307.025, 370.35, 2, 2)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics
      .f("#D9B38D")
      .s()
      .p(
        "AgJAcQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAABgBQARgiAAgHIgBgEQgCgBgEAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAGAAADADQADADAAAEQAAAHgSAlQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg",
      )
    this.shape_51.setTransform(312.8714, 347.9, 2, 2)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics
      .f("#F0D1B1")
      .s()
      .p("AgjA+IAag8IgWgCIAZg2QADgHAQAAQAOAAAIAEQAIAEgzBzg")
    this.shape_52.setTransform(312.8194, 353, 2, 2)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics
      .f("#BF2E16")
      .s()
      .p(
        "ABnAlQgPgOgTAHQgUAHgXgTQgVgRgPAKQgaASgZACIgjADIgRAGQgRADgEgJQgEgLAHgNQAFgKALgIIAfgYQAYgRAKAAQAIgBAaAEIAeAEIA2AAQAwABALAHQAKAGAAANIgEAQIgCAaQgDAVgHACIAAAAQgEAAgOgNg",
      )
    this.shape_53.setTransform(306.6999, 361.7511, 2, 2)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics
      .f("#E68E53")
      .s()
      .p(
        "AAKAWQgBAAAAgBQABAAAAgBQAAAAAAAAQABgBABAAIAHgKQAIgPABgJIg5gDQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAeABIAdADQADABgBADQABAIgIAOQgHAPgFACIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg",
      )
    this.shape_54.setTransform(322.9, 361.1, 2, 2)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f("#F0D1B1")
      .s()
      .p(
        "AgBA+QgpgCgogEIgJgDQgKgFgIgNIgRgcQgGgNAMgJIAggdQAVgTAKAAIBeACQBUAEAHAIQAEAGgQAvQgQAzgLAHQgEACgXAAQgWAAgpgCg",
      )
    this.shape_55.setTransform(306.7263, 366.5737, 2, 2)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f("#F46041")
      .s()
      .p("AgLAaQgKgCgHgKQgJgNAGgPQAGgPAOADIALAGQAGgDAHgBQANgBAGALQAHAOgNAPQgKAMgQAAIgLgBg")
    this.shape_56.setTransform(349.4224, 371.4861, 2, 2)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f("#7B9315")
      .s()
      .p("AgKgBQAIgLASADQgCAFgFAEQgJAKgPABg")
    this.shape_57.setTransform(352.05, 365.2683, 2, 2)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics
      .f("#7B9315")
      .s()
      .p("AgKgBQAIgLARADQgBAFgFAEQgJAKgPABg")
    this.shape_58.setTransform(346.7, 355.5683, 2, 2)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics
      .f("#F0D1B1")
      .s()
      .p("AgHAqQgPgDgDgLQgDgKAKgJQALgLADgJIAGgYQAFgIAKABQAGABAAAKIgCAZIAFAcQADAOgXAHg")
    this.shape_59.setTransform(340.5229, 366.0275, 2, 2)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f("#F2F2F0")
      .s()
      .p("AgZAXIgGgvQAIAFAKACQAWADATgOIAEAvIgQAHQgIADgIAAQgMAAgNgGg")
    this.shape_60.setTransform(264.1, 367.5323, 2, 2)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f("#2E365C")
      .s()
      .p(
        "AgKBxQgJgDgBgIIgJg7QgGgyAEgKIAIgOQADgFAAgQIgEgnQgBgSAHgEQAQgHABAQQABAiAEAOQADAQAKALQAHAJAEAqIAGBNQAAAKgJADQgIAEgSAAg",
      )
    this.shape_61.setTransform(264.2503, 358.9322, 2, 2)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics
      .f("#57342B")
      .s()
      .p(
        "AgBAFQgXAAgMgFQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAMAFAWAAQAOgBAMgBIAJgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABQgBAAAAAAQAAAAAAAAQAAAAgBAAQgKAFgbAAg",
      )
    this.shape_62.setTransform(333.7667, 329.2167, 2, 2)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics
      .f("#57342B")
      .s()
      .p(
        "AgmgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAQAPAHAUAAQAOAAANgDQAIgDACgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgCABgJACQgNAEgPAAQgWAAgQgHg",
      )
    this.shape_63.setTransform(333.65, 334.8167, 2, 2)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics
      .f("#361C15")
      .s()
      .p("AgGgDIACgCIgDAAIACgCQAAgBABAAQAAAAAAABQABAAAAAAQABABAAAAIAKAMIgEADg")
    this.shape_64.setTransform(342.25, 350.49, 2, 2)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics
      .f("#361C15")
      .s()
      .p("AgGgDIACgCIgDAAIACgCQAAgBABAAQAAAAAAABQABAAAAAAQABABAAAAIAKAMIgEADg")
    this.shape_65.setTransform(342.25, 343.79, 2, 2)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics
      .f("#361C15")
      .s()
      .p("AgDASIAAgjQAAgEADAAQAEAAAAAEIAAAjQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg")
    this.shape_66.setTransform(343.45, 348.45, 2, 2)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f("#361C15")
      .s()
      .p(
        "AgDAIQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAIAHgEIAAAMIgFADIgBAAIgCAAg",
      )
    this.shape_67.setTransform(340.7, 349.35, 2, 2)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f("#361C15")
      .s()
      .p(
        "AgDAIQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgFQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAHgEIAAAMIgFADIgBAAIgCAAg",
      )
    this.shape_68.setTransform(340.7, 342.75, 2, 2)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f("#361C15")
      .s()
      .p("AgnAFIgCgCQgBgDAAgDQAAgFADgCIAcgDIA0ADQADACgBAEIgBAHIgBABIgJAFQgMAFgUAAQghgBgGgIg")
    this.shape_69.setTransform(333.5946, 335.8, 2, 2)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics
      .f("#361C15")
      .s()
      .p("AgoAQIAAgWQAAgGAJgHQAMgJATAAQAVAAALAJQAJAHgBAGIAAAWIgJAHQgNAFgSABQgcAAgMgNg")
    this.shape_70.setTransform(333.6, 330.4, 2, 2)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics
      .f("#361C15")
      .s()
      .p("AgfAJQgJgFAAgFIAAgNQAMAKAcAAQASAAANgFIAJgFIAAANQABAFgJAFQgLAHgVgBQgTABgMgHg")
    this.shape_71.setTransform(333.6, 360.5, 2, 2)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics
      .f("#D4C2BE")
      .s()
      .p("AgoBCIAAiPIBQAAIAACPIgoAMg")
    this.shape_72.setTransform(333.6, 345.2, 2, 2)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f("#2B2E4E")
      .s()
      .p(
        "AgIAEQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAIAAgCQAAgBAAgBQABAAAAgBQAAAAABAAQABAAAAAAIARAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAAABQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg",
      )
    this.shape_73.setTransform(274.55, 344.05, 2, 2)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f("#9E9D6A")
      .s()
      .p(
        "AgLBGIgDAAQgLgEAAgQIAAgaQACgSAKgYQADgHgBgUQgBgSACgEQACgCAEAAIAHAAQAEAAACACQADAEgBASQAAAUADAHQAKAXACASIABAbQgBARgLADIgCAAg",
      )
    this.shape_74.setTransform(274.775, 358.65, 2, 2)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics
      .f("#FBD3AE")
      .s()
      .p("AgPAJQgBgIAAgIIAGgLQAJgKALAGQALAGgGAUQgFATgMACIgBAAQgJAAgDgQg")
    this.shape_75.setTransform(476.5932, 282.0796, 2, 2)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics
      .f("#E8E8E8")
      .s()
      .p(
        "AACBBQgXgJgDgEQgIgMgHgOQgFgKgFgFQgEgEAFgQQADgOgPgEQgdgGALgXQAGgNAggCIAvAAQAVgBAIAHIAFAIQAJgBAKAEQATAHADAWQAEAhgUAgQgQAZgPAHIgFAAQgJAAgTgHg",
      )
    this.shape_76.setTransform(483.7802, 277.3602, 2, 2)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics
      .f("#6294BD")
      .s()
      .p(
        "AA6D/QgqgUgHhqQgDg1AGgxQhbAqhtglQgpgNgdgUQgbgTgBgLQgBgVAPgIQAPgIAKAIQAOANAmAMQAxAPAkgKQAggIALgJQAdgWAAgxQAAgxAeggIATgTQAJgIAAgFQAAgRAggTQAigUAPAZQAJAQAbABQAgADAlAiQAtApATBcQALA3AFBqQADA+gYA8IgZAvQgYAWg5AAQg4gBgtgVg",
      )
    this.shape_77.setTransform(470.7271, 352.5111, 2, 2)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "AgsABQgKgXAPABQAWAHAKACQANADgCgEQgCgDgMgEQgJgCAIgEQAHgDAJADQAbAGALANQANANgPAVIgkACQgmgEgLgYg",
      )
    this.shape_78.setTransform(410.2564, 340.6864, 2, 2)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics
      .f("#F4A875")
      .s()
      .p(
        "AgEAFIgCgCQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAFABABgCIADgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAgBABIgBADQgDADgEAAg",
      )
    this.shape_79.setTransform(467.14, 293.34, 2, 2)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics
      .f("#2E365C")
      .s()
      .p(
        "AgCAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAAAAAAAQAAABgBABQAAAAAAABQAAAAgBABQgBAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg",
      )
    this.shape_80.setTransform(467.075, 282.05, 2, 2)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "AgPBYQgEgTgMAFQgYAMgJgeQgEgPABgSIgKgBQgKgBAIgSQALgWgBgHQgEgkANgSQAKgPAbgIQAcgKAlAOQAqAQAAAlQgBAPgVBBQgPAuAVARIhSALg",
      )
    this.shape_81.setTransform(478.3849, 285.216, 2, 2)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f("#2E365C")
      .s()
      .p("Ag2A5QgIgPAdgrQAcgqAegOQAPgHAJACQAXAMgtA2QgoAygSAHQgHACgFAAQgHAAgEgGg")
    this.shape_82.setTransform(333.0293, 416.8458, 2, 2)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f("#F4F4F4")
      .s()
      .p(
        "Ag0CgQglgQgCgjQgBgHAKgeQAIgZgGgLQgPghAAgYQABgPAGgnQAFg3AogXQAUgMASgBQAcgGAbAbQAeAeAAA1QAAAFgIAXQgHASAFAPQACAGAAAQQgBAOAEAHQA7BXhqAgQgWAHgSAAQgWAAgSgIg",
      )
    this.shape_83.setTransform(429.6997, 313.4134, 2, 2)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics
      .f("#E2B534")
      .s()
      .p(
        "AA9DuQgMgFADgdQADgXgOAAQgTgBgHgOQgdg8hagOQgsgHgMgFQgXgLgCgbIADgiQAHgpAXgqQAfg3AiggQApglAygJQBJgUAegGQA1gLASAZQASAYgWBwQgdCAgHAuQgNBPgHAbQgLAmgQACIgYADIgGgBg",
      )
    this.shape_84.setTransform(425.76, 360.1366, 2, 2)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics
      .f("#8D8F99")
      .s()
      .p(
        "AguB4QiYgFgfgLQgagJATgsQATgqAggSQALgHA/gaQA0gWAcgYQASgQAqgKQAugKAsAEQB1ALAJBcQgBAcgKAfQgVA+gwAKQglAIhUAAQgoAAgygCg",
      )
    this.shape_85.setTransform(387.3734, 396.2137, 2, 2)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f("#2E365C")
      .s()
      .p("AhEAoQgEgRApghQAlghAhgFIAZABQATASg7AnQg0AlgTACIgFAAQgNAAgDgJg")
    this.shape_86.setTransform(314.6085, 414.0796, 2, 2)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f("#FBD3AE")
      .s()
      .p("AhVAaIAKgaQAVgJAbgHQA2gQAfACQAUACAGAMQAHANgOALQgZAXhAAAQggAAgpgFg")
    this.shape_87.setTransform(340.2333, 406.0553, 2, 2)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics
      .f("#FBD3AE")
      .s()
      .p("AgEASQgUAAgNgFQgJgEACgKQABgGADgFQAYgKAEAJQADAGAGAEQAGADAPAAIAZADQAHADgQAGQgOAGgUAAIgEAAg")
    this.shape_88.setTransform(446.353, 409.3611, 2, 2)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics
      .f("#2E365C")
      .s()
      .p("AgcBLQiOgygjg1QgfguBEgTQA0gPBZAFQBbgDAoAJQBDAOAnBNQAHAHgCARQgGAgg0AqQgQANghAAQgxAAhXgeg")
    this.shape_89.setTransform(478.9181, 392.7715, 2, 2)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics
      .f("#2E365C")
      .s()
      .p("ACFBjQhJgCh3giQiNgogegtQgfguBEgTQA1gOBZAEQBmAGA4ATQBfAfAnBOQgJAQgSAPQgjAfgtAAIgBAAg")
    this.shape_90.setTransform(468.2556, 397.7442, 2, 2)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics
      .f("#2E365C")
      .s()
      .p("AhBAYQgRgHAEgLQAEgPA0gMQAwgLAgALIAVANQAIAXhGAIQgiAEgVAAQgSAAgJgDg")
    this.shape_91.setTransform(528.0718, 397.8639, 2, 2)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics
      .f("#2E365C")
      .s()
      .p("Ag9AfQgSgEACgMQACgQAygSQAugRAhAHIAXAKQALAVhFASQgvAMgWAAIgLgBg")
    this.shape_92.setTransform(521.9894, 388.9893, 2, 2)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f("#F4A875")
      .s()
      .p(
        "AgGATQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAABIAFgBQAEgCAAgCQgDgIABgSQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAABIABACQAAADABAIIADAMQACAFgFADQgEADgFAAg",
      )
    this.shape_93.setTransform(256.5571, 202.1833, 2, 2)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f("#F4A875")
      .s()
      .p(
        "AgMgEQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQADADAEABQAGAAAFgFQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQABACgEAEQgEAGgGAAQgKAAgCgLg",
      )
    this.shape_94.setTransform(254.8409, 208.875, 2, 2)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f("#EFEFEF")
      .s()
      .p(
        "AhZBZQgFgkAQgJQAMgHABgOQACgRAKgJQAJgIAAgNQABgaAFgVQAKgnA7gGQA8gGAAAfQgBAlgmADIgdADQgNADgDALQgDAMABAXQABAZgCAIQgCAJgKANQgHAJAFAJQAOAagQALQgIAFgYgGQgVgGgKAMQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAgEgdg",
      )
    this.shape_95.setTransform(243.928, 202.4489, 2, 2)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f("#292E4E")
      .s()
      .p(
        "AAAADQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgDACABQABAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAAAg",
      )
    this.shape_96.setTransform(253.325, 198.9528, 2, 2)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f("#292E4E")
      .s()
      .p(
        "AAAADQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAg",
      )
    this.shape_97.setTransform(259.3278, 199.1571, 2, 2)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "AgHBNQgWgEgLgXQgLgZADgnQADgaAUgUQAUgUAUADQASADAKAaQAIAVgBAPIgEAdQgEAWgFAIQgKASgEAEQgJAJgNAAIgIgBg",
      )
    this.shape_98.setTransform(252.692, 199.7609, 2, 2)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "AgeAlQgHgKAFgLQANgeAIggQAEAGAHAGQAOALAVgBQgFAGgGAJQgLASABAPQAAAJgGAGQgGAHgIAAIgFABIgCAAQgLAAgGgKg",
      )
    this.shape_99.setTransform(247.4417, 213.0087, 2, 2)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f("#F2F2F0")
      .s()
      .p(
        "AgqAwQgDgRALgjQAOguAbABQAKAAAJAIQATARgCArQgBAcgNgBQgHAAgPgHQgMgCgUAJQgJAEgEAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg",
      )
    this.shape_100.setTransform(233.5346, 231.6646, 2, 2)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "ABeDjQgRgQgUgIQgfgNg8hzQhAh2gHhGQgGg9ATggQAKgQAKgEQAbgQAHAsIAGBjQACA1ATAoIAeBjQAXBLAQACQAUACARAWQAQAVgFANQgBADgDAAQgDAAgFgEg",
      )
    this.shape_101.setTransform(247.375, 267.7591, 2, 2)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f("#F2F2F0")
      .s()
      .p(
        "AgtCcQglgFgNgIQgLgIACgQIAHhcQAGhRAHgXQAQgzAGgIQAWgcA5AJQANgCAQAEQAgAIAOAhQAPAjgCAIQAAABgNAIQgOAJgEAGQgKAMADARIAHAaQADAMgCAWQgBANANAwQAKAjgQAGQgVAJghACIgbABQgWAAgXgCg",
      )
    this.shape_102.setTransform(242.7411, 248.3793, 2, 2)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f("#F46041")
      .s()
      .p(
        "AgWB+QgWgQgqglQgqgegWgrQghg+AYhHQAAgDAKgCQATgDAsAIQAfAFA2ADQAjACAOAJQAVANAkArQAlAtARAhQAQAggIAMQgEAIggAMIgmAHQgqANgSAZQgIALgNAAQgNAAgVgOg",
      )
    this.shape_103.setTransform(253.3338, 302.1974, 2, 2)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "ABXC8QgPgXgGgEQgxgbgbgXQgugmgVgsQgYgzAFhcQAEhdAeAPQAKADAJAHQAUAOgBATQgCA2AMBIQADAVAKAUQAGAOATAeIAVAkQAKATAHAIIAaAiQAMAQgCANQgBAHgDAAQgDAAgEgHg",
      )
    this.shape_104.setTransform(265.1963, 263.7544, 2, 2)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "AA/BMQg/gahdgvQgegMggABIgnACQgKgCAjgOQAsgSAIgJQAJgLAQAJQATAPAMAGQAOAIAoAMIA1APQAMAEgngSQgtgbgFgSQgFgTA4gRIA7gNQAhAgAfAoQA/BOgKAnQgFASgbAAQghAAhEgcg",
      )
    this.shape_105.setTransform(234.9302, 316.613, 2, 2)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "AhwCfQgFgJAUgLQARgKAXgEQAOgDARgjQAUgoAHgHQAdgaANhuQAFguAHgOQAJgVAVANQAKAFAIAPQAQAfgIA5QgIA6gZAsQgPAagYAZQgWAXgYANQgcANgSAKQgZAOgPAAQgNAAgGgLg",
      )
    this.shape_106.setTransform(350.6646, 259.9325, 2, 2)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f("#F2B885")
      .s()
      .p(
        "AgCATQgFgCABgHIABgPIAAgKQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQADARgBAIQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAQABABACgEQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgCAGgFAAg",
      )
    this.shape_107.setTransform(349.4788, 213.2, 2, 2)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f("#2A2E4E")
      .s()
      .p(
        "AgBADIgBgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIAAAAIgBAAg",
      )
    this.shape_108.setTransform(346, 209.9667, 2, 2)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f("#2A2E4E")
      .s()
      .p(
        "AAAADQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAg",
      )
    this.shape_109.setTransform(352.8, 210.25, 2, 2)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f("#F2B885")
      .s()
      .p(
        "AgLABQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAACAGAAQAFABAGgFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgGAFgGAAQgGAAgFgEg",
      )
    this.shape_110.setTransform(349.465, 218.3357, 2, 2)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f("#EAEAEA")
      .s()
      .p(
        "AgwBKQghgcAVgiQAGgKASgQQAUgTAFgHQASgYAUgQQAggZAGAXQAFAMgBAPQgEAcggALQgXAHANAiQAOAogHAJQgPATgSABIgCAAQgUAAgXgUg",
      )
    this.shape_111.setTransform(337.6442, 208.416, 2, 2)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f("#EAEAEA")
      .s()
      .p(
        "AgXBMQAAgSAPgdQANgcgCgFQgBgHghgOQgegVAPgpQAEgDAGgCQAMgEAKAEQAZAKAYA2QAaA4gPAiQgOAhgcAAIgBAAQgZAAgBgTg",
      )
    this.shape_112.setTransform(359.72, 208.613, 2, 2)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f("#F7D3AF")
      .s()
      .p("AgEBIQgPgCgOgXQgQgbAAghQAAggAZgPQANgIAMgCQAOgEAQANQARAPACAcQABAggRAeQgQAcgSAAIgEAAg")
    this.shape_113.setTransform(350.3122, 208.672, 2, 2)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f("#EDC298")
      .s()
      .p("AgSAoQgSgFgLgIQAdgIACgfQABgQgFgPIAxAMQgIAWADAQQAEAVAUAFQgUALgVAAQgMAAgNgEg")
    this.shape_114.setTransform(348.85, 220.8274, 2, 2)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f("#F2F2F0")
      .s()
      .p("AgBgGIAbAGIgzAHg")
    this.shape_115.setTransform(332.6, 294.95, 2, 2)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f("#F2F2F0")
      .s()
      .p("AgGgYIAGgBIAHAyIgGABg")
    this.shape_116.setTransform(331.6, 289.3, 2, 2)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f("#F46041")
      .s()
      .p("AgYgGQAAgFAXgDQAXgEACAFQAIAZgdAEIgHABQgVAAABgXg")
    this.shape_117.setTransform(330.1721, 280.9816, 2, 2)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f("#F2F2F0")
      .s()
      .p("AgfAHQgCgMAEgNIA0gJQAIAMABANQADAYgfAFIgIABQgXAAgEgVg")
    this.shape_118.setTransform(330.1303, 280.0686, 2, 2)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f("#F2F2F0")
      .s()
      .p(
        "AhQB1QAMg6gOgSQgVgZgCgYQgCgSAJgaQALgdAAhFQAggOA3ACIAxAFQgFAPAAARIABAtQABANANAVIAaAoQAhA2gSAoQgUAsg6ATQghAKg3ACIgBAAQgXAAAKgug",
      )
    this.shape_119.setTransform(353.5928, 257.5763, 2, 2)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f("#C9C9C9")
      .s()
      .p("AgPBKQgZgCgVgHQgLgIAFgiIALg7QAEgaAYgJQAVgHAcAHQAcAHAPAzQAPAzgYAWQgQAPgiAAIgUgBg")
    this.shape_120.setTransform(350.5207, 213.571, 2, 2)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f("#AD7878")
      .s()
      .p(
        "AhgCYQg+gQgFg+QgGg3AkgvQAWgfAfgKQANgEAsgEQBKgIArhIQAZAOAUAYQAoAugVAsQgRAjABAlQABAegOARQgZAfhBAWQgtAPgoAAQgaAAgYgGg",
      )
    this.shape_121.setTransform(356.0933, 300.9244, 2, 2)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "AgUDYQgEgDAIgJQAFgGgUACQgZAEgGgEQgEgEAJgDIAhgLQASgGgDgsQgHhQABgSQAIh5ABhMQAAguAhgGIAiADQAJAKgQBaQgTBoACAVQACAngPBIQgPBJgMALQgKAIgFAAIgCAAg",
      )
    this.shape_122.setTransform(323.724, 269.8333, 2, 2)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f("#FBD3AE")
      .s()
      .p(
        "AhxAiQgLgZAagOQAVgMAzgOQAwgOACgBQAHgGAmAGQAnAGAHAKQAIAKgTACQgMABgmgDQgXgCgbAUQgtAggiAQQgJAEgHAAQgOAAgIgQg",
      )
    this.shape_123.setTransform(395.189, 308.1593, 2, 2)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "Ah8AaQgSgEACgJQACgJAVgIQAggMA2gCQA4gCAPgEQAbgJAgAKQARAFANAGIAJAGQANANgkgCQg2gEgPAEQhaAYgyAAQgRAAgNgDg",
      )
    this.shape_124.setTransform(391.4254, 311.3268, 2, 2)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f("#F7CAA1")
      .s()
      .p(
        "AA/BMQg/gZhdgwQgegMgfABIgoACQgKgBAkgPQAsgSAHgJQAKgLAPAKQAUAPALAGQAOAHAoAMIA1APQAMAFgngTQgtgagFgTQgFgTA5gQIA6gNQAiAgAfAnQA+BOgKAnQgFARgbAAQghAAhEgbg",
      )
    this.shape_125.setTransform(250.7812, 310.963, 2, 2)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f("#E5E5E5")
      .s()
      .p(
        "AgHBuQgVABgIgjQgIggAEgtQAEgvANgeQAOgjATAEQAgAFgHAfQgPA6ABAGIAEAYQADANgCAKQgBAIAKAMQAKANgDANQgEATgYAFQgHACgHAAIgHAAg",
      )
    this.shape_126.setTransform(257.3359, 203.6178, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
          ],
        })
        .wait(150),
    )

    // Calque_5
    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f("#632B1C")
      .s()
      .p("AgGAAQAFgDACABQAEABACAEQgHgBgGgCg")
    this.shape_127.setTransform(409.65, 249.8417, 2, 2)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f("#632B1C")
      .s()
      .p("AgFACQACgDADAAQADAAADACIgIABIgDAAg")
    this.shape_128.setTransform(420.05, 250.9167, 2, 2)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f("#632B1C")
      .s()
      .p("AhEA1QgTgGgKgxQgJguAGgHQAEgFBggBQBggBAEAEQAGAFgHArQgGAtgNANQgNANg3ABIgKAAQgtAAgZgJg")
    this.shape_129.setTransform(421.3121, 277.8186, 2, 2)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f("#EDAD47")
      .s()
      .p(
        "AgKAXQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAGgLQAEgKAFgTQABgDADAAQADABAAADQgEAUgGALQgEALgDACIgCABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg",
      )
    this.shape_130.setTransform(419.0364, 260.8, 2, 2)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f("#EDAD47")
      .s()
      .p(
        "AgCAkIgCgMIgDgXQAAgPAHgWQACgDADABQABABABAAQAAAAABABQAAABAAAAQAAABgBABQgHAUAAAOIACAWIADALQABAEgEAAIgBABQgBAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAgBg",
      )
    this.shape_131.setTransform(407.9639, 258.025, 2, 2)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f("#FFCA75")
      .s()
      .p(
        "AgPA4IgBgCIgBgCQgGgKgDgPQgJgrAbghIAFgGQAEgCADAAQAEACACAFIASBaIABACQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBIgCABQgQACgRAFIABABQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgCgCg",
      )
    this.shape_132.setTransform(409.025, 260.725, 2, 2)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f("#FFCA75")
      .s()
      .p(
        "AgNA9QAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIALgKQgGgGgIgGIgJgGIgBACQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIABgDIAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABIAPgdIAEgNQADgIAEgEQAFgGAIgBIgCgRIAAgCQACgEADAAQAEAAADADIABAEIACAUIACADQAJAMgKAZIgBAFIgDAFIAAABIgIAOIgLAQIABAAQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBAAIgKAKIgBAAIgCAAg",
      )
    this.shape_133.setTransform(416.8045, 262.775, 2, 2)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f("#C9C489")
      .s()
      .p("AgHAAQgBgKAIABQAEAAABACQAEAFgBAFQgCAGgFABIgBAAQgHAAAAgKg")
    this.shape_134.setTransform(441.6127, 261.1562, 2, 2)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f("#C9C489")
      .s()
      .p("AgKAEQgDgGAMgEQAKgDACAIQAAACgBACQgEAEgGABIgCAAQgGAAgCgEg")
    this.shape_135.setTransform(429.721, 255.4661, 2, 2)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAIgHQAIgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_136.setTransform(433.2672, 258.5471, 2, 2)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAJgHQAHgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_137.setTransform(437.4771, 260.4471, 2, 2)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f("#361C15")
      .s()
      .p(
        "AAWAWIgHgMIgFgIIAAARQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgTIgMAKQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAKgIIgYACQAAABgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAWgFAIABIAPgRQABAAABgBQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgNAOIAIALQAGAJACAFQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBABIgCgCg",
      )
    this.shape_138.setTransform(436.5286, 255.5433, 2, 2)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f("#C9C489")
      .s()
      .p("AgHAAQAAgKAIABQAEAAABADQADAEgBAFQgCAHgGAAIAAAAQgHAAAAgKg")
    this.shape_139.setTransform(438.95, 263.391, 2, 2)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAJgHQAHgIAGAHQACACgBADQgBAEgFADQgEACgCAAIgEgBg")
    this.shape_140.setTransform(429.3964, 258.7118, 2, 2)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgEAIgIQAIgIAGAHQACACgBADQgBAEgGAEQgDABgCAAIgEgBg")
    this.shape_141.setTransform(433.5172, 261.7971, 2, 2)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f("#C9C489")
      .s()
      .p("AgIAHQgGgGAKgGQAJgGAFAHQABACgBACQgCAFgGADIgEABQgDAAgDgCg")
    this.shape_142.setTransform(423.815, 264.5524, 2, 2)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f("#C9C489")
      .s()
      .p("AgIAGQgGgGALgFQAKgGADAIQABAAAAABQAAAAAAABQAAABAAAAQAAAAgBABQgCAFgHACIgDABQgEAAgCgDg")
    this.shape_143.setTransform(421.2167, 267.8095, 2, 2)

    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f("#C9C489")
      .s()
      .p("AgIAGQgGgGALgFQAKgGADAIQABACgBACQgCAFgHACIgDAAQgEAAgCgCg")
    this.shape_144.setTransform(424.8167, 269.0561, 2, 2)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f("#C9C489")
      .s()
      .p("AgCAKQgIgBAEgKQADgLAIAEQADACABACQABAEgEAFQgDAFgEAAIgBAAg")
    this.shape_145.setTransform(428.5942, 268.5667, 2, 2)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAIgHQAIgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_146.setTransform(432.7172, 267.7471, 2, 2)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAIgHQAIgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_147.setTransform(435.1464, 264.7118, 2, 2)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f("#C9C489")
      .s()
      .p("AgIAHQgFgGAKgGQAJgGAEAHQABADgBACQgCAFgGACIgEABQgEAAgCgCg")
    this.shape_148.setTransform(426.9448, 265.7524, 2, 2)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAIgHQAIgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_149.setTransform(425.7464, 261.4118, 2, 2)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f("#C9C489")
      .s()
      .p("AgFAJQgIgEAIgIQAGgJAHAGQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQgBAEgFAFQgEADgCAAIgDgBg")
    this.shape_150.setTransform(431.025, 265.0267, 2, 2)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f("#C9C489")
      .s()
      .p("AgGAIQgHgFAIgHQAIgIAGAHQACACgBADQgBAEgGADQgDACgCAAIgEgBg")
    this.shape_151.setTransform(429.5439, 262.4118, 2, 2)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f("#152D4D")
      .s()
      .p(
        "AgLAVIgCgTQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIABAOIAOgQIgBgTQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQABAAAAABQAAAAAAABQABAAAAABQACAUgCABIgJAMQgJALgDAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg",
      )
    this.shape_152.setTransform(596.7643, 294.8778, 2, 2)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "ABjA/QgGAAAAgGQgFhhgEgEQgCgDhTgBQhUgCgDACQgEAEACAcIgMALQgEguAGgGQAFgFBAAAQA/AAAjADQAYACAEAFQAFAHAEBmQABAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAg",
      )
    this.shape_153.setTransform(576.9196, 283.1455, 2, 2)

    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .f("#152D4D")
      .s()
      .p(
        "Ag7A8QAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIByhzQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIhzBzIgCABg",
      )
    this.shape_154.setTransform(594.35, 281.175, 2, 2)

    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .f("#152D4D")
      .s()
      .p(
        "ABWARQgCgYgBgGQgOgBidADQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQCtgFACAEQADABABAhQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg",
      )
    this.shape_155.setTransform(565.1, 296.6969, 2, 2)

    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f("#152D4D")
      .s()
      .p(
        "AADAwQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgEhaQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAFBaQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg",
      )
    this.shape_156.setTransform(584.6, 316.95, 2, 2)

    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AiRA/QAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQClAEAKgEQAIgEBoh0QAAAAABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIg6A/QgzA4gEACQgDADgzAAQhAAAg9gCg",
      )
    this.shape_157.setTransform(576.45, 291.7357, 2, 2)

    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f("#264269")
      .s()
      .p("AiVAtQADgMA5g3QA6g5AOgDIADgBQAUgCA/ABQBAABAPADIADABIAAAmQh1B8gCABQgEACiyAAQgBgkACgFg")
    this.shape_158.setTransform(576.36, 284.6714, 2, 2)

    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiVBfIAAgPQgCgmACgIQADgLA5g3QA6g6AOgDIADAAQAUgDA/ABQBAABAPAEIADABIAAA7QhtB7gEACQgDABhRAAIhngBg",
      )
    this.shape_159.setTransform(576.375, 286.7714, 2, 2)

    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics
      .f("#264269")
      .s()
      .p(
        "AiICTQgHgIgGhkQgCg0ACgIQADgLA5g4QA6g6AOgDQAQgDBLABQBNACAAAEIgBBCQgCBQgEAIQgVAggbAnQgsBAgHACQgLADhPACIglABQgxAAgFgFg",
      )
    this.shape_160.setTransform(576.3611, 297.925, 2, 2)

    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics
      .f("#634138")
      .s()
      .p(
        "AgCACQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgCACIAAABIgCgBg",
      )
    this.shape_161.setTransform(542.6393, 295.54, 2, 2)

    this.shape_162 = new cjs.Shape()
    this.shape_162.graphics
      .f("#634138")
      .s()
      .p(
        "AgDACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIADgCQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABIgDACIgBAAIgCgBg",
      )
    this.shape_162.setTransform(556.7433, 299.2775, 2, 2)

    this.shape_163 = new cjs.Shape()
    this.shape_163.graphics
      .f("#634138")
      .s()
      .p(
        "AABADIgDgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIADACQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCABIgBAAg",
      )
    this.shape_163.setTransform(553.7757, 301.2567, 2, 2)

    this.shape_164 = new cjs.Shape()
    this.shape_164.graphics
      .f("#634138")
      .s()
      .p(
        "AgDACQgBgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADgCQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgDABIgCABIgBgBg",
      )
    this.shape_164.setTransform(554.05, 298.3275, 2, 2)

    this.shape_165 = new cjs.Shape()
    this.shape_165.graphics
      .f("#634138")
      .s()
      .p(
        "AgCAEQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIADgDQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgEAFIgBAAIgBAAg",
      )
    this.shape_165.setTransform(552.2, 297.8, 2, 2)

    this.shape_166 = new cjs.Shape()
    this.shape_166.graphics
      .f("#C9C489")
      .s()
      .p(
        "AhJAQQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAHgGIAAAAQAegXAngBQAngBAgAVQAAABAAAAQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgigNglADQgmACgfASIgCAAIgBgBg",
      )
    this.shape_166.setTransform(535.14, 293.5357, 2, 2)

    this.shape_167 = new cjs.Shape()
    this.shape_167.graphics
      .f("#634138")
      .s()
      .p(
        "AAAADIgCgEQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABIACAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg",
      )
    this.shape_167.setTransform(541.25, 303.7875, 2, 2)

    this.shape_168 = new cjs.Shape()
    this.shape_168.graphics
      .f("#634138")
      .s()
      .p(
        "AAAADIgCgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIADADQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABIgBAAIgBgBg",
      )
    this.shape_168.setTransform(539.2208, 307.8725, 2, 2)

    this.shape_169 = new cjs.Shape()
    this.shape_169.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgCgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIACABQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAIgBgBg",
      )
    this.shape_169.setTransform(534.9708, 307.1433, 2, 2)

    this.shape_170 = new cjs.Shape()
    this.shape_170.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgBgCQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABIABABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgBAAIgBgBg",
      )
    this.shape_170.setTransform(532.15, 310.99, 2, 2)

    this.shape_171 = new cjs.Shape()
    this.shape_171.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgBgBQAAgBgBAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAABAAAAIACABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAgBABIgBABIgBgBg",
      )
    this.shape_171.setTransform(526.715, 310.65, 2, 2)

    this.shape_172 = new cjs.Shape()
    this.shape_172.graphics
      .f("#C9C489")
      .s()
      .p(
        "Ag9AdQgGgJAFACIALAEQAUAGAUgEQAUgDAQgMQASgMAIgPQAFgKACgIQAAgKADABQADAAABAFQACAHgDALQgDAJgIAMQgMAUgYALQgTAIgVAAQgZAAgNgNg",
      )
    this.shape_172.setTransform(534.5868, 306.7409, 2, 2)

    this.shape_173 = new cjs.Shape()
    this.shape_173.graphics
      .f("#E8664A")
      .s()
      .p(
        "Ag7AeIAAAAIgCgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQA/gaA4gjQABgBAAAAQABAAAAAAQABAAAAABQAAAAAAABQABARgJAQQgKAPgRAJQgWAMgZAAQgSAAgVgGg",
      )
    this.shape_173.setTransform(534.297, 306.0702, 2, 2)

    this.shape_174 = new cjs.Shape()
    this.shape_174.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgBgCQgBAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAABQAAAAAAAAIABABQAAAAAAAAQABABgBAAQAAAAAAABQAAAAAAAAIgCABIAAgBg",
      )
    this.shape_174.setTransform(512.4775, 289.45, 2, 2)

    this.shape_175 = new cjs.Shape()
    this.shape_175.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgCgCQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIABABQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBABIAAgBg",
      )
    this.shape_175.setTransform(509.3208, 292.7, 2, 2)

    this.shape_176 = new cjs.Shape()
    this.shape_176.graphics
      .f("#634138")
      .s()
      .p(
        "AAAACIgCgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIABABQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgBAAIAAgBg",
      )
    this.shape_176.setTransform(504.5208, 293.7, 2, 2)

    this.shape_177 = new cjs.Shape()
    this.shape_177.graphics
      .f("#634138")
      .s()
      .p(
        "AAAADIgCgDQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABADQABAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCAAIAAAAg",
      )
    this.shape_177.setTransform(499.3275, 296.6, 2, 2)

    this.shape_178 = new cjs.Shape()
    this.shape_178.graphics
      .f("#C9C489")
      .s()
      .p(
        "AhDAiQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAXAAIAAgBQAigFAcgRQAcgRASgaQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAABQgNAngoAUQgZANgcAAQgPAAgQgEg",
      )
    this.shape_178.setTransform(505.8583, 292.2303, 2, 2)

    this.shape_179 = new cjs.Shape()
    this.shape_179.graphics
      .f("#E8664A")
      .s()
      .p(
        "Ag/AjIgBgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBICAhAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgTAfgkASQgeAQglAAIgIAAg",
      )
    this.shape_179.setTransform(505.7275, 292.22, 2, 2)

    this.shape_180 = new cjs.Shape()
    this.shape_180.graphics
      .f("#634138")
      .s()
      .p(
        "AgBACIAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAg",
      )
    this.shape_180.setTransform(520.25, 304.8, 2, 2)

    this.shape_181 = new cjs.Shape()
    this.shape_181.graphics
      .f("#634138")
      .s()
      .p(
        "AgBACIAAgDQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAADQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAg",
      )
    this.shape_181.setTransform(516.1017, 307.55, 2, 2)

    this.shape_182 = new cjs.Shape()
    this.shape_182.graphics
      .f("#634138")
      .s()
      .p(
        "AgBABIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBg",
      )
    this.shape_182.setTransform(513.75, 304.6, 2, 2)

    this.shape_183 = new cjs.Shape()
    this.shape_183.graphics
      .f("#634138")
      .s()
      .p(
        "AgBACIAAgDQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg",
      )
    this.shape_183.setTransform(508.65, 306.55, 2, 2)

    this.shape_184 = new cjs.Shape()
    this.shape_184.graphics
      .f("#634138")
      .s()
      .p(
        "AgBACIAAgDQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg",
      )
    this.shape_184.setTransform(505.84, 303.9, 2, 2)

    this.shape_185 = new cjs.Shape()
    this.shape_185.graphics
      .f("#C9C489")
      .s()
      .p(
        "AAAAcQgVgBgTgMQgRgLgIgQQgEgJAAgDQAAgGAFAGIAFAIQADAGAGAFQAJAKAPAGQAcANAcgMQAegNAFgQIABgCIACgBQAEgBgEAIIgGAKQgIAKgIAGQgUAPgYAAIgCAAg",
      )
    this.shape_185.setTransform(512.5, 306.8059, 2, 2)

    this.shape_186 = new cjs.Shape()
    this.shape_186.graphics
      .f("#E8664A")
      .s()
      .p(
        "AgFAYQgWgCgRgNQgQgLgHgSQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAICHAIQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBABIgCADQgKARgUAJQgQAIgSAAIgHAAg",
      )
    this.shape_186.setTransform(512.4257, 306.3348, 2, 2)

    this.shape_187 = new cjs.Shape()
    this.shape_187.graphics
      .f("#472F28")
      .s()
      .p(
        "Ah+AOQgdgLgLgRQgGgJgBgIQAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAGAGAJQAKAQAbAJQAcAMAuAFQAoAEAogBQA+gBAlgTIAmgUQABgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABgBAAQAAABAAAAQAAABgBAAIgnAVQgRAJgcAFQgcAGgdAAIgOABQhcAAgzgVg",
      )
    this.shape_187.setTransform(525.3063, 310.95, 2, 2)

    this.shape_188 = new cjs.Shape()
    this.shape_188.graphics
      .f("#634138")
      .s()
      .p(
        "Ag4BOQgzgGgbgIQgvgPgLgbQgFgNAGgPQAGgOAMgLQAVgTAjgMQAYgHApgHQBEgKBEAMQAuAHAhAUQAuAcgUAkQgOAYgfAPQgXAKglAHQgrAIgqAAQgbAAgcgDg",
      )
    this.shape_188.setTransform(526.8, 304.0633, 2, 2)

    this.shape_189 = new cjs.Shape()
    this.shape_189.graphics
      .f("#FFE3CC")
      .s()
      .p("AgNALQgigCAAgCQAAgCAKgHQALgJAFgBQAGgBAdADQAfACACABQADABgKAJQgKAKgFAAIgmgCg")
    this.shape_189.setTransform(317.1752, 334.0678, 1.6736, 1.7142)

    this.shape_190 = new cjs.Shape()
    this.shape_190.graphics
      .f("#EDAF7B")
      .s()
      .p("AgIANQgkgCgBgBIgCgJIBfgOIAAAMIgIAHQgIAHgDAAIgGABIgfgBg")
    this.shape_190.setTransform(317.1592, 335.1779, 1.6736, 1.7142)

    this.shape_191 = new cjs.Shape()
    this.shape_191.graphics
      .f("#E68393")
      .s()
      .p("AgfAKQgQgBACgHIAmgNIA1AFQAAAEgDACQgFAIgLADQgFABgLAAQgPAAgbgCg")
    this.shape_191.setTransform(317.2666, 336.1276, 1.6736, 1.7142)

    this.shape_192 = new cjs.Shape()
    this.shape_192.graphics
      .f("#FFE3CC")
      .s()
      .p("AgNALQgigCAAgCQAAgCAKgHQALgJAFgBQAGgBAdADQAfACACABQADABgKAJQgKAKgFAAIgmgCg")
    this.shape_192.setTransform(317.1752, 336.3819, 1.6736, 1.7142)

    this.shape_193 = new cjs.Shape()
    this.shape_193.graphics
      .f("#EDAF7B")
      .s()
      .p("AgIANQgkgCgBgBIgCgJIBfgOIAAAMIgIAHQgIAHgDAAIgGABIgfgBg")
    this.shape_193.setTransform(317.1592, 337.492, 1.6736, 1.7142)

    this.shape_194 = new cjs.Shape()
    this.shape_194.graphics
      .f("#FFE3CC")
      .s()
      .p("AgNALQgigCAAgCQAAgCAKgHQALgJAFgBQAGgBAdADQAfACACABQADABgKAJQgKAKgFAAIgmgCg")
    this.shape_194.setTransform(302.6989, 328.9253, 1.6736, 1.7142)

    this.shape_195 = new cjs.Shape()
    this.shape_195.graphics
      .f("#EDAF7B")
      .s()
      .p("AgJANQgkgCAAgBIgCgJIBfgOIAAAMIgIAHQgJAHgCAAIgGABIgggBg")
    this.shape_195.setTransform(302.6828, 330.0355, 1.6736, 1.7142)

    this.shape_196 = new cjs.Shape()
    this.shape_196.graphics
      .f("#E68393")
      .s()
      .p(
        "AgfAKQgKgBgDgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAmgNIA1AGQAAADgDADQgFAHgLADQgFABgMAAQgPAAgagCg",
      )
    this.shape_196.setTransform(302.7978, 331.0064, 1.6736, 1.7142)

    this.shape_197 = new cjs.Shape()
    this.shape_197.graphics
      .f("#FFE3CC")
      .s()
      .p("AgNALQgigCAAgBQAAgDAKgHQALgJAFgBQAGgBAdADQAfACACABQADABgKAJQgKAKgFAAIgmgCg")
    this.shape_197.setTransform(302.6989, 331.2394, 1.6736, 1.7142)

    this.shape_198 = new cjs.Shape()
    this.shape_198.graphics
      .f("#EDAF7B")
      .s()
      .p("AgJANQgkgCAAgBIgCgJIBfgOIAAAMIgIAHQgJAHgCAAIgGABIgggBg")
    this.shape_198.setTransform(302.6828, 332.3496, 1.6736, 1.7142)

    this.shape_199 = new cjs.Shape()
    this.shape_199.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AAMAbQg+AAghgPQgUgJgIgNQgEgHAAgFQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQABASAbALQATAJAeADQAbAEAagBQApgBAYgOQAOgGALgJQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgMAIgOAIQgZAOgrABg",
      )
    this.shape_199.setTransform(308.3636, 339.749, 1.6736, 1.7142)

    this.shape_200 = new cjs.Shape()
    this.shape_200.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AglA6QgjgFgQgGQgggLgHgUQgDgKAEgLQADgKAJgIQAXgYA5gJQAugHAsAIQAgAGAUAOQAfAVgOAaQgPAfg3ALQgcAGgcAAQgSAAgSgCg",
      )
    this.shape_200.setTransform(309.1727, 335.4145, 1.6736, 1.7142)

    this.shape_201 = new cjs.Shape()
    this.shape_201.graphics
      .f("#361C15")
      .s()
      .p(
        "AAAADQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIACgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAgBAAIAAABQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAAAg",
      )
    this.shape_201.setTransform(389, 355.7267, 2, 2)

    this.shape_202 = new cjs.Shape()
    this.shape_202.graphics
      .f("#361C15")
      .s()
      .p(
        "AgBABIAAgBQAAAAAAAAQgBAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIABABQABABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBg",
      )
    this.shape_202.setTransform(386.92, 355.92, 2, 2)

    this.shape_203 = new cjs.Shape()
    this.shape_203.graphics
      .f("#F5E7D8")
      .s()
      .p("AgCATQgKgBgGgIQgGgJADgIQACgIAHgCQAHgCAGADQAIgFAHAGQAHAGAAAIQAAAJgIAGQgFAFgIAAIgEAAg")
    this.shape_203.setTransform(387.7053, 356.3924, 2, 2)

    this.shape_204 = new cjs.Shape()
    this.shape_204.graphics
      .f("#E8664A")
      .s()
      .p("AgMAMQgIgJAGgLQAEgGAEgEIAXAiIgLACIgDABQgKAAgFgHg")
    this.shape_204.setTransform(385.7086, 356.8125, 2, 2)

    this.shape_205 = new cjs.Shape()
    this.shape_205.graphics
      .f("#E8664A")
      .s()
      .p("AgBAZQgMAAgIgJQgJgJACgLQACgKAIgEQAIgFAKADQAHgIAKAGQALAFABAMQACAMgKAKQgJAIgLAAIgCAAg")
    this.shape_205.setTransform(387.897, 344.5354, 2, 2)

    this.shape_206 = new cjs.Shape()
    this.shape_206.graphics
      .f("#E8664A")
      .s()
      .p("AgKAXQgLgFgFgLQgFgKAGgLQAFgJAKgBQAJgCAGAGQAKgEAIAJQAIAJgCAKQgDANgNAGQgGADgGAAQgFAAgGgDg")
    this.shape_206.setTransform(372.8323, 351.445, 2, 2)

    this.shape_207 = new cjs.Shape()
    this.shape_207.graphics
      .f("#F5E7D8")
      .s()
      .p(
        "AgZAdQhTgPgCgEQgDgHAmgrQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAgBABQgcAigFAIQANAFBJANQBHANAHgBQAJgEAlgwQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgnAygKAEIgDAAQgMAAhIgNg",
      )
    this.shape_207.setTransform(380.2921, 357.9111, 2, 2)

    this.shape_208 = new cjs.Shape()
    this.shape_208.graphics
      .f("#FFFFFF")
      .s()
      .p("AgtA+QhdgSgEgFQgFgFAwg1QAvg2APgCQARgCBNALQBRALAFAHQAEAHgpA5QgpA3gJAFIgFAAQgTAAhNgOg")
    this.shape_208.setTransform(383.3051, 353.3776, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_208},
            {t: this.shape_207},
            {t: this.shape_206},
            {t: this.shape_205},
            {t: this.shape_204},
            {t: this.shape_203},
            {t: this.shape_202},
            {t: this.shape_201},
            {t: this.shape_200},
            {t: this.shape_199},
            {t: this.shape_198},
            {t: this.shape_197},
            {t: this.shape_196},
            {t: this.shape_195},
            {t: this.shape_194},
            {t: this.shape_193},
            {t: this.shape_192},
            {t: this.shape_191},
            {t: this.shape_190},
            {t: this.shape_189},
            {t: this.shape_188},
            {t: this.shape_187},
            {t: this.shape_186},
            {t: this.shape_185},
            {t: this.shape_184},
            {t: this.shape_183},
            {t: this.shape_182},
            {t: this.shape_181},
            {t: this.shape_180},
            {t: this.shape_179},
            {t: this.shape_178},
            {t: this.shape_177},
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
          ],
        })
        .wait(150),
    )

    // Calque_2
    this.shape_209 = new cjs.Shape()
    this.shape_209.graphics
      .f("#C9C489")
      .s()
      .p("AAwAkQgYgCgXgHQgXgGgbgWQgWgRgFgKQgEgHAOgBQAQgBATAHQASAGAaATIAYARQAfAGAIAAQAEAAgFAJIgHAKg")
    this.shape_209.setTransform(346.116, 270.9375, 2, 2)

    this.shape_210 = new cjs.Shape()
    this.shape_210.graphics
      .f("#BEB770")
      .s()
      .p(
        "AATA0IgCgNQgDgQgGgSQgIgcgWgaQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABAAAAQAXAbAJAdQAFASADAQIACANQABABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg",
      )
    this.shape_210.setTransform(347.12, 256.925, 2, 2)

    this.shape_211 = new cjs.Shape()
    this.shape_211.graphics
      .f("#BEB770")
      .s()
      .p(
        "AAJA5IgBgOQgBgSgEgSQgEgcgNgjQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAMAiAFAdQAEASACATIABAOQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBg",
      )
    this.shape_211.setTransform(353.6, 257.4214, 2, 2)

    this.shape_212 = new cjs.Shape()
    this.shape_212.graphics
      .f("#C9C489")
      .s()
      .p(
        "AgPCGQgXAAgagjQgsg5gWhIIgFgUQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAOAKATATQgfgwgHg7QgBAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIADAAQAxAlAdBDQgHgsAXgkQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAQAdBZgEBZQALhBAhg3QAPgTADADQAJAFgHAlQgFAcgIAYQgNAjgVAkQAZgXAigLQAQgFAOgCIAVgDQASgCABAEQABADgKAJQgFAGgMAKQgcAVg1AVQgVAIgVAAIgEAAg",
      )
    this.shape_212.setTransform(362.2995, 251.3429, 2, 2)

    this.shape_213 = new cjs.Shape()
    this.shape_213.graphics
      .f("#A0501A")
      .s()
      .p(
        "AGjF+QAbg6Akg/QhgAAhMgCQg1BTgUAiIgEAAQAZgrAvhKQhggDhOgFIgogEIhCByIgEAAIBChzIjegVQgwBBgdA2IgFAAQAdg3AxhBQh3gMg8gEIg8gFQg1BGgbA6IgEAAQAcg+A0hCQh5gHiSAAQgqBAgUA+IgEAAQAUg+AqhAIjWADQgqA3gcA9IgDAAQAYg5Asg7IjDAJQgtAzgZAvIgFAAQAagwArgyIg+ACIAEgCIA9gDIAogrQAWgXBShOIg9AAIACgDIA/AAIA1gzQAqgpAaggIhQgDIADgCIBQACIAEgGQAfgmApg7IARgZIhIAFIADgEIBHgFQAvhFAggpIgpAAIADgCIAoAAQAggpAcgcIAFAAQgcAdgSAVIgOATIEHABQAcgmARgeIAEAAQgVAmgXAeICXADQAZgiASgiIAFAAQgQAdgaAnQBVACBqAEIAlhFIAFAAIgmBFQBdADBdAGQAQgjAOgjIAEAAIgdBGIAIAAICrAMIAjhFIAEABIgkBFIDnAUQAOgpAHgjIAFAAQgJApgNAkIAuADQB0AMA/AEIBFhRIAEAAIhEBRICiAMQAlguAngtIAGAAIhOBbQBMAGA7ABIgCADIhPgEIg4gCQg0BAgnA3ICUAGIgCACIiQgFIgEAAQgfAqghA0ICNAHIgCACIiNgHQgbArgZAvIgbA1ICAAIIgCACIh/gHQgcA6gUA8QBNACA3ADIgBACQhJgEg7AAQgUA7gNA5IgEABQAMg6AVg7IjjABQglBBgaA5gAHoECIDigBIACgHQAUg5Aag2IjFgLQgvBLgeA3gAE3EBICsABIBOiCIidgJgABdD0IBlAIQAyAEA/ABIAOgVIBPh1IjmgNgAiFDdQCTARBKAGIBOiKIjLgLIhgB+gAl3DJIB2AIIB3AMIBhh/IjogMQhCBIgkAvgAvjCDQgpApgdAhIDEgIIAbgiQAqgxA1gyIiugDIhKBGgAqHDBQCGAACEAHIASgUQAigrAyg3Qh5gHiVgFQg9BFglA2gAthDFICRgEIBFAAIATgcQAhguAugxQhfgFhdgBQhLBGgxA/gAJ0AjQgdApggAyIDEAKQAjhIAshHIizgHgAGhBkIgMARICeAIQA0hQAsg7IilgHQglA9goA8gACrBnIDmANQA5hUAgg1Ij1gIgAgEAzIgfAoIDKAMIBJiEIi6gGQgbApgfAtgAj+A9IgRASIDoAMIBZh+IjXgIQglAtg0A7gAn8AbIgmAnIEOANQBJhQAhgqIkBgJIhRBPgArBAeIgiAfIC8AFQAqgtBMhJIipgHQhFA7giAegAt2AcIggAeICvADQAfgeBphaIi+gHQgpAxgwAtgAKZgQICzAHQAcgtAjgxIirgHIhHBegAHwgXIClAHQAlg0AigrIi1gJQgYAtgfA0gAD2ggID1AJIAZgpIAeg4Ij1gPIg3BngAA5gmIC4AGIA4hnIivgOQgeA3gjA4gAiLhNIgYAfIDXAHQAjg2AYgrIAHgNIjDgRQgcArgiAugAmpg3IECAJQAUgaAPgVQAYggAagpIjVgUQgqAthYBWgApXg9ICqAGICBiDQhKgGhNgEQgyAyhiBVgAq9jFIglA2QgcAqgdAgIC/AIIBMhCQAlgiAkgjIgJgBQhFgDg9AAQg4AAgzADgALihxICrAHIAEgGQAlg0Azg+QhJgEhagIQg3BCgtA7gAJMjHQgOAggWAsIC2AKIBjh9IjfgUQgJAbgNAggAEuiKQCEAJBFAEIAsACQAlhIAWg/IjngUgADAkgQggBIglBBICvAMIBJiLQhjgIhPgFgAgnjkQgYAogNATIDEASQAmhFAehHIgqgDIiQgGIgpBIgAjekNQghApglAoIDUATQAng9AnhGIjAgGIgcAlgAmGkEQgaAdgfAgICWALQA8hBAlg1IiXgDQgQAWgXAbgAnFjHQA9g8AkgyQh1gCiTAAQgfAogvBGQAxgCAzAAQBHAABKAEg",
      )
    this.shape_213.setTransform(345.2, 349.2, 2, 2)

    this.shape_214 = new cjs.Shape()
    this.shape_214.graphics
      .f("#B76127")
      .s()
      .p(
        "AGuF/IgFgBQgnAAgmgBIhpgFIgEAAIjPgPIgFAAIjpgRIgEAAQhogHiJgHIgEAAIhPgDImQgNQiXgFgugDIgEgBQg3gEgDgDQgHgIAWgcQASgYAagWIAJgJQBCg+BOhUIACgDQBChIAggtIAJgNQAiguBDhKIADgEQA1g7A4g4IADgDQBAhAAMgDIAYgBIAFAAQA6gBC+ADIFeAIQCBAEAxAEIAEAAIGaAbQDCALBOADIAEAAQBZAEAxgBIAmAAQBLgCAQADQANABABALQABAGgwBPIgCADQgnA+gnA4IgCADQgiAwglAwIgPARQguA5giBHIgCADQgaA4gRA7IgBADIgRA/QgIAZgEADQgSANh2AIIgEAAQhhAHh0AAIgrAAg",
      )
    this.shape_214.setTransform(343.9831, 349.2154, 2, 2)

    this.shape_215 = new cjs.Shape()
    this.shape_215.graphics
      .f("#74A33D")
      .s()
      .p(
        "AiFDKQgOgCgQgFIgKgDQgHgDgBgDQgBgGAZgKIAlgOQA7gRA3ANQgzgeghgeQgYgWgYgeQgggmAGgKQADgGAdANQBJAqA3BCQg+hngWh1QAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAyAdATA1QgJheAghKQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAdBIgGBLQAIgbANgbQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAYBbgRBcQAphhA+hUQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQABA+gxBoQgyBegCABQgUAZgWAHQg9AUg7AAQgbAAgagFg",
      )
    this.shape_215.setTransform(222.4461, 239.5072, 2, 2)

    this.shape_216 = new cjs.Shape()
    this.shape_216.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAPAOIgggWQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABABIAfAVQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDABg",
      )
    this.shape_216.setTransform(258.0754, 251.7938, 2, 2)

    this.shape_217 = new cjs.Shape()
    this.shape_217.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgTAgQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAkg6QAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgkA6QAAABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAg",
      )
    this.shape_217.setTransform(262.581, 235.27, 2, 2)

    this.shape_218 = new cjs.Shape()
    this.shape_218.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgMALQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAVgSQABAAAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgWASIgBAAg",
      )
    this.shape_218.setTransform(262.7, 215.1357, 2, 2)

    this.shape_219 = new cjs.Shape()
    this.shape_219.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAJAdQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgSg1QgBAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIASA1QABABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAg",
      )
    this.shape_219.setTransform(257.75, 215.6214, 2, 2)

    this.shape_220 = new cjs.Shape()
    this.shape_220.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAXC1IgZhOQgZhXAAgzQAAg0AQgzQAHgaAHgQQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgIAQgHAaQgQAyAAAzQAAAyAYBXIAaBNQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg",
      )
    this.shape_220.setTransform(263.5286, 240.6938, 2, 2)

    this.shape_221 = new cjs.Shape()
    this.shape_221.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAFAKIgNgPQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAABABAAIAMAPQAAABABAAQAAABAAAAQAAABgBAAQAAABgBAAIgBABg",
      )
    this.shape_221.setTransform(453.7, 234.1611, 2, 2)

    this.shape_222 = new cjs.Shape()
    this.shape_222.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgRAWQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAggmQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAIgfAmQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg",
      )
    this.shape_222.setTransform(458.3246, 235.3611, 2, 2)

    this.shape_223 = new cjs.Shape()
    this.shape_223.graphics
      .f("#4A6828")
      .s()
      .p(
        "AANAWIgegoQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAABABAAQAAAAABABIAeAoQAAABAAAAQABABAAAAQgBABAAAAQAAABgBAAIgCABIgCgCg",
      )
    this.shape_223.setTransform(453.6746, 208.4857, 2, 2)

    this.shape_224 = new cjs.Shape()
    this.shape_224.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgJAUQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAQghQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgQAhIgDACg",
      )
    this.shape_224.setTransform(457.9277, 201.1214, 2, 2)

    this.shape_225 = new cjs.Shape()
    this.shape_225.graphics
      .f("#4A6828")
      .s()
      .p(
        "AASDPQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIgLgeQgLglgCgdQgIhmAKhJQAEgigEgoQgEgkgJgbQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAIAdAEAkQAFApgFAiQgKBMAJBiQACAdALAkIAKAeQABAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAg",
      )
    this.shape_225.setTransform(457.325, 233, 2, 2)

    this.shape_226 = new cjs.Shape()
    this.shape_226.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgIAmIAMhNQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAABAAAAIgNBNQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBABgBg",
      )
    this.shape_226.setTransform(397.1, 226.625, 2, 2)

    this.shape_227 = new cjs.Shape()
    this.shape_227.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAfAVIgCAAIg8gkQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIA9AkQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIgCABIgBAAg",
      )
    this.shape_227.setTransform(390.7, 234.25, 2, 2)

    this.shape_228 = new cjs.Shape()
    this.shape_228.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgOABQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABABIAeADQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg",
      )
    this.shape_228.setTransform(376.4778, 203.5778, 2, 2)

    this.shape_229 = new cjs.Shape()
    this.shape_229.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgCATIABgmQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIgCAlQAAABAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBABgBg",
      )
    this.shape_229.setTransform(384.0778, 205.25, 2, 2)

    this.shape_230 = new cjs.Shape()
    this.shape_230.graphics
      .f("#4A6828")
      .s()
      .p(
        "ABVCuQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIghhqQgkhugUgkQgUgjgggeQgQgPgMgIQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQANAJAQAPQAgAfAVAjQAVAkAjBtIAhBtQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAg",
      )
    this.shape_230.setTransform(388.2607, 230.7111, 2, 2)

    this.shape_231 = new cjs.Shape()
    this.shape_231.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAeB6IgZgkQgagtgIgpQgIgoAFgtQADgWAEgOQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgEAOgDAWQgFAqAIApQAIAnAZAsIAYAkQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgCAAg",
      )
    this.shape_231.setTransform(277.3577, 249.9214, 2, 2)

    this.shape_232 = new cjs.Shape()
    this.shape_232.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAJBDQgEgFgGgVQgLgdgBgVQgCgjAGgWQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgHAVADAiQABAUAKAdIAKAYQAAABABABQAAAAAAABQgBAAAAABQAAAAgBAAIgCABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg",
      )
    this.shape_232.setTransform(299.2329, 252.725, 2, 2)

    this.shape_233 = new cjs.Shape()
    this.shape_233.graphics
      .f("#4A6828")
      .s()
      .p(
        "Ag7BoQgBAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAFgLQAIgNANgSQAOgSAfggIAegdQAUgUgEgZQgDgVgUgIQgOgIgfAJQgQADgNAGQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBABgBQAAAAAAgBQABAAABgBQAOgFARgFQAfgIARAIQAVAKAFAYQAEAbgWAYIgeAdQgeAegOASQgNASgIANIgEAKQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAg",
      )
    this.shape_233.setTransform(317.2978, 243.1, 2, 2)

    this.shape_234 = new cjs.Shape()
    this.shape_234.graphics
      .f("#4A6828")
      .s()
      .p(
        "ABMB4QgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgSggQgVgngSgdQgbgwhBhVQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQBBBWAcAwIAnBEIASAgQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAg",
      )
    this.shape_234.setTransform(347.7897, 244.7857, 2, 2)

    this.shape_235 = new cjs.Shape()
    this.shape_235.graphics
      .f("#4A6828")
      .s()
      .p(
        "ABmCCIgugXQg1gggpgzQgcghgWg9QgLgegGgZQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAABQAFAYALAeQAWA8AcAgQAoAyA0AgIAtAWQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAg",
      )
    this.shape_235.setTransform(370.85, 244.175, 2, 2)

    this.shape_236 = new cjs.Shape()
    this.shape_236.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAhBIIgjg2QgRgcgRg6QgBgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQARA6AQAbIAYAlIALAQQAAABABAAQAAABAAAAQAAABgBAAQAAABAAAAIgCABIgCgBg",
      )
    this.shape_236.setTransform(389.6893, 256.1214, 2, 2)

    this.shape_237 = new cjs.Shape()
    this.shape_237.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAjBcQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEgQQgFgVgJgbQgOgpgkhIQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAABQAjBIAPApQAJAbAGAWIAEAQQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg",
      )
    this.shape_237.setTransform(405.62, 229.27, 2, 2)

    this.shape_238 = new cjs.Shape()
    this.shape_238.graphics
      .f("#4A6828")
      .s()
      .p(
        "AAKCGIgKglQgNgvgCg5QgCg6AGgnQADgUAEgJQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABgBABQgDAIgDAUQgGAmADA5QACA4ALAvIALAkQABAAAAABQAAAAAAABQAAAAAAAAQgBABgBAAIgBABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg",
      )
    this.shape_238.setTransform(447.7065, 239.6714, 2, 2)

    this.shape_239 = new cjs.Shape()
    this.shape_239.graphics
      .f("#4A6828")
      .s()
      .p(
        "AALByQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgSiCQgJhAAIgdQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAABQABAAAAAAQAAABgBABQgHAcAIA+IASCCQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAg",
      )
    this.shape_239.setTransform(468.2234, 255.275, 2, 2)

    this.shape_240 = new cjs.Shape()
    this.shape_240.graphics
      .f("#4A6828")
      .s()
      .p(
        "AgfA8QgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAJgVQALgZAHgMQALgWAZgiQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQgBABAAAAQgYAigLAVQgHANgLAYIgJAWQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg",
      )
    this.shape_240.setTransform(477.7893, 266.5357, 2, 2)

    this.shape_241 = new cjs.Shape()
    this.shape_241.graphics
      .f("#5E8436")
      .s()
      .p(
        "Ag2ERQjOgJhMgWQgPgFgKgbQgHgTgNiHQgJhBAPhMQAKgzATggQARgdAOARQAMAQgCAoIgCBCQAMg0ARABQALABAGAXIAJApQAGAdAJAbQAFgfAOgWQACgFAHgHIgNgYIgKgXQgDgIADgIQACgHAFgEQAGgEAIAAIANABQAgAHAaAmQgGgwADg1QAAgQADgSQACgSAEgJQAFgKAHAEQAFAEADAPIAGAhQACATAEAUQAFAiAHAcQgBgWADgNQAFgbANADQANAEAHAjIAOA6QAHAZANAcQAJARAHAMQgGg6gLg0QgHgigMgpQgKgnAGgWQAFgOAGgCQAHgDAKAKQAOAPAPAXQARAbALAgQABg3AOgkQALgjASgIQAJgEAGAGQAIAHABAQQAAAIgBALIgCAUQgCAVABARQAAAlAHAmQAIAuASAlIAAgLIgCg9IgGg3QgBgaAGgPQAGgQAKABQAKACAHAVQAFAMAFAZIAChCQABgbAHgNQAEgJAGgBQAGgCAGAFQALAKAFAgQAOBDgHBrQAJghAOgZQAPgaAPAEQAHADAEAMQAEALAAAPQgBAPgFAUQgGAagCAMQgDAZgCAzIANgeQAIgTAIgYQAJgWAFgEQAKgHAGASQAEANABAUQADA0gMAzQAPgPAQABQAOADAAAPQAAAKgGAKQgEAKgGAKQgNAYgJALQgOASgNAFQhpAujRAAIg9gBg",
      )
    this.shape_241.setTransform(659.3189, 194.8137, 2.3, 2.3)

    this.shape_242 = new cjs.Shape()
    this.shape_242.graphics
      .f("#5E8436")
      .s()
      .p(
        "AHaDqQgLgGgIgHQgOAHgWAAIgjgCQgigDhCgMIiEgSQhZgMgzgBIg+gEQgmgCgZADQgZADgkAIIg8ANQhNAQhZgKQgZgDgiALQgjAMghAHQguAJgYgHQgdgJgPgWQgIgLgOg9IgQhLQgRhAAYhGQARgxAigeQAfgbAXAQQAXAQgDAnQgDAiAAAcQAUgyAeACQAUABAMAXIAQAnQAMAbAQAaQAJgeAXgUIAQgLIgWgXIgLgLQgGgGgDgFQgEgIAEgIQAFgGAJgEQAPgGAgAEQA7AIAtAkQgLgyAEguQAAgPAEgRQAEgSAHgIQAIgKAMAEQAKAEAGAPQADAEAHAbIALAlQAKAdAOAfQgCgUAFgOQADgKAIgGQAJgHALACQAXADAOAhQATAsAHAMQAQAcAUAWQANAPAQAOQgMg3gUgyQgLgbgYgtQgTglALgVQAHgNAMgCQAMgDATAKQAbAPAZAWQAdAZAWAgQABgzAXgjQAXgiAdgHQAPgDAMAGQANAGACAQQABAHgCALIgDASQgCAQAAAVQACAjAMAkQAQAsAgAjIAAgJQAAgagFghIgFgaIgFgaQgDgYAKgPQALgPARABQASADAOATQAJAMAJAYIAAgfIACggQACgbALgLQAHgIALgCQALgBAKAFQATAJALAfQAaBEgLBiQARghAXgVQAbgZAaAFQANACAHAMQAHAKAAAOQgBANgJAVQgKAVgDAPQgEARgEA3IAXgcQAPgUANgVQAPgVAKgEQAQgGALARQAHAMADAUQAHAzgWAvQAZgOAfACQAYACABAPQAAAJgKAKIgSATQgrAogsAOQgYAIgWAAQgbAAgZgMg",
      )
    this.shape_242.setTransform(382.9208, 234.6217, 2, 2)

    this.shape_243 = new cjs.Shape()
    this.shape_243.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgGAIQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAJgJQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgJAJIgCABg",
      )
    this.shape_243.setTransform(415.4, 442.8, 2, 2)

    this.shape_244 = new cjs.Shape()
    this.shape_244.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgIAPQAAAAgBgBQgBAAAAgBQAAAAAAAAQAAgBAAgBIADgHQADgGAEgEIAGgHQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgHAHQgDACgCAHIgCAGQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAg",
      )
    this.shape_244.setTransform(412.05, 441.625, 2, 2)

    this.shape_245 = new cjs.Shape()
    this.shape_245.graphics
      .f("#7A7432")
      .s()
      .p(
        "AABAKIgEgNIgCgDQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAACAFIAEANQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg",
      )
    this.shape_245.setTransform(402.65, 441.95, 2, 2)

    this.shape_246 = new cjs.Shape()
    this.shape_246.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAGARQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgEgPIgEgHIgDgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQAGAHACAHIAEAPQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAg",
      )
    this.shape_246.setTransform(405.1857, 441.0611, 2, 2)

    this.shape_247 = new cjs.Shape()
    this.shape_247.graphics
      .f("#7A7432")
      .s()
      .p(
        "AADAKQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAgBIgGgMQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAABAAAAIAGANQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABg",
      )
    this.shape_247.setTransform(539.9942, 306.8714, 2, 2)

    this.shape_248 = new cjs.Shape()
    this.shape_248.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgKANQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAVgUQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgWAVg",
      )
    this.shape_248.setTransform(550.7438, 306.425, 2, 2)

    this.shape_249 = new cjs.Shape()
    this.shape_249.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgCALQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABgBIAEgPQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAgBABIgFAPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg",
      )
    this.shape_249.setTransform(546.65, 306.8214, 2, 2)

    this.shape_250 = new cjs.Shape()
    this.shape_250.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAEAOQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgGgVQAAAAgBgBQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABABIAGAUQABABAAAAQAAABgBAAQAAABAAAAQgBAAAAABg",
      )
    this.shape_250.setTransform(543.35, 306.575, 2, 2)

    this.shape_251 = new cjs.Shape()
    this.shape_251.graphics
      .f("#7A7432")
      .s()
      .p(
        "AABANQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIgCgUQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIADAUQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg",
      )
    this.shape_251.setTransform(322.0222, 433.475, 2, 2)

    this.shape_252 = new cjs.Shape()
    this.shape_252.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgFAGQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBABAAIAIgHQAAAAABAAQAAgBABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgIAGIgBABg",
      )
    this.shape_252.setTransform(328.8, 440.2857, 2, 2)

    this.shape_253 = new cjs.Shape()
    this.shape_253.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgFAPIgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgOIAEgJQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgGAKIgFANQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAg",
      )
    this.shape_253.setTransform(325.8464, 438.7786, 2, 2)

    this.shape_254 = new cjs.Shape()
    this.shape_254.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAEAJQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgGgLQAAAAgBgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAHAMQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAg",
      )
    this.shape_254.setTransform(314.67, 439.6167, 2, 2)

    this.shape_255 = new cjs.Shape()
    this.shape_255.graphics
      .f("#7A7432")
      .s()
      .p(
        "AACAPIgCgOQgCgIgDgFQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABABAAAAQABAAAAABQADAGADAJIACAPQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAg",
      )
    this.shape_255.setTransform(316.4857, 437.9857, 2, 2)

    this.shape_256 = new cjs.Shape()
    this.shape_256.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgHAKQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAMgOQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABIgLANIgDABg",
      )
    this.shape_256.setTransform(197.9, 422.35, 2, 2)

    this.shape_257 = new cjs.Shape()
    this.shape_257.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAJAJIgUgNQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABIAUAMQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAg",
      )
    this.shape_257.setTransform(190.5, 424.3357, 2, 2)

    this.shape_258 = new cjs.Shape()
    this.shape_258.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAHAOQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgEgMQgDgEgFgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAFAGADAHIAGAKQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAg",
      )
    this.shape_258.setTransform(193.7536, 423.4357, 2, 2)

    this.shape_259 = new cjs.Shape()
    this.shape_259.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgGAFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAIgFQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgHAGIgDAAg",
      )
    this.shape_259.setTransform(264.3, 308.3364, 2, 2)

    this.shape_260 = new cjs.Shape()
    this.shape_260.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgGAHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAJgJQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgJAJIgCABg",
      )
    this.shape_260.setTransform(261.525, 307.575, 2, 2)

    this.shape_261 = new cjs.Shape()
    this.shape_261.graphics
      .f("#7A7432")
      .s()
      .p(
        "AgKAOQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIALgNIAHgKQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABIgRAWQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg",
      )
    this.shape_261.setTransform(258.8556, 306.425, 2, 2)

    this.shape_262 = new cjs.Shape()
    this.shape_262.graphics
      .f("#7A7432")
      .s()
      .p(
        "AABAJIgHgNQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAABAAAAQABAAAAABIAHANIABACIgCABIgBABg",
      )
    this.shape_262.setTransform(250.5104, 307.6667, 2, 2)

    this.shape_263 = new cjs.Shape()
    this.shape_263.graphics
      .f("#7A7432")
      .s()
      .p(
        "AAGARQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgFgQQgDgGgDgDQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAABABQAAAAABABQADADADAHIAGARQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABg",
      )
    this.shape_263.setTransform(252.35, 306.375, 2, 2)

    this.shape_264 = new cjs.Shape()
    this.shape_264.graphics
      .f("#7FAD4E")
      .s()
      .p(
        "AlZHoQjBgIisgbQhbgOh1gZIjNgvQhPgSiVgMQijgNhDgMQg/gMgigeQgigeAKglQAShEB5hQQBgg5AtgeQBRg1AngtQATgXA1hWQAphFAtgkQA/gyCBgeQBQgSCZgTQDHgYEkgEQEXgGERAPQDcAMDJAYQCtgNCtALQCwAMCiAjQDcAxArBYQAuBch8BgQgqAghNArQhmA7gQALQhEArgkAxQgjAvgNA9QgHAigOAYQgQAegeAWQhIA5iGAUQhLALiwAFQjjAHnFAJQhXAChSAAQhoAAhdgEg",
      )
    this.shape_264.setTransform(353.6138, 361.5944, 2, 2)

    this.shape_265 = new cjs.Shape()
    this.shape_265.graphics
      .f("#74A33D")
      .s()
      .p(
        "AhFDFQgggKgVg3QglhcgChoIAAgcQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAgBQABAAAAAAQAAAAABABQAAAAABABQATAYAPAaQgYhNALhPQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAzBDAOBjQAHg7AsgqQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAGB9glB4QAohTA/g7QAagUAEAFQAJAJgXAuQgQAkgUAdQgbAogrAqQAqgVAxgCQAUgBAVACIAdAEQAZAEAAAFQAAAEgHAFIgJAFQgPAJgOAGQgaALgiAGQgXAFgmAEIgVAAQgZAAgUgGg",
      )
    this.shape_265.setTransform(529.175, 244.198, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_265},
            {t: this.shape_264},
            {t: this.shape_263},
            {t: this.shape_262},
            {t: this.shape_261},
            {t: this.shape_260},
            {t: this.shape_259},
            {t: this.shape_258},
            {t: this.shape_257},
            {t: this.shape_256},
            {t: this.shape_255},
            {t: this.shape_254},
            {t: this.shape_253},
            {t: this.shape_252},
            {t: this.shape_251},
            {t: this.shape_250},
            {t: this.shape_249},
            {t: this.shape_248},
            {t: this.shape_247},
            {t: this.shape_246},
            {t: this.shape_245},
            {t: this.shape_244},
            {t: this.shape_243},
            {t: this.shape_242},
            {t: this.shape_241},
            {t: this.shape_240},
            {t: this.shape_239},
            {t: this.shape_238},
            {t: this.shape_237},
            {t: this.shape_236},
            {t: this.shape_235},
            {t: this.shape_234},
            {t: this.shape_233},
            {t: this.shape_232},
            {t: this.shape_231},
            {t: this.shape_230},
            {t: this.shape_229},
            {t: this.shape_228},
            {t: this.shape_227},
            {t: this.shape_226},
            {t: this.shape_225},
            {t: this.shape_224},
            {t: this.shape_223},
            {t: this.shape_222},
            {t: this.shape_221},
            {t: this.shape_220},
            {t: this.shape_219},
            {t: this.shape_218},
            {t: this.shape_217},
            {t: this.shape_216},
            {t: this.shape_215},
            {t: this.shape_214},
            {t: this.shape_213},
            {t: this.shape_212},
            {t: this.shape_211},
            {t: this.shape_210},
            {t: this.shape_209},
          ],
        })
        .wait(150),
    )

    // Layer_1
    this.shape_266 = new cjs.Shape()
    this.shape_266.graphics
      .f("#5E8436")
      .s()
      .p(
        "AElD7QgFgFgEgGQgJAIgWgDQgPgCgegKIgrALQg1ALgvABQhKADhqgBQh8gBgagGQgZAEgygaQgxgaAJgDIAPgGQA7gVA4AOIABgBQg2gngfgiQg/hFALgVQADgHAeAQQA0AkAIAHQAYAVAZAkQhBiAgXiUQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQA1AjAVBDQgKh1AihdQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAABQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQA2BVAOB6QAIhLAugzQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQADAvgDAtIAhg4QABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQABAkgNA2QAQAKAMARIADgDQgEgsACgiIACgdQACgRADgGQAEgJAGAEQAEADADANIAEAcIAHA3IAJgFQAFgQAIACQAKADAGAeQAFAcAGAUQAGAWAKAYQAEALAIAPQgEgxgJgtQgFgbgKgmQgIgfAFgUQAEgLAFgDQAFgDAIAJQANANALATQANAXAJAcQACgwAKgeQAKgfANgGQAHgDAFAFQAGAGABANIgCAiQgCAQAAAQQABAlAFAbQAGAmAOAgIAAgJQAAgbgBgYIgEgvQgBgWAEgNQAGgPAHACQANADAJAwIABg4QABgXAFgMQAEgHAFgCQAEgBAFAEQAIAJAFAbQALA+gGBWQAJggAJgRQANgWALAEQAGACADAKQADAKAAAMQgBAKgEATIgGAiQgCAQgDAwIAYg+QAHgTAEgEQANgKADAwQADAtgKAsQALgNANABQALABAAAOQABAHgFAKIgIARQgUAlgUANQgKAIgLAAQgLAAgLgKg",
      )
    this.shape_266.setTransform(113.1062, 178.9004, 2.7, 2.7)

    this.timeline.addTween(cjs.Tween.get(this.shape_266).wait(150))

    // canards
    this.instance_5 = new lib.fluxcanard()
    this.instance_5.setTransform(500.65, 175, 1, 1, 0, 0, 0, 75.8, 22.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150))

    // Calque_19
    this.shape_267 = new cjs.Shape()
    this.shape_267.graphics
      .f("#60CFE8")
      .s()
      .p("AgNAIQgGgDAAgFQAAgDAFgEQAFgDAHgBIACAIIABgIQAIABAFADQAGADAAAEQAAAFgGADQgGAEgIAAQgHAAgGgEg")
    this.shape_267.setTransform(516.3547, 194.75, 2.29, 2)

    this.shape_268 = new cjs.Shape()
    this.shape_268.graphics
      .f("#60CFE8")
      .s()
      .p("AgNAIQgGgDAAgFQAAgDAFgEQAFgDAHAAIACAHIABgIQAIABAFADQAGADAAAEQAAAFgGADQgGAEgIAAQgHAAgGgEg")
    this.shape_268.setTransform(575.322, 194.15, 2.29, 2)

    this.shape_269 = new cjs.Shape()
    this.shape_269.graphics
      .f("#60CFE8")
      .s()
      .p("AgTAMQgIgFAAgHQAAgFAHgFQAHgEAKgBIADAKIABgKQALAAAIAEQAIAGAAAFQAAAHgIAFQgJAEgLAAQgKAAgJgEg")
    this.shape_269.setTransform(562.269, 203.7, 2.29, 2)

    this.shape_270 = new cjs.Shape()
    this.shape_270.graphics
      .f("#4DB3CE")
      .s()
      .p(
        "AjMCcQglgBhEgIQhGgIgggBQh2gEhZgEQgjgChHADQhEADghgDQgogDhDgSQhGgTgbgDQgogEhJAEQhEAEgcgFQhWgPg2gaQgygYAAgUQAAgTAzgVQAzgUBZgRIBegRQA+gLAxgGQAggDBEAFQBIAFAkgDQBJgFCGgGQAfgCBFgQQBEgQAlgBIDQgEQAigBBEANQBGAOAiAAQAjAABFgMQBFgMAiAAQAlABBEAHQBGAIAgABIBpAGIBlAGQAkABBHgDQBEgEAhACQAsADBAAJIBiANQBWAKB3AUQBZAQAxAUQAyAUAAATQAAAUgxAXQg0AZhVAPQgeAGhCAAQhLgBglAEQgcADhGARQhDAQgoADQghAChEgGQhHgGgkACIhlAHQhBAGgoABIhmAEIhpAEQgkABhDgEQhHgEghAAQghAAhHAIQhAAIgiAAIgEAAg",
      )
    this.shape_270.setTransform(365.978, 199.6011, 2.2903, 2)

    this.shape_271 = new cjs.Shape()
    this.shape_271.graphics
      .f("#BFCC87")
      .s()
      .p(
        "AjEClQgkAAhAgHQhEgIgegBQglgBhAgHQhEgIgdgCQgigBhEACQhBADgggCQghgChGgBQhAgBghgCQgogEg+gKQhJgNgVgCQgjgEhJgCQg+gCgegGQhQgQg0gaQgxgZAAgUQAAgnC4glQAegFA9gFQBKgFAhgEQAjgEA7gFIBogHQAYgCBHgKQA+gJAogCQAhgCBAAAQBGAAAfgCIDHgGQAfAABDgKQBBgJAjgBQAhAABCAJQBCAJAhAAQAfAABFgEQBAgEAiAAQAgABBEgDQBBgCAiABQAkABBAAJQBEAJAeACQAiABBDgJQBDgJAfABQAnADA/AGIBgAKQAqAEA+AJIBdANQAsAFA+ARQBIAUAQADQBrAWAbAIQAyAOAAASQAAASgwASQgtAQhZASQhHANh9APQgaADhEARQg/AQgnADQggADhBgDQhEgDgjACQghAChAAAIhlADQgdABhFAFQhAAFgkABQgfAAhEAIQhBAIgjAAQhiAChkAAIjGgDg",
      )
    this.shape_271.setTransform(375.1965, 201.7474, 2.2903, 2)

    this.shape_272 = new cjs.Shape()
    this.shape_272.graphics
      .f("#5E8436")
      .s()
      .p(
        "AikAsQgIgOAHgSQAHgRAQgEQANgEAPgMIAYgXQAfgZAmARQArAVAeADQAUADAwgEQAqgEAGAjQAGAhgvANQgbAHhCgRQg6gPgjAUQgsAZgbAAQgYAAgKgUg",
      )
    this.shape_272.setTransform(268.6413, 169.8089, 2, 2)

    this.shape_273 = new cjs.Shape()
    this.shape_273.graphics
      .f("#5E8436")
      .s()
      .p(
        "AgmBJQgEgCh4gKQhggIgHgkIAGgRQALgVARgQQA3g0BqATQBmATA1gIQAsgMAcAAQAwABAjAbQAmAfgRAmQgOAihAgQIgygPQgcgHgNACQgOACg0AgQgdASgUAAQgIAAgHgDg",
      )
    this.shape_273.setTransform(347.5755, 164.0442, 2, 2)

    this.shape_274 = new cjs.Shape()
    this.shape_274.graphics
      .f("#5E8436")
      .s()
      .p(
        "AggA5QgRgGgjgQQgTgGgvAOQgnAEgKgyQAUgaAjgRQBGgiBHAsQAfATAzgLQA6gNAZAIQAqANgEAeQgFAgglgFQgrgGgRACQgbACgmARQgVAJgSAAQgNAAgNgEg",
      )
    this.shape_274.setTransform(429.3348, 166.2084, 2, 2)

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_274},
            {t: this.shape_273},
            {t: this.shape_272},
            {t: this.shape_271},
            {t: this.shape_270},
            {t: this.shape_269},
            {t: this.shape_268},
            {t: this.shape_267},
          ],
        })
        .wait(150),
    )

    this._renderFirstFrame()
  }).prototype = p = new lib.AnMovieClip()
  p.nominalBounds = new cjs.Rectangle(383.2, 348.5, 364.8, 111.5)
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681E",
    width: 750,
    height: 480,
    fps: 24,
    color: "#87B65A",
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681E"] = {
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

