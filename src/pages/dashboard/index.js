import { useEffect, useState } from 'react';
import TotalObjectsCard from '../../components/Cards/TotalObjectsCard';
import CountSummaryCard from '../../components/Cards/CountSummaryCard';
import DataVisualization from '../../components/Cards/DataVisualization';
import ImageTable from '../../components/ImageTable';
import rtlApiClientInstance from '../../api/rtlApiClient';
import { useAnnotatedImages } from '../../providers/AnnotatedImagesProvider';

export default function Dashboard() {
    const { state, dispatch } = useAnnotatedImages();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllAnnotatedImages = async () => {
            try {
                const allAnnotatedImages = await rtlApiClientInstance.getData('get_all_annotated_images');
                dispatch({ type: 'SET_ANNOTATED', payload: allAnnotatedImages });
                setError(null);
            } catch (err) {
                console.error('Error fetching annotated images', err);
                setError('Impossibile recuperare i dati al momento.');
            } finally {
                setLoading(false);
            }
        };
    
        // Call the function immediately
        getAllAnnotatedImages();
    
        // Set up an interval to call the function every 2 minutes
        const intervalId = setInterval(() => {
            getAllAnnotatedImages();
        }, 120 * 1000); // 2 minutes in milliseconds
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50 p-6">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">Saclark - RethinkLine: Training AI</h1>
            </div>

            {loading && (
                <div className="mt-6 text-gray-600">Caricamento dati in corso...</div>
            )}

            {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded border border-red-200">
                    {error}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <TotalObjectsCard data={state.data} />
                <CountSummaryCard
                    title="Dimensioni"
                    data={state.data}
                    countType="size_counts"
                    colorClass="bg-rtlblue-100"
                    iconColor="text-rtlblue-500"
                />
                <CountSummaryCard
                    title="Colori"
                    data={state.data}
                    countType="color_counts"
                    colorClass="bg-rtlblue-100"
                    iconColor="text-green-500"
                />
                <CountSummaryCard
                    title="Qualità"
                    data={state.data}
                    countType="quality_counts"
                    colorClass="bg-purple-100"
                    iconColor="text-purple-500"
                />
            </div>
            {/* <div className="mt-8">
                <DataVisualization data={state.data} />
            </div> */}
            <div className="mt-8">
                <ImageTable data={state.data} />
            </div>
        </div>
    );
}
