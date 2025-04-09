import { useState, useEffect } from 'react';
import TotalObjectsCard from '../../components/Cards/TotalObjectsCard';
import CountSummaryCard from '../../components/Cards/CountSummaryCard';
import DataVisualization from '../../components/Cards/DataVisualization';
import ImageTable from '../../components/ImageTable';
import { Database } from 'lucide-react';

// Sample data based on your schema
const mockData = [
    {
        id: 1,
        imageId: "img_001",
        original_img_str: "fruit_basket_01.jpg",
        annotated_img_str: "fruit_basket_01_annotated.jpg",
        total_objects: 12,
        freq: "medium",
        most_freq: "apple",
        pie_chart_div: "<div>chart</div>",
        detection_summary: "4 apples, 3 oranges, 5 bananas",
        size_counts: { small: 3, medium: 7, large: 2 },
        color_counts: { red: 5, yellow: 5, orange: 2 },
        quality_counts: { good: 9, average: 2, poor: 1 }
    },
    {
        id: 2,
        imageId: "img_002",
        original_img_str: "fruit_bowl_02.jpg",
        annotated_img_str: "fruit_bowl_02_annotated.jpg",
        total_objects: 8,
        freq: "high",
        most_freq: "grape",
        pie_chart_div: "<div>chart</div>",
        detection_summary: "2 apples, 6 grape clusters",
        size_counts: { small: 6, medium: 2, large: 0 },
        color_counts: { red: 2, green: 6, purple: 0 },
        quality_counts: { good: 7, average: 1, poor: 0 }
    },
    {
        id: 3,
        imageId: "img_003",
        original_img_str: "fruit_plate_03.jpg",
        annotated_img_str: "fruit_plate_03_annotated.jpg",
        total_objects: 15,
        freq: "low",
        most_freq: "strawberry",
        pie_chart_div: "<div>chart</div>",
        detection_summary: "8 strawberries, 4 blueberries, 3 raspberries",
        size_counts: { small: 15, medium: 0, large: 0 },
        color_counts: { red: 11, blue: 4, purple: 0 },
        quality_counts: { good: 12, average: 2, poor: 1 }
    }
];

// Main Dashboard Component
export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // In a real app, you'd fetch from your database
        setData(mockData);
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
            <div className="mt-8">
                <DataVisualization data={data} />
            </div>
            <div className="mt-8">
                <ImageTable data={data} />
            </div>
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