(function (cjs, an) {
  let p; // shortcut to reference prototypes
  let lib = {};
  let ss = {};
  let img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    let clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop, this.reversed),
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    let prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.tetee = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3F4A54")
      .s()
      .p("AgLASQgJgGACgFQAEgHALgJQAKgJAFABQADABADAHQADAIgDABQgHAJgLAFQgHAEgEAAIAAAAg");
    this.shape.setTransform(33.7149, 112.4487, 2.7, 2.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#3F4A54")
      .s()
      .p("AgQALQgEgBgCgIQgBgGACgCQAEgFAQgBQAPgBAIAFQACADAAAFQgBAEgCABQgDAEgLACQgGACgFAAQgHAAgFgCg");
    this.shape_1.setTransform(73.2942, 98.6749, 2.7, 2.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#DDDDDD")
      .s()
      .p("ABsBbQgZAAgugTQh4gxgohGQAmgeAxgKQA8gMA5AbIAAAyQAGA5AeAkQARAUgZAAIgBAAg");
    this.shape_2.setTransform(59.6621, 46.1263, 2.7, 2.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AASAuQgKgOgKgdIgIgXQgFgOgGgIQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAIALAJAcQAGAQAQAiQAAAAAAABQABAAgBABQAAAAAAAAQAAABgBAAIgBAAIgCgBg",
      );
    this.shape_3.setTransform(122.6695, 145.0045, 2.7, 2.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AAfBDIgOgiIgQghQgOgegVgiQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAVAfAQAhQAZAuAFAWQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgBAAIgCgBg",
      );
    this.shape_4.setTransform(150.9224, 124.2453, 2.7, 2.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AAfBQQgDgGgLgfQgJgYgIgTQgOgmgTgnQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQARAhASAtIAQAoQALAcACALQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgBAAIgCgBg",
      );
    this.shape_5.setTransform(144.1478, 142.7129, 2.7, 2.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AghAjQgGgaAXgaQAYgbAaALQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBgBAAAAQgMgFgPAIQgLAGgJALQgMAOgDAeQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgCg",
      );
    this.shape_6.setTransform(9.5417, 43.501, 2.7, 2.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AhFAOQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAAAQAmgZAdAAQApABAeALQABAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgLAAgXgEQgXgEgMAAQgQgBgSAHQgMAEgUAMIgBAAIgCgBg",
      );
    this.shape_7.setTransform(72.0535, 15.5856, 2.7, 2.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AhoAjQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAzgvA+gPQAbgHAZAEQAeAFAOAVQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgWgSgVgEQgYgEgiAKQg2ARgwAmIgBABIgCgBg",
      );
    this.shape_8.setTransform(65.3711, 9.668, 2.7, 2.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#CFCECE")
      .s()
      .p(
        "AAxA9QgLgKgPgSIgYgfIgyg7QAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAABABAAIAxA8IAaAcQAQASAIANQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABIgBAAIgCgBg",
      );
    this.shape_9.setTransform(105.9524, 49.3259, 2.7, 2.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#CFCECE")
      .s()
      .p(
        "ABMBLQg2g9gSgPQgUgUgTgQIgsghQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQANAEAcAEIAjALQAkAOAaAYQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgbgYgjgOQgQgGgVgFIgcgFQAbARAtArQAvAsAbAlQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgBAAIgDgBg",
      );
    this.shape_10.setTransform(110.4491, 43.467, 2.7, 2.7);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AgUAyQgNgEADgWIAVgIQASgKgFgHQgEgIgMADQgLAFAAgBQAAgGAMgVQANgYALAEQAQAFACAWQACAYgUAbQgQAWgMAAIgFgBg",
      );
    this.shape_11.setTransform(128.2599, 97.6517, 2.7, 2.7);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#F8BA98")
      .s()
      .p("AgjBKQgNgRAMg6IANg5IAXgQQAagJAMAjQAPAoggAvQgZAmgVAAQgFAAgFgDg");
    this.shape_12.setTransform(128.4502, 98.9131, 2.7, 2.7);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#E49B87")
      .s()
      .p(
        "AA+ABQgOgZgJgdIgGgYIACAbQADAfAJASQANAZAZAnQAJAZg4gFQhcgIhKhJQgXgVgSgbIgOgWQArgdB4gIIAoAOIAVAOIAbA8QAqBGBJA0IABABQhOgVgshUg",
      );
    this.shape_13.setTransform(73.7747, 54.0161, 2.7, 2.7);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AinCpQgkhMgGieQgKiSB7gnQAvgOAyAGQAwAHAXAUQANA3BABGQAfAjAeAZQAJCPguBHQgxBLh8AQQgPACgNAAQhfAAgshcg",
      );
    this.shape_14.setTransform(65.4558, 95.6973, 2.7, 2.7);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#E49B87")
      .s()
      .p("Ag1AsIgQgKIgCgcICQg0IgFAiQgGAJgMAKQgYAWgcALQgSAHgPAAQgKAAgIgDg");
    this.shape_15.setTransform(85.722, 160.8967, 2.7, 2.7);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AgWA0QAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAXgvQAJgWAKgfQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABQAAABAAAAQgIAbgKAYQgOAkgLANIgBABIgCgBg",
      );
    this.shape_16.setTransform(91.4538, 171.628, 2.7, 2.7);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.tetee, new cjs.Rectangle(0, 0, 160.6, 185.9), null);

  (lib.nourrituredanscuillere = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7E4527")
      .s()
      .p(
        "AgOAOIgKgDIgJAAQgEgBgCgDQgCgDgBgGIABgJQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAQABABAAAAQAAAAABABQAAABAAAAIABAIQABAEAEAAIAIgBIAJACQACABAFgCQAGAAAJABQABgCADAAIANgEIACgCQADgDACABQAFABACAEQABAEgBADQgEAJgLAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgBAAIgEADIgCAAQgDACgDgCIgHAAIgHABIgEABIgGgCg",
      );
    this.shape.setTransform(11.4866, 8.8067, 2.7, 2.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7E4527")
      .s()
      .p("AAJAXIgaAAQgPgBgDgGQgEgFABgKIABgIQgCgKARgEQAQgEAKAGQANAGAWAWQADADgLAFQgKAGgLAAIgBAAg");
    this.shape_1.setTransform(11.5768, 6.2783, 2.7, 2.7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nourrituredanscuillere,
    new cjs.Rectangle(0, 0, 23, 13),
    null,
  );

  (lib.mainfemme = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AhLDwQhRgEgYh9IgNhCIADgKQABgIgMg4QgMhCBHhlQAVggARgGQAegOAgAWQATANAaAjQAbgIAbARQAZAOAKAdIAGAYQACgDAJAGQAOAGALASQAPAUgBAVQAlAYgCAvQAUALAAAZQAAAcgjAoQgbAggiAVQgQAJgTAHIgOAGQgvAYhEAAIgSAAg",
      );
    this.shape.setTransform(20.357, 24.0094);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.mainfemme, new cjs.Rectangle(0, 0, 40.7, 48.1), null);

  (lib.Path_29 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p("AgdAXQgogCAJgTQAEgJANgJQBLgIAYACQAJABgDAHQgDAIgNAIQgeAWglAAIgIgBg");
    this.shape.setTransform(6.2622, 2.367);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0, 0, 12.5, 4.7), null);

  (lib.Path_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p(
        "AguBVQglgFgRgGIgUgIQgGgDAAgJQAAgGAMgYQALgUgEgEQgDgBgPAJQgQALgGgEQgIgEAGgQIAHgRQAlghB9gWQCAgWAEAfQAFArhhAgQgLAEgTAiQgUAjgGAEQgEADgPAAQgMAAgTgCg",
      );
    this.shape.setTransform(15.254, 8.6113);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0.1, -0.1, 30.4, 17.5), null);

  (lib.Group_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F2AA52")
      .s()
      .p(
        "AhlAmQgVgUgOgYQgJgQgMgiIgBgCIABgCQADgCABAFQAQAoAJAQQAWAkAlAVQAPAIAXAFQA9APA9gfQA+ggABgxQAAgPgGgNQgIgRgBgEIAEAAIACAEIANAoQADATgMAUQgfA4hQANQgTADgRAAQg7AAgsgog",
      );
    this.shape.setTransform(15.9062, 7.8343);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.1, 0, 31.7, 15.7), null);

  (lib.Path_42 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p("AjGBPQhTghAAguQAAgtBTghQBTggBzAAQB1AABSAgQBTAhAAAtQAAAuhTAhQhSAgh1AAQhzAAhTggg");
    this.shape.setTransform(28.2, 11.125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0, 0, 56.4, 22.3), null);

  (lib.Path_7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E3F3F8")
      .s()
      .p("Ag0BQQgUgbAAhFQAAg+AKgOQAZgQA5AEQAdADAYAFQABAegEAkQgHBIgWAhQgSAbgZADIgHABQgZAAgSgag");
    this.shape.setTransform(7.2861, 10.5804);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0, 0, 14.6, 21.2), null);

  (lib.Path_5_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E3F3F8")
      .s()
      .p(
        "AgrBMQgYgEABgFQABgFAYgGQAYgGAFgIQALgPgDhnIANgCQgCAbAAAeQgBA5AIAJQAHAIAaAFQAUAFgBABQgFAEgRAFQgUAFgTABIgLAAQgTAAgSgDg",
      );
    this.shape_1.setTransform(6.6502, 7.9438);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0, 0, 13.3, 15.9), null);

  (lib.Path_4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p("AgDBLQg5gEAAgHQgBgEAuhDIAuhEQgBAcAFAfQAHA+AUASQgGAMgmAAIgVgBg");
    this.shape.setTransform(6.1497, 7.616);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0, 0, 12.3, 15.3), null);

  (lib.Path_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3F4C97").s().p("AppAAICrAAQFdgDFYgEIFzgFIAIANIhTABQnOAFjmABIndAFg");
    this.shape.setTransform(62.65, 1.25);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0, 0, 125.3, 2.5), null);

  (lib.Path_2_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p("AAEB7QgGgFggjlQAPgSAIAGQADADACAvQADAxAFAHIAKAEQALAHAHANQAMAZgQAxQgIAZgMAUg");
    this.shape.setTransform(3.5276, 12.5405);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0, 0, 7.1, 25.1), null);

  (lib.Path_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3F4C97")
      .s()
      .p(
        "AorANQiKgDhFgDIAHgKIAuACQBvADBXAAQDQACGpgJQGjgLDWADIAIAMQhMgBiYABQiIABjlAFIlrAIIjCACIiogCg",
      );
    this.shape.setTransform(76.275, 1.5054);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0, 0.1, 152.6, 2.9), null);

  (lib.Path_1_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3D3939")
      .s()
      .p("AgtAIQgSgDgBgFQABgEASgEQATgDAaAAIAuAAQASABAAAFQAAAFgSAFQgVAHgZAAQgZAAgUgEg");
    this.shape.setTransform(6.45, 1.25);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0, 0.1, 12.9, 2.4), null);

  (lib.Path_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#3F4C97")
      .s()
      .p("ArCgDIAGgJIDUAFQF7AIFnAAQCWgBEqgFIAJAOIiHABQiyADitAAQnmAAm5gQg");
    this.shape.setTransform(70.675, 1.2549);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, 0, 141.4, 2.5), null);

  (lib.Path_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3D3939").s().p("AgghPIA9AzQA9A0gDAIQgFAMinAkQgGAAA7ifg");
    this.shape.setTransform(8.6836, 8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0, 0, 17.4, 16), null);

  (lib.Path = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3F4C97").s().p("AqNABIDHgBIK0gHIGhgFIAIANIiAABQnPAGjmABIn4AEg");
    this.shape.setTransform(66.3, 1.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 132.6, 2.6), null);

  (lib.Group_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#3F4C97").s().p("AgqBQIgIi6IgCgqIBWAAIACAjIAMC5IAFBMIhbABg");
    this.shape.setTransform(86.5, 14.925);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#3F4C97").s().p("AgWCRQgIhIgYiHIgOhVIBSABQAGAXAFAZQAbBxARCEIhaABg");
    this.shape_1.setTransform(109.6, 14.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#3F4C97")
      .s()
      .p("AgiASQgZhGgkhQIgGgOIBVACIAWAuQApBTAmBsIARA1IheABQgbhXgPgqg");
    this.shape_2.setTransform(130.3, 14.75);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#3F4C97").s().p("AgzBDQANhfANh4IBYAAIgCAkQgDAkgSCLIgLBVIhbABg");
    this.shape_3.setTransform(60.925, 15.05);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#3F4C97")
      .s()
      .p("AhtCTQAYg9Aag/QAdhDAeg/IARgnIBdgBIgUArIg7CDQgdBGgSAzg");
    this.shape_4.setTransform(10.975, 15.25);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#3F4C97").s().p("AhcCVIAWhIQAhhrAVg6IAUg7IBZgBIgXBFIgzChIgTBDg");
    this.shape_5.setTransform(36.375, 15.125);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 140.5, 30.1), null);

  (lib.coeur33 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C52021")
      .s()
      .p("AgfAQQgbgeASgNQASgNAMAMQAFAGACAIIANgTQAQgRAOALQAQAMgQAcQgQAdgZAOQgRgNgNgPg");
    this.shape.setTransform(12.8999, 11.9502, 2.7, 2.7);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.coeur33, new cjs.Rectangle(0, 0, 25.8, 23.9), null);

  (lib.coeur2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C52021")
      .s()
      .p("AglAXQgbgiAQgVQANgRAQAJQAJAEAFAHIAMgQQARgPAUAMQAbARglArIgpAqQgQgOgOgRg");
    this.shape.setTransform(14.9009, 14.5887, 2.7, 2.7);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.coeur2, new cjs.Rectangle(0, 0, 29.8, 29.2), null);

  (lib.coeur1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C52021")
      .s()
      .p("AgdAfQgfgaAJgUQAJgWATABQAQABADAJQABAEAJgVQAPgSAXAUQAXATgeAnIgjAjQgQgIgPgNg");
    this.shape.setTransform(14.5789, 14.1632, 2.7, 2.7);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.coeur1, new cjs.Rectangle(0, 0, 29.2, 28.3), null);

  (lib.cheveux = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#DDDDDD")
      .s()
      .p(
        "AkvN1QiHhagqiDQgUg+hFhyIiEjaQivk2gNkdQgKjHB+hNQA+goBBACIBwhkQCKhvCDg0QGditCxHMQCzCHDTI5QBKDIA4DBQAyCsgEAZQgGAghHggQhHghAAAMQgCBFgGAfQgMBLgfAAQgXABgvg/Qgtg5gXALQgRAIAEBFQADA6gugHQgtgHg7g7Qgyg0gPAJQgIAEgUBGQgRA6gygIQg2gKglgbIgbgYIj8AmIgqBpQg6gThDgug",
      );
    this.shape.setTransform(89.0814, 95.0128);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cheveux, new cjs.Rectangle(0, 0, 178.2, 190.1), null);

  (lib.avantbras = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E49B87")
      .s()
      .p(
        "AgkAeIgLgaIAUghQAGgLAAgGQAGAJAEAJQAFAOAEAGQAHAJAMAFIAPAGIAMACQAGACgDAEQgHAJgOAIQgMAGgMADIgJABQgSAAgLgRg",
      );
    this.shape.setTransform(42.126, 17.5061, 2.6997, 2.6997);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Calque_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AkLGsQhPgRARiEQARiFANghQANgiBOhdQBchkAhgqQAmgrAfg1QA3hYANgjIAmg2QCrgOAxBNQAwBNg+A1QgaAmAAAHQAAAHgSAoIhIChQg0ByhBBWQhPBphWA9QhFAxg/AAQgSAAgRgEg",
      );
    this.shape_1.setTransform(30.6257, 43.1748);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.avantbras, new cjs.Rectangle(-2.6, 0, 66.5, 86.4), null);

  (lib.cuillere = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#67A7C0")
      .s()
      .p(
        "AEQA+IiDg5QgSgHgjABIhbABIh/ABQh/AAgpgDIhPgHQglgEgOgIQgYgPATgTQATgUAoAWQAGAEANACIBKALIBvAIICbACIBggCQAqgBAfAMIBAAbQBBAdApgLIBkgbQAMgDAEAKQAGAJgLAHQhHAqg5AAQgSAAgRgEg",
      );
    this.shape.setTransform(44.2546, 8.8403);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

    // Calque_2
    this.instance = new lib.nourrituredanscuillere();
    this.instance.setTransform(76.1, 6.5, 1, 1, 0, 0, 0, 11.5, 6.5);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(36)
        .to({_off: false}, 0)
        .to({regX: 11.6, scaleX: 0.5931, scaleY: 0.5659, rotation: -10.713, x: 85.6, y: 6.45}, 31)
        .to(
          {
            regX: 11.5,
            regY: 6.7,
            scaleX: 0.4304,
            scaleY: 0.3923,
            rotation: -14.9979,
            x: 89.3,
            y: 6.55,
            alpha: 0,
          },
          12,
        )
        .to({_off: true}, 1)
        .wait(80),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 94.7, 15.4);

  (lib.c3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.coeur33();
    this.instance.setTransform(12.9, 12, 1, 1, 0, 0, 0, 12.9, 12);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({regX: 13, scaleX: 0.7, scaleY: 0.7, y: 12.05}, 9)
        .to({regX: 12.9, scaleX: 1, scaleY: 1, y: 12}, 10)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 25.8, 23.9);

  (lib.c2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.coeur2();
    this.instance.setTransform(14.9, 14.6, 1, 1, 0, 0, 0, 14.9, 14.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({scaleX: 0.7219, scaleY: 0.7219}, 9)
        .to({scaleX: 1, scaleY: 1}, 10)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 29.8, 29.2);

  (lib.c1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.coeur1();
    this.instance.setTransform(14.6, 14.15, 1, 1, 0, 0, 0, 14.6, 14.2);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({regX: 14.7, scaleX: 0.7199, scaleY: 0.7199, x: 14.7, y: 14.1}, 9)
        .to({regX: 14.6, scaleX: 1, scaleY: 1, x: 14.6, y: 14.15}, 10)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 29.2, 28.3);

  (lib.bras = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_7
    this.instance = new lib.mainfemme();
    this.instance.setTransform(40.25, 38.5, 1, 1, 0, 0, 0, 5.2, 38.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({rotation: 29.9984, x: 81.3, y: 99.4}, 25, cjs.Ease.get(-1))
        .to(
          {
            regX: 5.3,
            scaleX: 1.0636,
            scaleY: 1.0047,
            rotation: 0,
            skewX: 15.9686,
            skewY: 14.0823,
            x: 86.8,
            y: 112.4,
          },
          10,
        )
        .to({regX: 5.4, skewX: 8.2352, skewY: 6.3489, x: 86.9, y: 112.45}, 8)
        .to(
          {
            regX: 5.2,
            scaleX: 1,
            scaleY: 1,
            rotation: 29.9984,
            skewX: 0,
            skewY: 0,
            x: 81.3,
            y: 99.4,
          },
          5,
        )
        .to({rotation: -8.471, x: 47.05, y: 15.9}, 20)
        .wait(1)
        .to({regX: 20.4, regY: 24, rotation: -8.5707, x: 59.95, y: -0.7}, 0)
        .wait(1)
        .to({rotation: -8.87, x: 60, y: -0.75}, 0)
        .wait(1)
        .to({rotation: -9.3688, x: 60.15}, 0)
        .wait(1)
        .to({rotation: -10.0671, x: 60.3, y: -0.8}, 0)
        .wait(1)
        .to({rotation: -10.9649, x: 60.5, y: -0.9}, 0)
        .wait(1)
        .to({rotation: -12.0623, x: 60.7, y: -0.95}, 0)
        .wait(1)
        .to({rotation: -13.3591, x: 60.95, y: -1.05}, 0)
        .wait(1)
        .to({rotation: -14.8555, x: 61.25, y: -1.15}, 0)
        .wait(1)
        .to({rotation: -16.5514, x: 61.6, y: -1.2}, 0)
        .wait(1)
        .to({regX: 5.2, regY: 38.4, rotation: -18.4468, x: 52.1, y: 17.25}, 0)
        .to({regY: 38.5, rotation: 0, x: 40.25, y: 38.5}, 25, cjs.Ease.get(-1))
        .wait(56),
    );

    // Calque_1
    this.instance_1 = new lib.cuillere();
    this.instance_1.setTransform(66.15, 12.9, 1, 1, 0, 0, 0, 44.2, 7.7);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({regX: 44.3, rotation: 21.5347, x: 124.4, y: 91.75}, 25, cjs.Ease.get(-1))
        .to(
          {
            scaleX: 1.0591,
            scaleY: 1.0094,
            rotation: 0,
            skewX: 22.8537,
            skewY: 20.2774,
            x: 129.65,
            y: 101.35,
          },
          10,
        )
        .to({skewX: 13.3846, skewY: 10.8084, x: 125.45, y: 94.2}, 8)
        .to({scaleX: 1, scaleY: 1, rotation: 21.5347, skewX: 0, skewY: 0, x: 124.4, y: 91.75}, 5)
        .to({rotation: -8.471, x: 72.5, y: -13.35}, 20)
        .wait(1)
        .to({regX: 47.4, rotation: -8.6202, x: 75.55, y: -13.8}, 0)
        .wait(1)
        .to({rotation: -9.0678, x: 75.7, y: -14}, 0)
        .wait(1)
        .to({rotation: -9.8138, x: 75.9, y: -14.35}, 0)
        .wait(1)
        .to({rotation: -10.8582, x: 76.15, y: -14.8}, 0)
        .wait(1)
        .to({rotation: -12.2011, x: 76.55, y: -15.35}, 0)
        .wait(1)
        .to({rotation: -13.8423, x: 76.95, y: -16.1}, 0)
        .wait(1)
        .to({rotation: -15.782, x: 77.45, y: -16.95}, 0)
        .wait(1)
        .to({rotation: -18.02, x: 78, y: -17.95}, 0)
        .wait(1)
        .to({rotation: -20.5565, x: 78.7, y: -19.05}, 0)
        .wait(1)
        .to({regX: 44.4, rotation: -23.3913, x: 76.55, y: -19.1}, 0)
        .to({regX: 44.2, rotation: 0, x: 66.15, y: 12.9}, 25, cjs.Ease.get(-1))
        .wait(56),
    );

    // Calque_2
    this.instance_2 = new lib.avantbras();
    this.instance_2.setTransform(4, 105.45, 1, 1, 0, 0, 0, 4, 82.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to(
          {regX: 4.1, scaleX: 0.9999, scaleY: 0.9999, rotation: 51.9486, y: 105.6},
          25,
          cjs.Ease.get(-1),
        )
        .to(
          {
            regX: 4.2,
            scaleX: 1.0188,
            scaleY: 1.05,
            rotation: 0,
            skewX: 60.2951,
            skewY: 56.9435,
            x: 4.15,
            y: 105.65,
          },
          10,
        )
        .wait(8)
        .to(
          {
            regX: 4.1,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 51.9486,
            skewX: 0,
            skewY: 0,
            x: 4,
            y: 105.6,
          },
          5,
        )
        .to({regX: 4, scaleX: 1.0957, scaleY: 1.18, rotation: 0, x: 6.7, y: 98.25}, 20)
        .wait(1)
        .to({regX: 30.6, regY: 43.2, x: 35.85, y: 51.9}, 0)
        .wait(9)
        .to({regX: 4, regY: 82.5, x: 6.7, y: 98.25}, 0)
        .to({scaleX: 1, scaleY: 1, x: 4, y: 105.45}, 25, cjs.Ease.get(-1))
        .wait(56),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.2, -41.6, 178.89999999999998, 200.2);

  (lib.tetefemme1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_4
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah9BsQgKAAgEgLQgEgLAIgBQBVgNBEgxQAggXAcgjQASgVAcgvQAEgGAIADQAIADgEANQgSBNhXA/QhQA6hNAAIgDAAg",
      );
    this.shape.setTransform(69.575, 138.2118);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah8BuQgQgDgCgLQgBgLAKgCQBTgNBCgxQAhgWAcgkQASgWAdgvQAEgGAIADQAJADgDATQgRBPhWA/QhLA4hLAAIgNgBg",
      );
    this.shape_1.setTransform(57.9543, 156.5661);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah6BxQgWgIABgKQABgLAMgDQBRgNBBgwQAggXAdgkQATgXAdgvQAEgGAIADQAJAEgCAXQgOBRhWBAQhIA2hJAAIgVgBg",
      );
    this.shape_2.setTransform(57.9357, 156.924);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah4BzQgcgLADgKQADgLAOgEQBPgOBAgvQAhgXAdgkQATgZAdgvQAEgFAJAEQAJAEgBAcQgMBShWBBQhFA0hHAAQgOAAgOgCg",
      );
    this.shape_3.setTransform(57.9118, 157.2881);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah3B1QgigPAGgKQAGgKAQgFQBNgOA+gvQAhgYAdgkQAUgZAdgvQAEgGAJAEQAKAFABAhQgLBThWBDQhBAyhGAAQgSAAgSgDg",
      );
    this.shape_4.setTransform(57.93, 157.6778);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah1B3QgogTAIgJQAIgKASgHQBMgOA8gtQAhgZAeglQAUgaAdgvQAEgFAKAEQAJAEADAnQgJBVhWBDQg/AyhEAAQgVAAgVgFg",
      );
    this.shape_5.setTransform(57.9083, 158.1001);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhzB6QgugXALgJQAKgKAUgHQBKgQA6gsQAigaAdgkQAWgbAdgvQAEgGAKAFQAKAFADArQgHBXhVBFQg9AwhDAAQgXAAgZgGg",
      );
    this.shape_6.setTransform(57.8774, 158.4993);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhxB7Qg0gaANgJQANgKAWgIQBIgQA5gsQAigaAdglQAXgbAcgvQAEgGALAFQAKAFAFAxQgFBZhWBFQg7AvhBAAQgaAAgcgIg",
      );
    this.shape_7.setTransform(57.845, 158.9208);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhvB9Qg6geAPgJQAQgJAXgJQBGgRA4grQAigaAeglQAXgdAcgvQAEgGALAGQALAGAGA1QgDBahWBHQg5Aug/AAQgeAAgegKg",
      );
    this.shape_8.setTransform(57.8198, 159.3146);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhtB/QhAgiASgIQASgKAZgKQBEgRA2gqQAjgbAeglQAXgeAdgvQAEgFALAGQALAGAHA6QgBBchVBHQg4Atg+AAQggAAghgLg",
      );
    this.shape_9.setTransform(57.786, 159.7351);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhsCBQhFgmAUgIIAvgUQBDgSA0gpQAjgcAeglQAYgfAdgvQAEgFALAGQAMAGAIBAQABBehVBIQg2Asg9AAQgiAAglgNg",
      );
    this.shape_10.setTransform(57.8009, 160.1737);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhqCCQhLgpAWgIIA0gVQBBgSAzgpQAjgcAeglQAZggAcgvQAEgFAMAGQAMAHAKBEQADBghWBJQg0Asg8AAQglAAgngQg",
      );
    this.shape_11.setTransform(57.7705, 160.608);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhoCEQhRgtAZgIQAYgIAggOQA/gSAxgnQAkgdAegmQAZggAdgvQAEgGAMAHQAMAHALBJQAFBihVBJQg0Asg7AAQgmAAgqgSg",
      );
    this.shape_12.setTransform(57.744, 161.0387);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhnCGQhWgxAbgIQAbgIAigOQA8gTAwgmQAkgeAegmQAagiAdgvQAEgFAMAHQANAIAMBOQAHBjhVBLQgyArg7AAQgoAAgtgUg",
      );
    this.shape_13.setTransform(57.7303, 161.4508);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhlCIQhdg1AegHQAdgIAkgQQA7gTAuglQAkgfAfgmQAagiAdgvQAEgGANAIQANAIANBTQAJBlhVBLQgxArg6AAQgqAAgvgWg",
      );
    this.shape_14.setTransform(57.7112, 161.8982);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhjCJQhjg4AggHQAggIAmgRQA5gTAtglQAkgfAfgnQAbgjAdgvQAEgFANAIQANAIAPBYQALBnhVBMQgxArg4AAQgsAAgygZg",
      );
    this.shape_15.setTransform(57.6972, 162.3564);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhhCLQhpg8AigHQAjgIAngRQA3gUAsgkQAkggAfgmQAcgkAdgvQAEgGANAJQAOAIAQBdQANBphVBNQgwAqg4AAQgtAAg0gbg",
      );
    this.shape_16.setTransform(57.6939, 162.7954);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhgCNQhvhAAlgHQAlgHApgTQA2gUApgjQAlghAfgnQAdgkAcgvQAEgGAOAJQAOAIASBjQAOBrhVBNQguAqg4AAQgvAAg2gdg",
      );
    this.shape_17.setTransform(57.7166, 163.2496);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhfCOQh0hDAngHQAngHAsgUQAzgVAogiQAmghAegnQAegmAcgvQAEgFAPAJQAOAJATBoQAQBshVBOQgtAqg4AAQgwAAg5ggg",
      );
    this.shape_18.setTransform(57.709, 163.6703);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhdCQQh6hIApgGQAqgHAtgUQAygWAmghQAmgiAfgnQAegnAdgvQAEgFAOAJQAPAKAUBsQASBuhUBQQgtApg3AAQgyAAg7gig",
      );
    this.shape_19.setTransform(57.7145, 164.1158);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhcCRQiAhLAsgGQAsgHAwgVQAvgWAlghQAmgiAfgnQAfgoAdgvQAEgFAPAKQAPAJAVByQAUBwhUBQQgsApg3AAQgzAAg+glg",
      );
    this.shape_20.setTransform(57.7123, 164.5728);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhcCRQh/hLAsgGQArgHAwgVQAvgWAlghQAmgiAfgnQAfgoAdgvQAEgFAPAKQAPAJAVByQAUBvhUBQQgsApg3AAQgzAAg+gkg",
      );
    this.shape_21.setTransform(57.7357, 164.5045);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhcCRQh/hKAsgGQArgHAvgWQAwgVAmghQAmgiAfgnQAegoAdgvQAEgFAPAKQAPAJAVBxQAUBvhVBQQgsApg3AAQgyAAg+gkg",
      );
    this.shape_22.setTransform(57.7865, 164.342);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhcCRQh+hKArgGQArgHAvgVQAwgWAmggQAmgiAfgoQAegnAdgvQAEgFAPAKQAPAJAUBvQAUBvhVBQQgsApg3AAQgyAAg9gjg",
      );
    this.shape_23.setTransform(57.8677, 164.0487);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhdCQQh7hIAqgGQAqgHAugVQAxgWAmghQAmghAfgoQAfgmAcgvQAEgGAPAKQAOAJAUBtQATBvhUBPQgtApg3AAQgyAAg8gig",
      );
    this.shape_24.setTransform(57.9899, 163.6407);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AheCPQh4hGApgGQApgHAtgVQAygVAngiQAlghAfgnQAegmAdgvQAEgGAOAKQAPAJATBrQASBuhUBPQgtAog3AAQgyAAg7ghg",
      );
    this.shape_25.setTransform(58.1626, 163.0976);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhfCPQh1hFAogGQAngHAsgUQAzgVAogiQAlghAfgnQAegmAdgvQAEgGAOAKQAOAIATBpQARBthVBOQgtApg4AAQgwAAg6gfg",
      );
    this.shape_26.setTransform(58.3682, 162.4382);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhfCNQhyhBAmgHQAmgIArgTQA0gUApgjQAlggAfgoQAdglAdgvQAEgFAOAJQAOAIASBmQAQBrhVBOQguAqg4AAQgvAAg4gfg",
      );
    this.shape_27.setTransform(58.5936, 161.6688);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhhCMQhtg/AlgHQAkgHApgSQA2gVApgjQAmggAegnQAdglAcgvQAEgFAOAJQAOAIARBiQAOBqhUBNQguAqg5AAQguAAg3gdg",
      );
    this.shape_28.setTransform(58.8667, 160.7734);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhiCLQhog8AigHQAjgIAngRQA3gUArgkQAlggAfgmQAcgkAcgvQAEgGAOAJQAOAIAQBdQAMBphVBNQgvApg4AAQguAAg0gag",
      );
    this.shape_29.setTransform(59.177, 159.7753);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhjCJQhjg4AggHQAggIAmgRQA5gTAsglQAlgfAegnQAcgjAcgvQAEgFAOAIQANAIAPBYQAKBnhVBMQgwArg5AAQgsAAgxgZg",
      );
    this.shape_30.setTransform(59.5404, 158.6604);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhlCIQhdg1AegHQAdgJAkgPQA7gTAuglQAkgfAfgmQAagiAdgvQAEgGANAIQANAHANBUQAJBlhVBLQgxArg6AAQgqAAgvgWg",
      );
    this.shape_31.setTransform(59.907, 157.4274);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhnCGQhWgwAbgIQAbgJAhgOQA9gSAwgnQAkgeAegmQAaghAdgvQAEgFAMAHQANAHAMBOQAGBjhVBKQgyArg7AAQgoAAgsgTg",
      );
    this.shape_32.setTransform(60.3255, 156.0687);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhpCDQhPgrAYgIIA3gWQA/gSAygoQAkgcAegmQAZggAcgvQAEgFAMAGQAMAHALBHQAEBhhVBJQg0Asg8AAQglAAgpgRg",
      );
    this.shape_33.setTransform(60.803, 154.6157);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhrCBQhHgmAVgJIAwgUQBCgRA0gqQAjgbAegmQAZgeAcgvQAEgGAMAGQALAHAJBAQABBfhVBHQg2Atg9AAQgiAAglgOg",
      );
    this.shape_34.setTransform(61.3204, 153.0297);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhuB/Qg+ghARgJQARgJAZgKQBFgRA3gqQAigbAeglQAXgeAdgvQAEgFALAGQALAFAHA6QgCBbhVBHQg4Aug/AAQgfAAghgLg",
      );
    this.shape_35.setTransform(61.8921, 151.3463);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhxB8Qg0gbANgJQANgKAWgIQBIgQA5gsQAigaAdglQAXgcAcgvQAEgFALAFQAKAFAFAyQgEBZhWBFQg7AvhAAAQgcAAgcgIg",
      );
    this.shape_36.setTransform(62.496, 149.5458);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah0B5QgrgVAJgKQAKgKATgGQBKgPA8gtQAhgZAeglQAVgbAcgvQAEgFAKAEQAKAFADAqQgIBWhVBEQg+AwhDAAQgXAAgXgFg",
      );
    this.shape_37.setTransform(63.1221, 147.6425);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah3B1QgggOAFgLQAFgKAPgFQBOgOA+guQAhgZAdgkQAUgZAdgvQAEgFAJAEQAKAEAAAgQgLBThWBDQhCAzhGAAQgRAAgRgDg",
      );
    this.shape_38.setTransform(63.7917, 145.66);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah6BxQgWgHABgLQABgLALgDQBSgNBBgwQAggXAdgkQATgXAcgvQAEgGAJAEQAJADgCAYQgOBQhXBAQhIA2hJAAIgUgBg",
      );
    this.shape_39.setTransform(64.4857, 143.5839);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah1BfQgQgFgBgLQAAgLAHAAQBOgIA/gqQAegSAcgfQAQgTAcgqQAEgEAKACQAJAEgHATQgTBChTA2QhHAug/AAIgNAAg",
      );
    this.shape_40.setTransform(65.3765, 143.3569);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhsBSQgXgJADgLQADgLAHAAQBGgDA8gjQAcgPAagaQAQgQAbgkQAEgEALADQAKAEgKAYQgSA4hQAtQhAAkgxAAQgLAAgKgCg",
      );
    this.shape_41.setTransform(65.4702, 145.2962);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhjBEQgdgNAHgLQAGgMAGABQA/ACA3gbQAagMAZgWQAQgNAagfQAEgDAMAEQAMADgOAfQgRAthNAkQg3AagnAAQgPAAgMgEg",
      );
    this.shape_42.setTransform(65.5791, 147.2589);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhaA2QgjgSAKgLQAKgLAFABQA4AGAzgTQAYgIAYgSQAPgKAagaQADgCAOAEQANAEgRAkQgRAjhKAbQgsARgfAAQgUAAgNgHg",
      );
    this.shape_43.setTransform(65.6456, 149.2569);
    this.shape_43._off = true;

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhmBJQgbgMAGgLQAFgLAGAAQBCAAA4geQAbgMAZgYQAQgOAbggQADgEAMAEQALAEgMAcQgSAxhOAnQg5AdgrAAQgNAAgMgDg",
      );
    this.shape_44.setTransform(65.5359, 146.5998);
    this.shape_44._off = true;

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhyBbQgSgGAAgLQABgLAHgBQBLgGA/gnQAdgSAbgdQARgSAbgoQAEgEAKADQAKADgJAVQgSA/hSAzQhFAqg7AAIgPAAg",
      );
    this.shape_45.setTransform(65.3946, 143.9784);
    this.shape_45._off = true;

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah2BiQgQgEgBgLQgBgLAHgBQBPgIBBgsQAegTAcggQARgTAcgrQAEgFAJADQAJADgHASQgSBFhUA3QhKAxhBAAIgKAAg",
      );
    this.shape_46.setTransform(65.3238, 142.9829);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhvBXQgVgHACgLQABgLAHgBQBKgEA9gmQAdgQAagdQARgRAbgmQAEgEAKADQAKADgJAXQgSA8hRAwQhEAog2AAIgRgBg",
      );
    this.shape_47.setTransform(65.4263, 144.5128);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhpBMQgZgKAFgLQAEgMAGABQBEgCA5gfQAcgOAagYQAPgPAbgiQAEgEALAEQALADgLAbQgSAzhPAqQg7AgguAAQgMAAgMgDg",
      );
    this.shape_48.setTransform(65.5096, 146.0561);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhhBCQgegPAHgLQAHgLAGABQA+ACA2gZQAagLAYgVQAQgNAageQAEgCAMADQAMAEgOAgQgSArhMAiQg0AYglAAQgQAAgNgEg",
      );
    this.shape_49.setTransform(65.5805, 147.6397);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AheA9QgggRAIgKQAJgMAFABQA7AFA1gXQAZgKAZgTQAPgMAagcQADgCANAEQANADgQAiQgRAnhLAgQgxAUgiAAQgRAAgOgFg",
      );
    this.shape_50.setTransform(66.0909, 147.9993);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhiBDQgegOAHgLQAHgLAGAAQA+ADA2gbQAbgLAZgVQAPgNAageQAEgDAMADQAMAEgOAfQgRAshNAjQg1AZgnAAQgPAAgMgEg",
      );
    this.shape_51.setTransform(66.5598, 146.7456);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhmBJQgbgMAGgLQAFgLAGAAQBCAAA4gdQAbgNAagXQAPgPAbggQAEgDALADQAMAEgNAcQgSAxhNAnQg6AdgrAAQgNAAgMgDg",
      );
    this.shape_52.setTransform(66.9984, 145.4998);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhqBPQgYgKAEgLQAEgLAGAAQBFgCA6ghQAcgOAagaQAQgPAbgjQAEgEALAEQALADgMAaQgRA1hQAsQg9AhgvAAQgMAAgLgCg",
      );
    this.shape_53.setTransform(67.4466, 144.2685);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhuBVQgVgIACgLQACgLAHAAQBIgEA8gkQAdgQAagcQARgQAbgmQAEgEAKADQAKAEgJAXQgSA6hRAvQhCAmg1AAIgSgBg",
      );
    this.shape_54.setTransform(67.8934, 143.0461);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#D07C7C")
      .s()
      .p(
        "AhyBbQgSgGAAgLQABgLAHgBQBLgGA+gnQAegSAbgdQAQgSAcgoQAEgEAKADQAJADgIAVQgSA/hSAzQhFAqg6AAIgQAAg",
      );
    this.shape_55.setTransform(68.3322, 141.8284);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah2BgQgQgEgBgLQAAgLAHAAQBOgJBBgqQAegTAbggQARgTAcgqQAEgFAJADQAJADgHATQgSBEhTA2QhJAwg/AAIgNgBg",
      );
    this.shape_56.setTransform(68.7515, 140.6119);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#D07C7C")
      .s()
      .p(
        "Ah5BmQgNgCgDgLQgCgLAHgBQBSgKBCguQAfgVAcghQARgVAdgsQAEgFAIACQAJAEgGAQQgSBIhVA6QhNA1hHAAIgGAAg",
      );
    this.shape_57.setTransform(69.1768, 139.4137);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}]})
        .to({state: [{t: this.shape}]}, 15)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_1}]}, 1)
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
        .to({state: [{t: this.shape_34}]}, 1)
        .to({state: [{t: this.shape_35}]}, 1)
        .to({state: [{t: this.shape_36}]}, 1)
        .to({state: [{t: this.shape_37}]}, 1)
        .to({state: [{t: this.shape_38}]}, 1)
        .to({state: [{t: this.shape_39}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_45}]}, 1)
        .to({state: [{t: this.shape_44}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_42}]}, 1)
        .to({state: [{t: this.shape_41}]}, 1)
        .to({state: [{t: this.shape_40}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .to({state: [{t: this.shape_46}]}, 1)
        .to({state: [{t: this.shape_47}]}, 1)
        .to({state: [{t: this.shape_48}]}, 1)
        .to({state: [{t: this.shape_49}]}, 1)
        .to({state: [{t: this.shape_43}]}, 1)
        .to({state: [{t: this.shape_50}]}, 1)
        .to({state: [{t: this.shape_51}]}, 1)
        .to({state: [{t: this.shape_52}]}, 1)
        .to({state: [{t: this.shape_53}]}, 1)
        .to({state: [{t: this.shape_54}]}, 1)
        .to({state: [{t: this.shape_55}]}, 1)
        .to({state: [{t: this.shape_56}]}, 1)
        .to({state: [{t: this.shape_57}]}, 1)
        .to({state: [{t: this.shape}]}, 1)
        .wait(20),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape)
        .wait(16)
        .to({x: 69.225, y: 138.7618}, 0)
        .wait(1)
        .to({x: 68.875, y: 139.2618}, 0)
        .wait(1)
        .to({x: 68.525, y: 139.8118}, 0)
        .wait(1)
        .to({x: 68.225, y: 140.3118}, 0)
        .wait(1)
        .to({x: 67.875, y: 140.8618}, 0)
        .wait(1)
        .to({x: 67.525, y: 141.4118}, 0)
        .wait(1)
        .to({x: 67.175, y: 141.9118}, 0)
        .wait(1)
        .to({x: 66.825, y: 142.4618}, 0)
        .wait(1)
        .to({x: 66.475, y: 142.9618}, 0)
        .wait(1)
        .to({x: 66.125, y: 143.5118}, 0)
        .wait(1)
        .to({x: 65.825, y: 144.0118}, 0)
        .wait(1)
        .to({x: 65.475, y: 144.5618}, 0)
        .wait(1)
        .to({x: 65.125, y: 145.1118}, 0)
        .wait(1)
        .to({x: 64.775, y: 145.6118}, 0)
        .wait(1)
        .to({x: 64.425, y: 146.1618}, 0)
        .wait(1)
        .to({x: 64.075, y: 146.6618}, 0)
        .wait(1)
        .to({x: 63.775, y: 147.2118}, 0)
        .wait(1)
        .to({x: 63.425, y: 147.7618}, 0)
        .wait(1)
        .to({x: 63.075, y: 148.2618}, 0)
        .wait(1)
        .to({x: 62.725, y: 148.8118}, 0)
        .wait(1)
        .to({x: 62.375, y: 149.3118}, 0)
        .wait(1)
        .to({x: 62.025, y: 149.8618}, 0)
        .wait(1)
        .to({x: 61.675, y: 150.4118}, 0)
        .wait(1)
        .to({x: 61.375, y: 150.9118}, 0)
        .wait(1)
        .to({x: 61.025, y: 151.4618}, 0)
        .wait(1)
        .to({x: 60.675, y: 151.9618}, 0)
        .wait(1)
        .to({x: 60.325, y: 152.5118}, 0)
        .wait(1)
        .to({x: 59.975, y: 153.0118}, 0)
        .wait(1)
        .to({x: 59.625, y: 153.5618}, 0)
        .wait(1)
        .to({x: 59.275, y: 154.1118}, 0)
        .wait(1)
        .to({x: 58.975, y: 154.6118}, 0)
        .wait(1)
        .to({x: 58.625, y: 155.1618}, 0)
        .wait(1)
        .to({x: 58.275, y: 155.6618}, 0)
        .wait(1)
        .to({x: 57.925, y: 156.2118}, 0)
        .to({_off: true}, 1)
        .wait(39)
        .to({_off: false, x: 65.175, y: 141.4618}, 0)
        .to({_off: true}, 1)
        .wait(6)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(6)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(7)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(7)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(6)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(13)
        .to({_off: false, x: 69.575, y: 138.2118}, 0)
        .wait(20),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape_43)
        .wait(93)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(5)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(8)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(7)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(5)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(8)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(28),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape_44)
        .wait(94)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(3)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(10)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(7)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(3)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(38),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape_45)
        .wait(95)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(1)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(12)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(7)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(1)
        .to({_off: false}, 0)
        .to({_off: true}, 1)
        .wait(39),
    );

    // Calque_1
    this.instance = new lib.tetee();
    this.instance.setTransform(83.1, 99.25, 1, 1, 0, 0, 0, 80.2, 92.9);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(15)
        .to({regY: 93, rotation: -6.4377, x: 69.35, y: 118}, 54)
        .to({regY: 92.9, rotation: 0, x: 83.1, y: 99.25}, 20, cjs.Ease.get(-1))
        .wait(71),
    );

    // cou
    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AiDDqQiIgaAugWQAngTgBh1IgIhwQgEhoDOg5QBMgVBAgDQA+gDgGAQQgMAcgHBwIgEA8QgCAyAAArQAAAmAUAPQAMAHATAKQAJAMhEArQhDAqg0AQQgVAHgiAAQgyAAhRgPg",
      );
    this.shape_58.setTransform(88.2863, 175.1481);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AiDDqQiIgaAugWQAngTgBh1IgIhwQgEhoDOg5QBMgVBAgDQA+gDgGAQQgMAcgHBwIgEA8QgCAzAAAqQAAAmAUAPQAMAHATAKQAJAMhEArQhDAqg0AQQgVAHgiAAQgyAAhRgPg",
      );
    this.shape_59.setTransform(88.1863, 175.1481);
    this.shape_59._off = true;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_58}]})
        .to({state: [{t: this.shape_58}]}, 15)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_59}]}, 1)
        .to({state: [{t: this.shape_58}]}, 1)
        .wait(71),
    );
    this.timeline.addTween(
      cjs.Tween.get(this.shape_59)
        .wait(16)
        .to({_off: false}, 0)
        .wait(1)
        .to({x: 88.0863, y: 175.1981}, 0)
        .wait(1)
        .to({x: 87.9363}, 0)
        .wait(1)
        .to({x: 87.8363}, 0)
        .wait(1)
        .to({x: 87.7363, y: 175.2481}, 0)
        .wait(1)
        .to({x: 87.6363}, 0)
        .wait(1)
        .to({x: 87.5363, y: 175.2981}, 0)
        .wait(1)
        .to({x: 87.4363}, 0)
        .wait(1)
        .to({x: 87.2863}, 0)
        .wait(1)
        .to({x: 87.1863, y: 175.3481}, 0)
        .wait(1)
        .to({x: 87.0863}, 0)
        .wait(1)
        .to({x: 86.9863}, 0)
        .wait(1)
        .to({x: 86.8863, y: 175.3981}, 0)
        .wait(1)
        .to({x: 86.7863}, 0)
        .wait(1)
        .to({x: 86.6863, y: 175.4481}, 0)
        .wait(1)
        .to({x: 86.5363}, 0)
        .wait(1)
        .to({x: 86.4363}, 0)
        .wait(1)
        .to({x: 86.3363, y: 175.4981}, 0)
        .wait(1)
        .to({x: 86.2363}, 0)
        .wait(1)
        .to({x: 86.1363}, 0)
        .wait(1)
        .to({x: 86.0363, y: 175.5481}, 0)
        .wait(1)
        .to({x: 85.8863}, 0)
        .wait(1)
        .to({x: 85.7863, y: 175.5981}, 0)
        .wait(1)
        .to({x: 85.6863}, 0)
        .wait(1)
        .to({x: 85.5863}, 0)
        .wait(1)
        .to({x: 85.4863, y: 175.6481}, 0)
        .wait(1)
        .to({x: 85.3863}, 0)
        .wait(1)
        .to({x: 85.2363}, 0)
        .wait(1)
        .to({x: 85.1363, y: 175.6981}, 0)
        .wait(1)
        .to({x: 85.0363}, 0)
        .wait(1)
        .to({x: 84.9363}, 0)
        .wait(1)
        .to({x: 84.8363, y: 175.7481}, 0)
        .wait(1)
        .to({x: 84.6863}, 0)
        .wait(1)
        .to({x: 84.5863, y: 175.7981}, 0)
        .wait(1)
        .to({x: 84.4863}, 0)
        .wait(1)
        .to({x: 84.3863}, 0)
        .wait(1)
        .to({x: 84.2863, y: 175.8481}, 0)
        .wait(1)
        .to({x: 84.1863}, 0)
        .wait(1)
        .to({x: 84.0363}, 0)
        .wait(1)
        .to({x: 83.9363, y: 175.8981}, 0)
        .wait(1)
        .to({x: 83.8363}, 0)
        .wait(1)
        .to({x: 83.7363, y: 175.9481}, 0)
        .wait(1)
        .to({x: 83.6363}, 0)
        .wait(1)
        .to({x: 83.5363}, 0)
        .wait(1)
        .to({x: 83.4363, y: 175.9981}, 0)
        .wait(1)
        .to({x: 83.2863}, 0)
        .wait(1)
        .to({x: 83.1863}, 0)
        .wait(1)
        .to({x: 83.0863, y: 176.0481}, 0)
        .wait(1)
        .to({x: 82.9863}, 0)
        .wait(1)
        .to({x: 82.8863, y: 176.0981}, 0)
        .wait(1)
        .to({x: 82.7863}, 0)
        .wait(1)
        .to({x: 82.6363}, 0)
        .wait(1)
        .to({x: 82.5363, y: 176.1481}, 0)
        .wait(1)
        .to({x: 82.4363}, 0)
        .wait(2)
        .to({x: 82.4863}, 0)
        .wait(1)
        .to({x: 82.5863}, 0)
        .wait(1)
        .to({x: 82.6863, y: 176.0981}, 0)
        .wait(1)
        .to({x: 82.7863}, 0)
        .wait(1)
        .to({x: 82.9863, y: 176.0481}, 0)
        .wait(1)
        .to({x: 83.1363}, 0)
        .wait(1)
        .to({x: 83.3863, y: 175.9981}, 0)
        .wait(1)
        .to({x: 83.6363, y: 175.9481}, 0)
        .wait(1)
        .to({x: 83.8863, y: 175.8981}, 0)
        .wait(1)
        .to({x: 84.1863, y: 175.8481}, 0)
        .wait(1)
        .to({x: 84.5363, y: 175.7981}, 0)
        .wait(1)
        .to({x: 84.8863, y: 175.7481}, 0)
        .wait(1)
        .to({x: 85.2863, y: 175.6481}, 0)
        .wait(1)
        .to({x: 85.7363, y: 175.5981}, 0)
        .wait(1)
        .to({x: 86.1863, y: 175.4981}, 0)
        .wait(1)
        .to({x: 86.6863, y: 175.4481}, 0)
        .wait(1)
        .to({x: 87.1863, y: 175.3481}, 0)
        .wait(1)
        .to({x: 87.7363, y: 175.2481}, 0)
        .to({_off: true}, 1)
        .wait(71),
    );

    // Calque_3
    this.instance_1 = new lib.cheveux();
    this.instance_1.setTransform(89.1, 95, 1, 1, 0, 0, 0, 89.1, 95);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(15)
        .to({rotation: -6.4377, x: 74.75, y: 113}, 54)
        .to({rotation: 0, x: 89.1, y: 95}, 20, cjs.Ease.get(-1))
        .wait(71),
    );

    // Calque_5
    this.instance_2 = new lib.c2();
    this.instance_2.setTransform(-16.7, 60.9, 0.2, 0.2, 0, 0, 0, 15, 14.8);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(81)
        .to({_off: false}, 0)
        .to(
          {
            regX: 14.8,
            regY: 14.5,
            scaleX: 1,
            scaleY: 1,
            rotation: -15.0005,
            x: -26.05,
            y: 48.45,
            alpha: 1,
          },
          11,
          cjs.Ease.get(1),
        )
        .to({x: -40.95, y: 30}, 57)
        .to({x: -41.4, y: 26.85, alpha: 0}, 10)
        .wait(1),
    );

    // Calque_7
    this.instance_3 = new lib.c1();
    this.instance_3.setTransform(142.65, 22.65, 0.225, 0.225, 0, 0, 0, 15.6, 14.9);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(83)
        .to({_off: false}, 0)
        .to(
          {
            regX: 14.6,
            regY: 14.1,
            scaleX: 1,
            scaleY: 1,
            rotation: 14.9983,
            x: 153.2,
            y: -0.1,
            alpha: 1,
          },
          11,
          cjs.Ease.get(1),
        )
        .to({x: 160.5, y: -17.45}, 57)
        .to({y: -20.6, alpha: 0}, 8)
        .wait(1),
    );

    // Calque_6
    this.instance_4 = new lib.c3();
    this.instance_4.setTransform(160.45, 59.25, 0.225, 0.225, 0, 0, 0, 13.1, 12.5);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(86)
        .to({_off: false}, 0)
        .to(
          {
            regX: 13,
            regY: 12,
            scaleX: 1,
            scaleY: 1,
            rotation: 14.9983,
            x: 182.35,
            y: 51.6,
            alpha: 1,
          },
          11,
          cjs.Ease.get(1),
        )
        .to({x: 188.5, y: 41.95}, 56)
        .to({x: 188.95, y: 38.8, alpha: 0}, 6)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-59.4, -38, 263.8, 255.5);

  // stage content:
  (lib.ANIMATION = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // VERRE
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgJAlQgHgNAAghIABggIAPgCQAPgBACAGQABApgKAZQgFAQgFAAQgDAAgEgHg");
    this.shape.setTransform(363.5987, 349.3749, 2.6999, 2.6999);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#7F8080").s().p("AgHAJIgIgEQAKgCAEgLIADAHQAFAGAJgBQgLAFgHAAIgFAAg");
    this.shape_1.setTransform(367.5776, 422.0441, 2.6999, 2.6999);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgEAAQAAgZAGAAIgCAWQAAAVAFAHIgBABQgIAAAAgag");
    this.shape_2.setTransform(369.8694, 415.0744, 2.6999, 2.6999);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AAJBHQgQgLgMgeQgLgdACgqQABguAEAPIACAhQAEAlAIAVQAIAUASASQAPAOgDADQgDADgEAAQgFAAgIgGg");
    this.shape_3.setTransform(361.2624, 364.8953, 2.6999, 2.6999);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAFBTQgCgIARhLQAQhHgEgBQgJgCgjgEQglgDgGgCQAbgKApAEQAmADAFAHQADAsgRA7QgJAfgKAVIgHAMQgDADgCAAQgEAAgCgIg",
      );
    this.shape_4.setTransform(374.676, 357.7981, 2.6999, 2.6999);

    this.instance = new lib.Path_5_1();
    this.instance.setTransform(368.35, 409.4, 2.6999, 2.6999, 0, 0, 0, 6.8, 8.1);
    this.instance.alpha = 0.6797;
    this.instance.compositeOperation = "lighten";

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#9F3B3B")
      .s()
      .p("AgyAAQgIgRgDgXIB7AAQgMAjgOAVQgMAQgKAFQgKAEgIAAQgcAAgSgpg");
    this.shape_5.setTransform(370.8849, 376.1515, 2.6999, 2.6999);

    this.instance_1 = new lib.Path_7();
    this.instance_1.setTransform(371.9, 359.95, 2.6999, 2.6999, 0, 0, 0, 7.4, 10.6);
    this.instance_1.alpha = 0.6797;
    this.instance_1.compositeOperation = "lighten";

    this.instance_2 = new lib.Path_1_0();
    this.instance_2.setTransform(367.35, 438.9, 2.7, 2.7, 0, 0, 0, 6.5, 1.3);
    this.instance_2.alpha = 0.5195;
    this.instance_2.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_2},
            {t: this.instance_1},
            {t: this.shape_5},
            {t: this.instance},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    );

    // avantbras
    this.instance_3 = new lib.bras();
    this.instance_3.setTransform(283.05, 304.75, 1, 1, 0, 0, 0, 55.2, 55.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    // Calque_1
    this.instance_4 = new lib.Group_2();
    this.instance_4.setTransform(366.25, 256.1, 2.7, 2.7, 0, 0, 0, 16, 7.8);
    this.instance_4.alpha = 0.3008;
    this.instance_4.compositeOperation = "multiply";

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AgyC+QgDgCgEACQgGADgLgBQgHAAgIgFIgFgBIgGADQgNAEgNgJQgNgJACgGQAFgLAEgNQACgJAGgKQAGgLAAgFIgBgIIgPAMQgQANgMACQgKACgDgIQgDgHADgHIAFgOQADgNAXgLQAbgPAPgDQAKgDASgBQAGgBAqgbQArgcAGgCQAFgDg/gkQhBgmAGgHIAvg3QAogwABABIAqApQAmAlAKALQArAuAPAVQAkAxgLAWQgMAWg1AXQgvAUgjAGQgEAAgFAcQgFAggLAPIgFAIQgGAKgOAAIgBAAQgMAAgLgGg",
      );
    this.shape_6.setTransform(480.7607, 335.2638, 2.7, 2.7);

    this.instance_5 = new lib.Path_5();
    this.instance_5.setTransform(475.6, 368, 2.7, 2.7, 0, 0, 0, 15.3, 8.7);
    this.instance_5.alpha = 0.5195;
    this.instance_5.compositeOperation = "multiply";

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#F08068")
      .s()
      .p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAg");
    this.shape_7.setTransform(478.4507, 280.048, 2.7, 2.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#F8BA98")
      .s()
      .p(
        "Ak9FxQgYgNgHgVQgUhEABgqQACgqAYgmQAXgnBehXQBehWC2k1QgGgHCPBVQC2BrgDAHQgPAcguAwQhhB7g2A/QggAlg2A6QhHBRgmAgQgqAjgrARQheAjg2AEIgJAAQgSAAgSgIg",
      );
    this.shape_8.setTransform(264.2329, 323.1715);

    this.instance_6 = new lib.Path_29();
    this.instance_6.setTransform(243.4, 359.9, 2.7, 2.7, 0, 0, 0, 6.3, 2.4);
    this.instance_6.alpha = 0.5195;
    this.instance_6.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_6},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.instance_5},
            {t: this.shape_6},
            {t: this.instance_4},
          ],
        })
        .wait(1),
    );

    // Calque_1
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgBAFIgHgHQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQADgCACACIAGAHIAHAGQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgEAAgFgDg",
      );
    this.shape_9.setTransform(383.3201, 369.7234, 2.6999, 2.6999);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgCAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_10.setTransform(370.1498, 358.3838, 2.6999, 2.6999);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#9FB030")
      .s()
      .p("AAAAFIgIgEQgDgBACgDQACgDAEACQADACADABIAHACQACADgDACIgDAAIgGgBg");
    this.shape_11.setTransform(359.0348, 358.7774, 2.6999, 2.6999);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgFACQgBgDAEgBIAHgCQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAABgGADIgCABQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg",
      );
    this.shape_12.setTransform(338.6794, 359.6213, 2.6999, 2.6999);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgFAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAHAAQABABAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIgHACIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg",
      );
    this.shape_13.setTransform(333.9036, 367.253, 2.6999, 2.6999);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgEADQgBgBAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIAGgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgFAEIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg",
      );
    this.shape_14.setTransform(349.5799, 381.8291, 2.6999, 2.6999);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgGACQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQABgBAAgBQABAAAAAAQABgBAAAAQABAAABABIAEABIAGAAIACACIgBABQgCAEgEAAQgDAAgFgDg",
      );
    this.shape_15.setTransform(346.7349, 373.5469, 2.6999, 2.6999);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgCAGQgGgEgCgFQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBABAAQAAAAABgBQABAAAAABQABAAAAAAQABABAAAAQADAFAGACQAGABAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgEACQgEAAgEgDg",
      );
    this.shape_16.setTransform(390.3991, 383.52, 2.6999, 2.6999);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgHAIQACgQAJgDQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABQAAACgDAGIgCAJQgBAEgDAAQgFAAAAgFg",
      );
    this.shape_17.setTransform(381.6408, 382.3905, 2.6999, 2.6999);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#9FB030")
      .s()
      .p("AADAIIgCgBIgDgDIgFgFQgBgDAEgCQADgCABADQAAADADACIAFAEQACADgFABg");
    this.shape_18.setTransform(369.1904, 381.6398, 2.6999, 2.6999);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgKAHQgBgEAEgCIAHgFIAIgFQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAADgGAFIgJAHIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg",
      );
    this.shape_19.setTransform(320.0114, 371.523, 2.6999, 2.6999);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#9FB030")
      .s()
      .p("AgDAEIACgIIACgDQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABADgBAGQAAAEgEAAQgDAAAAgEg");
    this.shape_20.setTransform(324.0489, 377.4857, 2.6999, 2.6999);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#9FB030")
      .s()
      .p(
        "AAFAJQgDgBgDgFIgGgGQAAgBgBAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABIAGAHQAFAEAAACQABABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCAAIgBAAg",
      );
    this.shape_21.setTransform(339.9249, 380.4781, 2.6999, 2.6999);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#9FB030")
      .s()
      .p(
        "AAAAHQgDgDgCgEQgBgEADgBQADgCABADIAEAGQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIgBABIgDAAIgBAAg",
      );
    this.shape_22.setTransform(364.9188, 385.1047, 2.6999, 2.6999);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgGAAQgBAAgBAAQAAAAAAgBQgBAAABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABABIAIAEQAFABAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABg",
      );
    this.shape_23.setTransform(360.7002, 373.3587, 2.6999, 2.6999);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgKACQgBgDAEAAIAKgCQAGgBACACQAAAAAAAAQAAABAAAAQABAAgBABQAAAAAAAAQgCACgGABIgJABIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg",
      );
    this.shape_24.setTransform(352.1735, 364.7046, 2.6999, 2.6999);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#9FB030")
      .s()
      .p(
        "AgIABQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAMgCQABABAAAAQABAAAAAAQAAABAAAAQAAABgBAAQgEAEgJAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg",
      );
    this.shape_25.setTransform(345.814, 361.5562, 2.6999, 2.6999);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#DE652D")
      .s()
      .p(
        "AAIANQgHgGgJgRQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBABABQAAAAAAAAQAAAAABABIANAXIAAABIgBAAIAAAAg",
      );
    this.shape_26.setTransform(334.4998, 368.6885, 2.6999, 2.6999);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#DE652D")
      .s()
      .p(
        "AAKARQgOgIgIgWQgBgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQADAIAGAHIAMAOQAAAAABAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCABIgBAAg",
      );
    this.shape_27.setTransform(331.6376, 375.7982, 2.6999, 2.6999);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#DE652D")
      .s()
      .p(
        "AAsAyQgTgFgLgQQgGgJgFgEIgTgMQgSgNgHgKQgKgPAHgOQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBABQgJASAUATQAIAHAdASQAEADAFAGQAKAOAUAIQABAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIgBABIgCAAg",
      );
    this.shape_28.setTransform(333.4592, 378.7288, 2.6999, 2.6999);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#DE652D")
      .s()
      .p(
        "AAEADIgHgDQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAHADIgBACIAAAAg",
      );
    this.shape_29.setTransform(343.8392, 385.7114, 2.6999, 2.6999);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#DE652D")
      .s()
      .p(
        "AgOAMQgNgKgSgdQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQARAdAPAKQAKAHAPADIAdAFQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQglgCgUgQg",
      );
    this.shape_30.setTransform(352.029, 380.5366, 2.6999, 2.6999);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#DE652D")
      .s()
      .p(
        "AgSAPQgLgHgHgQQgJgUgFgGIABgDQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQADAEAFAQQAGAPARALQALAIAUAGIAjALQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgmgBgcgWg",
      );
    this.shape_31.setTransform(356.9822, 376.8782, 2.6999, 2.6999);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#FCC047")
      .s()
      .p(
        "AhJBKQgKgDgHgFQgXgKgOgUQgRgQABgbIACgYQADgQAKgCQABgDADgCQADgBADACIAKAIIADgGQAIgJAMAMIABgOQAAgDADgCQADgCADABQACgEAEgBQAEgBACADIAQAWQgBgNAGgIQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQADgBACACQAMAJANAQIAWAaIAVAaQAOgDAMACQAHADAGADQAAgDAEAAQAAgBABAAQABAAAAABQABAAAAAAQABABAAABIADAJIAIAEQAJADAPgFQARgFAHAAQADAAABAEQAAAEgDABQgSAHgJACQgPADgLgEQACAOgGAGQANgCAdgIQAEgBABAEQABADgCACQgWASgsgDQgUgBgQgHIgHgDQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAEgDACQgDADgEgDIgQgOIgBAAIAGAKQACADgDAEQgEAEgEgCQgOgGgPgMIAOAPQACADgCAFQgEAEgEgCQgOgEgMgIQAAAHgDAFQgDADgEAAIgBAAgAhMA7IgDgGIgGgBIAJAHgAA2AkQACAEgDAEQAOACADgCQAHgCgCgRQgRgMgKgBIgHAAQAKAQADAIgAAkApIgMgHIgDABIADAEIAMACgAhYAnIgCgDQgHgIgDgIIgCgDIgNgWIAGATQAHAQAEAHIACABIAIABgAhOAWIgHgJIgIgMIADAIIACAFIAIAHIACABgAgZANIgPgTIgBABQAGAIAKAKgAAVAJIgSgVIgPgTIgRgTQALAbAUAXIATAJIAAAAgAh1ggIAJAMIAAgEIgJgLg",
      );
    this.shape_32.setTransform(354.8879, 376.3112, 2.6999, 2.6999);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#C96E3D")
      .s()
      .p(
        "AgaAIQgCgFAHgIQACgDADACQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAEgDQAEgBAGAAIAOgCQAFgDADAAQAGAAAAAHIgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIABAAIgCABIgEACIgKABIgNABIgGAEQgEACgDAAQgEAAgCgEg",
      );
    this.shape_33.setTransform(378.2282, 366.8671, 2.6999, 2.6999);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#C96E3D")
      .s()
      .p(
        "AADAKIgIgBQgEgDgDgBIgGgBQgEgBgBgCQgCgFAJgEQAFgDAJABIADgCQALgCAFAAQAKACgEAJIgHANQgCAFgFAAQgFgBgBgEg",
      );
    this.shape_34.setTransform(354.4076, 364.5149, 2.6999, 2.6999);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#7E4527")
      .s()
      .p(
        "AAXAYIgDgCIgJgEQgKABgEgBIgGgDQgFgCgGABQgIACgEgCQgDgBgBgDQAAgEACgCQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBIgDgDIAAgDQgDgDAAgDQgBgHAFgEQAEgEAJABQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAgBAAIgCAAIAAAAIAFADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgBAAIABACIABABIAEAEIABABIABACQAJgCACABIAHACQADACADAAIAHAAIAIABQADABADAEQAFgBACACIABgEIABgHQgGAAgDAAQgFgCACgEQACgEAEABIgBgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAAgBABAAQAAABABAAQAAAAAAABIABACIgBACIACgBQAFgDADAEQAHAIgFARQgBAHgGACIgGABQgDAAgEgBg",
      );
    this.shape_35.setTransform(404.8563, 380.0606, 2.6999, 2.6999);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#7E4527")
      .s()
      .p(
        "AAAAHIgCgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAABQgEABgEAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQADAAAGgCIAFAAIAFgDIAGgCQAHAAgBAGQgBAGgHAAQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgDACIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg",
      );
    this.shape_36.setTransform(379.0004, 362.8114, 2.6999, 2.6999);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#7E4527")
      .s()
      .p(
        "AAJARIgHgBQgEgBgDABQgFABgFgDIgKgDIgIgCQgFgBgCgDQgCgEABgFIABgJQAAgBABgBQAAgBAAAAQABgBAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIABAIQABAEAEAAIAHAAIAJADIADABIAEgBQAGgCAJADQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAHgBQAEgCADABIACgCQADgCACABQAFABABADQABAEgCAEQgEAJgLgBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAIgBAAIgEADIgCAAIgDABIgDgBg",
      );
    this.shape_37.setTransform(404.6469, 363.7687, 2.6999, 2.6999);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#7E4527")
      .s()
      .p(
        "AgGAVIgBgFQAAAAgBABQAAAAAAABQgBAAAAABQgBAAgBAAQgDACgHABIgLABIgcABQgEAAgCgDQgBgHgLgJQgEgDAAgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABACANACQAFADADAFQAaAAALgDIACgJQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAIgPgFgBIAAgBIAAABIgCAFQgCADgCAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABAKgOAHQgEABgCgDQgCgDAEgDQAEgBADgJQABgDADAAQgEgDADgEIADgEQADgDADABQABgFAFACQAJADgBANQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAABQAAgBABAAQAAgBABAAQAAAAABABQAAAAAAABIAAAKQAAAIABACQAFAGAMgGIAJgDIADAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQACgEAFAAQAJgEAHAAQAGAAADADIADADIACgCIgCgMQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAJABABAKIAAAPQAAAHgGAFQgGAFgHgEIgCgBQgJACgGAAQgQgBgGADIgNAFIgFAAQgJAAgEgJgAAzAJIAEAAIABAAIAAgBIgDAAg",
      );
    this.shape_38.setTransform(368.6938, 368.3893, 2.6999, 2.6999);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#7E4527")
      .s()
      .p("AAHAYIgagDQgOgCgDgGQgDgGABgJIACgIQgBgKARgDQARgCAJAGQANAIAUAYQACACgLAFQgJAEgJAAIgFAAg");
    this.shape_39.setTransform(404.7518, 361.5321, 2.6999, 2.6999);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#A25932")
      .s()
      .p(
        "AgOAZIgSgNQgKgHAAgGQABgHAGgFIAHgGQAOgJAaABQAWABAHAEQAEAEgGAVQgFAXgHgDQgEgCgQAFQgHACgEAAQgHAAgDgDg",
      );
    this.shape_40.setTransform(356.2456, 366.6636, 2.6999, 2.6999);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#7E4527")
      .s()
      .p(
        "AAQAbQgFgEgagCQgXgBABgEQACgGAAgDQABgFgIgGQgHgGAUgLIAWgKQAHgDAMAHIAWAOQAKAFAAAEQABAEgCAOQgBAOgJADIgFACQgFAAgHgGg",
      );
    this.shape_41.setTransform(404.7209, 377.987, 2.6999, 2.6999);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#A25932")
      .s()
      .p(
        "AgkAbQgFgDgBgHQgBgGAEgGQACgDgEgHQgEgIAEgFQAEgFATAAIATABQAQgLASAOQADADAAAGQgBAHADAEIADAJIAAAIQAAANgogIQgIgCgOAEQgJADgEAAIgEgBg",
      );
    this.shape_42.setTransform(379.064, 368.0801, 2.6999, 2.6999);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#ED964A")
      .s()
      .p(
        "AgwAyQgOgEAEgKQAEgLgBgDQgBgGgKgGQgJgFAPgIIAUgMQACgDgggGQgigGgDgFQgDgHAlgEIAlgDQAngDAmAJQAhAIAFAIIALALQAJAJAGAHQAIAKgLAFQgMAHgmAAQgeABgFAJQgHALgPAEQgRAEgMAAQgIAAgGgBg",
      );
    this.shape_43.setTransform(389.846, 373.9056, 2.6999, 2.6999);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "AgUALQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIATgJIAQgKQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgCAGgOAGIgVAHIgBABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAg",
      );
    this.shape_44.setTransform(418.1181, 394.4276, 2.6999, 2.6999);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "AgPAcQgzgGgxgPQgggIgMgFQgGgDgMgJQgKgIgHgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAHACAKAGQAMAIAFACQAOAGAeAHQA0ALAyAFQBbAKBygPQAEAAAAADQAAAEgDABQg+ANhCAAQgoAAgogEg",
      );
    this.shape_45.setTransform(352.3529, 395.3359, 2.6999, 2.6999);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "ABIBCQgEgDADgFQAPgWgTgaQgPgSgegQQhDgkgrgCIgCgCIACgBQASgCAWAGQALACAcAKQAlAMAVAPQAaARALAWQANAbgTAUQgDADgCAAIgDgBg",
      );
    this.shape_46.setTransform(418.3136, 363.1951, 2.6999, 2.6999);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "AAMATQgGgQgDgDQgIgJgLgEQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAgBQABAAAAAAQABgBAAAAQABAAAAABQANAFAIAKQALAJABALQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAIgBABQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAg",
      );
    this.shape_47.setTransform(428.1014, 364.0199, 2.6999, 2.6999);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "ABPAgQgXgdgxgRQgjgNg8gCQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAgBQAxgHA4AQQAaAGASALQAYANAEARQACAEgEADIgEACQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg",
      );
    this.shape_48.setTransform(401.119, 362.3274, 2.6999, 2.6999);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "AAbAtQgfgGgggPQgdgNgQgOQgYgWAKgWQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABQgFAmBaAdQAWAIAaAEQAJACARAAIAaACQAFABAAAEQAAAEgFABQgMADgOAAQgTAAgWgFg",
      );
    this.shape_49.setTransform(336.0379, 384.4307, 2.6999, 2.6999);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#EFF2DF")
      .s()
      .p("AiAArQg2gSAAgZQAAgYA2gSQA1gRBLAAQBLAAA2ARQA2ASAAAYQAAAZg2ASQg1ARhMAAQhLAAg1gRg");
    this.shape_50.setTransform(368.7324, 376.1357, 2.6999, 2.6999);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#D4D7C6")
      .s()
      .p("AiQAzQg8gVAAgeQAAgeA8gUQA8gWBUAAQBVAAA8AWQA8AUAAAeQAAAeg8AVQg8AWhVAAQhUAAg8gWg");
    this.shape_51.setTransform(367.3824, 374.1783, 2.6999, 2.6999);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#EFF2DF")
      .s()
      .p("AjHBRQhTgiAAgvQAAgvBTghQBTgiB0AAQB1AABTAiQBTAhAAAvQAAAvhTAiQhTAih1AAQh0AAhTgig");
    this.shape_52.setTransform(367.3824, 374.1108, 2.6999, 2.6999);

    this.instance_7 = new lib.Path_42();
    this.instance_7.setTransform(364.75, 378.65, 2.6999, 2.6999, 0, 0, 0, 28.2, 11.2);
    this.instance_7.alpha = 0.5195;
    this.instance_7.compositeOperation = "multiply";

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#DBB67B").s().p("AgDAAQAAgDAEgBQAEABgBADQAAAEgEAAQgEAAABgEg");
    this.shape_53.setTransform(250.9437, 400.8964, 2.6999, 2.6999);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAFQgEAAACgFIAAAAQABgFADABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAABABQACACgCADIAAAAQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAAAAAIgBAAg",
      );
    this.shape_54.setTransform(248.8973, 406.9578, 2.6999, 2.6999);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBADQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgCIACAAIABACQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgCABIgBgBg",
      );
    this.shape_55.setTransform(246.4923, 383.1763, 2.6999, 2.6999);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg",
      );
    this.shape_56.setTransform(254.386, 377.7451, 2.6999, 2.6999);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgCAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg",
      );
    this.shape_57.setTransform(254.2494, 374.2353, 2.6999, 2.6999);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_58.setTransform(260.1232, 377.0026, 2.6999, 2.6999);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_59.setTransform(264.173, 377.0026, 2.6999, 2.6999);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAFQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgDADgCIACABIABAAQACABgBADIAAACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAAg",
      );
    this.shape_60.setTransform(261.8492, 381.9411, 2.6999, 2.6999);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgCAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAAAQABgFAEAAQACAAABAEIABABQAAADgDACIgCABIgCgBg",
      );
    this.shape_61.setTransform(255.8034, 383.2663, 2.6999, 2.6999);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgCAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAg",
      );
    this.shape_62.setTransform(251.1837, 380.3775, 2.6999, 2.6999);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgCAAQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg",
      );
    this.shape_63.setTransform(248.7838, 386.9921, 2.6999, 2.6999);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAFQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgBQABgEAEABQAFACgDADIAAABQgCADgCAAIgBAAg",
      );
    this.shape_64.setTransform(254.3635, 388.5616, 2.6999, 2.6999);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#DBB67B")
      .s()
      .p("AgCAEIgBgCQgBgDADgCQADgCACAEIAAAAIAAABQABAEgEABIgBAAIgCgBg");
    this.shape_65.setTransform(253.0674, 395.7217, 2.6999, 2.6999);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#DBB67B")
      .s()
      .p("AAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
    this.shape_66.setTransform(246.5564, 395.0917, 2.6999, 2.6999);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#DBB67B")
      .s()
      .p("AgCAAQAAgDACAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAAEgDAAQgDAAABgEg");
    this.shape_67.setTransform(242.5066, 391.7169, 2.6999, 2.6999);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#DBB67B")
      .s()
      .p("AgBAFQgEgBABgEQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAIAAAAQAEgCABAGQAAADgCABIgDACIgBgBg");
    this.shape_68.setTransform(245.2187, 400.6955, 2.6999, 2.6999);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_69.setTransform(239.9395, 405.3512, 2.6999, 2.6999);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#DBB67B")
      .s()
      .p("AgCAFQgDgBABgEQABgEADAAIAEABQADADgEAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
    this.shape_70.setTransform(237.183, 400.0575, 2.6999, 2.6999);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#FEDCA6")
      .s()
      .p(
        "AgGBIQgjgBgKgIQgMgJgDgIQgEgKAHgFQAJgIA6heIAhACQAhAEgBAFQgBADgGAIQgIAKgGAMQgRAigBARQAAAIgEAGIgHAKQgDAEAFAHQAGAJAAABQAAADgTAAIgOAAg",
      );
    this.shape_71.setTransform(248.4953, 391.295, 2.6999, 2.6999);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#C79B56")
      .s()
      .p("Ag/AuQAAgBA6hcIAiAEQAhAEABABQABAAAAAAQAAABAAAAQAAABgBAAQgBABgBABIh1BSQgHgBAAgBg");
    this.shape_72.setTransform(250.5543, 384.1505, 2.6999, 2.6999);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#C85436")
      .s()
      .p(
        "AgFAoQgjgJgCgOQgDgXgDgIQgEgLAIgEQAGgDAEgIQAJgEAkAbQATAOARANIADgDQABAAAAALQAAAMgBACQgBAEgSADQgLADgKAAQgJAAgGgCg",
      );
    this.shape_73.setTransform(242.8353, 407.7109, 2.6999, 2.6999);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#DBB67B")
      .s()
      .p(
        "AgfAPIARgwIAWgSQAXgSABABQADADgDAWIgBAFQgDAGgEACQgDADgDAKIgDARIgHARQgFAKABAEQAAAEgDAEIgHAIQgFAGAFAQQgigFAJgxg",
      );
    this.shape_74.setTransform(258.2601, 393.2537, 2.6999, 2.6999);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics.f("#A68248").s().p("AgBAOIgBgZIAFgDIAAAMQAAAMgBAEIgBABIgCgBg");
    this.shape_75.setTransform(266.9403, 377.8126, 2.6999, 2.6999);

    this.instance_8 = new lib.Path_4();
    this.instance_8.setTransform(239.05, 399.95, 2.6999, 2.6999, 0, 0, 0, 6.2, 7.7);
    this.instance_8.alpha = 0.5195;
    this.instance_8.compositeOperation = "multiply";

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AAAACQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAIAAgBg",
      );
    this.shape_76.setTransform(531.0541, 391.1094, 2.6999, 2.6999);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AAEAGQgDgBgGgFQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAABIAJAHQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIgBAAg",
      );
    this.shape_77.setTransform(519.7147, 382.878, 2.6999, 2.6999);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AgDAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAEACIAAABQgCACgDAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg",
      );
    this.shape_78.setTransform(532.6628, 397.994, 2.6999, 2.6999);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AgIAEQgBAAAAgBQABAAAAgBQAAgBAAAAQABgBABAAIAGgDIAIgCQAAAAABAAQAAAAABABQAAAAgBABQAAABAAABIgHADIgGAEIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg",
      );
    this.shape_79.setTransform(519.7091, 400.8, 2.6999, 2.6999);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AgdAOQAJgEAUgLIANgIQAIgFAGgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQgEAFgWAJIgfANIgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAg",
      );
    this.shape_80.setTransform(513.946, 397.7202, 2.6999, 2.6999);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#D4D7C6")
      .s()
      .p(
        "AhPAZQAHgCAMgHIASgIIAogJQAFgCAigOQAYgLARACQADAAAAAEQAAADgDABQgiAOguAJQgmAHgGADQgWAJgLADIAAAAQAAAAAAAAQgBAAABAAQAAgBAAAAQAAgBAAAAg",
      );
    this.shape_81.setTransform(521.1996, 409.7228, 2.6999, 2.6999);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#FCFBEC")
      .s()
      .p(
        "AhjBdQgCgJA/iwQAKgJBAA4QA+A2ACAKQABAFgHAFQgGADgCAAIAFADQAGAFgDAFQgEAGhdAZQhKATgRAAQgFAAAAgCg",
      );
    this.shape_82.setTransform(518.6638, 393.2893, 2.6999, 2.6999);

    this.instance_9 = new lib.Path_0();
    this.instance_9.setTransform(513.5, 399.5, 2.6999, 2.6999, 0, 0, 0, 8.8, 8.1);
    this.instance_9.alpha = 0.5195;
    this.instance_9.compositeOperation = "multiply";

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#ADBBCD")
      .s()
      .p("AgMBAQADgPgDg9IgFg7IAKAEQAKAHAIAOQANAYgPAwQgHAZgKAVIAAAAIgEgIg");
    this.shape_83.setTransform(287.9425, 404.4887, 2.6999, 2.6999);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#7A8490")
      .s()
      .p("AAKB7QgHgEgnjkIAJgIQAJgIAFAEQADADAEAvQAEAwAGAHQApAOgLBBQgEAXgJAUQgHASgDAAIgBgBg");
    this.shape_84.setTransform(282.174, 389.751, 2.6999, 2.6999);

    this.instance_10 = new lib.Path_2_0();
    this.instance_10.setTransform(281.35, 393.3, 2.7, 2.7, 0, 0, 0, 3.5, 12.6);
    this.instance_10.alpha = 0.5195;
    this.instance_10.compositeOperation = "multiply";

    this.instance_11 = new lib.Path();
    this.instance_11.setTransform(376.1, 376.6, 2.6998, 2.6998, 0, 0, 0, 66.5, 1.4);
    this.instance_11.alpha = 0.5781;
    this.instance_11.compositeOperation = "multiply";

    this.instance_12 = new lib.Path_1();
    this.instance_12.setTransform(377.3, 396.2, 2.6998, 2.6998, 0, 0, 0, 70.8, 1.4);
    this.instance_12.alpha = 0.5781;
    this.instance_12.compositeOperation = "multiply";

    this.instance_13 = new lib.Path_2();
    this.instance_13.setTransform(374.75, 419.9, 2.6998, 2.6998, 0, 0, 0, 76.5, 1.6);
    this.instance_13.alpha = 0.5781;
    this.instance_13.compositeOperation = "multiply";

    this.instance_14 = new lib.Path_3();
    this.instance_14.setTransform(376.9, 362.15, 2.6998, 2.6998, 0, 0, 0, 62.8, 1.4);
    this.instance_14.alpha = 0.5781;
    this.instance_14.compositeOperation = "multiply";

    this.instance_15 = new lib.Group_1();
    this.instance_15.setTransform(374.55, 393.85, 2.6999, 2.6999, 0, 0, 0, 70.4, 15.1);
    this.instance_15.alpha = 0.5781;
    this.instance_15.compositeOperation = "multiply";

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#EEEDED")
      .s()
      .p("AsRCVQgFgLBkiOIBliMQEsgDEsgBQJZgEAGAIQCuEZgGADQgEADq0AEQmlADjnAAQiaAAhFgBg");
    this.shape_85.setTransform(374.5879, 394.0299, 2.6999, 2.6999);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics.f("#AA7766").s().p("AgCCXINrgDIjAk6IDcFFI8JAIQASgKNwgGg");
    this.shape_86.setTransform(377.0946, 396.0366, 2.6999, 2.6999);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#673D2E").s().p("At3AiIgNg7IcJgIIgQBDg");
    this.shape_87.setTransform(377.0946, 448.2789, 2.6999, 2.6999);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics.f("#8A5B48").s().p("AqPimIU4AAIDcFFI8JAIg");
    this.shape_88.setTransform(377.0946, 396.0366, 2.6999, 2.6999);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_88},
            {t: this.shape_87},
            {t: this.shape_86},
            {t: this.shape_85},
            {t: this.instance_15},
            {t: this.instance_14},
            {t: this.instance_13},
            {t: this.instance_12},
            {t: this.instance_11},
            {t: this.instance_10},
            {t: this.shape_84},
            {t: this.shape_83},
            {t: this.instance_9},
            {t: this.shape_82},
            {t: this.shape_81},
            {t: this.shape_80},
            {t: this.shape_79},
            {t: this.shape_78},
            {t: this.shape_77},
            {t: this.shape_76},
            {t: this.instance_8},
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
            {t: this.instance_7},
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
          ],
        })
        .wait(1),
    );

    // Calque_9
    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#F2AA52")
      .s()
      .p(
        "AjSDZIABgXQABgWgBgoQAAgpgFgQQgMglgHgHQgFgFgEAAQgFAAgFAFQgKAKgNARQgCACgDgCIgMgKIgagWQgbgVgMgLQgRgPgagbQgEgEAFgGIAdggQBFhIAEgGQALgNAUgEIAsgIIAygFQAOgBAIADQAEABACAIQACAPAJATQAHARATAQQAUARAZAIQATAGASACQAdAEAhgKQAOgEARgMQAQgKALgMQAJgKACgNQACgNgFgdQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIgBgLQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAKAAQAIADAeACQAiACAgAGQASADAKAEQAFACCGB6QAMAKAGAIIAEAEQACABgBADQgGAVgHALQgZAkgcAZIgNAMIgPAKQgDACgDgCIgUgOQgHgFgJgKIgVgTIgBACQgHARgMAaQgLAagJAnQgCAIgCAYIgBAdIABAZg",
      );
    this.shape_89.setTransform(372.5146, 293.3453, 2.7, 2.7);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#F8BA98")
      .s()
      .p(
        "AmYBcQgbgrgpheQgYg7AbgjQAQgZALgNQATgbAKgIQCFgCArgJQAzgKASgXQCcCXCnhwIBnhGIAGACQBEARABACQAcARAoAEQAVAEAtAAQAMACAIAGQAHAJgCAKQgTBfgGAYQgdBgggBBQhtDckjACIgCAAQkaAAh+jEg",
      );
    this.shape_90.setTransform(369.2305, 262.9628);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_90}, {t: this.shape_89}]})
        .wait(1),
    );

    // tete
    this.instance_16 = new lib.tetefemme1();
    this.instance_16.setTransform(372.5, 142.85, 1, 1, 0, 0, 0, 89.1, 96.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

    // Calque_1
    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#E79AC3")
      .s()
      .p(
        "AANIaQiRgyhvhtQhaBBh0AjQhyAjhjgJQhSgHhWg7QhUg6g9hbQhBhfgVhpQgXhyAjhpQAThXBWhTQCrimFKAUQAsADAwAaQAwAbAtAuQCFiJDrhLQBsgiCXBKQCfBOBvCcQA5gEA7ADQBtAIBjCMQBqCVACC+QACCXixBvQhNAvhYAYQhZAYhNgGQhMgHhOg6QhGArhEAUQguANgzAAQhMAAhXgdg",
      );
    this.shape_91.setTransform(378.1192, 277.6541, 3.1893, 3.1893);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#E79AC3")
      .s()
      .p("AggC1QhEgGgzhMQg3hQAbhPQAHghAhgfQBBhAB8AIQAwADArA9QAvBAABBSQAABBhNAvQhAAog/AAIgRgBg");
    this.shape_92.setTransform(303.001, 77.4782, 3.1893, 3.1893);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#E79AC3")
      .s()
      .p(
        "AgQBbQgigDgagmQgbgoANgoIAEgKQAGgMAKgKQAhggA+ADQAYACAWAfQAYAgABApQAAAhgnAYQghAUgfAAIgJgBg",
      );
    this.shape_93.setTransform(601.7558, 143.9251, 3.1893, 3.1893);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#E79AC3")
      .s()
      .p("AgOBWQgggDgZgkQgagmANglQADgQAQgOQAfgfA6AEQAXABAUAdQAWAfABAmQAAAfglAXQgeASgdAAIgIAAg");
    this.shape_94.setTransform(201.0073, 92.4174, 3.1893, 3.1893);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{t: this.shape_94}, {t: this.shape_93}, {t: this.shape_92}, {t: this.shape_91}],
        })
        .wait(1),
    );

    // stageBackground
    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f()
      .s("rgba(0,0,0,0)")
      .ss(1, 1, 1, 3, true)
      .p("Eg8JgnDMB4TAAAMAAABOHMh4TAAAg");
    this.shape_95.setTransform(375, 240);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics.f("transparent").s().p("Eg8JAnEMAAAhOHMB4TAAAMAAABOHg");
    this.shape_96.setTransform(375, 240);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_96}, {t: this.shape_95}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(411.5, 259.6, 308.29999999999995, 198.89999999999998);
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681E",
    width: 750,
    height: 480,
    fps: 24,
    color: "#00B0C5",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    cjs.Stage.call(this, canvas);
  }).prototype = p = new cjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (let i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681E"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (let j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };
})(window.createjs, (window.AdobeAn = window.AdobeAn || {}));
let exportRoot;
export default null;
