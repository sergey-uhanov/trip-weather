const Pool = require('pg').Pool

const pool = new Pool({
	host: '127.0.0.1',
	user: 'postgres',
	password: 'admin',
	database: 'postgres',
	port: 5438,
})
module.exports = pool
