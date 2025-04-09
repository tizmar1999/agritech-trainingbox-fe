export default function TotalObjectsCard({ data }) {
    const totalObjects = data.reduce((sum, item) => sum + item.total_objects, 0);
    return (
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <h2 className="text-lg font-medium text-gray-600">Total Objects</h2>
            <span className="text-4xl font-bold text-blue-600 mt-2">{totalObjects}</span>
            <p className="text-sm text-gray-500 mt-2">Across {data.length} images</p>
        </div>
    );
}