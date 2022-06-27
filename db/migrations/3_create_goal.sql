DROP TABLE IF EXISTS goal;

CREATE TYPE sport_type AS ENUM ('running', 'swiming', 'cycling', 'joking', 'walking', 'custom');
CREATE TYPE period_type AS ENUM ('day', 'week', 'month', 'year');
CREATE TYPE distance_type AS ENUM ('km', 'mile');

CREATE TABLE goal (
    id serial PRIMARY KEY,
    goal_name varchar(1024) not null,
    sport_type sport_type not null,
    period int not null,
    period_type period_type not null,
    start_date timestamp not null,
    end_date timestamp not null,
    target_distance int not null,
    target_distance_unit distance_type not null,
    create_date timestamp default now() not null,
    update_date timestamp
);