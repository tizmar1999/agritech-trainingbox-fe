import rtlApiClient from '../../../api/rtlApiClient.js'

export const getAiFruitDetection = async () => {
    const aiFruitDetection = await rtlApiClient.postData(
        'ai_fruit_detection',
        {
            image: 'due.jpg'
        }
    )
    return aiFruitDetection
}
