import React from "react"
import { useState } from "react"
import { takePicture } from "../api/blaserClient"

export default function Camera() {

    const [pictureTaken, setPictureTaken] = useState(true)
    

    const onPressButton = () => {
        console.log("Button pressed")
        setPictureTaken(!pictureTaken)
        takePicture()
            .then((response) => {
                console.log("Image taken successfully:", response);
            })
            .catch((error) => {
                console.error("Error taking picture:", error);
            })
            .finally(() => {
                setPictureTaken(!pictureTaken)
            })
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
            <button onClick={onPressButton} className="w-[600px] h-[300px] rounded-2xl bg-slate-800 text-white font-bold">
                {pictureTaken ? "Scatta foto" : "Attendi..."}
            </button>
        </div>
    )
}