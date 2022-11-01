BEGIN TRANSACTION;

CREATE TABLE order_item (
    id int,
    order_id int,
    product_id int,
    quantity int,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

COMMIT;