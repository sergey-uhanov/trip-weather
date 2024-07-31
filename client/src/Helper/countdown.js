export default function countdown(dateBeginTravel) {
	const dateNow = Date.now()

	const dateBeginTravelMS = Date.parse(dateBeginTravel)

	const countdownMS = dateBeginTravelMS - dateNow

	const seconds = Math.floor(countdownMS / 1000) % 60
	const minutes = Math.floor(countdownMS / (1000 * 60)) % 60
	const hours = Math.floor(countdownMS / (1000 * 60 * 60)) % 24
	const days = Math.floor(countdownMS / (1000 * 60 * 60 * 24))

	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	}
}
