import { useEffect, useState } from "react";
import { getAiFruitDetection } from "./services/streaming.service";

export const useStreamingCamera = () => {
    const [streamedImage, setStreamedImage] = useState(null);
    const [colorCount, setColorCount] = useState(null);
    const [qualityCount, setQualityCount] = useState(null);
    const [sizeCount, setSizeCount] = useState(null);
    const [totalCount, setTotalCount] = useState(null);

    useEffect(() => {
        const performAiFruitDetection = async () => {
            try {
                const aiFruitDetection = await getAiFruitDetection();
                setStreamedImage(aiFruitDetection.annotated_img_str);
                setColorCount(aiFruitDetection.color_counts);
                setQualityCount(aiFruitDetection.quality_counts);
                setSizeCount(aiFruitDetection.size_counts);
                setTotalCount(aiFruitDetection.total_count);
            } catch (err) {
                console.error("Error fetching AI fruit detection:", err);
            }
        };

        performAiFruitDetection();
    }, []);

    return {
        streamedImage,
        colorCount,
        qualityCount,
        sizeCount,
        totalCount,
    };
};