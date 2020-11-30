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

  (lib.tibiaa = function (mode, startPosition, loop, reversed) {
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
      .f("#7E5D57")
      .s()
      .p(
        "AguEfIAAhQQAVh9hChmQg1hjgfh7IABACQgRhaAMgjQCwiLAhCLQADAFABADICXLeQAAAEhZAWQhYAWgVAKIgDABQgTgBgLiUg",
      );
    this.shape.setTransform(18.0035, 36.6074);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AgCGsQgUAAgPhDQgGgbgIgrIgHhPQAFhwg2hxQgphhgdh3IAAgBIgBgGIAAAAQgQhYAMgiQCsiIAjCCQADAFAAADIADALQASBNAbCXIAiC3QAQBQASA6QAtCegBANQAAACgHADQgRALg5AQIgfAIQg0ANgYAAIgCAAg",
      );
    this.shape_1.setTransform(18.3004, 35.9081);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAIGjQgXgIgTg0QgKgXgLgsIgQhNQgJhkgqh8Qgghhgbh6IABABIgBgGIAAgBQgQhWAMgiQCoiFAlB6IADAHIADALQAMAfAfDGIAfC2QAPBQAZA3QA3CUgEAXQgBADgEADQgPAPg2ARIgeAJQgbAHgVAAQgSAAgNgFg",
      );
    this.shape_2.setTransform(18.6231, 35.4518);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AggFkQg0hShkn1IABACQgRhbAMgjQCviLAiCLQAFgPAkD3IAbC0QAPBPAfA0QBICagPAZQgQAYhPAWQgQAEgOAAQg6AAgphBg",
      );
    this.shape_3.setTransform(18.9461, 35.1666);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAEGeQgUgJgUgwQgTgrgZhvQgMhkg6ioQgXg9gKhkIABAAIAAgCIAAAAQgRhZAMgiQCtiJAjCEIADAFQAJgEArDrIAOBNIATBoQAQBPAZA2QAkBkAGAoQADAcgLAMQgSAUg3AQIgZAGQgZAGgTAAQgWAAgQgIg",
      );
    this.shape_4.setTransform(18.7589, 35.2127);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AgIGmQgQgEgRg9QgPgygUhqQAGhghQirQgegwgChxIAAAAIAAgCIABAAQgRhZAMgjQCuiKAiCIQABAAAAAAQAAAAABAAQAAAAABABQABABAAAAQANAIAyDfIARBOIAXBoQARBPARA4QAeBtgBAiQgBAZgRAOQgWAUg0AMIgaAFQgsAJgYAAIgOgBg",
      );
    this.shape_5.setTransform(18.7283, 35.3548);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AhIDFIAAAAQAXhdhniuQglgiAGiBIABACQgRhaAMgjQCwiLAhCLQANgZBVFPQBVFOgOAzQgOAzhbAQQhaAQgTAFIgBAAQgTAAgdjmg",
      );
    this.shape_6.setTransform(18.8178, 35.7211);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AgNGjQgMgegji/QAJhhhbipQghgtgEh2IABgBIAAABIAAAAQgRhaAMgjQCwiLAhCKIABAAQADAAADAGQAYBCA7DrQBOE/gFBBQgGAugrAPQgMAEgXAFIgsAJIhBAOIgCAAQgEAAgDgIg",
      );
    this.shape_7.setTransform(18.3918, 35.7415);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAEGlQgGgVgvjJQgFhkhOilQgfg5gMhtIAAAAIAAABIABAAQgRhaAMgjQCviKAhCIIACABQADACACAFQAbBhAvDHQBHExAEBOQABA1gdAKQgIAEgbAHIgrAKIhCAOIgCAAQgGAAgBgGg",
      );
    this.shape_8.setTransform(18.0284, 35.7444);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAUGnQgBgNg5jTQgVhnhAihQgdhEgVhkIABABQgRhaAMgjQCviKAiCIIABACIAEAIIBDEiQA/EiANBdQAIA7gOAGQgEADggAIIgrALQgwAMgRADIgFABQgEAAgBgEg",
      );
    this.shape_9.setTransform(17.7825, 35.7534);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAgGqQAHgIjWqLIABACQgRhbAMgjQCwiLAhCLQADAGABADICXLeQAAADhPAWQg8AQgLAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg",
      );
    this.shape_10.setTransform(18.0035, 35.7701);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AAPGpQgCgMgeh8IgQhOQgMhmgyh3Qgnhkgmh8IAAABIgBgEIABgBQgRhXAMgiQCriHAkB+IADAIIABAGIADAIICRK/QAFAbgSAFQgFADgbAHIgwANIg9ARIgGABQgHAAAAgFg",
      );
    this.shape_11.setTransform(17.7854, 36.0375);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AgFGpQgHgWgThzIgIhPQAEhxg6hvQgthjgih5IgBAAIgBgEIABAAQgRhZAMgiQCtiJAjCEIADAIIACAHIACAIICTLHQACAPglAKIggAJIgwANQguAMgQAGIgEABQgFAAgDgIg",
      );
    this.shape_12.setTransform(17.8806, 36.3149);

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
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -6.9, 38.9, 87.10000000000001);

  (lib.shoesdevant = function (mode, startPosition, loop, reversed) {
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
      .f("#404040")
      .s()
      .p("AhFAZQgCgCAJgpIAmgHIALAHQAOAHAPADIAmAHQAPAEABAKQAAAKgVACIgWgBIgvABIgkABIgNgBg");
    this.shape.setTransform(17.4935, 6.5063, 2.5, 2.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.shoesdevant, new cjs.Rectangle(0, 0, 35, 13.1), null);

  (lib.rouee = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#BADCF3").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
    this.shape.setTransform(70.4381, 15.8087, 2.4996, 2.4996);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#BADCF3").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
    this.shape_1.setTransform(88.373, 23.0577, 2.4996, 2.4996);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#BADCF3").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
    this.shape_2.setTransform(100.5588, 37.3057, 2.4996, 2.4996);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#BADCF3").s().p("AgLAAQAAgMALAAQAMAAAAAMQAAAMgMAAQgLAAAAgMg");
    this.shape_3.setTransform(108.3702, 56.6155, 2.4996, 2.4996);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#BADCF3").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
    this.shape_4.setTransform(105.4956, 78.7999, 2.4996, 2.4996);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#BADCF3").s().p("AgLAAQAAgMALAAQAMAAAAAMQAAANgMAAQgLAAAAgNg");
    this.shape_5.setTransform(96.2469, 95.2975, 2.4996, 2.4996);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#BADCF3").s().p("AgIAAQAAgIAIAAQAIAAAAAIQAAAJgIAAQgIAAAAgJg");
    this.shape_6.setTransform(81.9364, 103.8588, 2.4996, 2.4996);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#BADCF3").s().p("AgHAAQgBgIAIAAQAJAAgBAIQABAJgJAAQgIAAABgJg");
    this.shape_7.setTransform(60.4395, 107.4208, 2.4996, 2.4996);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#BADCF3").s().p("AgJAAQgBgKAKAAQALAAAAAKQAAALgLAAQgKAAABgLg");
    this.shape_8.setTransform(41.8171, 103.9213, 2.4996, 2.4996);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#BADCF3")
      .s()
      .p("AgIAEIgBgCQgBgDADgEQADgEAEAAQAEAAAEAEQADAEgCADIgBACQgCAGgGAAIAAAAQgFAAgDgGg");
    this.shape_9.setTransform(26.1039, 92.5521, 2.4996, 2.4996);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#BADCF3")
      .s()
      .p("AgGAJIgBgBQgDgCgBgFQAAgDACgDQADgFAGgBQAHAAAEAHQADAHgGAFIgBABQgDADgEAAQgCAAgEgDg");
    this.shape_10.setTransform(17.5028, 76.019, 2.4996, 2.4996);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#BADCF3").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
    this.shape_11.setTransform(14.6334, 57.3654, 2.4996, 2.4996);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#BADCF3").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
    this.shape_12.setTransform(19.6952, 41.6176, 2.4996, 2.4996);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#BADCF3")
      .s()
      .p(
        "AgLAKQgDgEgBgGQAAgEAEgFQAEgEAGAAQAHAAADAHIACgCIAEAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBADQAAABAAABQAAAAgBAAQAAABgBAAQgBAAgBgBIABACQAAAFgEAFQgFAEgEAAQgGAAgEgEg",
      );
    this.shape_13.setTransform(35.8898, 24.4325, 2.4996, 2.4996);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#BADCF3").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
    this.shape_14.setTransform(51.0658, 16.5586, 2.4996, 2.4996);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAFAgQgCgGgCgJIgCgOQgDgOgJgPQgDgEAEgDQAFgCADAEQAbAlgKAaQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAQgDgBgBgCg",
      );
    this.shape_15.setTransform(114.6607, 45.0022, 2.499, 2.499);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#94C8E6")
      .s()
      .p(
        "AApCXQglgDgggQQgjgRgVgdQgggqAIg4QAHg1AlgpIADgEQAcgXAhgKQAfgKAfADQg4AQgfAlQgUAYgJAjQgKAhACAgQAEA5A3AcQAsAYBFABQgdAOgjAAIgFAAg",
      );
    this.shape_16.setTransform(51.1459, 61.0394, 2.4987, 2.4987);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#94C8E6")
      .s()
      .p("Ag+AmQgBgeAJgdQAJgfATgVQAfgkA7gPQgmAMgaAbQgvAzgCA+QgBBBAxAgQg8gcgBg7g");
    this.shape_17.setTransform(54.2094, 56.5224, 2.4987, 2.4987);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABIgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAg",
      );
    this.shape_18.setTransform(91.3588, 44.9659, 2.4987, 2.4987);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAAAZIgBgZQgCgPgGgLIABgBQAKAMAFANQAFAPgFANQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAg",
      );
    this.shape_19.setTransform(94.3736, 56.132, 2.4987, 2.4987);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#BADCF3")
      .s()
      .p(
        "AAACXQglgCghgQQgkgSgVgdQgggqAIg4QAHg0AlgqIADgDQAnghAxgHQAvgHAlAVQBDAnAQBTQARBchWAzQglAWgqAAIgDgBg",
      );
    this.shape_20.setTransform(61.9628, 61.0545, 2.499, 2.499);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#94C8E6")
      .s()
      .p(
        "AimCvQgogmgSg3QgSg1AGg1QASiLCCg0QA4gXA6AEQA7AEAsAcQAyAhAeA9QAeA8gBBAQgBBFgkA0QgpA6hOAYQg0AQgtAAQhYAAg/g8gAiCisQgTAOgRATQgUATgMASQgUAdgEAiQgEAdAHAmIAFAXIAAACQAQBEAgApQAlAuBNAMQBLAMBHgcQBLgfAkhAQAkhAgNhLQgMhMg3gxQgPgOgUgMIgHgFQgwgfhDABIgHAAQhLAAg0Asg",
      );
    this.shape_21.setTransform(61.9155, 61.229, 2.499, 2.499);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#CDE8FA")
      .s()
      .p(
        "AisC3QgqgogTg5QgTg4AHg2QASiSCIg2QA5gXA8AEQA+AEAuAdQA0AjAgA/QAfA+gBBDQgBBIgmA2QgqA8hSAZQg2ARgvAAQhbAAhBg+g",
      );
    this.shape_22.setTransform(61.9312, 61.2131, 2.4994, 2.4994);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.rouee, new cjs.Rectangle(0, 0, 123.9, 122.5), null);

  (lib.pedalier = function (mode, startPosition, loop, reversed) {
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
      .f("#A6A6A6")
      .s()
      .p("Ag/AOIgDgOQgBgLACgCQACgBBAAFQBCAFAAACIgCAMIhAADIg2ABIgKAAg");
    this.shape.setTransform(16.8, 3.5395, 2.5, 2.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.pedalier, new cjs.Rectangle(0, 0, 33.6, 7.1), null);

  (lib.pedale = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#404040").s().p("AhSAYIAAgvIClAAIAAAvg");
    this.shape.setTransform(8.325, 2.442, 1, 1.6808);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.pedale, new cjs.Rectangle(0, -1.5, 16.7, 8), null);

  (lib.Path_44 = function (mode, startPosition, loop, reversed) {
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
      .f("#404040")
      .s()
      .p("AiyASQhJgHgBgLQABgJBJgIQBLgHBngBQBoABBLAHQBJAIAAAJQAAALhJAHQhLAIhoAAQhnAAhLgIg");
    this.shape.setTransform(25.25, 2.55);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0, 0, 50.5, 5.1), null);

  (lib.Path_43 = function (mode, startPosition, loop, reversed) {
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
      .f("#404040")
      .s()
      .p("AixASQhKgHAAgLQAAgJBKgIQBKgHBngBQBoABBKAHQBKAIAAAJQAAALhKAHQhKAIhoAAQhnAAhKgIg");
    this.shape.setTransform(25.225, 2.55);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0, 0, 50.5, 5.1), null);

  (lib.ClipGroup_6_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(361.925, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "Az6BBQi+gOiMACQhiACgbgHQgZgFAogHQBwgTCeATQCFARB0gDQCzgEASAAQBGACBfgpQBMghBAAXQA/AWBkgcQAzgPASgDQAkgEAYANQAlATADAKQAFACB4AOQCmASBQABQBwACBMgZQA4gSBtg2QBigpBJAWQA+ATBXgOQBLgMAXASQAaAUhLAdQgfALgCADQgDAFAqgBQBAgBArgRQAhgPAhAHQAeAHA/gbQA2gWAjAWQA0AfAmAIQAtAKBmgCICqgDQBPADBrAZQA5ANgEAEQgEADg1gDIkkgMQhHgBiNgFQhOgDiZACQhuACh1AFQg6AChQgCQhCgCgvAJQg2ALiBAAIkTAAIi0ABIkPAFQigAChlAEQhlADiMACIgsABQiAAAiggMg",
      );
    this.shape.setTransform(218.5727, 121.7098);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ApfBlQgOgCBNgSQAdgHAPgPQAJgJANgRQAcgdBmAPQB3AQANgQQANgPg9gSQgYgHgFgPQgFgOARgLQAsgeB0AYQA3ALAFgJQgGgPgBgIQgHghDXAsQC7AlCggEQAvgCARAGQAXAIAXAgQAYAhgVAPQgTAOg/AGQjRADigAKIirANQhDAFjmADIi1ABQhcAAgPgCg",
      );
    this.shape_1.setTransform(573.7501, 111.3653);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AhAAhQhEgGgaAAQgiABhtgIQiNgJBDgDQBBgDBeAFQAxADA1gbQAsgYArAOQAoANApgSQAngRAlAQQAlAPAZgMQAVgKAhATQAUAMA0ALIBHAPQArAKi6ADIiWAFIgfABQg8AAhFgGg",
      );
    this.shape_2.setTransform(480.0738, 134.3264);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AujAfQhVgFAVgFQAVgFA1ACQAmACAygDQAngBAbgDIBIgLQA5gGAaAAIB/gJQBkgHAOAGQALADApgNQAmgNARALQAPAJAYgKQAagKAVAKQATAIAKgFQAPgHAoAJQApAKAoACQAjACAMAEQAUAFAmgBIBbgGQAmgEBOgMQBGgIA2AIQAoAGAxgFQA2gGBLAIQBUAJBJgBQBMgBAJABIB1ALIgyADQhAAEhDAAQg9AAgQAHIggAAQh6gBg3AGIgZABIgiABQgFgFhWAAQkOADhUgCQgfgBgrgGQgkgFhCABIjUACIgYgBIg1ABIjnAQQiEAJhNAAQggAAgXgCg",
      );
    this.shape_3.setTransform(415.534, 154.7628);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "Ah1A2Qg/gGg7gPQgrgLhFAAQhEgBhZgIQhPgIgfABIhNAAQgwAAhNAHQhQAHhZgBIhjgDQhCACguAAQhXAAAAgJQAAgJAQAAIBHAEQAfAAA4gJQAwgHAoAEQAgADAigPQAZgMAoAQQAtARBCgBIBNgEQAOACAhgGQAdgEAMAEQAMAEAfgBQAjAAARADQAKACAVgLIAtgZQBGghBHAdQBKAeA+AGQAhAEArgBQArADAdgZQAfgeAcgCQAPgBAdAZQAeAaAnABQAEAAAhgMQAZgJA3ANQAtAKBPABQA5ABAIALQAJANBlgGQB/gIAzAIQA7AIBegNQBjgNAbABQAmAEA0AAQA1AAAQACQCtAehvgIQhsgHgqAAQhPgBheALQhZAKhJABQhSgCgyAAQgyAAgkAJQgeAIgngEIhwgPQhAgJgnACQgaABgwgGQgigDgSAHQgTAHhcgFQhjgFgNACQgNACAcAQQAOAIgXAAIgfgCg",
      );
    this.shape_4.setTransform(182.2654, 149.123);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E9F5F7")
      .s()
      .p(
        "AwzAaQg6gHAIgKQAVgZF2gIQGTgJE/AAQEnAAJmAHQDgACACAIQABAGimAIQmNATm8gCQlIgCk/AKQlMALhFAAQhaAAg6gIg",
      );
    this.shape_5.setTransform(573.3768, 161.9233);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#E9F5F7").s().p("AmJAYQjLgQI+gZQDUgKCUgCQCdgChEAJQmLA0kKAAQhWAAhJgGg");
    this.shape_6.setTransform(524.6863, 92.6557);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AJSCvQkUglkgAAQj0AAmcgLQk5gJk0AIQmCAJlSgUQiBgIgGgHQgHgHCWAAQCxAAGXgZQFLgUCpANQEOAUFDAHQFfAHhtgaQg4gNlzgoInHgvQgxgGAcgKQAdgLBWgIQDogTE4AeQDrAYAyAIQAVABDkgFQEUAAE4grQBvgQAfgKQAfgJhdAIQiuARllgIQkvgHk0gUQiCgJAIgJQAHgIB5gHQEEgQHhAAQDFAADKgKQBzgFDHgMQFWgTEzAeQC+ASAeAKQAaAKhVAHQk6ASiSAUIlAAuIlkAzQh8ATgzAXQgxAWAeAVQBHAuFrAAQGhAAAuAUQAzAWogAXQhNADhJAAQjHAAitgYg",
      );
    this.shape_7.setTransform(453.3057, 115.1053);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E9F5F7")
      .s()
      .p("AjVANQh9gCAbgLQAcgMDDgBQDIgBCWAOQA7AFgEAEQgFAEhSAAIkfABIicgBg");
    this.shape_8.setTransform(161.9971, 96.7718);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AsSDjQgLgCghgQQg6gelzgHQmXgIHAhIQG/g6jBAVQiGAPg2gqQgugiAShDQARg7A2gzQA2gzAyAAQBfAACkAPQB/ANIUA6QDqAaB5AFQBhAEBcgHIDQgRQCogLD0AAQINAAjQAXQjHAWl6AGQkAAEk5gCQlGgCicAAQhoAAgqAWQgbAOgKAiQgKAkgPALQgeAWhSAAQizAAAYAuQAYAsCdAbQB2AUCygGIFwgOQDygCDbAPQDqARh2ATQhwASlzAFQjnAEpvAAQh6AAgogIg",
      );
    this.shape_9.setTransform(145.0016, 118.525);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "ArLBlQgDgKCvgWIEKggQBkgPiLAAQi/AAjFgRQhxgJh1ASQitAeg9AJQhcANh5AAQizAAkCgYQhsgLAHgGQAIgHCuABQBxAABNgQQBOgQC4AAQCVAABKgKQBDgJEJADQFkADgBgMQgBgMk6gFIrCgKQkrgGIugCQH/gCFWAMQF4AMB5ABQDMABl+gVQmFgVDLAAQCrAAD5gSQC2gMCpAMIH9AmQD5AVigAAQi4AAiaAGQiaAHCtAAQB9AABzAdQB2AeA/ABIClADIDpABQBZAAA8AJQA7AJgGALQgQAdlmAAQjVAApjAQQpjAPn+AAQk5AAgDgPg",
      );
    this.shape_10.setTransform(416.1816, 144.9375);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#AEDDEA").s().p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    this.shape_11.setTransform(361.925, 111.325);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_6_0,
    new cjs.Rectangle(139.3, 0, 445.3, 222.7),
    null,
  );

  (lib.ClipGroup_6 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(324.125, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AOvBMQiMgChkgDQhmgEifgCIkQgFIi0gBIkTAAQiBAAg2gLQgvgJhCACQhQACg6gCQh1gFhugCQiZgChNADQiOAFhHABIkjAMQg2ADgEgDQgEgEA6gNQBrgZBPgDICpADQBmACAtgKQAmgIA0gfQAjgWA2AWQA/AbAegHQAigHAhAPQAqARBAABQAqABgDgFQgCgDgfgLQhLgdAagUQAXgSBLAMQBXAOA+gTQBJgWBiApIBTAmQAyAXAgALQBMAZBwgCQBQgBCmgSQB4gOAFgCIAJgJQAJgIAWgMQAYgNAkAEQASADAzAPQBkAcA/gWQBAgXBMAhQBfApBGgCQASAACzAEQB0ADCFgRQCegTBvATQAoAHgYAFQgbAHhigCQiMgCi+AOQigAMiAAAIgsgBg",
      );
    this.shape.setTransform(467.4838, 121.7098);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AFABmQjmgDhDgFQhBgHhqgGQkhgHhQgGQg/gGgTgOQgVgPAYghQAYggAWgIQARgGAvACQCgAEC7glQDXgsgHAhQgCAIgFAPQAFAJA3gLQB0gYAsAeQAQALgEAOQgFAPgYAHQg9ASANAPQAOAQB2gQQBmgPAcAdQAIAIAOASQAQAPAcAHQBNASgOACQgPAChcAAIi1gBg",
      );
    this.shape_1.setTransform(112.2999, 111.3653);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AhfAmQhUgEhCgBQi6gDArgKIBHgPQA0gLAUgMQAhgTAVAKQAZAMAlgPQAlgQAnARQApASAogNQArgOAsAYQA1AbAxgDQBegFBBADQBDADiNAJQhtAIgigBQgaAAhEAGQhFAGg8AAIgfgBg",
      );
    this.shape_2.setTransform(205.9763, 134.3264);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AKcAYIjngQIg1gBIgYABIjUgCQhCgBgkAFQgrAGgfABQgyABiCgBIiugBQhWAAgFAFIgigBIgZgBQg3gGh6ABIggAAQgQgHg9AAQhCAAhAgEIgzgDIB2gLQAIgBBMABQBJABBUgJQBLgIA2AGQAxAFAogGQA2gIBGAIIB0AQIBbAGQAmABAVgFQAMgEAjgCQAngCAqgKQAogJAOAHQAKAFATgIQAVgKAaAKQAYAKAPgJQARgLAmANQApANALgDQAPgGBjAHIB/AJQAaAAA5AGIBIALQAbADAnABQAyADAmgCQA1gCAVAFQAWAFhWAFQgWACghAAQhNAAiEgJg",
      );
    this.shape_3.setTransform(270.5251, 154.7628);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "ABNAwQAcgQgNgCQgNgChjAFQhcAFgTgHQgTgHghADQgxAGgagBQgmgChBAJIhwAPQgnAEgdgIQgkgJgyAAIiEACQhJgBhZgKQhegLhPABQgrAAhsAHQhHAFA3gMQA1gNAagCQAQgCA0AAQA1AAAmgEQAbgBBjANQBeANA7gIQAzgIB+AIQBmAGAIgNQAJgLA5gBQBPgBAsgKQA4gNAZAJQAhAMAEAAQAmgBAfgaQAdgZAPABQAbACAfAeQAdAZAsgDIBMgDQA9gGBLgeQBHgdBFAhIAtAZQAWALAKgCQAQgDAjAAQAgABALgEQAMgEAeAEQAhAGANgCQAPgCA+AGQBCABAtgRQAogQAaAMQAhAPAhgDQAogEAvAHQA4AJAgAAIBGgEQAQAAAAAJQAAAJhXAAIhwgCIhiADQhaABhQgHQhMgHgxAAIhNAAQgegBhPAIQhaAIhDABQhGAAgqALQg8APg+AGIgfACQgXAAAOgIg",
      );
    this.shape_4.setTransform(503.9166, 149.123);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E9F5F7")
      .s()
      .p(
        "AIPAXQk/gKlIACQm8ACmNgTQimgIABgGQACgIDggCQJngHEmAAQE/AAGTAJQF2AIAVAZQAIAKg6AHQg6AIhZAAQhGAAlMgLg",
      );
    this.shape_5.setTransform(112.6787, 161.9233);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#E9F5F7").s().p("AmqgWQhEgJCeACQCTACDVAKQI+AZjMAQQhJAGhXAAQkJAAmLg0g");
    this.shape_6.setTransform(161.3774, 92.6557);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AxbDEQofgXAygWQAugUGiAAQFqAABHguQAfgVgygWQgzgXh8gTIlkgzIlAguQhYgMidgLQiigKg1gFQhVgHAagKQAegKC+gSQEzgeFWATIE6ARQDKAKDFAAQHhAAEEAQQB5AHAHAIQAIAJiCAJQk0AUkvAHQllAIiugRQhdgIAfAJQAfAKBvAQQE4ArEUAAQDUAAAlAEQAWgBEHgfQE4geDoATQBWAIAdALQAcAKgxAGInHAvQlzAog4ANQhtAaFfgHQFDgHEOgUQCpgNFLAUQGXAZCxAAQCWAAgHAHQgGAHiBAIQlSAUmBgJQk1gIk5AJQmcALj0AAQkgAAkUAlQitAYjHAAQhJAAhNgDg",
      );
    this.shape_7.setTransform(232.7443, 115.1053);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E9F5F7")
      .s()
      .p("AAsAOIkRgBQhSAAgFgEQgEgEA7gFQCWgODIABQDDABAcAMQAbALh8ACIhiABIhJAAg");
    this.shape_8.setTransform(524.0611, 96.7551);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AjlDnQlzgFhwgSQh2gTDqgRQDbgPDyACIFwAOQCyAGB2gUQCdgbAYgsQAYguiyAAQhTAAgdgWQgPgLgLgkQgKgigbgOQgqgWhoAAIniACQk5ACkAgEQl6gGjHgWQjQgXINAAQD0AACoALQBdAFBzAMQBcAHBhgEQB5gFDqgaQIUg6B/gNQCkgPBfAAQAxAAA3AzQA2AzAQA7QASBDgtAiQg2AqiGgPIg7gGIAkAEQCfAUB2ATQG/BImWAIQlzAHg6AeQghAQgLACQgoAIh6AAQpvAAjngEg",
      );
    this.shape_9.setTransform(541.0419, 118.525);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "ArRBlQpjgQjVAAQlmAAgQgdQgFgLA6gJQA9gJBYAAIDpgBIClgDQA/gBB2geQBzgdB9AAQCtAAiagHQiagGi4AAQigAAD6gVIH8gmQCpgMC2AMQD5ASCrAAQDLAAmEAVQl/AVDMgBQB5gBF4gMQFWgMH/ACQIuACkqAGIrDAKQk6AFgBAMQgBAMFkgDQEJgDBDAJQBKAKCWAAQC3AABOAQQBNAQBxAAQCugBAIAHQAHAGhsALQkCAYizAAQh5AAhcgNQh8gWhugRQh1gShwAJQjFARjAAAQiKAABjAPQA8AIDOAYQCvAWgCAKQgDAPk5AAQn/AApjgPg",
      );
    this.shape_10.setTransform(269.8727, 144.9375);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#AEDDEA").s().p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    this.shape_11.setTransform(324.125, 111.325);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_6,
    new cjs.Rectangle(101.5, 0, 445.29999999999995, 222.7),
    null,
  );

  (lib.ClipGroup_5_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(287.625, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "A/hA2QA8gDBCgSIB7giQCwgyDhgBQAEAAAOAKQASALAXAIQBSAbC4gIQAegCA6AGQA9AHAbgBQARAAAfAOQAgANARgBQRIgFQEALQAfAAApgaQApgZAaAAQAMAAApASQApASAKAAQAZABAvgFQAugEAVAAQAhABAyAPQAzAOATABQBJABAhACQAhACgRADg",
      );
    this.shape.setTransform(201.7782, 84.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("Ap2gJITtAAQkHAKkhAGQijADiBAAQlDAAhegTg");
    this.shape_1.setTransform(458.325, 109.1883);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("Ap2gJITtAAQkHAKkhAGQijADiAAAQlDAAhfgTg");
    this.shape_2.setTransform(442.125, 104.5883);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFEA37").s().p("Ap2gJITtAAQkHAKkhAGQijADiBAAQlDAAhegTg");
    this.shape_3.setTransform(425.975, 99.9883);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("Ap2gJITtAAQkHAKkhAGQijADiAAAQlEAAhegTg");
    this.shape_4.setTransform(409.775, 95.3883);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#DCE383").s().p("EgixAEKIAAoTMBFjAAAIAAITg");
    this.shape_5.setTransform(287.625, 115.875);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#A9D2F2")
      .s()
      .p(
        "AkUCzQnYgSmrgWQz+hDhog+QJ4keJSB0QCeAfDiBQQC4A/A0gBQB5gEEtggQFIglBSgFQBLgEFbg5QEzgzB1AGQCLAGK8BfQKXBaBWASQA7AMyFBJQxtBHiIAAQhKAAmGgPg",
      );
    this.shape_6.setTransform(272.5431, 91.0034);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AtmAZQBlgEBogIIFEgZQCfgLA1gMQAWgFCCAAQB4AACIAYIC+AoQAlABANgBQAUgBAYgIQAUgGA4gYQA8gTBAAJQBZAMAQAMQATAMhsAAQg3AAhbAOQhTALg6gDQg4AHhSgRQhtgYhJgPQhTgRiAAMQi7AShMAAQhEAAhYAKIiTAWQhOAMg/AAQhJAAgzgQg",
      );
    this.shape_7.setTransform(233.9671, 83.2163);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E0E3F2")
      .s()
      .p(
        "A8KAkQAEgXAWgaQALgNAKgJQD6AAE4ghQE3ghFLAAQBJgOA8AQQAkALBeAfQDrA6Ibg/QC4AADVANQBRgcAtgKQBNgQBRAFQCYALDrAvQD0AvAFAYIksAAQg9gDgdABIgDACIpEAAIAAAjIiVAAQtWAAreAVQpPAViMAAQiwAAAMhIg",
      );
    this.shape_8.setTransform(311.3616, 84.0161);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_5_0,
    new cjs.Rectangle(65, 71.6, 445.3, 70.9),
    null,
  );

  (lib.ClipGroup_5 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(240.675, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "A/bA2QgRgDAhgCQAhgCBJgBQATgBAzgOQAygPAhgBQAVAAAuAEQAvAFAZgBQALAAApgSQAogSAMAAQAbAAAoAZQApAaAfAAQQEgLRIAFQARABAggNQAfgOARAAQAbABA+gHQA5gGAeACQC4AIBSgbQAXgIASgLQAOgKAEAAQDhABCwAyIB7AiQBCASA8ADg",
      );
    this.shape.setTransform(326.5218, 84.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhOAHQkhgGkHgKITtAAQhfATlDAAQiAAAijgDg");
    this.shape_1.setTransform(70, 109.1883);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AhOAHQkhgGkHgKITtAAQheATlDAAQiBAAijgDg");
    this.shape_2.setTransform(86.175, 104.5883);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFEA37").s().p("AhOAHQkhgGkHgKITtAAQhfATlDAAQiAAAijgDg");
    this.shape_3.setTransform(102.375, 99.9883);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AhOAHQkhgGkHgKITtAAQheATlEAAQiAAAijgDg");
    this.shape_4.setTransform(118.525, 95.3883);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#DCE383").s().p("EgixAEKIAAoTMBFjAAAIAAITg");
    this.shape_5.setTransform(240.675, 115.875);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#A9D2F2")
      .s()
      .p(
        "A2wB7QyFhJA7gMQBWgSKXhaQK9hfCKgGQB1gGEzAzQFbA5BLAEQBTAFFHAlQEtAgB5AEQA0ABC4g/QDihQCegfQJSh0J4EeQhoA+z+BDQmrAWnYASQmGAPhKAAQiIAAxthHg",
      );
    this.shape_6.setTransform(255.7592, 91.0034);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#CFEAF1")
      .s()
      .p(
        "AJdAdIiSgWQhYgKhEAAQhMAAi7gSQiAgMhTARIi2AnQhTARg3gHQg6ADhTgLQhbgOg3AAQhtAAATgMQARgMBZgMQBAgJA8ATQAgALAsATQAYAIAUABQAMABAlgBIC/goQCIgYB4AAQCCAAAWAFQA1ALCfAMIFEAZQBoAIBlAEQgzAQhJAAQg/AAhPgMg",
      );
    this.shape_7.setTransform(294.3584, 83.2163);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E0E3F2")
      .s()
      .p(
        "AOMBXQregVtWAAIiVAAIAAgjIpEAAIgDgCQgdgBg9ADIksAAQAFgYD0gvQDrgvCYgLQBSgFBMAQQAuAKBQAcQDWgNC3AAQIbA/Drg6QA6gPBIgbQA8gQBJAOQFLAAE3AhQE4AhD6AAIAVAWQAWAaAEAXQAMBIiwAAIrbgVg",
      );
    this.shape_8.setTransform(216.9384, 84.0161);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_5,
    new cjs.Rectangle(18.1, 71.6, 445.2, 70.9),
    null,
  );

  (lib.ClipGroup_4_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(345.075, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#43A7A2")
      .s()
      .p(
        "Al1BNIgygCQhGAAgtgCQhZgCA2gJQATgOA1gBQBSAAAXgDQAZgDAhgNQAdgMAHAAQAGAAgHgLQgGgIAZADQAYAEALgQQAKgOAPAJQASAJAdgNQAggPAQAFQAYAGAhACQAcACAVgCQAGgBAYgKQASgIAPAGQAXAJAJABQANAAgDgNQgEgRAGgJQAGgKANAJQAKAHAQADQAPADAFAFQAGAFAOAAQALABAAAEQABACAXgQQAagSAMAIQAIAGAngPQAigNAFAOQAFAPAKAEQAZAIASALQAYAPAwgDQAqgDAFAJQADAFAtAdQAqAcgBAMIgFAAQg1AChYgEIiIgFIg+ABQgmABgXgFQgngIgWACQgpAFgVABQgMAAgSgFIgdgGQgVgDgfAMQgiANgbABIggAAIgggCQgfgBgkAIIgdAHQgRAEgMAAIgMAAIhCgBg",
      );
    this.shape.setTransform(416.978, 197.942);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B4D48D")
      .s()
      .p(
        "AjCAIQhqgWhBAGQgWAChmAXQAZgQAUgBQAUgBAPgHIAcgOQAmgRAdAOQATAJALABQAHABAJgCIAQgFQAQgEAUABIAkAEQAOACAdgKQAfgKANABQAKABAXANQATAMANgDIBsgQQAogQAhABQAZAAAoAMQB+AlBiAHQBtAIiKAMQiJAMiigCQg+AAglADIggACIixgmg",
      );
    this.shape_1.setTransform(417.4379, 196.4242);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#62BDB3")
      .s()
      .p(
        "AITBTQhsgJgLgGQgOgHgVgCQgggEgRASQgQARgDgJQgCgJgBACQgCADgYgLQgYgLgNAMQgOAOgcgLIg+gfQglgTgLgEQgPgGgTABQgRACgagLIg8gaQgfgLAIASQAQAhgBAGQgDASgUgHQgUgHgWgaQgTgWgWgDIgzACQgvAAgfgEQg2gHg3gUQgvgSgKAGQgJAFgSgGQgUgHgRANQgSAOgkgLQgogMgJgFQgEgBgLgLQC3AFBoAHQDuAOEMA1QFsBIB2AQQADAIgiAAQgbAAgxgFg",
      );
    this.shape_2.setTransform(399.1878, 181.6674);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EAEDB2")
      .s()
      .p(
        "ArSAuQgJgCArgHQAzgKCIgMQCXgNBXgBQBMAAB/gJIDGgPQGAgVDKgBQAAAEhsAIQhpAIgjAAQhaAAhgAFQhjAGgWAAQgwAAg6AHIjWAbQh4AQgfgEQg7gIhOACQh0ADghAGQgrAHgTABQguADgRAAIgJAAg",
      );
    this.shape_3.setTransform(189.4721, 176.0955);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#2CA196").s().p("AgFAFQgCgJAFgGQAGgHACAOQADAMgJAEIgBAAQgDAAgBgIg");
    this.shape_4.setTransform(342.241, 171.0403);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#2CA196")
      .s()
      .p("AgHASQgBgGACgGIAFgOQAHguABAqQACAsgGABIgBAAQgGAAgDgPg");
    this.shape_5.setTransform(339.2583, 168.6915);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgOAFQgEgDACgCIAKgIQAKgHAIAKQAEAFABAJQABAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAIgJAAIgCAAQgJAAgJgHg",
      );
    this.shape_6.setTransform(335.1595, 171.0409);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#2CA196")
      .s()
      .p("AAKAKQgcgBgEgBQgCgBAGgDIATgJQALgGACADIAHANQADAEgCABIgGAAIgGAAg");
    this.shape_7.setTransform(325.865, 170.2966);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#2CA196")
      .s()
      .p("AgHAeQgJgDgBgCQgCgEADgNQAKgiAGgCQAGgDAHAFQAIAGgEAQQgCAHgBATQgBAIgGAAIgHABIgHgBg");
    this.shape_8.setTransform(331.1026, 168.0888);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgHAsQgkABgdgBQgRAAACgFIAFgTQgBgKAMgFQAUgJADgCQAJgIAJAFQAOAHACAAQAHABAHgIQAHgJAFgBQAFgBAFAMQAEALAHAAQAJgBADgLIADgZQACgOALAGQAMAFAGAUQAFAQAAATIAAAQQARAHgvADIgnABIgWgBg",
      );
    this.shape_9.setTransform(207.6447, 167.0398);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#2CA196")
      .s()
      .p("AAEAvIgJgGQgFgDgDgPIgFgZQgDgNAFgNQAGgOALgEQAKgEADARIADAhQAHAkgKAJQgEADgDAAIgDgBg");
    this.shape_10.setTransform(230.306, 166.1177);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#2CA196")
      .s()
      .p(
        "AhtAUQgKgDAIgIQAIgHAPgDQAKgDAMAHQAMAIAEgBQARgEARgZQAFgIALADQAWAHAOABIAbACQAEAAAGgDQAHgEAMgCQALgBAHACQAIACgDASQgCARgJABIgdAFIgUAAIhQAEIgaABQglAAgVgGg",
      );
    this.shape_11.setTransform(248.5411, 168.178);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgVAJQgLgBgGgEQgGgEADgFQADgEAGABQAKACAFgCQAGgBAJAAQAKABAKgBQAMgBABACQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQAGAAADAGQADAHgDACQgCABgNAAIgwgBg",
      );
    this.shape_12.setTransform(272.0355, 169.2652);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#2CA196")
      .s()
      .p("AgDAmQgGgTgFgLQgJgPAGgQQAGgPAOgGQAMgEACAWQACAMAAAUQACAKgDAMQgEANgGADIgEACQgEAAgDgIg");
    this.shape_13.setTransform(265.3009, 165.2876);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#2CA196")
      .s()
      .p("AgQgQQgCgOAIgFQAGgDALADQAKADABAWQABAWgLASQgFAIgDAAQgKAAgGg2g");
    this.shape_14.setTransform(277.3342, 165.3345);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#2CA196")
      .s()
      .p(
        "Ag2AaQgMAAgDgBQgFgBgEgGQgEgFAKABIAUACQAHAAgBgHQgDgJAAgFQABgJAIgGQAJgGAQABQAMABgCAUQgCAQAHgCQAJgDAHACQAHABAJgDQAJgDAKACQAJADAJgDQAMgDgBAKQAAAKgIgBQgJAAgFACQgFACgIgBQgJgBgLABIgXABg",
      );
    this.shape_15.setTransform(288.4306, 167.9859);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#2CA196")
      .s()
      .p("AgLAGQgBgdAKgKQAHgIACANQABAIACAXQACATgBAHQgCAIgHAAQgLAAgCgfg");
    this.shape_16.setTransform(299.4045, 166.4439);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#2CA196")
      .s()
      .p("AAIAoQgKAAgDgBQgEgBgHgLQgIgMAIgXQAIgYALgGQAIgEADAKIAEAVQAEALgCATQgCAVgKAAIAAAAg");
    this.shape_17.setTransform(304.8041, 166.2581);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#2CA196")
      .s()
      .p("AAAASIgHgCQgJgBACgQQABgRAOABQAPACAAAMQAAAKgIAHQgFAEgCAAIgBAAg");
    this.shape_18.setTransform(309.4888, 168.3716);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#2CA196")
      .s()
      .p("AAAAPIgFgCQgGABABgTQAAgJAFAAQADgBAGACQAGAAABAKQACAJgFAFQgFAEgDAAIAAAAg");
    this.shape_19.setTransform(313.6945, 168.5271);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#2CA196").s().p("AgHACQgDgYAKgEQAPgFgMA6QgIAAgCgZg");
    this.shape_20.setTransform(316.605, 167.0767);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#62BDB3")
      .s()
      .p(
        "AkSAUQAVgFAVgCIAlgJQA6gKBngNQBzgNB7gHQBmgGANADQAEAAhrALQiPAOhpAPIiiATQhAAIg8ATQABgOArgKg",
      );
    this.shape_21.setTransform(234.4306, 177.3859);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#62BDB3")
      .s()
      .p("AmiAcIA2gUIF8gWQGAgWATAFQATAFlIAWQlUAUgQACQh1APgmAAQgXAAAGgFg");
    this.shape_22.setTransform(213.8366, 173.044);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#98C663")
      .s()
      .p(
        "ABiB2QgUgEgSgZQgWgfgIgGQgMgJgHgSQgHgQgNgHQgPgFgIgNQgLgPgLgHQgOgKgKgPQgMgRgIgHQgOgMgIgMQgJgNALALIAPANQAIAHAOAPQAWAaAVAWQAEAGAWABQAQABgDAJQgBAHAOAFQASAGAGASQAGATAXALQAVAMABAEQACAFAOADQAOACAEAOQAFATgFAFQgDACgHAAIgPgBg",
      );
    this.shape_23.setTransform(334.8463, 185.7868);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#98C663")
      .s()
      .p(
        "AArCAQgKgEgNgLQgJgHgCgLQgBgJADgJQAHgSgYgnIgZgdQgIgKAFgNQAHgSAAgMQgBgNgLgQQgKgPgBgFQgBgDADgKQACgIAHAMQAMASAJAIQAMAJAAAPIAAAkQACALgBAQQAAAHAFAHIANATQAJALAEANIAYBBQAFANgIAAIgEAAg",
      );
    this.shape_24.setTransform(321.6458, 186.3901);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#98C663")
      .s()
      .p(
        "AASB6QgRgJAIgVQAJgbgIgQQgJgSAAgRQAAgPgHgPQgJgRgBgNQgBgMgFgHQgHgLgCgMIgDgSQgCgJAEgHQAEgGgBAMQAAALABAHIAHAVQADAIAKATQAHANgCAIQgBAGAEACQAGADAAANQAAAMAGAKQAHAKAAALQAAALAJAIQAIAHgCAMQgBANACAZQAAALgHAAQgEAAgGgDg",
      );
    this.shape_25.setTransform(313.2136, 186.6917);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#98C663")
      .s()
      .p(
        "AgZB3QgGgGADgQIAGgZIACgWQACgPAMgIQAIgGgDgMQgFgMAMgOQAPgQgCgbQgFgfAAgMQgBgTADgEQADgEADAUIABAWQABATADAIQAEAIgBARIgFAmQgCALgKAUQgHAPAEAOQADANgGASQgHAQAEAHQAFALgMAAQgNAAgJgIg",
      );
    this.shape_26.setTransform(290.3731, 188.0667);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#98C663")
      .s()
      .p(
        "Ag1B+QgMgGAMgUQAXgoAEgJQAGgRAMgTQAIgKgCgLQgCgLANgHQAOgHgEgPQgFgRAJgLQAPgTAAgDQAGgOAKgLQAKgLgGAMIgNAQQgFAKAEAPQAGAZABAEQAAAMgPALQgKAHADAIQAFAJgOAJQgNAKACARQADAPgJAEQgJAFAFANQAFAOgHAGQgEACgUAXQgKAMgKAAIgGgBg",
      );
    this.shape_27.setTransform(280.85, 187.564);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#98C663")
      .s()
      .p(
        "AhCBiQACgOAQgYIATgnQAKgUATgIQATgHABgbQABgbAJgFQALgGALgTQAJgPAFACQAGACgPAOQgRARAAAGQAAAEgKAXQgKAXABARQABAQgVANQgWANgBAHQgBAKgHAVQgFATAFAJQAAAHgXADIgEAAQgMAAADgPg",
      );
    this.shape_28.setTransform(273.1769, 186.9491);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#C6D439")
      .s()
      .p(
        "AARBqQgSgdgPgQQgRgSgMgFQgWgKgKgGIgYgPIgYgVQgSgQgVgFQgYgFgQgNQgTgPg9gbQgvgVAJAAQAJABAGADQAKAGAQAEQAMADAbALQAYAKAYAEQAXADAUAHQAXAIAOADQATADAKAGQAMAHANADIAhAMQAPAHATABQARABAFAHQAFAGAMAAQANABAKALQAJAKAJAAQAJgBARAJQARAJAQABQALABAXAKQATAHARgDQAUgEArAKIAsAMQAGABgZAJQgaAIgVgBQgQgCgMAGQgOAGgSABQgTAAgKgFQgKgFgNAAQgWABgPADQgQAEggANQgKAFgJAAQgOAAgKgLg",
      );
    this.shape_29.setTransform(362.4049, 184.5736);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#C6D439")
      .s()
      .p(
        "AjACZQgCgMgEgFQgDgEACgQQACgTgIgRQgHgQADgaQAEgbgFgMQgGgRADgKQADgLgCgGQgBgHABgSQABgPgEgIIgHgPQgDgHgKgHIgRgMQgHgFgLgBQgIgCgTACQgYABgNAAQgfgCgSgDQgSgEAPAAIC4gCQATAAAngGQAVgCAHADQAIAEAOAAIAvACIA5ABQAgAAgJACIgeAFQgDABgDACIBwA9QAWAMBlA/IAhAVQAPAKAJADQAPAFAsAlIANALQARAOAPALIgRAGQgMABgIgOQgFgIgKAAQgLgBgEAJQgGAOgGAUQgHgBgDADIgMAIIgCAAQgPgFgQgDQgggEgzAFQgWACgZAFQgFABgGAFIgDgCQgKgHgQAAQgHABgFACIgLgMQgKgLgIgBQgSgDgSAUQgEgDgIgBQgEAAgJAEQgKAEgEABIglAGQgIABgJgDIgRgFQgPgDgVAGIgIABIgdAIQgGACgFAAQgHAAgDgFg",
      );
    this.shape_30.setTransform(327.0591, 186.6643);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#C6D439")
      .s()
      .p(
        "AiYCAQAMgIAegJQAagHAJgHQAJgHAUgFQAVgGAJgNQAKgPAVgIQAdgLAXgRQAOgKAZgTQANgLAEgFQACgEAKgGQAPgJgCAAIgNACQgIABgRAQIgXAVQghAagqACQgVABgIAOQgIANgLgBQgMgBgLANQgMAOgPgCQgNgBgeAOQgmAUgZALQgMgGgkACIgjACQgGgDAngXQAngXAOAFQAQAGAngMQgDgFACgGQAEgKAWgIQAmgOAcgOIAfgOQAJgCAOgOQAOgLAHAAQAJAAATgLQATgLAEAAQAGAAAWgLQATgKAIgFQAEgDALgMQAMgKALADQALAEAOgHQAOgGADABQAGADAKgEIAMgGQAdgOACAFQABADgFAGIgQAHQgOAGgNAPIgVAbQgLAOgPAQQgNAMgNAFQgMAFgOAOQgMAOgLAIQgHAFgJAPIgQAbQgFAIgPAMIgVASQgIAFgSADQgLACgHADQgFADgZAEQgkAFgdAAQgbAAgVgEg",
      );
    this.shape_31.setTransform(240.2188, 186.825);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#C6D439")
      .s()
      .p(
        "AB0CZQgPgFgKgBIghAAQgWgDgLAAQgIAAgRAFQgQAEgJgBQgJAAgSgGQgSgGgKAAQgJAAgGAEQgHAFgCAAQgEgBgIgFQgIgGgEAAQgKgDgUAEQgDABgFgCIgIgDQgLgIgIgBQgQgBgKAKIgIAJIgCACIgDAAIgCgBQgCgFAAgHQgmABAMgOQAYgaAAgFQAAgMAJgJQAJgIgBgOQAAgOASgJQAUgKAFgPQAGgQATgNQAQgMAAgPQABgRARgLQAWgNAEgHQADgGAKgMQAGgIAFgMQACgJAIAAQAFAAANAEQAFgBALABQAKABAIgCQAKgEAcAFQAhAFALAAIBOgDQA6gBANAEIACAFIADAHIAGAFQAFAFADAHQAGANgBAIQgCALADALQACALAFALQAEAJABAPIAEAfQACAOgGAQQgFAOABAEQABAFgDAMQgEAMAEAHQADAEgJAKQgIAJACAGQAAADgGABIAAAZQgPgUgVAAQgRAAgUARQgGAFgDABIgDgCQgFgGgJABQgJABgEAHIgCAEIAAABIgHgCg",
      );
    this.shape_32.setTransform(277.0218, 188.1625);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#C6D439")
      .s()
      .p(
        "AnkBvQA+gXA4gKQAjgGBpggQBZgcBqgKQBxgLBCgTQAsgNCKgsQB1ghBhgTQAwgJAagCQjJAphBAYQhEAahoAcQiFAjhFAEQhAAEhrAcQhpAfgcAGQgmAHglANIhNAdQglAOg3AFIgvACQBEgNBBgZg",
      );
    this.shape_33.setTransform(189.975, 192.725);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#C6D439")
      .s()
      .p(
        "An6BhQBRgiA4gJQAjgFBqggQBZgZBqgKQBygKA+gRQArgMCJgqQB1ggBwgIQA5gEAgADQhAAFhGAJQh+AQglANQhEAZhlAaQiCAhhFAEQhAADhrAaQhqAdgcAGQgmAHgmANIhNAcQglAOhKAQIgvAJQA9gNBJggg",
      );
    this.shape_34.setTransform(177.2375, 191.7604);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#C6D439")
      .s()
      .p(
        "AoBBdQBSgiA4gIQAjgFBqgeQBagZBpgIQBzgJA7gPQAqgLCIgoQB1gfB6gJQA8gEAlACQg/AGhGAIQiPAQgoAOQhGAYhgAXQh/AghGACQhAAChrAaQhqAcgdAFQgmAHglAMIhOAbQglANhKAQIgwAJQA9gOBKgdg",
      );
    this.shape_35.setTransform(158.4, 189.9417);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#C6D439")
      .s()
      .p(
        "ApRBtIBNgeQAtgPAsgGQAjgFBsgdQBagYBqgGQBzgIA3gOQApgJCHgmQB2geCBgJQBBgFAqACQhEAFhLAJQiXAQgpAOQhEAWhgAXQh6AchHABQhAAChsAZQhrAbgcAEQgmAHgmAMQgQAEg+AWQgrAOgTABIgCAAQgQAAAcgKg",
      );
    this.shape_36.setTransform(143.945, 187.8324);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#C6D439")
      .s()
      .p(
        "ApmBsQAhgKA4gWQA0gSAwgGQAjgFBsgcQBagWBqgGQB0gGA0gMQAngICGgkQB3gdCKgKQBGgEAtAAQhIAGhQAJQihARgpANQhEAVhdAVQh3AahGABQhAAAhtAXQhrAagdAFQgmAGgmALIhPAZQgpAOgdAEIgLABQgLAAATgHg",
      );
    this.shape_37.setTransform(124.0479, 187.1616);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#C6D439")
      .s()
      .p(
        "AqNBxIAegJIBmgjQA6gUA0gGQAkgEBsgaQBagWBqgEQB1gFAwgKQAmgICFgiQB3gbCTgKQBKgGAyAAIiiAPQiqASgpAMQhEAVhaASQh1AYhGAAQhAABhtAVQhrAZgdAEQgmAFgnALIhPAZQgnAMhDALIgUAEIABgBg",
      );
    this.shape_38.setTransform(104.5758, 187.2058);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#C6D439")
      .s()
      .p(
        "Ap7BjQAkgKA8gWQA4gSAygFQAkgEBsgZQBcgVBpgDQB3gEArgIQAkgGCEggQB4gZCdgMQBOgGA2gBQhSAHhZAJQi0ASgqAMQhCAUhYAQQhxAVhHAAQhBgBhsAUQhsAYgdAEQgmAFgnAKIhPAYQgqAMgiAEIgSACQgHAAAQgFg",
      );
    this.shape_39.setTransform(89.4998, 185.1344);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#98C663")
      .s()
      .p(
        "AByCtQhJgHg4gCIh6gEQgdgCgXgEI9fAAQgrAHg8AFQh4AKhVgJQiFgNAIgXQAHgVCMg7QHpicUDg2QHzgWH8AAQHOABEeAQQF1AWDuA3QCRAiBuAJQC/AQEGgZQBYgIjPBqIjhBtIurAAQg4ANg0AEQg8AFhMgEIh/gKQg0gDg4ACIhSAIQg7AFgngBIhSgEQgcgBgOACQheALg8ABIgGAAQg5AAhXgJg",
      );
    this.shape_40.setTransform(251.0725, 187.7263);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#0895AF")
      .s()
      .p(
        "AG2BAQgigIgWABQgVACgLgBQhEAChNgDQhbgDhGgKQhfgNkAgGQjwgEgRgDQgWgDAHgSIALgSQAUgPASgHQARgHAKADQAGACANgKQALgJAHADQAFADAFgRQAFgPAPANQAQAMASAFQAWAFAIAGQALAHALgCQALgBALAIQANAKAJgCIAdgFQAKgBAUgIQAPgHAdAFQA0AHAhAGQAUADAIgBQAJgCAlAEQAaADAlgMQATgGATAcQASAZAmAEQAQACA5gFIAHgGQADgDADACQAEADAHgHQAIgIAHAEQAFADAMgGQAMgFAOAGQAJAEAFABQAOgFAHAAQAMgBAPAGIAIACQAFgBAGgEQAGgCAHAEQAFACADgGQADgIAQAIIAhAQQAQAFAVgFQARgEAKAJQAHAGAPAUQAMALAXgIQAUgIACAFIALAQQAJANgEAGQgEAIgWAAQgjAAhSgUg",
      );
    this.shape_41.setTransform(370.0395, 173.2019);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#04A48C")
      .s()
      .p(
        "AkUA0QgZgFAIgGQAQgMABgFQAAgNARgKQASgLA7gYQAtgSAPAFQAYAHAbgEQAjgGAVAAQAMAAAMgFQAQgGAZAUQAOAKAYATQAQAKAIABQAJABAPgEQAGgCACACIAEAHQAJAMArAAQCLgBg+AUQg+AUhcAAIjfADIg3AAQhkAAgVgFg",
      );
    this.shape_42.setTransform(128.396, 173.4694);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#0895AF")
      .s()
      .p(
        "AukA4QgtgFArgJQAYgFA6gIQATgEAdgbQAWgVAKAJQALAKAZgXQAbgZALAFQAKAEAZgEQAXgFANAJQAKAIARgOQAQgNATAPQAUAPAXgFQAZgFAJAEQAJAFAGgCQAGgBAaAOQADACAVgGQAXgGADABQARACAPAFQAQAEAUADQAPACANgFIAWgLQAegMAyAUQAgADAMgHIAJgGQAXAEAagIQASgGAPAKQAPgNASAIQAZAKARgEQATgEAVAEQANACAHgJQAHgKAdgBQAkgBAJgEQAMgEAPAKQAQALATgDQAQgDAUAGQARAGAYgGQAYgHAVAAQAeAAASgDQAWgDAaAJQAcAJAlgDQAmgCAHACQACABAMgDQARgEASAAIAdgCQALgBAMAFQALAFAKgDQAMgEALABIAeABQAjAAAdgCQASgCAOAEQALADAMgDQANgDACAHQADAJAOACQCuAZjBAOQikAMl1AAQj+AAkhAIQlWAKhbABIiBACQhFAKgsAAQgTAAgNgBg",
      );
    this.shape_43.setTransform(210.3932, 172.993);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#5EC2D4")
      .s()
      .p(
        "AC1A2QgGAAgGgKQgFgKgIgDQgcgGgVgIQgfgLgMABQgDAAAHAFIAOAJQAJAFgZgJQgYgKgGgFQgGgFgegVQgLgIgHgCQgIgDgOAAIgoACQgcACgJgCQgHgBAjgEQAlgEgDgCQgSgFgXAAQgqAAgxALQgOADABgDQABgDAJgCQALgCA7gFQAPgCAGABQAGAAAJgBQALgCARAGQASAGAGAAQALAAAbARQAcARAEAJQAEAFAIgCIAMgDIAgAKQAgALAUABQATABAIAJQALAMAEABQASAHgHADQgDABgGAAIgJgBg",
      );
    this.shape_44.setTransform(428.8388, 178.8534);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#13B5CF")
      .s()
      .p(
        "AFxBEQjVg9h+gVQh8gWi9gIIjSgFQgqgCgRgQQgNgMAGgQQAEgKAKgBIAsgHQAYgFARADQAUADAegEQAggFALAGQAMAGAbgEQAbgDAXAFQAVAEAbgEQAbgFAOABQAGAAAKgFQALgGAeAHQAoAJAXAAQAMgMAVABQAYABAMASQAMAVAHgDQAFgCAMgOQAUgPAmAqQAQARAvgmQAIgGAOACQARAEAbgMQAbgMAVAZQAWAaAQgFQAQgEAWARQAOALAOgVQAOgVATAdQAYAmASAAQAcAAAXAQQATANANAXQAHAOgGAVQgEAMANgCQARgDACAYQACAVgGAHQhSgZhrgeg",
      );
    this.shape_45.setTransform(396.5488, 180.054);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#98C663")
      .s()
      .p(
        "AqgA+QAOgUANgHQAWgMAygFQBIgHBlggQBegeBLgFQBHgEBYgcQBPgbA8AAIB0gFQA7gEB4AJQBmAIEIACQBOAEgMALQgPANiNAaQj9AvpmBDQk0AikCAZQBcgTAfgpg",
      );
    this.shape_46.setTransform(88.855, 186.376);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
      this.shape_28,
      this.shape_29,
      this.shape_30,
      this.shape_31,
      this.shape_32,
      this.shape_33,
      this.shape_34,
      this.shape_35,
      this.shape_36,
      this.shape_37,
      this.shape_38,
      this.shape_39,
      this.shape_40,
      this.shape_41,
      this.shape_42,
      this.shape_43,
      this.shape_44,
      this.shape_45,
      this.shape_46,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_4_0,
    new cjs.Rectangle(122.5, 160.7, 379.6, 47),
    null,
  );

  (lib.ClipGroup_4 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(222.625, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#43A7A2")
      .s()
      .p(
        "AEoBOQgMAAgRgEIgdgHQgkgIgfABQgqADgWgBQgbgBgigNQgfgMgVADIgdAGQgSAFgLAAIgggDIgfgDQgWgCgmAIQgYAFgmgBIg+gBIiIAFQhYAEg1gCIgFAAQgBgMAqgcQAugdACgFQAFgJAqADQAwADAYgPQASgLAZgIQAKgEAFgPQAFgOAiANQAnAPAIgGQAMgIAaASQAXAQABgCQAAgEALgBQAOAAAGgFQAGgFAOgDQAQgDAKgHQANgJAGAKQAGAJgEARQgDANANAAQAJgBAXgJQAPgGASAIQAYAKAGABQAVACAcgCQAhgCAYgGQAQgFAgAPQAdANASgJQAPgJAKAOQALAQAYgEQAagDgGAIQgHALAFAAQAHAAAeAMQAgANAZADQAXADBSAAQA1ABATAOQA2AJhYACIh0ACIgyACIhCABIgMAAg",
      );
    this.shape.setTransform(150.7256, 197.942);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B4D48D")
      .s()
      .p(
        "AhxApQiiACiIgMQiLgMBtgIQBigHB+glQAogMAZAAQAhgBAoAQQAFACBnAOQANADAUgMQAWgNAKgBQANgBAfAKQAdAKAOgCIAkgEQAUgBAQAEIAQAFQAJACAHgBQALgBATgJQAdgOAnARIAbAOQAPAHAUABQAUABAZAQQhlgXgXgCQhBgGhqAWIixAmQgagGhpABg",
      );
    this.shape_1.setTransform(150.267, 196.4242);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#62BDB3")
      .s()
      .p(
        "Ap9BQQB2gQFshIQEMg1DugOQBogHC3gFQgLALgEABQgJAFgoAMQgkALgSgOQgRgNgUAHQgSAGgJgFQgJgGgwASQg3AUg2AHQgeAEgwAAQglgDgOABQgWADgTAWQgWAagUAHQgUAHgDgSQgBgGAQghQAIgSgfALIg8AaQgaALgRgCQgTgBgPAGQgYAMgYALQgtAYgRAHQgcALgOgOQgNgMgYALQgXALgDgDQgBgCgCAJQgDAJgQgRQgRgSggAEQgVACgOAHQgLAGhsAJQgxAFgaAAQgjAAADgIg",
      );
    this.shape_2.setTransform(168.5143, 181.6674);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#EAEDB2")
      .s()
      .p(
        "AKLArQgTgBgrgHQghgGh0gDQhOgCg7AIQgfAEh4gQIjWgbQg6gHgwAAQgWAAhjgGQhggFhaAAQgjAAhpgIQhsgIAAgEQDLABF/AVIDHAPQB/AJBLAAQBXABCYANQCHAMAzAKQArAHgJACIgJAAQgRAAgugDg",
      );
    this.shape_3.setTransform(378.2279, 176.0955);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#2CA196").s().p("AABANQgJgFADgMQACgNAGAHQAFAFgCAJQgBAJgDAAIgBAAg");
    this.shape_4.setTransform(225.4673, 171.0515);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#2CA196")
      .s()
      .p("AgDAhQgGgBACgsQACgqAHAuIAEAOQADAGgBAGQgDAPgHAAIgBAAg");
    this.shape_5.setTransform(228.4643, 168.6881);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgFAMIgJAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQABgIAFgGQAHgKAKAHIALAIQACACgFADQgIAHgKAAIgBAAg",
      );
    this.shape_6.setTransform(232.5631, 171.0409);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#2CA196")
      .s()
      .p("AgVAKQgCgBADgEQAFgGACgHQACgDALAGIATAJQAGADgCABIgNABIgTABIgGAAIgGAAg");
    this.shape_7.setTransform(241.835, 170.2966);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#2CA196")
      .s()
      .p("AgGAeQgHAAAAgIQgCgTgCgHQgEgQAJgGQAHgFAFADQAGACAKAiQAEANgCAEQgBACgJADIgIABIgGgBg");
    this.shape_8.setTransform(236.6218, 168.0888);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#2CA196")
      .s()
      .p(
        "Ag1AsQgvgDARgHIAAgQQAAgTAFgQQAGgUAMgFQALgGACAOIADAZQADALAJABQAHAAAEgLQAFgMAFABQAFABAHAJQAHAIAHgBQACAAAOgHQAKgFAJAIQADACATAJQAMAFgBAKIAFATQACAFgRAAIglAAIgcAAIgWABIgngBg",
      );
    this.shape_9.setTransform(360.0553, 167.0398);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#2CA196")
      .s()
      .p("AgNAtQgKgJAGgkIAEghQACgRALAEQALAEAGAOQAFANgDANIgFAZQgDAPgFADIgKAGIgCABQgEAAgDgDg");
    this.shape_10.setTransform(337.415, 166.1251);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#2CA196")
      .s()
      .p(
        "AAaAZIhQgEIgUAAIgdgFQgIgBgDgRQgDgSAIgCQAHgCAMABQALACAHAEQAGADAEAAIAbgCQAOgBAVgHQAMgDAFAIQAHALAJAIQAKAIAIACQAEABAMgIQAMgHAKADQAPADAIAHQAIAIgKADQgVAGglAAIgagBg",
      );
    this.shape_11.setTransform(319.1801, 168.178);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgpAJQgDgCADgHQADgGAGAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABgCAMABQAKABAKgBQAJAAAGABQAFACAKgCQAGgBADAEQAEAFgGAEQgGAEgMABIgwABQgNAAgCgBg",
      );
    this.shape_12.setTransform(295.68, 169.2652);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#2CA196")
      .s()
      .p("AgIAsQgGgDgDgNQgDgMABgKQABgUABgMQADgWAMAEQAOAGAFAPQAGAQgIAPQgGALgFATQgDAIgEAAIgFgCg");
    this.shape_13.setTransform(302.4016, 165.2876);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#2CA196")
      .s()
      .p("AgHAeQgLgTABgWQABgWAKgDQALgDAHAEQAHAEgBAOQgFAfgDAKQgEAOgFAAQgDAAgFgIg");
    this.shape_14.setTransform(290.3833, 165.3584);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgBAaQgcgDgPACQgIABgFgCQgFgCgJAAQgIABAAgKQAAgKALADQAJADAKgDQAJgCAJADQAJADAHgBQAHgCAIADQAIACgCgQQgCgUAMgBQAQgBAJAGQAIAGABAJQAAAFgDAJQAAAHAGAAIAUgCQAKgBgEAFQgDAGgFABQgEABgMAAg",
      );
    this.shape_15.setTransform(279.2704, 167.9859);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#2CA196")
      .s()
      .p("AgKAdQgCgHADgTIADgfQACgNAHAIQAKAKgCAdQgBAfgLAAQgIAAgBgIg");
    this.shape_16.setTransform(268.3067, 166.4439);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#2CA196")
      .s()
      .p("AgTATQgCgTADgLQADgPACgGQACgKAJAEQALAGAHAYQAJAXgIAMQgHALgEABIgNABIAAAAQgJAAgDgVg");
    this.shape_17.setTransform(262.9076, 166.2581);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#2CA196")
      .s()
      .p("AgHAOQgHgHAAgKQAAgMAOgCQAOgBABARQACAQgJABIgIACIAAAAQgCAAgFgEg");
    this.shape_18.setTransform(258.2363, 168.3716);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#2CA196")
      .s()
      .p("AgHALQgFgFACgJQACgKAFAAIAJgBQAFAAABAJQAAATgGgBIgFACIgBAAQgCAAgFgEg");
    this.shape_19.setTransform(254.0233, 168.5333);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#2CA196").s().p("AgHgBQgCgcAJADQAKAEgCAYQgDAZgHAAQgDAAgCgcg");
    this.shape_20.setTransform(251.1074, 167.0809);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#62BDB3")
      .s()
      .p("ADEARQhZgKhKgJQhpgPiPgOQhrgLAEAAQANgDBmAGQB7AHBzANQClATAhANIArAHQAqAKABAOQg8gTg/gIg");
    this.shape_21.setTransform(333.2694, 177.3859);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#62BDB3")
      .s()
      .p("AD3ASIlkgWQlIgWATgFQATgFGAAWIF8AWIA2AUQAGAFgXAAQgmAAh1gPg");
    this.shape_22.setTransform(353.8882, 173.044);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#98C663")
      .s()
      .p(
        "Ah6B1QgFgFAFgTQAEgOAPgCQAOgDABgFQABgEAWgMQAWgLAGgTQAGgTASgFQAOgFgBgHQgDgJARgBQAVgBAEgGQAJgMAigkQAOgPAIgHIAPgNQALgLgJANQgIAMgOAMQgIAHgMARQgKAPgOAKQgLAHgLAPQgIANgPAFQgNAHgGAQQgIASgMAJQgIAGgWAfQgSAZgUAEIgPABQgHAAgDgCg",
      );
    this.shape_23.setTransform(232.8537, 185.7868);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#98C663")
      .s()
      .p(
        "AgxBzIAYhBQAFgNAIgLIANgTQAFgHAAgHQgBgQACgLIAAgkQAAgPAMgJQAJgIAMgSQAHgMACAIQAEAKgBADQgBAFgLAPQgLAQgBANQAAAMAHASQAFANgIAKQgOAOgKAPQgZAnAHASQADAJgBAJQgCALgJAHQgNALgKAEIgEAAQgIAAAFgNg",
      );
    this.shape_24.setTransform(246.0805, 186.3901);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#98C663")
      .s()
      .p(
        "AgjByQADgZgCgNQgBgMAIgHQAJgIAAgLQAAgLAGgKQAHgKAAgMQAAgNAFgDQAFgCgCgGQgCgIAIgNQAKgTACgIIAHgVQACgHgBgLQAAgMAEAGQAEAHgCAJIgDASQgDAMgGALQgFAHgBAMQgBANgJARQgHAPgBAPQAAARgIASQgIAQAJAbQAHAVgRAJQgFADgEAAQgHAAgBgLg",
      );
    this.shape_25.setTransform(254.5083, 186.6917);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#98C663")
      .s()
      .p(
        "AgDB0QADgHgGgQQgHgSAEgNQAEgOgHgPQgKgUgCgLIgFgmQgBgRAEgIQADgIABgTIABgWQADgUADAEQADAEgBATQAAAMgFAfQgCAbAPAQQAMAOgEAMQgDAMAIAGQAMAIABAPIACAWIAHAZQADAQgHAGQgJAIgNAAQgMAAAFgLg",
      );
    this.shape_26.setTransform(277.3496, 188.0667);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#98C663")
      .s()
      .p(
        "AAcBzQgVgXgDgCQgHgGAFgOQAFgNgJgFQgJgEACgPQADgRgNgKQgOgJAEgJQAEgIgKgHQgOgLAAgMQAAgEAGgZQAEgPgGgKQgJgKgDgGQgGgMAKALQAKALAFAOIAQAWQAJALgFARQgEAPANAHQAOAHgCALQgBALAHAKQAMATAGARQAEAJAXAoQAMAUgMAGIgHABQgJAAgKgMg",
      );
    this.shape_27.setTransform(286.8564, 187.564);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#98C663")
      .s()
      .p(
        "AA2BxQgOgCgGgEIgDgEQAFgJgEgTQgHgVgCgKQgBgHgWgNQgVgNABgQQABgRgKgXQgKgXAAgEQAAgGgRgRQgPgOAGgCQAFgCAJAPQALATALAGQAJAFABAbQABAbASAHQAUAIAKAUIATAnQAQAYADAOQACAPgNAAIgDAAg",
      );
    this.shape_28.setTransform(294.5413, 186.9491);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#C6D439")
      .s()
      .p(
        "Ag8BwQgggNgQgEQgPgDgVgBQgNAAgKAFQgKAFgUAAQgSgBgOgGQgMgGgQACQgVABgZgIQgZgJAGgBIArgMQAsgKATAEQASADASgHQAXgKAMgBQAQgBARgJQAQgJAJABQAKAAAJgKQAJgLAOgBQAMAAAEgGQAFgHASgBQASgBAPgHIAhgMQAOgEAMgGQAKgGASgDQAPgDAWgIQAUgHAYgDQAYgEAXgKQAbgLANgDQAQgEAJgGQAGgDAJgBQAKAAgwAVQg9AbgSAPQgRANgXAFQgWAFgSAQIgXAVIgYAPQgKAGgXAKQgMAFgRASQgWAigKALQgKALgOAAQgJAAgLgFg",
      );
    this.shape_29.setTransform(205.3038, 184.5736);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#C6D439")
      .s()
      .p(
        "ACsCcQgVgFgIgDIgIgBQgUgGgQADIgRAFQgJADgIgBIglgGQgEgBgKgEQgJgEgFAAQgHABgEADQgSgUgSADQgGABgMALIgLAMQgFgCgGgBQgRAAgKAHIgDACQgGgFgFgBQgagFgVgCQgzgFggAEQgQADgPAFIgCAAIgMgIQgDgDgHABQgGgUgGgOQgEgJgLABQgKAAgFAIQgIAOgMgBIgRgGQAZgRAUgTIAYgTQAZgUAKgDQAJgDAPgKIAhgVIB8hLIBvg9QgDgCgDgBIgegFQgJgCAgAAIA5gBIAvgCQAOAAAJgEQAGgDAVACQAnAGATAAIC4ACQAPAAgSAEQgSADgfACQgNAAgXgBQgUgCgIACQgLABgHAFIgQAMQgLAHgDAHIgHAPQgEAIABAPQACARgCAIQgCAGAEALQADAKgHARQgFAMAEAbQADAagHAQQgIARACATQACAQgDAEIgGARQgDAFgHAAQgFAAgGgCg",
      );
    this.shape_30.setTransform(240.6462, 186.6643);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#C6D439")
      .s()
      .p(
        "AAoB/QgZgEgGgDQgHgDgKgCQgTgDgHgFIgVgSQgPgMgFgIIgQgbQgKgPgHgFQgLgIgMgOQgNgOgMgFQgOgFgMgMQgPgQgLgOIgWgbQgMgPgOgGIgQgHIgEgJQACgFAdAOIALAGQAKAEAGgDQAEgBAOAGQAOAHAKgEQAMgDALAKIAPAPIAcAPQAWALAGAAQADAAAUALQATALAIAAQAIAAANALQAOAOAKACIAfAOQAcAOAmAOQAVAIAEAKQACAGgDAFQAoAMAQgGQANgFAoAXQAnAXgGADIgkgCQgjgCgNAGIg/gfQgdgOgNABQgPACgMgOQgLgNgNABQgLABgHgNQgIgOgWgBQgpgCghgaIgYgVQgRgQgIgBIgNgCQgBAAAOAJQALAGACAEQADAGAOAKIAmAdQAYARAcALQAVAIALAPQAJANAVAGQAUAFAJAHQAIAHAbAHQAdAIANAJQgWAEgaAAQgdAAgkgFg",
      );
    this.shape_31.setTransform(327.515, 186.825);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#C6D439")
      .s()
      .p(
        "Ah6CaIgCgEQgEgHgJgBQgJgBgFAGIgDACQgDgBgGgFQgUgRgRAAQgUAAgQAUIAAgZQgGgBAAgDQACgGgIgJQgJgKADgEQAEgHgEgMQgDgMABgFQABgEgFgOQgGgQACgOQADgRABgOQABgPAEgJQAFgLACgLQADgLgCgLQgBgIAGgNQADgHAFgFIAGgFIADgHIACgFQANgEA6ABIBOADQALAAAigFQAbgFAKAEQAIACAKgBQALgBAFABQANgEAFAAQAIAAACAJQAFAMAGAIQAKAMADAGQAEAHAWANQASALAAARQABAPAQAMQATANAFAQQAFAPAVAKQARAJAAAOQgBAOAJAIQAJAJAAAMQAAAFAYAaQAMAOgmgBQAAAFgCAHIgCABIgDAAIgCgCIgIgJQgKgKgQABQgFABgFADIgJAFIgIADQgFACgDgBQgUgEgKADQgEABgIAFQgIAFgEABIgJgFQgGgEgJAAQgKAAgRAGQgTAGgJAAQgJABgQgEQgQgFgJAAIgQABIgRACIghAAQgKABgPAFIgHACQAAAAAAAAQABAAAAAAQAAAAAAgBQgBAAAAAAg",
      );
    this.shape_32.setTransform(290.6782, 188.175);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#C6D439")
      .s()
      .p(
        "AI7CTQg3gFglgOIhMgdQgmgNglgHIiGglQhrgchAgEQhFgEiFgjQhogchEgaQgpgPh0gaIhtgYIBKALQBiATB0AhQBdAbBaAeQBBATBxALQBqAKBZAcQBpAgAjAGQA5AKA9AXQBBAZBEANIgHAAQgSAAgWgCg",
      );
    this.shape_33.setTransform(377.725, 192.7292);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#C6D439")
      .s()
      .p(
        "AHeBlIhOgcQglgMgmgIIiGgiQhrgbhBgDQhEgDiCgiQhlgahFgZQglgNh+gQIiGgOIBZABQBxAIB0AgQBeAaBWAdQA/ARBxAKQBrAJBZAaQBrAfAhAGQA5AJBRAiQBQAiBBANQhwgVg5gVg",
      );
    this.shape_34.setTransform(391, 191.925);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#C6D439")
      .s()
      .p(
        "AHlBhIhOgcQgmgMglgHIiHghQhsgZhAgCQhFgDh/gfQhhgYhFgYQgpgOiOgQIiFgNIBhACQB6AIB1AfQBeAZBUAaQA7APByAJQBqAJBaAYQBpAeAkAFQA4AJBSAhQBQAhBBAMQhvgTg6gUg",
      );
    this.shape_35.setTransform(409.8125, 190.075);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#C6D439")
      .s()
      .p(
        "AJcB2QgTAAgrgPIhOgaQgmgMgmgGIiHggQhsgZhAgBQhHgBh6gdQhggWhEgXQgpgNiXgRIiPgOIBrADQCBAKB2AdQBfAYBRAYQA4ANByAIQBqAHBaAXQBsAdAjAFQAsAGAtAQQAaAJAzAUQAcALgQAAIgCgBg",
      );
    this.shape_36.setTransform(423.755, 187.8511);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#C6D439")
      .s()
      .p(
        "AJkByQgdgEgpgOIhPgZQgmgLgmgGIiIgfQhtgXhAAAQhGgBh3gaQhdgVhEgVQgpgNihgRIiYgPIBzAEQCKAKB3AdQBfAXBOAVQA0AMB0AGQBqAGBaAWQBsAcAjAFQAwAGA0ASIBZAgQATAHgKAAIgMgBg",
      );
    this.shape_37.setTransform(443.6827, 187.174);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#C6D439")
      .s()
      .p(
        "AJ7BuQhDgLgngMIhPgZQgngLgmgFIiIgdQhtgVhAgBQhGAAh1gYQhagShDgVQgqgMiqgSIiigPIB8AGQCTAKB3AbQBfAWBMAUQAwAKB1AFQBqAEBbAWQBrAaAkAEQA0AGA6AUIBnAjIAdAJIABABIgUgEg",
      );
    this.shape_38.setTransform(463.1242, 187.2058);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#C6D439")
      .s()
      .p(
        "AJzBmQgigEgqgMIhPgYQgmgKgmgFIiJgcQhtgUhBABQhHAAhwgVQhZgQhCgUQgqgMizgSIisgQICFAHQCcAMB4AZQBfAVBJARQAsAIB3AEQBpADBbAVQBsAZAlAEQAyAFA3ASIBgAgQAQAFgIAAIgRgCg",
      );
    this.shape_39.setTransform(478.1752, 185.1344);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#98C663")
      .s()
      .p(
        "AkHC2Qg8gBhegLQgOgCgcABIhSAEQgnABg7gFIhSgIQg4gCg0ADQhEAHg7ADQhMAEg8gFQg0gEg4gNIurAAQh5g3hog2QjPhqBYAIQEGAZC/gQQBugJCRgiQDug3F1gWQEegQHOgBQH8AAHzAWQUDA2HoCcQCMA7AHAVQAJAXiFANQhWAJh3gKIhngMI9fAAQgWAEgeACIh6AEQg4AChJAHQhXAJg4AAIgHAAg",
      );
    this.shape_40.setTransform(316.6025, 187.7263);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#0895AF")
      .s()
      .p(
        "ApEBMQgEgGAJgNIAMgQQABgFAUAIQAXAIAMgLQAPgUAHgGQAKgJARAEQAVAFAQgFIAigQQAPgIADAIQADAGAFgCQAHgEAGACIALAFIAIgCQAPgGAMABQAHAAAPAFQAEAAAJgFQAOgGAMAFQAMAGAFgDQAHgEAIAIQAHAHAEgDQADgCADADIAHAGQA5AFARgCQAlgEASgZQATgcATAGQAlAMAagDQAlgEAJACQAIABAUgDIBVgNQAegFAPAHQATAIAKABQAPABAOAEQAJACANgKQALgIALABQALACALgHQAIgGAWgFQATgFAPgMQAPgNAFAPQAFARAFgDQAHgDALAJQANAKAGgCQAVgGAsAgIALASQAHASgWADIkBAHQkAAGhfANQhGAKhbADQhNADhEgCIgggBQgWgBgiAIQhSAUgjAAQgWAAgEgIg",
      );
    this.shape_41.setTransform(197.6605, 173.2019);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#04A48C")
      .s()
      .p(
        "ABlA5IjfgDQhcAAg+gUQg+gUCLABQArAAAJgMQACgDACgEQACgCAGACQAPAEAJgBQAIgBAQgKQALgGAbgXQAZgUAQAGQAMAFAMAAQAVAAAjAGQAbAEAYgHQAPgFAtASQA7AYASALQARAKAAANQABAFAQAMQAIAGgZAFQgVAFhkAAIg3AAg",
      );
    this.shape_42.setTransform(439.3159, 173.4694);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#0895AF")
      .s()
      .p(
        "AMVAvIiCgCQhbgBlWgKQkhgIj+AAQl1AAikgMQjAgOCugZQANgCADgJQACgHANADQAMADAMgDQANgEASACQAdACAjAAIAegBQALgBAMAEQAKADALgFQAMgFALABIAdACQASAAARAEQAMADADgBQAGgCAmACQAlADAcgJQAagJAWADQASADAeAAQAVAAAYAHQAYAGARgGQAUgGAQADQATADARgLQAOgKAMAEQAKAEAjABQAdABAHAKQAHAJANgCQAVgEATAEQARAEAZgKQASgIAPANQAPgKASAGQAaAIAXgEQAEgBAFAHQAMAHAggDQAygUAeAMIAWALQANAFAPgCQAVgDAPgEQAQgFAQgCQADgBAXAGQAVAGADgCQAagOAGABQAGACAJgFQAJgEAZAFQAXAFAUgPQATgPAQANQARAOAKgIQANgJAXAFQAZAEAKgEQALgFAbAZQAZAXALgKQAKgJAWAVQAdAbATAEIBSANQArAJgtAFQgOABgSAAQgsAAhEgKg",
      );
    this.shape_43.setTransform(357.3262, 172.993);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#5EC2D4")
      .s()
      .p(
        "AjGA2QgHgDASgHQAEgBALgMQAIgJATgBQAUgBAggLIAggKQAEAAAJADQAHACAEgFQAEgJAcgRQAcgRAKAAQAGAAASgGQARgGALACQAJABAGAAQAGgBAPACQAdAEApADQAJACABADQABADgOgDQgxgLgqAAQgXAAgSAFQgDACAlAEQAjAEgHABQgJACgcgCIgogCQgOAAgIADQgHACgMAIQgcAVgHAFQgGAFgYAKQgYAJAIgFIAOgJQAHgFgDAAQgMgBgeALIgcAIIgWAGQgHADgGAKQgFAKgHAAIgKABQgFAAgDgBg",
      );
    this.shape_44.setTransform(138.8823, 178.8534);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#13B5CF")
      .s()
      .p(
        "AoxBfQACgYARADQAOACgFgMQgGgVAHgOQANgXAUgNQAWgQAcAAQASAAAZgmQASgdAOAVQAOAVAOgLQAWgRAQAEQAQAFAWgaQAVgZAbAMQAbAMARgEQAOgCAIAGQAvAmAQgRQAPgQAOgJQATgKALAIQAIAHAIAJQAHADAMgVQAMgSAYgBQAVgBAMAMQAXAAAogJQAegHALAGQAKAFAGAAQAOgBAbAFQAbAEAWgEQAXgFAbADQAaAEAMgGQALgGAgAFQAfAEAUgDQARgDAXAFIAsAHQAKABAEAKQAGAQgNAMQgRAQgqACQhwABhiAEQi9AIh8AWQh+AVjVA9Ii9A3QgFgIABgUg",
      );
    this.shape_45.setTransform(171.175, 180.054);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#98C663")
      .s()
      .p(
        "ADmA/QpmhDj9gvQiNgagPgNQgMgLBOgEQAngCCNgCQCCgCA4gEQB4gJA7AEIB0AFQA8AABPAbQBYAcBIAEQBKAFBeAeQBlAgBHAHQAyAFAXAMQANAHAOAUQAfApBbATQkBgZk0gig",
      );
    this.shape_46.setTransform(478.82, 186.376);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
      this.shape_28,
      this.shape_29,
      this.shape_30,
      this.shape_31,
      this.shape_32,
      this.shape_33,
      this.shape_34,
      this.shape_35,
      this.shape_36,
      this.shape_37,
      this.shape_38,
      this.shape_39,
      this.shape_40,
      this.shape_41,
      this.shape_42,
      this.shape_43,
      this.shape_44,
      this.shape_45,
      this.shape_46,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_4,
    new cjs.Rectangle(65.6, 160.7, 379.70000000000005, 47),
    null,
  );

  (lib.ClipGroup_3_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(596.325, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#028063")
      .s()
      .p(
        "AgpAlQgbgDgoABIghACIiAgGQhMgDAvgHIAzgLQAtgIATAGQAPAEAOgGQAQgGARACQARACASgJQAOgJANAHQAMAFAVgFQATgEAJALQAKALAUgCQAWgCACACQAEADAQgGQATgGARAFQAOAFAQgNQASgOASADQAQADAegVQAVgOADARQAEARAsATQAhAPgTAEQgXAEg4ABIhoACIhfAFIghABQgYAAgQgCg",
      );
    this.shape.setTransform(43.0162, 222.9563);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#2CA196")
      .s()
      .p(
        "AhbBJQg1gFgNgFQgUgIAHgWQAMglAEgGQALgTAWAEQASADAKgTQAJgRANAGQALAFAMgQQALgQAXAKQATAJAeAGQATADAEAIQAEAGAOAFQAPAGAJANQAIANAWAKQARAIAAAIQAAAIAYAKQALAIg5AIQg/AJhFAEIgyABQgVAAgNgBg",
      );
    this.shape_1.setTransform(41.7165, 218.3952);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#5C9E32")
      .s()
      .p("AlLAoQrnhBFLgkQEPgZE4gJQJugRD6BPQD7BOjaAjQhEALhrAFIheADQm1galyghg");
    this.shape_2.setTransform(155.444, 232.6171);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#028063")
      .s()
      .p(
        "ACwAyIiKgEQhDAAgzgCIgegCQhKgIgmgBIgwgCQgoAGgEgBIhBgEQgMgBAKgGQAJgFAsgFQA5gIAWgEQAJgCALgKQAMgKAGgBQAMgBAdAHQAdAHAWgCQARgCAcgKQAYgJANABQAGABASALQARALANAAIBWACQAtABARgJQAOgIAIgNQAHgLANgFQAMgGAdAYQAlAdAgAHQAvALASANQAWAShKgBIgKgBIgLgCQgHAAgjAHQgJABgaAAIg4gBg",
      );
    this.shape_3.setTransform(138.8401, 221.3297);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#04A48C")
      .s()
      .p(
        "AA+BqQhFgHgrAEQgQABgJgMIgWgZQgIgHAAgLQABgMgFgFQgFgFADgHQAGgMABgDIADgUQAEgMAJABQAPABABgOQABgTABgBQAUgYAKgDQAGgCARgPQATgJAgAZQACACARAFQAOAEgCAGQgEARASALQASALgBAHQgCALgEAMQgDAJAEAQQADAJAOANQAJAJgHARIgMAdQgFAFgRAAIgOAAg",
      );
    this.shape_4.setTransform(132.7264, 213.5888);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#04A48C")
      .s()
      .p(
        "ABOBBQgQgHgcACQhRAEhnAAQgLAAgGgIQgFgJAJgBQAEgBAKgYQAKgXASgBQAOgBAigkQAfggARALQAOAJAcgMQAWgJAHARQAHASASAAQAUAAAJALQAJALARgBQAOgBAEAPQADAOAJAKQAGAGgEAHQgCAEAMAQQAIAKgeACQgWACgQAAQgVAAgJgDg",
      );
    this.shape_5.setTransform(81.5752, 218.3293);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#288736")
      .s()
      .p(
        "AjAAxQgigCgcgQQgQgKAIAAQAUgCAIgGQAIgHAhgFQAqgEAfgMQAfgLARAEQARAFAYgKQAagKAIAEQANAFAZgFQAagFAXACQAXACAagFQAfgGASABIAYAAQC6ganSBqQg+AOgrAAIgTgBg",
      );
    this.shape_6.setTransform(435.6636, 220.8321);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#5C9E32")
      .s()
      .p(
        "AkoBMIghgKQgTgFgOAAQgIAAgYADQgTADgNgDQgngHgXADQAEgMBQgLQAGgBAKgOQAKgOADgCQAQgFARAEIAXAFQAFAAgGgJQgGgIAYAEQAVADAKgPQAIgNAPAIQAQAJAagNQAcgOAPAEQAVAGAfACQAYACAUgCQAGAAAWgKQARgHANAFQATAJAJAAQAMAAgDgMQgEgPAFgJQAFgJAMAIQAJAGAPADQANADAFAFQAFAFANAAQAKAAAAAEQABACAVgOQAYgRAKAHQAIAGAigOQAfgNAEAOQAFANAKAEQAVAHARALQAVAOAsgDQAmgDAEAIQAFAKA5AjQAqAhg3AFIghADIgGgBIhNAAQgwAAgdADQgvAEgZgGQgvgJgaACIglAGQgYAEgNABQggADgjgKIgegIQgTgEgMAFIgMAGQgHADgFAAQgUgEgKABQgIAAgGAHIgTABQgXgLgoAJQghAHgTAAIgMgBg",
      );
    this.shape_7.setTransform(447.7796, 217.7567);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#288736")
      .s()
      .p(
        "AEnBIIg3gBQgYAAgbgEQgWgDADgJQADgJgTgDQgVgDgCgKQgCgNgNgGQgUgIgVgBQgRAAgXAEQgPACgoAEIhNAIQgnAFgOgDQgOgDAjgCQAagBAjgHIBHgPQAhgHAdAFIASADQgCgDgKgGIgWgPQgMgJgZgDQgLgCgugCQgegBgKAFQgMALgQAJQgSAKgaACQgfADgKADQgQAFgUgEQgYgHgSACQgeAEgCgCQgDgBAZgIQATgGANAEQAXAHAQABQAcABAWgNQALgGATgTQAKgKgTAFQggAJgWAEQgbAGgPAAIgdgBQgRAAAAgCQAAgDAIAAIAwgEQArgEAFgGQAGgFAlgFIBRgJQAggEAJAKQAIAJALgDQASgFAcAOIAkATQAJADAHAKQAHAKAGADQAGACAOAAQAQABAKABQAGABABATQABAQAiABQAqACArARQAoAQgcAAIgDAAg",
      );
    this.shape_8.setTransform(397.144, 218.1706);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#5C9E32")
      .s()
      .p(
        "AgGBvQgJgHgFgCQgbgHgUAGIgVAGQgMAEgJgBIgbgDIgagFQgVgDhMAFQhQAGgSgCQgDgBArgNQAvgOABgEQACgKAMgEIAfgMQAMgGATgEQANgDAFgIQAQgWASgQQAHgGAIABQAFAAALAFQARgNAzgDQASgKALgBQAEAAADAMQAEANAFADQACABAKgGQAJgGACABQANAEAAgDQAAgCgHgKQgSgXALgJQAIgGABgFQACgFgDgJQgBgDALABQAMAAAAgBIAFgIQADgFAGgHQAFgGAKANQAKAPAGgCQARgFAEAQQAGASAYgFQAFgBAIgKQAHgFAFARQACAEAGADIAKADQAHADAQgBQAJAAgBAMQAAAOAIACIAYADQAJAAAEAFQADAEgHADQgJAEAAAFQAAADgHAJQgEAFAKAFQAIADANgCQAGgBgDALQgCAKATAEQAYAEAHAIQAHAIAMAAQAIgBADAKQADAOgZAFQgbAFhQgBQgZAIgUADQgHABgUgFQgQgDgJAEIgLADQgHABgBgBQgTgNgWgCQgVgCgUAKQgTAJgMAAIgGgBg",
      );
    this.shape_9.setTransform(379.2614, 214.2077);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#8DC68E")
      .s()
      .p(
        "AthAkQhNgHATgFQATgGAwADQAjABAtgCQAmgCAWgEIBCgLQA0gIAXAAIBzgJQBbgIANAGQAKAEAlgPQAjgPAPAMQAOAKAWgLQAXgLATALQARAJAKgGQANgIAkALQAmALAkADQAgACAKAEQATAGAigBQAUAAA/gHQAigEBHgOQBBgJAwAJQAkAHAtgGQAxgHBEAKQBMAKBDgBQBFgBAIABICLARQAUAFg8AAIkAAGQhsgCg1AHQggAEgVgBQgFgGhOAAQj2AEhMgDQgcgBgngGQghgGg8ABIjBACIgVgBIgwABQgVABhmAIQhUAGg4gBQgqAAgtAKQgXAFggAAQgUAAgZgCg",
      );
    this.shape_10.setTransform(256.5524, 219.2892);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#DCE383")
      .s()
      .p(
        "AERA+IgxgSQgMgEgegGIg9gNIgzgNQgYgGgegCQgbgDgUgGQgYgIgNgCQgHgBgUgJQgMgGgsACQgqABgmgJQgxgMgWgCQgqgDgKgJQgKgKAgAGQAPADAaABQAUABAQAGQAQAFARABQAPABAJADQAIADAIgEQAIgEASAIQATAJAJgBQAUgBAJABQARACAbAAQAUACAHAKQALAPAsAFQAIABAWgKQAWgHAPAMQAQANARAGQAIADAPADQAHABAHgCQAGgBADACIAKAFIAPAFQAFACADgDQADgEATAHQATAGAVAEQAVADAEACQAEABACgKQACgJATAMQA+AlgqAAQgcAAgngMg",
      );
    this.shape_11.setTransform(395.2523, 200.9339);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#DCE383")
      .s()
      .p(
        "AFXBQQgmgNgTgEQgagFhSgXQhGgUgWgBQgbgCgOgCIgvgKQhjgYg3gLQgSgEgegEQgYgDgWgGQgigLgPgEQgagHgeAEQggAEgQgFQgRgFAcgCQAMAAAPgEQAKgDAWACQATACAVABQAPABASAIIAYAQQAJAGAXABIAwABQATACAHAGQAGAGAKADIARAFQALADARgCIArAJQAJACAggCQAYgBAHAJQAHAHATgBQATgDAEAEQACADAOgHQAOgJAOANQAOAMASAFQAbAIAKAFQAPAIAQgDQAPgCAHAGQAIAFANgBQAPgBARAHQAQAIAXACQATACAEAEQADADAaAJQAPAGgZABIgQABQgVAAgPgFg",
      );
    this.shape_12.setTransform(382.12, 202.8385);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#DCE383")
      .s()
      .p(
        "AGuBRQgVAAgTgHQgMgEgagFQgbgFgRgHQgRgGgegBQgbgBgMgGQgNgHgxgLQg9gNgNgEQgLgEhcgPQhhgQhEgUQhFgUggAFQgmAGgNgCQgfgGhIARQg3AOAFgEQAPgJAUgHQASgHArgMQAegIAhAGQAjAIAXgFQAcgGAbAGQAlAJASABQAaABAXALQATAJALgEQANgDAVAIQAeAMASADQAaAEAdAJIArAPIA3AOQAmAKAfAEIA9AJQAeAEAXAJQAUAIAdgDQAegDARAFIAtAOQARAFgLABQggAEgTAAIgDAAg",
      );
    this.shape_13.setTransform(349.0951, 202.5068);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#8DC68E")
      .s()
      .p(
        "AISBRQgfgGgIgEQgPgHgUgCQgggDgRARQgOAPgegPQgdgQgLALQgPAOgbgMIg9geIgwgXQgPgGgTABQgLABgDAMQgDAHgegLQgUgIgZgPQgFgCgCAMQgDATgagBQgagBgVgZQgTgVgWgDIgzACQgvAAgegEQg1gHg4gUQgvgSgJAGQgJAGgSgHQgUgHgRANQgSANgkgKQgpgNgHgDQgFgDgLgKQCgAFB+AHQEqARDbAqQDNAnBfA1QAHAEgGAAIgVgDg",
      );
    this.shape_14.setTransform(418.5236, 198.0135);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#9DD3D0")
      .s()
      .p(
        "At9AqQgJgCAqgHQA0gJCGgMQCXgNBWgBQBKAAB/gKQCngNAfgCQD/gODXAAQBoAAB1ADQB8AEAlAAQCYAAiDAJQiEAKhbgCQgrAAhhgGQhZgFhWAAQhZgBhfAGQhjAFgVAAQgwAAg5AHIjWAbQh3AQgfgEQg7gIhOACQhzADggAGQgrAHgUABQgtADgQAAIgJAAg",
      );
    this.shape_15.setTransform(244.4106, 196.7205);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#B4D48D")
      .s()
      .p("EgmAACnQgrgMAegSQA7glFtgkQHmibT8g2QHwgVH5AAQHMABEcAQQKkAnDWCPQBDAsANAxQAGAZgHAQg");
    this.shape_16.setTransform(245.6942, 207.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#8DC68E")
      .s()
      .p(
        "AB3A3QhfgNj9gGIkAgHQgWgDAHgSIALgSQAUgPASgGQARgHAKADQAGACAMgKQAMgKAHAEQAEACAQgPQAPgOAPANQAQAMAIAEQALAEAIAFQALAHAOgGQAOgFALAIQAQALADABIAagBQAQgBAYgKQAbgNARgDQAGgBAUAMQAXAPAZAEQAUADAHgBQAJgCAkAEQAaADAmgNQATgFATAbQAVAeAyAAQAdABBBgGQAdAAAggMQAXgJAWAJIApAQQAMAFAOAJIAaANQAHAEgCAGQgEAIiBAAQiOAAhsgPg",
      );
    this.shape_17.setTransform(386.7703, 193.2302);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "At9A2QAlgCADgGQADgGANgIQASgKAGgGQANgLAegFQAggGAKAJQAhgGAJADQAGACgFAIIAgABQAegBARgEQAYgFBSgFIA9gHQAggDAeAEQANACAlgQQAdgMAyAUQAjAEAIgEQACAAADgJQADgHAfgEQAigDATANQAOgNASAIQAZAKASgEQATgFAUAEQAMADAHgJQAIgKAWAAQAegBAJgEQAHgCAUAHQAXAJAFABQALABALgEQAJgDASgLQAMgIARAIQATAIALgEQAIgDAKAEQAIADAOAIQAQACASgDQAXgDAcAFQAfAFAkgCQAmgDAGADQADABAMgDQARgEARAFQASAGAJgCIAYgCQALAAALgEQAMgDALABIAeABQAjAAAdgCQARgCAOADQALADANgDQAMgDACAHQADAKANACQCuAZjAAOQikALlyAAQj/AAkcAJQlgAKhPABIiuACIgJAAg",
      );
    this.shape_18.setTransform(242.693, 192.8986);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#44A747")
      .s()
      .p(
        "AEIAzQgPgFgSgMQgPgKgQgBIgfgCQgNgDgEgFQgEgGgOgDQgQgEgLAFQgPAGgJABQgNAAAAgIQABgIgGgCQgUgHgcAAQgNAAgMgKQgPgLgEgBQgHgBgTAAIgfAAQgGgBgJgEQgHgEgVAAQgmABhIAMQgeAFgEgDQgEgEALAAIAhgGQAggIAMgBIAfAAQAWAAAdgDQAbgCAHAFQAJAFATAAQAXAAATAMQATANATAAQAUAAASAIQATAJAUAAQATABASAJQAUALAcACQAiADAJAFIAYASQAJAGgDAAIgIgCg",
      );
    this.shape_19.setTransform(460.3064, 199.9701);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#288736")
      .s()
      .p(
        "ABFAlQh7gWi8gHIjSgGQgpgBgRgPQgNgNAGgPQAEgKAKgBIAsgHQAXgFARADQAUADAfgFQAfgEALAGQAMAGAagEQAbgDAXAEQAWAFAbgFQAagEAOABQAGAAAKgFQAFgDAFAAIALgHQAFgFACACQAEADADAAQAEAAABgJQACgKAGgCQAGgBALATQALASADgCQADgCAFgIQAFgGAIAFQAIAFAGgGQALgKADgBQAGgDACAPIAHgLQANgTAKAHIAQAKQANgBAGAKQAGALgQAUQgRATAJgDQAIgDAQgMQALgJATALQAOAIAOAQQAKALAUgJQANgGAUgQQAIgGAOACQARADAbgMQAbgLAUACQAYACAOgEQAQgEAVAQQAPAMAOgVQAOgXANAHQAZAOAMAAQAWAAgFAaQgIAkAGAJQAIAOgHAUQgEANANgDQAbgFgLA3Qj5gcjHgkg",
      );
    this.shape_20.setTransform(418.2796, 195.3655);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#028063")
      .s()
      .p(
        "AkoCCQgGgCgHgHQgJgJgEgDQgRgKgSAJQgLAGgGACQgDAAgFgBIgIgCQgHAAgKADIgRAFQgHACgDAHIgSAAQhQABAKgXQADgIAMgGQANgGAFADQAEACAGAAQgJgKADgHQADgHARgCQgFgFgBgEQgBgFAEgDQAEgDALABIAWADQAHgJAKgTQAIgNALAIQAMAIASgHIAigPIACgLQAEgTANAHQAIADASAMQAFgFAHgPQAGgOAGgBQgDgTAFgKQADgIAJgFQAAgNAIgLIATgWQAIgKAIAWQAKAZAGAAQAHAAAEAQQAEAQAGAAQAHABACAHIACARQABALAKgDIAXgLQALgFACANIABAZIAFARQAOAOARgCQAGAAAVgQQANgJAIARQAHANAWAAQAWgJADgDQACgDAIgQQAIgLAIALQAKAMAIgDQAJgEABAPQADASAEADIAKgBQAEgBAKgHQADgCANABQAKAAADAGQAZAAAKAHIAJAEQAIgIAHgDQAJgGAHAIIAegSQAQgHAHAHQAFAGAIgGIAQgRQAZgXAfAVQAgAYAZAOIAoAXQAOAJApAAQAaABgPAOQgLALh5ASIgBAAQgQgCgZgGIgpgIQgugIgkAFQgKABgeAGQgZAFgPABQgOAAgbgFQgdgFgNAAQgWgBgPAGIgdAQQgcANgrgOIgigNQgVgIgPABQgXABgiAQQgVgSgeAEQgTACgKANIgJAMIAAABg",
      );
    this.shape_21.setTransform(393.4339, 191.3188);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#04A48C")
      .s()
      .p(
        "AgTCFQgTgMgJgEQgLgEAAgRQAEgXgBgOQgBgKgFgZQgEgUABgLQACgPAGgGQAGgFALAAQAHAAAEgYQAHgrAFgTQAJgdAHAYQAKAdABgBQABgBAEAZQAEAaAQgFQAQgGgFALQgMAZgBAGQgDAPAJAAQARADAFAEQAHAFgKAYQgPAkAAAnQgHAAgJACQgTAFgHALQgDAHgHAAQgFAAgGgDg",
      );
    this.shape_22.setTransform(360.9153, 186.0586);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#04A48C")
      .s()
      .p(
        "ADYBUQgggNgOgDQgbgHgVAJQgFACgQAMQgNAKgIAAQgJABgRgCIgZgBQgygBgvAKIklgMQgsgBgHgEIACgHQAIgLAHgOQAFgJAHgFIAUgSQAKgKANgGQAPgFALgJQAMgKARgGQAVgHALgHQANgHAGgcQAGgbANgFQANgFAMAVQANAXAMABQANABANAhQANAjAPAGQAOAGgTAOQgOALAiAAQAoABALgGQAHgDAPgLIAVgLIAegJQAUgDAIAKQALANAYACIA7ADQAXAAAGgIQAEgFAbAGQAcAHAMgKQALgKAEAMQAGARAOgDQAOgCAEATQAEAUATAAQASgBAPAIQAPAJAVAAQAlABgoAKQgpAKhAAEQgWgGgxgTg",
      );
    this.shape_23.setTransform(411.684, 186.8769);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#288736")
      .s()
      .p(
        "AuRByQj8gZBtgpQBMgdCjgTQA8gGBNgNQBLgLBzgFIBzgEIAlgDQA2gDAUAAIA/AAQArAAAFgCQANgHAIgBIAhgHIBJgVQAogLASADQAHABArgXQAcgPASAEQAMADAQAQQAqAoAzAAQAdAAAzAHIBiARQAQgCAtAEQAmACAsgHQAqgIALAIQAJAHAPgFQARgFAMAJIAXAZQAMAFAFAAQAMgBAZAAQAEAAAGACIAJAFQAPAGAOgFIAMgFQAHgCAGACIAaAJQAQAHALgBQAJgBATgFQARgDALAGIALAHQAHAEAGABQAFABAKgBQAKgCAEABQASACAGAHIAFAIQADAFADACQAHAHAQADQAQADAHAEQANAJAFAJQADAFAAAOQr8AVmaAGQjfAEioAAQk+AAh4gMg",
      );
    this.shape_24.setTransform(414.8294, 200.4209);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#98C663")
      .s()
      .p(
        "AqcA9QBUggBOgIQBHgHBlggQBegeBKgEQBHgEBXgcQBPgbA7AAIB0gFQA7gEB3AJQBlAIEGACQBOAEgMALQgOANiNAaQj7AuqjBAQlSAgkgAXQBTgRBngog",
      );
    this.shape_25.setTransform(109.8743, 206.526);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_3_0,
    new cjs.Rectangle(373.7, 172.5, 150.2, 50.19999999999999),
    null,
  );

  (lib.ClipGroup_3 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixARZMAAAgixMBFjAAAMAAAAixg");
    mask.setTransform(222.625, 111.325);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#028063")
      .s()
      .p(
        "AgeAmIhfgFIhngCQg5gBgXgEQgNgDAFgFQADgCATgJQAsgTAEgRQADgRAVAOQAeAVARgDQARgDASAOQAQANAOgFQARgFATAGQARAGADgDQADgCAVACQAUACAKgLQAJgLATAEQAVAFAMgFQANgHAOAJQASAJARgCQARgCAQAGQAOAGAPgEQAUgGAsAIIAzALQAvAHhMADIiAAGQg4gFgsAFQgQACgXAAIgigBg",
      );
    this.shape.setTransform(775.7626, 222.9563);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#2CA196")
      .s()
      .p(
        "AAIBJQhFgEg/gJQg5gIALgIQAYgKAAgIQAAgIARgIQAWgKAIgNQAJgNAPgGQAOgFAEgGQAEgIAUgDQAdgGATgJQAXgKAMAQQALAQALgFQANgGAJARQAKATASgDQAWgEAMATQADAGAMAlQAHAWgUAIQgNAFg1AFQgNABgVAAIgygBg",
      );
    this.shape_1.setTransform(777.1835, 218.3952);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#5C9E32")
      .s()
      .p("ArnBQQjbgjD7hOQD6hPJuARQE4AJEPAZQFLAkrmBBQjpAVk2AVIkJARQifgChtgRg");
    this.shape_2.setTransform(663.4762, 232.6171);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#028063")
      .s()
      .p(
        "AkKAyQgjgHgHAAQgDAAgHACIgLABQhKABAWgSQASgNAvgLQAggHAlgdQAdgYAMAGQANAFAHALQAIANAOAIQARAJAtgBIBWgCQAOAAAQgLQATgLAFgBQANgBAYAJQAcAKARACQAWACAdgHQAegHAMABQAFABAMAKQALAKAJACQAWAEA5AIQAsAFAJAFQAKAGgMABIhBAEIgVgCQgTgDgEAAIgwACIg4AEIg4AFIgeACQgzAChDAAIiKAEIg4ABQgaAAgJgBg",
      );
    this.shape_3.setTransform(680.0701, 221.3297);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#04A48C")
      .s()
      .p(
        "AhhBlIgMgdQgHgRAJgJQAOgNADgJQAEgQgDgJQgEgMgCgLQgBgHASgLQASgLgEgRQgBgGANgEQARgFACgCQAggZATAJQALAFAMAMQAKADAUAYQABABABATQABAOAPgBQAJgBAEAMIADAUQABADAGAMQAEAHgGAFQgFAFABAMQAAALgIAHIgVAZQgKAMgQgBQgrgEhFAHIgOAAQgRAAgFgFg",
      );
    this.shape_4.setTransform(686.1857, 213.5888);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#04A48C")
      .s()
      .p(
        "AiRBCQgdgCAHgKQAMgQgCgEQgEgHAGgGQAJgKADgOQAEgPAOABQARABAJgLQAJgLAUAAQASAAAHgSQAHgRAWAJQAcAMAOgJQARgLAfAgQAiAkAOABQASABAKAXQAKAYAEABQAJABgFAJQgGAIgLAAQhnAAhRgEQgcgCgQAHQgJADgVAAQgQAAgWgCg",
      );
    this.shape_5.setTransform(737.3488, 218.3293);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#288736")
      .s()
      .p(
        "ABFAkQnShqC6AaIAYAAQASgBAfAGQAaAFAXgCQAXgCAaAFQAZAFANgFQAIgEAaAKQAYAKARgFQARgEAfALQAfAMAqAEQAhAFAIAHQAIAGAUACQAIAAgQAKQgbAQgjACIgTABQgrAAg+gOg",
      );
    this.shape_6.setTransform(383.2864, 220.8321);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#5C9E32")
      .s()
      .p(
        "ADpBGQgogJgXALIgTgBQgGgHgIAAQgGgBgJACIgPACQgFAAgHgDIgMgGQgMgFgTAEIgeAIQgjAKgggDQgNgBgYgEIglgGQgagCgvAJQgZAGgvgEQgdgDgwAAIhNAAIgGABIghgDQg3gFAqghQAWgRAogcQAEgIAmADQAsADAVgOQARgLAWgHQAJgEAFgNQAEgOAfANQAiAOAIgGQAKgHAYARQAWAOAAgCQAAgEAKAAQANAAAFgFQAFgFANgDQAPgDAJgGQAMgIAFAJQAFAJgDAPQgDAMALAAQAJAAATgJQANgFARAHQAWAKAGAAQAUACAYgCQAfgCAVgGQAPgEAdAOQAaAMAPgIQAPgIAIANQAKAPAVgDQAYgEgGAIQgGAJAFAAQAGAAARgFQARgEAQAFQAEACAKAOQAJAOAGABQBQALAFAMQgYgDgnAHQgMADgUgDQgYgDgIAAQgOAAgTAFIghAKIgNABQgSAAghgHg",
      );
    this.shape_7.setTransform(371.1954, 217.7567);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#288736")
      .s()
      .p(
        "AkdA4QArgRAqgCQAigBABgQQABgTAGgBQALgBAPgBQAOAAAGgCQAGgCAHgLQAHgKAJgDQAIgDAcgQQAcgOASAFQALADAIgJQAJgKAhAEIBQAJQAlAFAGAFQAJAJBXAFQAIAAAAADQAAACgRAAIgdABQgPAAgbgGIg2gNQgTgFAKAKQATATALAGQAWANAcgBQAQgBAXgHQAOgEASAGQAZAIgDABQgCACgegEQgSgCgYAHQgUAEgQgFQgKgDgfgDQgagCgSgKIgcgUQgKgFgeABQguACgLACQgZADgMAJIgWAPQgKAGgCADIASgDQAegFAgAHIBHAPQAjAHAaABQAjACgOADQgOADgngFIhMgIIg4gGQgXgEgRAAQgVABgUAIQgNAGgCANQgCAKgVADQgTADADAJQADAJgWADQgbAEgYAAIg3ABIgDAAQgcAAAogQg",
      );
    this.shape_8.setTransform(421.806, 218.1706);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#5C9E32")
      .s()
      .p(
        "AgeBnQgUgKgVACQgWACgTANQgBABgHgBIgLgDQgJgEgQADQgUAFgHgBQgMgCgOgEIgTgFQhQABgbgFQgZgFADgOQADgKAIABQAMAAAHgIQAHgIAZgEQASgEgCgKQgDgLAGABQANACAIgDQAKgFgEgFQgHgJAAgDQAAgFgJgEQgHgDADgEQAEgFAKAAIAXgDQAIgCAAgOQgBgMAJAAQAQABAHgDIALgDQAFgDACgEQAGgRAHAFIAMALQAYAFAGgSQAFgQAQAFQAGACAKgPQAKgNAFAGQAKALAEAJQAAABAMAAQALgBgBADQgDAJACAFQABAFAIAGQALAJgRAXQgHAKAAACQAAADAMgEQACgBAJAGQAKAGACgBQAFgDAEgNQADgMAEAAQALABASAKQAzADARANQALgFAFAAQAJgBAGAGQASAQAQAWQAGAIAMADQATAEAMAGIAgAMQALAEACAKQABAEAvAOQArANgDABQgSAChPgGQhNgFgVADIgaAFIgbADQgJABgMgEIgVgGQgVgGgZAHQgIAGgHADIgHABQgLAAgTgJg",
      );
    this.shape_9.setTransform(439.6886, 214.2077);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#8DC68E")
      .s()
      .p(
        "AL9AhQgsgKgqAAQg4ABhUgGQhmgIgVgBIgwgBIgWABIjBgCQg7gBghAGQgnAGgdABQgtACh2gBIiegCQhOAAgFAGQgVABgggEQg1gHhsACQjagGgmAAQg8AAAUgFQAKgDAWgCIBsgMQAHgBBFABQBDABBMgKQBEgKAxAHQAtAGAkgHQAwgJBBAJIBoASQA/AHAUAAQAjABASgGQALgEAggCQAjgDAngLQAkgLANAIQAJAGARgJQAUgLAXALQAWALANgKQAQgMAjAPQAlAPAJgEQAOgGBaAIIB0AJQAlAABoATQAWAEAmACQAsACAkgBQAwgDASAGQAUAFhOAHQgYACgVAAQggAAgXgFg",
      );
    this.shape_10.setTransform(562.3726, 219.2892);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#DCE383")
      .s()
      .p(
        "Ak/AlQATgMACAJQACAKAEgBQAEgCAVgDQAVgEATgGQATgHADAEQADADAFgCIAQgFIAJgFQADgCAGABQAIACAGgBQAPgDAJgDQAQgGAQgNQAPgMAWAHIAeAJQAsgFALgPQAHgKAUgCIAsgCQAJgBAUABQAJABATgJQASgIAIAEQAIAEAIgDQAJgDAPgBQARgBAQgFQARgGATgBQAagBAPgDQAggGgKAKQgKAJgqADQgWACgwAMQgnAJgqgBQgsgCgMAGQgUAJgHABQgNACgYAIQgUAGgbADQgeACgYAGIgyANQhTAQgVAHIgxASQgnAMgcAAQgqAAA+glg",
      );
    this.shape_11.setTransform(423.6977, 200.9339);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#DCE383")
      .s()
      .p(
        "AmKBUQgZgBAPgGQAagJADgDQAEgEATgCQAXgCAQgIQAQgHAQABQANABAIgFQAHgGAPACQAQADAPgIQAJgFAcgIQASgFAOgMQANgNAPAJQAOAHACgDQAEgEATADQAUABAGgHQAHgJAYABQAgACAJgCQAYgGATgDIAKABQALAAAHgCIARgFQAKgDAGgGQAHgGATgCIAwgBQAXgBAJgGIAYgQQASgIAPgBIAogDQAWgCAKADQAPAEAMAAQAcACgQAFQgRAFgggEQgegEgaAHIgxAPQgWAGgYADQgeAEgSAEQg6AMhgAXIgvAKQgOACgbACQgWABhFAUQhTAXgaAFQgTAEgmANQgPAFgVAAIgQgBg",
      );
    this.shape_12.setTransform(436.8497, 202.8385);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#DCE383")
      .s()
      .p(
        "AnjBNQgLgBARgFIAtgOQARgFAeADQAdADAUgIQAYgJAdgEIA9gJQAfgEAngKIA2gOQAOgEAdgLQAdgJAagEQASgDAegMQAVgIANADQAMAEASgJQAXgLAagBQASgBAlgJQAbgGAcAGQAXAFAjgIQAhgGAeAIQArAMASAHQAUAHAPAJQAFAEg2gOQhJgRgfAGQgNACgmgGQgggFhFAUQhEAUhgAQQhdAPgLAEQgOAEg8ANQgxALgNAHQgMAGgbABQgeABgRAGQgRAHgbAFQgaAFgMAEQgTAHgVAAIgDAAQgTAAgggEg",
      );
    this.shape_13.setTransform(469.8551, 202.5068);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#8DC68E")
      .s()
      .p(
        "AolBQQBfg1DNgnQDbgqEqgRQB+gHCggFQgLAKgFADQgHADgpANQgkAKgSgNQgRgNgUAHQgSAHgJgGQgJgGgvASQg4AUg1AHQgeAEgvAAQglgDgOABQgWADgTAVQgVAZgaABQgaABgDgTQgCgMgFACQgZAPgUAIQgeALgDgHQgDgMgLgBQgTgBgOAGIgxAXQgsAYgRAGQgbAMgPgOQgLgLgdAQQgeAPgOgPQgRgRggADQgUACgPAHQgIAEgfAGIgVADQgGAAAHgEg",
      );
    this.shape_14.setTransform(400.4264, 198.0135);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#9DD3D0")
      .s()
      .p(
        "AM3AnQgTgBgrgHQghgGhzgDQhOgCg7AIQgeAEh3gQIjWgbQg6gHgwAAQgVAAhigFQhggGhZABQhWAAhZAFQhgAGgrAAQhbACiEgKQiDgJCYAAQAlAAB8gEQB1gDBoAAQDWAAD/AOQAgACCnANQB/AKBJAAQBXABCXANQCGAMAzAJQArAHgJACIgJAAQgRAAgtgDg",
      );
    this.shape_15.setTransform(574.5144, 196.7205);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#B4D48D")
      .s()
      .p("EgmWACnQgHgQAHgZQAMgxBDgsQDXiPKkgnQEcgQHLgBQH5AAHwAVQT8A2HmCbQFtAkA7AlQAeASgrAMg");
    this.shape_16.setTransform(573.2308, 207.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#8DC68E")
      .s()
      .p(
        "An1A+QgCgGAHgEIAagNQAOgJAMgFIApgQQAWgJAXAJQAgAMAdAAQAhAAA9AFQAyAAAVgeQATgbATAFQAmANAagDQAkgEAJACQAHABAVgDQAYgEAXgPQAUgMAGABQARADAbANQAYAKAQABIAaABQADgBAQgLQALgIAOAFQAOAGALgHQAIgFALgEQAIgEAQgMQAPgNAPAOQAQAPAEgCQAHgEAMAKQAMAKAGgCQAKgDARAHQASAGAUAPIALASQAHASgWADIkAAHQj9AGhfANQhsAPiNAAQiCAAgEgIg",
      );
    this.shape_17.setTransform(432.1797, 193.2302);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ALHA0QhPgBlfgKQkdgJj/AAQlyAAijgLQjAgOCtgZQANgCADgKQACgHANADQANADALgDQAOgDARACQAdACAiAAIAegBQAMgBALADQALAEALAAIAYACQAJACATgGQARgFAQAEQANADACgBQAGgDAmADQAkACAggFQAbgFAXADQATADAPgCQAOgIAIgDQAKgEAIADQALAEATgIQARgIAMAIQASALAJADQALAEALgBQAFgBAXgJQAUgHAHACQAJAEAeABQAWAAAIAKQAHAJAMgDQAUgEATAFQASAEAZgKQASgIAPANQASgNAiADQAfAEADAHQADAJACAAQAIAEAjgEQAygUAdAMQAlAQAOgCQAdgEAgADIA9AHQBSAFAYAFQASAEAdABIAggBQgFgJAGgBQAJgDAhAGQAKgJAgAGQAeAFANALQAGAGASAKQAOAIACAGQADAGAlACIi3gCg",
      );
    this.shape_18.setTransform(576.2445, 192.8875);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#44A747")
      .s()
      .p(
        "AkJAvQAPgJAJgJQAJgFAigDQAcgCAUgLQASgJATgBQAUAAATgJQASgIAUAAQATAAATgNQATgMAXAAQATAAAJgFQAHgFAbACQAzAEAfgBQAMABAgAIIAhAGQALAAgEAEQgEADgegFQhHgMgngBQgVAAgHAEQgIAEgGABIgfAAQgUAAgHABQgEABgPALQgMAKgNAAQgcAAgUAHQgGACABAIQAAAIgNAAQgJgBgPgGQgLgFgQAEQgOADgEAGQgEAFgNADIgfACQgQABgPAKQgSAMgPAFIgIACQgDAAAJgGg",
      );
    this.shape_19.setTransform(358.6436, 199.9701);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#288736")
      .s()
      .p(
        "AoHBIQACgYARADQANADgEgNQgHgUAIgOQAGgJgIgkQgFgaAWAAQAMAAAZgOQANgHAOAXQAOAVAPgMQAVgQAQAEQAOAEAYgCQAUgCAbALQAbAMASgDQANgCAIAGQAUAQANAGQAUAJAKgLQAngpATAPQAQAMAIADQAJADgRgTQgQgUAGgLQAGgKANABIAQgKQAKgHANATIAHALQACgPAGADIAOALQAGAGAIgFQAIgFAFAGIAIAKQADACALgSQALgTAGABQAGACACAKQABAJAEAAQADAAAEgDQACgCAFAFIALAHQAFAAAFADQAKAFAGAAQAOgBAbAEQAaAFAWgFQAXgEAbADQAaAEAMgGQAMgGAfAEQAeAFAUgDQARgDAXAFIAsAHQAKABAEAKQAGAPgNANQgRAPgpABQhwAChiAEQi7AHh8AWQh9AWitAXIiVATQgGgIACgVg",
      );
    this.shape_20.setTransform(400.6537, 195.3558);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#028063")
      .s()
      .p(
        "AEeB2QgKgNgTgCQgdgEgWASQgigQgXgBQgPgBgVAIQgWAJgMAEQgrAOgbgNQgTgMgLgEQgPgGgWABQgNAAgdAFQgaAFgPAAQgPgBgZgFQgdgGgKgBQglgFguAIIgpAIQgZAGgQACIgBAAQh5gSgLgLQgPgOAagBQApAAAOgJIAogXQAZgOAggYQAfgVAZAXIAQARQAIAGAFgGQAHgHAQAHQAJAFAWANQAGgIAJAGQAHADAIAIQAEgBAFgDQAKgHAZAAQADgGAKAAQANgBADACIAOAIIAKABQAEgDADgSQABgPAJAEQAIADAKgMQAIgLAJALQAHAMADAHQACADAWAJQAWAAAHgNQAJgRAMAJQAVAQAGAAQARACAOgOIAFgRIABgZQACgNALAFIAXALQAKADABgLIACgRQACgHAHgBQAGAAAEgQQAEgQAIAAQAGAAAJgZQAIgWAIAKIATAWQAIALAAANQAJAFADAIQAFAKgDATQAGABAGAOQAHAPAFAFQAJgDARgMQANgGAEASIACALQANAEAVALQASAHAMgIQALgIAIANIARAcIAWgDQALgBAEADQAEADAAAFQgBAEgGAFQARACADAHQADAHgJAKQAGAAAFgCQAFgDAMAGQAMAGAEAIQAJAXhQgBIgRAAQgEgHgHgCIgRgFQgKgDgHAAQgLADgFAAIgRgIQgSgJgRAKQgEADgJAJQgHAHgGACIgBABg",
      );
    this.shape_21.setTransform(425.5409, 191.3188);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#04A48C")
      .s()
      .p(
        "AgBCBQgHgLgSgFIgRgCQAAgngPgkQgKgYAHgFQAFgEARgDQAJAAgDgPQgBgGgMgZQgFgLAQAGQAQAFAEgaQAEgZABABQABABAJgdQAIgYAJAdQAFATAHArQAEAYAHAAQALAAAGAFQAGAGACAPQABALgEAUQgFAYAAALQgBAOADAXQAAARgLAEIgbAQQgGADgFAAQgHAAgEgHg",
      );
    this.shape_22.setTransform(458.0347, 186.0586);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#04A48C")
      .s()
      .p(
        "AmHBfQgogKAlgBQAVAAAPgJQAPgIASABQATAAAEgUQAEgTAOACQAOADAGgRQAEgMALAKQAMAKAcgHQAbgGAEAFQAGAIAXAAIA7gDQAYgCALgNQAJgKATADIAeAJIAWALQANAGAJAIQAKAGAogBQAiAAgOgLQgTgOAOgGQAPgGAOgjQAMghANgBQAMgBANgXQAMgVANAFQANAFAGAbQAGAcANAHQALAHAVAHQARAGAMAKQALAJAPAFQANAGAKAKIAUASQAHAFAFAJIAPAZIACAHQgHAEgsABIklAMQgvgKgyABIgZABQgQACgJgBQgJAAgNgKQgRgMgEgCQgVgJgbAHQgOADggANQgxATgWAGQhAgEgpgKg",
      );
    this.shape_23.setTransform(407.266, 186.8769);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#288736")
      .s()
      .p(
        "ABVB6QmagGr8gVQAAgOADgFQAFgJANgJQAHgEAQgDQAQgDAHgHQAFgEAGgLQAGgHASgCQAEgBALACQAJABAFgBQAGgBAHgEIALgHQALgGARADIAcAGQALABAQgHIAagJQAGgCAHACIAMAFQAOAFAPgGIAJgFQAGgCAEAAIAmABQAEAAAMgFIAXgZQAMgJARAFQAPAFAJgHQALgIAqAIQAsAHAmgCQAtgEAQACIBigRQAzgHAdAAQAzAAAqgoQARgQALgDQASgEAcAPQArAXAIgBQARgDAoALIBJAVIAhAHQAIABANAHQAFACArAAIBAAAQATAAA2ADIAlADIBzAEQBzAFBLALICJATQCjATBMAdQBtApj8AZQh4AMk+AAQioAAjfgEg",
      );
    this.shape_24.setTransform(404.1084, 200.4209);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#98C663")
      .s()
      .p(
        "ADlA/QqjhAj7guQiNgagOgNQgMgLBOgEQAmgCCMgCQCBgCA4gEQB4gJA6AEIB0AFQA7AABPAbQBXAcBHAEQBKAEBeAeQBlAgBHAHQBOAIBVAgQBnAoBSARQkggXlSggg",
      );
    this.shape_25.setTransform(709.0257, 206.526);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_3,
    new cjs.Rectangle(295.1, 172.5, 150.2, 50.19999999999999),
    null,
  );

  (lib.ClipGroup_2_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(222.625, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#44A747")
      .s()
      .p(
        "AiwATIACgEQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAIASgEIANgDIABgDQACgBALABQAKABAFgEQAEgEAGACQAKAEAIABQAKABgCgCQgDgDABgBQADgDAJgCQAEgBAUAAIALAAIAUgCIAQgDQAIgBAKgEQAKgFADADQAGAFADAAIAPgBQAEgBACABQADACADAAQAKABAFgBQACAAAAAAQABgBABABQABAAAAAAQAAAAAAABIgDAFQAAACAGgDIAKgEIAGABQAHABAKAAQALABAAADQAAABAAABQABABAAAAQAAAAAAABQABAAAAAAQAIgBAQAEQAQADgHACQgHADgPgBIgPgCIguADIgzAGQgUADgbAAQgaAAADgBQADgDAZgEQAUgDgGAAIgtADQgKABgOADQgPADgGAAIg5ACQgXAAgLACIgJACQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBg",
      );
    this.shape.setTransform(388.385, 99.865);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#62BDB3")
      .s()
      .p("AgxAFQgBgDAMgBQAMAAgBgBQAAgEAHACIAHABQAAgBAUgDQAjgFAHAFQAEADgIAGIgfABIg+AEg");
    this.shape_1.setTransform(408.3946, 98.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#2CA196")
      .s()
      .p(
        "AhxAZQADgDAPgFQARgGAFgDQAGgDACgEIAFgJQAHgIAHACIASAJQALAEABgDIgBgKQABgFANgBQAMgBgBgCQAAgEAFAAIAQACQASAEAHgIQACgCAFAEQAHAFALgEQAKgFACAHQABACAAABQABAAAAABQABAAAAAAQAAAAAAAAQAGgGAEARQARAFgJAFQg7AEgpAMQgYAIgTABIgnACQgWADgLAAQgPAAAFgGg",
      );
    this.shape_2.setTransform(382.3101, 98.253);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#62BDB3")
      .s()
      .p(
        "ABAAOIgzgCIhMgDQgSgBAIgCQANgEgBgCQgBgBALABQANAAAEgDQAEgDAEgBQAFgBAEgEQAFgEACAEIABAIQAAAAABABQAAAAABAAQAAAAABAAQABAAABgBQAEgCACACQAKAGANgCQAGAAAEAEQAFADAEAAQAFgBAIADIARAFQAEABgEAAIgKgBg",
      );
    this.shape_3.setTransform(423.1848, 97.7255);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#62BDB3")
      .s()
      .p(
        "AhGAgQgCgEgDgCIgEgEIgBgEQgBgCACgDIAEgGQADgDAFAAIAKACIAHABQABgBgDgGQgEgFgCgGIgBgFIAKABIANAEQADAAgCgHQgCgGAFgCQAFgCAAgCQAAgEAFAAIAVABQAKgBAFALQAEAJAEgEQAFgEADAFQADAFAEgDQAEgDgBAIQACAAABAFQAAADAJgCQALgDABAEQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIAAAHQACAGAIgFQAJgFAAAHQABADgCAEQABADgCACQgFAGgOABIgTABQgCACgRAAQgUAAghACIgbABIgDAAQgGAAgDgDg",
      );
    this.shape_4.setTransform(401.935, 95.9286);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFEA37")
      .s()
      .p(
        "AqlB+Ih7gEQAdgTA3goQgBgNAegNQAPgHAXgHIAjgOQAVgJAagCQAZgEAMADIAWADIA1AAQARAAAIAFQAHAFAQgCQANgCAWAKQARAHAOgJQATgNAzgNQAygOArgEQAfgEAYAKQAZAKARgBICHgDQAkgBAYgEQAigGASgBQAbgDgDgCQgKgHAPgLQAUgPA3gJQA1gIALAIQAWgDAVACQAUACAXgEQAZgDAQADQARADAKgBIArgGQAZgCAJAFQATgHAIgBIAlgDQAZgDgBgEQgBgJAEgDQAIgGADAAQAIAAALgDQAJgCArACQAqACAVgHQliCShYAkQg6AXl0AXQkrATizADIhpABIgXAAg",
      );
    this.shape_5.setTransform(447.675, 116.3563);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#62B666")
      .s()
      .p("AAAAIQgKAAAAgGQABgDAGgFQADgDACAEQAEAEACAAQAFAHgFACIgCAAg");
    this.shape_6.setTransform(354.8555, 104.5769);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#62B666")
      .s()
      .p(
        "Ag5AKQgDgCAEgEIABgEQACgCAIACQAKAAAFAAQAFgCABACQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQAEgBAKABIAGgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACABQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIACgCIgCgCIAFgBQAHAAADgCQADgBACACQABABAAAAQABAAAAABQAAAAABAAQAAAAAAAAQADgCALAAQAGAAAGACQAFABgGACQgSgBgPAFIgNABIgTAEIgVADQgNADgJABIgFgCg",
      );
    this.shape_7.setTransform(362.8694, 103.5969);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#62B666")
      .s()
      .p(
        "AgLAJQgBgDgFgCQgGgCABgCIAGgCQACgBAGgBQAHgBABgDQAGgEAQAIQAEACgHACQgIAEAAADQAAADgEAAIgMAAIgCAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg",
      );
    this.shape_8.setTransform(350.4962, 105.6771);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#62B666")
      .s()
      .p(
        "AgVAGQAGgDABgBQABgCAFAAQAFAAADgBIAGgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgDAFABIAHAAQAEAAACACQADACgCADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgIACIgVAFIgaADQABgCAHgCg",
      );
    this.shape_9.setTransform(344.6531, 107.0458);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#2CA196")
      .s()
      .p(
        "AinAyIADgDIAOgKQAKgHADAAIAagJIAhgKQAJgDAMgIQAMgJAMgDIASgFQAGgCAJAAQAJgBAIgGQAHgGANgBQANgBAGgEQAHgEANgDQANgEAHgEQAHgEAIAAQAKgBAKgEQAVgJAoACQh2AbgrARQgVAJgnANQgjALgQAHQhNAhgJAIQgFAFgLAFIgJAEg",
      );
    this.shape_10.setTransform(346.475, 111.0638);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#2CA196").s().p("AgQAAQAFgEANgBIAcgCIg7AQQAHgEAGgFg");
    this.shape_11.setTransform(383.05, 105.05);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#2CA196")
      .s()
      .p(
        "Ag2ARQAHgFAKgCQAIgBADgGQAEgEALgBQALAAAJgGQAHgFALgBQAKgBAIgJQAKgJAIABQANABAHgEQAJgEAFgBIAJAAQgzAVgUAFQgUAGg0AXQgxAWgTAEQAGgKAtgOg",
      );
    this.shape_12.setTransform(366.2, 111.075);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#2CA196").s().p("AgJABQAJgIARADIghAKIAHgFg");
    this.shape_13.setTransform(392.025, 102.1966);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#2CA196")
      .s()
      .p(
        "AgnAQQAJgCAJgHQAJgGAFgBQAFAAACgEQADgEAHgCIAZgHQANgEgJAFQgdARgJADQgQAIgPAEIgLAEQAAAAgBgBQAAAAAAAAQABgBAAAAQABgBABgBg",
      );
    this.shape_14.setTransform(394.8021, 113.4654);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#2CA196")
      .s()
      .p(
        "AhOAlQgBgBAFgDIAJgIQAGgFAEgBQADAAAFgDQAGgDAHgCQAIgCAGgFQAFgEAGgBQAHgBACgBIAJgGQAGgCADgFQADgEAIgBQAIgCALgGQAJgFAEgBIAQgBQAGAAgKAEQgfALgPAIIhHAjIgcANIgGACIAAAAg",
      );
    this.shape_15.setTransform(408.1218, 106.8643);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#2CA196")
      .s()
      .p(
        "AjXBPIAKgJQAFgEAKgBQAXgOATgCQAGAAASgKQASgJAPgBQAGgBAKgGQAJgGAEAAQAHAAAPgHIAKgGIAPgFIAQgIIAQgHIAXgLQAPgHAEgBIAPgIQALgHAIAAQAHAAANgFQANgFAEAAQAEAAALgGQALgFAHAAQAHAAASgEQASgDAFAAIAGAAIgUAFQhHARgRAIIgvATQgkANgEADQgEADgXAJIggAMQguASgIAFQgGAEgdAKQgdAKgNADQgKACgaANIgMAFIABgBg",
      );
    this.shape_16.setTransform(386.3103, 110.7279);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#83BD46")
      .s()
      .p(
        "AnrBaQgcgDAQgYQAMgSARgLQATgLAlgLQAPgFAggNQAfgNAZgHQAdgIBEgYIBTgeQARgGAaACIAwAEIAwABQAXgBAKgCQARgFA3AHQA+AJAsgFQArgEAYAHQAgAKAsAAQAyABAZAGQAYAFAdAAQApAAgdAQQgRAJguAQQgQAGgzACQg3ACgnAMQg0APj/AnIAagSQAPgMARgKQAQgKAbgMQAXgLAOgKQAagRABgOQgZASggAPQgQAHgIAKQgHAIgQAHQgRAGgGAIQgFAIgQAHIgcAMIgjANIgDACQiQAVgaACQgnADhSACIgkAAQg6AAgYgDg",
      );
    this.shape_17.setTransform(401.2098, 112.4594);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#83BD46")
      .s()
      .p(
        "Aj7BmQgwgEgeAAQgUAAADgDQACgDATgHQAzgWAGgPQAHgTAsgRIBOgcIA8gaQAdgMAfgIQAdgHA9gKIBpgSQAlgGApACQAvACAYgCQAmgDgbALQgPAGgyAPIgkAKQgHADggAPQgZALgiAJQgpALgnAOQgwASgMAIQgYAQgpAYQgaAQgRAEIg8AKQgfAGgiAAIgPgBg",
      );
    this.shape_18.setTransform(347.1123, 113.2632);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#B4D48D")
      .s()
      .p(
        "AFeAnQgOAAgxgJQgpgIhMAEQhGAEgLgMQgLgOgrABQgtABg5gHQg3gIgzACQg4AChKgHQhcgJgagBQg8gCAWgGQAWgGA+gCQAmgBAzAHQAsAGAfgDQAdgDAYAIQAXAIAmgGQAngGA6AJQBHAKAtgBQA+gCB0AJICnAMQASABgtAPQgsAOglAAIgDAAg",
      );
    this.shape_19.setTransform(460.8494, 103.2946);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#98C663")
      .s()
      .p("A4NCPQCFiPDwhFQDWg+FLgKQEGgIGxAZQD/AOI5AlQLeAqhQBbQgoAui7Alg");
    this.shape_20.setTransform(454.9931, 112.6015);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgwAFQgCAAACgHQADgHAFgBQAFgBAHADIAPAIQAGACANgCQAMgCACADQABADAOgFQAOgHABAGQACAJgXAEIgSABQgXAAgkgHg",
      );
    this.shape_21.setTransform(442.3955, 98.6981);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAOQgLgGAFgJQADgHAHgEQAGgDADABQAFACgDAKQgEARgHAAIgEgBg");
    this.shape_22.setTransform(441.1531, 98.3165);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p("AhCAJIALgOQAEgFAKACIANABIAOACQAIABAGgDQAFgDAJADQAHADAIABQAGABAFACQADACAUAFQALACgVABg");
    this.shape_23.setTransform(431.8528, 98.7214);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABAWQgEAFgFACQgIADgDgDIAAgFIABgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIADgBIADgCIADgGQAAAAABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCgDQgBgCAEgFQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgEQgBgDADgGIAEgGQAGgIAGALIAHAVQADAIgHAdQgIgBgGgKg",
      );
    this.shape_24.setTransform(419.1807, 96.2359);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#FFFFFF").s().p("AgGgEQACgLAEgBQAEAAADAIQAGALgUAOQgCgGADgPg");
    this.shape_25.setTransform(422.8682, 97.6235);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FEF6B5")
      .s()
      .p("AB8ASQgdgBnRgfIDJgGQDvgDC9AVQC/AViGACIgyABQhLAAhDgEg");
    this.shape_26.setTransform(481.9875, 101.8305);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AlzA+QAAgDAHgEQAJgGAHgHQAHgIAJgBQAKgBADgCQADgDAKgBQAMgBAIgGQAHgFAJAAQALAAAMgGQAHgEAHgBQgBgDAKAAIAUACQAGgBAEgCQAIgFAOgDIAIgPQAGgJAGABQAMAAAOgHQASgJAAAEQACAFAFgCQAJgDABgCIAHgGQAFgFAIAEQAOAHADABQALACAFgCQAHgCAIgJQAGgGAIADQAKAFAHgCQAHgBACAGIAEANQASgDAMgJQAIgFAKADQAJADADgDQAFgCAOAAQASACANgDQANgCAMABQAJABAFgDQAGgDANABQAOABAEgBQAGgBAIAAQAJAAAGgBQAHgCA8AJQA+AIAHAAIrCBsIgSACIgKABQgJAAAAgCg",
      );
    this.shape_27.setTransform(365.75, 102.9888);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_2_0,
    new cjs.Rectangle(300, 92.5, 145.3, 36.5),
    null,
  );

  (lib.ClipGroup_2 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(387.275, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#44A747")
      .s()
      .p(
        "ACoAUQgLgCgXAAIg5gCQgGAAgPgDQgOgDgKgBQgfgDgOAAQgFAAASADQAaAEADADQADABgaAAQgbAAgUgDQgkgFgPgBIgugDQgaAEgLgEQgHgCAQgDQAQgEAIABQAAAAAAAAQABgBAAAAQAAAAAAgBQABgBAAgBQAAgDALgBQAKAAAHgBIAHgBIAJAEQAGADAAgCIgDgFQAAgBAAAAQAAAAABAAQAAgBABABQABAAACAAQAGABAJgBQADAAADgCQACgBAEABIAPABQAEAAAFgFQADgDAKAFQAKAEAIABIAQADIAUACIAMAAQATAAAEABIAHADIAFACQABABgDADQgCACAKgBQAIgBAKgEQAGgCAEAEQAFAEALgBQAKgBACABQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAMACIASAEQABAAAAABQABAAABAAQAAAAABABQAAAAAAAAQAFAGgDABg",
      );
    this.shape.setTransform(221.5299, 99.865);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#62BDB3")
      .s()
      .p("AgNAFIgfgBQgIgGAEgDQAHgFAjAFQAUADAAABIAHgBQAHgCAAAEQgBABAMAAQAMABgBADIgBAEIg+gEg");
    this.shape_1.setTransform(201.5055, 98.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#2CA196")
      .s()
      .p(
        "ABHAcIgngCQgTgBgYgIQgagIgogEIgigEQgGgDAGgEIAHgDIADgIQAEgHADAEQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgCQACgHALAFQAKAEAIgFQAFgEACACQAGAIASgEIAQgCQAGAAgBAEQAAACALABQAOABAAAFIAAAKQABADAKgEQAJgDAKgGQAHgCAGAIIAFAJQACAEAGADQAFADARAGQAQAFADADQAFAGgQAAQgLAAgVgDg",
      );
    this.shape_2.setTransform(227.6287, 98.253);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#62BDB3")
      .s()
      .p(
        "AhJAOIARgFQAIgDAFABQAEAAAFgDQAEgEAGAAQANACAKgGQACgCAEACQABABABAAQABAAAAAAQABAAAAAAQABgBAAAAIABgIQACgEAFAEQAEAEAFABQAEABAEADQAEADANAAQALgBgBABQAAACAMAEQAIACgSABIhMADIgzACIgKABQgEAAAEgBg",
      );
    this.shape_3.setTransform(186.7152, 97.7255);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#62BDB3")
      .s()
      .p(
        "AAgAiQghgCgUAAQgRAAgCgCIgTgBQgOgBgFgGIgBgFIgBgHQAAgHAJAFQAJAFABgGIAAgHQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABgEAKADQAJACAAgDQABgFACAAQgBgIAEADQAEADADgFQADgFAFAEQAEAEAEgJQAFgLALABQAKAAAKgBQAFAAAAAEQAAACAFACQAFACgCAGQgCAHADAAQADAAAKgEIAKgBQABABgCAEIgGALQgDAGABABIAHgBIAKgCQAFAAADADIAEAGQACADgBACIgBAEIgEAEIgFAGQgEADgIAAIgCAAIgZgBg",
      );
    this.shape_4.setTransform(207.97, 95.9313);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFEA37")
      .s()
      .p(
        "AIlB9QizgDkrgTQlzgXg6gXIm6i2QAVAHAqgCQArgCAJACQALADAHAAQAEAAAIAGQAEADgBAJQgBAEAZADIAlADQAIABASAHQAJgFAZACIAsAGQAKABARgDQAQgDAZADQAXAEATgCQAWgCAWADQALgIA0AIQA4AJAUAPQAOALgJAHQgEACAcADQASABAiAGQAYAEAkABQA/ACBHABQASABAZgKQAXgKAfAEQArAEAzAOQAzANASANQAPAJARgHQAVgKAOACQAPACAIgFQAIgFARAAIA1AAIAVgDQANgDAZAEQAaACAWAJIAiAOIAmAOQAdANAAANQA3AoAdATIh6AEIgYAAIhqgBg",
      );
    this.shape_5.setTransform(162.25, 116.3563);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#62B666")
      .s()
      .p("AgFAIIgCAAQgFgCAEgHQADAAAEgEQACgEADADQAGAFAAADQABAGgLAAg");
    this.shape_6.setTransform(255.0622, 104.5769);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#62B666")
      .s()
      .p(
        "AAfAIIgVgDIgTgEIgNgBQgJgDgJAAIgPgBQgGgCAFgBQAGgCAGAAIAJABIAFABQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBQACgCADABQADACAHAAIAFABIgCACIACACQAEADADgCQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAGABIAOAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQABgCAFACQAFAAAKAAQAIgCACACIABAEQAGAHgKABQgJgBgNgDg",
      );
    this.shape_7.setTransform(247.0331, 103.5969);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#62B666")
      .s()
      .p(
        "AAGAKIgMAAQgEAAAAgDQAAgDgIgEQgHgCAEgCQAQgIAFAEQACADAHABQAGABACABIAGACQACACgHACQgFACgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgCAAg",
      );
    this.shape_8.setTransform(259.4123, 105.6771);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#62B666")
      .s()
      .p(
        "AAEAHIgVgFIgIgCQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgCgDADgCQACgCAEAAIAHAAQAFgBABADQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAGACQADABAFAAQAFAAABACQABABAHADQAGACABACIgagDg",
      );
    this.shape_9.setTransform(265.2469, 107.0458);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#2CA196")
      .s()
      .p(
        "ACnA4QgFgFgegNIgzgXQgPgHgkgLQgngNgVgJQgbgLhGgSIhAgPIAWAAQAaABANAGQAKAEAKABQAIAAAHAEQAHAEANAEQANADAHAEQAGAEANABQANABAHAGQAIAGAIABQALAAAFACIASAFQAMADAMAJQAMAIAJADIAhAKIAaAJQADAAAKAHIAOAKIADADIAYAUQgQgGgJgIg",
      );
    this.shape_10.setTransform(263.425, 111.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#2CA196").s().p("AgcgHIAbACQANABAFAEQAFAFAHAEg");
    this.shape_11.setTransform(226.85, 105.05);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#2CA196")
      .s()
      .p(
        "AAmAPQg0gXgVgGQgTgFgzgVQADABAFgBQAGABAJAEQAHAEAMgBQAKgBAIAJQAJAJAKABQALABAHAFQAIAGAMAAQALABADAEQAEAGAHABQAKACAIAFQAtAOAGAKQgTgEgxgWg",
      );
    this.shape_12.setTransform(243.7, 111.075);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#2CA196").s().p("AgQgEQARgDAJAIIAHAFg");
    this.shape_13.setTransform(217.875, 102.1966);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#2CA196")
      .s()
      .p(
        "AAeAQQgPgEgQgIQgIgDgdgRQgJgFAMAEIAZAHQAHACADAEQACAEAGAAQAFABAJAGQAJAHAJACQABABABABQAAAAABABQAAAAAAAAQAAABgBAAIgMgEg",
      );
    this.shape_14.setTransform(215.1089, 113.4654);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#2CA196")
      .s()
      .p(
        "ABJAjIgdgNIhGgjIgZgKIgVgJQgLgEAHAAIAPABQAFABAJAFQALAGAHACQAIABADAEQAEAFAFACIAJAGQADABAHABQAFABAGAEQAGAFAHACQAIACAGADQAEADAEAAQAEABAGAFIAJAIIAEAEIAAAAIgGgCg",
      );
    this.shape_15.setTransform(201.8007, 106.8643);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#2CA196")
      .s()
      .p(
        "ADNBLQgagNgKgCQgNgDgdgKQgdgKgGgEQgEgDgVgJIgdgLQgzgTgIgFQgEgDgkgNIgvgTQgRgIhHgRIgUgFIAGAAQAFAAASADQASAEAHAAQAIAAALAFQALAGAEAAQADAAAOAFQAMAFAIAAQAHAAAMAHQALAIADAAQAEABAPAHIAXALIAQAHQAIAFAIADIAPAFIAKAGQAPAHAHAAQAEAAAJAGQAKAGAGABQAPABASAJQASAKAGAAQATACAXAOQAKABAFAEIAKAJIABABIgMgFg",
      );
    this.shape_16.setTransform(223.5898, 110.7279);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#83BD46")
      .s()
      .p(
        "AF2BdQhSgCgngDQgbgCiPgVIgEgCIgigNQgKgDgSgJQgQgHgGgIQgGgIgQgGQgQgHgIgIQgHgKgQgHQgUgJgTgMIgTgMQgFgCAIAKQAIAMARALQANAKAYALQAaAMARAKQAdASAcAWQj+gng0gPQgngMg3gCQg0gCgPgGQgvgQgQgJQgdgQApAAQAcAAAZgFQAZgGAygBQAsAAAggKQAYgHArAEQArAFA+gJQA3gHARAFQAKACAYABIAwgBIAwgEQAagCAQAGIBTAeQBEAYAdAIQAaAHAeANQAhANAPAFQAlALATALQARALAMASQAQAYgcADQgZADg5AAIgkAAg",
      );
    this.shape_17.setTransform(208.7018, 112.4594);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#83BD46")
      .s()
      .p(
        "ACsBhQgvgHgNgDQgRgEgagQIhBgoQgMgIgwgSQgngOgpgLQgigJgZgLQgggPgHgDIgkgKQgygPgPgGQgbgLAmADQAYACAwgCQAogCAlAGIBpASQA9AKAdAHQAfAIAdAMIA8AaQAZAKA1ASQAsARAHATQAGAPAzAWQATAHACADQADADgUAAIhOAEIgPABQgiAAgfgGg",
      );
    this.shape_18.setTransform(262.7877, 113.2632);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#B4D48D")
      .s()
      .p(
        "AmxAZQgtgPASgBQArgDB8gJQB0gJA+ACQAuABBGgKQA7gJAmAGQAmAGAXgIQAYgIAdADQAgADArgGQAzgHAmABQA/ACAVAGQAWAGg8ACQgaABhcAJQhJAHg5gCQgzgCg3AIQg5AHgtgBQgrgBgLAOQgLAMhGgEQhMgEgpAIQgxAJgOAAIgDAAQglAAgsgOg",
      );
    this.shape_19.setTransform(149.0506, 103.2946);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#98C663")
      .s()
      .p("A0iCPQi7glgoguQhQhbLegqQElgRITgiQGxgZEGAIQFLAKDWA+QDwBFCFCPg");
    this.shape_20.setTransform(154.9316, 112.6015);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgcALQgXgEACgJQABgGAOAHQAOAFABgDQACgDAMACQANACAGgCIAPgIQAHgDAFABQAFABADAHQACAHgCAAQgkAHgXAAIgSgBg",
      );
    this.shape_21.setTransform(167.5045, 98.6981);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#FFFFFF")
      .s()
      .p("AgDANQgEgEgDgLQgDgKAFgCQADgBAGADQAHAEADAHQAFAJgLAGIgFABQgBAAgCgCg");
    this.shape_22.setTransform(168.7469, 98.3268);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag0AKQgVgBALgCQAUgFADgCQAFgCAGgBQAIgBAHgDQAJgDAEADQAHADAIgBIAOgCIANgBQAKgCAEAFIALAOIhiABIgVAAg",
      );
    this.shape_23.setTransform(178.0472, 98.7277);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSARQgCgQACgFIAHgVQAFgLAGAIIAEAGQAEAGgBADIgCAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADAFgBACIgCADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIADAGQACADAFAAIABAEIAAADQACAEgCABQgCAEgIgEQgGgCgEgFQgFAKgIABIgEgQg",
      );
    this.shape_24.setTransform(190.7681, 96.2359);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#FFFFFF").s().p("AgGgIQADgIADAAQAFABACALQADAPgCAGQgUgOAGgLg");
    this.shape_25.setTransform(187.0318, 97.625);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FEF6B5")
      .s()
      .p("Ak7AVQiGgCC/gVQC9gVDvADQB4ABBSAFInvAgQhEAEhKAAIgygBg");
    this.shape_26.setTransform(127.9462, 101.8305);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AFOA9IrBhsQAHAAA/gIQA7gJAHACQAGABAJAAQAIAAAFABQAFABAOgBQAMgBAHADQAFADAJgBQAMgBAOACQAMADASgCQAOAAAEACQAFADAJgDQAJgDAIAFQALAJATADIADgNQADgGAHABQAHACAKgFQAJgDAFAGQAJAJAGACQAFACAKgCQAEgBANgHQAIgEAHAFIAGAGQABACAJADQAFACABgFQABgEARAJQAPAHALAAQAHgBAGAJIAIAPQAOADAIAFQAFACAFABIAUgCQAJAAAAADQAGABAJAEQALAGAKAAQAKAAAHAFQAIAGALABQAMABADADQACACAJABQAKABAHAIQAHAHAKAGQAFAEABADQAAACgJAAQgJAAgUgDg",
      );
    this.shape_27.setTransform(244.15, 102.9953);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_2,
    new cjs.Rectangle(164.7, 92.5, 145.2, 36.5),
    null,
  );

  (lib.ClipGroup_1_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(222.625, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C6D439")
      .s()
      .p(
        "Al1BCQA8gXAqgGQAYgDBQgWQBBgQBQgHQBUgHAygMICIglQBWgVBNgFQAngCAVACQifAMgwAPQgzARhOASQhiAXg0ACQgwADhQARQhOAUgVADQgnAHhKAZQgbAJg3ALIghAGQAsgJA1gUg",
      );
    this.shape.setTransform(438.1, 128.6625);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#C6D439")
      .s()
      .p(
        "Al6A+QA9gWApgFQAagEBPgUQBDgQBPgGQBUgHAvgKQAggIBmgbQBXgVBUgFQAqgCAYACQitAMgwAPQgzAQhMARQhgAVgzACQgxAChPARQhPATgWADQgcAFgcAIIg5ASQgcAJg2AKIgiAGQAsgJA2gUg",
      );
    this.shape_1.setTransform(428.8, 126.7554);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C6D439")
      .s()
      .p(
        "Al/A7QA9gVApgFQAagEBQgTQBDgPBPgGQBVgFAsgKQAfgHBlgaQBYgTBagGQAtgCAcABQi7ANgxAPQgzAPhJAPQheAUg0ACQgwABhQAQQhPASgVADQgcAFgdAHIg6ASQgcAIg3AKIghAGQAtgJA2gTg",
      );
    this.shape_2.setTransform(414.775, 125.5732);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#C6D439")
      .s()
      .p(
        "AmEA4QA+gVAqgFQAagDBQgSQBDgPBPgFQBVgEAqgJQAegGBlgZQBYgSBggGQAxgDAfAAQjJAPgxAOQg0AOhGAOQhcATgzABQgwABhRAPQhPARgWADQgcAEgcAIIg7ARQgbAIg4AJIgkAGQAtgIA4gTg",
      );
    this.shape_3.setTransform(400.5, 124.9214);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#C6D439")
      .s()
      .p(
        "AmKA1QA+gUAqgEQAZgDBRgSQBDgOBQgEQBWgEAngHQAdgGBkgXQBYgSBogGQAzgEAiABQjXAPgxAOQgyAOhGAMQhZARg0ABQgvAAhRAPQhQAQgWADQgcAEgdAHIg6AQQgcAIg4AJIghAEQAtgHA2gSg",
      );
    this.shape_4.setTransform(386.3625, 124.2844);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#C6D439")
      .s()
      .p(
        "AmPAyQA/gUApgEQAbgCBRgRQBDgNBPgDQBXgDAkgHQAcgFBjgVQBZgRBugIQA3gDAlAAQjlAQgyANQgyANhDAMQhXAPgzAAQgxAAhRAOQhQAQgWACQgcAEgcAGIg8AQQgcAIg4AIIgiAEQAugGA3gSg",
      );
    this.shape_5.setTransform(373.35, 123.9875);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#C6D439")
      .s()
      .p(
        "AmUAvQA/gTAqgEQAbgCBRgQQBEgNBPgCQBYgDAhgFIB+gYQBYgRB1gHQA6gEApAAQjzAQgyANQgyAMhBALQhVAOg0gBQgwAAhRAMQhRAPgWADQgbADgdAHIg8APQgdAHg3AIIgkAEQAugHA4gQg",
      );
    this.shape_6.setTransform(362.75, 123.8875);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#AFBB1B")
      .s()
      .p(
        "AIWAzQimgqhGgJQhbgMi/ADQkRAEidgEQjsgHBjgWQBegVBhAAQBVAAGRAHQBqACBoAWQBlAWBYAmQA5AZgBADIgCAAQgHAAgmgJg",
      );
    this.shape_7.setTransform(399.6004, 127.0973);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#44A747")
      .s()
      .p(
        "AieAoQj9gQgfgLQgagJA9gQQA9gRAWAJQAJAEAdgFIA0gKQARgDAWABQASAAAKgDQAJgCASABQAQABAIgDQAJgEAIACIALACQAEAAAEAHIAGAJQAGAEAZAAQAcAAARgHQAOgGAHAFQALAJAKABQAXAEAhgFQAkgFAGgJQAGgJAWgDIAtgFQATgDASAGQATAGADAAQAIAAAEAGQAFAIADABQAFADAHgHQAKgJAJgDQALgEAaAGIAtAMQANAEAIARQAIAPAPABQhsAZiMANQghADg0AAQhmAAiugLg",
      );
    this.shape_8.setTransform(171.3741, 143.0577);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#83BD46")
      .s()
      .p(
        "EghOACsICHgtQC5g7D5hDQDKg1FPAaQBWAGDBAVQCuATBYAGQLViKKVgsQMdg2DdCEQC8BwALAPQAKAPgYAMQgQAHhCASIAfBHg",
      );
    this.shape_9.setTransform(313.3848, 132.1035);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#44A747")
      .s()
      .p(
        "AkHA3IjagKQACAAAUgXQAfgVA4ALQAlAHAlgVQAkgVAtALQArAKA2gUQAugRAeARQAUAMALgDQAGgBAKgKQAYgVAvAQQAzASAmgKQA1gNAZABQAfACBMgTQA5gPAQAQQALALAeAVQASANACALQACAQg4AHQgwAGjaAPQhmAHiBAAQhaAAhogDg",
      );
    this.shape_10.setTransform(410.1553, 117.857);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#C6D439")
      .s()
      .p(
        "AjnAwQgCgGALgKQAdgdAlADQALAAADgBQAGgCABgJQACgNAMgIQAOgIAPAIQASAIAFAAQAGAAAHgKQAPgXASACQAFABALgBQAIAAADACQAEACAGAOQABACAIgBQAHgCAEAJQAEAMACAAQACAAAIgKQAHgIAIgCQADgBAJAAIAMABQAIAAACgEQAGABACADIAIAFIAQADQAHABAMgCQAIgCAKAEQAIAFAPgBQAPAAAHAFIAPAJQAEADAAACQABAGi2ALQhAABgwADQhaAGg+AVQgIADgFAAQgEAAgBgDg",
      );
    this.shape_11.setTransform(343.3661, 122.4695);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#DCE383")
      .s()
      .p(
        "ABuAaIg3gKIgygHQgYgEgOgFQgOgDgVgEIgSgCQgcgKglgCQgKgBANgCQAOgDAGABQACAAAHgEQAGgEAJAFQAHAEAIgCQAJgCAJADQAJADAKgDQAJgDAGAFQAFAEAMAAQAKAAAEAGQAEAHAKACQAMABABABQABACAKgBQAKgCAIAEQAHAEAKgEQALgGAJAEQAIACASgGQANgFAAAJQAAAIAVAPQAPALgKAAQgMAAgegGg",
      );
    this.shape_12.setTransform(270.6164, 121.0559);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#5C9E32")
      .s()
      .p("AguAMQADgDAGgCIAHgEIAHgJQAHgJAJAAIATABQAIAAALADIAWAEIgvANQgeAIgcACIAGgEg");
    this.shape_13.setTransform(156.45, 121.45);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#5C9E32")
      .s()
      .p("AgdAGQACgBABgEQAAgCAJABQAMAAAFgDQAFgEAHABQAHABAGgDQAEgDABAIQACAIAEABIhIAEIAHgEg");
    this.shape_14.setTransform(168.35, 119.2341);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#5C9E32")
      .s()
      .p("Ag4AGIAMgDQADgCAIgGQAGgHAIgCQAIgCAQAEQARAEAJgCQAJgCAHABIAQAEQhKAGgyARQAAgIAFgCg");
    this.shape_15.setTransform(141.4, 122.2796);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#C6D439")
      .s()
      .p(
        "Ao9BPQAdgLAJgTQADgIAKgKQAMgNAHAEQADACAHgBIALgBIAMAEQAHACAFAAQAHAAAFgHQACgBAEAEQAFAFABgBQADgBACgKQACgKACgCQAJgIAqgNQAHgCATgCIAagDIBHgOIAZgEIAOgBQAKgBADADQABABAAAFQAAAFABABQACABAHgBQABABAAAEQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQAEABAGgNQANgNADgBQAFgBAKAEIAOAEQAHAAAUgDQAYgCAFADQACABAFAIQAEAHACABQADAAAEgEIAGgFIAKgHQAGgGAEAAQAIgCAUAFIAaAIIAJACQAFACADAAQAEgBAIgFIALgHIAfgFIAQAAQALAAAEgCQAFgCAGgNQAKgMAGgDQAIgFASgFQAQgGALgBIA1gGQAlAAAMATQAHALAKACQAGACAJAAQASADAKAJQACACADAJQADAIACACQAGADAOgBIAKgFQAFAAAKADIA/AIIA4AIIAVADQAPADAGADQAeASgEAKQgEAMgigBQgmgDgLABIhDACIhCABIlvAJIiwAFQh6AEg4AEQg9AFhIANQhVAPg+AUQAHgOAegLg",
      );
    this.shape_16.setTransform(201.6982, 128.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#7CB83F")
      .s()
      .p(
        "AFTAyQgUgGgYgBQgYgCgSgGQgTgHgWAAQgcgBgZgGQgUgEglgGQgbgDgZgIQgVgHgUADQgVACgggJQgigKgXgBQghAAgPgDIgqgEQgLgBgLgJQgLgIgbAEQgjAHgMgCQgTgCgWABIgqABQgWgBAGgDQADgCAWgGQAKgDAQADQAOADAMgGQANgHAPgBQASgCAFgCQAIgCAQAGQARAHAMgDQAMgCAKAFQAMAHAQAAQARAAAJACQAGACAKgBQAKgCALAIQALAIAJgCIAXgBQANAAAUgFQATgFAGALQAFAKAGgCQAIgCAZAKQAbAMAPgBQAQAAACAEQACADAHAAIAbACQASAAAOgGQAOgGAEAIQAEALAGgBQAHgBAJAHQAJAIAOAAQAOABAKADQANAEAJABQAKABARAFQAQAEANABQATAAAIADQAHABAMAHQAUALgIAAQgJAAgxgQg",
      );
    this.shape_17.setTransform(133.3203, 136.2137);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#7CB83F")
      .s()
      .p(
        "ADeAvQghgNgVgDQgdgFgMgDQgVgGgpgFQgjgFgLgFQgFgCgugFQgtgGghgPQgjgPglAAQglACgOgBQgQgBgVABIgeABIgVABQgIAAAEgFQAEgDANAAQARABAOgEQANgEAMADQAMADAMgEQANgDASADQAUAEAOgDQANgCAJAAQAEAAAJgDQAKgDAFABIAPAEQAKAAAHAEIAWAOQANAGAGAFQADABAMgDQAJgCAQAGQARAGAPgEQAPgEAGAIQAHAJAOgBQAPgBACAEQACAFAHAAQAJAAAMABQAQAEAPABQAQACASAJQARAJANACQAOABAHAGQAHAGAMABQA2AFAOAHQANAHgpgEQgRgCgRADIgBAAQgIAAgfgLg",
      );
    this.shape_18.setTransform(162.3597, 134.0312);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#98C663")
      .s()
      .p(
        "A0xBqQB9g1CkgpQDZhBDGgmQA2gKBhgEQB5gFAvgFQAagCAvgKQA3gLAXgDQAYgEAjgBIA7AAQDigHDSAJQDTAKCCAXQH4BbB+AwQCXA7kgAeMgpeAAhg",
      );
    this.shape_19.setTransform(194.8719, 131.6515);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#DCE383")
      .s()
      .p(
        "AAiAmQgRgBg1gGQgfgEgMgKQgIgGgBgLQgCgMAMACIAKAAQADgBgFgGQgEgFAIABIALABIAIAAIAGAAIAGgDQAEgCABABQACABAAAEIACAFQADACAFACQAFABACgCQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAgBgBQgGgCAAgBIgBgQQABgEAIgBQADgBANADQAVAHAJAHIACACQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBAHQACACAKgCQAFAAADAKQABADgBADQAAABAIACQAFABAGAHIADAHIAHAGQAFAEgBACQAAACgHABIgJAAIgMAAIgbgBg",
      );
    this.shape_20.setTransform(299.6689, 122.7056);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgbAuQgOgFgFgFIgLgRQAYgGgBgCQgCgBgHAAQgFAAgCgBQgBgCABgGQABgEACgCIAHgCQAFAAABgCQAAgBgCgEIgEgEIgFgCQgDgCAFgEQAGgEALgFQAJgFACABQACAAAEAHQADAGACgCQABgCgEgJQgEgKACgDQABgDAGgBQAFgCAEAAQAJABARASQAIAIAAADIgFAIQgEAFACADQAEAEAHgFQAHgFACAAQADACgBAFQgBAGgDACIgDAAQgCAAADAEQACADgCAHIgBAJIAFAIQAEAFAAACQgBAGgIAIQgIAHgGACQgEABgGAAQgSAAgigNg",
      );
    this.shape_21.setTransform(272.0778, 115.4372);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#2CA196")
      .s()
      .p(
        "ABKAnIgUgGQgNgDgWgBIhigHQgGgBgCgFQgCgEAFgBQACAAAGgLQAHgMAKAAQAHAAAUgQQASgPAJAGQAGAGAQgFQAMgEADAKQADAJAJABQALABAEAGQAEAHAKAAQAHABABAGQABAIAFAGQACADgCAEIABAOQABAEgGAAIgJgBg",
      );
    this.shape_22.setTransform(254.7115, 116.1995);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AFfAyIirguQhRgVhtgIQhxgIkjAJIkNALQAdgGBWgcQBAgUAkAAIDyACQAOAAAngEQAhgDAcACQAWACArgDQAkgDAYAEIBBAOQAPgJAEgBQAKgEAJAFQALAHARgCQAQgCAJAGQAHAEAHAAQAFgBAPAOQAMAMARAFQAPAFABACIAkABQAVAAARADQAHgEALgJQAJgGALADQAOADALgHQALgHABABQADABgFALQgFAKAHAAQAGAAAKgHQAJgFAFACIAOAEQAKAFARANQAJAGAMAGQAiADAQAGQAPAHBRAUQA8APgOAEQgeAJhVAAIgFAAQhvAAhjgXg",
      );
    this.shape_23.setTransform(246.924, 121.0155);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_1_0,
    new cjs.Rectangle(52.7, 109.6, 392.6, 32.900000000000006),
    null,
  );

  (lib.ClipGroup_1 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(303.475, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C6D439")
      .s()
      .p(
        "AFjBEQhLgZgngHIhkgXQhPgRgwgDQgzgChkgXQhNgSgzgRQgegJhcgKIhVgIIA8AAQBNAFBXAVQBFARBDAUQAxAMBUAHQBQAHBBAQQBQAWAZADQApAGA9AXQA2AUAuAKQhOgOgogNg",
      );
    this.shape.setTransform(88.2, 128.7625);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#C6D439")
      .s()
      .p(
        "AFoBBIg6gSQgcgIgcgEIhkgXQhQgQgwgCQgzgChhgWQhLgQgzgQQgfgKhigKIhdgIIBDABQBUAFBXAUQBGARBAASQAuALBVAGQBPAGBDAQQBPAVAaADQApAGA9AWQA3AUAuAJQhOgNgpgNg",
      );
    this.shape_1.setTransform(97.4375, 126.8125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C6D439")
      .s()
      .p(
        "AFtA+Ig6gRQgdgIgcgEIhkgVQhQgQgwgCQgzgBhegUQhKgQgzgPQgegJhqgKIhjgJIBJACQBZAFBYAUQBGAQA+AQQAsAKBWAGQBOAFBEAPQBPAUAaADQAqAFA9AWQA4ATAtAJQhOgMgpgNg",
      );
    this.shape_2.setTransform(111.5, 125.625);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#C6D439")
      .s()
      .p(
        "AFvA7Ig6gRQgdgHgcgEIhlgVQhQgPgwgBQg0gBhcgSQhHgOgzgPQgegIhxgLIhrgJIBQACQBgAGBYATQBHAPA8APQAqAJBVAFQBPAEBDAPQBQATAaADQAqAFA+AUQA8AUAxAIQhUgLgrgNg",
      );
    this.shape_3.setTransform(125.975, 124.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#C6D439")
      .s()
      .p(
        "AF4A5QhLgWgpgGIhlgTQhRgOgwgBQgzAAhagRQhGgNgygOQgfgIh4gLIhxgKIBVADQBoAHBZASQBGAOA6AOQAnAIBXAEQBPAEBDANQBRASAZADQAqAFA/AUQA4ASAuAIQhPgLgpgLg",
      );
    this.shape_4.setTransform(139.9, 124.3125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#C6D439")
      .s()
      .p(
        "AF9A2Ig7gQQgdgHgcgDIhlgTQhRgNgxAAQgzAAhXgQQhDgLgzgOQgfgIh/gLIh5gKIBdAEQBuAHBYARQBHAOA4ANQAkAGBYADQBPADBDANQBQARAbADQArAEA+AUQA4ASAvAHQhPgKgqgLg",
      );
    this.shape_5.setTransform(152.9, 124.025);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#C6D439")
      .s()
      .p(
        "AF/AyIg7gPQgdgGgcgEIhngRQhRgNgwABQg0AAhUgOQhCgKgygNQgfgIiGgLIiAgKIBjAEQB0AIBZAQQBIANA2AMQAhAFBYACQBPACBEANQBRAQAbADQAqADA/ATQA9ASAxAHQhUgJgsgMg",
      );
    this.shape_6.setTransform(163.75, 123.9375);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#AFBB1B")
      .s()
      .p(
        "ApEA8QgBgDA5gZQBYgmBlgWQBogWBqgCQGSgHBUAAQBhAABeAVQBjAWjsAHQidAEkQgEQjAgDhbAMQhGAJimAqQgmAJgHAAIgCAAg",
      );
    this.shape_7.setTransform(126.4996, 127.0973);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#44A747")
      .s()
      .p(
        "AjKAwQhYgIhYgQIhIgOQAPgBAIgPQAIgRANgEQAPgDAegJQAagGALAEQAJADAKAJQAHAHAFgDQADgBAFgIQAEgGAIAAQADAAATgGQASgGATADIAuAFQAVADAGAJQAGAJAkAFQAhAFAXgEQAKgBALgJQAHgFAOAGQARAHAcAAQAZAAAGgEQACgCAEgHQAEgHAEAAQADAAAIgCQAIgCAJAEQAIADAQgBQASgBAJACQAKADASAAQAWgBARADQASACAiAIQAdAFAJgEQAWgJA9ARQA9AQgaAJQgeALj+AQQiuALhmAAQg1AAgggDg",
      );
    this.shape_8.setTransform(354.7385, 143.0577);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#83BD46")
      .s()
      .p(
        "EggKACsIAfhHQhCgSgQgHQgYgMALgPQAKgPC8hwQDdiEMdA2QKVAsLVCKQBYgGCugTQDBgVBWgGQFPgaDKA1QD5BDC5A7QBcAdArAQg",
      );
    this.shape_9.setTransform(212.7402, 132.1035);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#44A747")
      .s()
      .p(
        "AiiAzQjagPgvgGQg5gHADgQQACgLASgNQAdgVALgLQARgQA5APQBLATAggCQAZgBA1ANQAlAKAzgSQAvgQAYAVQALAKAGABQALADAUgMQAegRAuARQA1AUArgKQAtgLAkAVQAmAVAlgHQA4gLAfAVQAPAKAHANQhbAGh/AEQhoADhaAAQiBAAhngHg",
      );
    this.shape_10.setTransform(115.9697, 117.857);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#C6D439")
      .s()
      .p(
        "ADXAwQg/gVhagGQhYgCgYgCQi2gLABgGQAAgCAEgDIAPgJQAHgFAPAAQAPABAJgFQAJgEAIACQAMADAHgCIARgDQACgBAFgEQACgDAGgBQACAEAIAAIAMgBQAJAAAEABQAHACAHAIQAIAKACAAQACAAAFgMQADgJAHACQAIABABgCIAEgIQADgHADgBQADgCAIAAQALABAFgBQASgCAPAXQAHAKAGAAQAGAAARgIQAPgIAOAIQAMAIACANQABAJAGACQADABALAAQAkgDAeAdQALAKgCAGQgBADgEAAQgFAAgHgDg",
      );
    this.shape_11.setTransform(182.7339, 122.4695);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#DCE383")
      .s()
      .p(
        "AiSAVQAVgPAAgIQAAgJANAFQASAGAIgCQAJgEALAGQAKAEAHgEQAIgEALACQAJABABgCQABgBAMgBQAKgCAEgHQAEgGAKAAQAMAAAFgEQAGgFAJADQAKADAJgDQAJgDAJACQAIACAIgEQAIgFAGAEQAHAEACAAQAGgBAOADQANACgKABQglACgcAKQgfADgWAGQgOAFgYAEIgyAHQhMAQgVAAQgKAAAPgLg",
      );
    this.shape_12.setTransform(255.4836, 121.0559);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#5C9E32")
      .s()
      .p("AgFAGIgugNIAUgEQAMgDAHAAQAJABALgCQAJAAAHAJIAHAJIAIAEQAIADAGAGQgcgCgegIg");
    this.shape_13.setTransform(369.65, 121.45);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#5C9E32")
      .s()
      .p("AgkAGQAFgBABgIQABgIAFADQAFADAIgBQAHgBAEAEQAGADALAAQAKgBAAACQAAAEADABIAHAEIhJgEg");
    this.shape_14.setTransform(357.775, 119.2341);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#5C9E32")
      .s()
      .p("Ag9gHIAPgEQAHgBAIACQAKACARgEQAQgEAHACQAJACAGAHQAIAGADACIAMADQAFACAAAIQgxgRhKgGg");
    this.shape_15.setTransform(384.725, 122.2796);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#C6D439")
      .s()
      .p(
        "AHQBFQhIgNg9gFQg4gEh5gEIixgFIlvgJQhjgBghgCIgyACQgiABgEgMQgEgLAfgRQAFgDAlgGIA3gIIA/gIIAHgCQAFgBADAAQAEABAHAEQANABAGgDQACgCADgIQADgJACgCQAKgJASgDIAPgCQAKgCAHgLQAMgTAlAAIA2AGQAKABARAGQARAFAIAFQAGADAKAMIAFAIQADAGADABQAEACALAAIAQAAIAfAFIALAHQAJAFADABQADAAAGgCIAIgCIAbgIQATgFAIACQAGABAOAMIAGAFQAEAEADAAQACgBAFgHQAEgIACgBQAFgDAYACIAOABQAJACAEAAIAOgEQALgEAEABQADABANANIAEAIQADAFADgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgEABgBIAEAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAgFQAAgFABgBQADgDAKABIAOABIBgASIAaADQATACAHACQAqANAJAIQACACACAKQACAKADABQABABAFgFQAEgEACABIAEADQADAEAFAAQAFAAAHgCIAMgEIALABQAHABADgCQAHgEAMANQAKAKADAIQAJATAdALQAeALAHAOQg+gUhVgPg",
      );
    this.shape_16.setTransform(324.4021, 128.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#7CB83F")
      .s()
      .p(
        "AmAA3QAMgHAHgBQAIgDASAAQAOgBAQgEQAQgFAKgBQAKgBAMgEQALgDAOgBQAOAAAJgIQAJgHAGABQAGABAFgLQAEgIANAGQAPAGASAAIAbgCQAGAAACgDQACgEAQAAQAPABAcgMQAZgKAIACQAGACAFgKQAFgLAUAFQATAFAOAAIAWABQAKACALgIQAKgIAKACQAKABAHgCQAJgCAQAAQARAAAMgHQAKgFALACQANADARgHQAQgGAHACQAGACASACQAPABAMAHQAMAGAOgDQAQgDAKADIAaAIQAGADgXABIgqgBQgWgBgSACQgMACgkgHQgbgEgKAIQgLAJgLABIgrAEQgOADghAAQgXABgjAKQgfAJgVgCQgVgDgVAHQgZAIgaADQglAGgUAEQgZAGgcABQgWAAgTAHQgTAGgXACQgZABgTAGQgxAQgJAAQgIAAAUgLg",
      );
    this.shape_17.setTransform(392.8147, 136.2137);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#7CB83F")
      .s()
      .p(
        "AkFA6QgRgDgRACQgpAEANgHQAOgHA2gFQAMgBAHgGQAHgGAOgBQANgCARgJQASgJAQgCQAPgBAQgEQAMgBAJAAQAIAAABgFQACgEAPABQAOABAHgJQAGgIAPAEQAPAEAQgGQARgGAJACQANADACgBIATgLIAXgOQAGgEAKAAIAPgEQAFgBAKADQARAGASgBQAOADAUgEQASgDANADQAMAEAMgDQAMgDANAEQAOAEARgBQANAAAEADQAEAFgHAAIgWgBQgngCgcABIgzgBQglAAgjAPQggAPgtAGQgvAFgFACQgLAFgjAFQgpAFgVAGQgMADgdAFQgVADghANQgfALgIAAIgBAAg",
      );
    this.shape_18.setTransform(363.7437, 134.0312);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#98C663")
      .s()
      .p(
        "AzQB1QkggeCXg7QB+gwH4hbQCCgXDTgKQDSgJDiAHIA7AAQAjABAYAEQAXADA3ALQAvAKAaACQAvAFB5AFQBhAEA2AKQDFAlDaBCQClApB8A1QA/AaAdASg",
      );
    this.shape_19.setTransform(331.2281, 131.6515);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#DCE383")
      .s()
      .p(
        "AhIAnIgJAAQgHgBAAgCQgBgCAFgEIAHgGIADgHQAGgHAFgBQAIgCAAgBQgBgDABgDQADgKAGAAIAGABQAEAAABgBIgBgHQgBgCAFgDQAHgGAWgIQANgDADABQAIABABAEIgBAQQAAABgGACQgBABgBAAQAAAAgBABQAAAAAAABQAAAAAAAAQACACAFgBQAGgCACgCIACgFQAAgEACgBQADgBAIAFIAGAAIAIAAIALgBQAIgBgEAFQgFAGADABIAKAAQAMgCgCAMQgBALgIAGQgMAKgfAEQgzAGgTABIgaABIgNAAg",
      );
    this.shape_20.setTransform(226.4311, 122.7056);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgiA6QgGgCgHgHQgJgIAAgGQgBgCAEgFIAFgIIgBgJQgCgHACgDQADgEgCAAIgDAAQgDgCgBgGQgBgFADgCQACAAAHAFQAHAFAEgEQACgDgEgFIgEgIQgBgDAIgIQARgSAJgBQAEAAAFACQAGABABADQACADgEAKQgDAJABACQABACADgGQAEgHACAAQACgBAJAFQALAFAGAEQAFAEgDACIgFACIgEAEQgCAEAAABQABACAFAAIAHACQADACABAEQABAGgCACQgBABgGAAQgHAAgCABQgBACAYAGIgLARQgEAEgPAGQgiANgSAAQgGAAgEgBg",
      );
    this.shape_21.setTransform(254.0472, 115.4372);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#2CA196")
      .s()
      .p(
        "AhXAkIABgOQgCgEACgDQAFgGABgIQABgGAHgBQAKAAAEgHQAEgGALgBQAKgBACgJQADgKAMAEQAQAFAGgGQAJgGASAPQAUAQAHAAQAKAAAHAMQAGALACAAQAFABgCAEQgCAFgGABQhBAFghACQgWABgMADIgVAGIgJABQgGAAABgEg",
      );
    this.shape_22.setTransform(271.3886, 116.1995);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ao1BJQhVAAgegJQgOgEA8gPQBRgUAPgHQAQgGAigDQAMgGAJgGQASgNAJgFIAOgEQAFgCAJAFQAKAHAGAAQAHAAgFgKQgFgLADgBQACgBALAHQAKAHAOgDQALgDAJAGIASANQARgDAVAAIAlgBQABgCAOgFQARgFAMgMQAPgOAGABQAHAAAGgEQAJgGAQACQARACALgHQAJgFAKAEQAEABAPAJIBBgOQAYgEAkADQAsADAVgCQAcgCAhADQAnAEAOAAIDygCQAkAABAAUQBWAcAdAGQh7gGiSgFQkjgJhxAIQhtAIhRAVQhdAdhOARQhjAXhvAAIgFAAg",
      );
    this.shape_23.setTransform(279.176, 121.0155);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_1,
    new cjs.Rectangle(80.9, 109.6, 392.6, 32.900000000000006),
    null,
  );

  (lib.ClipGroup_0 = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(222.625, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#056B5C")
      .s()
      .p(
        "ABNBlQiPgHgaglIgBgCIgbgBQhNgEALgGIAegPQACgHAIgDIAVgIQAIgEAOgDQAIgCAEgFQAKgNANgOQAFgEAGAAIALAEQAMgJAigBQAMgIAIAAQADAAACAHQADAJADADQACAAAHgEQAGgEABABQAMAEgIgLQgMgQAIgHQARgNAEgGIAJgOQAEgEAGAJQAHALAEgCQAMgDADALQAEAMARgEQAUgEAQAdQAIAOAEAQQgLAJgGAIQgMASAXgBQAXAAgTATQgeAagLAMQgHAHgLAGQgUALgUAAIgEAAg",
      );
    this.shape.setTransform(369.1168, 134.6673);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#056B5C")
      .s()
      .p("AgDASQhkgBAHgCQASgDAfgTQAOgJAIABQALACAJgDQANgDAEAIQAEAHAFgDQAHgDANAHQAcAMAdAJIhlAAg");
    this.shape_1.setTransform(338.399, 142.2967);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#056B5C")
      .s()
      .p(
        "Aj8CQQldglgXgXQgSgSAgAAQAxgBAQgKQASgMAegQQAfgRAmgcQAlgbAfAeIATATQAJAIAHgIQAIgIATAIIAlAVQAIgJALAGIASAOQAEgBAGgDQAMgJAfAAQADgHANgBQAOgBAFADQAKAHAHADIAMAAQAFgDADgVQACgRAKAEQAKAEAMgQQAKgNAJAPQAJAOADAHQADAEAbAKQAbAAAIgPQALgUAPAMQAZASAHAAQALACAJgEQAIgDAJgIQADgJADgOIACgeQACgQANAGIAcAOQAMADABgMQABgQACgFQACgIAJgBQAGgBAFgTQAFgUAJAAQAHAAALgeQAKgaAKAMIAWAbQAKANABAPQAKAHAEAJQAFAMgCAXQAHACAHAQQAIASAGAGQAMgEAUgOQAPgHAFAWIADAOQAPAFAaAMQAVAJAOgKQAOgIAKAOIAUAiIAagDQAOgCAFAEQAFADgBAGQgCAFgGAGQAUADAEAJQADAIgLALQAKgBADgBQAHgEAOAHQAPAIAEAJQAMAchhgBIgtgBQhyAuiAAAQipAAlVgkg",
      );
    this.shape_2.setTransform(409.3737, 132.2355);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#178E80")
      .s()
      .p(
        "AA7ChQj9gXiTgYQh1AKjgAAQhhAAgXgKQgPgFAMgPQAIgJAagCQBEgDATgCIA8gGIAtgLQAZgGAggMQARgHAKACQALACAMARQAJAMAEgEQAKgIALAAQAMAAAKgLQAKgJAOACQAPACAEgCQAJgEAFAAQAEgBAKgLIAMgNQAFgDAOAGQAOAFAOgMQAOgLAMABIAMgJQAlgbAfAdIATATQAJAIAHgHQAIgJATAJIAlAVQAHgJAMAGIASANQAGAAAEgEQANgIAdAAQADgHANgBQAPgBAEADQALAHAGACIAMABQAFgDADgWQACgRAKAFQAJAEANgRQAKgNAJAPQAJAOADAIQADADAbALQAcABAIgRQAIgPAKADQAEABAPAMIALgJQAGgEAFABQALABAJgLQAIgKADgQQACgPATgPQAUgOAKAKQAJAIAEgMQAGgPADAAQAEgBAGgUQAGgVAIgCQAJgCAHgYQAHgUADADIAFAEIAFAIQAGgIAHAJIATAWQAJALADAKQAMADAEAGQACAEAKADQAFACAAAUIAAAbQABAFANAVIAHALIAbgRQAOgEAEAUIACAIQAOgHAGAKQAGAIARgEQAQgDAHAOIAEAIIAHgEQANgIALAOIAUAiIAagDQAOgBAFADQAFAEgBAFQgBAGgHAGQAUADAEAIQADAIgLAMQAJAAAEgDQAHgDAOAHQAPAIAEAJQAMAchggBIgugBQhxAtiBAAQh9AAj+gXg",
      );
    this.shape_3.setTransform(364.8774, 133.1059);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#056B5C")
      .s()
      .p(
        "AgLCcQgJgNgWgGIgUgDQAAgvgSgrQgMgcAJgHQAGgFAUgDQAKgBgDgSQgBgHgOgeQgGgNATAGQAUAHAEggQAFgeABABQABABAMgjQAJgdALAkIADANQAHgEABAaQACAbAEAAQAEAAAGANQAHAPAHADQAHADADgEQADgFAEAAQAFABgBAPQgCAXACANQACAGAAATQAAAEAIgDQAQgGgkA3QgHALAGAPQAGAOgFAJIgCgCQAAATgNAFQgWANgLAFQgHAEgGAAQgIAAgFgIg",
      );
    this.shape_4.setTransform(389.6209, 125.2322);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#056B5C")
      .s()
      .p(
        "AknCVQhdgChGgPQhFgOA2gCQAZAAATgKQARgKAWABQAXABAFgZQAFgXAQADQARADAHgUQAFgPANAMQAPAMAigIQAfgHAFAGQAIAKAcAAQASAAA0gFQAegBANgRQAKgNAXAGIAkAJIAWALIAMAEQAIACAIgDQAIgDALAAQAGAAALgIQALgIAIABQAFAAACgGQABgEAQgHQAPgGAAgCQAAgFANgWQAOgXABgMQACgMAKgEQAOgFAEgEIAIgbQADgNAFgFQAUgXAJAUQAEAHAFgBQAFgBAEAGIAOAJQAIAFADASQABALAFAHIAIALQAFgJAFgDQAMgFgCAZQAAAQADAKIAEACQAKADAHAOQAPAGAOAKQAMAKATAJQAPAHAMAMQAJAIAPANQAJAHAGAJQAJARAJAOIACAIQgIAFg1ABIlbAPQkbAMhZAAIgNAAg",
      );
    this.shape_5.setTransform(313.9319, 131.4009);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#056B5C")
      .s()
      .p(
        "AkMCyQghgHAVgNQANgIAzgZQAegQANAGIApAUQAgAIAPgGQAHgDAYgVQAMgKAjABQAfAAALgPQAMgRANAEQANAEAIgIIAcgQQAMgHgGgUQgFgRAHgFQACgBAPgCIgCgDQgFgLAHgCQAJgCAAgGQAAgIgDgNIgEgWQAAgJAGgPQAHgNAGgFQAGgEAKgXQAKgVAEgSQADgPAHAEQAFADAFAOQACAHgDAWQgEAVAFAOIAKAbQACAKgBAPQAAAIgEAFQABAKANgEQAPgFgBASQgCAVAJACQANAEgCARQgBAIgIAWQgHASAFALQAFANAVgBQAOgBgPAZQgRAdAUAIQAPAGgBABQAAABgQgBQhGgGg4AAQhIAAhQAJQhdALgPAAIhSAEIgGAAQglAAgegGg",
      );
    this.shape_6.setTransform(428.1387, 124.9187);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#056B5C")
      .s()
      .p(
        "AgyDEQgYgLgggKQgagHgCgDQgigmABgkQABgjAaALQAUAJADgDQACgCAEgNQADgGgVgIQgTgHALgOQAKgMgCgYQgCgYAKgIQAJgIAJgRQAHgMAGAAQAGAAAFgZQAFgcAFgFQACgCARgoQAOgeALAHQAHAEAGAJQAFgBACAAQAEABABAFQAFAIAFAQIAIAVQADAGAJgCQALgDACAEQADAFgEAIQgHAMgBAFIgGAVQgBAMAFAKQAEAHgFANQgDAJAFACQAEACAMgGQAKgFAGAGQAGAGgBAMQAAANACAEQACACgCAOQgCAOAGAIQAFAIAGgFQAFgEADAJQADAIAKAIQAIAHgBAOQAAAMAGABQAIABACANQABANAPAGQAIAEgOAIQgGADgLAEIADADQADAEAgAHQARAEgdAQQgmAUhBAFIggABQgpAAgYgLg",
      );
    this.shape_7.setTransform(419.4779, 123.1067);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#44A747")
      .s()
      .p(
        "APYAfQhQgBhEgEIh2gFIhdgDQgagCgdADQgkAEgRAAIgzABQgbABgdgCQgYgDglAAQglAAgZgCQgagDgpACQgpACgTgCQgXgDhLAGQhSAHgOgBIg6ABQglAAghgDQgagDgwABQgjABgJgFQgKgGgJAAQgSACgVAAIhBADQgmABgRgCQgPgDhUABQhZAAgZgCQgagDgbABQgbABgTgBQgUgCgOABQgOABgWgCQgWgBgZADQgaAEgZgCQgKgBgOgEQgFgBg7ACQhDADAEgHQAFgGArgFQAMgCAdgGQAbgEAXACQAQACAbgKQAYgJAbAIQAZAHANgDQATgFAfAEQAdAEAcgEQAYgEAnAIQAnAIAVgCQAYgBAYADQAeAFAhAAQAlABAWADQAbACAngEQApgGAYACQASABAlgEQAbgDAgAIQAgAHA0gDQBJgFAQABQAiABAcgJQAYgHARADQANADAVgFQATgEAiAIQAdAHAdgDQAfgEAvALQAxAKAZgEQAdgEAXADQAdAFAfgEQAcgDAUADQARAEAngFQAngFAnAHQAoAJAXgFQAZgGAMACQARADAOgEQAOgDAPACQALABAVAAQAPABAWAFQARAFAeABQAZACASAGQATAIAogCQAXgBgGABQgNAEg+AAIgeAAg",
      );
    this.shape_8.setTransform(297.198, 139.1386);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#44A747")
      .s()
      .p(
        "APFAfQgUgHgFAAQhSgKgtgBQg3gCgKABQgYACglANQgfALgrgNQgygPgRABQgSACgygBQgugBgkAEQgfADghgEQgegEgcAFQggAFgkgHQgigGgFABQgJABgvgDQg9gFgsAAQgwAAgogBIhzgEQhAgCioAJQizAKgtAAQg1AAhUgHQhOgGgvABQhYABhMgEQAIgPA0AAIBPABQASgCAiACQAkACAcgCQAggCAnAFIAsAGQB1AAAqgGQAOgCA1ABQAlABAjgMQAhgMAWAGQAdAJAZgDQAggEBQAHQBSAHARgBIAogEQAPgCAYgBIApgBIAtABQARAAAhAEQAYADAdgEQAegEAjAFQApAFAQAAQAMgBApADQAgADAggFQAbgFAaAIQAgAJAtAAQAXAAAqADQAIAAAggIQAbgIARADQAYAFAsgGQAtgFAOADQANACAjgFQApgGAbAKQAzAQApAHQA7AKgKAIQgJAGg2ABIgOAAQgbAAgKgDg",
      );
    this.shape_9.setTransform(325.448, 134.3458);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#C6D439")
      .s()
      .p(
        "AEeA6QgBgFgBABQgCACgQgIQgRgIgJAJQgKAKgUgIIgrgWIgigQQgLgFgNACQgMABgSgIIgrgSQgWgIAGANQALAXgBAEQgCAMgOgEQgOgFgPgTQgNgPgPgBIgkABQghAAgWgDQgmgFgngOQghgNgGAEQgHAEgMgEQgPgFgLAJQgNAKgZgIIgjgLQgDgCgIgHQBmACBkAGQF+AXCuBEQADAJgJACQgIACgHgDQgKgGgPgBQgWgDgMANQgHAHgDAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg",
      );
    this.shape_10.setTransform(417.5721, 134.7924);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#288736")
      .s()
      .p("A+PB3QEkghGdgoQFYhtOEgmQLqggHoAdQHdAcCYBjQAvAgAJAjQAFASgFALg");
    this.shape_11.setTransform(278.1066, 138.6107);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABVAoQhDgJizgFIi1gFQgQgCAFgNIAIgMQAggXAOAFQAEABAJgHQAIgGAFACQAEACADgLQADgLALAJQALAIANAEQAPAEAGADQAIAFAIgBQAHAAAIAFQAJAHAGgBIAVgEQAGAAAOgGQALgFAVADQAlAFAWAFQAPACAFgBQAGgBAZACQATACAagIQANgEAOATQAPAVAjAAQAVABAugFQAUAAAXgIQAQgGAQAGIAdALQAIAEAKAGIASAJQAGADgCAEQgDAGhbAAQhkAAhMgKg",
      );
    this.shape_12.setTransform(396.9907, 125.5725);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#056B5C")
      .s()
      .p(
        "AqNAcQgEgCAIgEIALgHQABgDARADQARAEAGgFQAJgIAWgDQAXgDAGAGQAxgKgFAIQArAAANgDQANgCATgBIArgEQARgBAagEQAXgCAVADQAJABAagLQAVgIAjAOQAZACAFgCIAEgGQACgGAWgCQAYgCANAJQAKgJANAFQASAHANgDQANgDAPADQAIACAEgHQAFgHAUACQAYACAHgCQAJgDAKAFQAMAGANgCQALgCAPAEQAMACARgEQAQgFAOADQAQACAPgCQAQgCAUAEQAWADAagBQAbgCAEACQACABAIgDQAMgDAMADQAOAEAGgBIARgDQAHgBAIgDQAHgCAJACQANADAJAAQAaAAATgCQAMgBAOAEQAMADAJgCQAKgCAPAHQATAJAHABQB3ARiXAHQhrAFkhAAQiyAAjLAGQjyAHg/AAIg0ABQhRAAgJgGg",
      );
    this.shape_13.setTransform(296.6942, 128.6943);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAxAbQhYgQiEgGIiUgDQgegCgLgKQgJgIAEgLQACgHAIgBIAfgFQAQgDAMABQAOADAWgEQAWgDAIAEQAIAFATgDQASgCARADQAPADATgDQATgDAKAAQAEAAAHgDQAIgEAVAFQAcAGAQAAQAVAAAAgCQAEgPADgEQAJgNAHAFIALAHQAKAAAEAGQAEAJgLANQgMAOAGgCQAGgCALgJQAOgKAbAdQAMAMAhgbQAFgEAKACQAMACATgIQATgJAPACQARABAJgCQAMgEAPAMQAKAIAKgPQAKgQAJAFQARAKAJAAQAQAAgEASQgFAaAEAGQAFAKgEAOQgDAJAJgCQATgDgIAmQiwgUiMgYg",
      );
    this.shape_14.setTransform(419.8592, 130.1171);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#056B5C")
      .s()
      .p(
        "AoPBFQAfgEALgHQAJgFAHgBIARgDQAFgBAHgIQAHgKADgBQASgGAPADQAJACAHgIQAKgBAUADIAeABQAKAAATgOQARgMAKABQgCAMAVgRQAGgHANABQAPABAEgEQAIgGAEAAIAMgCQgBgIALgBIAQAAIATgGQALgEAKACQAIACANgFQAMgGAJACQAMACAKgEIAUgJQALgDAMALQALAMAHgBIgCgWQAAgKAOgDIAUgBQAMgBAGgFQADgDADgIQADgGAKAEIAKAGQAFADAHgBQAGAAALgGQAKgEAGgBQASgBAQAGQAJADAHgEQAKgFADgBQAIgBAKAEQALAEAHAAIAZAEQASACAFgEQAIgGAKAGQAPAIAEABQAHAAAPgGQANgGAIACIAOAGQAKAEAFAAIAUgEQAQgEABACQAEADAHABIAPABQAHACAOgCQANgCADgDQAHgGAMADIAXAFQAIAAAPAEQAFABALgHQAGgEAYAEQAYADAEAGQAFAIgrALQg+AShmARQiIAYjVAZQk7AomBAlQAygMAwgUg",
      );
    this.shape_15.setTransform(200.4263, 136.44);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup_0,
    new cjs.Rectangle(84.6, 102.4, 360.70000000000005, 40.099999999999994),
    null,
  );

  (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
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

    // Calque_2 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgixALIIAA2QMBFjAAAIAAWQg");
    mask.setTransform(249.875, 71.25);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#056B5C")
      .s()
      .p(
        "Ah4BaIgSgNIgpgmQgTgTAXAAQAYABgNgSIgRgRQAEgQAIgOQAQgdAUAEQARAEAEgMQADgLAMADQAEACAHgLQAGgJAEAEIAJAOQAEAGARANQAIAHgMAQQgIALAMgEQABgBAGAEQAHAEACAAQADgDADgJQADgHACAAQAIAAALAIQAjABAMAJQAPgGAHAGQAMAMALAPQAEAFAIACQAOADAIAEIAWAIQAHADACAHQABAGAdAJQALAGhNAEIgbABIgBACQgaAliPAHIgEAAQgTAAgVgLg",
      );
    this.shape.setTransform(103.3832, 134.6673);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#056B5C")
      .s()
      .p("AgogDQAOgHAGADQAFADAEgHQAEgIANADQAJADALgCQAIgBAOAJQAfATASADQAMADjOAAQAdgJAcgMg");
    this.shape_1.setTransform(134.1303, 142.2967);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#056B5C")
      .s()
      .p(
        "AnzCGIguABQhgABAMgcQAEgJAPgIQAOgHAGAEQADABAKABQgLgLAEgIQAEgJAUgDQgHgGgBgFQgBgGAFgDQAFgEANACIAbADQAOgZAGgJQAKgPANAJQAPAKAVgJIApgRIADgOQAEgWAQAHQAJAEAXAOQAGgFAIgTQAGgQAIgCQgDgXAGgMQADgJALgHQAAgPAKgNIAXgbQAKgMAJAaQALAeAHAAQAJAAAFAUQAGATAGABQAJABACAIIACAVQACAMALgDIAcgOQAOgGACAQQABAJABAVQACAOAEAJQAJAIAIADQAIAEAMgCQAGAAAagSQAPgMALAUQAIAPAbAAQAagKADgEQAEgHAIgOQAKgPAKANQAMAQAKgEQAKgEACARQADAVAFADIAMAAQAGgDALgHQAEgDAPABQAMABAEAHQAfAAAMAJQAFADAFABIARgOQAMgGAIAJQANgGAYgPQATgIAIAIQAHAIAJgIIATgTQAegeAlAbQAnAcAeARIAxAcQAQAKAxABQAfAAgRASQgXAXleAlQlUAkiqAAQh/AAhygug",
      );
    this.shape_2.setTransform(63.1542, 132.2355);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#178E80")
      .s()
      .p(
        "Ao6CrQg7gMgygUIguABQhgABAMgcQAEgJAPgIQAOgHAHADQAFADAIAAQgLgMADgIQAEgIAUgDQgGgGgCgGQgBgFAFgEQAGgDANABIAaADIAUgiQALgOANAIIAHAEIAEgIQAHgOAQADQARAEAGgIQAHgKANAHIACgIQAFgUANAEQAIADATAOIAHgLQANgVABgFIAAgbQAAgUAFgCQAKgDACgEQAEgFAMgEQADgKAJgLIATgWQAHgJAGAIIAFgIIAFgEQADgDAHAUQAHAYAJACQAJACAFAVQAGAUAEABQADAAAGAPQAEAMAJgIQAKgKAUAOQATAPACAPQADAQAIAKQAJALALgBQAFgBAGAEIALAJQAPgMAEgBQAKgDAIAPQAIARAcgBQAbgLADgDQADgIAJgOQAJgPAKANQANARAJgEQAKgFADARQACAWAFADIAMgBQAHgCAKgHQAEgDAPABQANABADAHQAdAAANAIQAEADAGABIASgNQALgGAIAJIAlgVQATgJAIAJQAHAHAJgIIATgTQAfgdAlAbIAMAJQANgBANALQAOAMAOgFQAOgGAFADIAMANQAKALAEABQAFAAAJAEQAEACAPgCQAOgCAKAJQALALAMAAQAKAAAKAIQAEAEAJgMQANgRAKgCQAKgCASAHQAfAMAZAGIAtALIA8AGQATACBEADQAaACAIAJQAMAPgOAFQgYAKhhAAQjgAAh1gKQiTAYj8AXQj/AXh9AAQhCAAhDgNg",
      );
    this.shape_3.setTransform(107.6278, 133.1059);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#056B5C")
      .s()
      .p(
        "AgOCgQgWgOgLgEQgNgFAAgTIgCACQgFgJAGgOQAGgPgHgLQgkg3AQAGQAIADAAgEIACgZQACgMgCgYQgBgPAFgBQAEAAADAFQADAEAHgDQAHgDAHgPQAHgNAEAAQADAAACgbQABgaAHAEIAEgNQAJgkAKAdQAMAjABgBQABgBAFAeQAFAgATgHQATgGgGANQgOAegBAHQgDASAKABQAUADAGAFQAJAHgMAcQgSArAAAvQgJAAgLADQgWAGgJANQgFAIgIAAQgGAAgHgEg",
      );
    this.shape_4.setTransform(82.8836, 125.2322);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#056B5C")
      .s()
      .p(
        "AhZCJQkygOgpgBQg0gBgJgFIACgIQAJgOAJgRQAGgJAJgHQAPgNAJgIQAMgMAQgHQASgJAMgKQAOgKAPgGQAHgOAKgDIAEgCQADgKAAgQQgCgZAMAFQAFADAFAJIAIgLQAFgHABgLQADgSAIgFIAOgJQAEgGAGABQAEABAEgHQAJgUAUAXQAFAFADANIAIAbQAEAEAOAFQALAEABAMQACAMAOAXQANAWgBAFQAAACAPAGQAQAHABAEQACAGAFAAQAIgBALAIQALAIAGAAQALAAAIADQAIADAIgCIAMgEIAWgLIAkgJQAXgGAKANQAOARAdABIBGAFQAcAAAIgKQAFgGAfAHQAiAIAPgMQANgMAFAPQAHAUASgDQAQgDAEAXQAFAZAXgBQAWgBASAKQASAKAaAAQA1AChFAOQhGAPhdACIgNAAQhaAAkagMg",
      );
    this.shape_5.setTransform(158.5883, 131.4009);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#056B5C")
      .s()
      .p(
        "ADEC4IhSgEQgPAAhdgLQhQgJhIAAQg4AAhGAGQgQABAAgBQgBgBAPgGQAUgIgRgdQgOgZANABQAVABAFgNQAFgLgHgSQgIgWgBgIQgBgRANgEQAJgCgDgVQgBgSAPAFQANAEABgKQgDgEgBgJQgBgPACgKIAKgbQAFgOgEgVQgDgWACgHQAFgOAFgDQAHgEADAPQAEASAKAVQAKAXAGAEQAGAFAHANQAGAPAAAJIgEAWQgDANAAAIQAAAGAJACQAHACgFALIgCADQAPACACABQAHAFgFARQgGAUANAHIAbAQQAIAIAOgEQAMgEAMARQALAPAfAAQAjgBAMAKQAYAVAHADQAQAGAfgIQAXgGASgOQAOgGAdAQQAZAOAnATQAVANghAHQgeAGglAAIgGAAg",
      );
    this.shape_6.setTransform(44.3707, 124.9187);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#056B5C")
      .s()
      .p(
        "AguDOQhCgFglgUQgdgQARgEQAggHACgEIADgDQgMgFgEgCQgOgIAHgEQAPgGACgNQACgNAHgBQAHgBgBgMQAAgOAHgHQALgIACgIQAEgJAFAEQAGAFAFgIQAGgIgCgOQgDgOACgCQADgEgBgNQgBgMAGgGQAGgGALAFQAMAGAEgCQAFgCgEgJQgEgNAEgHQAFgKgCgMIgFgVQgBgFgHgMQgFgIADgFQADgEAKADQAKACACgGIAIgVIAKgYQACgFADgBQACAAAFABQAHgJAHgEQALgHANAeQARAoACACQAGAFAFAcQAEAZAHAAQAGAAAHAMQAJARAJAIQAJAIgBAYQgCAYAKAMQALAOgUAHQgUAIADAGQAEAHABAIQADADAVgJQAagLABAjQABAkgiAmQgDADgZAHQghAKgXALQgYALgpAAIgggBg",
      );
    this.shape_7.setTransform(53.0623, 123.1067);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#44A747")
      .s()
      .p(
        "AxAAbQgGgBAXABQAoACATgIQASgGAZgCQAegBARgFQAWgFAPgBQAVAAALgBQAPgCAOADQAOAEASgDQALgCAZAGQAXAFAogJQAngHAoAFQAmAFARgEQAUgDAcADQAfAEAdgFQAXgDAdAEQAZAEAxgKQAvgLAfAEQAeADAcgHQAigIATAEQAVAFAOgDQARgDAXAHQAcAJAhgBQARgBBJAFQA0ADAggHQAggIAbADQAlAEASgBQAZgCApAGQAmAEAbgCQAWgDAlgBQAhAAAegFQAYgDAYABQAVACAngIQAngIAYAEQAcAEAdgEQAfgEATAFQANADAZgHQAbgIAYAJQAbAKAQgCQAXgCAbAEIApAIQArAFAFAGQAFAHhEgDQg7gCgFABQgOAEgKABQgZACgagEQgZgDgWABQgWACgOgBQgOgBgUACQgSABgcgBQgbgBgaADQgZAChZAAQhUgBgPADQgRACgmgBIhBgDIgngCQgJAAgKAGQgJAFgjgBQgwgBgaADQghADglAAIg6gBQgOABhSgHQhLgGgWADQgUACgogCQgqgCgZADQgZACgmAAQgkAAgZADQgdACgbgBIgzgBQgRAAgkgEQgdgDgaACIhdADIh2AFQhEAEhQABIgeAAQg+AAgNgEg",
      );
    this.shape_8.setTransform(175.3051, 139.1386);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#44A747")
      .s()
      .p(
        "Av3AiQg2gBgJgGQgKgIA7gKQApgHAzgQQAbgKApAGQAjAFANgCQAOgDAtAFQAsAGAYgFQARgDAbAIQAgAIAIAAQAqgDAXAAQAtAAAhgJQAZgIAbAFQAgAFAggDQApgDANABQAPAAApgFQAkgFAdAEQAdAEAYgDQAhgEARAAIAugBIAoABQArABAkAGQARABBTgHQBPgHAhAEQAYADAdgJQAWgGAhAMQAjAMAlgBQA1gBAOACQAqAGB1AAIAsgGQAngFAgACQAcACAkgCQAigCASACQATACA8gDQA0AAAIAPQhMAEhYgBQgvgBhOAGQhUAHg1AAQgsAAi0gKQiogJhAACIhzAEQgoABgwAAQgsAAg8AFQgwADgJgBQgEgBgjAGQgjAHghgFQgcgFgeAEQghAEgfgDQgkgEguABQgyABgSgCQgRgBgyAPQgqANgggLQglgNgYgCQgKgBg3ACQgtABhSAKQgFAAgUAHQgKADgbAAIgOAAg",
      );
    this.shape_9.setTransform(147.052, 134.3458);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#C6D439")
      .s()
      .p(
        "AkqA1QgMgNgWADQgOABgLAGQgHADgIgCQgJgCADgJQCuhEF+gXQBkgGBmgCQgIAHgDACIgiALQgaAIgMgKQgMgJgPAFQgMAEgHgEQgGgEghANQgnAOgmAFQgVADgiAAQgagCgJABQgQABgNAPQgQATgNAFQgOAEgCgMQAAgEAKgXQAGgNgWAIIgrASQgSAIgMgBQgNgCgLAFIgiAQQgfARgMAFQgUAIgKgKQgJgJgRAIQgQAIgBgCQgBgCgCAGQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgDAAgHgHg",
      );
    this.shape_10.setTransform(54.9279, 134.7924);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#288736")
      .s()
      .p("A+MB3QgFgLAFgSQAJgjAvggQCXhjHegcQHogdLqAgQOEAmFXBtQGdAoEkAhg");
    this.shape_11.setTransform(194.4184, 138.6107);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AliAsQgCgEAGgDIASgJQAKgGAIgEIAdgLQAQgGAQAGQAXAIAUAAQAXAAAsAEQAjAAAPgVQAOgTANAEQAaAIATgCQAZgCAGABQAFABAPgCIA7gKQAVgDALAFQAOAGAGAAQALABAKADQAGABAJgHQAIgFAHAAQAIABAIgFQAGgDAPgEQANgEALgIQALgJADALQADALAEgCQAFgCAIAGQAJAHAEgBQAPgFAfAXIAIAMQAFANgQACIi1AFQizAFhDAJQhMAKhkAAQhbAAgDgGg",
      );
    this.shape_12.setTransform(75.5093, 125.5725);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#056B5C")
      .s()
      .p(
        "AIAAhQg/AAjygHQjLgGiyAAQkhAAhrgFQiXgHB3gRQAHgBATgJQAPgHAKACQAJACAMgDQAOgEANABQASACAbAAQAIAAANgDQAJgCAHACQAIADAHABIARADQAGABAOgEQAMgDAMADQAIADACgBQAEgCAbACQAaABAWgDQAUgEAQACQAPACAQgCQAOgDAQAFQARAEAMgCQAPgEALACQANACAMgGQAKgFAJADQAHACAYgCQAUgCAFAHQAEAHAIgCQAPgDAOADQAMADASgHQANgFAKAJQANgJAYACQAWACACAGIAEAGQAFACAZgCQAjgOAVAIQAaALAJgBQAVgDAXACIArAFQBBAGAKABQANADArAAQgFgIAxAKQAHgGAWADQAWADAJAIQAGAFARgEQARgDABADQAWAJgHAEQgJAGhRAAIg0gBg",
      );
    this.shape_13.setTransform(175.828, 128.6943);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AluAzQABgRAMACQAJACgCgJQgFgOAFgKQAEgGgFgaQgEgSAQAAQAJAAARgKQAJgFAKAQQAKAPALgIQAOgMAMAEQAJACARgBQAPgCATAJQATAIAMgCQAKgCAFAEQAhAbAMgMQAbgdAOAKQALAJAGACQAGACgMgOQgLgNAEgJQAEgGAKAAIALgHQAHgFAJANQADAEADAPQABACAVAAQAQAAAcgGQAVgFAIAEQAHADAEAAQAKAAATADQATADAPgDQARgDASACQATADAIgFQAIgEAWADQAWAEAOgDQAMgBAQADIAfAFQAIABACAHQAEALgJAIQgLAKgeACQhPABhFACQiEAGhYAQQiMAYiwAUQgDgFABgPg",
      );
    this.shape_14.setTransform(52.6254, 130.1171);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#056B5C")
      .s()
      .p(
        "AhKAYQjVgZiIgYQhmgRg+gSQgMgDgKgEQgTgHADgFQAEgGAYgDQAYgEAGAEQALAHAFgBQAPgEAIAAIAXgFQAMgDAHAGQADADANACQAOACAHgCIAPgBQAHgBAEgDQABgCAQAEIAUAEQAKgBATgJQAIgCANAGQAPAGAHAAQAEgBAPgIQAKgGAIAGQAFAEASgCIAagEQAGAAALgEQAKgEAIABQADABALAFQAHAEAIgDQAQgGASABQAGABAKAEQALAGAGAAQAHABAFgDIAKgGQAKgEADAGIAHALQAFAFANABIATABQAOADAAAKQAAAHgCAPQAHABAMgMQALgLALADQAJADALAGQAKAEAMgCQAJgCAMAGQANAFAIgCQAKgCALAEIATAGIAQAAQALABgBAIIAMACQAFAAAHAGQAEAEAPgBQANgBAGAHQAVARgCgMQAKgBASAMQASAOAKAAIAegBIAPgBQAJgCAGABQAHAIAJgCQAPgDASAGQADABAHAKQAHAIAFABIARADQAHABAJAFQALAHAfAEQAwAUAyAMQmBglk7gog",
      );
    this.shape_15.setTransform(272.0796, 136.44);

    let maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
    ];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup,
    new cjs.Rectangle(27.3, 102.4, 360.7, 40.099999999999994),
    null,
  );

  (lib.cuisse = function (mode, startPosition, loop, reversed) {
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
      .f("#7E5D57")
      .s()
      .p(
        "AB3EvQh7gqjVinQjWimgFg4QgFg5AuhbIA0hPQBuAhBsA2QA3AbAfAUQGOFmAoA6QBKBPhEA6QgcAWhgACQgmgKh8grg",
      );
    this.shape.setTransform(42.2504, 35.575);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AEWFiQgkgCgxgVQgZgOgVgOIgSgJQg7gghJg0QhUg4hjg4IgRgLQjciVgKg+QgJg9ArhXIAIgNIAshDIALgBQBoAgBmAyIAKAFQAwAYAdASIAIAHQGGFeAqA8IACADQBGBNhBA6IgCABQgeAVhcACIgCgBg",
      );
    this.shape_1.setTransform(42.4297, 35.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ADCFOQgagTgMgSIgQgLQg6grhCg1QhYg/hkgjIgQgKQjjiFgPhCQgNhBAphWIAGgNIAthDIAKgGQBoAfBmAyIAKAFQAwAZAeASIAIAGQGFFeAsA9IADADQBHBNhAA6IgDACQgdAVhdACIgCAAIgJAAQgoAAgigVg",
      );
    this.shape_2.setTransform(42.5748, 35.6623);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ADDFRQgbgYgDgXIiBh5QhchGhmgPQj5h5gThKQgUhKAuhcIA1hPQBuAhBrA2QA3AbAgAUQGNFmAoA6QBKBPhDA6QgdAXhgABIgXACQgmAAgUgUg",
      );
    this.shape_3.setTransform(42.7109, 35.6549);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ADQFXIgNgJIgIgHQgRgRgKgRIgEgDQgsgkg1gvIgggdQgvgkgtgXQgwgZgvgKQj0h/gVhGQgWhHAshZIACgEIABgCIAyhMIABAAIACAAQBtAgBqA1IACABIACABQA0AbAeASIADACQBFA/BlBXQCmCQA6BDQAfAlANASQAOAQAKAPQAfAwgmAsQgGAHgHAGIgEADQgcARhLADIgRABIgGABIgFAAQghAAgXgNg",
      );
    this.shape_4.setTransform(42.8583, 35.6534);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ADPFUIgMgJIgIgGIgggeIgFgCQgpgcg7gxIgggcQgwglgqgZQgvgegqgMIAAAAQjwiFgXhCQgYhFAshZIACgEIABgCIAyhMIABAAIACAAQBsAgBqA2IACABIACABQAzAaAeASIADACQAuAqCDBrQCsCRAyBBIArA7IAYAfQAgAsgqAvIgNANIgEADQgbARhLACIgRABIgGABQgjgBgagPg",
      );
    this.shape_5.setTransform(43.0335, 35.65);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AEKFjQghgCgagRIgNgIIgIgHQgMgKgYgNIgFgDQgngThBg1IgggaQgwgmgngbQgvgiglgOIgBgBQjriKgZg+QgbhEAthZIACgDIABgDIAyhLIABAAIACAAQBrAgBpA1IACABIACABQAzAaAfASIADACQAYAVCeB/QC0CRApA/QAXAnASAaIAYAeQAhApgtAyIgNAMIgDACQgcAShLACIgQABIgHAAg",
      );
    this.shape_6.setTransform(43.1599, 35.65);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ADOFNQgKgHgKgIQgKgIgkgMQgkgMhIg3QhGg2gugmQgugngigRQjniQgbg6QgehCAuhaIADgFIAxhLIADAAQBsAgBqA2IACABQA1AaAfATIC8CTQC7CSAgA9QAgA9AhAmQAhAlgwA1QgHAIgJAGQgcAShKACIgXABQgfgFgcgRg",
      );
    this.shape_7.setTransform(43.3011, 35.65);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AD4FfQgRgHgRgKIgVgPQgMgJghgNQgngRhDgzIgDgDIh0haQgtgjgkgUIhPgyQifhlgZgyQgfhBAuhaIADgGIAwhIIACgCIADABQBrAfBpA1IACABIACABQA0AaAfATIABABQAaARCfB+QC0CKArBDQAeAzAaAjIAIAKQAeApgpAzQgHAIgJAHQgIAGgNAFQgbALg0ADIgXABIgYgEg",
      );
    this.shape_8.setTransform(43.3307, 35.65);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AD/FhQgRgIgRgLIgWgOQgOgKgdgOQgqgWhAgxIgDgCQg/gyg3goQgrgggngWIhRgyQifhggbg0IAAgBQgghBAuhaIADgGIAwhIIADgBIADAAQBrAgBoA1IACABIACABQA0AaAfATIABABQAyAjCFBnQCsCDA1BJIA5BUIAHAKQAcAtgjAwQgGAIgIAIQgJAIgMAGQgYAMg1AEIgYABIgYgCg",
      );
    this.shape_9.setTransform(43.3658, 35.625);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#7E5D57")
      .s()
      .p(
        "AEGFiIgigTIgWgOIgqgaQgsgbg8guIgEgDQg9gvg7gqQgqgegpgXIhTgyQifhcgfg3IAAgBQgghAAuhbIADgGIAxhIIACAAIADABQBrAfBpA1IACABIACABQA0AaAfATIABABQBKA0BqBSQCkB8BBBOQAkAuAUAjIAHALQAZAxgcAtQgGAJgIAJQgIAIgLAIQgXAOg2AEIgXACIgZgBg",
      );
    this.shape_10.setTransform(43.3919, 35.625);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ABADYQiChlighZQihhYggg7QgihAAuhbIA1hPQBuAhBrA2QA3AbAgAUQGNERBGCIQAsBWhDA6QgdAWhgACQhKgniDhlg",
      );
    this.shape_11.setTransform(43.4279, 35.575);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ABODuQiBhXithsQiuhsgag6Qgag+AuhbIA0hPQBuAhBsA2QA3AbAfAUQGOEmA+B1QAzBUhDA6QgdAWhfACQhBgfiBhXg",
      );
    this.shape_12.setTransform(43.1678, 35.575);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ABbEEQh+hIi7iAQi7h/gTg5QgTg9AuhbIA0hPQBuAhBsA2QA3AbAfAUQGOE8A3BhQA6BShDA6QgdAWhfACQg4gYiAhIg",
      );
    this.shape_13.setTransform(42.8982, 35.575);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#7E5D57")
      .s()
      .p(
        "ABpEaQh8g6jJiTQjIiTgMg4QgMg7AuhbIA0hPQBuAhBsA2QA3AbAfAUQGOFRAvBNQBCBRhDA6QgdAWhfACQgwgRh9g5g",
      );
    this.shape_14.setTransform(42.5885, 35.575);

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
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, 0, 88.4, 71.3);

  (lib.roueassiette = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.rouee();
    this.instance.setTransform(62, 61.15, 1, 1, 0, 0, 0, 62, 61.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: 360}, 19).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.3, -2.1, 126.5, 126.6);

  (lib.paysage2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.ClipGroup_0();
    this.instance.setTransform(1125.25, 155.95, 1, 1, 0, 0, 0, 236.2, 75.8);

    this.instance_1 = new lib.ClipGroup_1_0();
    this.instance_1.setTransform(1152.05, 154.85, 1, 1, 0, 0, 0, 263, 74.7);

    this.instance_2 = new lib.ClipGroup_2_0();
    this.instance_2.setTransform(1194.05, 151.35, 1, 1, 0, 0, 0, 305, 71.2);

    this.instance_3 = new lib.ClipGroup_3_0();
    this.instance_3.setTransform(924.75, 121.2, 1, 1, 0, 0, 0, 409.4, 121.2);

    this.instance_4 = new lib.ClipGroup_4_0();
    this.instance_4.setTransform(1050.5, 111.3, 1, 1, 0, 0, 0, 283.9, 111.3);

    this.instance_5 = new lib.ClipGroup_5_0();
    this.instance_5.setTransform(1088.15, 151.35, 1, 1, 0, 0, 0, 264.1, 71.2);

    this.instance_6 = new lib.ClipGroup_6_0();
    this.instance_6.setTransform(1092.65, 111.3, 1, 1, 0, 0, 0, 342.9, 111.3);

    this.instance_7 = new lib.ClipGroup_0();
    this.instance_7.setTransform(236.2, 155.95, 1, 1, 0, 0, 0, 236.2, 75.8);

    this.instance_8 = new lib.ClipGroup_1_0();
    this.instance_8.setTransform(263, 154.85, 1, 1, 0, 0, 0, 263, 74.7);

    this.instance_9 = new lib.ClipGroup_2_0();
    this.instance_9.setTransform(305, 151.35, 1, 1, 0, 0, 0, 305, 71.2);

    this.instance_10 = new lib.ClipGroup_3_0();
    this.instance_10.setTransform(35.7, 121.2, 1, 1, 0, 0, 0, 409.4, 121.2);

    this.instance_11 = new lib.ClipGroup_4_0();
    this.instance_11.setTransform(161.45, 111.3, 1, 1, 0, 0, 0, 283.9, 111.3);

    this.instance_12 = new lib.ClipGroup_5_0();
    this.instance_12.setTransform(199.1, 151.35, 1, 1, 0, 0, 0, 264.1, 71.2);

    this.instance_13 = new lib.ClipGroup_6_0();
    this.instance_13.setTransform(203.6, 111.3, 1, 1, 0, 0, 0, 342.9, 111.3);

    this.instance_14 = new lib.ClipGroup();
    this.instance_14.setTransform(653.65, 155.95, 1, 1, 0, 0, 0, 236.2, 75.8);

    this.instance_15 = new lib.ClipGroup_1();
    this.instance_15.setTransform(626.95, 154.85, 1, 1, 0, 0, 0, 263.1, 74.7);

    this.instance_16 = new lib.ClipGroup_2();
    this.instance_16.setTransform(584.95, 151.35, 1, 1, 0, 0, 0, 304.9, 71.2);

    this.instance_17 = new lib.ClipGroup_3();
    this.instance_17.setTransform(854.2, 121.2, 1, 1, 0, 0, 0, 409.5, 121.2);

    this.instance_18 = new lib.ClipGroup_4();
    this.instance_18.setTransform(728.5, 111.3, 1, 1, 0, 0, 0, 283.8, 111.3);

    this.instance_19 = new lib.ClipGroup_5();
    this.instance_19.setTransform(690.75, 151.35, 1, 1, 0, 0, 0, 264.1, 71.2);

    this.instance_20 = new lib.ClipGroup_6();
    this.instance_20.setTransform(686.4, 111.3, 1, 1, 0, 0, 0, 343.2, 111.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_20},
            {t: this.instance_19},
            {t: this.instance_18},
            {t: this.instance_17},
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
            {t: this.instance_2},
            {t: this.instance_1},
            {t: this.instance},
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.paysage2,
    new cjs.Rectangle(-373.8, 0, 1872.8999999999999, 242.5),
    null,
  );

  (lib.paysage = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.paysage2();
    this.instance.setTransform(445.1, 121.2, 1, 1, 0, 0, 0, 445.1, 121.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: -444.05}, 290).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1263, 0, 2762.1, 242.5);

  (lib.cyclisteglobal = function (mode, startPosition, loop, reversed) {
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

    // Calque_7
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhNCJIifgUQgQgFgPgNQgdgbAKgoQAJgoBghsQAwg2AuguQgHBFC+BZQBgAtBiAdQgHAcgVAnQgpBOhIA4Qg4gyiqgeg",
      );
    this.shape.setTransform(115.3828, 114.975);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACSDYQgqgoh8gcIg8gHQhQgGhNgTQgFgCgEgDQgMgFgKgIQgdgaAIgpQAIgnBThbIAQgRQAyg2AugtQAAAHACAHQANBACpBPIAFACQBcArBeAcIADACQgIAbgWAnQgKASgLARQgoA6g3Aog",
      );
    this.shape_1.setTransform(115.1299, 114.95);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#9AA650")
      .s()
      .p(
        "AgZCTIg7gCQhQgBhKgeIgJgFQgMgFgKgIQgegYAIgqQAFgpBWhZIAQgQIBjhhQABAFADAFQAKBBCrBQIAFACQBdArBeAdIACACQgIAbgYAnIgWAiQgqA6g3AmQgmgniCgcg",
      );
    this.shape_2.setTransform(114.9, 114.925);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACNDVQgjgniHgcQgcADgeAAQhQADhIgnIgJgGQgLgFgKgHQgfgYAGgqQAFgrBYhWIAQgRIBlhfIAFAIQAIBBCtBSIAFACQBdAqBfAdIABACQgJAbgZAnQgKARgNARQgsA8g2Ajg",
      );
    this.shape_3.setTransform(114.6264, 114.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACKDTQgfgmiMgcQgcAGgeABQhQAIhGgxIgHgHQgMgEgKgHQgggWAFgrQAEgtBahUIARgQIBnheIAGAFQAGBCCvBSIAFACQBeArBfAeIAAACQgKAagaAnIgXAiQgvA9g2Ahg",
      );
    this.shape_4.setTransform(114.3658, 114.875);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACIDSQgbgmiSgcQgcAJgdADQhRANhDg8IgHgHQgMgEgKgGQgggWAEgqQADgxBbhRIASgOQA+g1ArgoIAIABQADBDCxBTIAFACQBeAsBfAdIABAEQgMAZgbAmIgYAiQgxA+g1Aeg",
      );
    this.shape_5.setTransform(114.1325, 114.85);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACFDRQgXgkiYgeQgcANgbAEQhSAShAhGIgHgHQgMgEgKgGQgggUACgrQACg0BdhNIASgPQBBg0ArgnIAJgCQABBDCzBVIAFACQBeAsBgAdIAAAEQgNAZgcAmIgZAiQgzA+g1Adg",
      );
    this.shape_6.setTransform(113.8909, 114.75);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#9AA650")
      .s()
      .p(
        "ACCDQQgTgkidgcQgcAQgbAFQhRAWg+hPIgGgIQgNgDgKgGQghgTABgsQABg2BghKIASgPQBEg0ArgmIAJgDQgCBCC2BXIAFACQBfArBgAeIgBAEQgOAYgdAmIgaAhQg1BBg1AZIAAgBg",
      );
    this.shape_7.setTransform(113.6485, 114.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#9AA650")
      .s()
      .p(
        "AB/DRQgQgjiigdQgcASgaAIQhSAag7hZIgGgJQgMgDgKgFQgigSAAgsQAAg4BhhIIATgOQBHg0AqgkIALgIQgEBFC3BWIAFACQBgAtBhAdIgCAFQgPAXgeAmIgbAhQg3BBg1AYg",
      );
    this.shape_8.setTransform(113.4249, 114.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#9AA650")
      .s()
      .p("Ag3CRQh7BghKiPQg5gKgBg7QgCg6BkhFQBjhGAwgpQgHBGC+BZQBgAsBiAeQgVAgg5BDQg6BCgzAVQgKgjiqgeg");
    this.shape_9.setTransform(113.199, 114.225);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAACcIgzgLQhzBPhOhwIgHgMQgMgDgJgEQgjgSAAgtQgBg4BhhIIAVgPQBHg0AqglIAKgGQgFBFC9BYIABABQBfArBfAdIgFAMQgUAegoAyIgHAHQgoAwglAYQgQALgPAFQgNgahzgbg",
      );
    this.shape_10.setTransform(113.3499, 114.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#9AA650")
      .s()
      .p(
        "AACCeIgxgMQhyBChRhjIgIgMQgMgCgJgGQgjgSABgtQABg2BghKIATgPQBFg1ArglIAIgEQgDBEC6BXIACABQBeAsBgAcIgFAMQgRAdgoAzIgGAIQgnAwglAZQgPAJgQAFQgQgWhxgcg",
      );
    this.shape_11.setTransform(113.5236, 114.35);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAGCfIgxgNQhwA1hWhWIgIgKQgMgDgJgGQgigTADgtQABgzBehNIATgQQBCg0ArgmIAIgDQgCBEC5BWIABABQBeArBfAeIgCAKQgQAdgnA0IgGAIQglAwgmAaQgPAJgQAFQgUgUhsgdg",
      );
    this.shape_12.setTransform(113.6913, 114.425);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAICgQgWgHgagGQhuAohahJIgJgKQgLgDgJgGQghgUADgsQADgxBchQIASgQQBAg1ArgnIAHAAQAABDC2BWIACABQBdArBfAdIAAAJQgPAdgmA1IgGAIQgkAxglAaQgOAJgSAEQgXgQhpgfg",
      );
    this.shape_13.setTransform(113.8707, 114.475);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#9AA650")
      .s()
      .p(
        "AALCiQgWgHgZgHQhuAchdg9IgJgIQgLgEgKgGQgggWAEgrQAEgvBahSIASgQQA9g1AsgpIAGACQABBDC1BVIABABQBdAqBeAdIACAJQgNAdglA2IgFAIQgjAxgmAaQgOAKgRAEQgbgOhlggg",
      );
    this.shape_14.setTransform(114.1278, 114.475);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#9AA650")
      .s()
      .p(
        "AANClQgWgIgYgHQhsAPhhgwIgKgIQgLgEgJgHQgggWAFgrQAFgtBYhTIASgRIBnhfIAEAEQAEBDCyBTIACABQBcAqBdAdIAEAIQgMAdgjA3IgFAIQgiAyglAaQgOAKgSADIiAgrg",
      );
    this.shape_15.setTransform(114.3658, 114.425);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAPCnQgVgIgYgHQhrAChlgjIgKgHQgLgEgJgIQgfgXAGgqQAGgrBWhWIARgRIBlhhQABAEADADQAFBCCwBTIACABQBbAqBdAcIAHAHQgLAdgiA4IgFAJQghAyglAaQgNAKgTADQgigHhegjg",
      );
    this.shape_16.setTransform(114.6264, 114.375);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#9AA650")
      .s()
      .p(
        "AARCqQgVgKgYgHQhogLhpgWIgMgGQgKgEgJgIQgegYAIgqQAGgpBUhYIARgSQA1g1AugsIACAJQAHBBCuBRIACABQBbAqBcAdIAJAGQgJAcgiA5IgFAJQgfAzglAbQgNAKgUACQglgEhagjg",
      );
    this.shape_17.setTransform(114.9, 114.35);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#9AA650")
      .s()
      .p(
        "AATCsQgUgKgXgHQhngYhtgJIgMgFQgKgFgJgIQgegZAJgpQAHgnBThbIAQgSQAzg2AtgtQAAAGACAFQAIBBCtBRIACABQBaAqBcAdIAKAEQgIAcgfA7IgFAJQgfAzgkAcQgNAJgUACQgpgBhXglg",
      );
    this.shape_18.setTransform(115.1299, 114.3);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAWCuQh4g3iKAFQgQgFgPgNQgdgbAKgoQAJgoBghsQAwg2AuguQgHBFC+BZQBgAtBiAdQgHAdgeA6QgfA7goAeQgOALgYAAQgtAAhNgkg",
      );
    this.shape_19.setTransform(115.3828, 114.2522);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#9AA650")
      .s()
      .p(
        "AAICsQhygwiDAHQgRgJgNgNQgagZAJgpQAIgpBbhnQAwg4A2gvQgOBDC/BZQBgAtBhAdQgJAcgdA4QgdA3gqAdQgPALgaAAQgvAAhSghg",
      );
    this.shape_20.setTransform(115.6203, 113.9641);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#9AA650")
      .s()
      .p(
        "AgFCqQhtgph7AIQgSgLgLgNQgYgYAIgqQAHgpBXhkQAwg4A+gwQgVBAC/BZQBgAtBhAdQgLAcgcA1QgcA0gsAbQgQAKgdAAQgxAAhVgdg",
      );
    this.shape_21.setTransform(115.8343, 113.686);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#9AA650")
      .s()
      .p(
        "AgTCoQhngih0AJQgSgOgKgNQgVgVAHgrQAGgrBShfQAxg5BGgyQgcA+C+BZQBgAsBiAeQgOAcgaAxQgbAxguAaQgRAKggAAQg0AAhYgag",
      );
    this.shape_22.setTransform(116.0718, 113.3971);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#9AA650")
      .s()
      .p(
        "AggCmQhigbhtAKQgSgSgJgMQgSgUAGgrQAFgsBOhaQAxg7BOgzQgjA8C+BZQBgArBiAfIgpBKQgaAtgwAZQgTAKgjAAQg2AAhagXg",
      );
    this.shape_23.setTransform(116.2856, 113.1091);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#9AA650")
      .s()
      .p(
        "AguCkQhcgUhmALQgTgUgHgMQgPgTAFgsQAEgsBJhWQAyg9BVgzQgqA5C/BZQBgArBhAfQgSAcgYAqQgYArgyAXQgUAJgnAAQg3AAhegTg",
      );
    this.shape_24.setTransform(116.5231, 112.8431);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#9AA650")
      .s()
      .p(
        "Ag8ChQhXgMheAMQgTgYgGgLQgMgRAEgtQADgtBFhSQAxg+Beg0QgxA2C+BZQBgAsBiAeQgVAcgXAnQgWAog0AWQgWAJgrAAQg6AAhfgRg",
      );
    this.shape_25.setTransform(116.7592, 112.5577);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhJCfQhSgFhWANQgUgbgFgLQgJgPADguQACgtBAhOQAyg/Bmg2Qg4A0C+BZQBgAsBiAeQgYAcgVAkQgVAkg2AVQgYAJgxAAQg7AAhfgOg",
      );
    this.shape_26.setTransform(116.9728, 112.2744);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#9AA650")
      .s()
      .p(
        "AkKCCQgGgOACguQABgvA8hJQAyhABtg3Qg/AxC/BZQBgAsBhAeQgZAcgUAhQgUAhg4ATQg4ASi1gUQhMAChPAOQgVgegDgKg",
      );
    this.shape_27.setTransform(117.21, 112.275);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#9AA650")
      .s()
      .p(
        "AkJB/QgEgLABgwQAAguA3hGQAzhCB1g4QhGAwC/BYQBgAsBhAfQgcAcgSAdQgTAeg6ARQg6ASi9gRQhGAKhIAOQgVgggBgLg",
      );
    this.shape_28.setTransform(117.4219, 112.55);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#9AA650")
      .s()
      .p(
        "AkJB9IgBg6QgBgwAzhCQAyhCB+g5QhNAtC/BYQBgAsBhAfQgeAbgSAbQgRAag8AQQg7AQjFgLIiBAgQgWgkAAgKg",
      );
    this.shape_29.setTransform(117.6371, 112.85);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#9AA650")
      .s()
      .p(
        "AkJCAQgEgNABgvQAAguA4hHQAyhBB1g4QhFAwC+BZQBgArBiAfQgcAcgSAbQgUAgg9AVQg7AJjCgOIiEAbQgVghgCgKg",
      );
    this.shape_30.setTransform(117.3972, 112.525);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#9AA650")
      .s()
      .p(
        "AkKCCQgHgOACguQACguA8hLQAyhABsg2Qg9AyC+BZQBgArBiAfQgZAcgSAdQgXAmg+AYQg8ACi+gQIiIAVQgUgdgEgLg",
      );
    this.shape_31.setTransform(117.1528, 112.225);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhmCWIiLAPQgUgZgEgLQgLgQADguQADgtBChPQAxg/Bjg1Qg1A1C+BZQBgArBiAfQgXAcgTAeQgZAshAAdIj2gYg",
      );
    this.shape_32.setTransform(116.9, 112.325);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhiCUIiOAJQgUgWgGgLQgNgSAEgtQADgsBHhUQAxg9Bbg0QguA3C+BZQBgAsBiAeQgUAcgTAgQgcAxhBAiQg6gNi5gUg",
      );
    this.shape_33.setTransform(116.6529, 112.775);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhdCSIiSAEQgTgUgIgMQgQgSAFgtQAFgrBLhZQAyg7BRg0QgmA7C+BZQBgAsBiAeIglA9QgeA3hDAmQg6gUi1gWg",
      );
    this.shape_34.setTransform(116.3919, 113.2);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhZCQIiVgCQgSgQgKgMQgUgWAHgqQAGgrBQheQAxg6BJgxQgfA9C/BYQBgAtBhAeIgiA+QghA9hEAqQg6gbiygYg",
      );
    this.shape_35.setTransform(116.1438, 113.65);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhVCOIiYgJQgSgMgLgNQgXgWAHgrQAHgpBWhjQAxg4A/gxQgWBAC+BZQBgAtBiAdQgMAcgUAkQgkBDhGAvQg4gjiwgag",
      );
    this.shape_36.setTransform(115.892, 114.1);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhRCMIicgPQgRgIgNgNQgZgZAIgqQAIgoBbhoQAwg3A3gvQgPBDC/BYQBgAtBhAeQgJAcgUAlQgnBJhHAzQg4gritgbg",
      );
    this.shape_37.setTransform(115.6438, 114.55);

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
        .to({state: [{t: this.shape}]}, 1)
        .wait(1),
    );

    // Calque_5
    this.instance = new lib.tibiaa();
    this.instance.setTransform(172.5, 180.7, 1, 0.9373, 0, 2.9068, 0, 20.9, -0.4);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({scaleY: 1.0453, rotation: 23.4522, skewX: 0, x: 164.3, y: 202.85}, 9)
        .to(
          {
            regY: -0.2,
            scaleX: 1.0128,
            scaleY: 1.1608,
            rotation: 0,
            skewX: 35.4373,
            skewY: 29.0095,
            x: 163.6,
            y: 196.75,
          },
          5,
        )
        .to(
          {
            regY: -0.5,
            scaleX: 1.0257,
            scaleY: 1,
            skewX: 45.9317,
            skewY: 33.0707,
            x: 163.15,
            y: 190.4,
          },
          5,
        )
        .to(
          {
            regX: 21.1,
            scaleX: 1.0309,
            scaleY: 0.936,
            skewX: 53.2394,
            skewY: 34.7495,
            x: 174.2,
            y: 176.4,
          },
          5,
        )
        .to(
          {
            regX: 21.3,
            regY: -0.2,
            scaleX: 1.0362,
            scaleY: 0.9181,
            skewX: 40.6353,
            skewY: 16.5164,
            x: 184.9,
            y: 162.1,
          },
          5,
        )
        .to(
          {
            regX: 21.4,
            scaleX: 1.02,
            scaleY: 0.8377,
            skewX: 25.0704,
            skewY: 18.6708,
            x: 184.65,
            y: 164.1,
          },
          4,
        )
        .to(
          {
            regX: 20.9,
            regY: -0.4,
            scaleX: 1,
            scaleY: 0.9373,
            skewX: 2.9068,
            skewY: 0,
            x: 172.5,
            y: 180.7,
          },
          5,
        )
        .wait(1),
    );

    // Calque_6
    this.instance_1 = new lib.shoesdevant();
    this.instance_1.setTransform(187.55, 254.7, 1, 1, 0, 0, 0, 17.5, 6.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({regX: 17.6, regY: 6.6, rotation: 22.3039, x: 149.2, y: 287.85}, 9)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: 29.8032, x: 125.05, y: 279.8}, 5)
        .to({regX: 17.7, regY: 6.5, rotation: 37.3027, x: 116.7, y: 256.1}, 5)
        .to({rotation: 22.3038, x: 130.6, y: 230.9}, 5)
        .to({regX: 17.6, scaleX: 1, scaleY: 1, rotation: 7.3052, x: 153.65, y: 223.6}, 5)
        .to({regX: 17.5, regY: 6.7, rotation: 4.0593, x: 169.2, y: 228.7}, 4)
        .to({regY: 6.5, rotation: 0, x: 187.55, y: 254.7}, 5)
        .wait(1),
    );

    // Calque_4
    this.instance_2 = new lib.cuisse();
    this.instance_2.setTransform(99.3, 119.4, 1, 1, 0, 0, 0, 14.7, 2.7);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to(
          {
            regX: 14.8,
            regY: 3.1,
            scaleX: 1.1455,
            scaleY: 1.0312,
            rotation: 16.688,
            x: 103.85,
            y: 117.85,
          },
          9,
        )
        .to({regX: 14.9, scaleX: 0.9134, scaleY: 1.0271, rotation: 3.4956, x: 103.9, y: 117.9}, 10)
        .to({regX: 15, regY: 3.3, scaleY: 1.027, rotation: -20.4591, x: 104, y: 118.05}, 10)
        .to(
          {
            regX: 15.1,
            regY: 3.4,
            scaleX: 0.9518,
            scaleY: 1.015,
            rotation: -18.6153,
            x: 101.95,
            y: 118.7,
          },
          4,
        )
        .to({regX: 14.7, regY: 2.7, scaleX: 1, scaleY: 1, rotation: 0, x: 99.3, y: 119.4}, 5)
        .wait(1),
    );

    // Calque_17
    this.instance_3 = new lib.pedale();
    this.instance_3.setTransform(176.7, 261.2, 0.9025, 0.9025, 0, 0, 0, 8.3, 2.4);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({x: 174, y: 263.75}, 0)
        .wait(1)
        .to({x: 171.1, y: 266.55}, 0)
        .wait(1)
        .to({x: 168, y: 269.6}, 0)
        .wait(1)
        .to({x: 164.6, y: 272.85}, 0)
        .wait(1)
        .to({x: 161, y: 276.3}, 0)
        .wait(1)
        .to({x: 157.15, y: 280.05}, 0)
        .wait(1)
        .to({x: 153.05, y: 284}, 0)
        .wait(1)
        .to({x: 148.75, y: 288.15}, 0)
        .wait(1)
        .to({regY: 2.5, x: 144.2, y: 292.65}, 0)
        .wait(1)
        .to({regY: 2.4, x: 140, y: 292.7}, 0)
        .wait(1)
        .to({x: 135.9, y: 292.05}, 0)
        .wait(1)
        .to({x: 131.55, y: 290.75}, 0)
        .wait(1)
        .to({x: 127.15, y: 288.65}, 0)
        .wait(1)
        .to({x: 122.85, y: 285.7}, 0)
        .wait(1)
        .to({x: 118.9, y: 282.05}, 0)
        .wait(1)
        .to({x: 115.6, y: 277.95}, 0)
        .wait(1)
        .to({x: 112.95, y: 273.15}, 0)
        .wait(1)
        .to({x: 111.05, y: 267.55}, 0)
        .wait(1)
        .to({x: 110.2, y: 261.45}, 0)
        .to({regY: 2.5, x: 110.35, y: 255.95}, 1)
        .to(
          {
            regY: 2.4,
            guide: {
              path: [
                110.4,
                255.9,
                111.5,
                244.5,
                119.9,
                236.1,
                129.7,
                226.3,
                143.5,
                226.3,
                157.2,
                226.3,
                167,
                236.1,
                176.6,
                245.8,
                176.7,
                259.2,
              ],
            },
          },
          18,
        )
        .wait(1),
    );

    // pedalier
    this.instance_4 = new lib.pedalier();
    this.instance_4.setTransform(144.9, 260.1, 1, 1, 0, 0, 0, 0, 3.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({rotation: 90, x: 144.85, y: 260.05}, 9)
        .to({rotation: 180, x: 144.9, y: 260}, 10)
        .to({rotation: 270, x: 144.95, y: 260.05}, 10)
        .to({rotation: 360, x: 144.9, y: 260.1}, 9)
        .wait(1),
    );

    // velo
    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#E0A46A")
      .s()
      .p("AgDAMQgGgGABgHQABgIAFgEQAFgGADAOIgDAGQgBACADAEIAEADQgDAGgDAAQgDAAgDgEg");
    this.shape_38.setTransform(176.7933, 28.4632, 2.5, 2.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAMQgHgCgDgKQgCgGAAgFQAAgDAQADQAQACABAJQAAAIgHAEQgDABgEAAIgHgBg");
    this.shape_39.setTransform(191.1917, 49.2455, 2.5, 2.5);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#020303").s().p("AAAAHQgFgCABgFQACgHADABQAFABgBAFQgCAHgDAAIAAAAg");
    this.shape_40.setTransform(197.2481, 30.3855, 2.5, 2.5);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#F2F2F2")
      .s()
      .p(
        "AhUA4QAEgVgZhKIgBgFQABgHAHgHQAegiBGADQAkACAeAJQAbgKABABQABACgDAPIAGgCQAGgBABACQACAEgVAIIgxgFQgrgFgLAPQgJAMAYAOQAbAQAAASQAAAJADALQABAGgIACQgIACgDgOIgBgOQgIgKgDAAQgPgBgGAKQgEAJACANQACANAVAHQgfAggEABQgCAAABgIIABgJIgqAZQgKgNADgVg",
      );
    this.shape_41.setTransform(178.3347, 22.4722, 2.5, 2.5);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#F9BA7C")
      .s()
      .p(
        "ABXBVQgDgBABgFQACgGgCgBQgCgBgEgIIgDgHIhhgMQhjgOgFgEQgGgEAWg1IAWg1QBDAUAAADQAAACgVAuICGAwIAOADQAPADADAFQAGAHgKAdQgBABgOACIgOAAIgFAAg",
      );
    this.shape_42.setTransform(165.0495, 101.0625, 2.5, 2.5);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#404040").s().p("AgGADIg2gUIANgRQAMADAmAYQAsAaAOAQQgLgJg4gXg");
    this.shape_43.setTransform(107.6875, 121.325, 2.5, 2.5);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#834A38")
      .s()
      .p("AgaAMQgFgDgBgIQAAgFADgFQACgDAaAAIAaAAQAJAGgBAHQAAAJgHABQgZACgNAAQgKAAgEgBg");
    this.shape_44.setTransform(189.7445, 118.4222, 2.5, 2.5);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#404040")
      .s()
      .p("AgLASIgHgEIgDgUIAMgIQALgIADABQAFACAGAJQAFAJAAADQAAAEgIAIQgJAHgEABIAAAAQgEAAgHgEg");
    this.shape_45.setTransform(199.875, 117.4415, 2.5, 2.5);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#834A38")
      .s()
      .p(
        "AgNAcQgNgBgfgHQgfgHAAgCQgCgGADgLQAEgRAPgCQAMgCAVACQAXADAKAAQALAAAhgEQAdgDAHAHQAIAHADAJQACAHgBACQhUAZgSAAIgBAAg",
      );
    this.shape_46.setTransform(102.1054, 144.8732, 2.5, 2.5);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f("#FFF7E4").s().p("AgEgfIAHAVQAGAXgNATg");
    this.shape_47.setTransform(238.949, 172.5125, 2.5, 2.5);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#A6A6A6")
      .s()
      .p("AAbAgQgXAAgPgJQgQgKAAgNQAAgMAQgJQAPgKAXAAIABAAIAAA/g");
    this.shape_48.setTransform(230.75, 172.5125, 2.5, 2.5);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#4F4999")
      .s()
      .p(
        "AiEAPQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIECgdQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABQABABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIkDAdQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg",
      );
    this.shape_49.setTransform(222.5313, 255.1097, 2.5, 2.5);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#4F4999")
      .s()
      .p(
        "AB4AvIjyhYQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIDyBYQABAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAg",
      );
    this.shape_50.setTransform(34.25, 241.1018, 2.5, 2.5);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#4F4999")
      .s()
      .p(
        "AhOAYQg+h0gEgKQgGgQAJgNQAJgOAZAAIBnAAQBQABAFABQADAAA/AlIgGAKQg4ghgHgDQgFgBhNAAIhngBQgSAAgHAKQgFAIAEAKQAEAJB+DuIgKAFIhBh6g",
      );
    this.shape_51.setTransform(65.8772, 215.2313, 2.5, 2.5);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#4F4999").s().p("AiEgDQgDgCACgGIADgFIEJANIgBAVg");
    this.shape_52.setTransform(96.0455, 254.45, 2.5, 2.5);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#4F4999").s().p("AhjCYQgBgGC/kvIAJAOIi9EsQgJgBgBgEg");
    this.shape_53.setTransform(87.6869, 213.325, 2.5, 2.5);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#404040")
      .s()
      .p(
        "ACIBQIgBAAIlAhHQgQgCgLgMQgKgNAAgRQAAgSANgNQAOgOATAAIFGAKQAeAAAVAXQAWAVAAAfQAAAfgWAXQgVAWgeAAQgIAAgGgBgAh0gBIC/AfIADhFIi/gGg",
      );
    this.shape_54.setTransform(110.5, 257.7, 2.5, 2.5);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#4F4999")
      .s()
      .p(
        "ABDB4QhIg4gphZIgahOQgDgLANgEQAMgEADAFIAQA0QAQA2ALATQAQAhA9BGQABACgCAEQAAABAAABQgBAAAAABQgBAAAAABQAAAAgBAAIgCgBg",
      );
    this.shape_55.setTransform(238.1533, 222.5361, 2.5, 2.5);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#4F4999").s().p("AgmhFIAWgHIA3CRIgTAIg");
    this.shape_56.setTransform(215.5, 176.325, 2.5, 2.5);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics.f("#4F4999").s().p("AiLCXIEQk7IAGAZIj/Ewg");
    this.shape_57.setTransform(181, 219.0125, 2.5, 2.5);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f("#4F4999").s().p("Ai+AKIF2gkIAHASIl9Akg");
    this.shape_58.setTransform(162.25, 169.2, 2.5, 2.5);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#4F4999").s().p("AhVivIAWgIICVFlIgSALg");
    this.shape_59.setTransform(130.125, 216.825, 2.5, 2.5);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#3C387B")
      .s()
      .p(
        "AD3CCQAAhohIhIQhJhKhmAAQhlAAhJBKQhIBIAABoQAAAJgJAAQgJAAAAgJQAAhvBOhOQBOhPBsAAQBtAABOBPQBOBOAABvQAAAJgJAAQgJAAAAgJg",
      );
    this.shape_60.setTransform(66.1875, 217.7625, 2.5, 2.5);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#3C387B")
      .s()
      .p(
        "AhwC7QgYgzAAg7QAAhuBOhPQBNhPBtAAQAJAAgBAJQABAJgJAAQhnAAhHBJQhJBKAABnQABA1AVAyQADAIgHADIgDABQgHAAgBgFg",
      );
    this.shape_61.setTransform(220, 232.075, 2.5, 2.5);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f("#B6453C").s().p("AgHASIAAgjIAPAAIAAAjg");
    this.shape_62.setTransform(29.1875, 186.0125, 2.5, 2.5);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#A6A6A6")
      .s()
      .p(
        "AgLArQgQgtAAgDQAAgCAUgWQASgVgCgIQgCgJgNgBIgOABIACgVIAVADQAWAFADANQADANgTAaIgTAXIAdBZIgRAFIgQgug",
      );
    this.shape_63.setTransform(205.8625, 136.8875, 2.5, 2.5);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#B6453C").s().p("AgCAWIAAgrIAFAAIAAArg");
    this.shape_64.setTransform(7.8125, 215.2, 2.5, 2.5);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f("#404040").s().p("AgJgQIAJACQAKADAAAGQgBAJgSANg");
    this.shape_65.setTransform(11.0028, 213.95, 2.5, 2.5);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#A6A6A6")
      .s()
      .p("Ag0gXIAdACIAMAhIAqgMIAPgYIAHACIgSAeIhEARIAAAAQgCAAgRgwg");
    this.shape_66.setTransform(98.5, 153.8256, 2.5, 2.5);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f("#A6A6A6").s().p("AgbgqIASgDIAlBXIgQAEg");
    this.shape_67.setTransform(106.5625, 161.0125, 2.5, 2.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#693C2D")
      .s()
      .p("AgcAPQgCgBgCgGIgCgIQAAgCAegHIAdgFIAGAAIADATQgxAKgKAAIgDAAg");
    this.shape_68.setTransform(186.2578, 122.4232, 2.5, 2.5);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#363636")
      .s()
      .p("AACAMIgJgDIgGgSIAXgDQAGAUgEADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgGgBg");
    this.shape_69.setTransform(196.75, 121.4986, 2.5, 2.5);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#878787")
      .s()
      .p("AALgJQgEgDgQACIgRACIgFgUIAfgCQAdAAACALQADASgWAfIgRABQAXgjgHgFg");
    this.shape_70.setTransform(201.6576, 125.8875, 2.5, 2.5);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f("#868686").s().p("AgTAaIARgSIgCgtIAYAVIgUAtIgJAJg");
    this.shape_71.setTransform(226.5, 183.3875, 2.5, 2.5);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#828C43")
      .s()
      .p("AAFBaQglAAgHgJQgGgKAfhQQAPgpARgnIgLA1QABABAJACIAYB6IgbABIgJAAg");
    this.shape_72.setTransform(138.861, 88.1531, 2.5, 2.5);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#9AA650")
      .s()
      .p(
        "AhPCHQg4gngJgQQgIgQBUhkQBLhbATgOQAUgRAGgDQAWgMAZAFQAgANAKAgQAIAXgGATQgEAOgRAlQgTAqgVAnQgUAkgtAuQgWAWgTAQIg3gkg",
      );
    this.shape_73.setTransform(131.8182, 92.5464, 2.5, 2.5);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#E0A46A")
      .s()
      .p(
        "AgKAmQgFgTgZgMQgMgGgGgPQgFgOAFgMQAGgQBfAJQAnAggqgMQgagHgaABQgTABgIAEQgFACABAHQABAGALAFQALAEAJAHQAIAIABAGQACAHgCAcQgGgFgCgJg",
      );
    this.shape_74.setTransform(186.2204, 16.4487, 2.5, 2.5);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#E0A46A")
      .s()
      .p("AgTACIAngZIAagGQgYAmgJACQgGABgDgEIgDgFQgVAXgZADQAFgHAVgUg");
    this.shape_75.setTransform(166.375, 42.075, 2.5, 2.5);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#F9BA7C")
      .s()
      .p(
        "AhcBhQgdggAGgCQAIgDAbgdIApiTQAGgEAtgGQA2gHASALQASALAAAjQAAARgEARIANAXQALAVgHAHIgRAMIgEAVQgGAYgMALQgYAYgbgIIgmgMQgPADgTAXIgQAXIgdghg",
      );
    this.shape_76.setTransform(179.1138, 37.2574, 2.5, 2.5);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics.f("#E0A46A").s().p("AAqAWIiEgXIAKggIBQAPIBbAZIgiAbg");
    this.shape_77.setTransform(169.375, 113.0125, 2.5, 2.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
          ],
        })
        .wait(39),
    );

    // rouearriere
    this.instance_5 = new lib.roueassiette();
    this.instance_5.setTransform(66.15, 250.85, 1, 1, 0, 0, 0, 62, 61.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

    // roueavant
    this.instance_6 = new lib.roueassiette();
    this.instance_6.setTransform(254.65, 250.55, 1, 1, 0, 0, 0, 62, 61.2);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39));

    // ombre
    this.instance_7 = new lib.Path_43();
    this.instance_7.setTransform(253.5, 307.85, 2.5, 2.5, 0, 0, 0, 25.2, 2.6);
    this.instance_7.alpha = 0.25;

    this.instance_8 = new lib.Path_44();
    this.instance_8.setTransform(64.85, 307.85, 2.5, 2.5, 0, 0, 0, 25.2, 2.6);
    this.instance_8.alpha = 0.25;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance_8}, {t: this.instance_7}]})
        .wait(39),
    );

    // Calque_11
    this.instance_9 = new lib.tibiaa();
    this.instance_9.setTransform(163.15, 190.4, 1.0257, 1, 0, 45.9317, 33.0707, 20.9, -0.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .to(
          {
            regX: 21.2,
            regY: -0.2,
            scaleX: 1.0362,
            scaleY: 0.9816,
            skewX: 40.6352,
            skewY: 16.5164,
            x: 184.85,
            y: 162.15,
          },
          10,
        )
        .to(
          {
            regX: 20.9,
            regY: -0.4,
            scaleX: 1,
            scaleY: 0.9373,
            skewX: 2.9068,
            skewY: 0,
            x: 172.5,
            y: 180.7,
          },
          9,
        )
        .to({regY: -0.5, scaleY: 1, rotation: 23.4521, skewX: 0, x: 164.35, y: 202.8}, 10)
        .to({scaleX: 1.0257, rotation: 0, skewX: 45.9317, skewY: 33.0707, x: 163.15, y: 190.4}, 9)
        .wait(1),
    );

    // Calque_14
    this.instance_10 = new lib.shoesdevant();
    this.instance_10.setTransform(123.4, 252.75, 1, 1, 7.3052, 0, 0, 17.6, 6.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .to({x: 153.65, y: 226.4}, 10)
        .to({regX: 17.5, rotation: 0, x: 187.55, y: 254.7}, 9)
        .to({regX: 17.6, regY: 6.6, rotation: 22.3039, x: 149.9, y: 285.4}, 10)
        .to({regY: 6.5, rotation: 7.3052, x: 123.4, y: 252.75}, 9)
        .wait(1),
    );

    // Calque_15
    this.instance_11 = new lib.cuisse();
    this.instance_11.setTransform(103.9, 117.9, 0.9134, 1.0271, 3.4956, 0, 0, 14.9, 3.1);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .to({regX: 15, regY: 3.3, scaleY: 1.027, rotation: -20.4591, x: 104, y: 118.05}, 10)
        .to({regX: 14.7, regY: 2.7, scaleX: 1, scaleY: 1, rotation: 0, x: 99.3, y: 119.4}, 9)
        .to(
          {
            regX: 14.8,
            regY: 3.1,
            scaleX: 1.02,
            scaleY: 0.9555,
            rotation: 16.6883,
            x: 110.8,
            y: 122.35,
          },
          10,
        )
        .to({regX: 14.9, scaleX: 0.9134, scaleY: 1.0271, rotation: 3.4956, x: 103.9, y: 117.9}, 9)
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 316.7, 314.1);

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

    // Calque_1
    this.instance = new lib.cyclisteglobal();
    this.instance.setTransform(359.6, 265.9, 1, 1, 0, 0, 0, 158.3, 157.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Calque_1 (mask)
    let mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "EgAiAg/Qkugbk4jiQk0jhjSlYQh2BfifA0QidA0iHgMQjkgUisj/Qi4kOBZkKQAFgYARgkQAhhKA5g9IgLgBQiqgPixh7Qiuh4iAi7QiHjFgrjYQgwjvBJjZQAoi0CxitQFilXKqAqQDLANDMDeQDVDpBYFLQEEjrFzh4QHHiVJaAmQEJAPEdD6QB2kBD/iiQGDj4JsAnQEnATELF0QEgGSAFH6QAFGQngEmQjNB+jyBAQjwBAjOgSQhMgFhVgeIABBMQAEDtjpEpQjNEHknDJQj9CvmaBwQlEBYjaAAQgoAAgjgDg",
    );
    mask.setTransform(350.2651, 211.431);

    // Calque_1
    this.instance_1 = new lib.paysage();
    this.instance_1.setTransform(1162.4, 174.1, 2.5, 2.5, 0, 0, 0, 445.1, 121.2);

    let maskedShapeInstanceList = [this.instance_1];

    for (
      let shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(427.7, 298, 272.90000000000003, 124.89999999999998);
  // library properties:
  lib.properties = {
    id: "D5BF51ADC3CB5E4BAF06476BB5B4681D",
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
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681D"] = {
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
var exportRoot;
export default null;
