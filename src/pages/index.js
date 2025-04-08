import React from "react"
import Camera from "../components/Camera"
import { useStreamingCamera } from "../controllers/camera/camera.controller"
import Dashboard from "../components/Dashboard"


export default function Home() {

      const {
        annotatedImage,
        colorCount,
        qualityCount,
        sizeCount,
        totalCount
      } = useStreamingCamera()


      return (
          <div className="w-screen h-screen flex flex-row">
              <div className="flex flex-row w-full h-full justify-start items-center">
                  <Camera streamedImage={annotatedImage} className='w-full h-full bg-green-600' />
                  <Dashboard
                      total_count={totalCount}
                      color_counts={colorCount}
                      quality_counts={qualityCount}
                      size_counts={sizeCount}
                  />
              </div>
          </div>
      )
}