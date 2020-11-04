import React, {FC, useEffect, useRef, useState} from "react";
import cn from "classnames";

import cs from "./animation.module.scss";

type AnimationProps = {
  name: string;
  composition: string;
  fullscreen?: boolean;
};

const Animation: FC<AnimationProps> = props => {
  const container = useRef<HTMLDivElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const lib = useRef<any>(null);
  const stage = useRef<any>(null);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (!isReady && container.current && canvas.current) {
      const {createjs, AdobeAn} = window as any;
      const comp = AdobeAn.getComposition(props.composition);
      lib.current = comp.getLibrary();
      createjs.MotionGuidePlugin.install();

      const buildStage = (evt?: any) => {
        lib.current = comp.getLibrary();
        const ss = comp.getSpriteSheet();
        const queue = evt ? evt.target : null;
        const ssMetadata = lib.current.ssMetadata;

        for (let i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            images: queue ? [queue.getResult(ssMetadata[i].name)] : [],
            frames: ssMetadata[i].frames,
          });
        }

        stage.current = new lib.current.Stage(canvas.current);
        const exportRoot = new lib.current[props.name]();
        window.AdobeAn.compositionLoaded(lib.current.properties.id);
        stage.current.addChild(exportRoot);
        window.createjs.Ticker.framerate = lib.current.properties.fps;

        if (!matchMedia("screen and (max-width: 31em)").matches) {
          window.createjs.Ticker.addEventListener("tick", stage.current);
        }

        setReady(true);
      };

      if (lib.current.properties.manifest.length > 0) {
        const loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", (evt: any) => {
          let images = comp.getImages();
          if (evt && evt.item.type === "image") {
            images[evt.item.id] = evt.result;
          }
        });
        loader.addEventListener("complete", buildStage);
        loader.loadManifest(lib.current.properties.manifest);
      } else {
        buildStage();
      }
    }
  }, [isReady, props.composition, props.name]);

  useEffect(() => {
    function resize() {
      if (container.current && canvas.current) {
        const {width: animW, height: animH} = lib.current.properties;
        const animR = animW / animH;

        const containerW = container.current.offsetWidth;
        const containerH = container.current.offsetHeight;
        const containerR = containerW / containerH;

        if (animR >= containerR) {
          if (props.fullscreen) {
            canvas.current.width = containerH * animR;
            canvas.current.height = containerH;
          } else {
            canvas.current.width = containerW;
            canvas.current.height = containerW / animR;
          }
          stage.current.scaleX = canvas.current.height / animH;
          stage.current.scaleY = canvas.current.height / animH;
        } else {
          if (props.fullscreen) {
            canvas.current.width = containerW;
            canvas.current.height = containerW * animR;
          } else {
            canvas.current.height = containerH;
            canvas.current.width = containerH / animR;
          }
          stage.current.scaleX = canvas.current.width / animW;
          stage.current.scaleY = canvas.current.width / animW;
        }

        stage.current.tickOnUpdate = false;
        stage.current.update();
        stage.current.tickOnUpdate = true;
      }
    }

    if (isReady) {
      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
        window.createjs.Ticker.removeEventListener("tick", stage.current);
        window.createjs.Ticker.reset();
      };
    }
  }, [isReady, props.fullscreen]);

  return (
    <div ref={container} className={cn(cs.animation, {[cs.fullscreen]: props.fullscreen})}>
      <canvas ref={canvas} />
      {props.children}
    </div>
  );
};

export default Animation;
