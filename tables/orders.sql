BEGIN TRANSACTION;

CREATE TABLE orders (
    order_id serial PRIMARY KEY,
    user_id int,
    status VARCHAR(20),
    date TIMESTAMP NOT NULL,
    amount real,
    total int,
    ref VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

COMMIT;