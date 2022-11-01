BEGIN TRANSACTION;

CREATE TABLE products (
    product_id serial PRIMARY KEY,
    name VARCHAR(50),
    price real,
    description text,
    image_url VARCHAR(100)
);

COMMIT;