import { getMockStreamingImage } from "../../../api/aiVisionClient"

export const streamImage = (setStreamedImage) => {
    const stream = () => {
        const mockStreamedImage = getMockStreamingImage()
        setStreamedImage(mockStreamedImage)
    }

    setInterval(stream, 500);
}