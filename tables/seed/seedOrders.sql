-- GET TOTAL QUANTITY OF ITEMS IN AN ORDER
-- select sum(a.quantity)
-- from products 
-- join (select * from order_item where order_id=25) a
-- on products.product_id=a.product_id;

-- GET TOTAL PRICE OF ITEMS IN AN ORDER
-- select sum(a.quantity*products.price)
-- from products 
-- join (select * from order_item where order_id=25) a
-- on products.product_id=a.product_id;

BEGIN TRANSACTION;
insert into orders (user_id,status,created_at, amount, items)
VALUES
  (127,'COMPLETE','2022-05-24 16:17:49',364.42,6),
  (88,'PENDING','2022-05-24 16:17:49',317.58,14),
  (189,'COMPLETE','2022-05-24 16:17:49',347.79,11),
  (185,'CANCELLED','2022-05-24 16:17:49',698.30,10),
  (148,'COMPLETE','2022-05-24 16:17:49',508.00,11),
  (41,'COMPLETE','2022-05-24 16:17:49',152.49,3),
  (10,'COMPLETE','2022-05-24 16:17:49',143.30,10),
  (61,'CANCELLED','2022-05-24 16:17:49',712.17,18),
  (163,'PENDING','2022-05-24 16:17:49',173.49,3),
  (159,'COMPLETE','2022-05-24 16:17:49',1149.71,24),
  (79,'COMPLETE','2022-05-24 16:17:49',38.52,1),
  (65,'CANCELLED','2022-05-24 16:17:49',96.60,16),
  (93,'COMPLETE','2022-05-24 16:17:49',130.65,11),
  (47,'PENDING','2022-05-24 16:17:49',548.62,14),
  (184,'COMPLETE','2022-05-24 16:17:49',943.80,10),
  (226,'CANCELLED','2022-05-24 16:17:49',537.95,7),
  (117,'COMPLETE','2022-05-24 16:17:49',220.62,6),
  (221,'COMPLETE','2022-05-24 16:17:49',230.68,14),
  (11,'COMPLETE','2022-05-24 16:17:49',2.52,3),
  (64,'COMPLETE','2022-05-24 16:17:49',308.16,8),
  (162,'COMPLETE','2022-05-24 16:17:49',458.17,10),
  (141,'PENDING','2022-05-24 16:17:49',44.46,3),
  (32,'COMPLETE','2022-05-24 16:17:49',698.11,7),
  (3,'COMPLETE','2022-05-24 16:17:49',254.40,3),
  (48,'PENDING','2022-05-24 16:17:49',2.84,2);
COMMIT;