import React from "react"
import Camera from "../components/Camera"
import { useState } from "react"
import { takePicture } from "../api/blaserClient"


export default function Home() {

    const [pictureTaken, setPictureTaken] = useState(true)

    const onPressButton = () => {
        setPictureTaken(prev => !prev);

        takePicture()
            .then((response) => {
                console.log("Image taken successfully:", response);
            })
            .catch((error) => {
                console.error("Error taking picture:", error);
            })
            .finally(() => {
                setPictureTaken(prev => !prev); // Set back to "ready"
            });
    };


    return (
        <div className="w-screen h-screen flex flex-row bg-fuchsia-300">
            <div className="flex flex-row w-full h-full justify-start items-center">
                <Camera className='w-full h-full bg-green-600' />
                <div className="grid grid-cols-2 w-[700px] h-full bg-slate-300">
                    
                </div>
            </div>
        </div>
    )
}