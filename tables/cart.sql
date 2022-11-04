BEGIN TRANSACTION;

CREATE TABLE cart (
    id serial PRIMARY KEY,
    user_id int,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

COMMIT;