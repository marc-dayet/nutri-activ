import React, {FC, useEffect, useRef} from "react"
import {useToggle, useBehaviorSubject} from "react-captain"

import {currStep$} from "../context"

import cs from "./intro.module.scss"

type PageIntroProps = {
  subtitle: string
  animation: string
}

const PageIntro: FC<PageIntroProps> = props => {
  const {subtitle, animation} = props
  const [{module}] = useBehaviorSubject(currStep$)

  return (
    <>
      <h1 className={cs.title}>Module {module}</h1>
      <h2 className={cs.subtitle}>{subtitle}</h2>
      <Animation name="ANIMATION" composition={animation} />
    </>
  )
}

type AnimationProps = {
  name: string
  composition: string
}

const Animation: FC<AnimationProps> = props => {
  const container = useRef<HTMLDivElement | null>(null)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const lib = useRef<any>(null)
  const stage = useRef<any>(null)
  const [isReady, setReady] = useToggle()

  useEffect(() => {
    if (!isReady && container.current && canvas.current) {
      const {createjs, AdobeAn} = window as any
      const comp = AdobeAn.getComposition(props.composition)
      lib.current = comp.getLibrary()
      createjs.MotionGuidePlugin.install()
      const loader = new createjs.LoadQueue(false)

      loader.addEventListener("fileload", (evt: any) => {
        let images = comp.getImages()
        if (evt && evt.item.type === "image") {
          images[evt.item.id] = evt.result
        }
      })

      loader.addEventListener("complete", (evt: any) => {
        lib.current = comp.getLibrary()
        const ss = comp.getSpriteSheet()
        const queue = evt.target
        const ssMetadata = lib.current.ssMetadata

        for (let i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            images: [queue.getResult(ssMetadata[i].name)],
            frames: ssMetadata[i].frames,
          })
        }

        stage.current = new lib.current.Stage(canvas.current)
        const exportRoot = new lib.current[props.name]()
        window.AdobeAn.compositionLoaded(lib.current.properties.id)
        stage.current.addChild(exportRoot)
        window.createjs.Ticker.framerate = lib.current.properties.fps
        window.createjs.Ticker.addEventListener("tick", stage.current)

        setReady(true)
      })

      loader.loadManifest(lib.current.properties.manifest)
    }
  }, [isReady, props.composition, props.name, setReady])

  useEffect(() => {
    function resize() {
      if (container.current && canvas.current) {
        const {width: animW, height: animH} = lib.current.properties
        const animR = animW / animH

        const containerW = container.current.offsetWidth
        const containerH = container.current.offsetHeight
        const containerR = containerW / containerH

        if (animR >= containerR) {
          canvas.current.width = containerW
          canvas.current.height = containerW / animR
          stage.current.scaleX = canvas.current.height / animH
          stage.current.scaleY = canvas.current.height / animH
        } else {
          canvas.current.height = containerH
          canvas.current.width = containerH / animR
          stage.current.scaleX = canvas.current.width / animW
          stage.current.scaleY = canvas.current.width / animW
        }

        stage.current.tickOnUpdate = false
        stage.current.update()
        stage.current.tickOnUpdate = true
      }
    }

    if (isReady) {
      resize()
      window.addEventListener("resize", resize)

      return () => {
        window.removeEventListener("resize", resize)
        window.createjs.Ticker.removeEventListener("tick", stage.current)
        window.createjs.Ticker.reset()
      }
    }
  }, [isReady])

  return (
    <div ref={container} className={cs.animation}>
      <canvas ref={canvas} />
    </div>
  )
}

export default PageIntro
