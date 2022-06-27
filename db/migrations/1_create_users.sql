DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    email varchar(512) NOT NULL,
    password varchar(512) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    gender gender_type NOT NULL,
    create_date timestamp default now() NOT NULL,
    update_date timestamp,
    last_login timestamp
);