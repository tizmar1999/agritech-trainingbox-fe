import { XAxis, YAxis, Tooltip, Bar, BarChart, ResponsiveContainer } from "recharts";

export default function DataVisualization({ data }) {
    const prepareChartData = () => {
        return data.map(item => ({
            name: `Image ${item.id}`,
            total: item.total_objects,
        }));
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Oggetti per immagine</h2>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={prepareChartData()}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#D3C7E4" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}