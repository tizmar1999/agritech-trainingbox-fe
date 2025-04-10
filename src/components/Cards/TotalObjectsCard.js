import CustomLoadBar from "../CustomLoadBar";

export default function TotalObjectsCard({ data }) {
    const totalObjects = data.reduce((sum, item) => sum + item.total_objects, 0);
    return (
        <div className="w-[380px] h-[200px] border border-gray-200 bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <div className="w-full h-full p-4 flex flex-col space-y-2">
                <h2 className="text-2xl font-quantico font-bold text-primary">{`${totalObjects} Frutti totali`}</h2>
                <h1 className="text-lg font-quantico">{`su ${data.length} foto`}</h1>
                <CustomLoadBar progress={totalObjects / 2000 * 100} />
            </div>
        </div>
    );
}