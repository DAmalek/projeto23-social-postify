CREATE TABLE users (
	id serial NOT NULL,
	name varchar NOT NULL,
	avatar TEXT NOT NULL,
	password TEXT NOT NULL,
    createdAt TEXT NOT NULL,
	CONSTRAINT users_customers_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE sessions (
	id serial NOT NULL,
	token TEXT NOT NULL,
	user_id integer NOT NULL,
	CONSTRAINT user_sessions_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);
