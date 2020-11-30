(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
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
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop, this.reversed),
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.tomate = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F5A16A").s().p("AgugGQAFgTAtAPQAWAHAWAKQgbAIgYACIgNABQglAAAHgYg");
    this.shape.setTransform(29.5263, 39.6576, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#F5A16A").s().p("AgGAFQglgiAQgGQAcgJATAoQAJAUAEAWQgWgQgRgRg");
    this.shape_1.setTransform(34.8693, 34.2807, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#F5A16A").s().p("AgJAKQgqgkAYgOQAbgQAVAxQAKAYAGAcQgagQgUgTg");
    this.shape_2.setTransform(41.7495, 28.3799, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#F5A16A").s().p("AgUACQgIgsAfgDQAggDgSAvQgJAXgOAYQgKgWgEgWg");
    this.shape_3.setTransform(50.3036, 27.6954, 1.2499, 1.2499);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#E94749")
      .s()
      .p(
        "AhxBBQgIgXACgPQABgRAXgQQAbgUAHgcQAHgbAUgKQARgJAgADIArAEIAYADQANACAIAGQATAMgBAXQh5BghVAyQgUgGgIgcg",
      );
    this.shape_4.setTransform(39.862, 33.0967, 1.2499, 1.2499);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#C03334")
      .s()
      .p("Ai8ApQAniCAngUQB4g+BzAFQAyACAXARQAYASgOAfQhZBMhpBJQiYBshBAJIgBAAQgWAAAmh/g");
    this.shape_5.setTransform(38.9644, 34.0948, 1.2499, 1.2499);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#D5373A")
      .s()
      .p(
        "AktCVQgZhSAOhSQAOhUCIhLQBng4BUgPQBCgMB6AyQB1AwgOARIAAABQiygkhxAJQihALg/BiQhZCEAtCvQgkgXgWhMg",
      );
    this.shape_6.setTransform(39.7061, 31.0611, 1.2499, 1.2499);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E94749")
      .s()
      .p("AkQDOQgsivBYiEQBAhiChgLQBxgJCxAkQgVAZg5AyQh1BjioB0IgBAAQhwBNg0AaQgGADgGAAQgJAAgKgHg");
    this.shape_7.setTransform(43.2561, 36.3358, 1.2499, 1.2499);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E94749")
      .s()
      .p(
        "Aj9DuQgUgTgRgoQgnheARhnQAOhUCIhLQBng4BUgPQBCgMB6AyQB1AwgOARQgVAbg6AxQh1BiioB1IAAAAQhwBNg1AaQgFADgGAAQgNAAgQgOg",
      );
    this.shape_8.setTransform(39.6884, 31.4856, 1.2499, 1.2499);

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
  }).prototype = getMCSymbolPrototype(lib.tomate, new cjs.Rectangle(0, 0, 79.5, 63), null);

  (lib.mais = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E1D16F")
      .s()
      .p("AgBA9QgPgLgRgbIgdgqQgNgVAEgKQAFgQAlgCQApgDAgAZQAhAagFAoQgEAmgcAJQgIADgIAAQgOAAgLgJg");
    this.shape.setTransform(74.2204, 46.838, 1.2498, 1.2498);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#9AB14E")
      .s()
      .p("AgNA8QgNgMgNgeIgWguQgKgXAFgJQAIgPAlADQApAEAcAdQAcAfgLAmQgKAlgcAFIgKABQgRAAgNgNg");
    this.shape_1.setTransform(72.4736, 48.5073, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F5F1E8")
      .s()
      .p("AClAzQhlgjhAgTQhMgZhcgUIhJgRQgCgEBLAFQBZAHBaAVQBhAWBMAkQBDAhgKAKQgCADgGAAQgRAAgzgRg");
    this.shape_2.setTransform(44.3512, 38.9245, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E1D16F")
      .s()
      .p("AgtA8QgKgDACgfQAEghAVgbQAXgcAcACQAbACAEAWQADATgNARQgJALgWAPIgiAZQgNAKgIAAIgDgBg");
    this.shape_3.setTransform(32.005, 95.0519, 1.2498, 1.2498);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#C6C05C")
      .s()
      .p("AgzA4QgJgFAHgfQAHgiAZgXQAZgZAbAIQAZAGABAXQAAAUgOAOQgLALgXAMIgjATQgNAGgHAAIgFgBg");
    this.shape_4.setTransform(32.909, 96.3943, 1.2498, 1.2498);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#F5F1E8")
      .s()
      .p("AhJClQAMhYAahZQAbhfAohKQAlhCAKALQAIAHgbBFIg/ChQgdBLgaBbIgUBHIAAAAQgFAAAKhJg");
    this.shape_5.setTransform(24.9295, 123.9806, 1.2499, 1.2499);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#E2CF45")
      .s()
      .p("AgjAzQgNgQAEgTQACgOAOgTQAIgLAMgVQAJgQAJABQAMAAAOAdQAPAggHAeQgIAfgdAGIgLABQgTAAgMgOg");
    this.shape_6.setTransform(38.9231, 61.3837, 1.2498, 1.2498);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#A3B661")
      .s()
      .p("AgoAqQgLgRAGgSQAFgMAQgRQAKgJAOgTQANgNAIACQANACAJAeQALAhgLAcQgNAegeABIgBAAQgbAAgMgVg");
    this.shape_7.setTransform(36.9032, 60.3263, 1.2498, 1.2498);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E4D3B5")
      .s()
      .p("AALD5QgKgDgChKQgDhqgDhDQgEhRgNhdIgKhJQADgEAVBJQAYBVANBdQANBhgIBUQgHBGgMAAIgCgBg");
    this.shape_8.setTransform(34.1468, 31.1527, 1.2499, 1.2499);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E1D16F")
      .s()
      .p("AgiAqQgagRAFghQAEgfAVgKQASgJAOAJQAMAHANAUQAHAMAOATQALAPgDAJQgFANgdAGQgKACgJAAQgUAAgRgMg");
    this.shape_9.setTransform(82.2219, 35.1632, 1.2498, 1.2498);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#C6C05C")
      .s()
      .p("AglAmQgWgWAJggQAJgfAWgHQASgGANAMQAKAJAKAWIAQAiQAIARgFAJQgGAMgdACIgEAAQgdAAgUgTg");
    this.shape_10.setTransform(83.5866, 33.4905, 1.2498, 1.2498);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#E5D4B6")
      .s()
      .p("AgIAcQhLgHg7gVQg0gTAIgKQAFgHA3ALIB/AaQA8AMBHAGIA5AGQABADg6AEIgvABQgvAAgugFg");
    this.shape_11.setTransform(105.4846, 38.6664, 1.2499, 1.2499);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#E2CF45")
      .s()
      .p("AgeA3QgPgOABgTQABgPAKgUIARgiQAIgRAIgBQAMgBARAbQATAegDAeQgEAggcAKQgJADgHAAQgQAAgLgLg");
    this.shape_12.setTransform(46.8007, 126.5806, 1.2498, 1.2498);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#A3B661")
      .s()
      .p("AgkAwQgNgQAEgSQADgOAOgSIAVgeQAKgQAIABQANABAOAdQAPAggIAcQgIAfgfAFIgJABQgVAAgMgQg");
    this.shape_13.setTransform(44.5819, 125.6634, 1.2498, 1.2498);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#F8EEC3")
      .s()
      .p("AAxD0QgKgCgNhIQgRhqgLhBQgNhPgahbIgThIQADgEAeBFQAjBSAYBaQAaBfADBUQACBHgNAAIgBAAg");
    this.shape_14.setTransform(37.1941, 97.3826, 1.2499, 1.2499);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#E1D16F")
      .s()
      .p("AglA5QgYgjAEgnQAFgpAlgRQAigQAWASQATAPgBAYQgBATgPAbIgVAvQgLAXgLACIgDAAQgPAAgTgbg");
    this.shape_15.setTransform(47.5859, 44.6459, 1.2498, 1.2498);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#9AB14E")
      .s()
      .p("AgwAyQgTgmAKglQAMgpAngLQAkgLATAVQAQASgFAYQgEASgSAZIgdArQgNAVgLAAIgBAAQgQAAgQggg");
    this.shape_16.setTransform(50.4301, 45.4589, 1.2498, 1.2498);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#EDD787")
      .s()
      .p("AgfAKQgghdgJhUQgHhLAPADQAKABARBIIAnCpQASBOAfBZIAYBGQg9hdgtiJg");
    this.shape_17.setTransform(56.5982, 73.6909, 1.2499, 1.2499);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#E1D16F")
      .s()
      .p("AgRAnQgkgFgNgZQgMgYARgOQAOgMAVACQAPABAYALIAnARQATAIABAGQADALgcAOQgYALgYAAIgQgBg");
    this.shape_18.setTransform(38.3265, 114.9239, 1.2498, 1.2498);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#C6C05C")
      .s()
      .p("AgZAnQgigJgIgbQgIgZAUgMQAQgLAUAFQAPADAVAOQAMAIAYANQASAJgBAHQAAAMgeAKQgTAGgTAAQgNAAgOgDg");
    this.shape_19.setTransform(39.182, 113.0378, 1.2498, 1.2498);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#F5F1E8")
      .s()
      .p("AjzAzQACgKBJgOICqgdQBPgOBbgaIBIgUQhhA4iMAmQheAahUAEIgZABQgyAAADgMg");
    this.shape_20.setTransform(66.4141, 106.1652, 1.2499, 1.2499);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#E2CF45")
      .s()
      .p("AADAtQgMgGgQgSIgagaQgNgOADgIQADgMAfgGQAigHAcAOQAdAPgBAdQgCAcgWAKQgKAFgJAAQgJAAgIgEg");
    this.shape_21.setTransform(87.9391, 117.829, 1.2498, 1.2498);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#A3B661")
      .s()
      .p("AgGAtQgMgIgMgUIgVgeQgKgPAEgIQAFgLAfgDQAjgCAYASQAaASgGAeQgGAcgYAHQgHACgHAAQgLAAgJgGg");
    this.shape_22.setTransform(86.5955, 119.3802, 1.2498, 1.2498);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#E4D3B5")
      .s()
      .p("ACpAiQhogXhCgMQhPgPhdgKIhKgHQgDgFBLgDQBagDBbAKQBjAKBQAbQBHAYgJAMQgCAEgMAAQgTAAgtgJg");
    this.shape_23.setTransform(57.0084, 116.072, 1.2499, 1.2499);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#E1D16F")
      .s()
      .p("AgoA1QgIgQAHgUQAFgPARgUQAKgLAOgXQANgRAHABQAMABAGAeQAHAhgNAfQgNAigcAGIgLACQgSAAgHgQg");
    this.shape_24.setTransform(70.6373, 127.4149, 1.2498, 1.2498);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#C6C05C")
      .s()
      .p("AgsAtQgHgTAKgSQAHgNASgSIAcgdQAPgPAHACQALADACAfQADAigQAeQgRAggcABIgCAAQgYAAgHgVg");
    this.shape_25.setTransform(69.1083, 126.2883, 1.2498, 1.2498);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#F5F1E8")
      .s()
      .p("AgSD6QgJgFAFhJQAJhqAEhDQAFhRgChdIgChLQAEgDAMBLQAOBYACBcQADBkgSBSQgNBDgMAAIgCgBg");
    this.shape_26.setTransform(70.4905, 97.9456, 1.2499, 1.2499);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#E1D16F")
      .s()
      .p("AglBMQgUgOAAgYQABgTAMgcIATgwQAJgXALgDQAPgEAYAdQAaAhgCAnQgDAqgkATQgSAJgNAAQgOAAgLgIg");
    this.shape_27.setTransform(111.0011, 87.1134, 1.2498, 1.2498);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#C6C05C")
      .s()
      .p("AgtBHQgRgRADgYQADgTARgaIAagsQANgWAKgBQAQgCAUAhQAUAkgIAmQgJApgnAOQgMAFgMAAQgSAAgNgMg");
    this.shape_28.setTransform(108.0826, 86.3921, 1.2498, 1.2498);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#E5D4B6")
      .s()
      .p("ABQDsQgLgBgVhGQgdhngTg/QgXhNgkhYIgchFQACgEAmBBQAuBOAhBWQAmBbANBTQALBIgNAAIgBAAg");
    this.shape_29.setTransform(100.1475, 58.5945, 1.2499, 1.2499);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#E2CF45")
      .s()
      .p("Ag5AqQgIgJAOgdQAQgfAcgOQAcgOAXAUQAWASgGAXQgEAUgRAJQgNAGgXACIglAEIgIABQgMAAgDgGg");
    this.shape_30.setTransform(52.5245, 88.5621, 1.2498, 1.2498);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#A3B661")
      .s()
      .p("AAAAtIgmgCQgTgCgDgIQgGgLARgZQAUgeAdgJQAdgJAUAYQATAVgIAWQgHAUgSAGQgJADgOAAIgMAAg");
    this.shape_31.setTransform(52.6591, 90.6262, 1.2498, 1.2498);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#F8EEC3")
      .s()
      .p("AizCwQA2hiBkhoQBDhIBGguQA/gqAEAOQAEAKg3AxQhRBFgyAsQg8A1hBBFIgzA2IAAAAg");
    this.shape_32.setTransform(32.7552, 113.3687, 1.2499, 1.2499);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#E2CF45")
      .s()
      .p("AATAuQgOgCgUgMIghgTQgRgJAAgHQAAgNAcgPQAfgRAeAEQAgAGAIAdQAHAbgSAQQgNAMgQAAIgFAAg");
    this.shape_33.setTransform(117.0162, 56.5802, 1.2498, 1.2498);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#A3B661")
      .s()
      .p("AAKAvQgMgEgSgPIgdgYQgPgKACgJQABgNAegLQAggNAdAJQAeAKADAfQACAcgUAOQgMAIgMAAIgLgBg");
    this.shape_34.setTransform(116.0275, 58.7144, 1.2498, 1.2498);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#E4D3B5")
      .s()
      .p("Aj2AwQgEgEBHgZQBUgeBbgSQBhgUBUACQBLADgFAOQgDAKhJAIIisAQQhQAJhcAUIhJAPIAAAAg");
    this.shape_35.setTransform(87.2778, 63.9326, 1.2499, 1.2499);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#E1D16F")
      .s()
      .p("AANA9QgPgIgXgXIgkgjQgSgRACgLQACgRAkgKQAngLAkARQAmATAEAoQADAmgZAPQgLAHgMAAQgKAAgKgEg");
    this.shape_36.setTransform(131.9684, 51.8609, 1.2498, 1.2498);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#C6C05C")
      .s()
      .p("AACA9QgOgKgTgaIgegoQgQgUAEgLQAEgQAmgEQAogFAhAWQAjAZgDAnQgCAngbAKQgJAEgJAAQgNAAgMgHg");
    this.shape_37.setTransform(130.5183, 54.0887, 1.2498, 1.2498);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#E5D4B6")
      .s()
      .p("ACrAZQhpgNhDgHQhQgHhegBIhLAAQgDgFBLgJQBZgMBcABQBjABBSAVQBJARgHAMQgDAGgYAAQgTAAghgEg");
    this.shape_38.setTransform(101.4914, 49.2404, 1.2499, 1.2499);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#E2CF45")
      .s()
      .p("AgLAkIgjgOQgSgHgBgIQgCgMAagTQAdgVAeABQAgACAMAcQALAZgQASQgNAQgUAAQgOAAgVgJg");
    this.shape_39.setTransform(125.6901, 71.3372, 1.2498, 1.2498);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#A3B661")
      .s()
      .p("AARAuQgNgCgTgMIgggUQgQgKAAgHQAAgNAcgPQAfgRAdAFQAfAHAHAeQAGAbgSAQQgNAMgPAAIgGgBg");
    this.shape_40.setTransform(124.8916, 73.6638, 1.2498, 1.2498);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#F8EEC3")
      .s()
      .p("AjvBMQgFgDBEgjQBPgnBYgeQBdghBUgIQBLgIgDAPQgCAKhHASIipAmQhOAThZAfIhGAZIAAAAg");
    this.shape_41.setTransform(97.2553, 83.1944, 1.2499, 1.2499);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#E1D16F")
      .s()
      .p("AgMA5QgqgCgUgkQgSghARgXQAOgUAYAAQATAAAcANQARAIAfAKQAYAJACALQAFAPgdAYQgfAZgkAAIgFgBg");
    this.shape_42.setTransform(30.2792, 126.8399, 1.2498, 1.2498);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#9AB14E")
      .s()
      .p("AgWA6QgpgJgOgmQgNgjAUgVQARgRAYADQASADAaARIAtAZQAWANABAKQACAQggATQgbAQgbAAQgKAAgLgCg");
    this.shape_43.setTransform(30.9887, 123.9002, 1.2498, 1.2498);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#F5F1E8")
      .s()
      .p("AjqBSQABgKBGgWICmgyQBNgXBXglIBEgdQAFADhBAnQhNAthWAjQhbAmhTAOQgiAFgSAAQgVAAABgIg");
    this.shape_44.setTransform(58.7236, 115.6587, 1.2499, 1.2499);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#E1D16F")
      .s()
      .p("AgTAnQgjgGgMgaQgMgYASgOQAOgMAVADQAQADAWALQAOAIAZAKQATAIABAHQACALgcANQgXAKgXAAQgJAAgKgCg");
    this.shape_45.setTransform(18.3233, 107.657, 1.2498, 1.2498);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#C6C05C")
      .s()
      .p("AgaAmQgigKgHgbQgHgZAUgLQARgKAUAFQAPAEAVAOIAiAWQARAKAAAIQAAALgeAJQgSAFgRAAQgPAAgQgFg");
    this.shape_46.setTransform(19.2018, 105.817, 1.2498, 1.2498);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#F5F1E8")
      .s()
      .p("Aj1ApQADgKBJgLICrgWQBQgMBcgWIBIgSQhjA1iNAgQhgAYhUAAQhLAAAEgOg");
    this.shape_47.setTransform(46.6938, 100.1638, 1.2499, 1.2499);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#E2CF45")
      .s()
      .p("AgXA/QgMgCgIgfQgJghAMgdQANgeAdgBQAcAAAMAVQAKASgHASQgFANgRARIgZAcQgLAMgHAAIgDgBg");
    this.shape_48.setTransform(25.9711, 84.4861, 1.2498, 1.2498);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#A3B661")
      .s()
      .p("AggA7QgMgEgEggQgFgiAQgaQARgaAeAEQAcAEAJAXQAHATgJAQQgHAMgTAOIgdAXQgLAIgHAAIgEgBg");
    this.shape_49.setTransform(27.6705, 85.7874, 1.2498, 1.2498);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#E4D3B5")
      .s()
      .p("AgegDQAEhkAWhQQAThJAMAIQAKAFgKBJIgYCrQgKBQgDBfIgDBKQgXhuAGiPg");
    this.shape_50.setTransform(25.7445, 115.4265, 1.2499, 1.2499);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#E1D16F")
      .s()
      .p("AAUAqQgQgEgUgPIgkgXQgRgLAAgIQAAgLAdgIQAhgKAgALQAiAMAJAaQAHAbgTAKQgKAGgLAAQgHAAgIgCg");
    this.shape_51.setTransform(65.594, 135.1382, 1.2498, 1.2498);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#C6C05C")
      .s()
      .p("AALAqQgNgGgTgRIgggaQgPgOACgHQACgLAfgFQAigFAfAPQAgAPADAbQADAbgWAIQgIADgJAAQgKAAgKgEg");
    this.shape_52.setTransform(64.5351, 136.7584, 1.2498, 1.2498);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#F5F1E8")
      .s()
      .p("Aj5AbQgDgEBJgRQBXgUBcgIQBjgJBTAMQBKALgGAMQgEAKhJAAQhrgDhDAAQhQAAheAJIhKAHIAAAAg");
    this.shape_53.setTransform(36.3561, 137.11, 1.2499, 1.2499);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#E1D16F")
      .s()
      .p("AgtA8QgKgDACgfQAEghAVgbQAXgcAcACQAbADAEAWQADASgNARQgKAMgVAOIgiAZQgNAKgIAAIgDgBg");
    this.shape_54.setTransform(72.1878, 50.2428, 1.2498, 1.2498);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#C6C05C")
      .s()
      .p("AgzA4QgJgGAHgfQAHghAZgYQAZgYAbAHQAaAHAAAXQAAATgOAOQgLAMgXALIgjAUQgMAGgHAAQgDAAgDgBg");
    this.shape_55.setTransform(73.0906, 51.6047, 1.2498, 1.2498);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#F5F1E8")
      .s()
      .p("AhJClQAMhYAahZQAbhgAohJQAlhCAKALQAIAHgbBFIg/ChQgdBLgaBbIgUBHIAAAAQgFAAAKhJg");
    this.shape_56.setTransform(65.1136, 79.1965, 1.2499, 1.2499);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#E1D16F")
      .s()
      .p("AgYA/QgegegBgnQgCgqAigXQAfgVAZAOQAVAMACAZQACASgKAeQgGARgIAgQgHAYgKAEIgHABQgNAAgVgWg");
    this.shape_57.setTransform(12.7616, 36.4027, 1.2498, 1.2498);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#C6C05C")
      .s()
      .p("AgkA5QgZgiAEgnQAFgqAlgRQAhgQAXASQATAOgCAZQgBASgOAcIgVAvQgKAXgLACIgDAAQgPAAgTgbg");
    this.shape_58.setTransform(15.7553, 36.9035, 1.2498, 1.2498);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#F5F1E8")
      .s()
      .p("AgfAQQgvhXgVhSQgThJAPABQAKAAAdBEIBBCgQAfBKAsBUIAjBBQhLhThDh/g");
    this.shape_59.setTransform(26.9232, 63.7294, 1.2499, 1.2499);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#E2CF45")
      .s()
      .p("AgjAyQgNgPAEgTQACgOAOgTQAIgLAMgVQAJgQAJAAQAMABAOAdQAPAggHAdQgIAggdAGIgLACQgTAAgMgQg");
    this.shape_60.setTransform(49.9214, 97.036, 1.2498, 1.2498);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#A3B661")
      .s()
      .p("AgoArQgLgSAGgSQAFgMAQgRIAYgcQANgNAIACQANADAJAeQALAggLAcQgNAegeABIgBAAQgbAAgMgUg");
    this.shape_61.setTransform(47.9016, 95.9461, 1.2498, 1.2498);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#E4D3B5")
      .s()
      .p("AALD5QgKgDgChKQgDhqgDhDQgEhRgNhdIgKhKQAEgDAUBIQAYBXANBcQANBhgIBUQgHBGgMAAIgCgBg");
    this.shape_62.setTransform(45.1445, 66.8085, 1.2499, 1.2499);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#E1D16F")
      .s()
      .p("AABA1IgygDQgZgCgGgJQgJgOAVgeQAXgjAngKQAogLAdAdQAcAagKAbQgHAXgXAHQgLADgRAAIgWgBg");
    this.shape_63.setTransform(62.0076, 30.146, 1.2498, 1.2498);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#9AB14E")
      .s()
      .p("AgDAyIgygLQgZgGgEgKQgHgPAZgbQAdgfAmgEQAqgEAZAgQAXAegNAZQgKAWgZAEIgKABQgQAAgWgGg");
    this.shape_64.setTransform(62.0262, 33.1698, 1.2498, 1.2498);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#F5F1E8")
      .s()
      .p("AiYBhQA7hDBIg6QBLhABLgmQBEgiACAPQACAKg8AqIiPBhQhDAthIA9Ig5AwQgEgBAyg4g");
    this.shape_65.setTransform(38.0059, 50.4292, 1.2499, 1.2499);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#E1D16F")
      .s()
      .p("AAPA5QgfgLgVgcQgVgcAKgcQAIgZAWACQASABANARQAKAMAJAZQAFAOALAZQAHATgEAGQgDAFgJAAQgJAAgPgGg");
    this.shape_66.setTransform(37.076, 27.7756, 1.2498, 1.2498);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#C6C05C")
      .s()
      .p("AAKA3QgfgQgRgdQgRgeAOgZQAMgXAXAGQASAEALASQAIANAFAZQADANAHAaQAFAUgFAFQgDADgFAAQgKAAgSgKg");
    this.shape_67.setTransform(38.5714, 27.323, 1.2498, 1.2498);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#F5F1E8")
      .s()
      .p("AgUAgQhWgxg9g6Qg3g0ANgHQAJgFA8AqICMBlQBCAvBSAvIBAAlQhsgeh8hJg");
    this.shape_68.setTransform(63.7404, 41.6303, 1.2499, 1.2499);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#E1D16F")
      .s()
      .p("AgpAyQgjgYADgoQACgmAbgLQAWgKAVANQAOAKATAaIAeAoQAPAUgDALQgEAQgmAEIgPABQgfAAgbgSg");
    this.shape_69.setTransform(25.0005, 49.4096, 1.2498, 1.2498);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#C6C05C")
      .s()
      .p("AAYBIQgpgBgdgcQgegdAIgnQAIglAcgHQAYgGARAQQAOAMAOAcQAIARARAcQAMAWgFAKQgHAOghAAIgFAAg");
    this.shape_70.setTransform(26.6628, 47.5577, 1.2498, 1.2498);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#E5D4B6")
      .s()
      .p("AgHAlQhjgQhNgfQhGgdAKgMQAGgIBHASICnAtQBOAUBdAPIBKAMQghADgkAAQhVAAhjgRg");
    this.shape_71.setTransform(55.1688, 55.6225, 1.2499, 1.2499);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#E1D16F")
      .s()
      .p("AglA4QgYgiAEgnQAFgpAmgSQAigQAVATQAUAPgCAYQgBATgPAbIgVAvQgLAWgLACIgDABQgPAAgTgcg");
    this.shape_72.setTransform(76.5867, 69.0302, 1.2498, 1.2498);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#9AB14E")
      .s()
      .p("AgwAyQgTgmAKgmQAMgoAngLQAkgLATAVQARASgGAYQgEASgSAZIgdArQgNAVgLAAIgBAAQgQAAgQggg");
    this.shape_73.setTransform(79.4534, 69.8928, 1.2498, 1.2498);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#EDD787")
      .s()
      .p("AAmCxQgohPgehZQgghdgIhTQgHhLAOADQALABARBIIAmCoQATBPAfBZIAYBGIAAAAQgFAAggg/g");
    this.shape_74.setTransform(85.6264, 98.1439, 1.2499, 1.2499);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#E1D16F")
      .s()
      .p("AgRAnQgkgFgNgaQgMgXAQgOQAPgMAUACQAQABAYALIAnARQATAIABAGQADALgcAOQgXAMgZAAIgQgCg");
    this.shape_75.setTransform(70.4627, 58.3691, 1.2498, 1.2498);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#C6C05C")
      .s()
      .p("AgZAnQgigJgIgcQgIgYAUgMQAQgLAUAFQAQADAUAOQAMAIAYANQASAJgBAHQABALgeALQgTAGgUAAQgNAAgOgDg");
    this.shape_76.setTransform(71.3023, 56.4836, 1.2498, 1.2498);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#F5F1E8")
      .s()
      .p("AjzAzQACgKBJgNICqgdQBQgPBbgaIBHgUQhhA4iLAmQhfAbhUADIgaABQgxAAADgMg");
    this.shape_77.setTransform(98.5393, 49.5858, 1.2499, 1.2499);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#E2CF45")
      .s()
      .p("AADAtQgMgGgQgRIgagbQgNgOADgIQADgMAfgGQAigHAcAOQAdAPgBAdQgCAcgWAKQgKAFgJAAQgJAAgIgEg");
    this.shape_78.setTransform(127.0583, 72.8355, 1.2498, 1.2498);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#A3B661")
      .s()
      .p("AgFAtQgMgIgNgUIgVgeQgKgPAEgIQAFgMAggCQAigCAZARQAaATgHAdQgGAcgXAHQgIADgHAAQgLAAgIgGg");
    this.shape_79.setTransform(125.686, 74.4176, 1.2498, 1.2498);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#E4D3B5")
      .s()
      .p("ACpAiQhogWhBgMQhPgQhegJIhKgIQgDgEBMgDQBagEBbAKQBjAKBPAbQBHAYgJAMQgCAEgNAAQgTAAgsgJg");
    this.shape_80.setTransform(96.0758, 71.0971, 1.2499, 1.2499);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#E1D16F")
      .s()
      .p("AAYBIQgpgBgdgcQgegeAJgnQAJglAcgHQAXgGARARQAOAMAOAdQAIARAQAbQAMAWgFAKQgHAOghAAIgFAAg");
    this.shape_81.setTransform(59.0859, 75.9308, 1.2498, 1.2498);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#9AB14E")
      .s()
      .p("AARBKQgpgIgYggQgagiAPglQAOgkAdgCQAXgCAQATQALAOAKAeIARAwQAIAYgGAJQgGAJgTAAQgJAAgMgCg");
    this.shape_82.setTransform(60.8931, 74.561, 1.2498, 1.2498);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#F5F1E8")
      .s()
      .p("AgNAkQhfgfhHgsQhAgoALgJQAIgHBDAdICeBHQBJAhBaAdIBHAYQhwgIiIgvg");
    this.shape_83.setTransform(88.2216, 86.7908, 1.2499, 1.2499);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#E1D16F")
      .s()
      .p("AgoA1QgIgQAHgUQAFgPARgUIAYgiQANgRAIABQALAAAGAfQAHAhgNAfQgNAigcAGIgLACQgSAAgHgQg");
    this.shape_84.setTransform(68.9592, 99.0441, 1.2498, 1.2498);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#C6C05C")
      .s()
      .p("AgtAtQgGgTAKgSQAHgNASgSIAcgdQAPgPAHACQALADACAfQADAigRAeQgRAggbABIgCAAQgZAAgHgVg");
    this.shape_85.setTransform(67.4639, 97.9175, 1.2498, 1.2498);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#F5F1E8")
      .s()
      .p("AgSD6QgJgFAFhJQAJhqAEhDQAGhQgDheIgChLQAEgDAMBLQAPBYACBcQACBjgRBTQgNBDgNAAIgCgBg");
    this.shape_86.setTransform(68.8383, 69.573, 1.2499, 1.2499);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#E1D16F")
      .s()
      .p("AglBMQgUgOAAgYQABgTAMgcIATgvQAKgYALgDQAOgEAYAdQAaAhgCAnQgDAqgkATQgRAJgOAAQgOAAgLgIg");
    this.shape_87.setTransform(94.8792, 98.1275, 1.2498, 1.2498);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#C6C05C")
      .s()
      .p("AgtBGQgRgQAEgYQACgTARgaQALgPAPgdQANgWAKgBQAQgCAUAhQAUAkgIAmQgJApgmAOQgNAFgMAAQgSAAgNgNg");
    this.shape_88.setTransform(91.96, 97.4218, 1.2498, 1.2498);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#E5D4B6")
      .s()
      .p("ABQDsQgKgBgWhHQgdhmgThAQgXhNgkhXIgchFQACgEAmBBQAuBNAiBWQAlBbANBTQALBJgNAAIgBAAg");
    this.shape_89.setTransform(84.0238, 69.6211, 1.2499, 1.2499);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#E2CF45")
      .s()
      .p("Ag6AqQgHgKAOgdQAPgfAcgNQAdgOAXATQAWASgGAXQgEAUgRAJQgNAHgYACIglAEIgHABQgMAAgEgGg");
    this.shape_90.setTransform(83.7413, 40.9754, 1.2498, 1.2498);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#A3B661")
      .s()
      .p("AAAAtIgmgCQgTgBgDgIQgGgMARgZQAUgeAdgJQAdgJAUAYQATAWgIAWQgHATgSAGQgIADgOAAIgNAAg");
    this.shape_91.setTransform(83.8421, 43.0218, 1.2498, 1.2498);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#F8EEC3")
      .s()
      .p("AiyCwQgGAAAsg+QAzhJBAhDQBEhIBGguQA/gqAEAOQADAKg3AxQhRBFgxAsQg9A1hABFIgzA2IAAAAg");
    this.shape_92.setTransform(63.9014, 65.7597, 1.2499, 1.2499);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#E1D16F")
      .s()
      .p("AgtBKQgQgEgFglQgGgpAXghQAYgjAoADQAmABALAbQAKAWgNAVQgKAPgaASIgoAgQgQAMgKAAIgEgBg");
    this.shape_93.setTransform(35.6411, 82.4006, 1.2498, 1.2498);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#9AB14E")
      .s()
      .p("Ag4BFQgPgGAAgmQABgpAbgdQAdgfAnAIQAmAIAHAcQAGAXgQASQgLAOgdAPIgsAYQgQAJgJAAQgEAAgDgCg");
    this.shape_94.setTransform(37.4905, 84.0137, 1.2498, 1.2498);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#F5F1E8")
      .s()
      .p("AgkgHQAQhjAehNQAdhGALAJQAJAGgSBIIgsCnQgTBOgPBeIgLBJQgLhvAXiOg");
    this.shape_95.setTransform(29.6758, 112.5926, 1.2499, 1.2499);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#E1D16F")
      .s()
      .p("AAcA0QghgBgcgUQgdgVAAgcQAAgbAWgFQASgEASALQAMAJARAVIAaAgQAOAQgDAHQgCAKgbAAIgFAAg");
    this.shape_96.setTransform(39.304, 84.0143, 1.2498, 1.2498);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#C6C05C")
      .s()
      .p("AAWA1QgigFgZgXQgagYAFgbQAGgaAXgCQATgBAPANQAMAKANAWQAHAMAPAWQAKASgEAGQgDAHgPAAIgSgCg");
    this.shape_97.setTransform(40.6023, 82.9956, 1.2498, 1.2498);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#F5F1E8")
      .s()
      .p("AgJAmQhigVhMgjQhEggAKgLQAHgIBGAWIClA0QBNAYBcAUIBJAPIgdABQhlAAh6gbg");
    this.shape_98.setTransform(68.5652, 89.1617, 1.2499, 1.2499);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#E1D16F")
      .s()
      .p("AhFAbQgXgeANgZQAKgWAZgEQASgDAeAIQASAFAgAGQAZAFAEAKQAHAPgZAbQgcAfgnAFIgKAAQgiAAgXgcg");
    this.shape_99.setTransform(29.1817, 144.4662, 1.2498, 1.2498);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#C6C05C")
      .s()
      .p("AgMA5QgqgBgUgkQgSghAQgXQAOgUAYAAQASAAAeALIAvATQAYAIADALQAFAPgdAYQgfAZgkAAIgFAAg");
    this.shape_100.setTransform(29.4976, 141.4286, 1.2498, 1.2498);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#F5F1E8")
      .s()
      .p("AjaB3QAAgKBCghICbhMQBIgjBQgyIBAgnQhOBRh7BKQhUA1hQAaQgsAPgRAAQgLAAAAgGg");
    this.shape_101.setTransform(55.5837, 128.3041, 1.2499, 1.2499);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#E2CF45")
      .s()
      .p("AATAuQgPgCgTgMIghgTQgRgJAAgHQAAgNAcgPQAfgRAeAEQAgAGAIAdQAHAbgSAQQgNAMgRAAIgEAAg");
    this.shape_102.setTransform(87.3172, 103.0734, 1.2498, 1.2498);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f("#A3B661")
      .s()
      .p("AAKAvQgMgEgSgPIgdgYQgPgKACgJQABgNAegLQAggNAdAJQAeAKADAfQACAcgUAOQgLAIgNAAIgLgBg");
    this.shape_103.setTransform(86.3443, 105.2076, 1.2498, 1.2498);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#E4D3B5")
      .s()
      .p("Aj2AwQgEgEBHgZQBUgeBbgSQBhgUBUACQBLADgFAOQgDAKhJAIIisAQQhQAJhcAUIhJAPIAAAAg");
    this.shape_104.setTransform(57.5928, 110.4286, 1.2499, 1.2499);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#E1D16F")
      .s()
      .p("AAABHQgkgVgNgmQgNgnAbgfQAYgeAbAIQAYAFAIAXQAHARgBAgIAAAzQAAAZgJAGQgFAEgHAAQgNAAgUgMg");
    this.shape_105.setTransform(19.6911, 95.3671, 1.2498, 1.2498);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#9AB14E")
      .s()
      .p("AgNBDQghgagHgoQgGgoAegbQAdgZAaALQAWAJAFAYQAEASgFAfQgEASgEAhQgEAYgKAFQgEACgFAAQgNAAgVgRg");
    this.shape_106.setTransform(22.629, 95.1887, 1.2498, 1.2498);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#F5F1E8")
      .s()
      .p("AgbAYQhEhGgrhJQgnhBAPgDQAKgDAuA5IBqCJQAyA/BCBEIAzA1Qhfg7hjhpg");
    this.shape_107.setTransform(41.6184, 118.1226, 1.2499, 1.2499);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#E1D16F")
      .s()
      .p("AgiA1QgagHABgWQAAgTAPgNQAMgLAYgLIAmgSQATgIAGAEQAKAFgIAeQgKAggaAWQgVASgVAAQgHAAgGgCg");
    this.shape_108.setTransform(19.0249, 120.4487, 1.2498, 1.2498);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f("#C6C05C")
      .s()
      .p("AgqAuQgXgLAEgXQADgSARgMQANgJAYgHQAOgEAZgJQATgGAFAFQAJAIgNAdQgOAfgcATQgSAMgRAAQgKAAgKgFg");
    this.shape_109.setTransform(18.4306, 118.9767, 1.2498, 1.2498);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#F5F1E8")
      .s()
      .p(
        "Ah4DaQgGgIAng/IBciTQAqhDAphWIAihCQgYBuhBCAQgrBZg2BBQgnAvgNAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg",
      );
    this.shape_110.setTransform(31.1604, 93.0225, 1.2499, 1.2499);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#E1D16F")
      .s()
      .p("Ag9AzQgLgWAMgWQAJgPAZgUIAmghQATgQALACQAQADAHAlQAIApgVAiQgVAkgpAAQgmAAgNgZg");
    this.shape_111.setTransform(41.5141, 131.0607, 1.2498, 1.2498);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#C6C05C")
      .s()
      .p("AgUBHQgmgFgJgcQgIgXAPgSQALgPAcgQIAqgbQAWgNAKAEQAQAGABAlQACApgaAfQgWAbggAAIgMgBg");
    this.shape_112.setTransform(39.4864, 129.4898, 1.2498, 1.2498);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f("#E5D4B6")
      .s()
      .p("AglD4QgJgGAOhIQAWhpALhBQAPhPAJheIAIhKQAEgEADBMQAEBagJBbQgKBjgaBQQgVBAgMAAIgDgBg");
    this.shape_113.setTransform(46.0012, 100.7114, 1.2499, 1.2499);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#E2CF45")
      .s()
      .p("AgLAkIgkgOQgRgHgBgIQgCgMAagTQAcgVAfABQAgACAMAcQAKAZgQASQgNAQgTAAQgOAAgVgJg");
    this.shape_114.setTransform(58.4659, 75.8365, 1.2498, 1.2498);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f("#A3B661")
      .s()
      .p("AARAuQgOgCgTgMIgggUQgQgKABgHQAAgNAcgPQAegRAdAFQAgAHAHAeQAGAbgSAQQgNAMgOAAIgHgBg");
    this.shape_115.setTransform(57.6827, 78.1622, 1.2498, 1.2498);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#F8EEC3")
      .s()
      .p("AjvBMQgEgDBDgjQBQgnBYgeQBcghBUgIQBLgIgDAPQgBAKhIASIioAmQhPAThZAfIhGAZIAAAAg");
    this.shape_116.setTransform(30.0167, 87.694, 1.2499, 1.2499);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#E1D16F")
      .s()
      .p("AgNA6QgqgDgTgkQgSghARgXQANgUAZAAQASABAdAMIAvATQAYAJADALQAEAOgdAYQgfAZgkAAIgFAAg");
    this.shape_117.setTransform(62.4307, 70.2516, 1.2498, 1.2498);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#9AB14E")
      .s()
      .p("AgWA6QgpgJgOgmQgNgjAUgVQARgRAYAEQASADAaAQIAtAaQAWAMABAKQACARggATQgbAPgbAAQgKAAgLgCg");
    this.shape_118.setTransform(63.124, 67.336, 1.2498, 1.2498);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f("#F5F1E8")
      .s()
      .p("AjqBSQABgKBGgWICmgyQBMgXBXglIBFgdQhZBEiGA2QhbAmhTAOQghAFgTAAQgVAAABgIg");
    this.shape_119.setTransform(90.8901, 59.101, 1.2499, 1.2499);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f("#E1D16F")
      .s()
      .p("AgaBAQgNgNAAgVQABgQAJgYIAOgoQAHgUAHgBQAKgDAQAaQARAegDAiQgCAkgZAOQgLAHgIAAQgLAAgIgJg");
    this.shape_120.setTransform(47.5478, 85.2585, 1.2498, 1.2498);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#C6C05C")
      .s()
      .p("AggA7QgLgQADgVQACgOAMgXQAIgMALgZQAIgSAIAAQALgBAMAdQAOAhgHAgQgHAjgaAKQgHADgHAAQgPAAgJgMg");
    this.shape_121.setTransform(45.6102, 84.5177, 1.2498, 1.2498);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#F5F1E8")
      .s()
      .p("ABEDwQgKgCgShHQgYhogQhBQgThOgghZIgZhGQADgEAjBDQAoBPAfBYQAhBdAJBTQAHBJgNAAIgBAAg");
    this.shape_122.setTransform(36.6695, 57.8744, 1.2499, 1.2499);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#E1D16F")
      .s()
      .p("AgVA7QgMgOgKgeIgRgvQgIgYAGgJQAJgOAlAGQApAIAYAgQAaAhgPAlQgNAkgdACIgGABQgTAAgOgRg");
    this.shape_123.setTransform(103.6732, 63.606, 1.2498, 1.2498);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#C6C05C")
      .s()
      .p("AADBPQgXgBgNgVQgKgPgFggIgKgxQgFgZAIgIQALgNAkANQAnANATAjQAUAkgUAkQgRAfgbAAIgDAAg");
    this.shape_124.setTransform(101.6508, 64.6214, 1.2498, 1.2498);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#F5F1E8")
      .s()
      .p("ACSBaQhZg6g5gjQhEgrhVgqIhCghQgBgFBIAYQBVAcBSAqQBZAsBAA2QA6AwgNAIIgDABQgOAAg2ghg");
    this.shape_125.setTransform(76.0645, 48.7595, 1.2499, 1.2499);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#E2CF45")
      .s()
      .p("AgXA/QgMgDgIgeQgJghAMgdQANgeAdgBQAcAAAMAVQAKASgHASQgFAMgRARIgYAdQgLAMgIAAIgDgBg");
    this.shape_126.setTransform(58.1026, 27.9243, 1.2498, 1.2498);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f("#A3B661")
      .s()
      .p("AggA8QgMgFgEgfQgFgiAQgaQARgbAeAEQAcAEAJAXQAIATgKAQQgHAMgTAOIgcAXQgMAIgHAAIgEAAg");
    this.shape_127.setTransform(59.8189, 29.2008, 1.2498, 1.2498);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#E4D3B5")
      .s()
      .p("AgZCyQgJhZAEhcQAEhkAWhRQAThIANAIQAJAFgKBJIgYCrQgKBRgDBdIgCBLIAAAAQgFAAgIhIg");
    this.shape_128.setTransform(57.877, 58.8757, 1.2499, 1.2499);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics
      .f("#E1D16F")
      .s()
      .p("AgVBHQgmgGgIgcQgIgXAPgSQAMgPAbgQQARgIAagSQAWgNAKAEQAPAGABAmQACApgaAeQgXAbgfAAIgNgBg");
    this.shape_129.setTransform(65.6564, 95.293, 1.2498, 1.2498);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics
      .f("#9AB14E")
      .s()
      .p("AggBAQglgMgEgdQgEgXASgQQANgNAegMQARgFAdgPQAYgJAJAGQAPAIgFAlQgFApgeAaQgWATgZAAQgLAAgMgDg");
    this.shape_130.setTransform(64.1091, 93.5445, 1.2498, 1.2498);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#F5F1E8")
      .s()
      .p("AhJDuQgIgHAZhFQAnhjAVg/QAchMAXhbIAThIQAFgCgIBLQgLBZgYBZQgZBggnBKQgeA6gMAAIgDgCg");
    this.shape_131.setTransform(74.7036, 65.6913, 1.2499, 1.2499);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f("#E1D16F")
      .s()
      .p("AAUAqQgPgFgVgPIgkgWQgRgLAAgIQAAgLAdgJQAhgJAgALQAjALAIAbQAIAagUALQgKAGgLAAQgHAAgIgCg");
    this.shape_132.setTransform(88.0738, 83.9895, 1.2498, 1.2498);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics
      .f("#C6C05C")
      .s()
      .p("AALAqQgOgHgSgRIgfgZQgQgOACgHQACgLAfgFQAigFAfAOQAgAQADAbQADAagWAJQgIADgJAAQgKAAgKgEg");
    this.shape_133.setTransform(86.9999, 85.6161, 1.2498, 1.2498);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics
      .f("#F5F1E8")
      .s()
      .p("Aj5AbQgDgEBJgRQBXgUBcgIQBjgJBTAMQBKALgGAMQgEAKhJAAQhrgChCAAQhRgBheAJIhKAHIAAAAg");
    this.shape_134.setTransform(58.7917, 85.9581, 1.2499, 1.2499);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics
      .f("#E1D16F")
      .s()
      .p("AgHAvIgwgQQgYgIgEgKQgFgPAcgZQAfgcAngBQAqAAAVAjQAVAfgQAZQgMAVgZABIgDAAQgSAAgbgKg");
    this.shape_135.setTransform(85.5715, 58.0659, 1.2498, 1.2498);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics
      .f("#C6C05C")
      .s()
      .p("AAhA7QgSgCgbgPIgugXQgXgLgBgKQgDgQAfgVQAjgYAmAGQAqAGAQAmQAPAigTAWQgOAQgUAAIgGAAg");
    this.shape_136.setTransform(85.0142, 61.045, 1.2498, 1.2498);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics
      .f("#E5D4B6")
      .s()
      .p("AirA6QBKgyBUgnQBZgsBRgSQBKgRgBAPQgBALhEAaQhlAjg+AXQhMAdhUAqIhDAgQgEgDA+gqg");
    this.shape_137.setTransform(57.8204, 71.0957, 1.2499, 1.2499);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics
      .f("#E2CF45")
      .s()
      .p("AAGA1QgggOgPgbQgQgcASgYQAQgXAXAEQAVADAKAQQAIANADAXQABANAGAYQADASgHAGQgEADgHAAQgKAAgSgHg");
    this.shape_138.setTransform(29.3077, 73.034, 1.2498, 1.2498);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics
      .f("#A3B661")
      .s()
      .p("AAAAzQgegSgLgcQgLgdAWgWQAVgUAWAHQAUAGAIARQAFANAAAXIAAAlQAAATgIAEQgDACgFAAQgLAAgTgLg");
    this.shape_139.setTransform(31.1485, 72.7658, 1.2498, 1.2498);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics
      .f("#F8EEC3")
      .s()
      .p("AgYAbQhNg+gzhDQgtg8AOgFQAJgEA1A0IB5B7QA5A4BJA8IA5AwQhlgwhuhdg");
    this.shape_140.setTransform(55.2533, 91.2993, 1.2499, 1.2499);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.mais, new cjs.Rectangle(0, 0, 141.8, 153.8), null);

  (lib.Path_14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AGVC/QhrgLg1grQgRgOgVgZQgaghgHgHQgggglWANQiyAHjuAPQgnACghgTQgfgSgGgZQgHgaAagWQAggYBFgIQBXgLFdAaQErAWAkgcQANgKAhghQAcgcAWgOQBGgtCCAJQCOAJBEA/QA5AzgBBPQgCBkhiAxQhFAiheAAQgdAAgfgDg",
      );
    this.shape.setTransform(72.7777, 19.389);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0, 0, 145.6, 38.8), null);

  (lib.Path_13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "Ai3OOQgVgtgChcQgFikA0mnQAajTAbiyQg/gEgShhQgUhmAejEQApkMBNhLQgJAvg4GwQgJA/AOAcQANAbAOg8QAKgpAhi9QAhi3AHgcQAKgtATgTQATgTgFAwIgfDdIgeDUQgGAnAGAQQAHARAKgaQAJgWAbh6IAyjkQAXhnAOgWQANgUgEA0QgFBAgxF9QgFArANAJQANAKAFgoQAOh7AqjMQAtjTAJAhQAKAigTD/QgSEAgUBbQgQBNg8ALQgSADgVgDIgRgFQgPBZgoGWQgoGSgFBrQgCA0gUAmQgTAkgYAEIgFABQgWAAgQgkg",
      );
    this.shape.setTransform(20.7535, 95.0186);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0, 0.5, 41.5, 189.1), null);

  (lib.Path_12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AlnSpQjag0i4iRQiuiKh4jKQh1jJgsjmQgtjrAojmQAqjqB3jLQB3jKCyiLQC6iREBgrQDmgmEGAwQDxArDcCKQDbCJCXDLQCeDTA2DzQA6EEhIEGQhwGZlZECQihB5i9BAQi+BCjDAAQg1AEg1AAQiIAAh+geg",
      );
    this.shape.setTransform(124.0846, 122.3032);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0, 0, 248.2, 244.7), null);

  (lib.Path_11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AB1Q4QghhpgukvQgjjkgdj/QiXkLgQlUIgBg4QAAg2ACgqIAAgDQAIizApiUQBFj8AzBHQA6BRAVH2QAFBhAFBGIAFBDIAcFMIA0IMQAfE9ANCjQACATgkAFIgNABQgaAAgFgRg",
      );
    this.shape.setTransform(19.5302, 109.6677);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0, 0, 39.1, 219.4), null);

  (lib.Path_10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AkmEnQh7h6AAitQAAisB7h6QB6h7CsAAQAiAAAqAHQAqAGAeAJID2EBQAXBCABBIQgBAigFAiIlEFUQgpAKgvAAQisAAh6h7g",
      );
    this.shape.setTransform(41.75, 41.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0, 0, 83.5, 83.5), null);

  (lib.Path_9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AjjEYQh0hfgQiVQgPiUBfh0QBeh0CVgPQAegDAjACQAlACAbAFIDqDHQAaA4AHA+QADAggCAbIj5FBQgmAMglADQgVADgTAAQh8AAhkhSg",
      );
    this.shape.setTransform(36.1123, 36.1592);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0, 0, 72.3, 72.3), null);

  (lib.Path_8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
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
      .p(
        "AimEWQhyhGggiCQggiBBFhzQBFhzCCggQAagGAhgDQAfgDAZACIDpCTQAeAuANA2QAGAYADAdIi1E6QgeAQgjAIQgpAKgnAAQhWAAhOgvg",
      );
    this.shape.setTransform(32.2931, 32.5278);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0, 0, 64.7, 65.1), null);

  (lib.Path_5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C4DFF2")
      .s()
      .p("AlWAJQAdivCPhaQB+hKCUAYQCTAXBiBrQhLA/h6AcQiPAYhFAPQhxAcg2BuQgxBjAQB6Qhvh/Adixg");
    this.shape.setTransform(34.8757, 31.3061);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0, 0, 69.8, 62.6), null);

  (lib.Path_3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#592A0F")
      .s()
      .p(
        "AjAEYQhDgdgyg1QAyAvA+AZQBBAbBHAAQCTAABqhpQBphqAAiTQAAhHgbhBQgZg+gvgyQA1AyAdBDQAeBEAABMQAACThpBqQhqBpiTAAQhMAAhEgeg",
      );
    this.shape.setTransform(30.975, 30.975);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0, 0, 62, 62), null);

  (lib.Path_2_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#A8ACAD")
      .s()
      .p(
        "AhPCsQAOgEADgJIB6kfQAEgLgHgLQgHgMgPgGQgFgDgFAAQAOgDAPAGQAOAGAIAMQAHALgFALIh5EfQgDAIgLAEQgGACgGAAIgKgBg",
      );
    this.shape.setTransform(7.988, 17.3021);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0, 0, 16, 34.6), null);

  (lib.Path_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#4596CF")
      .s()
      .p(
        "AlLB/QgZhxAnhlQAahCBKhKQBNg+BVgQQBZgSBYAkQBOAaAzAmQA/AvAcBFIgQgSQgMgMgMAAIgUAAQgmAtgUAPQgiAagmgaQAegtAAgtQiJggh7AyQiJA2gqB/QgXBGAJBKQAKBOAsA6QhXhBgbh4g",
      );
    this.shape.setTransform(34.1709, 31.2278);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0, 0, 68.4, 62.5), null);

  (lib.Path_1_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#592A0F")
      .s()
      .p(
        "Ag2DVQhbgfglhTQglhUAthRQAUgoAKgKQBfhHAggRQBMgmBCAaIgBAOQgDAGgGAAQhEAlgeAYQgzAqAAA5QAsgUA2ARQARAGBKAkQAyAdgGA9QgHA6gvAgQhDAtg/AAQgjAAgigPg",
      );
    this.shape.setTransform(19.9222, 22.8148);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0, 0.1, 39.9, 45.5), null);

  (lib.Path_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#52454D")
      .s()
      .p(
        "AgfBWQgygrALhAQAKg/A2gWQAdgMAfACQAEABgUANQgcASgHAPQgKAYADAWQADAeAdAXQAkAaAHAdQAIAdgfADIgHAAQgjAAglgfg",
      );
    this.shape.setTransform(7.3069, 11.7203);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, 0, 14.6, 23.5), null);

  (lib.Path = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D6C5D0")
      .s()
      .p(
        "AgXBvQAWgNAKgNQAKgNAIgYQAUg9gvg3QgVgWgsgWIAEgBQAkgKAnAcQAyAhACBCQAAA/gqAeQgYASgbACIAAAAQgDAAAHgGg",
      );
    this.shape.setTransform(6.5503, 11.6298);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 13.1, 23.3), null);

  (lib.Group_1_0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#F5D779")
      .s()
      .p(
        "AkcCCQgth4A0h8QAjhWBLg2QBGgyBagKQBYgLBSAgQBXAhA4BJQhOglhZAMIiYAkQhaApg3A8QhGBMATBSQgLBKAfA7QAOAaBABMQh/hCguh6g",
      );
    this.shape.setTransform(30.4812, 31.7688);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(-0.1, 0, 61.2, 63.6), null);

  (lib.Group_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#BB8030")
      .s()
      .p("ACWgiQhsiIigAWQhBgBg1AoQgzAlgVA5QANiMCAg7QBtgxCKAYQCSAyA6CXQA8CYhTCGQgViqhahwg");
    this.shape.setTransform(30.9172, 24.7194);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 61.9, 49.5), null);

  (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      "A23VGQhigGhohCQhlhBhPhnQhShtgjh6QgmiGAah/Qh2gdh5hjQh7hjhjiXQjilWgFmiQgCitBwihQBmiTC2h1QCrhvDNg9QDMg9C2AEQBDgGA6AFQBuAKBzBIQBxBIBaByQA4A3A2BGQDPhxDng3QDog4DFARQEcAZEUEAQEXECByFfQBVguBegeQBegfBbgLQgMg2gFg9QhVAOhhgHQhtgHhkiKQhriVgCi8QgCiUCzhtQBMgvBZgYQBZgYBNAHQBjAIBgBZQBhBYApB6QBtg3B3gaQB3gaBmAIQBxAKB0BQQBzBQBUB7QBYCCAdCOQAfCdgwCPQgUBZhQBhQiiDCkwAqQA3DFg8C1QgHAggXAwQguBghQBNQj+D3nqgfQhbgFhkhJQhkhIhRh4QiwDTkUByQlnCVn2gfQiUgKighxQhlCEi9BSQijBGiSAAIgmgBg",
    );
    mask.setTransform(424.4463, 204.8476);

    // Calque_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape.setTransform(792.375, 389.125);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_1.setTransform(763.55, 389.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_2.setTransform(734.725, 389.125);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_3.setTransform(705.9, 389.125);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_4.setTransform(677.075, 389.125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_5.setTransform(648.25, 389.125);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_6.setTransform(619.45, 389.125);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_7.setTransform(590.625, 389.125);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_8.setTransform(561.8, 389.125);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_9.setTransform(532.975, 389.125);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_10.setTransform(504.15, 389.125);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_11.setTransform(475.325, 389.125);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_12.setTransform(446.5, 389.125);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_13.setTransform(417.675, 389.125);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_14.setTransform(792.375, 360.3);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_15.setTransform(763.55, 360.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_16.setTransform(734.725, 360.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_17.setTransform(705.9, 360.3);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_18.setTransform(677.075, 360.3);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_19.setTransform(648.25, 360.3);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_20.setTransform(619.45, 360.3);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_21.setTransform(590.625, 360.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_22.setTransform(561.8, 360.3);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_23.setTransform(532.975, 360.3);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_24.setTransform(504.15, 360.3);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_25.setTransform(475.325, 360.3);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_26.setTransform(446.5, 360.3);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_27.setTransform(417.675, 360.3);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_28.setTransform(792.375, 331.475);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_29.setTransform(763.55, 331.475);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_30.setTransform(734.725, 331.475);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_31.setTransform(705.9, 331.475);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_32.setTransform(677.075, 331.475);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_33.setTransform(648.25, 331.475);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_34.setTransform(619.45, 331.475);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_35.setTransform(590.625, 331.475);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_36.setTransform(561.8, 331.475);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_37.setTransform(532.975, 331.475);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_38.setTransform(504.15, 331.475);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_39.setTransform(475.325, 331.475);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_40.setTransform(446.5, 331.475);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_41.setTransform(417.675, 331.475);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_42.setTransform(792.375, 302.65);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_43.setTransform(763.55, 302.65);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_44.setTransform(734.725, 302.65);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_45.setTransform(705.9, 302.65);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_46.setTransform(677.075, 302.65);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_47.setTransform(648.25, 302.65);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_48.setTransform(619.45, 302.65);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_49.setTransform(590.625, 302.65);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_50.setTransform(561.8, 302.65);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_51.setTransform(532.975, 302.65);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_52.setTransform(504.15, 302.65);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_53.setTransform(475.325, 302.65);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_54.setTransform(446.5, 302.65);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_55.setTransform(417.675, 302.65);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_56.setTransform(792.375, 273.825);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_57.setTransform(763.55, 273.825);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_58.setTransform(734.725, 273.825);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_59.setTransform(705.9, 273.825);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_60.setTransform(677.075, 273.825);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_61.setTransform(648.25, 273.825);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_62.setTransform(619.45, 273.825);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_63.setTransform(590.625, 273.825);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_64.setTransform(561.8, 273.825);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_65.setTransform(532.975, 273.825);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_66.setTransform(504.15, 273.825);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_67.setTransform(475.325, 273.825);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_68.setTransform(446.5, 273.825);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_69.setTransform(417.675, 273.825);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_70.setTransform(792.375, 245);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_71.setTransform(763.55, 245);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_72.setTransform(734.725, 245);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_73.setTransform(705.9, 245);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_74.setTransform(677.075, 245);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_75.setTransform(648.25, 245);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_76.setTransform(619.45, 245);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_77.setTransform(590.625, 245);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_78.setTransform(561.8, 245);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_79.setTransform(532.975, 245);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_80.setTransform(504.15, 245);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_81.setTransform(475.325, 245);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_82.setTransform(446.5, 245);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_83.setTransform(417.675, 245);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_84.setTransform(792.375, 216.175);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_85.setTransform(763.55, 216.175);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_86.setTransform(734.725, 216.175);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_87.setTransform(705.9, 216.175);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_88.setTransform(677.075, 216.175);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_89.setTransform(648.25, 216.175);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_90.setTransform(619.45, 216.175);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_91.setTransform(590.625, 216.175);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_92.setTransform(561.8, 216.175);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_93.setTransform(532.975, 216.175);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_94.setTransform(504.15, 216.175);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_95.setTransform(475.325, 216.175);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_96.setTransform(446.5, 216.175);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_97.setTransform(417.675, 216.175);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_98.setTransform(792.375, 187.35);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_99.setTransform(763.55, 187.35);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_100.setTransform(734.725, 187.35);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_101.setTransform(705.9, 187.35);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_102.setTransform(677.075, 187.35);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_103.setTransform(648.25, 187.35);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_104.setTransform(619.45, 187.35);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_105.setTransform(590.625, 187.35);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_106.setTransform(561.8, 187.35);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_107.setTransform(532.975, 187.35);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_108.setTransform(504.15, 187.35);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_109.setTransform(475.325, 187.35);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_110.setTransform(446.5, 187.35);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_111.setTransform(417.675, 187.35);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_112.setTransform(792.375, 158.525);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_113.setTransform(763.55, 158.525);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_114.setTransform(734.725, 158.525);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_115.setTransform(705.9, 158.525);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_116.setTransform(677.075, 158.525);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_117.setTransform(648.25, 158.525);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_118.setTransform(619.45, 158.525);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_119.setTransform(590.625, 158.525);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_120.setTransform(561.8, 158.525);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_121.setTransform(532.975, 158.525);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_122.setTransform(504.15, 158.525);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_123.setTransform(475.325, 158.525);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_124.setTransform(446.5, 158.525);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_125.setTransform(417.675, 158.525);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_126.setTransform(792.375, 129.7);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_127.setTransform(763.55, 129.7);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_128.setTransform(734.725, 129.7);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_129.setTransform(705.9, 129.7);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_130.setTransform(677.075, 129.7);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_131.setTransform(648.25, 129.7);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_132.setTransform(619.45, 129.7);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_133.setTransform(590.625, 129.7);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_134.setTransform(561.8, 129.7);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_135.setTransform(532.975, 129.7);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_136.setTransform(504.15, 129.7);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_137.setTransform(475.325, 129.7);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_138.setTransform(446.5, 129.7);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_139.setTransform(417.675, 129.7);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_140.setTransform(792.375, 100.9);

    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_141.setTransform(763.55, 100.9);

    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_142.setTransform(734.725, 100.9);

    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_143.setTransform(705.9, 100.9);

    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_144.setTransform(677.075, 100.9);

    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_145.setTransform(648.25, 100.9);

    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_146.setTransform(619.45, 100.9);

    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_147.setTransform(590.625, 100.9);

    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_148.setTransform(561.8, 100.9);

    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_149.setTransform(532.975, 100.9);

    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_150.setTransform(504.15, 100.9);

    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_151.setTransform(475.325, 100.9);

    this.shape_152 = new cjs.Shape();
    this.shape_152.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_152.setTransform(446.5, 100.9);

    this.shape_153 = new cjs.Shape();
    this.shape_153.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_153.setTransform(417.675, 100.9);

    this.shape_154 = new cjs.Shape();
    this.shape_154.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_154.setTransform(792.375, 72.075);

    this.shape_155 = new cjs.Shape();
    this.shape_155.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_155.setTransform(763.55, 72.075);

    this.shape_156 = new cjs.Shape();
    this.shape_156.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_156.setTransform(734.725, 72.075);

    this.shape_157 = new cjs.Shape();
    this.shape_157.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_157.setTransform(705.9, 72.075);

    this.shape_158 = new cjs.Shape();
    this.shape_158.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_158.setTransform(677.075, 72.075);

    this.shape_159 = new cjs.Shape();
    this.shape_159.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_159.setTransform(648.25, 72.075);

    this.shape_160 = new cjs.Shape();
    this.shape_160.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_160.setTransform(619.45, 72.075);

    this.shape_161 = new cjs.Shape();
    this.shape_161.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_161.setTransform(590.625, 72.075);

    this.shape_162 = new cjs.Shape();
    this.shape_162.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_162.setTransform(561.8, 72.075);

    this.shape_163 = new cjs.Shape();
    this.shape_163.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_163.setTransform(532.975, 72.075);

    this.shape_164 = new cjs.Shape();
    this.shape_164.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_164.setTransform(504.15, 72.075);

    this.shape_165 = new cjs.Shape();
    this.shape_165.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_165.setTransform(475.325, 72.075);

    this.shape_166 = new cjs.Shape();
    this.shape_166.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_166.setTransform(446.5, 72.075);

    this.shape_167 = new cjs.Shape();
    this.shape_167.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_167.setTransform(417.675, 72.075);

    this.shape_168 = new cjs.Shape();
    this.shape_168.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_168.setTransform(792.375, 43.25);

    this.shape_169 = new cjs.Shape();
    this.shape_169.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_169.setTransform(763.55, 43.25);

    this.shape_170 = new cjs.Shape();
    this.shape_170.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_170.setTransform(734.725, 43.25);

    this.shape_171 = new cjs.Shape();
    this.shape_171.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_171.setTransform(705.9, 43.25);

    this.shape_172 = new cjs.Shape();
    this.shape_172.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_172.setTransform(677.075, 43.25);

    this.shape_173 = new cjs.Shape();
    this.shape_173.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_173.setTransform(648.25, 43.25);

    this.shape_174 = new cjs.Shape();
    this.shape_174.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_174.setTransform(619.45, 43.25);

    this.shape_175 = new cjs.Shape();
    this.shape_175.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_175.setTransform(590.625, 43.25);

    this.shape_176 = new cjs.Shape();
    this.shape_176.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_176.setTransform(561.8, 43.25);

    this.shape_177 = new cjs.Shape();
    this.shape_177.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_177.setTransform(532.975, 43.25);

    this.shape_178 = new cjs.Shape();
    this.shape_178.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_178.setTransform(504.15, 43.25);

    this.shape_179 = new cjs.Shape();
    this.shape_179.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_179.setTransform(475.325, 43.25);

    this.shape_180 = new cjs.Shape();
    this.shape_180.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_180.setTransform(446.5, 43.25);

    this.shape_181 = new cjs.Shape();
    this.shape_181.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_181.setTransform(417.675, 43.25);

    this.shape_182 = new cjs.Shape();
    this.shape_182.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_182.setTransform(792.375, 14.425);

    this.shape_183 = new cjs.Shape();
    this.shape_183.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_183.setTransform(763.55, 14.425);

    this.shape_184 = new cjs.Shape();
    this.shape_184.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_184.setTransform(734.725, 14.425);

    this.shape_185 = new cjs.Shape();
    this.shape_185.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_185.setTransform(705.9, 14.425);

    this.shape_186 = new cjs.Shape();
    this.shape_186.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_186.setTransform(677.075, 14.425);

    this.shape_187 = new cjs.Shape();
    this.shape_187.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_187.setTransform(648.25, 14.425);

    this.shape_188 = new cjs.Shape();
    this.shape_188.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_188.setTransform(619.45, 14.425);

    this.shape_189 = new cjs.Shape();
    this.shape_189.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_189.setTransform(590.625, 14.425);

    this.shape_190 = new cjs.Shape();
    this.shape_190.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_190.setTransform(561.8, 14.425);

    this.shape_191 = new cjs.Shape();
    this.shape_191.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_191.setTransform(532.975, 14.425);

    this.shape_192 = new cjs.Shape();
    this.shape_192.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_192.setTransform(504.15, 14.425);

    this.shape_193 = new cjs.Shape();
    this.shape_193.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_193.setTransform(475.325, 14.425);

    this.shape_194 = new cjs.Shape();
    this.shape_194.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_194.setTransform(446.5, 14.425);

    this.shape_195 = new cjs.Shape();
    this.shape_195.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_195.setTransform(417.675, 14.425);

    this.shape_196 = new cjs.Shape();
    this.shape_196.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_196.setTransform(389.075, 389.125);

    this.shape_197 = new cjs.Shape();
    this.shape_197.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_197.setTransform(360.25, 389.125);

    this.shape_198 = new cjs.Shape();
    this.shape_198.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_198.setTransform(331.425, 389.125);

    this.shape_199 = new cjs.Shape();
    this.shape_199.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_199.setTransform(302.6, 389.125);

    this.shape_200 = new cjs.Shape();
    this.shape_200.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_200.setTransform(273.775, 389.125);

    this.shape_201 = new cjs.Shape();
    this.shape_201.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_201.setTransform(244.95, 389.125);

    this.shape_202 = new cjs.Shape();
    this.shape_202.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_202.setTransform(216.125, 389.125);

    this.shape_203 = new cjs.Shape();
    this.shape_203.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_203.setTransform(187.3, 389.125);

    this.shape_204 = new cjs.Shape();
    this.shape_204.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_204.setTransform(158.475, 389.125);

    this.shape_205 = new cjs.Shape();
    this.shape_205.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_205.setTransform(129.65, 389.125);

    this.shape_206 = new cjs.Shape();
    this.shape_206.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_206.setTransform(100.825, 389.125);

    this.shape_207 = new cjs.Shape();
    this.shape_207.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_207.setTransform(72, 389.125);

    this.shape_208 = new cjs.Shape();
    this.shape_208.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_208.setTransform(43.175, 389.125);

    this.shape_209 = new cjs.Shape();
    this.shape_209.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_209.setTransform(14.375, 389.125);

    this.shape_210 = new cjs.Shape();
    this.shape_210.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_210.setTransform(389.075, 360.3);

    this.shape_211 = new cjs.Shape();
    this.shape_211.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_211.setTransform(360.25, 360.3);

    this.shape_212 = new cjs.Shape();
    this.shape_212.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_212.setTransform(331.425, 360.3);

    this.shape_213 = new cjs.Shape();
    this.shape_213.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_213.setTransform(302.6, 360.3);

    this.shape_214 = new cjs.Shape();
    this.shape_214.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_214.setTransform(273.775, 360.3);

    this.shape_215 = new cjs.Shape();
    this.shape_215.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_215.setTransform(244.95, 360.3);

    this.shape_216 = new cjs.Shape();
    this.shape_216.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_216.setTransform(216.125, 360.3);

    this.shape_217 = new cjs.Shape();
    this.shape_217.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_217.setTransform(187.3, 360.3);

    this.shape_218 = new cjs.Shape();
    this.shape_218.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_218.setTransform(158.475, 360.3);

    this.shape_219 = new cjs.Shape();
    this.shape_219.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_219.setTransform(129.65, 360.3);

    this.shape_220 = new cjs.Shape();
    this.shape_220.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_220.setTransform(100.825, 360.3);

    this.shape_221 = new cjs.Shape();
    this.shape_221.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_221.setTransform(72, 360.3);

    this.shape_222 = new cjs.Shape();
    this.shape_222.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_222.setTransform(43.175, 360.3);

    this.shape_223 = new cjs.Shape();
    this.shape_223.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_223.setTransform(14.375, 360.3);

    this.shape_224 = new cjs.Shape();
    this.shape_224.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_224.setTransform(389.075, 331.475);

    this.shape_225 = new cjs.Shape();
    this.shape_225.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_225.setTransform(360.25, 331.475);

    this.shape_226 = new cjs.Shape();
    this.shape_226.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_226.setTransform(331.425, 331.475);

    this.shape_227 = new cjs.Shape();
    this.shape_227.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_227.setTransform(302.6, 331.475);

    this.shape_228 = new cjs.Shape();
    this.shape_228.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_228.setTransform(273.775, 331.475);

    this.shape_229 = new cjs.Shape();
    this.shape_229.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_229.setTransform(244.95, 331.475);

    this.shape_230 = new cjs.Shape();
    this.shape_230.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_230.setTransform(216.125, 331.475);

    this.shape_231 = new cjs.Shape();
    this.shape_231.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_231.setTransform(187.3, 331.475);

    this.shape_232 = new cjs.Shape();
    this.shape_232.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_232.setTransform(158.475, 331.475);

    this.shape_233 = new cjs.Shape();
    this.shape_233.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_233.setTransform(129.65, 331.475);

    this.shape_234 = new cjs.Shape();
    this.shape_234.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_234.setTransform(100.825, 331.475);

    this.shape_235 = new cjs.Shape();
    this.shape_235.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_235.setTransform(72, 331.475);

    this.shape_236 = new cjs.Shape();
    this.shape_236.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_236.setTransform(43.175, 331.475);

    this.shape_237 = new cjs.Shape();
    this.shape_237.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_237.setTransform(14.375, 331.475);

    this.shape_238 = new cjs.Shape();
    this.shape_238.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_238.setTransform(389.075, 302.65);

    this.shape_239 = new cjs.Shape();
    this.shape_239.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_239.setTransform(360.25, 302.65);

    this.shape_240 = new cjs.Shape();
    this.shape_240.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_240.setTransform(331.425, 302.65);

    this.shape_241 = new cjs.Shape();
    this.shape_241.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_241.setTransform(302.6, 302.65);

    this.shape_242 = new cjs.Shape();
    this.shape_242.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_242.setTransform(273.775, 302.65);

    this.shape_243 = new cjs.Shape();
    this.shape_243.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_243.setTransform(244.95, 302.65);

    this.shape_244 = new cjs.Shape();
    this.shape_244.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_244.setTransform(216.125, 302.65);

    this.shape_245 = new cjs.Shape();
    this.shape_245.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_245.setTransform(187.3, 302.65);

    this.shape_246 = new cjs.Shape();
    this.shape_246.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_246.setTransform(158.475, 302.65);

    this.shape_247 = new cjs.Shape();
    this.shape_247.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_247.setTransform(129.65, 302.65);

    this.shape_248 = new cjs.Shape();
    this.shape_248.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_248.setTransform(100.825, 302.65);

    this.shape_249 = new cjs.Shape();
    this.shape_249.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_249.setTransform(72, 302.65);

    this.shape_250 = new cjs.Shape();
    this.shape_250.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_250.setTransform(43.175, 302.65);

    this.shape_251 = new cjs.Shape();
    this.shape_251.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_251.setTransform(14.375, 302.65);

    this.shape_252 = new cjs.Shape();
    this.shape_252.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_252.setTransform(389.075, 273.825);

    this.shape_253 = new cjs.Shape();
    this.shape_253.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_253.setTransform(360.25, 273.825);

    this.shape_254 = new cjs.Shape();
    this.shape_254.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_254.setTransform(331.425, 273.825);

    this.shape_255 = new cjs.Shape();
    this.shape_255.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_255.setTransform(302.6, 273.825);

    this.shape_256 = new cjs.Shape();
    this.shape_256.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_256.setTransform(273.775, 273.825);

    this.shape_257 = new cjs.Shape();
    this.shape_257.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_257.setTransform(244.95, 273.825);

    this.shape_258 = new cjs.Shape();
    this.shape_258.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_258.setTransform(216.125, 273.825);

    this.shape_259 = new cjs.Shape();
    this.shape_259.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_259.setTransform(187.3, 273.825);

    this.shape_260 = new cjs.Shape();
    this.shape_260.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_260.setTransform(158.475, 273.825);

    this.shape_261 = new cjs.Shape();
    this.shape_261.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_261.setTransform(129.65, 273.825);

    this.shape_262 = new cjs.Shape();
    this.shape_262.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_262.setTransform(100.825, 273.825);

    this.shape_263 = new cjs.Shape();
    this.shape_263.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_263.setTransform(72, 273.825);

    this.shape_264 = new cjs.Shape();
    this.shape_264.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_264.setTransform(43.175, 273.825);

    this.shape_265 = new cjs.Shape();
    this.shape_265.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_265.setTransform(14.375, 273.825);

    this.shape_266 = new cjs.Shape();
    this.shape_266.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_266.setTransform(389.075, 245);

    this.shape_267 = new cjs.Shape();
    this.shape_267.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_267.setTransform(360.25, 245);

    this.shape_268 = new cjs.Shape();
    this.shape_268.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_268.setTransform(331.425, 245);

    this.shape_269 = new cjs.Shape();
    this.shape_269.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_269.setTransform(302.6, 245);

    this.shape_270 = new cjs.Shape();
    this.shape_270.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_270.setTransform(273.775, 245);

    this.shape_271 = new cjs.Shape();
    this.shape_271.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_271.setTransform(244.95, 245);

    this.shape_272 = new cjs.Shape();
    this.shape_272.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_272.setTransform(216.125, 245);

    this.shape_273 = new cjs.Shape();
    this.shape_273.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_273.setTransform(187.3, 245);

    this.shape_274 = new cjs.Shape();
    this.shape_274.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_274.setTransform(158.475, 245);

    this.shape_275 = new cjs.Shape();
    this.shape_275.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_275.setTransform(129.65, 245);

    this.shape_276 = new cjs.Shape();
    this.shape_276.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_276.setTransform(100.825, 245);

    this.shape_277 = new cjs.Shape();
    this.shape_277.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_277.setTransform(72, 245);

    this.shape_278 = new cjs.Shape();
    this.shape_278.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_278.setTransform(43.175, 245);

    this.shape_279 = new cjs.Shape();
    this.shape_279.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_279.setTransform(14.375, 245);

    this.shape_280 = new cjs.Shape();
    this.shape_280.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_280.setTransform(389.075, 216.175);

    this.shape_281 = new cjs.Shape();
    this.shape_281.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_281.setTransform(360.25, 216.175);

    this.shape_282 = new cjs.Shape();
    this.shape_282.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_282.setTransform(331.425, 216.175);

    this.shape_283 = new cjs.Shape();
    this.shape_283.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_283.setTransform(302.6, 216.175);

    this.shape_284 = new cjs.Shape();
    this.shape_284.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_284.setTransform(273.775, 216.175);

    this.shape_285 = new cjs.Shape();
    this.shape_285.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_285.setTransform(244.95, 216.175);

    this.shape_286 = new cjs.Shape();
    this.shape_286.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_286.setTransform(216.125, 216.175);

    this.shape_287 = new cjs.Shape();
    this.shape_287.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_287.setTransform(187.3, 216.175);

    this.shape_288 = new cjs.Shape();
    this.shape_288.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_288.setTransform(158.475, 216.175);

    this.shape_289 = new cjs.Shape();
    this.shape_289.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_289.setTransform(129.65, 216.175);

    this.shape_290 = new cjs.Shape();
    this.shape_290.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_290.setTransform(100.825, 216.175);

    this.shape_291 = new cjs.Shape();
    this.shape_291.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_291.setTransform(72, 216.175);

    this.shape_292 = new cjs.Shape();
    this.shape_292.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_292.setTransform(43.175, 216.175);

    this.shape_293 = new cjs.Shape();
    this.shape_293.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_293.setTransform(14.375, 216.175);

    this.shape_294 = new cjs.Shape();
    this.shape_294.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_294.setTransform(389.075, 187.35);

    this.shape_295 = new cjs.Shape();
    this.shape_295.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_295.setTransform(360.25, 187.35);

    this.shape_296 = new cjs.Shape();
    this.shape_296.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_296.setTransform(331.425, 187.35);

    this.shape_297 = new cjs.Shape();
    this.shape_297.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_297.setTransform(302.6, 187.35);

    this.shape_298 = new cjs.Shape();
    this.shape_298.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_298.setTransform(273.775, 187.35);

    this.shape_299 = new cjs.Shape();
    this.shape_299.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_299.setTransform(244.95, 187.35);

    this.shape_300 = new cjs.Shape();
    this.shape_300.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_300.setTransform(216.125, 187.35);

    this.shape_301 = new cjs.Shape();
    this.shape_301.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_301.setTransform(187.3, 187.35);

    this.shape_302 = new cjs.Shape();
    this.shape_302.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_302.setTransform(158.475, 187.35);

    this.shape_303 = new cjs.Shape();
    this.shape_303.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_303.setTransform(129.65, 187.35);

    this.shape_304 = new cjs.Shape();
    this.shape_304.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_304.setTransform(100.825, 187.35);

    this.shape_305 = new cjs.Shape();
    this.shape_305.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_305.setTransform(72, 187.35);

    this.shape_306 = new cjs.Shape();
    this.shape_306.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_306.setTransform(43.175, 187.35);

    this.shape_307 = new cjs.Shape();
    this.shape_307.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_307.setTransform(14.375, 187.35);

    this.shape_308 = new cjs.Shape();
    this.shape_308.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_308.setTransform(389.075, 158.525);

    this.shape_309 = new cjs.Shape();
    this.shape_309.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_309.setTransform(360.25, 158.525);

    this.shape_310 = new cjs.Shape();
    this.shape_310.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_310.setTransform(331.425, 158.525);

    this.shape_311 = new cjs.Shape();
    this.shape_311.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_311.setTransform(302.6, 158.525);

    this.shape_312 = new cjs.Shape();
    this.shape_312.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_312.setTransform(273.775, 158.525);

    this.shape_313 = new cjs.Shape();
    this.shape_313.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_313.setTransform(244.95, 158.525);

    this.shape_314 = new cjs.Shape();
    this.shape_314.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_314.setTransform(216.125, 158.525);

    this.shape_315 = new cjs.Shape();
    this.shape_315.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_315.setTransform(187.3, 158.525);

    this.shape_316 = new cjs.Shape();
    this.shape_316.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_316.setTransform(158.475, 158.525);

    this.shape_317 = new cjs.Shape();
    this.shape_317.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_317.setTransform(129.65, 158.525);

    this.shape_318 = new cjs.Shape();
    this.shape_318.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_318.setTransform(100.825, 158.525);

    this.shape_319 = new cjs.Shape();
    this.shape_319.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_319.setTransform(72, 158.525);

    this.shape_320 = new cjs.Shape();
    this.shape_320.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_320.setTransform(43.175, 158.525);

    this.shape_321 = new cjs.Shape();
    this.shape_321.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_321.setTransform(14.375, 158.525);

    this.shape_322 = new cjs.Shape();
    this.shape_322.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_322.setTransform(389.075, 129.7);

    this.shape_323 = new cjs.Shape();
    this.shape_323.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_323.setTransform(360.25, 129.7);

    this.shape_324 = new cjs.Shape();
    this.shape_324.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_324.setTransform(331.425, 129.7);

    this.shape_325 = new cjs.Shape();
    this.shape_325.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_325.setTransform(302.6, 129.7);

    this.shape_326 = new cjs.Shape();
    this.shape_326.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_326.setTransform(273.775, 129.7);

    this.shape_327 = new cjs.Shape();
    this.shape_327.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_327.setTransform(244.95, 129.7);

    this.shape_328 = new cjs.Shape();
    this.shape_328.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_328.setTransform(216.125, 129.7);

    this.shape_329 = new cjs.Shape();
    this.shape_329.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_329.setTransform(187.3, 129.7);

    this.shape_330 = new cjs.Shape();
    this.shape_330.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_330.setTransform(158.475, 129.7);

    this.shape_331 = new cjs.Shape();
    this.shape_331.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_331.setTransform(129.65, 129.7);

    this.shape_332 = new cjs.Shape();
    this.shape_332.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_332.setTransform(100.825, 129.7);

    this.shape_333 = new cjs.Shape();
    this.shape_333.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_333.setTransform(72, 129.7);

    this.shape_334 = new cjs.Shape();
    this.shape_334.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_334.setTransform(43.175, 129.7);

    this.shape_335 = new cjs.Shape();
    this.shape_335.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_335.setTransform(14.375, 129.7);

    this.shape_336 = new cjs.Shape();
    this.shape_336.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_336.setTransform(389.075, 100.9);

    this.shape_337 = new cjs.Shape();
    this.shape_337.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_337.setTransform(360.25, 100.9);

    this.shape_338 = new cjs.Shape();
    this.shape_338.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_338.setTransform(331.425, 100.9);

    this.shape_339 = new cjs.Shape();
    this.shape_339.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_339.setTransform(302.6, 100.9);

    this.shape_340 = new cjs.Shape();
    this.shape_340.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_340.setTransform(273.775, 100.9);

    this.shape_341 = new cjs.Shape();
    this.shape_341.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_341.setTransform(244.95, 100.9);

    this.shape_342 = new cjs.Shape();
    this.shape_342.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_342.setTransform(216.125, 100.9);

    this.shape_343 = new cjs.Shape();
    this.shape_343.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_343.setTransform(187.3, 100.9);

    this.shape_344 = new cjs.Shape();
    this.shape_344.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_344.setTransform(158.475, 100.9);

    this.shape_345 = new cjs.Shape();
    this.shape_345.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_345.setTransform(129.65, 100.9);

    this.shape_346 = new cjs.Shape();
    this.shape_346.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_346.setTransform(100.825, 100.9);

    this.shape_347 = new cjs.Shape();
    this.shape_347.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_347.setTransform(72, 100.9);

    this.shape_348 = new cjs.Shape();
    this.shape_348.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_348.setTransform(43.175, 100.9);

    this.shape_349 = new cjs.Shape();
    this.shape_349.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_349.setTransform(14.375, 100.9);

    this.shape_350 = new cjs.Shape();
    this.shape_350.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_350.setTransform(389.075, 72.075);

    this.shape_351 = new cjs.Shape();
    this.shape_351.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_351.setTransform(360.25, 72.075);

    this.shape_352 = new cjs.Shape();
    this.shape_352.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_352.setTransform(331.425, 72.075);

    this.shape_353 = new cjs.Shape();
    this.shape_353.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_353.setTransform(302.6, 72.075);

    this.shape_354 = new cjs.Shape();
    this.shape_354.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_354.setTransform(273.775, 72.075);

    this.shape_355 = new cjs.Shape();
    this.shape_355.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_355.setTransform(244.95, 72.075);

    this.shape_356 = new cjs.Shape();
    this.shape_356.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_356.setTransform(216.125, 72.075);

    this.shape_357 = new cjs.Shape();
    this.shape_357.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_357.setTransform(187.3, 72.075);

    this.shape_358 = new cjs.Shape();
    this.shape_358.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_358.setTransform(158.475, 72.075);

    this.shape_359 = new cjs.Shape();
    this.shape_359.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_359.setTransform(129.65, 72.075);

    this.shape_360 = new cjs.Shape();
    this.shape_360.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_360.setTransform(100.825, 72.075);

    this.shape_361 = new cjs.Shape();
    this.shape_361.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_361.setTransform(72, 72.075);

    this.shape_362 = new cjs.Shape();
    this.shape_362.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_362.setTransform(43.175, 72.075);

    this.shape_363 = new cjs.Shape();
    this.shape_363.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_363.setTransform(14.375, 72.075);

    this.shape_364 = new cjs.Shape();
    this.shape_364.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_364.setTransform(389.075, 43.25);

    this.shape_365 = new cjs.Shape();
    this.shape_365.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_365.setTransform(360.25, 43.25);

    this.shape_366 = new cjs.Shape();
    this.shape_366.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_366.setTransform(331.425, 43.25);

    this.shape_367 = new cjs.Shape();
    this.shape_367.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_367.setTransform(302.6, 43.25);

    this.shape_368 = new cjs.Shape();
    this.shape_368.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_368.setTransform(273.775, 43.25);

    this.shape_369 = new cjs.Shape();
    this.shape_369.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_369.setTransform(244.95, 43.25);

    this.shape_370 = new cjs.Shape();
    this.shape_370.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_370.setTransform(216.125, 43.25);

    this.shape_371 = new cjs.Shape();
    this.shape_371.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_371.setTransform(187.3, 43.25);

    this.shape_372 = new cjs.Shape();
    this.shape_372.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_372.setTransform(158.475, 43.25);

    this.shape_373 = new cjs.Shape();
    this.shape_373.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_373.setTransform(129.65, 43.25);

    this.shape_374 = new cjs.Shape();
    this.shape_374.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_374.setTransform(100.825, 43.25);

    this.shape_375 = new cjs.Shape();
    this.shape_375.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_375.setTransform(72, 43.25);

    this.shape_376 = new cjs.Shape();
    this.shape_376.graphics.f("#FBDCD5").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_376.setTransform(43.175, 43.25);

    this.shape_377 = new cjs.Shape();
    this.shape_377.graphics.f("#EB564F").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_377.setTransform(14.375, 43.25);

    this.shape_378 = new cjs.Shape();
    this.shape_378.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_378.setTransform(389.075, 14.425);

    this.shape_379 = new cjs.Shape();
    this.shape_379.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_379.setTransform(360.25, 14.425);

    this.shape_380 = new cjs.Shape();
    this.shape_380.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_380.setTransform(331.425, 14.425);

    this.shape_381 = new cjs.Shape();
    this.shape_381.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_381.setTransform(302.6, 14.425);

    this.shape_382 = new cjs.Shape();
    this.shape_382.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_382.setTransform(273.775, 14.425);

    this.shape_383 = new cjs.Shape();
    this.shape_383.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_383.setTransform(244.95, 14.425);

    this.shape_384 = new cjs.Shape();
    this.shape_384.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_384.setTransform(216.125, 14.425);

    this.shape_385 = new cjs.Shape();
    this.shape_385.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_385.setTransform(187.3, 14.425);

    this.shape_386 = new cjs.Shape();
    this.shape_386.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_386.setTransform(158.475, 14.425);

    this.shape_387 = new cjs.Shape();
    this.shape_387.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_387.setTransform(129.65, 14.425);

    this.shape_388 = new cjs.Shape();
    this.shape_388.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_388.setTransform(100.825, 14.425);

    this.shape_389 = new cjs.Shape();
    this.shape_389.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_389.setTransform(72, 14.425);

    this.shape_390 = new cjs.Shape();
    this.shape_390.graphics.f("#FFFFFF").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_390.setTransform(43.175, 14.425);

    this.shape_391 = new cjs.Shape();
    this.shape_391.graphics.f("#F4A399").s().p("AiPCQIAAkfIEfAAIAAEfg");
    this.shape_391.setTransform(14.375, 14.425);

    var maskedShapeInstanceList = [
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
      this.shape_47,
      this.shape_48,
      this.shape_49,
      this.shape_50,
      this.shape_51,
      this.shape_52,
      this.shape_53,
      this.shape_54,
      this.shape_55,
      this.shape_56,
      this.shape_57,
      this.shape_58,
      this.shape_59,
      this.shape_60,
      this.shape_61,
      this.shape_62,
      this.shape_63,
      this.shape_64,
      this.shape_65,
      this.shape_66,
      this.shape_67,
      this.shape_68,
      this.shape_69,
      this.shape_70,
      this.shape_71,
      this.shape_72,
      this.shape_73,
      this.shape_74,
      this.shape_75,
      this.shape_76,
      this.shape_77,
      this.shape_78,
      this.shape_79,
      this.shape_80,
      this.shape_81,
      this.shape_82,
      this.shape_83,
      this.shape_84,
      this.shape_85,
      this.shape_86,
      this.shape_87,
      this.shape_88,
      this.shape_89,
      this.shape_90,
      this.shape_91,
      this.shape_92,
      this.shape_93,
      this.shape_94,
      this.shape_95,
      this.shape_96,
      this.shape_97,
      this.shape_98,
      this.shape_99,
      this.shape_100,
      this.shape_101,
      this.shape_102,
      this.shape_103,
      this.shape_104,
      this.shape_105,
      this.shape_106,
      this.shape_107,
      this.shape_108,
      this.shape_109,
      this.shape_110,
      this.shape_111,
      this.shape_112,
      this.shape_113,
      this.shape_114,
      this.shape_115,
      this.shape_116,
      this.shape_117,
      this.shape_118,
      this.shape_119,
      this.shape_120,
      this.shape_121,
      this.shape_122,
      this.shape_123,
      this.shape_124,
      this.shape_125,
      this.shape_126,
      this.shape_127,
      this.shape_128,
      this.shape_129,
      this.shape_130,
      this.shape_131,
      this.shape_132,
      this.shape_133,
      this.shape_134,
      this.shape_135,
      this.shape_136,
      this.shape_137,
      this.shape_138,
      this.shape_139,
      this.shape_140,
      this.shape_141,
      this.shape_142,
      this.shape_143,
      this.shape_144,
      this.shape_145,
      this.shape_146,
      this.shape_147,
      this.shape_148,
      this.shape_149,
      this.shape_150,
      this.shape_151,
      this.shape_152,
      this.shape_153,
      this.shape_154,
      this.shape_155,
      this.shape_156,
      this.shape_157,
      this.shape_158,
      this.shape_159,
      this.shape_160,
      this.shape_161,
      this.shape_162,
      this.shape_163,
      this.shape_164,
      this.shape_165,
      this.shape_166,
      this.shape_167,
      this.shape_168,
      this.shape_169,
      this.shape_170,
      this.shape_171,
      this.shape_172,
      this.shape_173,
      this.shape_174,
      this.shape_175,
      this.shape_176,
      this.shape_177,
      this.shape_178,
      this.shape_179,
      this.shape_180,
      this.shape_181,
      this.shape_182,
      this.shape_183,
      this.shape_184,
      this.shape_185,
      this.shape_186,
      this.shape_187,
      this.shape_188,
      this.shape_189,
      this.shape_190,
      this.shape_191,
      this.shape_192,
      this.shape_193,
      this.shape_194,
      this.shape_195,
      this.shape_196,
      this.shape_197,
      this.shape_198,
      this.shape_199,
      this.shape_200,
      this.shape_201,
      this.shape_202,
      this.shape_203,
      this.shape_204,
      this.shape_205,
      this.shape_206,
      this.shape_207,
      this.shape_208,
      this.shape_209,
      this.shape_210,
      this.shape_211,
      this.shape_212,
      this.shape_213,
      this.shape_214,
      this.shape_215,
      this.shape_216,
      this.shape_217,
      this.shape_218,
      this.shape_219,
      this.shape_220,
      this.shape_221,
      this.shape_222,
      this.shape_223,
      this.shape_224,
      this.shape_225,
      this.shape_226,
      this.shape_227,
      this.shape_228,
      this.shape_229,
      this.shape_230,
      this.shape_231,
      this.shape_232,
      this.shape_233,
      this.shape_234,
      this.shape_235,
      this.shape_236,
      this.shape_237,
      this.shape_238,
      this.shape_239,
      this.shape_240,
      this.shape_241,
      this.shape_242,
      this.shape_243,
      this.shape_244,
      this.shape_245,
      this.shape_246,
      this.shape_247,
      this.shape_248,
      this.shape_249,
      this.shape_250,
      this.shape_251,
      this.shape_252,
      this.shape_253,
      this.shape_254,
      this.shape_255,
      this.shape_256,
      this.shape_257,
      this.shape_258,
      this.shape_259,
      this.shape_260,
      this.shape_261,
      this.shape_262,
      this.shape_263,
      this.shape_264,
      this.shape_265,
      this.shape_266,
      this.shape_267,
      this.shape_268,
      this.shape_269,
      this.shape_270,
      this.shape_271,
      this.shape_272,
      this.shape_273,
      this.shape_274,
      this.shape_275,
      this.shape_276,
      this.shape_277,
      this.shape_278,
      this.shape_279,
      this.shape_280,
      this.shape_281,
      this.shape_282,
      this.shape_283,
      this.shape_284,
      this.shape_285,
      this.shape_286,
      this.shape_287,
      this.shape_288,
      this.shape_289,
      this.shape_290,
      this.shape_291,
      this.shape_292,
      this.shape_293,
      this.shape_294,
      this.shape_295,
      this.shape_296,
      this.shape_297,
      this.shape_298,
      this.shape_299,
      this.shape_300,
      this.shape_301,
      this.shape_302,
      this.shape_303,
      this.shape_304,
      this.shape_305,
      this.shape_306,
      this.shape_307,
      this.shape_308,
      this.shape_309,
      this.shape_310,
      this.shape_311,
      this.shape_312,
      this.shape_313,
      this.shape_314,
      this.shape_315,
      this.shape_316,
      this.shape_317,
      this.shape_318,
      this.shape_319,
      this.shape_320,
      this.shape_321,
      this.shape_322,
      this.shape_323,
      this.shape_324,
      this.shape_325,
      this.shape_326,
      this.shape_327,
      this.shape_328,
      this.shape_329,
      this.shape_330,
      this.shape_331,
      this.shape_332,
      this.shape_333,
      this.shape_334,
      this.shape_335,
      this.shape_336,
      this.shape_337,
      this.shape_338,
      this.shape_339,
      this.shape_340,
      this.shape_341,
      this.shape_342,
      this.shape_343,
      this.shape_344,
      this.shape_345,
      this.shape_346,
      this.shape_347,
      this.shape_348,
      this.shape_349,
      this.shape_350,
      this.shape_351,
      this.shape_352,
      this.shape_353,
      this.shape_354,
      this.shape_355,
      this.shape_356,
      this.shape_357,
      this.shape_358,
      this.shape_359,
      this.shape_360,
      this.shape_361,
      this.shape_362,
      this.shape_363,
      this.shape_364,
      this.shape_365,
      this.shape_366,
      this.shape_367,
      this.shape_368,
      this.shape_369,
      this.shape_370,
      this.shape_371,
      this.shape_372,
      this.shape_373,
      this.shape_374,
      this.shape_375,
      this.shape_376,
      this.shape_377,
      this.shape_378,
      this.shape_379,
      this.shape_380,
      this.shape_381,
      this.shape_382,
      this.shape_383,
      this.shape_384,
      this.shape_385,
      this.shape_386,
      this.shape_387,
      this.shape_388,
      this.shape_389,
      this.shape_390,
      this.shape_391,
    ];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.shape_391},
            {t: this.shape_390},
            {t: this.shape_389},
            {t: this.shape_388},
            {t: this.shape_387},
            {t: this.shape_386},
            {t: this.shape_385},
            {t: this.shape_384},
            {t: this.shape_383},
            {t: this.shape_382},
            {t: this.shape_381},
            {t: this.shape_380},
            {t: this.shape_379},
            {t: this.shape_378},
            {t: this.shape_377},
            {t: this.shape_376},
            {t: this.shape_375},
            {t: this.shape_374},
            {t: this.shape_373},
            {t: this.shape_372},
            {t: this.shape_371},
            {t: this.shape_370},
            {t: this.shape_369},
            {t: this.shape_368},
            {t: this.shape_367},
            {t: this.shape_366},
            {t: this.shape_365},
            {t: this.shape_364},
            {t: this.shape_363},
            {t: this.shape_362},
            {t: this.shape_361},
            {t: this.shape_360},
            {t: this.shape_359},
            {t: this.shape_358},
            {t: this.shape_357},
            {t: this.shape_356},
            {t: this.shape_355},
            {t: this.shape_354},
            {t: this.shape_353},
            {t: this.shape_352},
            {t: this.shape_351},
            {t: this.shape_350},
            {t: this.shape_349},
            {t: this.shape_348},
            {t: this.shape_347},
            {t: this.shape_346},
            {t: this.shape_345},
            {t: this.shape_344},
            {t: this.shape_343},
            {t: this.shape_342},
            {t: this.shape_341},
            {t: this.shape_340},
            {t: this.shape_339},
            {t: this.shape_338},
            {t: this.shape_337},
            {t: this.shape_336},
            {t: this.shape_335},
            {t: this.shape_334},
            {t: this.shape_333},
            {t: this.shape_332},
            {t: this.shape_331},
            {t: this.shape_330},
            {t: this.shape_329},
            {t: this.shape_328},
            {t: this.shape_327},
            {t: this.shape_326},
            {t: this.shape_325},
            {t: this.shape_324},
            {t: this.shape_323},
            {t: this.shape_322},
            {t: this.shape_321},
            {t: this.shape_320},
            {t: this.shape_319},
            {t: this.shape_318},
            {t: this.shape_317},
            {t: this.shape_316},
            {t: this.shape_315},
            {t: this.shape_314},
            {t: this.shape_313},
            {t: this.shape_312},
            {t: this.shape_311},
            {t: this.shape_310},
            {t: this.shape_309},
            {t: this.shape_308},
            {t: this.shape_307},
            {t: this.shape_306},
            {t: this.shape_305},
            {t: this.shape_304},
            {t: this.shape_303},
            {t: this.shape_302},
            {t: this.shape_301},
            {t: this.shape_300},
            {t: this.shape_299},
            {t: this.shape_298},
            {t: this.shape_297},
            {t: this.shape_296},
            {t: this.shape_295},
            {t: this.shape_294},
            {t: this.shape_293},
            {t: this.shape_292},
            {t: this.shape_291},
            {t: this.shape_290},
            {t: this.shape_289},
            {t: this.shape_288},
            {t: this.shape_287},
            {t: this.shape_286},
            {t: this.shape_285},
            {t: this.shape_284},
            {t: this.shape_283},
            {t: this.shape_282},
            {t: this.shape_281},
            {t: this.shape_280},
            {t: this.shape_279},
            {t: this.shape_278},
            {t: this.shape_277},
            {t: this.shape_276},
            {t: this.shape_275},
            {t: this.shape_274},
            {t: this.shape_273},
            {t: this.shape_272},
            {t: this.shape_271},
            {t: this.shape_270},
            {t: this.shape_269},
            {t: this.shape_268},
            {t: this.shape_267},
            {t: this.shape_266},
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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup,
    new cjs.Rectangle(157.8, 69.7, 533.4000000000001, 270.3),
    null,
  );

  (lib.fevesgauche = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgHAPQgEgBAAgDQAAgHACgHQABgJAKgCQAFgCADAFQACAEgBAEQgCAGgFADIgGAHQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCgBg",
      );
    this.shape.setTransform(5.1793, 36.2669, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#71AC4A")
      .s()
      .p("AgsA6QgbgOAFgsQAIgpA3gNQAUgFATgBQAZAKAGAQQAGATgXAXQgZAbgSAMQgUAOgQAAQgIAAgHgDg");
    this.shape_1.setTransform(8.5746, 36.051, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#649941")
      .s()
      .p("AABBiQAQhAgkgBQgiAAAJA3QgwgugHgzQgJhABJgRQBLgTAlAeQAhAagLAxQgJAkgsAlIgrAeg");
    this.shape_2.setTransform(12.6496, 40.6675, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#83BE5B").s().p("AgYgJQgIg3AhAAQAlABgQA/QgIAhgPAgQgRgogGgig");
    this.shape_3.setTransform(10.0652, 52.9243, 1.2499, 1.2499);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAHAGIgHgDIgJgFIAAgCIABgBIAKACQAEABADADQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgBAAg",
      );
    this.shape_4.setTransform(41.4085, 6.2161, 1.2499, 1.2499);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AABAOIgDgGQgDgDAAgDQgDgIACgFQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAABQAFAEACAIIAAAGIABAHQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBgBAAg",
      );
    this.shape_5.setTransform(36.4735, 14.9864, 1.2499, 1.2499);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#71AC4A")
      .s()
      .p("AAIAnQgIgIgJgUQgPgggMgOIAHgEQAdgKASARQANAMAEASQAFARgIAQQgGANgIAAQgFAAgFgFg");
    this.shape_6.setTransform(48.2293, 6.0213, 1.2499, 1.2499);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#71AC4A")
      .s()
      .p("AAAA0QgWgEgKgNQgjgvAKggQAlgTAmAaQAYAPALAVQAPAZgQAUIgDAEQgRAFgQAAIgQgBg");
    this.shape_7.setTransform(40.9219, 15.9096, 1.2499, 1.2499);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#649941")
      .s()
      .p(
        "Ag/BIQgVgdgFgVQgIgiAfgaIAAgCQAJgBAWAHQAbAIAPAOQAOAMgNghIgSgqIAAgBQAXgQAdADQAfADAHAWQAMAggBAcQgBApgeAZQggAbgnABIgEAAQghAAgPgSg",
      );
    this.shape_8.setTransform(44.8117, 11.2709, 1.2499, 1.2499);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#83BE5B")
      .s()
      .p("AAjAhQgQgOgagIQgWgHgKABQgDABACgIQACgJAGgIQATgYAdANIAAABIATApQAKAYgFAAQgBAAgEgDg");
    this.shape_9.setTransform(41.3721, 5.5474, 1.2499, 1.2499);

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
  }).prototype = getMCSymbolPrototype(lib.fevesgauche, new cjs.Rectangle(0, 0, 56.3, 61.1), null);

  (lib.fevedroite = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgDAOQgBgBgBAAQAAAAAAgBQAAAAgBgBQAAAAABgBIADgKIAGgMIABgBQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAAAIgBANQgBAFgFAFQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgBAAg",
      );
    this.shape.setTransform(20.9146, 9.6868, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSAJQgCgEADgCIAHgEIAHgGQAKgFAHACQAEABABADQABACgCADQgEAGgLAEQgDABgFAAIgJABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg",
      );
    this.shape_1.setTransform(9.0508, 4.3779, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#71AC4A")
      .s()
      .p("AgkAuQgbgLAOgTQAJgMAYgNQAmgVATgUIAGAJQARAkgTAaQgOASgXAIQgKAEgLAAQgMAAgLgFg");
    this.shape_2.setTransform(22.1065, 18.2251, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#71AC4A")
      .s()
      .p("AgxBJIgFgEQgNggACgeQADgdAPgOQA2g1AtAKQAOAWAAAbQgBAZgNAZQgRAggZARQgRAMgQAAQgNAAgNgIg");
    this.shape_3.setTransform(8.2658, 10.1613, 1.2499, 1.2499);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#649941")
      .s()
      .p(
        "AhJBVQgmgngHgyQgGgvAYgVQAhgfAbgJQAsgPAlAlIACgBQADAMgGAeQgIAjgPAVQgOAUApgVQAYgLAcgSIABABQAYAbgBAnQgBAngaAMQgoATglADIgLAAQguAAggggg",
      );
    this.shape_4.setTransform(14.9878, 14.6593, 1.2499, 1.2499);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#83BE5B")
      .s()
      .p("AgnAuQAPgWAIgiQAGgegDgMQgBgEAMABQALACAMAHQAhAVgOAnIgBABQgcASgXAMQgVALgHAAQgGAAAHgKg");
    this.shape_5.setTransform(22.1029, 9.7964, 1.2499, 1.2499);

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
  }).prototype = getMCSymbolPrototype(lib.fevedroite, new cjs.Rectangle(0, 0, 30, 29.4), null);

  (lib.concombre = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#C1CD87").s().p("AgWAAQAHgQATAIQALAEAJAGQgOAGgMADIgKABQgPAAAFgMg");
    this.shape.setTransform(28.8393, 11.6931, 1.2498, 1.2498);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#C1CD87").s().p("AgeAEQgGgPAiAAQAQAAASADQgOAIgOAHQgMAFgIAAQgLAAgDgIg");
    this.shape_1.setTransform(30.0282, 15.3974, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#C1CD87").s().p("AgMAbQgPgGAWgYQAKgNAOgLIgHAeQgIAZgLAAIgFgBg");
    this.shape_2.setTransform(35.238, 20.885, 1.2498, 1.2498);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#C1CD87").s().p("AgdAXQgSgRAogSQATgKAYgGQgJAUgNAQQgPAVgOAAQgHAAgHgGg");
    this.shape_3.setTransform(31.3046, 19.5053, 1.2498, 1.2498);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#C1CD87").s().p("AgIgFQAIgZALAOQALAOgSANIgSALQACgPAEgMg");
    this.shape_4.setTransform(29.9045, 29.6232, 1.2498, 1.2498);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#C1CD87").s().p("AgEALQgUgLALgOQAMgOAKAXQAFALADAOQgMgDgJgGg");
    this.shape_5.setTransform(23.2712, 30.2311, 1.2498, 1.2498);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#C1CD87").s().p("AgOABQgFgQAMgKQARgOAFAYQAFAXgQAXQgNgQgFgOg");
    this.shape_6.setTransform(26.09, 28.1587, 1.2498, 1.2498);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#C1CD87").s().p("AgHAIIgagbIAnABQAmAFgMAWQgGALgKAAQgKAAgNgMg");
    this.shape_7.setTransform(19.2582, 20.4546, 1.2498, 1.2498);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#C1CD87").s().p("AADAPIgagFIAUgSQAVgOAFAUQAGARgYAAIgCAAg");
    this.shape_8.setTransform(20.0444, 15.3428, 1.2498, 1.2498);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#C1CD87").s().p("AgMAGIgFgfIAXAPQAVARgRAOQgFAFgEAAQgIAAgFgUg");
    this.shape_9.setTransform(16.851, 23.1606, 1.2498, 1.2498);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#7CAD4B")
      .s()
      .p(
        "Ag6CaQgSghgLgQQgUgcgZgPQgxgcgPgsQgRgyAcgyQATgjAogJQAagFBMgFQARgCBbgfQA3gSAhAaIAIAGQA8A4hZCBQgPAWgLAmIgRBAQgWBIg4AGIgLABQgvAAgegzgABKi7QhRAhgYAEQhKAKgYAGQgkAJgQAfQgWAvARAtQAQAnAvAYQAbANAWAbIAfAvQAiA1AwgJQAxgIAQhGIANg/QAJglAPgXQBMh+g3gvIgHgFQgPgKgVAAQgUAAgZAKg",
      );
    this.shape_10.setTransform(25.4185, 25.6153, 1.2499, 1.2499);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#DDE8B4")
      .s()
      .p(
        "Ag6CaQgSghgLgQQgUgcgZgPQg3gfgMgzQgLguAZgsQATgjAogJQAagFBMgFQARgCBbgfQA3gSAhAaIAIAGQA7A3hYCCQgPAWgLAmIgRBAQgWBIg4AGIgLABQgvAAgegzg",
      );
    this.shape_11.setTransform(25.4058, 25.6153, 1.2499, 1.2499);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#2A4E22").s().p("AgpgSIAEgLIBPAxIgHAKg");
    this.shape_12.setTransform(54.1356, 20.095, 1.2498, 1.2498);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#2A4E22").s().p("AglgSIADgGIBIAsIgEAFg");
    this.shape_13.setTransform(51.6672, 24.0319, 1.2498, 1.2498);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#5D924C").s().p("AgXgFIACgFIAtAQIgCAFg");
    this.shape_14.setTransform(41.1063, 44.2789, 1.2498, 1.2498);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#41672A")
      .s()
      .p("AhPDFIgxgHQDFlWgwgtIBTBBQBDA2huBkQgVAUgtBdQgeA/gkAAIgIgBg");
    this.shape_15.setTransform(45.2682, 27.3971, 1.2499, 1.2499);

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
  }).prototype = getMCSymbolPrototype(lib.concombre, new cjs.Rectangle(0, 0, 61.5, 52.2), null);

  (lib.brochette = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#8B7784")
      .s()
      .p("AhfB3QgFgEgBgIQgBgHAFgFQA1g/CEiXQAEgGAGAEQAGAEgEAGQh0Clg2A/QgFAGgHABIgBAAQgHAAgFgFg");
    this.shape.setTransform(171.7178, 15.4271, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#96563A")
      .s()
      .p("AATB+Qg6gcgVgUQgbgbgag2QgghEAIgxQA7gxAtATQAsATBFBjQBCBfgGAWQgFAPgPAbQgIAPgJAOQgYgBg8gdg");
    this.shape_1.setTransform(160.5653, 29.3475, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#592E1C").s().p("AgvAoIAUgYIA2hBIAVAMIhIBXg");
    this.shape_2.setTransform(153.7001, 48.202, 1.2498, 1.2498);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#70412C")
      .s()
      .p(
        "ABBCrQgogEgwgSQg0gUgPgSQgcgigWg2QgdhFARgjQAGgMALgSQAZgkAdgYQgIAwAgBEQAaA3AcAaQAUAUA7AdQA7AdAYABQgnA8gcAGIgOABIgNgBg",
      );
    this.shape_3.setTransform(153.4828, 35.7502, 1.2499, 1.2499);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#9E4567")
      .s()
      .p(
        "ABTC7IgTgBQg7gGgygPQg0gQgTgRQgZgZgkiDIgGgaQgMgtgHgmQgHgkABgGQABgHATgGQALBIAgBGQgCAmAaA5QAVAtAXAcQAPASA0AUQAwASAoAEQARACAKgCQANgDAQgPIAcAAIAvgFIgEAWQgjAIguAAIgpgCg",
      );
    this.shape_4.setTransform(151.8408, 34.3673, 1.2499, 1.2499);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CCABA7")
      .s()
      .p(
        "ACCC/Qg8gGgzgPQgzgQgSgRQgZgZgkiDIgHgaQgLgtgIgmQgHgkABgGQACgLAigFQASgEAQgBIAJAjQAIAngDAVIADACQgMARgFAMQgRAjAcBFQAXA3AbAhQAOASA0AUQAyATAoADIgBAFg",
      );
    this.shape_5.setTransform(143.654, 33.7415, 1.2499, 1.2499);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#CCABA7")
      .s()
      .p("Ag9AxIgFAAIAAgFQARACAKgCQAcgGAmg7QAKgOAIgPIADACQAXAEgEAsQgBAWgGAVQgjAIgtAAIgpgCg");
    this.shape_6.setTransform(170.001, 51.6159, 1.2499, 1.2499);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E94749")
      .s()
      .p(
        "AAyB6QhrgagWgSQgWgSgeg4Qgdg2gMgtQgLgoAQgHQANgFAxANQAkCEAZAYQASARAzAQQAzAPA8AGIAAABIAbAfQAYAfgOAEIgIABQgbAAhYgWg",
      );
    this.shape_7.setTransform(142.9407, 48.1413, 1.2499, 1.2499);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#E94749").s().p("AgeAdIA0hIIAJAbIgrA8g");
    this.shape_8.setTransform(119.3301, 44.1088, 1.2498, 1.2498);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#E94749").s().p("AgsAsQA7hTAegLQgDAEAAAKQgaAQgzBHg");
    this.shape_9.setTransform(115.362, 37.4848, 1.2498, 1.2498);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#D5373A")
      .s()
      .p(
        "Aj5hmQAxhYAegTQAigVA6AeIAFgBIAGAaQgxgNgMAFQgRAHALAoQANAtAcA3QAeA3AWASQAWASBrAaQBqAaASgFQANgEgYgfIgbgfIAAgBIATABIAHAHQBZAthFBGQgWAWgjAVIgfASg",
      );
    this.shape_10.setTransform(138.0983, 53.2618, 1.2499, 1.2499);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#70412C")
      .s()
      .p("AgNBkQgbgOghg9QglhAgKg7IgBgIIAAgBIDyDLIgDAEIgBAAQgZAFghACIgWABQgjAAgPgIg");
    this.shape_11.setTransform(127.882, 58.8138, 1.2499, 1.2499);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#D89F39")
      .s()
      .p(
        "AAACJQhsgSgNgHQgOgHgNgqQgPgwAEg0QAEg6ARgaQASgaAogHQAJA7AlBBQAiA8AaAOQAUAKA1gDQAhgCAZgFIAAABQAJAXgKAqQgKAsgTABIgCAAQgXAAhmgSg",
      );
    this.shape_12.setTransform(122.9399, 65.8357, 1.2499, 1.2499);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#1F0B13").s().p("Ag1AuIBQhqIAbAEIhZB1g");
    this.shape_13.setTransform(127.4539, 91.8518, 1.2498, 1.2498);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#431D2E")
      .s()
      .p(
        "ABLD2QgMgDiKhxQiOhzgHgEQgFgDALgdQAUg4AqhMQAvhTAXgJIAcAXIAAAAIABAJQgoAGgSAbQgSAagEA6QgEA1APAvQANAqAPAHQAMAGBsATQBsASAUgBQASgBALgrQAKgqgJgWIgBgBIABAAIAEgEIAdAYQAJAbADAoQAEAwgLARQgKAOgiAeQgjAegcATQgZAPgJAAIgCAAg",
      );
    this.shape_14.setTransform(120.0963, 73.2821, 1.2499, 1.2499);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#96563A")
      .s()
      .p(
        "AAZCYQh6gYgQgeQgzhZgUhMQgThNAXgTQALgJAVAHIACAAQgLAeAFAEQAHADCOBzQCKBwAMADQAIACAcgRIABABIAIAfQAGAfgNAMQgFADgGACQgJACgOAAQgpAAhVgRg",
      );
    this.shape_15.setTransform(111.1271, 91.2367, 1.2499, 1.2499);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#96563A").s().p("AgxA7QAdgjBDhbIADAPQg+BVgcAig");
    this.shape_16.setTransform(81.8981, 90.2271, 1.2498, 1.2498);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#592E1C").s().p("Ag4A8IAzg/QAhgqAQgVIANABQgOAUgjAtIg2BDg");
    this.shape_17.setTransform(121.7985, 120.4414, 1.2498, 1.2498);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#592E1C").s().p("AgyAsQAdghAuhEIAaAFQg3BQgaAdg");
    this.shape_18.setTransform(114.7371, 118.0355, 1.2498, 1.2498);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#70412C")
      .s()
      .p(
        "ACLDyQgKgBhMg3IgfgXQiBhfhXhKIgpglQgRgRAAgFQAAgPA2hDQAzg/AhgfIACACQgXATAUBNQATBMAzBZQARAdB5AZQBzAXAjgIQAGgCAEgDQhbCcgWAAIgBAAg",
      );
    this.shape_19.setTransform(102.5404, 100.7685, 1.2499, 1.2499);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#E94749")
      .s()
      .p("AhABgQgOgOgYg5Qgag9gBgeQAAgaANgHQAIgEAWADQBWBLCBBeIgCAFQgQAOhSAKQgmAEgXAAQgaAAgGgGg");
    this.shape_20.setTransform(89.0728, 112.5388, 1.2499, 1.2499);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#E94749").s().p("AgwAUQBCgoAfgKQgCAHAAAHQghALg6Ajg");
    this.shape_21.setTransform(67.0253, 105.5373, 1.2498, 1.2498);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#BA2323").s().p("AALhVIANgGIgjC2IgMABg");
    this.shape_22.setTransform(101.2078, 133.5332, 1.2498, 1.2498);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#BA2323").s().p("AgcBUIAgikIAZgFIghCrg");
    this.shape_23.setTransform(95.9898, 134.2519, 1.2498, 1.2498);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#D5373A")
      .s()
      .p(
        "ABMDGQhEgEgigbQgngfhFh5QhEh2AEgZQABgHAEgFQALgUAdgRQAegSAegDIAqAlQgXgDgHAEQgNAHAAAaQABAeAaA+QAYA4ANAOQAMAMBRgKQBSgKAQgOIADgFIAgAXQAIAfgLAxQgKAtgQAaQgIANgGAAQgdAEgbAAIgVgBg",
      );
    this.shape_24.setTransform(84.7104, 120.1135, 1.2499, 1.2499);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#CCABA7")
      .s()
      .p(
        "ACRC0QhsgXhMg5QhPgxhDhcQg4hNgHgpQAfgQA4gRQgBBOAcA4QASAkA2A7IApAnQASAPAsAcQAXAOAxAJQBEALA/gRQAJAmgFAPQgFAEgPAAQgaAAg5gNg",
      );
    this.shape_25.setTransform(78.354, 126.2366, 1.2498, 1.2498);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#9E4567")
      .s()
      .p(
        "ACVCuQhugShPg2QhWgwhKhgQhAhUADgcQgEgMAggQQAHApA4BNQBDBcBPAxQBMA5BsAXQBZATAOgKQgFAJgHADQgFAFgUAAQgaAAgzgJg",
      );
    this.shape_26.setTransform(76.4708, 129.127, 1.2498, 1.2498);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#CCABA7")
      .s()
      .p(
        "ACUC/QhugShPg2QhWgwhKhhQhAhTADgcQgEgPAwgVQAegNApgMQgBBOAcA3QASAlA2A6IApAnQARAQAtAbQAXAPAxAIQBEALA/gRQAGAbAAAOQgBASgNAGQgFAFgUAAQgaAAgzgIg",
      );
    this.shape_27.setTransform(76.6193, 127.0766, 1.2499, 1.2499);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#96563A")
      .s()
      .p("AAdBxQh4gWgSgIQgJgEgSgaQgUgcgNggQgmhZAognQADADAqAPQAwAQAbASQApAbBlBiQAzAyAqAsQgjgBh8gWg");
    this.shape_28.setTransform(67.6437, 137.2014, 1.2499, 1.2499);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#592E1C").s().p("AhSBpQBqiXAhhAIAaABQgeA/hwCdg");
    this.shape_29.setTransform(72.3058, 164.0913, 1.2498, 1.2498);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#96563A")
      .s()
      .p("AgVB3QgGgwgGhEQgGhOAEgGQAHgMAUgMQASgMAYgIIAEALQgWAIgQAKQgTALgGAKQgCAIAHBSQAHBTAFAbg");
    this.shape_30.setTransform(44.0584, 153.5303, 1.2498, 1.2498);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#96563A")
      .s()
      .p(
        "AgpB2QgLhBgEg5QgFhMAMgKQARgNAegNQAagNAcgIIAHAWQgZAIgaALQgZANgPALQgFAQAIBUQAHBTAIAbQgSgNgJgHg",
      );
    this.shape_31.setTransform(39.7367, 148.9685, 1.2498, 1.2498);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#70412C")
      .s()
      .p(
        "ABTDqQg5gHhngvQh0g1gVgsQgYg0gPhFQgRhLALgeQALgdA/gfQA6gcAkgCQgRAcAEAHIABACQgDAiAcBHQAcBFARAIQAPAHBdAHQBXAHArAAIABgCIA6AgIgEAGQgTA3g2BCQg6BGgoAAIgGAAg",
      );
    this.shape_32.setTransform(58.2067, 149.5322, 1.2499, 1.2499);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#8B7784")
      .s()
      .p(
        "Ak8GMQgSgYgMgmQgOgtAJgbQAHgWA3gGQAegEA5gEQAXgTH3pdQAFgFAHgBQAIgBAFAFQAGAFAAAHQABAHgFAGIkkFeQjsEagPADIg/AGQg0AEgLAGQgDAQAIAdQAIAbANAUQARgGAegSQAfgTAFgKQACgHAHgDQAGgDAHACQAHADADAGQADAHgCAHQgHAUguAdQgrAagVADIgFAAQgMAAgGgJg",
      );
    this.shape_33.setTransform(44.3955, 166.6309, 1.2499, 1.2499);

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
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.brochette, new cjs.Rectangle(0, 0, 184.5, 217.3), null);

  (lib.broccoli2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#507934")
      .s()
      .p("AAtA+Qg7gVgIgFQgBgBABgFQAXg+hhgqIADgGQBlAugYBCIAAAAQAJAFA2AUIAyASIgEAFQgXgJgZgJg");
    this.shape.setTransform(39.0951, 17.8785, 1.2498, 1.2498);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#649941").s().p("AhTgaIgKgSIC7BOIgFALg");
    this.shape_1.setTransform(37.3766, 27.0335, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#649941").s().p("AhOgeIgEgIIClBHIgDAGg");
    this.shape_2.setTransform(37.7203, 29.7206, 1.2498, 1.2498);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#76B051")
      .s()
      .p(
        "AgGABQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIAEgBIACAAQABgBAAAAQABAAAAABQABAAAAABQABAAAAABIAAABIgDACIgCAAIgFABQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAg",
      );
    this.shape_3.setTransform(20.754, 8.1786, 1.2498, 1.2498);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAAEIgCgCIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABABIACACQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgBABIgCAAIgBAAg",
      );
    this.shape_4.setTransform(12.5372, 10.4176, 1.2498, 1.2498);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#76B051")
      .s()
      .p(
        "AgFAFQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQACgDAEgBQADgBAEACQABAAAAABQABAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgDgBQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAg",
      );
    this.shape_5.setTransform(22.236, 17.5277, 1.2498, 1.2498);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAAFIgDgGQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAQAAAAAAAAQAAAAABABQAAAAAAABIADAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIAAABIgCABIgCgBg",
      );
    this.shape_6.setTransform(15.3656, 21.5584, 1.2498, 1.2498);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#76B051")
      .s()
      .p(
        "AgEAEQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAIACgBIABgBIAAAAIABgBQABgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAIgBABIgDACIAAAAIgBABIgBABIgDgBg",
      );
    this.shape_7.setTransform(12.499, 29.3523, 1.2498, 1.2498);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#507934")
      .s()
      .p(
        "AgiChQgUgCgBgZIADgaQggALgLgUQgMgUAfgUQgMAFgOgHQgNgHgGgNQgQgiArgEQgcgQAGgjQAGgkA5AOQgRgZACgYQACgbAagJQAYgHAXAVQAMAKAIAMIAOgVQATgRAYASQAWAPgIAWQgFAPgPALIARAHQASAJAIANQAFAIAAAIQABAYgiAJQgHACgHAAIgHAAIAMATQANAWACANQAAAGgBAGQgHARgugBIgJAAIAJAPQAIARgCAMQgBAGgDAEQgKALgRgGIgQgJQgCAIgFAIQgKAOgRAAIgEgBg",
      );
    this.shape_8.setTransform(15.6814, 20.1247, 1.2497, 1.2497);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#76B051")
      .s()
      .p(
        "AhuBxQACgMgIgSIgJgPIAJAAQA8AdAXgkQABgKgegKQgCgOgNgWIgMgSIAHAAQAHgBAHgCQAjATAUACQAJACgDgbQgEgdgdgQQgIgNgSgJIgRgGQAPgMAFgPIAEACQBSAgAGArQADAWgOAPIA5APQA5ASgGAJQgVAjgOApQgDAIgugVIgsgWQgRAfgWAJQgKAEgNAAQgUAAgagIg",
      );
    this.shape_9.setTransform(35.9471, 21.8072, 1.2497, 1.2497);

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
  }).prototype = getMCSymbolPrototype(lib.broccoli2, new cjs.Rectangle(0, 0, 51.8, 40.4), null);

  (lib.broccoli1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgBADQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQABAAAAAAIADAAIACABIABABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg",
      );
    this.shape.setTransform(24.6342, 25.282, 1.2498, 1.2498);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgBADIgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAABIAEABIADABIACgBIACABIABABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgDAAIgCAAIgCgBg",
      );
    this.shape_1.setTransform(12.1204, 28.8075, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgBAKQgDgBADgQQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAABAAIACABIABACIgDALIABADQgBABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBAAg",
      );
    this.shape_2.setTransform(17.455, 25.0931, 1.2498, 1.2498);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAADIgCgBIgBgCIACgBIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABIgDABg",
      );
    this.shape_3.setTransform(44.7146, 42.6919, 1.2498, 1.2498);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#76B051")
      .s()
      .p(
        "AgGABQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAABAAIABAAIAGgBIACABIABABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgHABIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg",
      );
    this.shape_4.setTransform(23.8531, 31.8748, 1.2498, 1.2498);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#76B051")
      .s()
      .p(
        "AgCAFIgBgCIAAgCIADgEQAAgBAAAAQABgBAAAAQABAAAAABQABAAAAAAIABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgDAEIgBACIgCgBg",
      );
    this.shape_5.setTransform(31.7206, 28.719, 1.2498, 1.2498);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#76B051")
      .s()
      .p(
        "AgEACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAIACIABABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg",
      );
    this.shape_6.setTransform(38.7311, 33.6245, 1.2498, 1.2498);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#76B051")
      .s()
      .p(
        "AgBAIQgCgEABgEIABgEIgBgCIACgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABIAAABQACADgBAEQAAABgBAAQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg",
      );
    this.shape_7.setTransform(43.5064, 35.7906, 1.2498, 1.2498);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgEAJQgBgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAIACgDIADgEIACgEQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABABIABAAQAAAAAAABQAAAAAAABQABAAgBABQAAAAAAABIgDADIgDAIIgCABIgCAAg",
      );
    this.shape_8.setTransform(46.3396, 50.7327, 1.2498, 1.2498);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgHAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAIgBIADAAIAAABQABABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQgEABgGAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBg",
      );
    this.shape_9.setTransform(48.7423, 58.2667, 1.2498, 1.2498);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgCAJQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAEgNQAAAAAAgBQAAAAABAAQAAgBABAAQAAABABAAIABAAIABADIgEAJIAAADQAAABgBAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCgBg",
      );
    this.shape_10.setTransform(42.6784, 68.086, 1.2498, 1.2498);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgDAJQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgCIACgDIABgHQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABIABAAIABADIgCAFQAAADgCADIgBACIgCACIgBgBg",
      );
    this.shape_11.setTransform(40.749, 62.0921, 1.2498, 1.2498);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgCAIIAAgPQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACABIABACIAAAKIAAAFQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAg",
      );
    this.shape_12.setTransform(29.6022, 67.7758, 1.2498, 1.2498);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#486C2F")
      .s()
      .p(
        "AABAIIgBgCIAAgBIgBgFIgCgEQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIACAAIABABIADAJIABACQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgBAAIgBAAg",
      );
    this.shape_13.setTransform(22.6635, 61.5319, 1.2498, 1.2498);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgDADQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAIADAAIAEgBIACABIABABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgEABg",
      );
    this.shape_14.setTransform(32.758, 58.1834, 1.2498, 1.2498);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#486C2F")
      .s()
      .p(
        "AgHAEQAAgBgBAAQAAgBABAAQAAgBAAAAQABAAAAgBIACAAQAFgBADgDQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAQgDACgIADIgBAAIgBABQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg",
      );
    this.shape_15.setTransform(34.818, 62.5131, 1.2498, 1.2498);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#76B051")
      .s()
      .p(
        "AgEADQAAgBAAAAQgBgBABAAQAAAAAAgBQAAAAABAAIABAAIABAAIAAgBIABgBQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABABIABABQAAAAAAAAQAAAAAAABQABAAgBAAQAAABAAAAIAAAAIgBACIgEACIgCABQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBg",
      );
    this.shape_16.setTransform(3.8768, 48.2334, 1.2498, 1.2498);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAAFIAAgBQgCgDgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIACAHIABAAIAAACIgBACIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg",
      );
    this.shape_17.setTransform(13.4744, 38.4715, 1.2498, 1.2498);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAAFQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgBIAAgCIAAAAIABgCQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIABABQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBADIAAABIAAACQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIAAgBg",
      );
    this.shape_18.setTransform(19.9411, 52.628, 1.2498, 1.2498);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAADIgBAAIgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIABAAIABAAIACAAIABABIABACQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg",
      );
    this.shape_19.setTransform(10.6362, 45.9977, 1.2498, 1.2498);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#76B051")
      .s()
      .p(
        "AgGAEQAAgBAAgBQgBAAABgBQAAAAAAgBQAAAAABAAIAFgCIADgCIABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIAAABQAAAAAAABQABAAgBABQAAAAAAAAQgBAAAAAAIgIAFIgCAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg",
      );
    this.shape_20.setTransform(9.2888, 55.7877, 1.2498, 1.2498);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#76B051")
      .s()
      .p(
        "AAAAJQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQACgFgBgJIABAAIADAAQABAJgCAGQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIAAAAg",
      );
    this.shape_21.setTransform(14.6409, 52.9811, 1.2498, 1.2498);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#507934")
      .s()
      .p(
        "AgCAEIgBgEQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAgCQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgBABIAAABIAAAAIAAAEQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg",
      );
    this.shape_22.setTransform(37.3136, 42.588, 1.2498, 1.2498);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#507934")
      .s()
      .p(
        "AgGABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAIAHgCQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABAAQAAABAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgEACgFABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg",
      );
    this.shape_23.setTransform(22.6853, 38.755, 1.2498, 1.2498);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#507934")
      .s()
      .p(
        "AgKABQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAHADAJgBIADAAIAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgJABQgFAAgHgDg",
      );
    this.shape_24.setTransform(29.1648, 41.1019, 1.2498, 1.2498);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#507934")
      .s()
      .p(
        "AgCAJQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAEgLQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIABABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgFAMQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg",
      );
    this.shape_25.setTransform(27.4388, 47.3122, 1.2498, 1.2498);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#507934")
      .s()
      .p(
        "AgCAGIABgEIAAgCIgBgFQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBIACABIABACIAAAEIAAAFIgBACQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAg",
      );
    this.shape_26.setTransform(32.8361, 46.0289, 1.2498, 1.2498);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#76B051")
      .s()
      .p(
        "Ag0BfQgDgCgCACQACgMgBgbQAAgdACgHQADgQAqgvQAjgnAYgVIAJAGQgeAdgeAhQgoAsgCANIAAABQgDAIABAYQABAjgEAOQgBgGgDgDg",
      );
    this.shape_27.setTransform(63.6597, 23.3448, 1.2498, 1.2498);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#76B051").s().p("AhVBWICoivIADAEIgVAWIiSCZg");
    this.shape_28.setTransform(58.0668, 20.2202, 1.2498, 1.2498);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#507934").s().p("AhOBIIBNhMIBLhNIAFAKIhKBJQggAkgsAqIgCACQgBgHgEgDg");
    this.shape_29.setTransform(55.1297, 13.565, 1.2498, 1.2498);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#507934")
      .s()
      .p(
        "AiNBQIADgCQASgSAKgHQASgNARgBQALAAAOAGQAUAKASgDQAOgEBAg7QAnglAjgjIACAEQgkAmgnAlQg+A5gQADQgUAFgVgKQgNgHgKAAQgQABgQAMQgIAGgTASIgEADg",
      );
    this.shape_30.setTransform(46.1623, 12.3151, 1.2498, 1.2498);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#649941")
      .s()
      .p(
        "AgrB0QgZgFgDglIABgkQgIAKgLAGQgWAOgTgQQgJgIgCgJQgDgOAMgSQAGgIAGgGQgXgDAFgPQAGgQAsABQABAgATAEQAWAEASg6QAZAgAWAFQAUAFAKgOQALgOgGgSQgHgUgYgJQARgPAbgEQAdgFAOAMQAEADADAEQADAGAAAFQABANgNAOIgNALIAZAHQAZALgDAVQgCAUgdADIgcgBIAQAcQAKAfgZARQgZARgfgZIgagcIgHAkQgLAegVAAIgGAAg",
      );
    this.shape_31.setTransform(35.702, 60.768, 1.2498, 1.2498);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#76B051")
      .s()
      .p(
        "AgOBuQgUgEAAggQAAgMAGgHQgQAHgKgJQgMgKAWgWQgUAJgTgEQgQgDgHgMQgGgLAKgKQALgMAdgEQgegOgHgUQgHgSAOgMQAHgGAMgCQAdgCAfAgQgCgPAKgMQAIgLAMgCQAigGgBA4QAhgIATAVQAWAYg+AoQAJABAIADQAXAJAHAUQAGASgKAOQgLAOgUgFQgXgFgZggQgQA2gTAAIgDAAg",
      );
    this.shape_32.setTransform(29.0161, 45.9245, 1.2498, 1.2498);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#507934")
      .s()
      .p(
        "AAPBbQA+gpgWgYQgSgVghAIQAAg2ggAFQgNACgJAMQgJAMACANQgfgfgeADIgBgCQgDgHAAgIQAAgRAQgIQARgHAUAGQAKACAGAFIAFgIQAFgJAHgGQASgPASAFIAIADQAGADAEAGQAJAMACASIAKgDQAMgDAMAAQAgAAARAXIADAEQAPAXgOAjQgGASgKANIADAAQAQADACALQABAFgDAGQgOgLgdAEQgbAEgRAQQgHgDgKgCg",
      );
    this.shape_33.setTransform(34.5708, 36.8252, 1.2498, 1.2498);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#507934")
      .s()
      .p(
        "AAKB+QgSgPANgXQgPAMgVgCQgTgBgLgMQgcgeA/giQgYAHgWgIQgTgHgHgOQgHgPALgLQAMgOAeAAQgtgXAPgTQAOgUAdAMQAFABADACQgOgbAcgNQAcgOAbAaQgOAMAHASQAHAUAeANQgdAEgLAMQgKALAGAMQAHALAQADQATAEAUgIQgWAVAMAKQAKAJAQgIQgGAIAAAMQgtgBgFAQQgFAPAWADQgGAGgGAJQgLARADAOQgHAHgIAAQgIAAgKgIg",
      );
    this.shape_34.setTransform(12.6484, 49.2071, 1.2498, 1.2498);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#649941")
      .s()
      .p(
        "AhCBMIABgBQgNgGgMgKQgYgVAEgWQAFgaAdAAQAOgBANAFQgKgaAJgUQAJgRAUgHQATgGASAIQAUAJAIAWQAOgPATACQAWACAJAVQAEAIAAAKQgHAGgGAJIgEAHQgHgFgKgCQgUgFgQAGQgQAIAAARQAAAIADAHIABACQgMABgHAHQgagagdAOQgcANAOAbQgDgCgFgBg",
      );
    this.shape_35.setTransform(16.0372, 28.2086, 1.2498, 1.2498);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#507934")
      .s()
      .p(
        "AASAmQgUgQgMgNQgJgJgKgVQgJgSgCgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAQAJAmAtQAlAtgEADIAAAAIgBABQgGAAgTgOg",
      );
    this.shape_36.setTransform(68.73, 6.3957, 1.2498, 1.2498);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#649941")
      .s()
      .p(
        "AADC8IAAAAQBXhOgpgVQgEARgNAUQgLARgWAaQgCgLgQgDQAWgWARggQAUgkgKgNQgIgMgQALIgNAOIgDgEQgRgXggAAQAogpgSgOQgIgHgVALQgUAKgSARIAAAAQgEgGgGgDIgJgDQASgQAEgKQADgJgFgFQgEgFgVALQgVAMgMAOIgCABQgIgVgXgCQAggfAKgIQAagTATAEQAQAEAbAJQAWAFAQgLQAGgFA4g8QAxg1ASgDIADgBQARAJAmAuQAlAsgDAEIgBAAQAAAHgOASQgTAXgfAbQgqAkgGAIQgNARACAhQACAkgMAWQgLAVgsAsQAAgFgDgFg",
      );
    this.shape_37.setTransform(49.9619, 24.7196, 1.2498, 1.2498);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.broccoli1, new cjs.Rectangle(0, 0, 74.4, 75.4), null);

  (lib.saucerouge = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#ED6D25")
      .s()
      .p(
        "AgyCdQhUg1gjhNQgmhWAphXQALgDAIgNQAIgNAKgCQASgEAZAIQAbAIADAPQAcB2ArA8QA+BUBmgJIAKApQhTAZgnAHQgTADgQAAQguAAgkgWg",
      );
    this.shape.setTransform(39.4324, 61.5157, 1.2499, 1.2499);

    this.instance = new lib.Group_1();
    this.instance.setTransform(47.55, 39.15, 1.2499, 1.2499, 0, 0, 0, 31, 24.9);
    this.instance.alpha = 0.4883;
    this.instance.compositeOperation = "multiply";

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#D43F26")
      .s()
      .p(
        "AhoE4QhSgchIhKQhEhdAIh2QAHhpBBhpQBPhUBegXQBsgZBoAyQBmAxA6BoQAgBHgRBiQgQBbgzBSQgrAvggAUQgnAag7AOQgtATguAAQgrAAgsgQg",
      );
    this.shape_1.setTransform(47.2119, 48.0598, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjxEoQhZhQgyiIQABgJgChkQgBhHAQgrQANgKAMgSQAJgSALgRIgDAGQgJAQgIANQgXAugIAyQgbCvBsCIQBwCMCwgJQCogGBxiBQB2iHgoinQgGhgg+hOQgLgOgMgMIAJAJQBOBPAZBrQAZCxhvCKQhvCLizAJIgFAAQiHAAhmhcgAkekQQBMhSBrgYQBkgWBmAgQA7ASAyAiQghgVgngMQhdgXgvgCQhPgFhCAfQhaAlg8BLQgMAPgKAPIAjhCg",
      );
    this.shape_2.setTransform(47.7068, 48.446, 1.2497, 1.2497);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#E8E1D5")
      .s()
      .p(
        "AilFYQh+g0guiAQgviAAZh4QAbiCBqhZQBhhHB7gCQB2gDBjA+QBQA+AsBuQAqBrgJBnQgmDVjzBfQgmAEgjAAQhjAAhQghg",
      );
    this.shape_3.setTransform(47.4256, 47.8307, 1.2497, 1.2497);

    this.instance_1 = new lib.Path_8();
    this.instance_1.setTransform(59.85, 61, 1.25, 1.25, 0, 0, 0, 32.3, 32.5);
    this.instance_1.alpha = 0.2188;
    this.instance_1.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_1},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.instance},
            {t: this.shape},
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.saucerouge, new cjs.Rectangle(0, 0, 100.3, 101.7), null);

  (lib.saucejaune = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#53B04A").s().p("AgZgOIAogKQATAXgQANQgJAHgYAGg");
    this.shape.setTransform(25.3353, 47.2036, 1.2498, 1.2498);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#53B04A").s().p("AgEgMIAYAPIgnAJg");
    this.shape_1.setTransform(35.8518, 57.1396, 1.2498, 1.2498);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#82BC47")
      .s()
      .p("AgMAWQgPgBgDgOQAKgCAJgMQAHgMAJgDIAaAQIgQAYQgSAFgIAAIgBgBg");
    this.shape_2.setTransform(60.6294, 54.9555, 1.2498, 1.2498);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#53B04A").s().p("AgeAHQAWgFAGgDQALgHgEgOIAaAQQgLACgHAMQgIAMgJADg");
    this.shape_3.setTransform(28.1342, 65.2947, 1.2498, 1.2498);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#83BD49").s().p("AgCAAQAHgLAKgDIAEAUIgmAJQAKgDAHgMg");
    this.shape_4.setTransform(49.2561, 56.3741, 1.2498, 1.2498);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#82BC47").s().p("AgQAHQgGgVAOACQATABAHgKQADAJgIAMQgIANADAKg");
    this.shape_5.setTransform(36.8537, 52.1403, 1.2498, 1.2498);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#87BF4F").s().p("AgXAKQgEgQALgMQALgMARALQARALgGAPQgFAPgRADg");
    this.shape_6.setTransform(42.8918, 39.8516, 1.2498, 1.2498);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#53B04A").s().p("AgKAPQgMgLALgRQAVgSAEARQADAKABAaIgJABQgLAAgIgIg");
    this.shape_7.setTransform(59.9952, 30.3995, 1.2498, 1.2498);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#58B363").s().p("AgCAAQAHgLAKgDIAFATIgnAKQAJgDAIgMg");
    this.shape_8.setTransform(59.9576, 56.5772, 1.2498, 1.2498);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#42AE58").s().p("AgRAHQgDgMAMgIQAHgEATgFQACALgHALQgIANACAJg");
    this.shape_9.setTransform(30.0298, 45.7038, 1.2498, 1.2498);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#42AE58").s().p("AgDgGQgGgXAWAGQAFAUgDAIQgGAOgYAGQARgFgFgag");
    this.shape_10.setTransform(64.8439, 43.2315, 1.2498, 1.2498);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#58B363").s().p("AgNAYQgFgUAEgIQAFgOAagGQgTAFAGAaQAEASgNAAIgIgBg");
    this.shape_11.setTransform(57.4773, 36.9745, 1.2498, 1.2498);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#42AE58")
      .s()
      .p("AgRAKIAKgMIAHgGQgCgXAUAMQgJADgJAIIABALQAFARgCADIgDABQgEAAgOgOg");
    this.shape_12.setTransform(62.6291, 69.8332, 1.2498, 1.2498);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#42AE58").s().p("AgNgMQgIgPAXAGQASALgGAPQgFAPgQAEQAHgMgNgYg");
    this.shape_13.setTransform(68.1417, 39.8162, 1.2498, 1.2498);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#42AE58").s().p("AgNgTIAYAPQAEAPgCADQgCADgOADg");
    this.shape_14.setTransform(38.3344, 52.4215, 1.2498, 1.2498);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FBECC3")
      .s()
      .p(
        "AicCgQgCgKgNgIQgMgIgDgKQgDgPAJgQQAKgPAPgEQAegSBDgaQBGgbAbgOQBjg4g0hsQBhAkAFBiQADBVg6BGQguA2hZAHIgdABQg5AAhEgQg",
      );
    this.shape_15.setTransform(59.6768, 55.9299, 1.2498, 1.2498);

    this.instance = new lib.Group_1_0();
    this.instance.setTransform(43.25, 46.75, 1.2499, 1.2499, 0, 0, 0, 30.7, 31.9);
    this.instance.compositeOperation = "multiply";

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#F5D779")
      .s()
      .p(
        "AhAFMQh9gghehxQhbiBA8i4QBRiECqhOQBHgQBYAhQBMAcBDA4QAUAnAyBBQAmA+gKBFQADBQgoBQQgpBThEAwQhUAzhaAAQgnAAgqgKg",
      );
    this.shape_16.setTransform(47.7471, 48.3037, 1.2498, 1.2498);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#EBE6DB")
      .s()
      .p(
        "AiVFfQiQhBhCiSQg6iwBYiYQBViVCrgoQBRgUBUAWQBRAUBCA3QCRB3gDC9QANB4hJBlQhDBdhvArQhBAWhBAAQhRAAhRgkg",
      );
    this.shape_17.setTransform(47.8595, 48.4001, 1.2498, 1.2498);

    this.instance_1 = new lib.Path_9();
    this.instance_1.setTransform(59.8, 59, 1.25, 1.25, 0, 0, 0, 36.1, 36.1);
    this.instance_1.alpha = 0.2188;
    this.instance_1.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_1},
            {t: this.shape_17},
            {t: this.shape_16},
            {t: this.instance},
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
  }).prototype = getMCSymbolPrototype(lib.saucejaune, new cjs.Rectangle(0, 0, 105.1, 104.3), null);

  (lib.gobelet = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#DA2221")
      .s()
      .p("AgIAUQgMgFgGgKQgGgIADgJQAFgLARAAQAHAAAIADQANAGAGAKQAGAJgEAHQgEAMgRAAQgJAAgHgEg");
    this.shape.setTransform(79.5361, 3.6248, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F39E9D")
      .s()
      .p("AgJAZQgPgGgIgMQgHgLAFgKQAFgKANgDQANgDANAGQAPAGAIAMQAHAKgFALQgFAKgNADIgJABQgIAAgJgEg");
    this.shape_1.setTransform(79.5167, 3.6561, 1.2499, 1.2499);

    this.instance = new lib.Path_2_0();
    this.instance.setTransform(74.2, 21.6, 1.2499, 1.2499, 0, 0, 0, 8.1, 17.3);
    this.instance.alpha = 0.5;
    this.instance.compositeOperation = "multiply";

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#E94D47").s().p("AgwAUIAchCIBFAeIgbA/QgsAAgagbg");
    this.shape_2.setTransform(77.7355, 7.6871, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgtAMIAVgyQAZAbAtAAIgVAyIgCAAQgqAAgagbg");
    this.shape_3.setTransform(74.6732, 15.0311, 1.2499, 1.2499);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#E94D47").s().p("AgsAJIATgtQAaAcAsgBIgTAtQgsAAgagbg");
    this.shape_4.setTransform(72.1108, 21.124, 1.2499, 1.2499);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AgNAbQgOgGgHgLQgHgLAEgLIAIgTQAZAcAsADIgIARQgEALgOADIgIABQgJAAgKgFg");
    this.shape_5.setTransform(64.6261, 39.3385, 1.2499, 1.2499);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#E94D47").s().p("AguALIAXg1QAaAcAsgBIgZA6QgrgDgZgdg");
    this.shape_6.setTransform(66.7673, 33.9358, 1.2499, 1.2499);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgtAMIAVgyQAaAbAsAAIgVAyIgCAAQgqAAgagbg");
    this.shape_7.setTransform(69.5484, 27.1242, 1.2499, 1.2499);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#D9D9D9").s().p("AgRANIAPghIAUAMIgVAdg");
    this.shape_8.setTransform(78.7688, 21.1875, 1.25, 1.25);

    this.instance_1 = new lib.Path_1_0();
    this.instance_1.setTransform(53.5, 69.95, 1.25, 1.25, 0, 0, 0, 19.9, 22.9);
    this.instance_1.compositeOperation = "screen";

    this.instance_2 = new lib.Path_2();
    this.instance_2.setTransform(50.15, 59.9, 1.25, 1.25, 0, 0, 0, 34.2, 31.2);
    this.instance_2.compositeOperation = "multiply";

    this.instance_3 = new lib.Path_3();
    this.instance_3.setTransform(59.2, 71.6, 1.25, 1.25, 0, 0, 0, 30.9, 30.9);
    this.instance_3.compositeOperation = "screen";

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#89D0E5")
      .s()
      .p(
        "AhHFeQhIgHhDguQg+gsgng/QgdhCgLgtQgRhBAHg1QAPhVAthEQAvhJBJgsQBbg1BiACQBlACBZA7QCBBWAfCaQAWB0g6BsQg4BnhsA+QhIAfhIAAQgqAAgrgLg",
      );
    this.shape_9.setTransform(53.0938, 65.1662, 1.2499, 1.2499);

    this.instance_4 = new lib.Path_5();
    this.instance_4.setTransform(46.75, 57.35, 1.25, 1.25, 0, 0, 0, 34.9, 31.3);
    this.instance_4.alpha = 0.5;
    this.instance_4.compositeOperation = "multiply";

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#C4DDE6")
      .s()
      .p(
        "AhQF8QgYAGgkgTQgygZgKgCQgugUgogxQgQgSgwhJQgrhQAChfQABhYAohWQA2hdBVg6QBZg+BmgHQBsgIBhA2QBcAyA+BeQAnBPALBIQALBOgVBQQgmCQiIBRQhfA4hkAAQgsAAgugLg",
      );
    this.shape_10.setTransform(53.0129, 65.2212, 1.2499, 1.2499);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AioGHQhjgthNhdQg4hFgShdQgPhMAJhlQAZizDhiDQAzgZBLgFICFAAQCFAeBdBnQBbBkAXCJQAWCrhzCPQhyCPitAWQgaAEgZAAQhSAAhQgkg",
      );
    this.shape_11.setTransform(53.4934, 66.0229, 1.2499, 1.2499);

    this.instance_5 = new lib.Path_10();
    this.instance_5.setTransform(71.55, 72.9, 1.25, 1.25, 0, 0, 0, 41.8, 41.8);
    this.instance_5.alpha = 0.2188;
    this.instance_5.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_5},
            {t: this.shape_11},
            {t: this.shape_10},
            {t: this.instance_4},
            {t: this.shape_9},
            {t: this.instance_3},
            {t: this.instance_2},
            {t: this.instance_1},
            {t: this.shape_8},
            {t: this.shape_7},
            {t: this.shape_6},
            {t: this.shape_5},
            {t: this.shape_4},
            {t: this.shape_3},
            {t: this.shape_2},
            {t: this.instance},
            {t: this.shape_1},
            {t: this.shape},
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.gobelet, new cjs.Rectangle(0, 0, 123.7, 125.1), null);

  (lib.fourchette = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D6C5D0")
      .s()
      .p(
        "AANAqQgPgEgHgMQgGgJgGgRQgKgdAUgLQADgCADABQADABABADQAHAWAIANQAKAPABAFIAAASQgBAEgDACIgFABIgDgBg",
      );
    this.shape.setTransform(8.5678, 82.4636, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#D6C5D0")
      .s()
      .p(
        "AgzHOQgCgwADhDIAHh0QAKieAJhOQAPiSAPhjIARhtQALhAANgrQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAArgHBCIgMBtQgHBPgSCdIgYDrIgKB3QgGBIgHAuQgBAHgGABIgBAAQgFAAAAgHg",
      );
    this.shape_1.setTransform(9.1598, 159.9144, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#8B7784")
      .s()
      .p(
        "Ai3ORQgUgtgDhcQgFikA0mnIA1mFQg/gEgShhQgThmAejEQAaiqAyhwQARgmAOgTQANgQgDAMQgFAbgaDHIgiD9QgJBAAOAbQANAbAOg8QAKgqAii8QAgi4AHgbQALgtATgTQATgTgGAwQgFAtgaCwIgeDUQgGAnAHAQQAGARALgaQAJgWAah6IAyjkQAXhmAOgXQANgVgEA1QgFBAgxF9QgFArANAJQAOAKAEgoQAOh9ArjKQAsjTAJAhQAKAigTD/QgSEAgTBbQgQBNg8ALQgTADgVgDIgRgFQgPBYgnGXQgoGRgGBsQgCA0gUAmQgTAkgYAEIgEAAQgXAAgQgjg",
      );
    this.shape_2.setTransform(25.9079, 118.5385, 1.2499, 1.2499);

    this.instance = new lib.Path_13();
    this.instance.setTransform(29.75, 128.85, 1.25, 1.25, 0, 0, 0, 20.8, 95);
    this.instance.alpha = 0.2188;
    this.instance.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.fourchette, new cjs.Rectangle(0, 0, 55.7, 247.1), null);

  (lib.cuillerecafe = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.instance = new lib.Path();
    this.instance.setTransform(165.55, 23.85, 1.2499, 1.2499, 0, 0, 0, 6.7, 11.7);
    this.instance.alpha = 0.4219;

    this.instance_1 = new lib.Path_1();
    this.instance_1.setTransform(130.4, 23.7, 1.2499, 1.2499, 0, 0, 0, 7.4, 11.8);
    this.instance_1.alpha = 0.4883;

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D6C5D0")
      .s()
      .p("AgNAKIgNgCQgHgCACgFQAEgHAJgCIATgBQAXgBAIAKQACAEgGABQgSABgIACIgOACIgBAAg");
    this.shape.setTransform(143.4728, 8.8866, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#D6C5D0")
      .s()
      .p("ADSAWIn8gKQgtgBgBgPQgBgQAsgCQAogBDXALQDBAJA/AEQA+AEA4AAQAOAAACAJQADAIgLABIgRAAIhtgBg");
    this.shape_1.setTransform(59.0222, 19.1717, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#8B7784")
      .s()
      .p(
        "AGVC/QhrgLg1grQgRgOgVgZQgaghgHgHQgggglWANQlrAUg1ACQgnACghgTQgfgSgGgZQgHgaAagWQAggYBFgIQBXgLFdAaQErAWAkgcQANgKAhghQAcgcAWgOQBGgtCCAJQCOAJBEA/QA5AzgBBPQgCBkhiAxQhFAiheAAQgdAAgfgDg",
      );
    this.shape_2.setTransform(90.9641, 24.1837, 1.2499, 1.2499);

    this.instance_2 = new lib.Path_14();
    this.instance_2.setTransform(91, 29.2, 1.25, 1.25, 0, 0, 0, 72.8, 19.4);
    this.instance_2.alpha = 0.2188;
    this.instance_2.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {t: this.instance_2},
            {t: this.shape_2},
            {t: this.shape_1},
            {t: this.shape},
            {t: this.instance_1},
            {t: this.instance},
          ],
        })
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.cuillerecafe, new cjs.Rectangle(0, 0, 182, 53.4), null);

  (lib.couteau = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D6C5D0")
      .s()
      .p(
        "AAvFpQguiggYjFQgSh3gHg+QgMhrAJhKQAAgGAEAAQAFAAABAHQARBCAJBwQAMCRAEAiIAbCzQASBxAJBCQABAFgEACIgBAAQgDAAgBgEg",
      );
    this.shape.setTransform(34.1574, 217.752, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#A18796")
      .s()
      .p("AgPAqQhHhhgohdIAIhCQArBfBFBuQAuBKBVB3IACAfQhYhig2hLg");
    this.shape_1.setTransform(16.991, 72.6749, 1.2499, 1.2499);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#A18796").s().p("AiRiOQgFhkAIhlQAsBZBKBhQA2BIBZBgQAJCBATDMQiqjhh6kFg");
    this.shape_2.setTransform(18.402, 102.611, 1.2499, 1.2499);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#8B7784")
      .s()
      .p(
        "AB2Q4QghhpgvkvQgijkgej/QiWkIgQlUQgNkDA+jiQBFj8A0BHQA5BRAWH2QAJDkA0ISQBFLEAJBoQABATgkAFIgNABQgZAAgFgRg",
      );
    this.shape_3.setTransform(24.3945, 137.1627, 1.2499, 1.2499);

    this.instance = new lib.Path_11();
    this.instance.setTransform(29.45, 144.75, 1.25, 1.25, 0, 0, 0, 19.5, 109.7);
    this.instance.alpha = 0.2188;
    this.instance.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
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
  }).prototype = getMCSymbolPrototype(lib.couteau, new cjs.Rectangle(0, 0, 53.9, 281.9), null);

  (lib.assiettee = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Calque_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E2E0E0")
      .s()
      .p(
        "AFTQoQihgNiRg6QiigyiAhaQighxhliuQhgimgejIQgdjGAojEQApjLBtiqQBvitCkh6QCjh7C8g1QBegZBlgDQjCAri0COQieB7iBC3Qh4CqgmC3QgoC9AzDBQAuC1BuCeQBtCeCaBtQBhBGB/AsQBbAgCaAgQAbAGBtANQBhAUAFAtQABAFgBALQhyAXhzAAQgsAAgsgDg",
      );
    this.shape.setTransform(106.2624, 152.7243, 1.2499, 1.2499);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F4F3F4")
      .s()
      .p(
        "AloSpQjag1i3iQQiviKh3jLQh2jIgrjmQgtjrAojmQApjqB4jLQB3jKCyiLQC6iREBgrQDmgmEGAwQDxArDbCKQDbCJCYDLQCeDTA2DzQA6EEhIEGQhwGZlZECQiiB5i8BAQi/BCjCAAQg2AFg1AAQiIAAh+gfg",
      );
    this.shape_1.setTransform(155.1002, 152.8963, 1.2499, 1.2499);

    this.instance = new lib.Path_12();
    this.instance.setTransform(160.2, 160.45, 1.25, 1.25, 0, 0, 0, 124.1, 122.3);
    this.instance.alpha = 0.2188;
    this.instance.compositeOperation = "multiply";

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.instance}, {t: this.shape_1}, {t: this.shape}]})
        .wait(1),
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.assiettee, new cjs.Rectangle(0, 0, 315.3, 313.4), null);

  // stage content:
  (lib.ANIMATION = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = {};
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [138];
    // timeline functions:
    this.frame_138 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(138).call(this.frame_138).wait(1));

    // brochette1
    this.instance = new lib.brochette();
    this.instance.setTransform(249.55, 109.75, 1, 1, 82.2792, 0, 0, 92.2, 108.7);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(95)
        .to({_off: false}, 0)
        .wait(4)
        .to({regX: 92.3, regY: 108.6, rotation: 10.0545, x: 276.5, y: 104.5}, 0)
        .wait(4)
        .to({regX: 92.4, scaleX: 0.9999, scaleY: 0.9999, rotation: 74.2471, x: 323.4, y: 158.15}, 0)
        .wait(4)
        .to({regY: 108.7, rotation: 35.5387, x: 323.1, y: 195.05}, 0)
        .wait(4)
        .to({rotation: 5.5389, y: 223.05}, 0)
        .wait(4)
        .to({rotation: 20.5384, x: 355.05, y: 215.3}, 0)
        .wait(4)
        .to({regX: 92.2, scaleX: 1, scaleY: 1, rotation: 0, x: 330.65, y: 242.2}, 0)
        .wait(20),
    );

    // tomate
    this.instance_1 = new lib.tomate();
    this.instance_1.setTransform(562.9, 40.2, 1, 1, 74.9998, 0, 0, 39.6, 31.4);
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(95)
        .to({_off: false}, 0)
        .wait(4)
        .to({regX: 39.7, rotation: 0, x: 555.45, y: 49.55}, 0)
        .wait(4)
        .to({rotation: 74.9998, x: 536.45, y: 78.65}, 0)
        .wait(4)
        .to({regY: 31.5, rotation: 0, x: 557.65, y: 103.25}, 0)
        .wait(4)
        .to(
          {
            regX: 39.8,
            regY: 31.4,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 59.9991,
            x: 519.75,
            y: 143.45,
          },
          0,
        )
        .wait(4)
        .to({rotation: 156.7271, x: 491.85, y: 183.85}, 0)
        .wait(4)
        .to({regX: 39.7, scaleX: 1, scaleY: 1, rotation: 0, x: 453.9, y: 213.65}, 0)
        .wait(20),
    );

    // broccoli2
    this.instance_2 = new lib.broccoli1();
    this.instance_2.setTransform(88.55, 425.95, 1, 1, 0, 0, 0, 37.1, 37.6);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(103)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: 74.9998, x: 122.6, y: 412.05}, 0)
        .wait(4)
        .to({regX: 37.2, rotation: 14.999, x: 145.5, y: 427.05}, 0)
        .wait(4)
        .to({regX: 37.3, scaleX: 0.9999, scaleY: 0.9999, rotation: 29.9987, x: 190.4, y: 439.55}, 0)
        .wait(4)
        .to({regX: 37.2, regY: 37.7, rotation: -29.9995, x: 248.5, y: 409.75}, 0)
        .wait(4)
        .to({regX: 37.3, regY: 37.6, rotation: 29.9996, x: 269.6, y: 364.5}, 0)
        .wait(4)
        .to({regX: 37.1, scaleX: 1, scaleY: 1, rotation: 0, x: 342.5, y: 330.5}, 0)
        .wait(12),
    );

    // broccoli1
    this.instance_3 = new lib.broccoli2();
    this.instance_3.setTransform(239.3, 455.95, 1, 1, 0, 0, 0, 25.9, 20.2);
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(103)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: -45, x: 257.35, y: 443.25}, 0)
        .wait(4)
        .to({rotation: 14.999, x: 277.05, y: 426.25}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: -59.9998, x: 299, y: 408.25}, 0)
        .wait(4)
        .to({rotation: 30.0002, x: 314.1, y: 390.35}, 0)
        .wait(4)
        .to({regX: 25.8, regY: 20.3, rotation: -45, x: 337.35, y: 403.2}, 0)
        .wait(4)
        .to({regX: 25.9, regY: 20.2, scaleX: 1, scaleY: 1, rotation: 0, x: 370.3, y: 386.65}, 0)
        .wait(12),
    );

    // fevegauche
    this.instance_4 = new lib.fevesgauche();
    this.instance_4.setTransform(233.4, 36.8, 1, 1, 45, 0, 0, 28.1, 30.4);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(95)
        .to({_off: false}, 0)
        .wait(4)
        .to({regY: 30.5, rotation: 0, x: 270.35, y: 43.45}, 0)
        .wait(4)
        .to({regX: 28.2, rotation: 59.9996, x: 259.45, y: 63.5}, 0)
        .wait(4)
        .to({regY: 30.6, rotation: -14.999, x: 276.5, y: 85.65}, 0)
        .wait(4)
        .to({rotation: 75.001, x: 276.55, y: 128.45}, 0)
        .wait(4)
        .to({rotation: 14.999, x: 309.35, y: 162.1}, 0)
        .wait(4)
        .to({regX: 28.1, regY: 30.5, rotation: 0, x: 310.35, y: 196}, 0)
        .wait(20),
    );

    // fevedroite
    this.instance_5 = new lib.fevedroite();
    this.instance_5.setTransform(622.9, 25.6, 1, 1, 0, 0, 0, 15, 14.7);
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(95)
        .to({_off: false}, 0)
        .wait(4)
        .to({regX: 15.1, rotation: 59.9996, x: 588.85, y: 70.7}, 0)
        .wait(4)
        .to({rotation: -45.0006, x: 515.95, y: 113.65}, 0)
        .wait(4)
        .to({rotation: -45.0006, x: 540.9, y: 153.55}, 0)
        .wait(4)
        .to({regY: 14.8, scaleX: 0.9999, scaleY: 0.9999, rotation: -0.0009, x: 528.9, y: 185.65}, 0)
        .wait(4)
        .to({regX: 15.2, rotation: 59.9986, x: 527.1, y: 220}, 0)
        .wait(4)
        .to({regX: 15, regY: 14.7, scaleX: 1, scaleY: 1, rotation: 0, x: 502.9, y: 226.6}, 0)
        .wait(20),
    );

    // mais
    this.instance_6 = new lib.mais();
    this.instance_6.setTransform(696.55, 276.75, 1, 1, -29.9992, 0, 0, 70.9, 77);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(111)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: 0, x: 676.2, y: 309.75}, 0)
        .wait(4)
        .to({rotation: 90, x: 527.2, y: 395.15}, 0)
        .wait(4)
        .to({regX: 71, rotation: 30, x: 452.3, y: 378.45}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: -37.2322, x: 449.8, y: 327.35}, 0)
        .wait(4)
        .to({regY: 77.1, rotation: 22.7678, x: 425.7, y: 326.95}, 0)
        .wait(4)
        .to({regX: 70.9, regY: 76.9, scaleX: 1, scaleY: 1, rotation: 0, x: 432.05, y: 311.4}, 0)
        .wait(4),
    );

    // concombre
    this.instance_7 = new lib.concombre();
    this.instance_7.setTransform(710.1, 450.1, 1, 1, 0, 0, 0, 30.7, 26.1);
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(111)
        .to({_off: false}, 0)
        .wait(4)
        .to({regX: 30.8, rotation: 59.9996, x: 690.05, y: 432.15}, 0)
        .wait(4)
        .to({rotation: 14.999, x: 613.6, y: 438.85}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: 59.9991, x: 561.05, y: 407.7}, 0)
        .wait(4)
        .to({rotation: 0, x: 544.6, y: 355.7}, 0)
        .wait(4)
        .to({regX: 30.9, rotation: 60.0005, x: 529.7, y: 301.8}, 0)
        .wait(4)
        .to({regX: 30.7, scaleX: 1, scaleY: 1, rotation: 0, x: 510.1, y: 278.35}, 0)
        .wait(4),
    );

    // gobelet
    this.instance_8 = new lib.gobelet();
    this.instance_8.setTransform(688.1, 54.75, 1, 1, 0, 0, 0, 61.8, 62.5);
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(64)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: 29.9992, x: 673.1, y: 60.8}, 0)
        .wait(4)
        .to({regX: 61.9, rotation: 14.9985, x: 688.25, y: 76.35}, 0)
        .wait(4)
        .to({regY: 62.4, scaleX: 0.9999, scaleY: 0.9999, rotation: 44.9988, x: 668.2, y: 77.45}, 0)
        .wait(4)
        .to({scaleX: 1, scaleY: 1, rotation: 14.999, x: 683.25, y: 88.9}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: 29.9987, x: 671.2, y: 106}, 0)
        .wait(4)
        .to({rotation: 14.9986, x: 671.25, y: 105.9}, 0)
        .wait(4)
        .to({regX: 61.8, regY: 62.5, scaleX: 1, scaleY: 1, rotation: 0, x: 673.3, y: 129.75}, 0)
        .wait(47),
    );

    // saucejaune
    this.instance_9 = new lib.saucejaune();
    this.instance_9.setTransform(157.15, 57.2, 1, 1, 0, 0, 0, 52.5, 52.1);
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(56)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: 29.9992, y: 76.2}, 0)
        .wait(4)
        .to({regX: 52.6, rotation: 59.9992, x: 154.75, y: 88.25}, 0)
        .wait(4)
        .to({rotation: 14.999, x: 188.4, y: 101.45}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: 0, x: 194.35, y: 113.3}, 0)
        .wait(4)
        .to({rotation: 29.9987, x: 184.35}, 0)
        .wait(4)
        .to({rotation: 59.9998, x: 165.35, y: 125.3}, 0)
        .wait(4)
        .to({regX: 52.5, scaleX: 1, scaleY: 1, rotation: 0, x: 141.15, y: 133.2}, 0)
        .wait(55),
    );

    // saucerouge
    this.instance_10 = new lib.saucerouge();
    this.instance_10.setTransform(58.9, 131.4, 1, 1, 0, 0, 0, 50.1, 50.8);
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(56)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: 29.9992, x: 53.85, y: 142.8}, 0)
        .wait(4)
        .to({regY: 50.9, rotation: 14.9985, x: 65.85, y: 147.85}, 0)
        .wait(4)
        .to({regX: 50.2, rotation: 74.9993, x: 76.75, y: 165.05}, 0)
        .wait(4)
        .to({regX: 50.3, regY: 50.8, scaleX: 0.9999, rotation: 89.9991, x: 66.8, y: 177.95}, 0)
        .wait(4)
        .to({scaleY: 0.9999, rotation: 59.9998, x: 74.8, y: 188}, 0)
        .wait(4)
        .to({regX: 50.4, regY: 50.7, rotation: 75.0005, x: 66.3, y: 209.9}, 0)
        .wait(4)
        .to({regX: 50.1, regY: 50.8, scaleX: 1, scaleY: 1, rotation: 0, x: 58.9, y: 225.4}, 0)
        .wait(55),
    );

    // cuillere
    this.instance_11 = new lib.cuillerecafe();
    this.instance_11.setTransform(270.15, 26.75, 1, 1, 8.4409, 0, 0, 91, 26.7);
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(36)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: -13.2835, x: 288.4, y: 46.95}, 0)
        .wait(4)
        .to({rotation: 8.4332, x: 320.25}, 0)
        .wait(4)
        .to({rotation: -13.5048, x: 347.3, y: 59.25}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: 16.4942, x: 376.9, y: 76.25}, 0)
        .wait(4)
        .to({regY: 26.8, scaleX: 1, scaleY: 1, rotation: -22.4716, x: 393.75, y: 95.45}, 0)
        .wait(4)
        .to(
          {
            regX: 91.1,
            regY: 26.7,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 7.5269,
            x: 394.35,
            y: 105.7,
          },
          0,
        )
        .wait(4)
        .to({regX: 91, scaleX: 1, scaleY: 1, rotation: 0, x: 395.65, y: 98.5}, 0)
        .wait(75),
    );

    // couteau
    this.instance_12 = new lib.couteau();
    this.instance_12.setTransform(717.15, 348.75, 1, 1, 10.4495, 0, 0, 26.9, 140.9);
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(36)
        .to({_off: false}, 0)
        .wait(4)
        .to({rotation: -13.4902, x: 682.1, y: 335.55}, 0)
        .wait(4)
        .to({regY: 141, rotation: 16.5086, x: 669.3, y: 335.15}, 0)
        .wait(4)
        .to({rotation: -13.4908, x: 643.3, y: 317.95}, 0)
        .wait(4)
        .to({regX: 27, scaleX: 0.9999, scaleY: 0.9999, rotation: 16.5072, x: 625.45, y: 301.95}, 0)
        .wait(4)
        .to({regX: 27.1, regY: 141.1, rotation: -7.4775, x: 612.5, y: 287}, 0)
        .wait(4)
        .to({rotation: 7.521, x: 589.55, y: 270.3}, 0)
        .wait(4)
        .to({regX: 26.9, regY: 140.9, scaleX: 1, scaleY: 1, rotation: 0, x: 587.15, y: 264.75}, 0)
        .wait(75),
    );

    // fouchette
    this.instance_13 = new lib.fourchette();
    this.instance_13.setTransform(107.65, 383.3, 1, 1, -52.9652, 0, 0, 27.8, 123.5);
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(36)
        .to({_off: false}, 0)
        .wait(4)
        .to({regY: 123.7, rotation: 7.0338, x: 117.7, y: 353}, 0)
        .wait(4)
        .to({rotation: -37.9655, x: 140.6, y: 326.55}, 0)
        .wait(4)
        .to({regX: 27.9, scaleX: 0.9999, scaleY: 0.9999, rotation: 22.0344, x: 166.3, y: 326.6}, 0)
        .wait(4)
        .to({regY: 123.8, rotation: -22.965, x: 177.8, y: 307.05}, 0)
        .wait(4)
        .to({rotation: 7.0342, x: 179.75, y: 291.7}, 0)
        .wait(4)
        .to({rotation: -30.4638, x: 210.7, y: 280.1}, 0)
        .wait(4)
        .to({regX: 27.8, regY: 123.5, scaleX: 1, scaleY: 1, rotation: 0, x: 218.95, y: 286.95}, 0)
        .wait(75),
    );

    // assiettevide
    this.instance_14 = new lib.assiettee();
    this.instance_14.setTransform(507.3, 583.95, 1, 1, -59.9996, 0, 0, 157.6, 156.7);
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(20)
        .to({_off: false}, 0)
        .wait(4)
        .to({regX: 157.7, regY: 156.8, rotation: -45.0006, x: 439.4, y: 553}, 0)
        .wait(4)
        .to({regX: 157.6, regY: 156.7, rotation: -165.001, x: 469.05, y: 515.1}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: -330.0013, x: 375.1, y: 480.2}, 0)
        .wait(4)
        .to({regY: 156.8, rotation: -444.042, x: 432.15, y: 414.3}, 0)
        .wait(4)
        .to({rotation: -302.2349, x: 407.55, y: 382.4}, 0)
        .wait(4)
        .to({regX: 157.7, rotation: -324.6995, x: 426.65, y: 362.45}, 0)
        .wait(4)
        .to({x: 394.9, y: 342.9}, 0)
        .wait(4)
        .to({scaleX: 0.9998, scaleY: 0.9998, rotation: -354.6989, x: 418.25, y: 326.95}, 0)
        .wait(4)
        .to({scaleX: 0.9999, scaleY: 0.9999, rotation: -324.6995, x: 380.9, y: 325.9}, 0)
        .wait(4)
        .to({scaleX: 0.9998, scaleY: 0.9998, rotation: -393.1995, x: 421, y: 314.9}, 0)
        .wait(4)
        .to({regY: 156.7, scaleX: 1, scaleY: 1, rotation: -360, x: 404.15, y: 279.05}, 0)
        .wait(75),
    );

    // Calque_17 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_0 = new cjs.Graphics().p(
      "AcEUEQgUgNgJgWQgHgSAQgWQAPgUAUgGQAUgGAWAPQAYARABAYQACAKgGANQgLAYgjALIgIACQgLAAgNgJg",
    );
    var mask_1_graphics_1 = new cjs.Graphics().p(
      "Ab3UIQgYgQgMgbQgJgVAUgaQATgZAZgHQAYgHAcASQAdAUACAeQACAMgHAPQgOAdgrAOIgKABQgNAAgRgKg",
    );
    var mask_1_graphics_2 = new cjs.Graphics().p(
      "AbRUUQgngYgRgpQgOghAfgoQAdglAogLQAlgLAsAcQAuAeACAuQAEASgLAXQgWAthEAVQgHACgIAAQgVAAgagQg",
    );
    var mask_1_graphics_3 = new cjs.Graphics().p(
      "AaSUoQg+glgdhBQgWg0Ayg+QAvg7BAgRQA8gRBFAsQBKAvAEBIQAFAcgRAkQgiBGhuAiQgLADgNAAQgiAAgpgZg",
    );
    var mask_1_graphics_4 = new cjs.Graphics().p(
      "AY5VEQhfg5grhhQgjhOBNheQBIhYBhgbQBcgZBqBCQBxBHAGBsQAIAsgaA1Qg1BrinAyQgRAFgTAAQg0AAhAgmg",
    );
    var mask_1_graphics_5 = new cjs.Graphics().p(
      "AXHVoQiJhRg/iMQgxhwBuiGQBoh/CMgnQCFgjCZBfQCjBlAJCbQAMA/gmBMQhMCZjyBIQgZAHgbAAQhLAAhcg2g",
    );
    var mask_1_graphics_6 = new cjs.Graphics().p(
      "AU7WUQi8hvhWjAQhEiZCYi4QCOiuDBg1QC3gxDSCDQDhCLAMDUQAQBWg0BoQhoDSlNBiQgiAKgmAAQhnAAh/hKg",
    );
    var mask_1_graphics_7 = new cjs.Graphics().p(
      "ASWXIQj5iShyj+QhajKDJjzQC9jkD/hGQDyhBEWCtQEpC3AREYQAVBxhFCJQiKEVm4CBQguANgyAAQiIAAiohhg",
    );
    var mask_1_graphics_8 = new cjs.Graphics().p(
      "APYYEQlAi7iRlEQh0kDECk2QDyklFHhZQE2hSFkDcQF8DqAWFmQAbCQhYCwQixFio0CmQg6ARhAAAQivAAjXh9g",
    );
    var mask_1_graphics_9 = new cjs.Graphics().p(
      "AMAZIQmPjqi2mTQiQlDFCmDQEulsGZhwQGDhnG8EUQHcEiAbG/QAhC0huDbQjdG6rADOQhJAVhQAAQjaAAkNibg",
    );
    var mask_1_graphics_10 = new cjs.Graphics().p(
      "AIPaUQnokdjdnuQixmKGJnZQFym9H0iIQHYh9IgFQQJFFjAiIiQAoDciGELQkPIctcD8QhaAahiAAQkKAAlJi+g",
    );
    var mask_1_graphics_11 = new cjs.Graphics().p(
      "AEFboQpKlXkLpQQjUnZHZo3QG7oXJZijQI4iXKNGUQK6GrAoKOQAxEIihFCQlFKHwKEvQhsAfh1AAQlBAAmKjkg",
    );
    var mask_1_graphics_12 = new cjs.Graphics().p(
      "AgedEQq2mVk8q9Qj7ovIvqfQIOp6LGjBQKgiyMGHeQM6H5AvMGQA6E5i/F8QmBL+zHFmQiAAliLAAQl7AAnSkOg",
    );
    var mask_1_graphics_13 = new cjs.Graphics().p(
      "AlbenQsrnZlxsyQkmqNKOsQQJmrkM+jhQMSjROIIvQPFJOA4OIQBDFtjfG8QnCN/2WGiQiVAriiAAQm8AAogk8g",
    );
    var mask_1_graphics_14 = new cjs.Graphics().p(
      "EgKxAgTQuqoimruxQlUrzL0uKQLHtXO/kEQOMjxQVKFQRcKqBAQVQBOGmkCIAQoIQK50HkQitAxi8AAQn/AAp2ltg",
    );
    var mask_1_graphics_15 = new cjs.Graphics().p(
      "EgQhAjgQwypynow6QmFtfNhwOQMtvSRMkqQQOkTStLiQT9MMBJStQBaHikoJLQpTSf9kIpQjFA5jXAAQpKAArRmhg",
    );
    var mask_1_graphics_16 = new cjs.Graphics().p(
      "EgWqAoSQzDrGorzLQm5vVPWyZQObxWThlTQSak4VONGQWqN1BUVOQBmIklQKaUgKkAU/ghjAJ0QjgBAj1AAQqYAAsznag",
    );
    var mask_1_graphics_17 = new cjs.Graphics().p(
      "EgbfAtYQ1dsfpx1nQnxxRRT0uQQQzjV+l9QUwlgX7OwQZiPlBeX6QByJpl6LuUgL5AXpgl0ALEQj8BIkTAAQruAAuboWg",
    );
    var mask_1_graphics_18 = new cjs.Graphics().p(
      "EgexAyyQ4Bt+q84MQoszUTX3NQSM14YmmqQXPmLaxQhQclRdBpawQCBKymnNIUgNVAadgqUAMYQkbBQkzAAQtIAAwJpVg",
    );
    var mask_1_graphics_19 = new cjs.Graphics().p(
      "EgiPA4gQ6uvjsL66Qpr1gVj5zQUP4WbYnaQZ2m3dzSYQfzTaB0dxQCPMAnWOmUgO1AdcgvGANxQk6BZlWAAQumAAx+qYg",
    );

    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({graphics: mask_1_graphics_0, x: 187.8446, y: 129.2635})
        .wait(1)
        .to({graphics: mask_1_graphics_1, x: 188.5102, y: 129.8448})
        .wait(1)
        .to({graphics: mask_1_graphics_2, x: 190.5071, y: 131.5885})
        .wait(1)
        .to({graphics: mask_1_graphics_3, x: 193.8351, y: 134.4948})
        .wait(1)
        .to({graphics: mask_1_graphics_4, x: 198.4944, y: 138.5635})
        .wait(1)
        .to({graphics: mask_1_graphics_5, x: 204.4849, y: 143.7947})
        .wait(1)
        .to({graphics: mask_1_graphics_6, x: 211.8066, y: 150.1885})
        .wait(1)
        .to({graphics: mask_1_graphics_7, x: 220.4596, y: 157.7447})
        .wait(1)
        .to({graphics: mask_1_graphics_8, x: 230.4437, y: 166.4634})
        .wait(1)
        .to({graphics: mask_1_graphics_9, x: 241.7591, y: 176.3447})
        .wait(1)
        .to({graphics: mask_1_graphics_10, x: 254.4057, y: 187.3884})
        .wait(1)
        .to({graphics: mask_1_graphics_11, x: 268.3836, y: 199.5946})
        .wait(1)
        .to({graphics: mask_1_graphics_12, x: 283.6926, y: 212.9633})
        .wait(1)
        .to({graphics: mask_1_graphics_13, x: 300.3329, y: 227.4946})
        .wait(1)
        .to({graphics: mask_1_graphics_14, x: 318.3044, y: 243.1883})
        .wait(1)
        .to({graphics: mask_1_graphics_15, x: 337.6071, y: 251.2124})
        .wait(1)
        .to({graphics: mask_1_graphics_16, x: 358.241, y: 250.9711})
        .wait(1)
        .to({graphics: mask_1_graphics_17, x: 369.1848, y: 250.7143})
        .wait(1)
        .to({graphics: mask_1_graphics_18, x: 369.0867, y: 250.442})
        .wait(1)
        .to({graphics: mask_1_graphics_19, x: 369.3841, y: 252.0774})
        .wait(120),
    );

    // Calque_1
    this.instance_15 = new lib.ClipGroup();
    this.instance_15.setTransform(345.95, 243.4, 1.35, 1.35, 0, 0, 0, 403.4, 201.7);

    var maskedShapeInstanceList = [this.instance_15];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(139));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,0,0,0)")
      .ss(1, 1, 1, 3, true)
      .p("Eg8JgnDMB4TAAAMAAABOHMh4TAAAg");
    this.shape.setTransform(375, 240);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("transparent").s().p("Eg8JAnEMAAAhOHMB4TAAAMAAABOHg");
    this.shape_1.setTransform(375, 240);

    maskedShapeInstanceList = [this.shape, this.shape_1];

    for (
      shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({state: [{t: this.shape_1}, {t: this.shape}]})
        .wait(139),
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(257.1, 211.1, 599.6, 583.9);
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
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["D5BF51ADC3CB5E4BAF06476BB5B4681B"] = {
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
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };
})(window.createjs, (window.AdobeAn = window.AdobeAn || {}));
var exportRoot;
export default null;
