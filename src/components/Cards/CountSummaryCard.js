export default function CountSummaryCard({ title, data = [], countType, colorClass, iconColor }) {
    const getCounts = () => {
        const counts = {};

        (Array.isArray(data) ? data : []).forEach(item => {
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
        <div className={`rounded-xl shadow p-6 font-ptsans text-rtlblue-dark ${colorClass}`}>
            <h1 className="text-lg font-medium text-gray-700">{title}</h1>
            {Object.keys(counts).length === 0 ? (
                <p className="text-sm text-gray-500">Nessun dato disponibile</p>
            ) : (
                <div className="mt-4 flex flex-col gap-2">
                    {Object.entries(counts).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                            <span className="text-rtlblue-500">{key}</span>
                            <span className={`font-bold font-quantico text-primary text-xl ${iconColor}`}>{value}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
