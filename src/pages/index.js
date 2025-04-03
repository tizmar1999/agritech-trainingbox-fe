import React from "react"
import { useStreamingCamera } from "../controllers/camera/camera.controller"

export default function Camera() {

    const {streamedImage} = useStreamingCamera()

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
            <div className="w-[1000px] h-[700px] bg-black ">
                <div className="w-full h-full object-fill border-8 border-green-500">
                    {
                        streamedImage &&
                        <img src={streamedImage} className="w-full h-full object-fill" alt="streamed-image"/>
                    }
                </div>
                <div className="text-green-500 font-bold text-xl animate-pulse">
                    Streaming attivo
                </div>
            </div>
        </div>
    )
}