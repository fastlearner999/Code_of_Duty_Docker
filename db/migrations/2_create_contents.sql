DROP TABLE IF EXISTS contents;

CREATE TABLE contents (
    id serial PRIMARY KEY,
    html_content text not null,
    create_date timestamp default now() not null,
    update_date timestamp
);