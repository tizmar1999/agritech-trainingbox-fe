export default function CustomLoadBar({progress = 50}) {
    const normalizedProgress = Math.min(100, Math.max(0, progress ?? 0));
    return (
        <div className="flex flex-col w-full max-w-xl items-center">
            <div className="w-full h-[24px] bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                <div
                    className="flex flex-row items-center justify-end relative h-full bg-primary transition-all duration-75 ease-linear"
                    style={{ width: `${normalizedProgress}%` }}
                >
                    {
                        normalizedProgress > 20 && (
                            <p className="text-sm text-white font-quantico top-2 right-2 pl-2">{`${Math.round(normalizedProgress)}%`}</p>
                        )
                    }
                </div>
            </div>
            <div className="w-full flex flex-row justify-between">
                <p className="text-md text-rtlblue-dark font-quantico text-right mt-1">0</p>
                <p className="text-md text-rtlblue-dark font-quantico text-right mt-1">2000</p>
            </div>
        </div>
    );
}
