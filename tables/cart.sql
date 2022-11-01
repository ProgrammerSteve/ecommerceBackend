BEGIN TRANSACTION;

CREATE TABLE cart (
    id serial PRIMARY KEY,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

COMMIT;