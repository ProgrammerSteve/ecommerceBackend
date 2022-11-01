BEGIN TRANSACTION;

CREATE TABLE cart_item (
    id int,
    cart_id int,
    product_id int,
    quantity int,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

COMMIT;