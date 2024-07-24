const express = require('express')
const userRouter = require('./routes/user.routes')
const tripRouter = require('./routes/trip.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')

	next()
})

app.use('/api', userRouter)
app.use('/api', tripRouter)

app.listen(PORT, () => console.log(`server started ${PORT}`))
