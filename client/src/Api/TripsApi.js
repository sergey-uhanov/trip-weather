const tripsApi = 'http://localhost:8080/api/trip'

async function getAllTripsUser() {
	try {
		const response = await fetch(`${tripsApi}`)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const data = await response.json()
		console.log(data)
		// return data
		return []
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error)
	}
}
export default getAllTripsUser
