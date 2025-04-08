import { useEffect, useState } from "react";
import { getAiFruitDetection } from "./services/streaming.service";

export const useStreamingCamera = () => {
    const [annotatedImage, setAnnotatedImage] = useState(null);
    const [colorCount, setColorCount] = useState(null);
    const [qualityCount, setQualityCount] = useState(null);
    const [sizeCount, setSizeCount] = useState(null);
    const [totalCount, setTotalCount] = useState(null);

    useEffect(() => {
        const performAiFruitDetection = async () => {
            try {
                const aiFruitDetection = await getAiFruitDetection();
                setAnnotatedImage('data:image/png;base64,'+aiFruitDetection.annotated_img_str);
                setColorCount(aiFruitDetection.color_counts);
                setQualityCount(aiFruitDetection.quality_counts);
                setSizeCount(aiFruitDetection.size_counts);
                setTotalCount(aiFruitDetection.total_objects);
            } catch (err) {
                console.error("Error fetching AI fruit detection:", err);
            }
        };

        performAiFruitDetection();
    }, []);

    return {
        annotatedImage,
        colorCount,
        qualityCount,
        sizeCount,
        totalCount,
    };
};