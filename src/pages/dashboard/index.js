import { useState, useEffect } from 'react';
import TotalObjectsCard from '../../components/Cards/TotalObjectsCard';
import CountSummaryCard from '../../components/Cards/CountSummaryCard';
import DataVisualization from '../../components/Cards/DataVisualization';
import ImageTable from '../../components/ImageTable';
import { Database } from 'lucide-react';
import rtlApiClientInstance from '../../api/rtlApiClient';

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllAnnotatedImages = async () => {
            const allAnnotatedImages = await rtlApiClientInstance.getData('get_all_annotated_images')
            console.log(allAnnotatedImages)
            setData(allAnnotatedImages)
        }
        getAllAnnotatedImages()
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50 p-6">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <TotalObjectsCard data={data} />
                <CountSummaryCard
                    title="Size Distribution"
                    data={data}
                    countType="size_counts"
                    colorClass="bg-blue-100"
                    iconColor="text-blue-500"
                />
                <CountSummaryCard
                    title="Color Distribution"
                    data={data}
                    countType="color_counts"
                    colorClass="bg-green-100"
                    iconColor="text-green-500"
                />
                <CountSummaryCard
                    title="Quality Distribution"
                    data={data}
                    countType="quality_counts"
                    colorClass="bg-purple-100"
                    iconColor="text-purple-500"
                />
            </div>
            {/* <div className="mt-8">
                <DataVisualization data={data} />
            </div>
            <div className="mt-8">
                <ImageTable data={data} />
            </div> */}
        </div>
    );
}

// Header Component
function Header() {
    return (
        <div className="flex items-center">
            <Database size={24} className="text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Saclark - RethinkLine: Training AI</h1>
        </div>
    );
}