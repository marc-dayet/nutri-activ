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

  (lib.fumeee = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(234,234,234,0.498)")
      .s()
      .p("AhRE4QhQiMBLiRQBciFAVg3QAihVg8iwQBlBdASB3QASCHhgCFQhEBlAMCPQAGBGATAzQg1gpgnhGg");
    this.shape.setTransform(12.3084, 42.325);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(234,234,234,0.471)")
      .s()
      .p("AhLEtQhLiHBGiMQBWiAATg1QAfhSg3ipQBeBZARBzQAQCChZCAQg/BhALCKQAFBDASAxQgxgngkhDg");
    this.shape_1.setTransform(12.3077, 42.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(234,234,234,0.443)")
      .s()
      .p("AhFEgQhFiBBAiGQBPh7ASgzQAdhPgziiQBWBWAQBuQAQB8hTB8Qg6BdAKCEQAFBAARAxQgugnghhBg");
    this.shape_2.setTransform(12.3144, 42.35);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(234,234,234,0.416)")
      .s()
      .p("Ag/EVQhAh8A7iBQBJh2AQgwQAbhMgvidQBPBTAPBqQAOB3hMB3Qg1BaAJB+QAFA+APAuQgqglgeg+g");
    this.shape_3.setTransform(12.3137, 42.325);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("rgba(234,234,234,0.388)")
      .s()
      .p("Ag5EKQg6h4A2h7QBBhxAPguQAZhKgriVQBIBPANBmQANByhFByQgwBWAIB5QAEA7AOAsQgmgkgbg6g");
    this.shape_4.setTransform(12.3197, 42.35);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(234,234,234,0.357)")
      .s()
      .p("Ag0D9QgzhxAwh2QA7hsANgtQAWhFgmiPQBBBMALBgQAMBug+BsQgsBTAJBzQADA5AMAqQghgigag5g");
    this.shape_5.setTransform(12.3145, 42.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("rgba(234,234,234,0.329)")
      .s()
      .p("AguDyQguhtArhwQA1hnALgrQAUhCgiiIQA5BIALBcQAKBpg3BnQgnBOAIBvQADA2ALAoQgegggXg2g");
    this.shape_6.setTransform(12.3204, 42.375);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(234,234,234,0.302)")
      .s()
      .p("AgoDnQgohnAlhsQAuhiALgoQARg/geiDQAyBFAJBZQAJBigwBjQgiBLAHBpQACAzAKAnQgagfgUgzg");
    this.shape_7.setTransform(12.3196, 42.35);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("rgba(234,234,234,0.275)")
      .s()
      .p("AgiDaQgjhhAhhmQAnhdAJgmQAPg9gah7QArBBAIBUQAIBegqBeQgdBHAGBjQACAxAIAlQgWgegRgxg");
    this.shape_8.setTransform(12.3264, 42.375);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("rgba(234,234,234,0.247)")
      .s()
      .p("AgcDPQgdhdAbhgQAghYAIgkQAMg5gVh1QAkA+AGBPQAHBZgjBZQgYBDAFBeQACAuAGAjQgSgcgOgug");
    this.shape_9.setTransform(12.3256, 42.375);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("rgba(234,234,234,0.271)")
      .s()
      .p("AgiDZQgihhAghlQAnhdAIglQAPg9gZh6QAqBBAIBUQAIBdgpBdQgdBGAGBjQACAxAIAkQgWgcgRgyg");
    this.shape_10.setTransform(12.3145, 42.35);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("rgba(234,234,234,0.298)")
      .s()
      .p("AgnDkQgnhmAlhqQAshiAKgnQARg/gdiAQAxBDAJBYQAIBiguBiQghBJAGBoQADAzAJAmQgagegTgzg");
    this.shape_11.setTransform(12.3209, 42.375);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("rgba(234,234,234,0.322)")
      .s()
      .p("AgsDvQgshrAphwQAyhlAMgqQAThBghiHQA3BHAKBcQAKBmg1BmQglBOAHBtQADA1AKAnQgdgfgVg1g");
    this.shape_12.setTransform(12.3155, 42.35);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("rgba(234,234,234,0.349)")
      .s()
      .p("AgxD5QgyhwAuh0QA5hqANgrQAVhFgliMQA+BKALBgQALBrg7BqQgqBRAIByQADA3AMAqQgggigYg3g");
    this.shape_13.setTransform(12.3286, 42.375);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("rgba(234,234,234,0.373)")
      .s()
      .p("Ag2EEQg3h1Azh4QA+hvAOguQAYhGgpiTQBEBOANBjQAMBvhBBvQguBVAIB2QAEA6ANArQgkgjgag5g");
    this.shape_14.setTransform(12.3233, 42.35);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("rgba(234,234,234,0.396)")
      .s()
      .p("Ag8EOQg8h5A4h9QBFh0APgvQAZhKgsiYQBLBQANBoQAOB0hIB0QgyBXAJB7QAEA9AOAsQgngjgdg9g");
    this.shape_15.setTransform(12.3055, 42.325);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("rgba(234,234,234,0.424)")
      .s()
      .p("AhBEYQhBh+A9iBQBKh4ARgxQAbhOgwidQBRBTAPBrQAPB6hOB4Qg3BaAKCAQAFA/APAuQgqglggg/g");
    this.shape_16.setTransform(12.3185, 42.35);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("rgba(234,234,234,0.447)")
      .s()
      .p("AhGEjQhGiCBBiIQBQh8ASgzQAehQg0ikQBYBXAQBwQAQB9hUB8Qg8BfALCFQAFBBARAwQgugngihBg");
    this.shape_17.setTransform(12.3132, 42.325);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("rgba(234,234,234,0.475)")
      .s()
      .p("AhLEuQhMiIBGiMQBXiBATg0QAghTg4iqQBeBZASB0QAQCChZCBQhABhALCKQAFBEATAyQgygogkhDg");
    this.shape_18.setTransform(12.3196, 42.35);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape}]})
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
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 24.7, 84.7);

  (lib.Path_6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("AgZg+QAagBAZAFQgMBLgFAZQgGgBgLACIAFAQQgIAEgEAAg");
    this.shape.setTransform(2.6, 6.3327);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0, 0, 5.2, 12.7), null);

  (lib.Path_4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("Aghg8IA9gDIAFB8Ig8ADg");
    this.shape.setTransform(3.35, 6.375);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0, 0, 6.7, 12.8), null);

  (lib.Path_11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("AgeAlIA5hLIAEABIg1BMg");
    this.shape.setTransform(3.05, 3.875);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0, 0, 6.1, 7.8), null);

  (lib.Path_10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("AgZAnIAWhVIAMACIgCACQAMAEAFAAIACBVQgYAAgbgIg");
    this.shape.setTransform(2.575, 4.7);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0, 0, 5.2, 9.4), null);

  (lib.Path_8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("AgsA1IAfh4IA6APIgeB4g");
    this.shape.setTransform(4.525, 6.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0, 0, 9.1, 13.6), null);

  (lib.Path_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#9E9E9E").s().p("AhTBBIgLgDIAAiYQAZAHAVAEQAzAJBcAAIAAChQhigKhQgQg");
    this.shape.setTransform(9.525, 9.125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0, 0, 19.1, 18.3), null);

  (lib.Path_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#BAA288")
      .s()
      .p(
        "Ag3gLQgDAJAAAEQAagSAbAFIAjAJQAUAFAPgCIAEgBQgIAEgGAAQgPAAgkgHQgNgDgQAFIgTAFIgYAJQADgMAKgMg",
      );
    this.shape.setTransform(6.925, 1.2979);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0, 0, 13.9, 2.6), null);

  (lib.Path_2_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7F7F7D")
      .s()
      .p(
        "AAoANQgagNgOgCQgGgBgMADIgSAEIgJACQgDABgDgDQgGgEACgFQAPgTBeATQAFAFgGAMQgBADgFAAQgDAAgEgCg",
      );
    this.shape.setTransform(5.5746, 1.5151);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0, 0, 11.2, 3.1), null);

  (lib.Path_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E7E6E6").s().p("AgTAKIgDgEQgDgDACgEQACgFAFgBIAGgBQARgEASAWg");
    this.shape.setTransform(2.4682, 1.0459);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0, 0.1, 5, 2), null);

  (lib.Path_1_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7F7F7D")
      .s()
      .p(
        "Ag6AMQgIgBAHgGQAbgTAtADQAfACAQAGQAFACgDAFQgCAFgEACQgGACgngJQgVgEgRADQgJABgLAFQgHADgDAAIgBAAg",
      );
    this.shape.setTransform(6.2658, 1.2639);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0, 0, 12.6, 2.5), null);

  (lib.Path_1_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7F7F7D")
      .s()
      .p("AAcALQgHAAgUgGIgbgGQgJgBgMACQgKADgCgBQgEgCAFgGQArgHAoAFQAmADgBAGQgCAKgZAAIgHAAg");
    this.shape.setTransform(6.1697, 1.1456);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0, 0, 12.4, 2.3), null);

  (lib.Path_1_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E73335")
      .s()
      .p("AAlAHQgSgHgLgCQgMgDgSAFIgVAEQgFAAgEgEQgFgGABgHIALANQAsgYA4AgIACACQgCAEgBAAIgRgHg");
    this.shape.setTransform(5.6659, 1.375);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0, 0, 11.4, 2.8), null);

  (lib.Path_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#020303")
      .s()
      .p("AjtAJQhigEAAgFQAAgEBigEQBjgDCKAAQCMAABhADQBjAEAAAEQAAAFhjAEQhiADiLAAQiJAAhkgDg");
    this.shape.setTransform(33.6, 1.225);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, 0, 67.2, 2.5), null);

  (lib.Path_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F4A08E").s().p("AgNAAIAbgDIgSAHg");
    this.shape.setTransform(1.4, 0.425);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0, 0, 2.8, 0.9), null);

  (lib.Path = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#938F8F")
      .s()
      .p("AiBAXQiRgChdgGQhegHAAgIQAAgJCHgHQCIgIC+AAQC/AACHAIQCIAHAAAJQAAAJhsAGQiLAJjXAAg");
    this.shape.setTransform(46.175, 2.45);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 92.4, 4.9), null);

  (lib.etoile = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F3DF89").s().p("AgDAAQAAgRADgQQAEAQAAARQAAATgEAOQgDgOAAgTg");
    this.shape.setTransform(15.8195, 15.7024, 4.6873, 4.6873);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#F3DF89").s().p("AghAAQAQgDARAAQATAAAPADQgPADgTAAQgRAAgQgDg");
    this.shape_1.setTransform(15.8195, 15.7024, 4.6873, 4.6873);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.etoile, new cjs.Rectangle(0, 0, 31.7, 31.4), null);

  (lib.couvercle = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#CAC9C8").s().p("AmphkQBUhpCXADQBSABDcA4QCGAxBfBRQCHBzhQBog");
    this.shape.setTransform(189.3542, 85.6487, 3.452, 3.452);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#E2E2E1").s().p("AnZh5QBZhrCrADQCIADDIBKQAeAMAbANQC3BcAzAwQBTBTghB+g");
    this.shape_1.setTransform(165.8051, 77.9616, 3.4519, 3.4519);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#7F7F7D").s().p("AHOCzIuhlYQgGgBADgGIAGgHIOoFbIgCAIQgBAEgEAAIgDgBg");
    this.shape_2.setTransform(162.9778, 98.0088, 3.4519, 3.4519);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E2E2E1")
      .s()
      .p(
        "AgMAdQgKgEgEgKQgEgKAEgJIAFgLQAEgKALgEQAJgEAKAFQAKADAEALQAEAKgFAJIgEALQgFAKgKAEQgFACgDAAQgGAAgFgDg",
      );
    this.shape_3.setTransform(200.8978, 19.2084, 3.452, 3.452);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.couvercle, new cjs.Rectangle(0, 0, 336.3, 160.1), null);

  (lib.ganddessus = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#DEDEDE")
      .s()
      .p("Ah+A8IAkgCQAtgGAqgTQAngSBDg6IATgTIAFAXIgEACIgfAUQgdARgOAMQg1ArhCAHIgaABQgRAAgNgDg");
    this.shape.setTransform(101.3063, 96.9675, 3.452, 3.452);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#DEDEDE")
      .s()
      .p(
        "AhTBAIgHgCQAZheARgJQAegPApgGQA6gIAHAfQAJAmgOAXQgPAagoAGIgnAFIAegHQATgGAPgLQAagTgLgdQgMgegjADQgUACgTALQgVAMgHAQQgJATgKAdQgIAQgIAAIgCgBg",
      );
    this.shape_1.setTransform(65.0779, 82.3547, 3.452, 3.452);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#BFBEBF")
      .s()
      .p("AgBAJQgJgBACgJQABgEADgCQADgCADABQAEABACADQACADgBADQAAAEgEACQgCACgDAAIgBgBg");
    this.shape_2.setTransform(150.6587, 42.8599, 3.452, 3.452);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#313131")
      .s()
      .p("AhQA5QgOgBgmACIgjADIgGiSIBYgGQBwAACFASQAXASgOBCQgNBEgfANQh+gghPgDg");
    this.shape_3.setTransform(217.1185, 63.4073, 3.452, 3.452);

    this.instance = new lib.Path_4();
    this.instance.setTransform(167.35, 59.45, 3.452, 3.452, 0, 0, 0, 3.4, 6.4);
    this.instance.compositeOperation = "multiply";

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#F0F0F0").s().p("Agvg7IBZgEIAGB7IhZAEg");
    this.shape_4.setTransform(162.1472, 59.6101, 3.452, 3.452);

    this.instance_1 = new lib.Path_6();
    this.instance_1.setTransform(152.15, 60.85, 3.452, 3.452, 0, 0, 0, 2.6, 6.4);
    this.instance_1.compositeOperation = "multiply";

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F6F6F6")
      .s()
      .p(
        "AgqCpQgLAAgFgOQgFgOAJgHQAHgEAegHQAdgHATgOQAagTgLgeQgLgegjADQgUACgTALQgVAMgIARQgIATgLAdQgIASgKgDIgKgEQgGgDgCgHQgDgUANgzQAGgZAegUQAXgPAMgBQgsgEgZAGQgPAEgVAQQgYAUgEACQgQAIgMgLQgLgLAJgKQARgUAMgNQAXgZAOgCIAxgHQAggDASAFIgCgBIhqgeQgXgGgFgRQgFgPALgFQAHgDAJABIARAEIBuAfIg8gkQgSgMACgMQADgNANAEQAYAHAxAfQBrA7BQARIARAAQAGBTAOAqIgDACIgfAUQgdASgPAMQg1ArhDAHIgYABQgRAAgNgDg",
      );
    this.shape_5.setTransform(72.5333, 59.3463, 3.452, 3.452);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#E8B290")
      .s()
      .p(
        "AhRCcQgFgOAJgHQAHgEAegHQAegHASgOQAagTgLgeQgLgegiADQgVACgTALQgVAMgIARQgIATgLAdQgIASgKgDIgKgEQgGgDgCgHQgDgUANgzQAGgZAegUQAXgPAMgBQgsgEgZAGQgPAEgVAQQgYAUgEACQgQAIgMgLQgLgLAJgKQARgUAMgNQAXgZAOgCIAxgHQAggDASAFIgCgBIhqgeQgXgGgFgRQgFgPALgFQAHgDAJABIARAEIBuAfIg8gkQgSgMACgMQADgNANAEQAYAHAxAfQBrA7BQARIAjABIAwBmIgDABIguAXQgwAfgbATQgSANgfAOQgZALgOAEQgPAEgkACIgjAAQgLAAgFgOg",
      );
    this.shape_6.setTransform(80.3865, 58.8386, 3.452, 3.452);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.instance_1},
            {t: this.shape_4},
            {t: this.instance},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ganddessus, new cjs.Rectangle(0, 0, 277.3, 118.7), null);

  (lib.ganddessous = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#E85434").s().p("AgHAEIACgMIANAHIgFAJg");
    this.shape.setTransform(163.0974, 48.6703, 3.4518, 3.4518);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EA6743").s().p("AhHAQIABgJICIgWIAGAFIiAAYIgHABIgHABIgBAAg");
    this.shape_1.setTransform(185.4478, 43.4639, 3.4518, 3.4518);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#D7381D").s().p("AhHANIABgKICHgWIAHAFIgBAHIiEAbIgKgHg");
    this.shape_2.setTransform(185.4478, 44.7008, 3.4518, 3.4518);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FEE4B2")
      .s()
      .p("AhHAOQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBICQgZIACADIiNAaIgEgBg");
    this.shape_3.setTransform(231.4214, 34.6906, 3.4518, 3.4518);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CAAA8A")
      .s()
      .p("AhCALIgFgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAICRgZIACADIgBAFIiNAbg");
    this.shape_4.setTransform(231.2532, 35.8124, 3.4518, 3.4518);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#E85434").s().p("AgHAEIACgMIAOAHIgFAJg");
    this.shape_5.setTransform(154.1228, 46.2541, 3.4518, 3.4518);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#EA6743").s().p("AhHAQIACgJICHgXIAGAFIiAAZIgHABIgHACIgBgBg");
    this.shape_6.setTransform(176.4731, 40.9613, 3.4518, 3.4518);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#D7381D").s().p("AhHANIACgKICGgWIAHAFIgBAHIiDAbg");
    this.shape_7.setTransform(176.4731, 42.2845, 3.4518, 3.4518);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FEE4B2").s().p("AhIALICQgZIACADIiNAaQgGgBABgDg");
    this.shape_8.setTransform(222.4453, 32.188, 3.4518, 3.4518);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#CAAA8A")
      .s()
      .p("AhDAMIgEgCQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBICRgZIACADIgBAFIiNAbg");
    this.shape_9.setTransform(222.3648, 33.2236, 3.4518, 3.4518);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#F4EEEA")
      .s()
      .p("AhIAPQgNgfAAgGQAEAJBGAAQBeAAAEgJQgBAEgFAQIgIARQgIAIhJAAQg4AAgIgIg");
    this.shape_10.setTransform(258.7122, 39.1779, 3.4518, 3.4518);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#DDDDDC")
      .s()
      .p(
        "Ag6AIQgZgEgDgEIAAgBQAAgJBWAAQBXAAAAAJIgBABQgCAEgZAEQgZADgiAAQghAAgZgDgAhQgBIAAABQACADAXABIA3AAIA4AAQAYgBACgDIAAgBQAAgIhRAAQhRAAAAAIg",
      );
    this.shape_11.setTransform(258.7745, 31.4947, 3.4515, 3.4515);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#76453C")
      .s()
      .p(
        "Ag2AHQgXgDgDgDIAAgBQAAgDAYgCQAYgEAgAAQAhAAAYAEQAYACAAADIAAABQgDADgXADQgYACgfAAQgfAAgXgCg",
      );
    this.shape_12.setTransform(258.7985, 33.4824, 3.4518, 3.4518);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#D8D7D6")
      .s()
      .p("Ag6AIQgZgEgDgEIAAgBQAAgJBWAAQBXAAAAAJIgBABQgCAEgZAEQgZADgiAAQghAAgZgDg");
    this.shape_13.setTransform(258.7985, 31.4977, 3.4518, 3.4518);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#BFA38A").s().p("AgBgEQAIgGAGABQgFACgGAFIgPANQAEgKAIgFg");
    this.shape_14.setTransform(177.4224, 25.5367, 3.4518, 3.4518);

    this.instance = new lib.Path_3();
    this.instance.setTransform(189.3, 32.95, 3.4515, 3.4515, 0, 0, 0, 7.2, 1.5);
    this.instance.alpha = 0.3008;
    this.instance.compositeOperation = "multiply";

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#E9D7C2").s().p("AgMAFIAZgKIAAAAQgMAHgIADg");
    this.shape_15.setTransform(207.1502, 32.0949, 3.4511, 3.4511);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#E9D7C2").s().p("AgTAGQASgJATgDIACACQgWAEgNAGIgCABg");
    this.shape_16.setTransform(201.1108, 30.1105, 3.4511, 3.4511);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#E9D7C2").s().p("AgWAJQAUgMAXgGIACABQgXAHgTAKg");
    this.shape_17.setTransform(195.7617, 28.1262, 3.4511, 3.4511);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#E9D7C2").s().p("AAEgNIAEgDQgKANgCATIgCABQABgQAJgOg");
    this.shape_18.setTransform(171.5179, 30.2831, 3.4511, 3.4511);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#E9D7C2").s().p("AAVgVIADAAQgcAKgSAhIgBAAQAQgiAcgJg");
    this.shape_19.setTransform(180.577, 27.2634, 3.4511, 3.4511);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#E9D7C2")
      .s()
      .p("AgOAAQAWgPAVABIAEADQgOgDgTAKQgOAGgOAMIgEABQAKgKAIgFg");
    this.shape_20.setTransform(189.3772, 27.5863, 3.4511, 3.4511);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#99826B")
      .s()
      .p(
        "AhFASQAEgKAHgIQAOgRAUgFQAWgGAVAJQAIADAXAQQAKAGAOAEQgRAGgGAAQgPAAgkgHQgOgDgPAEIgTAHIgZAJIAEgIg",
      );
    this.shape_21.setTransform(190.6941, 28.5782, 3.4515, 3.4515);

    this.instance_1 = new lib.Path_1_2();
    this.instance_1.setTransform(190.35, 32.6, 3.4518, 3.4518, 0, 0, 0, 6.5, 1.4);
    this.instance_1.alpha = 0.2383;

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "Ag5AVQgFAAAAgDQAAgDAFgBQgGgGABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIAFgBQgGgEACgDQACgEAHACQgCgGAEgDQADgBADADQAAgGADgBQAEgBAEAEQgCgFAEgCQACgBADAAQADABABADQABgEAGgBQAEABAAAEQAFgEADAAQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQADABAAAEQADgDAEABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAADQADgEAEAAQAFABgBAFQAFgEAEACQAEACgEAFIAIgCQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQAEgFAEACQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAGAAAAADQAAAFgEABQAGACgDAEQgFgFgHAFIgBABQAAgEgDgBIgFAAIgCABQAAgDgDgBQgDgCgDAAQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgFgEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAABQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAgBQgDgBgCAAIgDADIAAADQgCgDgDgCQgEgBgCADIAAAEQgIgIgEAGIgBACQgBgDgEAAQgDgBgDADIgBABQgBgDgFABIgBABIgBADQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBABADAFIgDgBQAAgBgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIABAFQgEgEgDADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABAAIACAEQgEgDgCAEQgBgBAEgEg",
      );
    this.shape_22.setTransform(189.5828, 32.7921, 3.4518, 3.4518);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "AgEAjQgFgBAAgDQgCAFgFgCQgGgCADgEQgDAEgEAAIgDgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgEADgEgCIgEgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQgEADgDgBQgGgCAEgDQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgCAFgEQgFAAAAgDQAAgDAFgBQgGgFABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIAFgBQgGgFACgDQACgEAHACQgCgGAEgDQADgBADADQAAgGADgBQAEgCAEAEQgCgFAEgBQACgCADABQADABABADQABgFAGAAQAEAAAAAFQAFgFADABQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADABAAAEQADgDAEAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAEQADgEAEAAQAFAAgBAGQAFgFAEADQAEACgEAFIAIgCQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAEgEAEACQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAGAAAAADQAAAEgEABQAFACgCADQgBADgDAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgGABIACADIgBACQgEAEgFgEQADAEgEADQgDACgFgFQgBAGgCAAQgDABgCgFQACAGgGAAQgGAAgBgFQAAAEgFABQgEABAAgEQAAADgEAAQgBABgBAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgBgBg",
      );
    this.shape_23.setTransform(189.5828, 35.9084, 3.4518, 3.4518);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#1D281D")
      .s()
      .p("AgNAGQAAgUAFgaIAWgBQgGAZgBAQQgBAiAIAIIgXAAQgEgKAAgag");
    this.shape_24.setTransform(67.9141, 32.4469, 3.4518, 3.4518);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#DB8733")
      .s()
      .p(
        "AAQAOQgWgHgPgCQgdgEgaALQAZgQAoACIAHABIAfABQARAAAIgKIACgEIAFAFQALAJAHANQgWACgQAAQgOAAgJgBg",
      );
    this.shape_25.setTransform(68.5981, 27.8508, 3.4515, 3.4515);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#DB8733").s().p("AgEAAQABgHgIgFQAPADALAIIgCADQgIALgTAAQAIgFACgIg");
    this.shape_26.setTransform(81.9726, 23.2112, 3.4515, 3.4515);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#EFA555")
      .s()
      .p("AgOAMQAJgGADgIQACgGgFgFQAFAAAIABQAIAFgBAHQgCAJgIAFg");
    this.shape_27.setTransform(75.0242, 23.017, 3.4515, 3.4515);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#DB8733").s().p("AgTALQAPgJAEgMIAAgBIAPgBIABAAQAFAFgCAGQgDAHgJAHg");
    this.shape_28.setTransform(67.3685, 22.7797, 3.4515, 3.4515);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#EFA555")
      .s()
      .p("AgIABIABgCQABgEgDgEIAAAAIAcgDIAAABQgEAMgPAKIgSACQAHgGADgGg");
    this.shape_29.setTransform(60.4008, 23.0386, 3.4515, 3.4515);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#DB8733")
      .s()
      .p("AgBACQAAgEgGgBQAIgGAFgCQADAEgBAEIAAADQgEAFgGAGIgFABQAEgEACgGg");
    this.shape_30.setTransform(54.8045, 23.7289, 3.4515, 3.4515);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#EFA555").s().p("AALgNQAHABgBAFQgBAFgEADQgRAFgMAIQAQgQAMgLg");
    this.shape_31.setTransform(47.9817, 27.2667, 3.4515, 3.4515);

    this.instance_2 = new lib.Path_1_1();
    this.instance_2.setTransform(67.8, 31.4, 3.4518, 3.4518, 0, 0, 0, 6.4, 1.2);
    this.instance_2.alpha = 0.2383;

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "AA2AbIADgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgDgDgEAEQACgDgBgCQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDABIACgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABIgEADIAAgFIgBgBQgFAAgCADIAAgCQgDgCgEABQgDAAgBAEIgBgEQgCgDgEACQgDABgDADIAAgEQgCgDgEABQgDABgBADIgBgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgDAAgDABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIgCgEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABIgEAEIgEgCQgEAAgCADQgDACAAADIgCgBQgCgCgDABQgDABAAAEIgBgBQgHgEgEAEQgDgEAFgCQgEgBAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEgBQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADgCAEAEQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAIADQgDgHADgBQAEgDAEAFQgBgGAFgBQAFAAACAFIAAgEQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAFgBABADQAAgEADAAQADgBACACQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQADAAACACIADADQAAgFAEAAQAGAAAAAFQAEgGAGADQAEACgCAFQAEgEADABQAEABAAAHQADgEADACQADADgCAGQAGgCADAFQACADgGAFQAHgBABAFQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEAEQAFABAAADQAAAEgFAAQAEADgBACQgCgFgEADg",
      );
    this.shape_32.setTransform(67.4136, 30.186, 3.4518, 3.4518);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "AACAjQgBADgCAAQgEAAgBgEQAAAFgEgBQgFgCABgEQgBAFgGAAQgGAAACgFQgDAEgDgBQgBAAgBgGQgFAGgEgDQgDgDADgFQgEAFgFgEQgCgDADgDQgGgBgCgCQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQgDAAgCgEQgBgDAEgCQgEAAAAgFQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADgCAEAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAIADQgDgHADgBQAEgDAEAFQgBgGAFgBQAFAAACAFIAAgEQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAFgBABADQAAgEADAAQADgBACACQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQADAAACACIADADQAAgFAEAAQAGAAAAAFQAEgGAGADQAEACgCAFQAEgEADABQAEABAAAHQADgEADACQADADgCAGQAGgCADAFQACADgGAGQAHgBABAFQAAABAAAAQAAAAAAAAQAAABAAAAQgBABAAAAIgEAEQAFABAAADQAAAEgFAAQAFADgCADQgDAFgFgEQADAEgGACQgDABgDgEQADAFgHACQgEACgDgDQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgDACQgEAAgDgDQADAEgGACQgFABgCgFQAAAEgEABIgBAAQgEAAABgEg",
      );
    this.shape_33.setTransform(67.4136, 33.5601, 3.4518, 3.4518);

    this.instance_3 = new lib.Path_0();
    this.instance_3.setTransform(105.6, 27.4, 3.4518, 3.4518, 0, 0, 0, 1.6, 0.6);
    this.instance_3.alpha = 0.6016;
    this.instance_3.compositeOperation = "screen";

    this.instance_4 = new lib.Path_1_0();
    this.instance_4.setTransform(116.65, 31.7, 3.4518, 3.4518, 0, 0, 0, 5.8, 1.6);
    this.instance_4.alpha = 0.1992;
    this.instance_4.compositeOperation = "multiply";

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#F4A08E").s().p("AgJAQQAJgJAGgHQgBgJgCgJIAGAFIABAQQgGAJgGAHg");
    this.shape_34.setTransform(132.866, 28.5576, 3.4511, 3.4511);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#F4A08E").s().p("AgIATIAFgJIAHgNIgLgRIAHACIAJASIgBABIgKAUg");
    this.shape_35.setTransform(124.0658, 24.4163, 3.4511, 3.4511);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#F4A08E")
      .s()
      .p("AAFgIQgDgDgLgGIADgBIAGgBIAMALQgNATgEAIIgGABQAGgPAKgNg");
    this.shape_36.setTransform(112.0733, 24.33, 3.4511, 3.4511);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#F4A08E").s().p("AgLALQAGgKAKgIQgCgDgFgCIADgCIALAGIgUAXg");
    this.shape_37.setTransform(101.7201, 26.3144, 3.4511, 3.4511);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#EE7569")
      .s()
      .p(
        "AAiAVQgSgHgMgDQgLgDgTAFQgRAFgEAAQgFAAgFgGQgEgHACgGQACgFAJgHQAMgIANgEQAdgHAcANQAVAKAFAJQACACgFANQgEAMgDABIgQgHg",
      );
    this.shape_38.setTransform(117.7786, 26.585, 3.4515, 3.4515);

    this.instance_5 = new lib.Path_2_0();
    this.instance_5.setTransform(117.7, 32.75, 3.4518, 3.4518, 0, 0, 0, 5.7, 1.7);
    this.instance_5.alpha = 0.2383;

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "AAqAaQgEgBgBADIAAgEQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgDgBgDAEIgBgFIgBgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAgFgEAAQgEgBAAAGIgBgEQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgEgBgBAEIgBgDIgCgCQgFgBAAAFIgCgEQgDgCgDABQgDABgBADQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgEgBgCACQgDABABAEIgCgEIgCgBQgGgBAAAIIgEgDQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgBgBIgCgCQgDgCgEADQAAgCAFgCQgFgFABgDQABgFAGABQgFgGABgDQADgEAGACQgDgHAEgCQADgCADAEQAAgHADgCQADgBAEAEQgBgFADgCQAFgDAEAGQABgFAFAAQAEAAAAAFIACgDQACgCADABQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQADABgBAEIADgCQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAEABgBAGQACgFAFABQAEABgBAFQAEgFAEADQAEADgEAFIAHgDQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAADgBACQAEgEADACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABIgCADIADABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQgBAFgEACQAFABgBAEQgCADgDAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAABIgCgBQgHgDgDAHQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAg",
      );
    this.shape_39.setTransform(117.7926, 29.0814, 3.4518, 3.4518);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#F4EEEA")
      .s()
      .p(
        "AgEAoQgEgBgBgEQgBAFgFgBQgFgCACgFQgDAEgDAAIgDgCQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgEAEgDgCQgGgDADgEQgDAEgDgCQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQABAAAAgBQAAAAAAAAIABgBIgBABQgFAEgCgGQgCgCAEgEQgFAAAAgEQAAgDAFgCQgFgFABgBQABgFAGABQgFgHABgDQADgEAGACQgDgHAEgDQADgCADAEQAAgHADgBQADgCAEAFQgBgGADgCQAFgDAEAHQABgFAFAAQAEAAAAAFIACgEQACgCADABQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQADAAgBAEIADgCQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAEACgBAGQACgGAFABQAEABgBAGQAEgFAEADQAEACgEAGIAHgDQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAACgBADQAEgFADACQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIgCAEIADABQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQgBAEgEABQAFACgBADQgCAEgDAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBACgGABQADAEgCACQgEAEgEgEQACAFgDACQgEADgEgFQAAAFgCABQgDABgCgFQACAGgGAAQgGAAAAgEIAAgBIAAABQAAAEgEABQgFABAAgFQAAADgEABQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIgBAAg",
      );
    this.shape_40.setTransform(117.7926, 32.6281, 3.4518, 3.4518);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#C7C6C6")
      .s()
      .p("AgaADQAEgDAHAAIAPAAQAPgBAGgCQALgDgHAEQgRAHgXAAIgEAAQgKAAADgCg");
    this.shape_41.setTransform(187.5116, 16.1561, 3.4518, 3.4518);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#ACC413").s().p("AgIAAIAKgCIAHADIgJACg");
    this.shape_42.setTransform(196.9931, 11.131, 3.4515, 3.4515);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#ACC413").s().p("AgJAAIAIgCIALACIgHADg");
    this.shape_43.setTransform(149.0175, 8.5424, 3.4515, 3.4515);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#ACC413").s().p("AgKABIAJgDIAMACIgLADg");
    this.shape_44.setTransform(143.4952, 11.3036, 3.4515, 3.4515);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f("#8AA127").s().p("AgIACIACgEIAQABIgIAEg");
    this.shape_45.setTransform(141.6831, 10.4407, 3.4515, 3.4515);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#8AA127").s().p("AgJABIAJgEIAKAEIgLADg");
    this.shape_46.setTransform(133.6584, 10.8722, 3.4515, 3.4515);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#F9E8CD")
      .s()
      .p(
        "AgEANIgQgEIgNgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgCADgBQAEgCAJABIALABQAGABAEgBIAGgBIAIAAQAKgCgDgDIAHgDIAFAGQACADgCADQgDAEgQADQgEABgGADQgFACgDAAIgCAAg",
      );
    this.shape_47.setTransform(134.4597, 10.2825, 3.4515, 3.4515);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#EE7769").s().p("AgDAHQgBgBAEgHQACgFACAAQABAAgCAKQgDADgCAAIgBAAg");
    this.shape_48.setTransform(139.032, 4.866, 3.4511, 3.4511);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#EE7569")
      .s()
      .p("AgDAIQgGgCgBgCQgCgCAIgGQAGgGACABQAFAAACACQABABgDAHQgDAIgCAAIgCABIgFgCg");
    this.shape_49.setTransform(133.5585, 10.7024, 3.4511, 3.4511);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#F6A983")
      .s()
      .p("AgLgBQAAgCAJgDQAHgCACAAQADAAABAEQABACgEAEQgFAEgEACIgCABQgFAAgDgKg");
    this.shape_50.setTransform(131.1675, 9.2028, 3.4511, 3.4511);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#EE7569")
      .s()
      .p("AgJAHQgBgDADgEQADgGADAAQABgBAFADQAFACAAABIgBACQgNAGgDAAIgCAAg");
    this.shape_51.setTransform(130.6228, 5.9215, 3.4511, 3.4511);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#F6A983")
      .s()
      .p("AgCAGQgGgCABgCQAAgCAFgDQAEgDACAAQACgBACAFQABAEgBABIgEADIgCABIgEgBg");
    this.shape_52.setTransform(132.497, 2.9502, 3.4511, 3.4511);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#EE7569")
      .s()
      .p("AgFABIgBgDQABgDAFAAQAEAAADACQACACgGAGIgFABQgCgBgBgEg");
    this.shape_53.setTransform(136.0582, 2.0706, 3.4511, 3.4511);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#F6A983")
      .s()
      .p("AgDAEQAAAAgBAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQABgDACgBQAEgBACAFQABACgFADIgEgBg");
    this.shape_54.setTransform(138.5293, 2.2809, 3.4511, 3.4511);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f("#8AA127").s().p("AgIAAIAFgBIAMAAIgIADg");
    this.shape_55.setTransform(166.2749, 14.4962, 3.4515, 3.4515);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#F9E8CD")
      .s()
      .p(
        "AgRAGIgGgLIADgDQADAIAMAAQANADAGgBIAFgCQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgCADQgCAEgTAAIgEAAQgKAAgEgDg",
      );
    this.shape_56.setTransform(159.0095, 12.7156, 3.4515, 3.4515);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#EE7769")
      .s()
      .p("AgHAHIADgFIAEgEQAGgGACABQABAAgDAHQgCAFgCABIgGACIgDgBg");
    this.shape_57.setTransform(169.9157, 9.5356, 3.4511, 3.4511);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#F29478")
      .s()
      .p("AgLAFQgFgFAAgCQABgDANgCQAMgDACACIADADIACAEQAAABgJAFQgJAFgCAAIgBAAQgDAAgEgFg");
    this.shape_58.setTransform(159.0043, 12.4202, 3.4511, 3.4511);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#EE7769")
      .s()
      .p("AgKAJQgFgBABgHQAAgEACgEQADgFAWAJQADADgBADQgBADgJACIgKACIgFgBg");
    this.shape_59.setTransform(157.7712, 8.4166, 3.4511, 3.4511);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#F29478")
      .s()
      .p("AgBAHQgNgBABgDQAAgDAJgEQAHgEADABQACABAEAGQADAFgBABIgDACIgCAAIgKgBg");
    this.shape_60.setTransform(158.6977, 4.3009, 3.4511, 3.4511);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#EE7769")
      .s()
      .p("AgIADQgEgFACgCQAEgDAHAAQAHAAADABQACABgDAGQgCAGgCABIgHAAIAAAAQgDAAgEgFg");
    this.shape_61.setTransform(163.8386, 3.1994, 3.4511, 3.4511);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#EE7769")
      .s()
      .p("AgIAGQgCgBACgGIADgGQAEgBAEADQAGADABACQAAADgMAFIAAAAIgGgCg");
    this.shape_62.setTransform(168.7763, 3.7308, 3.4511, 3.4511);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#F6A983").s().p("AgGADQgBgDAEgCQADgEADABQAGAAgDAJQgBADgFAAg");
    this.shape_63.setTransform(170.4887, 5.856, 3.4511, 3.4511);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#EE7769")
      .s()
      .p("AgDAFQgBgBAAgFQgBgGABAAQACAAADAGIADAEIABAEIgBABQgDAAgEgDg");
    this.shape_64.setTransform(180.0521, 8.1417, 3.4511, 3.4511);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#F08268")
      .s()
      .p("AgFAKQgCgBgDgHQgEgHABgBQADgDAFAAQACgBAJAHQAJAFgBADQgCACgHACIgHABIgDAAg");
    this.shape_65.setTransform(186.9584, 13.9419, 3.4511, 3.4511);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#F8B98E")
      .s()
      .p("AADAJQgFgBgGgFQgGgEABgDQABgDAEgBQAXACgBAEQgDALgHAAIgBAAg");
    this.shape_66.setTransform(189.877, 12.1909, 3.4511, 3.4511);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#F08268")
      .s()
      .p("AgKACIgBgCQgBgBAHgDQAFgDACAAQADAAAEAGQAFAFgCADIgCABQgFAAgPgGg");
    this.shape_67.setTransform(190.5988, 8.299, 3.4511, 3.4511);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#F6A983")
      .s()
      .p("AgEAHQgEgBgBgCQgBgBACgFQABgFACAAQADAAAFACQAGAEABACQABADgHACIgFACIgDgBg");
    this.shape_68.setTransform(188.118, 5.3599, 3.4511, 3.4511);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#F29478").s().p("AgCAGQgHgHABgCQADgCAFAAQAHgBACADQgCAJgDABg");
    this.shape_69.setTransform(183.6373, 4.6446, 3.4511, 3.4511);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f("#F6A983").s().p("AgFABQADgHAEACQADABABADQACAEgDABIgFABQgGgDABgCg");
    this.shape_70.setTransform(180.651, 5.1335, 3.4511, 3.4511);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#C7C6C6")
      .s()
      .p(
        "AhgARQgegEgEgNIgBgCQAAgVB+AAQA6AAAlAEQAqAGAAALIAAACQgEAKgnAHQgmAIg0gBQg3ABgogIgAh7gCIABACQADAIAjADQAaACA6ABQA6gBAbgCQAlgDADgIIAAgCQAAgSiCAAQh2AAAAASg",
      );
    this.shape_71.setTransform(158.8353, 11.7336, 3.4511, 3.4511);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f("#8AA127").s().p("AgHABIgCgCIATgBIgHAFg");
    this.shape_72.setTransform(152.0376, 7.7658, 3.4515, 3.4515);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#ACC413").s().p("AgJAAIAJgCIAKABIgHAEg");
    this.shape_73.setTransform(144.6169, 6.2127, 3.4515, 3.4515);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#D3D3D1").s().p("AhZACQgLgaAAgEQATASBlACQAyABAfgBIiyAlIgMgbg");
    this.shape_74.setTransform(148.4135, 21.5717, 3.4515, 3.4515);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#DDDDDC")
      .s()
      .p("Ag9AqQgQgDgKgHQgrg7AAgPQAGATB7AAQB+AAAHgTQgBAIgUAgQgSAbgGAEQgIAJgcACQgWADgoAAQgmAAgMgBg");
    this.shape_75.setTransform(158.9405, 26.2312, 3.4515, 3.4515);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics.f("#8AA127").s().p("AgHAAIANgCIACAEIgIABg");
    this.shape_76.setTransform(172.6601, 15.0139, 3.4515, 3.4515);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics.f("#8AA127").s().p("AgIABIAJgEIAHAEIgHADg");
    this.shape_77.setTransform(178.7865, 15.1002, 3.4515, 3.4515);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics.f("#8AA127").s().p("AgJAAIAHgCIAMABIgHAEg");
    this.shape_78.setTransform(191.1255, 9.319, 3.4515, 3.4515);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#F9E8CD")
      .s()
      .p(
        "AgSAKQgTgCgDgHQgCgDACgDIAGgGIAIADQgEAEAMABIAJABIAIABQAEABAUgCQAMAAACABQAEABABACQAAADgDACQgFADgQACIgNAAQgLAAgMgCg",
      );
    this.shape_79.setTransform(176.3897, 9.4916, 3.4515, 3.4515);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics.f("#8AA127").s().p("AgKgCIAPAAIAGADIgLACg");
    this.shape_80.setTransform(141.2517, 14.5825, 3.4515, 3.4515);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f("#FFEBCD").s().p("AgKACIgHgEIAPgCIATAFIgRAEg");
    this.shape_81.setTransform(126.309, 13.9768, 3.4511, 3.4511);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics.f("#F9E8CD").s().p("AgJABIAAgBIASgEIABAFIgQADg");
    this.shape_82.setTransform(129.1561, 15.8749, 3.4511, 3.4511);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f("#EDD5B7").s().p("AgJgBIAAgEIARAFIABAGQgJgDgJgEg");
    this.shape_83.setTransform(123.5481, 15.1847, 3.4511, 3.4511);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#F9E8CD")
      .s()
      .p("AhTANQgjgHgEgHIAAgCQAAgPB0AAQCBAAAAAPIAAACQgEAHgjAHQgkAGgwAAQgwAAgjgGg");
    this.shape_84.setTransform(158.9215, 13.4592, 3.4511, 3.4511);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#E5DFDA")
      .s()
      .p("AhZASQglgIgEgKIgBgDQAAgVB+AAQA6AAAlAFQAqAGAAAKIAAADQgEAKgmAIQgmAHg0AAQgzAAgmgHg");
    this.shape_85.setTransform(158.8353, 11.9062, 3.4511, 3.4511);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#FFD549")
      .s()
      .p(
        "AgSALQgTgCgDgHQgDgFAIgKIAJAGQgEAEAMABIAJABIAIABQAEAAAUgBQAMAAACABQAEAAABADQAAADgDACQgFADgQACIgNAAQgLAAgMgCg",
      );
    this.shape_86.setTransform(176.4019, 9.1464, 3.4515, 3.4515);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#F29478").s().p("AgJAAIAIgBIALABQAAAAgGACIgBAAIgMgCg");
    this.shape_87.setTransform(172.9846, 10.2813, 3.4511, 3.4511);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#F29478")
      .s()
      .p(
        "AgMAEQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBIALgCQAJgDACABQACABABADQABABgBABQAAAAAAABQAAABAAAAQgBAAAAAAIgMABIgMgBg",
      );
    this.shape_88.setTransform(181.7331, 8.6646, 3.4511, 3.4511);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#F6A983")
      .s()
      .p(
        "AgJAFQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAGgDQAGgEADABIAHADQAFABgDACQgEACgIABIgFABIgEgBg",
      );
    this.shape_89.setTransform(180.9437, 6.8676, 3.4511, 3.4511);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#F29478")
      .s()
      .p(
        "AgHAEQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAIAAQAIgBACACQADABgQAGg",
      );
    this.shape_90.setTransform(177.8039, 6.1903, 3.4511, 3.4511);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#F6A983")
      .s()
      .p(
        "AgEADQgGgCABgBQABAAAFgCQAFgCAEABQABAAABAAQAAAAABABQAAAAAAABQABABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgGABIAAAAIgGgBg",
      );
    this.shape_91.setTransform(172.613, 6.4707, 3.4511, 3.4511);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#F29478")
      .s()
      .p("AgHADQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgCAEAAQAKACgBABIgDACg");
    this.shape_92.setTransform(170.5586, 7.5923, 3.4511, 3.4511);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#F6A983").s().p("AgBACQgHgCAEgCIAFAAQAFAAABABIgCACIgFACIgBgBg");
    this.shape_93.setTransform(170.1087, 9.324, 3.4511, 3.4511);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#ACC413").s().p("AgJAAIALgCIAHADIgJACg");
    this.shape_94.setTransform(172.9351, 16.8275, 3.4518, 3.4518);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#F4DAA2")
      .s()
      .p("AgIABQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAQADgBAFABIAEAAIgEABIgHABg");
    this.shape_95.setTransform(143.8834, 17.056, 3.4515, 3.4515);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#F4DAA2")
      .s()
      .p("AgGABQAAAAAAAAQgBAAAAAAQABgBAAAAQAAAAABAAIADAAIAGAAIAEAAIgDABIgGABg");
    this.shape_96.setTransform(140.1053, 17.3868, 3.4515, 3.4515);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#F4DAA2")
      .s()
      .p("AgHABIAFgBIAGAAIAEAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgGAAg");
    this.shape_97.setTransform(143.4686, 16.2651, 3.4515, 3.4515);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#EE7569")
      .s()
      .p(
        "AgHAMQgIgDgBgEIAFABQAHAAAGgGIAEgFIABgIIADAGIACgCQACADAAAGIACgEQACADgCAFQgCAFgEACQgEADgFAAIgIgCg",
      );
    this.shape_98.setTransform(34.3669, 41.078, 3.4515, 3.4515);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#EE7569")
      .s()
      .p(
        "AgDAEIgCgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAgBIABABQAAAAgCgFQAEABABACQACACgCADQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgEgCg",
      );
    this.shape_99.setTransform(29.858, 40.6015, 3.4518, 3.4518);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#F0847D")
      .s()
      .p(
        "AgDAJIgCgDQACACADgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQgBgDgDAAQgCAAgCADIAAgBIgBABIAAgDIgBACQgCgDADgEQAEgDAEAAQAFgBACAFQACAHgIAGIgDABIgDgBg",
      );
    this.shape_100.setTransform(30.1439, 39.6841, 3.4515, 3.4515);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#F29290")
      .s()
      .p(
        "AgGAPIgCgDIAAABQgEgDAAgIIgCABIAAgEIgCABIAAgGIgBABIAEgFIgBgBQAAgCAFgBIAHgBIAAgBQADgBALAGIAAgBQAFAFAAADQACAIgGAHQgGAIgJgCIAAAAIgEgCg",
      );
    this.shape_101.setTransform(30.7728, 37.5545, 3.4518, 3.4518);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#F5A89B")
      .s()
      .p(
        "AAEASQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAgLQgBgDgGgCIgJgEIgEgCIAFgGQAEgCAFAAIgCgBIAGAAIAFABIAAgCIAIAGIABgDIACADQADADABAEQABADgCAGIgEAKIgCABIgEAAIAGABQgCADgEAAIgEgBg",
      );
    this.shape_102.setTransform(34.367, 36.3235, 3.4518, 3.4518);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f("#F0847D")
      .s()
      .p(
        "AgDAOIAAACIgEgEIgDgEIAAADQgEgFAAgHIgBAAQAAgEADgFQACgDAHgEIAAAEIgBAAQAEAAAAABIABAFQABAFAEAFQADAFAFADIACACIgDABIgDAAIADABIgDABIgGABQgEAAgDgDg",
      );
    this.shape_103.setTransform(27.9596, 39.3505, 3.4518, 3.4518);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#AEBB15")
      .s()
      .p("AgKAKQgCgCAAgEQAAgDADgDQAFgHAIgBIAKABIgHABQgFACgCAEIgGAHIgCAEIgCACIAAgBg");
    this.shape_104.setTransform(37.452, 35.4302, 3.4518, 3.4518);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#AEBB15")
      .s()
      .p("AgDAPQgLgEAGgLIAIgMQAEgEAEAAQgFAEgBAEQgBAEAEAFIAEADIACAEQABAHgGABIgCABIgHgCg");
    this.shape_105.setTransform(39.2166, 37.8188, 3.4518, 3.4518);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#C4D210")
      .s()
      .p(
        "AgGAPQgEgCgBgDQgCgGAFgGQAEgJAHgDQACgCAHADIgGADIgEAIQgBAEACAEQABADgCACQgBADgDACIgBAAIgDgBg",
      );
    this.shape_106.setTransform(37.8259, 36.8695, 3.4518, 3.4518);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#C4D210")
      .s()
      .p(
        "AgJAPIAHgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgFgEgCgCQgDgFADgFQACgEAGgBQgDADABAFQABAFAEABQAIACADAEQADAHgKAFIgFABQgEAAgFgCg",
      );
    this.shape_107.setTransform(43.2805, 37.9328, 3.4518, 3.4518);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#AEBB15")
      .s()
      .p("AgDANQgHgFgDgNQAAgFABgBIADgCIADAGIAIADQAGAAAEACQADACgBAEQgCAGgFADIgFABQgCAAgDgBg");
    this.shape_108.setTransform(45.4301, 37.0406, 3.4515, 3.4515);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f("#AEBB15")
      .s()
      .p("AAAAEIgJgEIAAgCQAEACADgCQAEgCACAAQAGACAAACQABAEgGABIgBAAIgEgBg");
    this.shape_109.setTransform(45.4846, 33.2279, 3.4518, 3.4518);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#C4D210")
      .s()
      .p("AgDAGQgHgDgCgEQgBgCACgDIABgCQAEAFAIgBQAHgBACACIACADQABADgBACQgCAEgFAAQgEAAgFgDg");
    this.shape_110.setTransform(45.9993, 35.1013, 3.4518, 3.4518);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics.f("#C4D210").s().p("AgGAAQADABADgEQACgBAEAEQACABgFABIgGACg");
    this.shape_111.setTransform(44.5339, 32.0311, 3.4518, 3.4518);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#AEBB15")
      .s()
      .p(
        "AgDACIADgDQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQgBACgEAAIgEABg",
      );
    this.shape_112.setTransform(43.6652, 31.2388, 3.4518, 3.4518);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f("#C4D210")
      .s()
      .p("AgEADIAEAAIAAgBIgBgCIgBgCIACgBQAFAAAAADQAAABgFACIgCABIgCgBg");
    this.shape_113.setTransform(42.5512, 31.3497, 3.4518, 3.4518);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f("#AEBB15").s().p("AgCAAIAAgBIACgBIACABIABABIAAADg");
    this.shape_114.setTransform(40.9613, 31.1525, 3.4518, 3.4518);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics.f("#C4D210").s().p("AgHACQgBgCAIgBIAFABIADACIgIgBIgGABIgBAAg");
    this.shape_115.setTransform(39.4165, 31.5552, 3.4518, 3.4518);

    this.instance_6 = new lib.Path();
    this.instance_6.setTransform(182.25, 42.95, 3.452, 3.452, 0, 0, 0, 46.2, 2.5);
    this.instance_6.alpha = 0.2891;

    this.instance_7 = new lib.Path_1();
    this.instance_7.setTransform(171.1, 42.65, 3.452, 3.452, 0, 0, 0, 33.6, 1.2);
    this.instance_7.alpha = 0.1719;

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#CAC9C8")
      .s()
      .p("AiKAhQidgDhigJQhlgJAAgMQAAgNCRgKQCRgKDMAAQDNAACRAKQCRAKAAANQAAANhzAKQiSAMjqgBIiKgBg");
    this.shape_116.setTransform(170.7618, 43.1435, 3.4515, 3.4515);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#CAC9C8")
      .s()
      .p("AldAZQiRgLAAgOQAAgNCRgLQCRgKDMAAQDNAACRAKQCRALAAANQAAAOiRALQiRAKjNAAQjMAAiRgKg");
    this.shape_117.setTransform(170.7618, 43.2298, 3.4515, 3.4515);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#7F7F7D")
      .s()
      .p("AldAZQiRgKAAgPQAAgNCRgLQCRgKDMAAQDNAACRAKQCRALAAANQAAAPiRAKQiRAKjNAAQjMAAiRgKg");
    this.shape_118.setTransform(170.7618, 46.8538, 3.4515, 3.4515);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#7F7F7D").s().p("AgJAEIAAgKIASAHIgEAGg");
    this.shape_119.setTransform(3.2792, 45.4774, 3.4518, 3.4518);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics.f("#7F7F7D").s().p("AAKgHIAAAKIgTAFg");
    this.shape_120.setTransform(338.0173, 45.8226, 3.4518, 3.4518);

    this.instance_8 = new lib.Path_2();
    this.instance_8.setTransform(159.85, 55.5, 3.452, 3.452, 0, 0, 0, 2.5, 1.1);
    this.instance_8.compositeOperation = "multiply";

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#EEEDED")
      .s()
      .p("ABUCTIingNQgHAAAAgIIgBkRIC3ASIAAENQAAADgDACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgBgBg");
    this.shape_121.setTransform(254.755, 158.1144, 3.452, 3.452);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#BFBEBF")
      .s()
      .p("AgGAHQgCgDAAgEQAAgCACgDQADgEADAAQAEAAADAEQACACABADQAAAJgKAAQgDAAgDgCg");
    this.shape_122.setTransform(192.1019, 143.7744, 3.452, 3.452);

    this.instance_9 = new lib.Path_5();
    this.instance_9.setTransform(255.15, 140.1, 3.452, 3.452, 0, 0, 0, 9.6, 9.2);
    this.instance_9.compositeOperation = "multiply";

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#313131")
      .s()
      .p("AhcBDIgzgOIgigKIAkiNIAiAJQAkAKAOACQBNANCDgFQAbATAABEQgBBEgaANQiGgKhtgWg");
    this.shape_123.setTransform(258.0359, 139.2005, 3.452, 3.452);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#EEEDED")
      .s()
      .p("ABUCSIingNQgHAAAAgIIgBkOIC3ARIAAELQAAADgDACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBAAg");
    this.shape_124.setTransform(254.755, 158.5459, 3.452, 3.452);

    this.instance_10 = new lib.Path_8();
    this.instance_10.setTransform(211.45, 131.15, 3.452, 3.452, 0, 0, 0, 4.5, 6.9);
    this.instance_10.compositeOperation = "multiply";

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics.f("#F0F0F0").s().p("Ag6AxIAfh3IBWAWIgeB4g");
    this.shape_125.setTransform(206.6864, 129.6213, 3.452, 3.452);

    this.instance_11 = new lib.Path_10();
    this.instance_11.setTransform(195.1, 126.5, 3.452, 3.452, 0, 0, 0, 2.6, 4.7);
    this.instance_11.compositeOperation = "multiply";

    this.instance_12 = new lib.Path_11();
    this.instance_12.setTransform(187.85, 124.95, 3.452, 3.452, 0, 0, 0, 3.1, 3.9);
    this.instance_12.compositeOperation = "multiply";

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics.f("#E8AE71").s().p("AgBApIglgKIA5hLIASAFIACBUQgWAAgSgEg");
    this.shape_126.setTransform(190.4622, 127.1186, 3.452, 3.452);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f("#C6C4C5")
      .s()
      .p("AgFATIgHgHQgEgEgNgHIgVgLQgEgDgBgFIA6gBQAPAIAFAEQALAGAWAVg");
    this.shape_127.setTransform(104.8535, 59.5464, 3.452, 3.452);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#C6C4C5")
      .s()
      .p("AgjADQANgPALgJIA9gBQACAGgEAEIgSANQgLAKgHAKIAAAAQgbACgiAAQAIgOAGgGg");
    this.shape_128.setTransform(196.2257, 58.9423, 3.452, 3.452);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics
      .f("#EEEDED")
      .s()
      .p(
        "AA9B5IgXgKQgNgGgTgSIgegfQgLgLgOgUIgSgZIgNgaIgNgNQgogogJgIQgEgDgNgIIgVgMQgFgEAAgFQAAgFAFgEQAIgGAOABQANACALAHIAOAIQAKAFAFAFQAOAIAlAlIATAPQASABAmAKQAiAFAPgXIAPgYQAIgOAGgGQAQgUAKgGQAJgHAUgCQATgBAIAGQAEADAAAEQABAEgDACIgSAPQgLAKgHAJQgFAIgPAjQgCAFAGAkQAFAkgJAWIANABIhBBHQgBgGgNgHg",
      );
    this.shape_129.setTransform(149.5085, 93.9312, 3.452, 3.452);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics.f("#DEDEDE").s().p("AhTB5QgIAAABgIIAAj3IC1ASIAADzQABADgDADQgDACgDAAg");
    this.shape_130.setTransform(250.2675, 161.0342, 3.452, 3.452);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#D8D8D8")
      .s()
      .p(
        "AgLgCQgCgIgEgJIgJgTQgEgIgEgEIgMgMQgDgDACgDQACgDAEgBIAFgCQASgDASAXQAQAVAGAUQANAQAOA/IgvAJQgFgugIgfg",
      );
    this.shape_131.setTransform(145.2606, 73.6397, 3.452, 3.452);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f("#A9A9A9")
      .s()
      .p("AgKARIgCgBIgSgKIgXgJQgFgDgBgEQgBgFADgEIA4ACQAQAHAGAEQAMAFAbAVg");
    this.shape_132.setTransform(95.3975, 57.9067, 3.452, 3.452);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics
      .f("#D8D8D8")
      .s()
      .p(
        "AAEAQQgngggPgKIgSgJIgWgLQgGgDgBgFQAAgFAEgEQAHgHAOAAQANAAAMAHIAPAGQAKAEAGAFQAQAHApAhQAbAOAeAeIgnAjQgYgegfgZg",
      );
    this.shape_133.setTransform(108.3831, 72.5718, 3.452, 3.452);

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
            {t: this.instance_12},
            {t: this.instance_11},
            {t: this.shape_125},
            {t: this.instance_10},
            {t: this.shape_124},
            {t: this.shape_123},
            {t: this.instance_9},
            {t: this.shape_122},
            {t: this.shape_121},
            {t: this.instance_8},
            {t: this.shape_120},
            {t: this.shape_119},
            {t: this.shape_118},
            {t: this.shape_117},
            {t: this.shape_116},
            {t: this.instance_7},
            {t: this.instance_6},
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
            {t: this.instance_5},
            {t: this.shape_38},
            {t: this.shape_37},
            {t: this.shape_36},
            {t: this.shape_35},
            {t: this.shape_34},
            {t: this.instance_4},
            {t: this.instance_3},
            {t: this.shape_33},
            {t: this.shape_32},
            {t: this.instance_2},
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
            {t: this.instance_1},
            {t: this.shape_21},
            {t: this.shape_20},
            {t: this.shape_19},
            {t: this.shape_18},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.shape_15},
            {t: this.instance},
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
  }).prototype = getMCSymbolPrototype(lib.ganddessous, new cjs.Rectangle(0, 0, 341.6, 209.1), null);

  (lib.fumeeee = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.fumeee();
    this.instance.setTransform(12.3, 42.3, 1, 1, 0, 0, 0, 12.3, 42.3);
    this.instance.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({y: -1.85, alpha: 1}, 9)
        .to({y: -125.9, alpha: 0}, 45)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -168.2, 24.7, 252.89999999999998);

  (lib.etoiles = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.etoile();
    this.instance.setTransform(15.8, 15.7, 0.2, 0.2, 0, 0, 0, 15.8, 15.8);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({regY: 15.7, scaleX: 1, scaleY: 1}, 19, cjs.Ease.get(-1))
        .to({scaleX: 0.5, scaleY: 0.5}, 21, cjs.Ease.get(1))
        .to({scaleX: 0.65, scaleY: 0.65, x: 15.75}, 11)
        .to({regX: 15.9, regY: 15.9, scaleX: 0.0975, scaleY: 0.0975, x: 15.8}, 27)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 31.7, 31.4);

  // stage content:
  (lib.ANIMATION = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    let props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [174];
    // timeline functions:
    this.frame_174 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(1));

    // gantdessus
    this.instance = new lib.ganddessus();
    this.instance.setTransform(875.2, 176.15, 1, 1, 0, 0, 0, 138.6, 59.4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(28)
        .to({_off: false}, 0)
        .wait(1)
        .to({regY: 59.3, x: 698.25, y: 176.05}, 0)
        .wait(1)
        .to({x: 568.1}, 0)
        .wait(1)
        .to({regY: 59.4, x: 484.65, y: 176.15}, 0)
        .wait(1)
        .to({regY: 59.3, x: 474.35, y: 176.05}, 0)
        .wait(1)
        .to({x: 465.7}, 0)
        .wait(1)
        .to({x: 458.6}, 0)
        .wait(1)
        .to({x: 453.05}, 0)
        .wait(1)
        .to({x: 449.15}, 0)
        .wait(1)
        .to({x: 446.75}, 0)
        .wait(1)
        .to({regY: 59.4, x: 446, y: 176.15}, 0)
        .wait(6)
        .to({x: 520, y: 73.15}, 10, cjs.Ease.get(1))
        .wait(121),
    );

    // couvercle
    this.instance_1 = new lib.couvercle();
    this.instance_1.setTransform(932.5, 294.25, 1, 1, -19.9781, 0, 0, 168.2, 80);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(14)
        .to({_off: false}, 0)
        .wait(1)
        .to({rotation: -19.9779, x: 685.4, y: 294.2}, 0)
        .wait(1)
        .to({rotation: -19.9777, x: 505.1}, 0)
        .wait(1)
        .to({regY: 80.1, rotation: -19.9776, x: 391.6, y: 294.3}, 0)
        .wait(1)
        .to({regY: 80, rotation: -19.9777, x: 378.8, y: 294.2}, 0)
        .wait(1)
        .to({rotation: -19.9778, x: 368}, 0)
        .wait(1)
        .to({rotation: -19.9779, x: 359.15}, 0)
        .wait(1)
        .to({rotation: -19.978, x: 352.3}, 0)
        .wait(1)
        .to({rotation: -19.9781, x: 347.4}, 0)
        .wait(1)
        .to({x: 344.45}, 0)
        .wait(1)
        .to({x: 343.5, y: 294.25}, 0)
        .wait(20)
        .to({regX: 200.2, regY: 21.4, x: 353.5, y: 228.2}, 0)
        .to({regX: 200.3, rotation: 0.4774, x: 427.65, y: 125.2}, 10, cjs.Ease.get(1))
        .wait(121),
    );

    // gantdessous
    this.instance_2 = new lib.ganddessous();
    this.instance_2.setTransform(932.4, 368.8, 1, 1, 0, 0, 0, 170.8, 104.5);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(14)
        .to({_off: false}, 0)
        .wait(1)
        .to({x: 685.3}, 0)
        .wait(1)
        .to({x: 505}, 0)
        .wait(1)
        .to({x: 391.5}, 0)
        .wait(1)
        .to({x: 378.7}, 0)
        .wait(1)
        .to({x: 367.9}, 0)
        .wait(1)
        .to({x: 359.1}, 0)
        .wait(1)
        .to({x: 352.2}, 0)
        .wait(1)
        .to({x: 347.3}, 0)
        .wait(1)
        .to({x: 344.35}, 0)
        .wait(1)
        .to({x: 343.4}, 0)
        .wait(151),
    );

    // etoiles
    this.instance_3 = new lib.etoiles();
    this.instance_3.setTransform(426.65, 243);

    this.instance_4 = new lib.etoiles();
    this.instance_4.setTransform(238.45, 227.65);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.instance_4}, {t: this.instance_3}]}, 44)
        .wait(131),
    );

    // etoiles
    this.instance_5 = new lib.etoiles();
    this.instance_5.setTransform(211.05, 197.4, 0.625, 0.625, 0, 0, 0, 0.1, 0.1);

    this.instance_6 = new lib.etoiles();
    this.instance_6.setTransform(314.7, 204.75, 0.81, 0.81, 0, 0, 0, 0.1, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.instance_6}, {t: this.instance_5}]}, 76)
        .wait(99),
    );

    // etoiles
    this.instance_7 = new lib.etoiles();
    this.instance_7.setTransform(170.95, 242.3, 1.4, 1.4);

    this.instance_8 = new lib.etoiles();
    this.instance_8.setTransform(357.6, 227.65, 1.4875, 1.4875);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: []})
        .to({state: [{t: this.instance_8}, {t: this.instance_7}]}, 58)
        .wait(117),
    );

    // Calque_12
    this.instance_9 = new lib.fumeeee();
    this.instance_9.setTransform(441.3, 175.9, 1, 1, 0, 0, 180);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off: false}, 0).wait(137));

    // Calque_11
    this.instance_10 = new lib.fumeeee();
    this.instance_10.setTransform(510.55, 219.45, 1, 1, 0, 0, 180);
    this.instance_10._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off: false}, 0).wait(145));

    // Calque_10
    this.instance_11 = new lib.fumeeee();
    this.instance_11.setTransform(245.25, 175.9);
    this.instance_11._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off: false}, 0).wait(142));

    // fumee
    this.instance_12 = new lib.fumeeee();
    this.instance_12.setTransform(181.4, 219.45);
    this.instance_12._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25).to({_off: false}, 0).wait(150));

    // Calque_3 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    let mask_graphics_0 = new cjs.Graphics().p(
      "AckTLQgbgCgVgeQgWghALggQADgNANgNQAagZAyADQAUABARAYQASAaABAiQAAAagfATQgZAQgZAAIgIgBg",
    );
    let mask_graphics_1 = new cjs.Graphics().p(
      "AcNTYQgngDgegpQgggsAQgsQAEgSATgRQAlgjBJAFQAcABAZAhQAbAkABAtQAAAjgtAbQgkAVglAAIgLgBg",
    );
    let mask_graphics_2 = new cjs.Graphics().p(
      "AbJT/QhMgGg5hKQg+hPAehOQAJggAkgfQBIg+CMAIQA2ACAwA7QA0BAABBRQABBAhXAvQhFAmhHAAIgVgBg",
    );
    let mask_graphics_3 = new cjs.Graphics().p(
      "AZXVAQiJgKhniBQhviJA3iHQAPg4BAg3QCDhrD8ANQBhAFBWBmQBdBvACCMQACBvicBSQh9BCh/AAQgTAAgTgBg",
    );
    let mask_graphics_4 = new cjs.Graphics().p(
      "AW3WaQjdgQiojNQi0jaBZjYQAZhaBohWQDUirGYAVQCeAHCMCkQCXCwADDgQAECwj9CDQjMBpjNAAQgfAAgggCg",
    );
    let mask_graphics_5 = new cjs.Graphics().p(
      "ATqYOQlKgXj7kwQkNlDCFk/QAliECciBQE9j9JhAgQDsALDQDxQDiEFAFFLQAFEFl6DCQkvCckzAAQgvAAgvgEg",
    );
    let mask_graphics_6 = new cjs.Graphics().p(
      "APwacQnQgglgmoQl5nDC5m+QA1i4DbizQG8lhNXAsQFMAQEjFQQE+FsAHHOQAHFsoTEPQmpDZmvAAQhCAAhBgFg",
    );
    let mask_graphics_7 = new cjs.Graphics().p(
      "ALHdEQptgsnWo1Qn6paD4pTQBHj2EmjvQJSnYR5A6QG8AWGHHCQGrHlAIJoQAJHmrGFrQo7EipBAAQhYAAhYgHg",
    );
    let mask_graphics_8 = new cjs.Graphics().p(
      "EAFyAgGQsjg5phrZQqOsJFCr+QBbk+F7k0QMBphXIBLQI/AcH5JEQInJzALMaQAMJzuXHUQrhF1rqAAQhyAAhxgIg",
    );
    let mask_graphics_9 = new cjs.Graphics().p(
      "EgARAjhQvyhGr8uUQs3vOGUvBQB0mPHcmEQPGr6dFBeQLRAjJ7LXQK0MTAPPkQAOMTyCJKQufHVupAAQiPAAiOgLg",
    );
    let mask_graphics_10 = new cjs.Graphics().p(
      "EgG0Ap9QzYhXurxjQvyyrHwybQCOnqJJnbUASjgOoAjtAB0QN2ArMLN8QNTPFASTHQARPE2JLQQxyI/x/AAQivAAiwgNg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({graphics: mask_graphics_0, x: 191.6887, y: 122.78})
        .wait(1)
        .to({graphics: mask_graphics_1, x: 193.3614, y: 124.0838})
        .wait(1)
        .to({graphics: mask_graphics_2, x: 198.3796, y: 127.9952})
        .wait(1)
        .to({graphics: mask_graphics_3, x: 206.7431, y: 134.5144})
        .wait(1)
        .to({graphics: mask_graphics_4, x: 218.4521, y: 143.6411})
        .wait(1)
        .to({graphics: mask_graphics_5, x: 233.5066, y: 155.3755})
        .wait(1)
        .to({graphics: mask_graphics_6, x: 251.9065, y: 169.7176})
        .wait(1)
        .to({graphics: mask_graphics_7, x: 273.6518, y: 186.6672})
        .wait(1)
        .to({graphics: mask_graphics_8, x: 298.7425, y: 206.2246})
        .wait(1)
        .to({graphics: mask_graphics_9, x: 327.1787, y: 228.3895})
        .wait(1)
        .to({graphics: mask_graphics_10, x: 360.3804, y: 238.1331})
        .wait(165),
    );

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#29A7CD")
      .s()
      .p(
        "AHyHjQg2gFg3grQg2gqgihAQhQAthZAXQhbAWhNgHQhUgHhWhAQgmAuhEAcQhCAag6gFQhRgHg9hZQhBhgAgheQADgMAJgSQhkgMhKhuQhQh2Anh1QALgxAxgvQBgheC6AMQAjACAmAbQAmAcAfAtQBDhQBpgrQCJg5C+AMQBnAHBkB6QBqCBAbCvQA0gJBAAEQBHAFBBBYQBFBhABB6QACBgh0BHQheA6hfAAIgagBg",
      );
    this.shape.setTransform(374.372, 226.8458, 3.75, 3.75);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#29A7CD")
      .s()
      .p("AgQBdQgjgDgagnQgdgpAOgoQAEgRARgRQAhggBAAEQAZABAWAfQAYAiAAApQABAigoAZQggAUggAAIgKgBg");
    this.shape_1.setTransform(327.8398, 386.1658, 5.6718, 5.6718);

    let maskedShapeInstanceList = [this.shape, this.shape_1];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(175),
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(439.1, 253.8, 677.3000000000001, 219.59999999999997);
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681C",
    width: 750,
    height: 480,
    fps: 24,
    color: "#FFCC66",
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681C"] = {
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
