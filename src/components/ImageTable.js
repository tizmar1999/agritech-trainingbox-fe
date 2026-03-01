import { useNavigate } from "react-router-dom";

export default function ImageTable({ data = [] }) {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/analysis/${id}`);
    };


    return (
        <div className="bg-white rounded-xl shadow overflow-hidden">
            <h2 className="text-lg font-medium text-gray-700 p-6 pb-4">Ultime immagini scattate</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs tracking-wider">Preview</th>
                            <th className="px-6 py-3 text-left text-xs tracking-wider">Numero scatto</th>
                            <th className="px-6 py-3 text-left text-xs tracking-wider">Totale</th>
                            <th className="px-6 py-3 text-left text-xs tracking-wider">Descrizione</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-sm text-gray-500">
                                    Nessuna immagine disponibile al momento.
                                </td>
                            </tr>
                        )}
                        {data.map((item) => {
                            const description = item?.detection_summary
                                ? item.detection_summary.replace("Analizza l'immagine fornita:", '')
                                : '—';
                            return (
                                <tr
                                    key={item.id}
                                    className="cursor-pointer hover:bg-gray-100 transition max-w-[80px]"
                                    onClick={() => handleRowClick(item.id)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                            <img
                                                src={`data:image/png;base64,${item.annotated_img_str}`}
                                                alt="fruit"
                                                className="w-full h-full rounded object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.total_objects ?? '—'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {description}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
