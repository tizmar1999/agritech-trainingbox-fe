import { useEffect, useReducer } from 'react';
import TotalObjectsCard from '../../components/Cards/TotalObjectsCard';
import CountSummaryCard from '../../components/Cards/CountSummaryCard';
import DataVisualization from '../../components/Cards/DataVisualization';
import ImageTable from '../../components/ImageTable';
import { Database } from 'lucide-react';
import rtlApiClientInstance from '../../api/rtlApiClient';
import CustomLoadBar from '../../components/CustomLoadBar';
import { useAnnotatedImages } from '../../providers/AnnotatedImagesProvider';

export default function Dashboard() {
    const { state, dispatch } = useAnnotatedImages();

    useEffect(() => {
        const getAllAnnotatedImages = async () => {
            const allAnnotatedImages = await rtlApiClientInstance.getData('get_all_annotated_images');
            console.log(allAnnotatedImages);
            dispatch({ type: 'SET_ANNOTATED', payload: allAnnotatedImages });
        };
        getAllAnnotatedImages();
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50 p-6">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <TotalObjectsCard data={state.data} />
                <CountSummaryCard
                    title="Dimensioni"
                    data={state.data}
                    countType="size_counts"
                    colorClass="bg-blue-100"
                    iconColor="text-blue-500"
                />
                <CountSummaryCard
                    title="Colori"
                    data={state.data}
                    countType="color_counts"
                    colorClass="bg-green-100"
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
            <div className="mt-8">
                <div className='text-2xl font-bold'>
                    Progresso del training:
                </div>
                <CustomLoadBar progress={state.data.reduce((sum, item) => sum + item.total_objects, 0)/800*100} />
            </div>
            <div className="mt-8">
                <DataVisualization data={state.data} />
            </div>
            <div className="mt-8">
                <ImageTable data={state.data} />
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="flex items-center">
            <Database size={24} className="text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Saclark - RethinkLine: Training AI</h1>
        </div>
    );
}