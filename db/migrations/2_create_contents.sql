DROP TABLE IF EXISTS contents;

CREATE TABLE contents (
    id serial PRIMARY KEY,
    title varchar(512) not null,
    html_content text not null,
    create_date timestamp default now() not null,
    update_date timestamp
);