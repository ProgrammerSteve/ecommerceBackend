BEGIN TRANSACTION;

CREATE TABLE orders (
    order_id serial PRIMARY KEY,
    user_id int,
    status VARCHAR(20),
    created_at TIMESTAMP NOT NULL,
    amount real,
    items int,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

COMMIT;