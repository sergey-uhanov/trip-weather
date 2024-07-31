const date = new Date()
const options = { weekday: 'long' }
const dayOfWeek = date.toLocaleString('en-US', options)
export default dayOfWeek
