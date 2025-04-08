import rtlApiClient from '../../../api/rtlApiClient.js'

export const streamImage = async (setStreamedImage) => {
    const getAnnotatedImage = await rtlApiClient.postData(
        '/api/v1/rtl-services/ai_fruit_detection',
        {
            image: 'capture_23_20250408_074102.jpg'
        }
    )
    console.log(getAnnotatedImage)
}