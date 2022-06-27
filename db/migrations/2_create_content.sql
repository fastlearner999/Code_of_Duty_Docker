DROP TABLE IF EXISTS content;

CREATE TABLE content (
    id serial PRIMARY KEY,
    html_content text not null,
    create_date timestamp default now() not null,
    update_date timestamp
);