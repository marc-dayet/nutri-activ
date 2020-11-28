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

  (lib.tomate2 = function (mode, startPosition, loop, reversed) {
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
      .f("#128136")
      .s()
      .p(
        "AgyBlQAIAAAGgKQAMgTgHguQgPAVgSAMQgkAYgPgrQgPgqAGgRIAJgJIAIAwQARApAogpQgagIgNgNQgcgcA/geQgNAJgIALQgQAWAaAKQAbAKALgMQAJgKAAgaQAAgSAEgZIADgWIAHA3QAHA3AIgCQARgDAIgGQALgKADgYQAEgfACAlQACAigIAKQgEAFAGADQAHAEAMgDQAggIAYgkQABAVgMAQQgXAjhAgQIAOAbQATAYAfgFQgSAEgTgDQgqgGgJghQgIgigHAgQgHAeADAYQACARgNAGQgEACgEAAQgJAAgIgKg",
      );
    this.shape.setTransform(48.5769, 16.634, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#80133C")
      .s()
      .p(
        "AAWEPQiPgVhchMQhjhSAAh2QAAh1BUhBQBQg/CJgDIAOARIATAyQgGAEgHAGQgPANgHAPQgHAPgUANQgJAGgJADQAHgJAEgNQAIgagLgSQgLgTgkAQIghATQAGgLAPgMQAdgZApgFQgOgGgSgDQglgIgWAKQgeANgTAdQgVAhAAAqQACBVAlBMQAmBOA5AfQBFAmBSAEQBrAEB5g2QgrBJhIAkQg6AdhDAAQgZAAgagEg",
      );
    this.shape_1.setTransform(46.8997, 55.0742, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#E01741")
      .s()
      .p("AAAEPQiPgVhchMQhjhSAAh2QAAh4BYhCQBTg+CQAAQCTAABiA+QBtBFAAB1QAACEhaBaQhQBPhwAAQgaAAgbgEg");
    this.shape_2.setTransform(50.2368, 55.0484, 1.4998, 1.4998);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.tomate2, new cjs.Rectangle(0, 0, 100.5, 96.4), null);

  (lib.tomate1 = function (mode, startPosition, loop, reversed) {
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
      .f("#F6AF99")
      .s()
      .p("AAOBEQgWgHgVguQgbg7gKgMQgGgHALgEQALgEATADQAyAIAgAnQAfAmgXAfQgQAWgSAAQgFAAgGgCg");
    this.shape.setTransform(73.0719, 41.7841, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F6AF99")
      .s()
      .p(
        "AAkCmQgHgDACgrQAHiBgggjIhQhDQgsglATgQIAOgBQASgBATAGQA9ARAzBHQAqA6AAA4QAAAugaAjQgfAsgLAAIgCgBg",
      );
    this.shape_1.setTransform(82.5385, 46.078, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#128136")
      .s()
      .p(
        "AgyBlQAIAAAGgKQAMgTgHguIghAhQgkAYgPgrQgPgqAGgRIAJgJIAIAwQARApAogoQgagIgNgNQgcgcA/gfIgVAUQgQAWAaAKQAbAKALgMQAJgJAAgaQAAgSAEgaIADgWIAHA3QAHA3AIgCQARgCAIgHQALgJADgYQAEggACAmQADAhgJAKQgEAFAGADQAGAEANgDQAggHAYgkIgBAMQgDAPgHAKQgXAihAgQIAOAbQASAXAcgDQgQACgRgCQgqgGgJghQgIgigHAgQgHAeADAYQACARgNAGQgEACgEAAQgJAAgIgKg",
      );
    this.shape_2.setTransform(48.5269, 16.6344, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#80133C")
      .s()
      .p(
        "ABRENQiRgahZhJQhkhRAAh1QAAh1BUhCQBQg+CIgDIAPARIATAyIgNAKQgQAMgHAQQgHAPgUAMQgJAGgJADQAHgJAEgMQAIgagLgTQgKgSgkAQIghATQAGgLAPgMQAdgZAogFQgOgGgRgEQglgIgWALQgeANgTAdQgVAhAAAqQACBVAlBMQAmBOA5AfQAYAOAJgWQACgCAMg+QAZh2BkgtQgRAcAgBLQASAsApBcQAcBMgaAeQgWAYg6AAQgiAAgugIg",
      );
    this.shape_3.setTransform(37.9794, 55.4374, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#AF1641")
      .s()
      .p("AAAEPQiPgVhchMQhjhSAAh2QAAh4BYhCQBTg+CQAAQCTAABiA+QBtBFAAB1QAACEhaBaQhQBPhwAAQgaAAgbgEg");
    this.shape_4.setTransform(50.1928, 55.1239, 1.4998, 1.4998);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.tomate1, new cjs.Rectangle(0, 0, 100.5, 97.1), null);

  (lib.soda = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#EF7D67").s().p("AAaA/QhxgTgsgSIA/hnIBYAUIBkAPIAMB4QgwgGg6gJg");
    this.shape.setTransform(65.4834, 137.5122, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#B1C1CA").s().p("AgwAYIAIg7IBZAMIgIA8g");
    this.shape_1.setTransform(79.2819, 17.1882, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#E61D49").s().p("AgxAhIAKhNIBZAMIgKBNg");
    this.shape_2.setTransform(80.7442, 6.8018, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BCIAfg5QAog7A0gUIhYCNg");
    this.shape_3.setTransform(70.8079, 37.8109, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#F1D71C")
      .s()
      .p("AhACFQgGgGgHgPQgOgcgDgpQgDgoAUhSIAUhLIBUAMIgQArQgQA0gDAsQgNCLB1ATg");
    this.shape_4.setTransform(28.1645, 258.5299, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ADFAoQhlgShtgHQhvgHgtggIgIgGIhLgMIBKALQgIgHgEgIIgDgKIBKAiIAQADQDqAkBhAYQAwAMABAEQgdgHgzgKg",
      );
    this.shape_5.setTransform(41.4907, 285.9206, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#F1D71C").s().p("AggAyQAFgygPgiIgQgZIB0AQIgUBng");
    this.shape_6.setTransform(27.5752, 213.5912, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#DF392E").s().p("Ag8AyIAbgnQAfgtASgfIAtBiIgFAhg");
    this.shape_7.setTransform(35.7868, 139.837, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#DF392E").s().p("AgyC5QgGgtgNgpIgMghIBykNQgbCQAWBWQAKAqAQAPIAcB4g");
    this.shape_8.setTransform(48.9478, 88.5802, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#EA4D7B").s().p("AhgCzIBal4IBnAOIg1F9g");
    this.shape_9.setTransform(45.3107, 179.4325, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhTEIQAOg4AKhQQAUiggTh6QgMhOgLgiIgJgTIAxAGQA2AFAhgBIANA9QAPBBAMATQASAbgxCxQgZBagcBUQgIASgQALQgMAJgMAAQgSAAgTgWg",
      );
    this.shape_10.setTransform(99.875, 174.4252, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#E7324F").s().p("AiICxIAMiVQAOiiAOhIIDpAgIg1F9g");
    this.shape_11.setTransform(39.3114, 178.0827, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#E94D35")
      .s()
      .p(
        "Ak8LXIABgEQgugwACgdQABgVAWhfIAVhcQAQgcALgrQAXhWgXhEQAGhcAJhfQATi9ANgOQBehfgMhuQgDgigOggIgNgYQA6iRAYg3QAhhJAcguIFiAwQAPA0AMBQQAIA6ARCcQgIAHgLANQgVAbgNAhQgoBmBAB1QAJAQghC7QgRBdgSBbQgpA8AEBaQADAsAKAgIgKBeQgKBhgFAUQgFAcg6AjIAAADg",
      );
    this.shape_12.setTransform(65.1022, 169.3462, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#E94C31").s().p("AhvAYIAKhNIDVAdIgLBOg");
    this.shape_13.setTransform(89.9537, 8.0539, 1.4997, 1.4997);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#E8F1DC").s().p("AhvAVIAKhHIDVAeIgKBHg");
    this.shape_14.setTransform(88.6039, 17.6147, 1.4997, 1.4997);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#B1C1CA").s().p("Ag/AAIgbgRIC1AYIgSALg");
    this.shape_15.setTransform(87.9665, 23.801, 1.4997, 1.4997);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#B7D1EF")
      .s()
      .p(
        "AlSNOIABgEQgRgRgMgSQgUgcACgTQABgWAVh6IAUh2QASgVANgjQAbhGgYhKQALhiAPhlQAdjIAOgPQBkhlgahqQgIgigUgeIgSgXQBGiwAag7QArhkAsg8QBHhkBQgKIBMAKIgKAIQgFAKAbANQBPAmAYBmQAOA4AGBpQAIA9ArC4QgJAGgLAMQgYAYgOAfQgsBhBFB8QAJASgjDHQgSBkgUBhQgrBAgCBJQgBAkAIAYQgFDpgIAkQgHAeg8AkIAAAEg",
      );
    this.shape_16.setTransform(64.7502, 160.1261, 1.4997, 1.4997);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AlSNOIABgEQgRgRgMgSQgUgcACgTQABgWAVh6IAUh2QASgVANgjQAbhGgYhKQAHhiAJhlQAUjKAOgOQBkhmgRhpQgFghgQgeIgPgXQBGiwAag7QArhkAsg8QBHhkBQgKIBMAKQB3AzAmESQAJA+AUC+QgJAGgLAMQgYAYgOAfQgsBhBFB8QAJASgjDHQgSBkgUBhQgrBAAHBLQADAmAMAZIgMB2QgNB8gFAWQgHAeg8AkIAAAEg",
      );
    this.shape_17.setTransform(64.7502, 160.1261, 1.4997, 1.4997);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.soda, new cjs.Rectangle(0, 0, 122.6, 297.6), null);

  (lib.saucissons = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#A52C48").s().p("AAJg6QAHAJADASQACARgFATQgEAVgLAPQgJAPgLADg");
    this.shape.setTransform(33.2012, 165.1304, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#AF1641")
      .s()
      .p("AgGAiQgIgCgEgMQgEgLADgNQAEgOAIgJQAHgIAIACQAIACADAMQAEALgDANQgEAOgHAJQgGAGgGAAIgDAAg");
    this.shape_1.setTransform(57.6773, 161.9184, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#DB9274")
      .s()
      .p("AgNAwQgIgCgEgIIAQhRQAJgFAHABQAMADAFARQAFAQgFASQgEAUgLAMQgJAJgJAAIgEAAg");
    this.shape_2.setTransform(79.4348, 163.8764, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#D27541")
      .s()
      .p("AgKAwQgLgDgFgQQgFgQAEgTQAFgTALgMQALgMALACQALADAFARQAFAQgEASQgFAUgLAMQgJAJgIAAIgFAAg");
    this.shape_3.setTransform(78.9375, 163.8682, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#D27541")
      .s()
      .p("AgGAgQgIgCgDgKQgEgLAEgNQADgNAHgIQAHgIAHACQAIACADALQADAKgCANQgDAOgIAHQgGAGgFAAIgDAAg");
    this.shape_4.setTransform(51.5655, 196.9643, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#D27541")
      .s()
      .p("AgGAgQgIgCgDgLQgEgLAEgMQACgNAIgIQAHgIAHACQAIACADAKQADALgDANQgCANgIAIQgGAGgFAAIgDAAg");
    this.shape_5.setTransform(65.514, 182.3536, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#B4341A").s().p("AgIgBQAFgZAPgPIgSBTQgIgTAGgYg");
    this.shape_6.setTransform(30.4054, 193.2522, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#D27541")
      .s()
      .p("AgMA4QgMgEgHgTQgFgSAFgWQAGgXAMgOQANgOANAEQANADAFATQAGASgFAWQgFAXgOAOQgKALgJAAIgGAAg");
    this.shape_7.setTransform(33.8675, 194.1881, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#DB9274").s().p("AAGgyQAHAHACAPQACAQgEARQgEARgIANQgGAMgJAEg");
    this.shape_8.setTransform(66.7638, 215.1498, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#D27541")
      .s()
      .p("AgLA1QgKgCgEgSQgEgSAFgUQAFgWALgOQAJgOALADQAKACAEASQAEASgFAVQgFAWgKANQgKAMgIAAIgDgBg");
    this.shape_9.setTransform(64.914, 214.9248, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#AF1641")
      .s()
      .p("AgNA+QgNgDgFgVQgFgUAGgZQAFgZAOgQQAMgRANAEQANAEAFAUQAFAVgGAYQgGAagNAQQgKANgKAAIgFgBg");
    this.shape_10.setTransform(43.279, 218.3369, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#AF1641")
      .s()
      .p("AgIArQgMgDgFgPQgFgOAEgRQAEgSAKgKQAMgLAKADQAKADAGAPQAFAOgEARQgEASgLAKQgIAIgIAAIgEAAg");
    this.shape_11.setTransform(24.4186, 230.673, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#DB9274")
      .s()
      .p("AgTAjQgDgRADgVQAEgZALgRQALgQAMACIACAAIgcB3QgJgHgDgSg");
    this.shape_12.setTransform(67.0224, 249.4797, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#B4341A").s().p("AgZgiQAPAEANAOQAOANAGAOQAGAPgGAJQgggbgQgqg");
    this.shape_13.setTransform(6.4304, 323.4752, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#DB9274")
      .s()
      .p("AgmAHQAGgQAPgLQARgNAQAAQARgBAIAMIABADQgjApguANQgGgMAHgQg");
    this.shape_14.setTransform(38.526, 328.5731, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#AF1641")
      .s()
      .p("AgFAUQgHgCgDgIQgCgHACgIQADgIAGgEQAGgEAGACQAGACAEAIQACAHgCAIQgDAIgGAEQgEADgDAAIgFgBg");
    this.shape_15.setTransform(32.1427, 285.7919, 1.4998, 1.4998);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#DB9274")
      .s()
      .p("AgLAyQgIgCgBgQQgCgRAFgTQAGgVAIgNQAIgOAIACQAHADACAQQABAQgFAUQgFAVgJANQgHAMgGAAIgCgBg");
    this.shape_16.setTransform(49.6139, 302.7124, 1.4998, 1.4998);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#BB432B").s().p("AgGABQAEgXAKgOIgMBJQgEgQACgUg");
    this.shape_17.setTransform(10.4576, 280.055, 1.4998, 1.4998);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#D27541")
      .s()
      .p("AgGAzQgLgCgFgQQgGgQADgUQADgVAKgOQAJgOAKACQALACAFAQQAGAQgDAUQgDAVgKAOQgIAMgJAAIgCAAg");
    this.shape_18.setTransform(13.2823, 280.9474, 1.4998, 1.4998);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#A52C48")
      .s()
      .p("AgJAhQgKgDgDgNQgEgMAFgMQAEgOAJgHQAJgHAJADQAKADADAMQAEANgFAMQgEAOgJAHQgHAFgFAAIgGgBg");
    this.shape_19.setTransform(36.1547, 267.7564, 1.4998, 1.4998);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#AF1641")
      .s()
      .p("AgJA+QgMgCgGgUQgGgTAEgZQAEgaAMgRQALgQAMACQAMACAGAUQAGAUgEAYQgEAagMARQgKAPgKAAIgDgBg");
    this.shape_20.setTransform(24.1561, 253.1034, 1.4998, 1.4998);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#DB9274")
      .s()
      .p("AgPAzQgEgBgDgEIANguQAJgeABgTIACgBIAFAAQAKADADARQAEARgFATQgGAVgKANQgIALgIAAIgDAAg");
    this.shape_21.setTransform(54.1483, 279.804, 1.4998, 1.4998);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#D78151")
      .s()
      .p("AgLAzQgJgDgEgRQgDgQAEgUQAGgVAKgNQAJgNAJACQALADADARQAEARgGATQgFAVgKANQgIALgIAAIgDAAg");
    this.shape_22.setTransform(53.5903, 279.7926, 1.4998, 1.4998);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#D27541")
      .s()
      .p("AgDAkQgHAAgEgMQgEgLABgOQACgPAGgKQAGgKAHABQAHABAEALQAEALgBAOQgCAPgGAKQgGAJgFAAIgCAAg");
    this.shape_23.setTransform(10.5826, 306.1945, 1.4998, 1.4998);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#D27541").s().p("AAlhTIAPg+QADgFgEBDQgIB5gwBCQgYAigXAJQAyg/Aning");
    this.shape_24.setTransform(31.6702, 308.0805, 1.4998, 1.4998);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#AF1641")
      .s()
      .p("AgQB3QgLhPAdiNQARhQABAPQAAAKgJBSQgWDXALAcQgLgLgFgng");
    this.shape_25.setTransform(19.6254, 307.6883, 1.4998, 1.4998);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#D27541")
      .s()
      .p("AgMA7QgMgDgEgTQgFgUAGgYQAFgYAMgPQAMgQALADQAMAEAEATQAFAUgGAXQgFAZgMAPQgLANgIAAIgEgBg");
    this.shape_26.setTransform(46.7286, 243.2352, 1.4998, 1.4998);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#D27541")
      .s()
      .p("AjaJjIgXgIQAkAHAxgzQBfhnA7kjQAWhyBMlTIBIk+IBKgGIkCQjQgNAvgfAsQg3BLhNAAQgNAAgNgCg");
    this.shape_27.setTransform(55.84, 242.6013, 1.4998, 1.4998);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#80133C")
      .s()
      .p("Ah1GVQgGglADgoIAFghIDNtOIAgAEIh/IqQhdFIAtCMQAWBHAoAFIgEABQhmgfgUh0g");
    this.shape_28.setTransform(18.2318, 250.5083, 1.4998, 1.4998);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#80133C")
      .s()
      .p("AiXIkQhqgegUh0QgGglADgpIAEghIDPtOIFfBMIjQNlQgOA0gkAtQg0BFhJAAQgYAAgagIg");
    this.shape_29.setTransform(42.2666, 251.1176, 1.4998, 1.4998);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#80133C").s().p("AkoJ+ID8x+QA5BVCUhuQBKg3A+hIIl5Uxg");
    this.shape_30.setTransform(46.0625, 230.4375, 1.5, 1.5);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#B4341A").s().p("AAIg1QAJAHACARQACARgFATQgFASgKANQgJANgLAEg");
    this.shape_31.setTransform(33.6075, 163.3681, 1.4998, 1.4998);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#D27541")
      .s()
      .p("AgHAfQgJgCgDgLQgDgKAEgMQADgNAIgIQAIgHAIACQAHACAEALQADAKgEAMQgDANgIAIQgHAGgFAAIgDgBg");
    this.shape_32.setTransform(53.0654, 189.2907, 1.4998, 1.4998);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#DB9274")
      .s()
      .p("AgOAsQgHgCgGgKIAXhJQAHgEAHACQALADAFAPQAEAPgFASQgFASgMAKQgIAIgJAAIgFAAg");
    this.shape_33.setTransform(73.1089, 187.0279, 1.4998, 1.4998);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#D27541")
      .s()
      .p("AgLAsQgLgDgFgPQgEgPAFgSQAFgSAMgKQAKgLALADQAMADAEAPQAEAPgFASQgFASgLAKQgJAJgIAAIgFgBg");
    this.shape_34.setTransform(72.7616, 187.0146, 1.4998, 1.4998);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#D27541")
      .s()
      .p("AgLAsQgMgDgEgPQgEgPAFgRQAFgSALgLQALgLALADQAMAEAEAPQAEAPgFARQgFASgLAKQgJAJgIAAIgFgBg");
    this.shape_35.setTransform(44.6398, 169.7182, 1.4998, 1.4998);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#D65E68")
      .s()
      .p("AgHAdQgIgCgDgKQgDgKAEgLQADgNAIgHQAHgHAIACQAHADADAKQADAKgDALQgEAMgIAHQgFAGgFAAIgEgBg");
    this.shape_36.setTransform(68.2887, 142.459, 1.4998, 1.4998);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#D27541")
      .s()
      .p("AgIAdQgHgCgDgKQgDgKAEgLQADgMAHgHQAIgIAHACQAIADADAKQADAKgEALQgDAMgIAHQgGAGgFAAIgEgBg");
    this.shape_37.setTransform(69.4135, 165.5446, 1.4998, 1.4998);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#AF1641").s().p("AgIgCQAHgYANgLIgUBLQgHgSAHgWg");
    this.shape_38.setTransform(43.7005, 139.7832, 1.4998, 1.4998);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#D65E68")
      .s()
      .p("AgNAzQgNgEgGgRQgFgSAGgUQAGgVAOgMQAMgMANADQANAEAGARQAFASgGAUQgGAVgOAMQgKAKgJAAIgGgBg");
    this.shape_39.setTransform(47.1035, 140.6216, 1.4998, 1.4998);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#D9818E").s().p("AAKgtQANAPgKAiQgEARgJAMQgIALgJACg");
    this.shape_40.setTransform(85.2376, 139.3333, 1.4998, 1.4998);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#D65E68")
      .s()
      .p("AgMAwQgLgCgDgRQgDgPAFgUQAGgUALgNQALgMAKADQAKADADAQQADARgFATQgGAUgLAMQgIAKgIAAIgEgBg");
    this.shape_41.setTransform(83.5494, 138.9208, 1.4998, 1.4998);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#D65E68")
      .s()
      .p("AgPA5QgNgEgEgTQgEgTAGgXQAHgXANgOQANgOANADQANAEAEATQAFATgHAXQgHAXgNAOQgLAMgJAAIgGgBg");
    this.shape_42.setTransform(66.2579, 125.6222, 1.4998, 1.4998);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#D65E68")
      .s()
      .p("AgNAnQgHgCgFgHIAShCQAIgEAHACQALADAFANQAEAOgEAPQgFARgLAJQgIAHgHAAIgGgBg");
    this.shape_43.setTransform(55.7838, 106.4932, 1.4998, 1.4998);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#AF1641")
      .s()
      .p("AgKAnQgLgDgFgNQgEgOAEgQQAFgQALgJQAKgKALAEQALADAFANQAEAOgEAPQgFARgLAJQgIAHgIAAIgFgBg");
    this.shape_44.setTransform(55.3526, 106.4725, 1.4998, 1.4998);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f("#D9818E").s().p("AgHA3QgLgEgDgTQgCgTAIgWQAGgTAKgMQALgNALgCIgcBvg");
    this.shape_45.setTransform(100.6779, 112.4863, 1.4998, 1.4998);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#80133C").s().p("AgXgeIAGglQAeAHAIAOQAFAGgCAFIgUBnQgcg0ABgug");
    this.shape_46.setTransform(96.756, 10.1977, 1.4998, 1.4998);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#AF1641")
      .s()
      .p("AglAPQAhgZApgGQABAKgMAIQgMAJgRAEQgJACgJAAQgIAAgIgCg");
    this.shape_47.setTransform(81.3387, 22.7213, 1.4998, 1.4998);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#D9818E")
      .s()
      .p("AAAAnQgNgJgJgSQgIgQACgQQACgQAKgHQAhAgANAzIgDACQgFACgGAAQgHAAgJgFg");
    this.shape_48.setTransform(111.5411, 33.7063, 1.4998, 1.4998);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#D65E68")
      .s()
      .p("AgCATQgHgBgEgHQgDgGABgHQACgIAFgFQAGgEAFABQAHABAEAGQADAHgBAHQgBAIgGAEQgFAEgEAAIgCAAg");
    this.shape_49.setTransform(86.9616, 65.6663, 1.4998, 1.4998);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#D9818E")
      .s()
      .p("AgLAvQgHgCgCgPQgCgPAFgTQAFgTAJgMQAIgNAHACQAHACACAPQACAPgFASQgFAUgIANQgHAKgHAAIgCAAg");
    this.shape_50.setTransform(109.834, 60.4796, 1.4998, 1.4998);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#D65E68")
      .s()
      .p("AgHAtQgIgCgDgOQgDgOAEgRQADgTAIgMQAHgMAHACQAIABADAOQADAOgEARQgDATgIAMQgHALgGAAIgBAAg");
    this.shape_51.setTransform(95.9113, 43.8997, 1.4998, 1.4998);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#AF1641").s().p("AgFgFQAGgRAKgKIgUBBQgEgRAIgVg");
    this.shape_52.setTransform(65.5265, 59.8422, 1.4998, 1.4998);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#D65E68")
      .s()
      .p("AgQAsQgKgDgDgQQgCgQAIgSQAGgSANgKQALgKAKADQAKAEADAQQACAQgIARQgGATgNAKQgIAIgHAAIgGgCg");
    this.shape_53.setTransform(68.2887, 60.4046, 1.4998, 1.4998);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#D65E68")
      .s()
      .p("AgFAgQgKgCgFgLQgFgKADgMQACgNAJgIQAIgIAJACQAJABAGALQAFAKgDAMQgCANgJAIQgHAHgHAAIgDAAg");
    this.shape_54.setTransform(82.3496, 82.2149, 1.4998, 1.4998);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#D65E68")
      .s()
      .p("AgTA3QgLgEgDgTQgCgTAIgWQAIgXAOgNQANgNAMAEQALAEADATQACATgIAWQgIAXgOANQgKAKgJAAIgGgBg");
    this.shape_55.setTransform(65.2515, 88.2127, 1.4998, 1.4998);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#D9818E")
      .s()
      .p("AgQAvIgFgDQAGgRAGgdIAJgrIAIgBQAKADADAQQAEAPgGASQgFAUgKAMQgIAJgIAAIgEAAg");
    this.shape_56.setTransform(103.5993, 80.9358, 1.4998, 1.4998);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#D65E68")
      .s()
      .p("AgMAvQgJgDgEgPQgDgQAFgSQAGgTAKgMQAKgMAJACQAKADADAQQAEAPgGASQgFAUgKAMQgIAJgIAAIgEAAg");
    this.shape_57.setTransform(102.9525, 80.916, 1.4998, 1.4998);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#D65E68")
      .s()
      .p("AgMAfQgHgDgBgLQgBgMAGgLQAFgMAJgIQAIgHAGADQAHADABALQABALgGAMQgFANgJAHQgFAFgFAAIgEgBg");
    this.shape_58.setTransform(77.3251, 38.657, 1.4998, 1.4998);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#D65E68")
      .s()
      .p("AgfCQIAPg6QAniagPhLIAIAOQAKATAEAYQAMBOgvBlQgYAzgCAAIAAAAg");
    this.shape_59.setTransform(98.404, 47.3493, 1.4998, 1.4998);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f("#D65E68").s().p("AARglIAZAFQgPAbgkAYIggATg");
    this.shape_60.setTransform(106.6094, 16.1221, 1.4998, 1.4998);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f("#D65E68").s().p("AgIg2QALAPAOgEQAHgCAFgFIg5Bpg");
    this.shape_61.setTransform(101.5849, 13.0474, 1.4998, 1.4998);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#D65E68")
      .s()
      .p("AgzBPQAmiAAsg7QAWgdAPgEQgWARhNC6QgdBGgEAIIgCACQgDAAASg/g");
    this.shape_62.setTransform(87.0988, 42.5062, 1.4998, 1.4998);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#AF1641")
      .s()
      .p("AguBBQgIgZgGgeQgMg7ANgXIAVAHQAUAKABAQQACAPARgFQAJgCAJgFIAVAhIAaAFQgDAGgMANQgXAYguAcg");
    this.shape_63.setTransform(102.9612, 10.9101, 1.4998, 1.4998);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#D65E68")
      .s()
      .p("AgPA3QgLgEgDgSQgFgSAHgWQAGgWAMgOQAMgOAMADQALAEAFASQADASgGAWQgHAWgMAOQgKALgJAAIgFAAg");
    this.shape_64.setTransform(80.5123, 107.1631, 1.4998, 1.4998);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#D65E68")
      .s()
      .p("AioJNIDYrXQBRkHgmiDQgMgogWgXIgUgNIAYAEQBZAjAQBlQAIA0gKAsIj7PVg");
    this.shape_65.setTransform(91.6527, 112.6738, 1.4998, 1.4998);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#80133C")
      .s()
      .p("AjtI1ID7vWQAEgMAHgRQAQgiAVgaQBFhVBpAaIACACQglgQgzAuQhmBchCE3IjAK+g");
    this.shape_66.setTransform(61.5019, 105.8187, 1.4998, 1.4998);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#AF1641")
      .s()
      .p("AkvIMID8vWQAEgMAHgRQAQgjAWgbQBFhUBqAbQBqAbAVBsQAKA2gLAxIj8PWg");
    this.shape_67.setTransform(71.4204, 112.0335, 1.4998, 1.4998);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.saucissons, new cjs.Rectangle(0, 0, 117.1, 334.6), null);

  (lib.poivron = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#AF1641").s().p("AiDBAIASi+ID1BIIjUC1g");
    this.shape.setTransform(30.2196, 94.6516, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#AF1641")
      .s()
      .p("AANAkQBPjthUg8IAVAKQAXAPAOAZQAsBRhHCbQhFCdghA4IgTAYQA4hrAnh3g");
    this.shape_1.setTransform(61.761, 65.7048, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#44B280").s().p("AgOADQAAgSAMAAQAFAAAGAGQAGAHAAAFQAAANgNAAQgQAAAAgNg");
    this.shape_2.setTransform(41.7683, 2.5619, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#128136")
      .s()
      .p("Ag/AOIAZgEQAVgIgVgXIALAGQAQAGATADQApAHAPgCIgMAEQgPAHAKAEQgSgDgXAAQgsgBgZAMQAHgHgHgBg");
    this.shape_3.setTransform(47.1677, 21.4598, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#AF1641")
      .s()
      .p("Ag9BHQAtiQA4hEQAdgiATgGQgfAQgwCGQgXBCgRBAQgaAzgQAWQgIAKgDAAQgMAAAjhvg");
    this.shape_4.setTransform(22.78, 53.711, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#128136")
      .s()
      .p("AAGBKIgGgHQADhEgOgcQgFgIgGgDIgFgCIgFgfQA8gMAEBMQACAlgKApQgGAHgHAAIgFgCg");
    this.shape_5.setTransform(46.1803, 11.3179, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#E01741").s().p("AhOgSIARgIQAVgKAUgCQBAgHAjA+IhTAXg");
    this.shape_6.setTransform(49.4549, 17.2758, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E01741")
      .s()
      .p("AirFKQg1gogthQIgihIQgEi5AniSQBOkjDSDIIBKgTQBUgPA1ATQCoA9jZF4QiEDlh7AAQgyAAgwglg");
    this.shape_7.setTransform(45.6319, 65.654, 1.4998, 1.4998);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.poivron, new cjs.Rectangle(0, 0, 91.3, 120.7), null);

  (lib.panier1 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#50506E").s().p("AgLgXQAMgWAHgNIAEB0QgMAAgJACg");
    this.shape.setTransform(254.5668, 81.6254, 1.4997, 1.4997);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#352780").s().p("Ag7HVIAAu9IB3AAIglPRg");
    this.shape_1.setTransform(164.9262, 110.8542, 1.4995, 1.4995);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#4D2D83")
      .s()
      .p("Aj6lqQAshJDnhnICBg5QBZggAjAZIAKETIgTACIgFj5QizBAg4AcQgmAThlA/IheA7Ig6OnIgZAUg");
    this.shape_2.setTransform(211.5245, 92.0376, 1.4995, 1.4995);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#50506E").s().p("AgJAbIAGgQIgGgHIgBg6IARgiIAEB1QgLAqgHASg");
    this.shape_3.setTransform(253.6991, 57.5455, 1.4995, 1.4995);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#7357A0")
      .s()
      .p("AksB+QAagsBkg5QBAgkBWgmIBkguQBIgeApABIBwAAIiOA7IlTC/g");
    this.shape_4.setTransform(201.1016, 18.7863, 1.4997, 1.4997);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#2B2E6D").s().p("AgjATQAoguAbgzIAEB0QgbgCgNAPQgPANgNAPg");
    this.shape_5.setTransform(250.9249, 84.5373, 1.4995, 1.4995);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#2B2E6D")
      .s()
      .p("AggBoQAmhQAOgyIgMgQQgcBKgOAcIgBgKQAMghAEgtIAyhiIAFB2QgQA5gPAcQgQAfgUATg");
    this.shape_6.setTransform(249.9278, 63.2081, 1.4994, 1.4994);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#2B2E6D")
      .s()
      .p("AgcCCIAUgqIgWgEIgPkLIBSgDIAJETIgbADIgUAtIgBgRIgNAPIABAdIgLAWg");
    this.shape_7.setTransform(247.6787, 29.509, 1.4994, 1.4994);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E7352B")
      .s()
      .p(
        "AQYEOMglbgERQgogFgHgdQgGgeAkgSIAwgXQAVAtAMAOIADADQALALAxAGIDhAXIGDAsIABAAIYdC1QAlAEAngUQAngUASghIC1k/QAGgLAEgMIAUhPIAhACQAoADAOAcQAPAbgUAjIjFFbQgdAzgXAWQgfAcgkAAQgKAAgKgCg",
      );
    this.shape_8.setTransform(209.845, 155.6731, 1.4997, 1.4997);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#AF2618")
      .s()
      .p("AiOCyICfksICFi4IAHAcQAFAhgIAhQgRBOhTCmQg/CAgrBGQgUAggfAWQgbARgcAFg");
    this.shape_9.setTransform(395.9729, 166.17, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#473F92")
      .s()
      .p("AgEAqQgdgDgUgPQgTgPACgQQADgSAVgKQAXgKAcADQAeAEASAOQAUAPgCARQgCASgWAKQgQAHgVAAIgOgBg");
    this.shape_10.setTransform(165.0363, 181.2457, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#C5211A")
      .s()
      .p(
        "AQlEzQldgRvBhyQvbh1hngqQg1gUgGg9QgCgTADgVIAEgRMAmEAEnIFcnhIAHAcQAFAhgIAhQgRBNhTCmQhACBgrBGQgYAngoAWQggASgbAAIgEgBg",
      );
    this.shape_11.setTransform(209.8588, 166.3284, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#AF2618").s().p("AAQmJIC6j8IgqEIQgwEcgeBhQggBpiAEZQhBCNg6B3g");
    this.shape_12.setTransform(367.1012, 266.6587, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#DE291B")
      .s()
      .p(
        "AtrFPIksvUMAkvADkIjiQngAL3kcQgQANgDATIhfK9QgDATAMAQQAMAQATAEIB/ATQATADAQgLQAQgMADgTIBvrBQADgTgLgQQgMgQgUgCIiPgTIgHAAQgPAAgNAJgAFelSQgPANgBATIg2K4QgBAVAMAPQANAQATADIChAaQAUADAPgLQAQgMADgTIBgq6QACgUgMgPQgMgQgTgDIjQgbIgHAAQgPAAgNAJgAgFmBQgOANAAATIgMK3QgBATAOARQAOAQASADIB7ATQATADAPgMQAOgLACgUIAqq4QABgTgNgQQgNgQgTgDIidgUIgHAAQgPAAgLAJgAmJm0QgNAMACAUIBCK5QACAUAPAQQAPARATADIBdAOQATADANgMQANgLgBgUIgoq7QgBgTgOgQQgPgQgTgDIh6gQIgHAAQgPAAgKAKgAqynbQgMALADAUIBlK5QADAUAQAQQAPAQAUACIBLAMQAUAEAMgMQAMgMgCgTIhWq7QgDgUgQgQQgPgPgUgDIhcgMIgGAAQgPAAgKAKgAvOoCQgLALAFATICmK/QAFATARAQQARAPAUADIAeAEQATACALgLQAMgMgEgTIiLq1QgEgTgQgQQgRgQgTgDIg+gLIgJgBQgNAAgIAJg",
      );
    this.shape_13.setTransform(194.3955, 266.6587, 1.4998, 1.4998);

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.panier1, new cjs.Rectangle(0, 0, 419.8, 363.5), null);

  (lib.pain = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#BD858D").s().p("AgsAnQAeg4gFglIgMgZIBIgOQAMANgbBYQgOAsgPAqg");
    this.shape.setTransform(76.5615, 192.386, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#90556D")
      .s()
      .p("AguAgIgNgDQArACArgkQAbgXARgZIAeAsIgyA/IhhgWgAhQAaQgwgMBFAPQgKAAgLgDg");
    this.shape_1.setTransform(59.2551, 206.2969, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#8D6C45").s().p("Ah9ixID6gIIh5Fzg");
    this.shape_2.setTransform(58.3241, 266.9651, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#BD858D")
      .s()
      .p("ACtDXIjngZQgugFgMgOQgbghhJi5IhDizIB1APQCHAMBagOQARBsAmBjQBCClBoBEg");
    this.shape_3.setTransform(42.5758, 180.3123, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#E6B1A0")
      .s()
      .p("AAAFWQALizhDjsQgWhLgahHIgXg4QBIgtA2gkQBYGOAdDFQAPBjgEATg");
    this.shape_4.setTransform(117.8435, 166.8513, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#90556D").s().p("AgcAZIgqgGICDg1IAJBFQgwgDgygHg");
    this.shape_5.setTransform(10.5544, 143.4165, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#DCAA9A")
      .s()
      .p("AAAEwIjngYQgugFgLgOQgcghhIi7IhEiyICjATQC0ALBWgoQBVgmCPhZQBHgtA3glQBZGOAdDFQAPBjgEATg");
    this.shape_6.setTransform(68.499, 166.8513, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#9F6136")
      .s()
      .p("ACwGaQhCoYi2jnQg5hIg+ghIgzgSQDjALCXHRQBMDoAfDmIg6AXg");
    this.shape_7.setTransform(85.2836, 72.1744, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E09764")
      .s()
      .p("AjcgDIAbAIQAjAJAvABQCRABC8hVQhhBChmAoQhTAhg3AAQhTAAgWhJg");
    this.shape_8.setTransform(55.2494, 116.8905, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E09764")
      .s()
      .p("Ai0AKIAaAJQAhAIAogBQB9gGCJhlQhVBKhZAvQhMAqgtAAQg8AAgGhIg");
    this.shape_9.setTransform(49.925, 71.8444, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#C58051")
      .s()
      .p("AjcgDIALgKQASgNAlgKQB3giEBABQhhBChmAoQhTAhg3AAQhTAAgWhJg");
    this.shape_10.setTransform(55.2494, 116.8899, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#854D26")
      .s()
      .p("AjcAUQgBgNAHgPQANgjAigUQBuhEEXBWQhgBBhnApQhSAhg4AAQhTAAgWhKg");
    this.shape_11.setTransform(55.2468, 113.3074, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#C58051")
      .s()
      .p("AiyAKQgFgDAAgFQABgIAYgLQBJgjEMgdQhVBKhZAvQhMAqgtAAQg8AAgGhIg");
    this.shape_12.setTransform(49.6251, 71.8444, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#854D26")
      .s()
      .p("Ai0AhQgBgOAEgTQAKgnAbgaQBXhRDrBYQhWBJhZAwQhMAqgtAAQg8AAgGhIg");
    this.shape_13.setTransform(49.9114, 68.4182, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#854D26")
      .s()
      .p("AiaApQgIgVgEgcIgCgXIAJgPQAOgRAcgLQBbgkDDAiQgCARggAdQhAA6iVA9QgNAFgLAAQgiAAgSg1g");
    this.shape_14.setTransform(58.8865, 152.1324, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#B87447")
      .s()
      .p("AkvmAQAlh0A9g6QAvgtAiAHQDYArCYHEQBMDhAgDaIp6D/QiAqKBrlLg");
    this.shape_15.setTransform(68.8362, 89.6143, 1.4998, 1.4998);

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
  }).prototype = getMCSymbolPrototype(lib.pain, new cjs.Rectangle(0, 0, 137.1, 295), null);

  (lib.ombre = function (mode, startPosition, loop, reversed) {
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
      .f("rgba(103,103,103,0.278)")
      .s()
      .p("AxjI3IvToOIEnlGITTkZIdlMiMggKgIJIstDuIHREWMAx0AFQg");
    this.shape.setTransform(210.275, 56.725);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("rgba(103,103,103,0.576)").s().p("A1RBbInRkXIMtjuMAgKAIKIL7DBIATCKg");
    this.shape_1.setTransform(237.875, 70.775);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.ombre, new cjs.Rectangle(0, 0, 420.6, 113.5), null);

  (lib.lait = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#89A5C6").s().p("Ag/BHIAHhqIAKAQQAMAOAKgNQAQgUBBg7IAHAsIg0B4IhBAfg");
    this.shape.setTransform(89.2842, 159.51, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#89A5C6").s().p("AiShEIAAizQAAgzAagaQANgNANgDIB8gVIB1KtIjcAlg");
    this.shape_1.setTransform(124.1921, 180.9951, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#A8C6E5")
      .s()
      .p("Ag0BvIgIgtQAJgeAMgkQAXhIARgfQARgfAWgDQAKgBAHAFQAOACgjCHQgSBDgTBDg");
    this.shape_2.setTransform(106.9641, 135.0127, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#89A5C6")
      .s()
      .p("AkzjZIAMArQASA0AbApQBVCCCPgYQCNgYBJiEQAkhDAHg+IBJGuIoWBbg");
    this.shape_3.setTransform(66.8992, 209.7543, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#7791AB").s().p("ACsANQiWhakiAoIHvhUIAqDzQgQg8hRgxg");
    this.shape_4.setTransform(46.2015, 59.6961, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AgwAaIAWgrQAcgoAlAaQAUAOgMASQgKAPgcANQgZANgTAAIgCAAQgTAAAIgQg");
    this.shape_5.setTransform(76.5899, 89.7311, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AhXhzICYgaIAXD3IhnAkg");
    this.shape_6.setTransform(99.5206, 63.5207, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("Ag9AzQgggIgFgUQgEgVAZgUQAagVApgKQAngJAhAIQAgAIAFAUQAEAVgZAUQgaAVgpAJQgVAGgUAAQgQAAgPgEg");
    this.shape_7.setTransform(43.4268, 26.7373, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#CDE5F8").s().p("AgrANIAhg2IABAAIAigUIASA1QAFATgTASQgUAVgrAMg");
    this.shape_8.setTransform(54.1042, 31.5368, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#B0D0ED").s().p("AgiAlIgUgNIgMhAIB8AXIAJAwQgqAKgcAAQgSAAgNgEg");
    this.shape_9.setTransform(38.7024, 36.1945, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#CDE5F8").s().p("AhJgiIC3AhIjbAkg");
    this.shape_10.setTransform(96.8209, 36.1488, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#A8C6E5")
      .s()
      .p("AkFARIAAgBQgCgOAIgKQAIgLAOgCIG6hLQAOgCALAHQAMAIADANIAAACIANBPIn9BWg");
    this.shape_11.setTransform(53.6721, 14.5946, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#A8C6E5")
      .s()
      .p("AhmARQAWgcAhgPQAQgHAMgBIB+AhQg9APg4ALQgwAKgYAAQghAAANgSg");
    this.shape_12.setTransform(32.8101, 41.1405, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#B9D9F4").s().p("AjHgqIH9hWIhVCnIoWBag");
    this.shape_13.setTransform(46.5015, 35.6238, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#98B4CD").s().p("AgYhTICGCBIjbAmg");
    this.shape_14.setTransform(96.8209, 28.8371, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#89A5C6").s().p("AhGCKIghhKIgpjzIDbglIBGGbIiBAWQgsgDgqhMg");
    this.shape_15.setTransform(102.0703, 68.3951, 1.4998, 1.4998);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#BBD7F2").s().p("AjbpyIDcgmIDbUMIjcAlg");
    this.shape_16.setTransform(113.244, 135.5126, 1.4998, 1.4998);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVEAQgXgHgKgdQgXg/gdgfQgdgggKAgQgKAkgRAHQgTAJgSgfQgEgHgRgSIgQgQIgQhbIAOgHQANgIgCgKQgKhCgPgSQgMgOAGgOQAGgNAPgEQAPgFAKAIQAMAKgEAYQgHAwADALQADAKAKgSQAMgQAFgYQALgxgjgmQgTgVAGgYQAGgWAUgJQAUgKAQAOQASARAAAsQAABfAhAHQAgAHBDhQQAegkAmgJQAhgIAXANQAXANgGAVQgHAXgrAQQhlAegaALQgjAPAIAwQAFAaAZAUQAYATAfAEQBNAKAkhJQASglAqgCQAlgDAeAWQAfAXgMAYQgNAdhGAOQhXASh2ADQggABgJAFQgLAGACAUQAEAgAgAQQA2AbANAMQASAPgHATQgFARgVAJQgMAGgLAAQgIAAgIgDg",
      );
    this.shape_17.setTransform(52.8282, 131.7417, 1.4998, 1.4998);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p("AAAAYQgbgOgOgQQgPgSASgGQAggKAaARQANAJAHAKQARAggQAGIgIABQgMAAgVgLg");
    this.shape_18.setTransform(81.2005, 164.1138, 1.4998, 1.4998);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#A8C6E5").s().p("Al4pYIIWhaIDbULIoXBbg");
    this.shape_19.setTransform(56.5879, 145.1491, 1.4998, 1.4998);

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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.lait, new cjs.Rectangle(0, 0, 146.2, 248.9), null);

  (lib.fromage = function (mode, startPosition, loop, reversed) {
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
      .f("#E94D35")
      .s()
      .p("AABAhQgQAAgKgMQgRgSAKgbQARgJAPABQAQABAKALQARARgKAcQgQAIgPAAIgBAAg");
    this.shape.setTransform(80.3506, 55.987, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E2BE62")
      .s()
      .p("AgqApQgNgOAEgVQADgVASgRQASgRAUgCQAWgCANANQANAOgEAVQgDAVgSARQgSARgUACIgHAAQgRAAgLgLg");
    this.shape_1.setTransform(82.8663, 53.0998, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#E94D35")
      .s()
      .p("AgdAVQgOgPAFgXQASgOATgBQATgBAMANQAOAPgGAXQgRAOgUABIgBAAQgSAAgLgMg");
    this.shape_2.setTransform(183.3347, 58.1617, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E2BE62")
      .s()
      .p("AgqApQgNgOADgWQAEgUASgRQARgRAWgCQAVgCANANQANAOgDAVQgEAVgSARQgRARgWACIgGAAQgRAAgLgLg");
    this.shape_3.setTransform(185.2691, 55.2745, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#E94D35")
      .s()
      .p("AgiAhQgLgLADgSQADgQAOgOQAPgOARgCQASgCALALQAKAMgDARQgDARgOAOQgPAOgRACIgFAAQgOAAgJgKg");
    this.shape_4.setTransform(152.5492, 39.8725, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E94D35")
      .s()
      .p("AABAhQgQgBgKgLQgRgSAKgaQAQgJAQABQAQABAKAKQAQASgJAaQgPAJgQAAIgBAAg");
    this.shape_5.setTransform(149.908, 67.9106, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#E2BE62")
      .s()
      .p("AgqApQgNgOAEgWQADgUASgRQASgRAUgCQAWgCANANQANAOgEAVQgDAVgSARQgSARgUACIgHAAQgRAAgLgLg");
    this.shape_6.setTransform(152.4585, 64.9485, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E94D35")
      .s()
      .p("AABAgQgQgBgKgKQgRgSAKgaQAQgJAQABQAQAAAKALQAQARgJAbQgOAIgPAAIgDAAg");
    this.shape_7.setTransform(110.7302, 38.5139, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E2BE62")
      .s()
      .p("AgqApQgNgOAEgVQADgVASgRQASgRAUgCQAWgCANAOQANANgEAWQgDAUgSARQgSARgUACIgHAAQgRAAgLgLg");
    this.shape_8.setTransform(113.3164, 35.5142, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E94D35")
      .s()
      .p("AgaAYQgIgJgBgOQAAgNAIgNQAOgJAPAAQAPABAKAKQAJAJAAAOQAAAMgIAOQgPAJgOAAQgPgBgKgKg");
    this.shape_9.setTransform(75.1439, 83.5444, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#E2BE62")
      .s()
      .p("AgmAkQgLgMADgTQADgSAQgPQAQgPASgCQAUgDALANQAMAMgDATQgEASgPAPQgQAPgTACIgFABQgQAAgKgLg");
    this.shape_10.setTransform(76.929, 81.7368, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#E94D35")
      .s()
      .p("AgmAaQgRgRAGgbQAWgUAagCQAZgCAPAQQARASgGAbQgWATgZADIgFAAQgWAAgOgPg");
    this.shape_11.setTransform(118.1307, 65.0609, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#E2BE62")
      .s()
      .p("Ag0AyQgQgRAEgaQAEgaAWgVQAWgVAagCQAbgDAQARQAQARgEAaQgFAagWAVQgWAUgaADIgHABQgWAAgNgPg");
    this.shape_12.setTransform(120.2655, 61.4988, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#E94D35").s().p("AHQkIQAkB0gyCuQgZBYghBBItmBVg");
    this.shape_13.setTransform(124.8064, 91.758, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFDD81")
      .s()
      .p("AqHDOIFzlUQACAHAGAHQAQAQAZgDQAagCAVgUQAVgUAEgaQAEgZgPgQQgEgEgIgFIDnjUIJTFbIuuIQg");
    this.shape_14.setTransform(97.1915, 65.6984, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#E2BE62")
      .s()
      .p("AgmA1QAagbANgvIAIgrQBHAnhEA7QgXAUgVAIQgHADgDAAQgGAAAKgMg");
    this.shape_15.setTransform(68.9616, 41.5386, 1.4998, 1.4998);

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
  }).prototype = getMCSymbolPrototype(lib.fromage, new cjs.Rectangle(0, 0, 196.7, 131.5), null);

  (lib.farine = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#B3573A").s().p("AhFg+QAfgIAdgTQBlg9gbB7QgNA8ghBKIhLADg");
    this.shape.setTransform(114.9599, 138.875, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#C2623D")
      .s()
      .p("AiQABQgPiMAPgCIALAaQAQAeAVAUQBEBABkg+QBmg9gbB6QgNA9ghBKIjkAJQgKhGgHhHg");
    this.shape_1.setTransform(102.633, 135.013, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#D16C3F")
      .s()
      .p("Aj7APQgHh6AOieIAGBwQAMBzAiAOQAmAOCOgqQCCgmAsgcQAfgTAgArQANARARAjQACAFjSCYIjRCXg");
    this.shape_2.setTransform(38.1623, 142.8121, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F39253")
      .s()
      .p("AjrAbQAug4ADhCQBbADDGgfQBjgPBSgPQgNBFghA8Qg0A4gaBjQiSgth+APQhbALhPAqQAZhiAWgdg");
    this.shape_3.setTransform(50.4682, 37.7113, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#D18A1A")
      .s()
      .p("AlUBGQD+AGB8hgQA/gwALgxQAtCDBGAwQAbASBWgNIABABQhcASkSASIkBAOQghgKgZgmg");
    this.shape_4.setTransform(60.4046, 170.5215, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#E2921A").s().p("Ah7A+IgGgEIBYiCICrBqQgyAQg5AMQg5ALgkAAQgkAAgRgLg");
    this.shape_5.setTransform(113.0487, 170.4747, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#CD683B")
      .s()
      .p("AguHeIhTwjIAAgDQAQBVAqBDQAZAoAbAZIAEAEQBrBvAcFRQAQC8gLE4g");
    this.shape_6.setTransform(113.766, 87.8807, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#DF9903")
      .s()
      .p("AlyB8QC9DPCUkmQBJiRAki8QgBCzApCRQAtCfBQA2QAfAVBjgSQhOATkgATIkRAPQhJgVgdiYg");
    this.shape_7.setTransform(58.0048, 143.3745, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#DE763E")
      .s()
      .p(
        "AgtJRQhIgxgtiHQgoh7gHiiQgHieAciGQAdiPA8hBQAohJAKhUIADhGQAQBUApBEQAYAoAcAZIAEADQBsBwAcFQQAPC9gLE3QgyAQg5AMQg5ALglAAQgjAAgQgLg",
      );
    this.shape_8.setTransform(101.4374, 90.7961, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#EE8A3F")
      .s()
      .p(
        "Al5HRQgYh5AIi7QAIilAeiXQAdiVAggnQA0hAgDhLQgBgXgHgVIgGgRIHqhPIAmC3QAsDcAeC6QBgJPhNATQhOATkfATIkSAQQhHgUgdiOg",
      );
    this.shape_9.setTransform(59.3868, 93.9551, 1.4998, 1.4998);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.farine, new cjs.Rectangle(0, 0, 133.3, 188.2), null);

  (lib.courge = function (mode, startPosition, loop, reversed) {
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
      .f("#469396")
      .s()
      .p("AgsBQIABgHQACgngIgeQAlgPAJgXQAOgnAmgMQACAhgDAfQgJASgPAkQgWA1gbAAQgJAAgKgGg");
    this.shape.setTransform(87.6315, 30.1978, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#339659")
      .s()
      .p("AgTANQgJgFgBgIIAAgCQAegDATgKQAKAFAAAHQABAGgIAGQgIAGgNABIgDAAQgKAAgIgDg");
    this.shape_1.setTransform(72.1489, 52.8307, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#469396")
      .s()
      .p(
        "Ah2CkQgHgKACgQIAEgOIAXACQAbACAXgEQBJgNADg9QACgvgOgkQgKgZAMgdQAXg1BJglIAFAsQAFA1gEAvQgPCWhmAoQg3AVggAAQgaAAgKgOg",
      );
    this.shape_2.setTransform(76.5401, 33.5759, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#469396")
      .s()
      .p(
        "AB4DeQhBgUg0glQgjgZhNADQh5AFhggPQhSgNgnglQgdgcgDgnIAEANQAGAPALALQAhAlBBgLQBXgPBpADQB2ADA/AaQBSAhBjgSQB1gUAohZQATgnAbgVQAPgLAYgNQARgMACgdQACgigQhPQAcA5AIBAQARCFhHBlQhHBmh1AJQgQADgSAAQgkAAgtgNg",
      );
    this.shape_3.setTransform(93.16, 62.441, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#80133C")
      .s()
      .p("AhUAsQAAgfAjgmQArgvAzAHQAxAGgKAHQgFAEgPACQgaAEgaALQgzAWgFAjQgFAngRACIgDAAQgPAAAAgXg");
    this.shape_4.setTransform(12.7623, 64.1214, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#54ACA4")
      .s()
      .p("AgKAJQgFgDgBgFQAAgDAEgDQAFgEAHgBQAGAAAFADQAFACABAFQABADgFAEQgFADgHABIgCAAQgFAAgEgCg");
    this.shape_5.setTransform(121.1193, 18.0344, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#54ACA4")
      .s()
      .p("AgYAIQgLgBAAgEQAAgDAKgEQAKgDAPgBQANgBAMACQAKACABADQAAADgKAEQgKADgPABIgIABIgRgCg");
    this.shape_6.setTransform(140.6459, 24.6203, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#3FAF6A").s().p("AgPABQgBgBAQgBQAQgBAAACQAAABgQACIgHAAQgIAAAAgCg");
    this.shape_7.setTransform(63.0204, 34.3281, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#3FAF6A")
      .s()
      .p("AgTAPQgJgFgBgIQgBgGAIgGQAIgGANgBQALgBAKAFQAJAEABAIQABAGgIAGQgIAGgNABIgDAAQgKAAgIgDg");
    this.shape_8.setTransform(72.1467, 52.527, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#54ACA4")
      .s()
      .p(
        "ACEE5QhCgUg0glQgigZhOADQh4AFhhgPQiAgUgVhNQgHgYAFgZIAGgXQhBgzBGhGQA+hABXgRQAHgCB+gHQBSgEANgdQAkhSCRgoQAegLAhgCQB1gJBeBZQBfBYARCGQARCFhHBlQhHBlh1AJQgQAEgSAAQgkAAgtgNg",
      );
    this.shape_9.setTransform(91.413, 48.8052, 1.4998, 1.4998);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.courge, new cjs.Rectangle(0, 0, 165.3, 97.7), null);

  (lib.cerc4 = function (mode, startPosition, loop, reversed) {
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
      .f("#F9CBAB")
      .s()
      .p("AhFCwQhSgpgih5QgNguArg9QAvhBBNgcQA9gXBHA7QBCA2ASBGQARBBg3BKQg7BPhUABIgKAAQgdAAgigRg");
    this.shape.setTransform(28.3122, 29.0302, 1.5, 1.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cerc4, new cjs.Rectangle(0, 0, 56.7, 58.1), null);

  (lib.cerc3 = function (mode, startPosition, loop, reversed) {
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
      .f("#F9CBAB")
      .s()
      .p(
        "AlnJrQhRgahLhWQhKhVgxh9QhwkeBKkwQAeh7BuhcQBlhUCYgwQCPgsCZgCQCbgCB6AqQByAoBjByQBiBwA3CXQA5CdgHCbQgJCrhXCIQgPAdgiAoQhDBPheA3QijBejRAAQiwAAjThEg",
      );
    this.shape.setTransform(105.9193, 102.9749, 1.5, 1.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cerc3, new cjs.Rectangle(0, 0, 211.9, 206), null);

  (lib.cerc2 = function (mode, startPosition, loop, reversed) {
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
      .f("#F9CBAB")
      .s()
      .p(
        "Am6THQjFhMi5ifQjDiniLjgQiYj1g+kVQgyjaBwjuQBnjYDcjHQDQi8EGiAQEGiBDyggQDhgdEHBkQEEBkDYDDQDjDNByD/QB9EYglEfIgEAoQgHA0gPA5QgxC2h0CjQl0IKuGCLQgnAGgpAAQiAAAiVg6g",
      );
    this.shape.setTransform(208.2682, 192.0859, 1.5, 1.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cerc2, new cjs.Rectangle(0, 0, 416.6, 384.2), null);

  (lib.cerc1 = function (mode, startPosition, loop, reversed) {
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
      .f("#F9CBAB")
      .s()
      .p(
        "AiXPTQjggWjNhbQijhHhlixQhciggbjfQgbjSAljWQAkjXBYifQBUiUC3htQC0htDegmQDpgoDWAxQDrA3CnCaIAYAVQAfAcAdAjQBeByA0CQQCmHMk/JZQg5BriJBRQiKBSi5AlQh/AZiDAAQhGAAhIgHg",
      );
    this.shape.setTransform(146.3296, 147.8923, 1.5, 1.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cerc1, new cjs.Rectangle(0, 0, 292.7, 295.9), null);

  (lib.carrotte2 = function (mode, startPosition, loop, reversed) {
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
      .f("#C0581E")
      .s()
      .p("AgBAEQgNgGADgFQACgDALAHQANAHgDAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgEAAgHgFg");
    this.shape.setTransform(69.1408, 129.3239, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#C0581E").s().p("AgBACQgOgIABgCQABgCAOAJQAPAIgBACIgBAAQgDAAgMgHg");
    this.shape_1.setTransform(13.6845, 195.45, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#C0581E").s().p("AgBADQgMgGACgDQABgEAMAIQANAHgDADIgCABQgEAAgHgGg");
    this.shape_2.setTransform(21.6336, 187.6098, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#C0581E")
      .s()
      .p("AgCAEQgSgKACgFQABgBAHACIAMAHQATAKgDAEIgCABQgFAAgNgIg");
    this.shape_3.setTransform(25.6165, 179.1685, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#C0581E").s().p("AgBAEQgYgPACgDQACgEAXAQQAYAOgBADIgCABQgFAAgTgMg");
    this.shape_4.setTransform(34.8274, 169.4931, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#C0581E").s().p("AgBADQgbgRACgCQACgDAaARQAbAQgCADIgBAAQgEAAgXgOg");
    this.shape_5.setTransform(37.1151, 157.6265, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#C0581E").s().p("AgCAEQgdgRACgEQADgEAcASQAeASgDADIgBABQgGAAgYgPg");
    this.shape_6.setTransform(52.8351, 144.9807, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#C0581E").s().p("AAAABQgjgUACgCQABAAAhAUQAiAVgBABIAAABQgCAAgggVg");
    this.shape_7.setTransform(68.2368, 116.7526, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#C0581E").s().p("AAAACQgggSACgDQACgCAeAUQAfASgCACIAAABQgEAAgbgSg");
    this.shape_8.setTransform(50.3217, 128.67, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#C0581E").s().p("AAAACQgUgMABgBQABgCATAMQAUALgBACIgBABQgEAAgPgLg");
    this.shape_9.setTransform(64.6371, 103.9603, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#BE3345")
      .s()
      .p("AgBADQgPgIACgEQABgBAFABIAKAGQAPAIgCAEIgCABQgEAAgKgHg");
    this.shape_10.setTransform(94.4413, 67.4913, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#BE3345").s().p("AgBADQgagOACgEQACgDAZAQQAbAPgDADIgCABQgFAAgUgOg");
    this.shape_11.setTransform(84.1511, 74.6876, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#BE3345").s().p("AgBAEQgZgPACgEQADgDAXAQQAZAOgCAEIgCAAQgFAAgTgMg");
    this.shape_12.setTransform(81.9643, 88.8494, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#BE3345").s().p("AAAACQgbgPACgCQABgDAaARQAZAPgBACIgBABQgEAAgVgPg");
    this.shape_13.setTransform(75.6199, 101.2526, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#EF8720").s().p("AgBADQgYgPACgCQACgDAXAPQAYAOgCADIgBAAQgEAAgUgMg");
    this.shape_14.setTransform(63.3664, 139.8445, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#EF8720").s().p("AgBAEQgegSADgDQACgEAcASQAdASgBADIgCABQgGAAgXgPg");
    this.shape_15.setTransform(72.8438, 124.2724, 1.4998, 1.4998);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#EC5F4D").s().p("AAIAIQgXgOACgDQACgDAXAOIADACIgEAGg");
    this.shape_16.setTransform(102.9178, 90.6857, 1.4998, 1.4998);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#EF8720")
      .s()
      .p("AgBADQgdgRABgEQABgBAJAFQAKAEALAIQAdARgCADIgBABQgFAAgYgQg");
    this.shape_17.setTransform(79.1562, 114.1394, 1.4998, 1.4998);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#EC5F4D").s().p("AgBAEQgUgMACgDQACgEATAMQAUAMgCADIgCABQgEAAgPgJg");
    this.shape_18.setTransform(88.6889, 102.0105, 1.4998, 1.4998);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#EC5F4D").s().p("AgBADQgigUADgDQACgEAgAVQAiAUgCAEIgCAAQgGAAgbgSg");
    this.shape_19.setTransform(90.5463, 90.8262, 1.4998, 1.4998);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#EC5F4D").s().p("AAAACQgzgeACgDQABgBAyAeQAyAfgBACIgBABQgEAAgugeg");
    this.shape_20.setTransform(96.771, 81.3501, 1.4998, 1.4998);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#EC5F4D")
      .s()
      .p("AAQAOQgJgEgIgGQgZgOACgFQACgDAYAPQAZAOgCAFIgBAAIgIgCg");
    this.shape_21.setTransform(102.3305, 68.9246, 1.4998, 1.4998);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#EF8720").s().p("AgBADQgRgKABgDQACgDARALQARAKgBADIgBABQgEAAgOgJg");
    this.shape_22.setTransform(10.0474, 197.9997, 1.4998, 1.4998);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#EF8720").s().p("AAAACQgUgLABgDQABgBATAMQAUALgBACIgBABQgEAAgPgLg");
    this.shape_23.setTransform(15.78, 188.0715, 1.4998, 1.4998);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#EF8720").s().p("AAAACQgVgNABgBQAAgCAVANQAVANgBABIAAAAQgDAAgSgLg");
    this.shape_24.setTransform(18.3365, 177.977, 1.4998, 1.4998);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#EF8720").s().p("AgBACQgRgKACgCQABgCAQAKQASAKgCADIgBAAQgDAAgOgJg");
    this.shape_25.setTransform(25.4892, 171.5156, 1.4998, 1.4998);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#EF8720").s().p("AgBACQgXgNABgDQACgCAWAOQAYAOgCACIgBABQgEAAgTgNg");
    this.shape_26.setTransform(32.2158, 158.5266, 1.4998, 1.4998);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#EF8720").s().p("AgDABIgIgEIADgEIAIAEQANAHgBADIgCABQgDAAgKgHg");
    this.shape_27.setTransform(52.1229, 106.4026, 1.4998, 1.4998);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#EF8720")
      .s()
      .p("AgBADQgNgHgEgFIABgDQAHACAMAIQAUAMgDACIgCABQgEAAgOgKg");
    this.shape_28.setTransform(31.6658, 148.3884, 1.4998, 1.4998);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#EF8720").s().p("AgBADQgUgLACgDQACgDATAMQATAMgBACIgBABQgFAAgPgKg");
    this.shape_29.setTransform(40.0716, 142.281, 1.4998, 1.4998);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#EF8720").s().p("AgCAFQgegTADgEQADgEAdASQAeASgDAFIgCAAQgGAAgYgOg");
    this.shape_30.setTransform(46.2618, 133.8069, 1.4998, 1.4998);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#EF8720").s().p("AgFAAIgNgIIACgDIAOAIQAVAMgBADIAAAAQgDAAgUgMg");
    this.shape_31.setTransform(46.0091, 119.8397, 1.4998, 1.4998);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#EF8720")
      .s()
      .p("AgBAEQgWgNADgDQABgCAHADIAOAIQAWANgCADIgDABQgFAAgPgKg");
    this.shape_32.setTransform(58.5977, 115.4604, 1.4998, 1.4998);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#EF8720").s().p("AAAABQgUgKACgBQABgCASAMQATALgCAAIAAABQgDAAgPgLg");
    this.shape_33.setTransform(62.954, 107.4474, 1.4998, 1.4998);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#EF8720")
      .s()
      .p("AgCADIgNgJIACgEQAGACAIAGQAHADAEAEQAFAEgBABIgCABQgEAAgMgIg");
    this.shape_34.setTransform(60.7929, 93.1009, 1.4998, 1.4998);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#EF8720").s().p("AgBADQgcgRACgCQACgEAbASQAcAQgCADIgBABQgFAAgXgPg");
    this.shape_35.setTransform(69.8853, 88.8869, 1.4998, 1.4998);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics.f("#EC5F4D").s().p("AgGABIgLgGIAFgGIAKAGQAVANgBAEIgCAAQgFAAgRgLg");
    this.shape_36.setTransform(77.547, 65.568, 1.4998, 1.4998);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#ED6848").s().p("AAAACQgVgLACgDQABgBATAMQAVAMgCACIgBAAQgDAAgQgLg");
    this.shape_37.setTransform(76.7149, 79.0812, 1.4998, 1.4998);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#EC5F4D").s().p("AAAADQgRgKABgDQACgCAQALQARAKgCACIgBAAQgEAAgMgIg");
    this.shape_38.setTransform(84.5253, 63.039, 1.4998, 1.4998);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#EC5F4D").s().p("AgBACQgYgOADgCQABgCAXAPQAXANgCADIAAAAQgEAAgUgNg");
    this.shape_39.setTransform(86.8763, 57.503, 1.4998, 1.4998);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#128136").s().p("AhoB/IBWhRQBZhhARhUIARgKIgTA7QgZBBgfAgIh4CHg");
    this.shape_40.setTransform(116.6855, 40.3674, 1.4998, 1.4998);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#128136")
      .s()
      .p("AhuBiIAmgeQAxgqA3g2QAVgWAzhBIAHATQgPAZgiAnQhABNhVBHg");
    this.shape_41.setTransform(117.9228, 45.6543, 1.4998, 1.4998);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#128136")
      .s()
      .p("AiYB9QA/giA5gaQAegOAZgaQAagYArhHQAVgkARgfIAYgEQgIAugnA6QhPB1ieA/g");
    this.shape_42.setTransform(124.2971, 41.6797, 1.4998, 1.4998);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#128136").s().p("AiJCBIAiguQArg4AwgzIB2iBIAgAFIisCvQggAhgiAyIgbAsg");
    this.shape_43.setTransform(120.96, 38.4926, 1.4998, 1.4998);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#128136")
      .s()
      .p("AhpCdQBKifBBhhQAhgxASgRIAVAKQgbAcgdAkQg6BHgLAjQgLAkglA9IgjA1g");
    this.shape_44.setTransform(117.1354, 36.8053, 1.4998, 1.4998);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#128136")
      .s()
      .p("AhaCtQA5ivA0hpIAqhFIAegFQgOAUgTAiQgnBDgWBCQgYBEghA9IgbAvg");
    this.shape_45.setTransform(114.9232, 34.368, 1.4998, 1.4998);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#128136")
      .s()
      .p("AhAC4QALgWAMgkQAZhJAHhEQAHhGAbhBIAagyIAOAaIgMAWQgSAigVBAQgKAcgOBtQgKBLglArg");
    this.shape_46.setTransform(110.0487, 30.1685, 1.4998, 1.4998);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#EF7D67")
      .s()
      .p("Ag2BVQCbkNAQh0IALgIQAPgGAPAOQARAUAPAcIABADQAKAnh6CuQhoCVilDGQA7hdBNiFg");
    this.shape_47.setTransform(84.3369, 110.219, 1.4997, 1.4997);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#BE3345")
      .s()
      .p(
        "Ak2IAQAqhoA+iJQB8kRBfimQCHjpARgbQAng+AkghQANgMANAKQAJAHAmAlQhegNinFMQgvBehGChQhBCRgPAbQhFB+hSCIQgHAEgEAAQgJAAAGgTg",
      );
    this.shape_48.setTransform(47.0109, 133.5828, 1.4998, 1.4998);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#EC5F4D")
      .s()
      .p(
        "Al2IDQArhoA+iJQB8kSBgilQB9jaAagpQAmg+AkgiQAggeBCAlQBCAmAjBGQARAhh5CuQhpCYimDGQigDAhvBuQhRBRgTAAQgJAAAGgUg",
      );
    this.shape_49.setTransform(56.5527, 133.152, 1.4998, 1.4998);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.carrotte2, new cjs.Rectangle(0, 0, 147.4, 213.4), null);

  (lib.carrotte1 = function (mode, startPosition, loop, reversed) {
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
      .f("#C0581E")
      .s()
      .p("AAAAFQgGgCgEgDQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgEANAEQAOADgBAEQgBACgEAAIgJgBg");
    this.shape.setTransform(41.9805, 137.7944, 1.4998, 1.4998);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#C0581E").s().p("AAAADQgQgEAAgCQABgDAPAEQARAEAAADIgDAAQgEAAgKgCg");
    this.shape_1.setTransform(8.3089, 217.2854, 1.4998, 1.4998);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#C0581E")
      .s()
      .p("AAAADQgOgDABgDQABgDANADQAOADgBAEQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAQgDAAgHgDg");
    this.shape_2.setTransform(13.596, 207.5089, 1.4998, 1.4998);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#C0581E").s().p("AAAAFQgVgFABgEQABgFAUAFQAVAGgBAEQAAACgFAAQgFAAgLgDg");
    this.shape_3.setTransform(14.9123, 198.2108, 1.4998, 1.4998);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#C0581E")
      .s()
      .p("AAAAEQgcgHABgDQABgEAbAHQAcAGgBAFQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgHAAgRgFg");
    this.shape_4.setTransform(20.9419, 186.3139, 1.4998, 1.4998);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#C0581E").s().p("AAAADQgfgHABgDQABgDAeAIQAfAHgBADIgDABQgGAAgWgGg");
    this.shape_5.setTransform(19.6327, 174.2777, 1.4998, 1.4998);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#C0581E").s().p("AAAAEQgigIACgEQABgEAgAJQAiAIgBAEQgBABgEAAQgIAAgVgGg");
    this.shape_6.setTransform(30.9538, 157.5546, 1.4998, 1.4998);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#C0581E").s().p("AAAABQgmgKAAAAQABgCAlALQAoAKgBAAIAAABIgngKg");
    this.shape_7.setTransform(37.3687, 126.0206, 1.4998, 1.4998);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#C0581E").s().p("AAAADQgjgIABgDQAAgDAjAKQAkAIgBADIgCAAQgGAAgcgHg");
    this.shape_8.setTransform(23.7572, 142.6576, 1.4998, 1.4998);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#C0581E")
      .s()
      .p("AAAACQgXgEACgDQAAgDAWAHQAXAEgCADQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQgFAAgPgFg");
    this.shape_9.setTransform(30.169, 114.8843, 1.4998, 1.4998);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#BE3345")
      .s()
      .p("AAAAEQgdgGACgFQABgEAbAIQAcAGgBAFQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgGAAgSgFg");
    this.shape_10.setTransform(49.8543, 88.6373, 1.4998, 1.4998);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#BE3345")
      .s()
      .p("AAAAEQgSgEACgDQABgFAQAFQARADgBAFQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAgIgCg");
    this.shape_11.setTransform(44.819, 75.5512, 1.4998, 1.4998);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#BE3345")
      .s()
      .p("AAAAEQgcgHABgEQABgDAbAHQAcAGgBAEQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgCAAQgGAAgRgFg");
    this.shape_12.setTransform(42.3521, 95.3881, 1.4998, 1.4998);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#C0581E").s().p("AAAADQgdgIABgCQAAgDAcAIQAfAHgCADIgCABQgFAAgWgGg");
    this.shape_13.setTransform(39.8804, 109.0725, 1.4998, 1.4998);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#EF8720").s().p("AAAADQgbgHAAgCQABgDAbAHQAbAGgBADIgCABQgGAAgTgFg");
    this.shape_14.setTransform(39.5055, 149.5873, 1.4998, 1.4998);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#EF8720")
      .s()
      .p("AAAAEQgigIACgEQABgDAgAIQAiAIgBAEQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgIAAgVgGg");
    this.shape_15.setTransform(43.9989, 131.94, 1.4998, 1.4998);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#EC5F4D").s().p("AAKAGQgagGABgEQABgEAaAHIAEABIgCAHg");
    this.shape_16.setTransform(62.7877, 90.987, 1.4998, 1.4998);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#EF8720").s().p("AAAAEQgigIACgEQABgDAgAJQAiAIgBADIgDABQgIAAgXgGg");
    this.shape_17.setTransform(47.077, 120.3091, 1.4998, 1.4998);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#ED6848")
      .s()
      .p("AAAAEQgXgFABgEQACgEAVAGQAXAFgBAEQAAABgBAAQAAAAAAAAQgBAAgBAAQAAABgBAAQgGAAgNgEg");
    this.shape_18.setTransform(52.5916, 105.9736, 1.4998, 1.4998);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#EC5F4D")
      .s()
      .p("AAAAEQgmgJABgEQABgEAlAKQAmAKgBADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgIAAgagHg");
    this.shape_19.setTransform(51.0917, 94.7301, 1.4998, 1.4998);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#EC5F4D").s().p("AAAADQg5gPABgCQABgDA4APQA5AOAAADIgCABQgJAAgvgNg");
    this.shape_20.setTransform(54.2775, 83.8378, 1.4998, 1.4998);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#EC5F4D")
      .s()
      .p("AAAAEQgdgHACgEQAAgCAJABQAJABAKADQAdAHgBAEQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgHAAgRgFg");
    this.shape_21.setTransform(55.9965, 70.3859, 1.4998, 1.4998);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#EF8720")
      .s()
      .p("AAAADQgTgEAAgDQABgEATAGQAUAEgBAEQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAgMgEg");
    this.shape_22.setTransform(5.5753, 220.7873, 1.4998, 1.4998);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#EF8720").s().p("AAAACQgWgFAAgCQABgCAWAGQAXAEgBADIgCABQgEAAgRgFg");
    this.shape_23.setTransform(8.1246, 209.6387, 1.4998, 1.4998);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#EF8720").s().p("AAAACQgYgGABgBQAAgDAYAHQAXAFAAACIgCABQgFAAgRgFg");
    this.shape_24.setTransform(7.6311, 199.2331, 1.4998, 1.4998);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#EF8720")
      .s()
      .p("AAAADQgTgFABgCQABgDASAFQATAFgBACQAAABAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQgEAAgMgDg");
    this.shape_25.setTransform(12.5834, 190.9258, 1.4998, 1.4998);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#EF8720").s().p("AAAACQgagFAAgDQABgDAaAHQAaAGAAADIgDABQgGAAgSgGg");
    this.shape_26.setTransform(15.2082, 176.5771, 1.4998, 1.4998);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#EF8720")
      .s()
      .p("AgDACIgJgCIABgEIAKACQAPADgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgEAAgJgDg");
    this.shape_27.setTransform(18.9997, 120.8612, 1.4998, 1.4998);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#EF8720")
      .s()
      .p("AgBADQgPgDgFgDIABgDQAFgBAPAEQAXAFgBAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgGAAgNgEg");
    this.shape_28.setTransform(11.7243, 167.0761, 1.4998, 1.4998);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#EF8720")
      .s()
      .p("AAAAEQgXgGABgDQABgDAWAGQAXAFgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgGAAgOgDg");
    this.shape_29.setTransform(17.9454, 158.7045, 1.4998, 1.4998);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#EF8720")
      .s()
      .p("AAAAFQgigIABgFQABgFAhAIQAjAIgCAGQAAACgFAAQgIAAgVgGg");
    this.shape_30.setTransform(21.3636, 148.8305, 1.4998, 1.4998);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#EF8720").s().p("AgFACIgPgEIABgEIAPAEQAZAGAAACIgCABQgFAAgTgFg");
    this.shape_31.setTransform(17.1205, 135.5048, 1.4998, 1.4998);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#EF8720")
      .s()
      .p("AAAAEQgZgFACgEQABgFAXAHQAZAFgBAEQgBACgFAAQgGAAgNgEg");
    this.shape_32.setTransform(27.7986, 127.6329, 1.4998, 1.4998);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#EF8720").s().p("AAAACQgVgFABgBQABgCATAFQAWAFgBACIgBAAQgFAAgPgEg");
    this.shape_33.setTransform(29.6066, 118.7439, 1.4998, 1.4998);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#EF8720")
      .s()
      .p("AgCAEIgPgFIABgEQAIAAAIACQATAFgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAgBAAQgFAAgLgCg");
    this.shape_34.setTransform(23.3859, 105.6754, 1.4998, 1.4998);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#EC5F4D")
      .s()
      .p("AAAADQgggHABgDQABgEAfAIQAgAHgBAFQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgHAAgVgHg");
    this.shape_35.setTransform(30.769, 98.9486, 1.4998, 1.4998);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#EC5F4D")
      .s()
      .p("AgHADIgMgDIACgHIAMADQAZAGgBAEQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAQgGAAgQgFg");
    this.shape_36.setTransform(31.4091, 74.3532, 1.4998, 1.4998);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#EC5F4D").s().p("AAAACQgXgFABgCQAAgCAXAGQAWAFAAACIgCABQgFAAgQgFg");
    this.shape_37.setTransform(34.4405, 87.5499, 1.4998, 1.4998);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#EC5F4D").s().p("AAAADQgigIABgDQABgDAhAJQAhAIAAADIgCABQgHAAgZgHg");
    this.shape_38.setTransform(42.9155, 69.0425, 1.4998, 1.4998);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#128136")
      .s()
      .p("Ag8CbQAegrAdg8QA5h3gIhWIAMgPIgBA+QgEBGgUAnQgfBBgsBlg");
    this.shape_39.setTransform(60.8781, 38.5054, 1.4998, 1.4998);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#128136").s().p("AhNCAIAcgoQAjg2AjhEQAPgbAdhNIANAQIgcBLQgoBdg8Bdg");
    this.shape_40.setTransform(64.0277, 43.1924, 1.4998, 1.4998);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#279A38").s().p("AhNCAIAcgoQAjg2AjhEQAPgbAdhNIANAQIgcBLQgoBdg8Bdg");
    this.shape_41.setTransform(64.0277, 43.1924, 1.4998, 1.4998);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#128136")
      .s()
      .p("AhrCnQAzgyAvgpQAXgXASggQARgeAUhSIAQhLIAXgLIAAAgQgCAogNAqQgoCGiFBrg");
    this.shape_42.setTransform(68.6022, 37.343, 1.4998, 1.4998);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#128136").s().p("AhaCiQAZhSAxhkIBLifIAhgEIhyDaQgUApgSA6QgJAdgEAVg");
    this.shape_43.setTransform(64.4027, 35.9557, 1.4998, 1.4998);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#128136")
      .s()
      .p("Ag3CyQAZiuAhhvIAdhOIAYAEIgjBNQgjBVAAAlQAAAmgSBFQgIAigJAbg");
    this.shape_44.setTransform(60.7281, 35.6932, 1.4998, 1.4998);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#128136")
      .s()
      .p("AgiDBQADi6AUhyIAThPIAbgNIgQA9QgRBLgCBHQgDBHgNBEQgGAhgGAUg");
    this.shape_45.setTransform(57.6534, 33.5559, 1.4998, 1.4998);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#128136")
      .s()
      .p("AgFDCQAEgZABgmQAChMgNhEQgNhEAHhGIAJg4IAWAUIgHAZQgGAmgBBDQAAAeAQBsQAMBLgXA0g");
    this.shape_46.setTransform(51.5959, 31.1937, 1.4998, 1.4998);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#EF7D67")
      .s()
      .p("AgmBaQBFkvgThzIAJgMQAMgJATAIQAYARAUAUIACADQAVAihBDKQg4CuhkDtQAehqAiiWg");
    this.shape_47.setTransform(52.5323, 116.1992, 1.4997, 1.4997);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#BE3345")
      .s()
      .p(
        "AimJAQAKhwATiVQAmkrAri6QA5j4AMgsQAThGAYgrQAMgWAcAHIBHAfQgwgCheF2QgpCqhAE0QgeCMgmCbQgHAHgEAAQgHAAAAgRg",
      );
    this.shape_48.setTransform(24.9946, 149.1836, 1.4998, 1.4998);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#EC5F4D")
      .s()
      .p(
        "AjiJFQAKhwATiVQAmkrAri6QA6j4AMgsQAThGAYgrQAUgnBKARQBLARA2A5QAZAbhADJQg4CwhlDuQhgDmhKCKQg5BqgQAAQgHAAAAgRg",
      );
    this.shape_49.setTransform(34.0104, 148.4381, 1.4998, 1.4998);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.carrotte1, new cjs.Rectangle(0, 0, 84.8, 238.2), null);

  (lib.cachesac = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f("#50506E").s().p("AABE2IgbprIAcAAIAZJrg");
    this.shape.setTransform(11.45, 30.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#2B2E6D").s().p("AgYEnIghpcIBXAAIAcJrg");
    this.shape_1.setTransform(5.75, 30.95);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cachesac, new cjs.Rectangle(0, 0, 14.2, 61.9), null);

  (lib.saucisson = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.saucissons();
    this.instance.setTransform(58.6, 167.25, 1, 1, 0, 0, 0, 58.6, 167.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.saucisson, new cjs.Rectangle(0, 0, 117.1, 334.6), null);

  (lib.fondpanier = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.cachesac();
    this.instance.setTransform(238.95, 24.6, 1, 1, 0, 0, 0, 6.5, 24.6);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#473F92")
      .s()
      .p("AgEAqQgdgDgUgPQgTgPACgQQADgSAVgKQAXgKAcADQAeAEASAOQAUAPgCARQgCASgWAKQgQAHgVAAIgOgBg");
    this.shape.setTransform(239.7262, 71.1692, 1.2148, 1.2148);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#DE291B")
      .s()
      .p(
        "AtrFPIksvUMAkvADkIjiQngAL3kcQgQANgDATIhfK9QgDATAMAQQAMAQATAEIB/ATQATADAQgLQAQgMADgTIBvrBQADgTgLgQQgMgQgUgCIiPgTIgHAAQgPAAgNAJgAFelSQgPANgBATIg2K4QgBAVAMAPQANAQATADIChAaQAUADAPgLQAQgMADgTIBgq6QACgUgMgPQgMgQgTgDIjQgbIgHAAQgPAAgNAJgAgFmBQgOANAAATIgMK3QgBATAOARQAOAQASADIB7ATQATADAPgMQAOgLACgUIAqq4QABgTgNgQQgNgQgTgDIidgUIgHAAQgPAAgLAJgAmJm0QgNAMACAUIBCK5QACAUAPAQQAPARATADIBdAOQATADANgMQANgLgBgUIgoq7QgBgTgOgQQgPgQgTgDIh6gQIgHAAQgPAAgKAKgAqynbQgMALADAUIBlK5QADAUAQAQQAPAQAUACIBLAMQAUAEAMgMQAMgMgCgTIhWq7QgDgUgQgQQgPgPgUgDIhcgMIgGAAQgPAAgKAKgAvOoCQgLALAFATICmK/QAFATARAQQARAPAUADIAeAEQATACALgLQAMgMgEgTIiLq1QgEgTgQgQQgRgQgTgDIg+gLIgJgBQgNAAgIAJg",
      );
    this.shape_1.setTransform(250.0602, 140.5317, 1.2255, 1.233, 0, 9.8433, -2.5385);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#ECECEC").ss(1, 1, 1).p("AqBqXMAgIAFfIkEPQMgoJgGg");
    this.shape_2.setTransform(202.875, 244.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#AF2618").s().p("A2GD4IMKtnIgFgoMAgIAFfIkEPQg");
    this.shape_3.setTransform(202.875, 244.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#DE291B")
      .s()
      .p(
        "ApjniIQrn5IAXADICAQMIAFAoIsKNoIgVAYgAl4k0QhuBfAFAmQAEAkB0F2QCAGhAkANQAjAPAygsQAggcAggsQAUgch3nBQhblVgWhkQgCgRgOAAQgbAAhJA/gAiGpQQhuBGAFAmQAEAmB0GTQB/G9AjAWQAjAXAyggQAggUAhglQAUgYh4nbQhalrgWhqQgCgVgVAAQgdAAg/AngADjsGQh0BCACAkQABAkBYF4QBgGgAiAUQAiAVA1geQAhgUAkgjQAWgWhVm8QhBlUgPhjQgBgUgVAAQgdAAhDAng",
      );
    this.shape_4.setTransform(78.025, 172.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#C5211A").s().p("A/JBeITMnTMArHADkIh8D3MgosgD0IgXgDIwsH4IggAPg");
    this.shape_5.setTransform(199.4, 88.4);

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
            {t: this.instance},
          ],
        })
        .wait(1),
    );

    // Calque_2
    this.instance_1 = new lib.ombre();
    this.instance_1.setTransform(111.1, 268.15, 1, 1, 0, 0, 0, 210.2, 56.7);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.fondpanier,
    new cjs.Rectangle(-99.1, 0, 501.9, 324.9),
    null,
  );

  (lib.saccourses = function (mode, startPosition, loop, reversed) {
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

    // timeline functions:
    this.frame_78 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

    // PANIERDEVANT
    this.instance = new lib.panier1();
    this.instance.setTransform(813.65, 239.4, 1, 1, 0, 0, 0, 209.8, 181.7);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({regX: 209.9, scaleY: 1.0044, skewX: 3.5899, x: 568}, 0)
        .wait(1)
        .to({scaleY: 1.0076, skewX: 6.2316, x: 387.2}, 0)
        .wait(1)
        .to({regX: 209.8, scaleY: 1.0096, skewX: 7.925, x: 271.2}, 0)
        .wait(1)
        .to({regX: 209.9, scaleY: 1.0078, skewX: 3.1202, x: 249.5}, 0)
        .wait(1)
        .to({scaleY: 1.0064, skewX: -0.6169, x: 232.5}, 0)
        .wait(1)
        .to({scaleY: 1.0053, skewX: -3.2862, x: 220.4, y: 239.35}, 0)
        .wait(1)
        .to({scaleY: 1.0047, skewX: -4.8878, x: 213.2, y: 239.4}, 0)
        .wait(1)
        .to({regX: 209.8, scaleY: 1.0045, skewX: -5.4217, x: 210.7}, 0)
        .to({scaleY: 1, skewX: 0, x: 217.55}, 10)
        .wait(61),
    );

    // Calque_3
    this.instance_1 = new lib.courge();
    this.instance_1.setTransform(252.4, 392.7, 0.1385, 0.1705, 0, 0, 0, 82.7, 84.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(24)
        .to({_off: false}, 0)
        .to({regX: 82.6, scaleX: 1, scaleY: 1, x: 252.35, y: 392.75}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.8094}, 2)
        .to({scaleY: 1}, 2)
        .wait(47),
    );

    // Calque_2
    this.instance_2 = new lib.tomate2();
    this.instance_2.setTransform(164.45, 376.2, 0.1894, 0.1973, 0, 0, 0, 46.7, 93);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(28)
        .to({_off: false}, 0)
        .to({regX: 46.6, scaleX: 1, scaleY: 1, x: 164.35, y: 376.15}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9258}, 2)
        .to({scaleY: 1}, 2)
        .wait(43),
    );

    // Calque_9
    this.instance_3 = new lib.tomate1();
    this.instance_3.setTransform(114.2, 376.15, 0.1542, 0.219, 0, 0, 0, 50.2, 97);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(32)
        .to({_off: false}, 0)
        .to({scaleX: 1, scaleY: 1, x: 114.15, y: 376.1}, 4, cjs.Ease.get(1))
        .to({regY: 97.1, scaleY: 0.9583, y: 376.25}, 2)
        .to({regY: 97, scaleY: 1, y: 376.1}, 2)
        .wait(39),
    );

    // Calque_8
    this.instance_4 = new lib.saucisson();
    this.instance_4.setTransform(335, 357.1, 0.1973, 0.1746, 0, 0, 0, 28.4, 279.9);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(36)
        .to({_off: false}, 0)
        .to({scaleX: 1, scaleY: 1, y: 357.15}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9425}, 2)
        .to({scaleY: 1}, 2)
        .wait(35),
    );

    // Calque_7
    this.instance_5 = new lib.fromage();
    this.instance_5.setTransform(239.3, 357.95, 0.0503, 0.1396, 0, 0, 0, 98.4, 118.5);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(40)
        .to({_off: false}, 0)
        .to({regX: 98.3, scaleX: 1, scaleY: 1, x: 239.25, y: 357.85}, 4, cjs.Ease.get(1))
        .to({regY: 118.6, scaleY: 0.9127, y: 358}, 2)
        .to({regY: 118.5, scaleY: 1, y: 357.85}, 2)
        .wait(31),
    );

    // Calque_6
    this.instance_6 = new lib.poivron();
    this.instance_6.setTransform(225.45, 302.5, 0.1008, 0.087, 0, 0, 0, 45.6, 120.8);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(44)
        .to({_off: false}, 0)
        .to({regY: 120.7, scaleX: 1, scaleY: 1, x: 225.4, y: 302.45}, 4, cjs.Ease.get(1))
        .to({regY: 120.8, scaleY: 0.8956, y: 302.55}, 2)
        .to({regY: 120.7, scaleY: 1, y: 302.45}, 2)
        .wait(27),
    );

    // Calque_5
    this.instance_7 = new lib.farine();
    this.instance_7.setTransform(127.25, 314.4, 0.2063, 0.0982, 0, 0, 0, 66.7, 163);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(49)
        .to({_off: false}, 0)
        .to({regX: 66.6, scaleX: 1, scaleY: 1, x: 127.2}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9153}, 2)
        .to({scaleY: 1}, 2)
        .wait(22),
    );

    // Calque_17
    this.instance_8 = new lib.pain();
    this.instance_8.setTransform(80, 272.65, 0.1669, 0.0943, 0, 0, 0, 80, 272.6);
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(53)
        .to({_off: false}, 0)
        .to({scaleX: 1, scaleY: 1, x: 79.95, y: 272.55}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9156}, 2)
        .to({scaleY: 1}, 2)
        .wait(18),
    );

    // Calque_16
    this.instance_9 = new lib.carrotte1();
    this.instance_9.setTransform(225.5, 302.5, 0.1031, 0.0497, 0, 0, 0, 40.2, 210.3);
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(57)
        .to({_off: false}, 0)
        .to({scaleX: 1, scaleY: 1, x: 225.45, y: 302.45}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9634}, 2)
        .to({scaleY: 1}, 2)
        .wait(14),
    );

    // Calque_15
    this.instance_10 = new lib.carrotte2();
    this.instance_10.setTransform(248.2, 290.95, 0.062, 0.0724, 0, 0, 0, 73.4, 196.1);
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(61)
        .to({_off: false}, 0)
        .to({regX: 73.2, scaleX: 1, scaleY: 1, y: 291}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.924, y: 291.05}, 2)
        .to({scaleY: 1, y: 291}, 2)
        .wait(10),
    );

    // Calque_14
    this.instance_11 = new lib.soda();
    this.instance_11.setTransform(305.5, 307.45, 0.1754, 0.0415, 0, 0, 0, 61.3, 263.6);
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(65)
        .to({_off: false}, 0)
        .to({regX: 61.2, scaleX: 1, scaleY: 1, x: 305.4, y: 307.4}, 4, cjs.Ease.get(1))
        .to({scaleY: 0.9302, y: 307.45}, 2)
        .to({scaleY: 1, y: 307.4}, 2)
        .wait(6),
    );

    // Calque_13
    this.instance_12 = new lib.lait();
    this.instance_12.setTransform(187.65, 274.45, 0.1826, 0.1394, 0, 0, 0, 85.7, 232.4);
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(69)
        .to({_off: false}, 0)
        .to({scaleX: 1, scaleY: 1}, 4, cjs.Ease.get(1))
        .to({regY: 232.5, scaleY: 0.9456, y: 274.55}, 2)
        .to({regY: 232.4, scaleY: 1, y: 274.45}, 2)
        .wait(2),
    );

    // FOND
    this.instance_13 = new lib.fondpanier();
    this.instance_13.setTransform(815.9, 255.4, 1, 1, 0, 0, 0, 201.4, 155.6);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(1)
        .to({regX: 154.3, regY: 162.5, scaleY: 1.0044, skewX: 3.5899, x: 521.65, y: 262.3}, 0)
        .wait(1)
        .to({scaleY: 1.0076, skewX: 6.2316, x: 339.75, y: 262.25}, 0)
        .wait(1)
        .to({regX: 201.4, regY: 155.6, scaleY: 1.0096, skewX: 7.925, x: 271.25, y: 255.4}, 0)
        .wait(1)
        .to({regX: 154.3, regY: 162.5, scaleY: 1.0078, skewX: 3.1202, x: 203.3, y: 262.3}, 0)
        .wait(1)
        .to({scaleY: 1.0064, skewX: -0.6169, x: 187.85}, 0)
        .wait(1)
        .to({scaleY: 1.0053, skewX: -3.2862, x: 176.8}, 0)
        .wait(1)
        .to({scaleY: 1.0047, skewX: -4.8878, x: 170.2, y: 262.25}, 0)
        .wait(1)
        .to({regX: 201.5, regY: 155.6, scaleY: 1.0045, skewX: -5.4217, x: 214.5, y: 255.4}, 0)
        .to({regX: 201.4, scaleY: 1, skewX: 0, x: 219.8}, 10)
        .wait(61),
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-80.7, 0, 1104.4, 425.8);

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

    this.actionFrames = [29];
    // timeline functions:
    this.frame_29 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

    // PANIER
    this.instance = new lib.saccourses();
    this.instance.setTransform(374.35, 255, 1, 1, 0, 0, 0, 213.8, 210.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off: false}, 0).wait(1));

    // Calque_16
    this.instance_1 = new lib.cerc4();
    this.instance_1.setTransform(602.05, 114.6, 0.1, 0.1, 0, 0, 0, 29, 29.5);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(18)
        .to({_off: false}, 0)
        .wait(1)
        .to({regX: 28.3, regY: 29, scaleX: 0.6555, scaleY: 0.6555, x: 626.45, y: 100.85}, 0)
        .wait(1)
        .to({regX: 29, regY: 29.6, scaleX: 0.9889, scaleY: 0.9889, x: 641.85, y: 93.25}, 0)
        .wait(1)
        .to({regX: 28.3, regY: 29, scaleX: 1.0375, scaleY: 1.0375, x: 643.25, y: 91.45}, 0)
        .wait(1)
        .to({scaleX: 1.0722, scaleY: 1.0722, x: 644.8, y: 90.6}, 0)
        .wait(1)
        .to({scaleX: 1.093, scaleY: 1.093, x: 645.75, y: 90.05}, 0)
        .wait(1)
        .to({regX: 28.4, regY: 29.1, scaleX: 1.1, scaleY: 1.1, x: 646.9, y: 90.55}, 0)
        .to({regX: 28.3, regY: 29, scaleX: 1, scaleY: 1, x: 646.85, y: 90.5}, 3)
        .wait(3),
    );

    // Calque_15
    this.instance_2 = new lib.cerc3();
    this.instance_2.setTransform(545.5, 233.85, 0.1, 0.1, 0, 0, 0, 106, 103);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(12)
        .to({_off: false}, 0)
        .wait(1)
        .to({regX: 105.9, scaleX: 0.6555, scaleY: 0.6555, x: 579.85, y: 234.55}, 0)
        .wait(1)
        .to({regX: 106, scaleX: 0.9889, scaleY: 0.9889, x: 600.6, y: 235}, 0)
        .wait(1)
        .to({regX: 105.9, scaleX: 1.0375, scaleY: 1.0375, x: 603.5}, 0)
        .wait(1)
        .to({scaleX: 1.0722, scaleY: 1.0722, x: 605.65, y: 235.05}, 0)
        .wait(1)
        .to({scaleX: 1.093, scaleY: 1.093, x: 606.9, y: 235.1}, 0)
        .wait(1)
        .to({regX: 106, scaleX: 1.1, scaleY: 1.1, x: 607.6, y: 235.15}, 0)
        .to({scaleX: 1, scaleY: 1}, 3)
        .wait(9),
    );

    // Calque_12
    this.instance_3 = new lib.cerc1();
    this.instance_3.setTransform(290.95, 208.8, 0.1, 0.1, 0, 0, 0, 146.5, 148.5);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(5)
        .to({_off: false}, 0)
        .wait(1)
        .to({regX: 146.3, regY: 147.9, scaleX: 0.6555, scaleY: 0.6555, x: 253.15, y: 208.15}, 0)
        .wait(1)
        .to({regX: 146.6, regY: 148.5, scaleX: 0.9889, scaleY: 0.9889, x: 230.8, y: 208.45}, 0)
        .wait(1)
        .to({regX: 146.3, regY: 147.9, scaleX: 1.0375, scaleY: 1.0375, x: 227.15, y: 207.8}, 0)
        .wait(1)
        .to({scaleX: 1.0722, scaleY: 1.0722, x: 224.75, y: 207.75}, 0)
        .wait(1)
        .to({scaleX: 1.093, scaleY: 1.093, x: 223.3, y: 207.7}, 0)
        .wait(1)
        .to({regY: 148, scaleX: 1.1, scaleY: 1.1, x: 223.1, y: 208.45}, 0)
        .to({regY: 147.9, scaleX: 1, scaleY: 1, y: 208.4}, 3)
        .wait(16),
    );

    // Calque_14
    this.instance_4 = new lib.cerc2();
    this.instance_4.setTransform(432.4, 204.4, 0.1, 0.1, 0, 0, 0, 208.5, 192.5);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(1)
        .to({regX: 208.3, regY: 192.1, scaleX: 0.6277, scaleY: 0.6277, x: 432.25, y: 204.15}, 0)
        .wait(1)
        .to({regX: 208.6, regY: 192.6, scaleX: 0.9444, scaleY: 0.9444, x: 432.45, y: 204.5}, 0)
        .wait(1)
        .to({regX: 208.3, regY: 192.1, scaleX: 0.9906, scaleY: 0.9906, x: 432.15, y: 203.95}, 0)
        .wait(1)
        .to({scaleX: 1.0236, scaleY: 1.0236, x: 432.1}, 0)
        .wait(1)
        .to({scaleX: 1.0434, scaleY: 1.0434, x: 432.15}, 0)
        .wait(1)
        .to({regX: 208.2, scaleX: 1.05, scaleY: 1.05, x: 432.35, y: 204.4}, 0)
        .to({scaleX: 1, scaleY: 1}, 3)
        .wait(21),
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(437.2, 242.7, 747, 226.40000000000003);
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

