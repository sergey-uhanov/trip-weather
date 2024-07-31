export const wheatherNow = async city => {
	const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=MNSEBBUWNGU2C7VJDUMVJDBAT&contentType=json`

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
