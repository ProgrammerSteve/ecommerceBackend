BEGIN TRANSACTION;
insert into cart_item (cart_id,product_id,quantity)
VALUES
  (1,48,6),
  (1,43,5),
  (1,40,7),
  (2,22,10),
  (3,5,9),
  (3,39,3),
  (3,4,10),
  (3,22,5),
  (4,2,9),
  (5,7,10),
  (5,23,10),
  (5,11,9),
  (5,44,1),
  (5,49,4),
  (6,17,7),
  (6,11,1),
  (7,18,6),
  (7,9,7),
  (7,35,8),
  (7,34,8),
  (7,47,7),
  (7,16,10),
  (8,11,2),
  (8,22,2),
  (8,34,3),
  (8,47,6),
  (8,16,8),
  (9,11,10),
  (9,22,9),
  (9,34,3),
  (9,21,5),
  (9,25,8),
  (10,18,5),
  (10,46,6),
  (11,29,6),
  (11,20,6),
  (11,9,9),
  (11,29,6),
  (11,46,5),
  (11,14,4),
  (12,49,2),
  (12,7,10),
  (12,35,8),
  (12,31,7),
  (13,41,1),
  (13,21,10),
  (13,23,5),
  (13,41,9),
  (13,46,4),
  (14,31,9),
  (14,25,3),
  (14,11,3),
  (14,27,10),
  (14,32,3),
  (14,6,1),
  (14,15,2),
  (15,9,10),
  (15,42,3),
  (15,35,5),
  (15,33,2),
  (15,50,7),
  (15,23,3),
  (16,27,1),
  (17,39,4),
  (17,17,6),
  (17,44,8),
  (18,42,4),
  (19,26,5),
  (20,32,2),
  (21,38,7),
  (21,25,6),
  (21,11,7),
  (21,17,2),
  (21,14,6),
  (21,3,10),
  (21,34,9),
  (21,45,6),
  (21,11,3),
  (21,13,10),
  (22,23,6),
  (22,13,4),
  (23,39,4),
  (23,20,3),
  (23,13,9),
  (23,33,9),
  (24,28,10),
  (25,28,8);
COMMIT;