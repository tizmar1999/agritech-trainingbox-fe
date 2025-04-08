import React from "react"
import Camera from "../components/Camera"
import { useEffect } from "react"
import { useStreamingCamera } from "../controllers/camera/camera.controller"


export default function Home() {

      const {
        streamedImage,
        colorCount,
        qualityCount,
        sizeCount,
        totalCount
      } = useStreamingCamera()


      return (
          <div className="w-screen h-screen flex flex-row bg-fuchsia-300">
              <div className="flex flex-row w-full h-full justify-start items-center">
                  <Camera streamedImage={streamedImage} className='w-full h-full bg-green-600' />
                  <div className="grid grid-cols-2 w-[700px] h-full bg-slate-300">
                      {
                          streamedImage &&
                          <>
                              <div>{colorCount.Giallo}</div>
                              <div>{qualityCount.Marcie}</div>
                              <div>{sizeCount.Piccole}</div>
                              <div>{totalCount}</div>
                          </>
                      }
                  </div>
              </div>
          </div>
      )
}