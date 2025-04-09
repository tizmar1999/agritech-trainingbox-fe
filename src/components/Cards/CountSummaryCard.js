export default function CountSummaryCard({ title, data, countType, colorClass, iconColor }) {
    const getCounts = () => {
        const counts = {};

        data.forEach(item => {
            const countObject = item[countType];
            if (countObject) {
                Object.entries(countObject).forEach(([key, value]) => {
                    counts[key] = (counts[key] || 0) + value;
                });
            }
        });

        return counts;
    };

    const counts = getCounts();

    return (
        <div className={`rounded-xl shadow p-6 ${colorClass}`}>
            <h2 className="text-lg font-medium text-gray-700">{title}</h2>
            <div className="mt-4 flex flex-col gap-2">
                {Object.entries(counts).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                        <span className="capitalize text-gray-700">{key}</span>
                        <span className={`font-bold ${iconColor}`}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}