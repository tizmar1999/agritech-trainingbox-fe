import React from "react"
import Camera from "../components/Camera"

export default function Home() {

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