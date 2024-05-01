const Router = require('express')
const router = new Router()
const tripController = require('../controllers/trip.controller')

router.post('/trip', tripController.createTrip)
router.get('/trip', tripController.getTrips)
router.delete('/trip/:id', tripController.deleteTrip)

module.exports = router
