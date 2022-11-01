BEGIN TRANSACTION;

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    password VARCHAR(200),
    email VARCHAR(200),
    fullname VARCHAR(100),
    username VARCHAR(50),
    address VARCHAR(200),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP NOT NULL
);

COMMIT;