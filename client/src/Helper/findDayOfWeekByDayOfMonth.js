export default function findDayOfWeek(dateString) {
	const date = new Date(dateString)
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const dayOfWeekIndex = date.getDay()
	const dayOfWeek = daysOfWeek[dayOfWeekIndex]
	return dayOfWeek
}
