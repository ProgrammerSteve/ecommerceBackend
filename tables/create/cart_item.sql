BEGIN TRANSACTION;

CREATE TABLE cart_item (
    id serial PRIMARY KEY,
    cart_id int,
    product_id int,
    quantity int,
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

COMMIT;