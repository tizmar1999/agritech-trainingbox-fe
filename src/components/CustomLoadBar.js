import { useEffect, useState } from "react";

export default function CustomLoadBar({progress}) {
    return (
        <div className="flex flex-row w-full max-w-xl mt-10 space-x-4 items-center">
            <div className="w-full h-8 bg-gray-200 rounded-sm overflow-hidden shadow-inner">
                <div
                    className="h-full bg-blue-600 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-3xl text-blue-600 font-bold text-right mt-1">{Number(progress).toFixed(0)}%</p>
        </div>
    );
}
