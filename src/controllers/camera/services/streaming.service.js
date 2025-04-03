import { getMockStreamingImage } from "../../cameraClient";

export const streamImage = (setStreamedImage) => {
    const stream = () => {
        const mockStreamedImage = getMockStreamingImage()
        setStreamedImage(mockStreamedImage)
    }

    setInterval(stream, 500);
}