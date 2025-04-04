import { useState } from "react";
import { streamImage } from "./services/streaming.service";

export const useStreamingCamera = () => {
    const [streamedImage, setStreamedImage] = useState(null);

    streamImage(setStreamedImage)

    return {
        streamedImage
    };
};