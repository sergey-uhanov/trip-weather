import { key } from './KeyAPI'
async function WeatherForecast(city, startTravel, endTravel) {
	const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startTravel}/${endTravel}?unitGroup=metric&include=days&key=${key}&contentType=json`

	try {
		const response = await fetch(api)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const data = await response.json()

		return data
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error)
		throw error
	}
}
export default WeatherForecast
