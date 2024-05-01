CREATE TABLE person(
	id serial PRIMARY KEY,
	name VARCHAR(256),
	email VARCHAR(256)
);

CREATE TABLE trips(
	id SERIAL PRIMARY KEY,
	city VARCHAR(256),
	startDate VARCHAR(256),
	endDate VARCHAR(256),
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES person(id)
);
