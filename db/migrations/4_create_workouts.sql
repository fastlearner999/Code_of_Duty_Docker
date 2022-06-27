DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
    id serial PRIMARY KEY,
    user_id int not null,
    sport_type sport_type not null,
    start_time timestamp not null,
    end_time timestamp not null,
    break_duration int not null,
    total_distance int not null,
    total_distance_unit distance_type not null,
    total_duration int not null,
    total_duration_unit duration_type not null,
    create_date timestamp default now() not null,
    update_date timestamp
);