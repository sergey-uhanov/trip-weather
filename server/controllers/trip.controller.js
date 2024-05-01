const db = require('../db')
class TripController {
	async createTrip(req, res) {
		const { city, startDate, endDate, user_id } = req.body
		const newTrip = await db.query(
			'INSERT INTO trips (city, startDate, endDate, user_id) values ($1, $2, $3, $4)',
			[city, startDate, endDate, user_id]
		)
		res.json(newTrip.rows[0])
	}
	async getTrips(req, res) {
		const id = req.query.id
		const trips = await db.query('SELECT * FROM trips WHERE user_id = $1', [id])
		res.json(trips.rows)
	}
	async deleteTrip(req, res) {
		const id = req.params.id
		const trip = await db.query('DELETE FROM trips WHERE id = $1', [id])
		res.json(trip.rows)
	}
}

module.exports = new TripController()
