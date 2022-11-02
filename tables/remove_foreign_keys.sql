-- Removes foreign keys so tables can be dropped
BEGIN TRANSACTION;
    if EXISTS (
      SELECT FROM pg_tables
      WHERE  schemaname = 'public'
      AND    tablename  = 'cart_item'
    ) then
        ALTER TABLE cart_item
        DROP CONSTRAINT cart_id;
        ALTER TABLE cart_item
        DROP CONSTRAINT product_id;
    end if;


-- ALTER TABLE cart_item
-- DROP CONSTRAINT cart_id;
-- ALTER TABLE cart_item
-- DROP CONSTRAINT product_id;

-- ALTER TABLE cart
-- DROP CONSTRAINT user_id;

-- ALTER TABLE order_item
-- DROP CONSTRAINT order_id;
-- ALTER TABLE order_item
-- DROP CONSTRAINT product_id;

-- ALTER TABLE orders
-- DROP CONSTRAINT user_id;

COMMIT;


