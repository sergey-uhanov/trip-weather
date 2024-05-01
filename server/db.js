const Pool = require('pg').Pool

const pool = new Pool({
	host: 'postgresdb.cdma84ma67l4.eu-west-3.rds.amazonaws.com',
	user: 'postgres',
	password: 'Premium2113',
	database: 'postgresDB',
	port: 5432,
})
module.exports = pool
