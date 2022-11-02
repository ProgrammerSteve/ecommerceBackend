BEGIN TRANSACTION;

CREATE TABLE order_item (
    id serial PRIMARY KEY,
    order_id int,
    product_id int,
    quantity int,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

COMMIT;