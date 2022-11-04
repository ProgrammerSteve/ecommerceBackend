-- Seed data with a fake user for 


BEGIN TRANSACTION;
insert into "users" (password,email,fullname,username,address,city,state,country,created_at) values (Tori1995, briarizmendi95@email.com, Bryan, bryan105, "123 street", "College Station", Texas, USA, 2022-11-03T23:58:57.590Z) ;
-- insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("as123456", "aalexsaldivar02@yahoo.com", "Alex", "whysoalex", "123 street", "Brownsville", "Texas", "USA", '2011-10-05T14:48:00.000Z') ;
-- insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("3195Sade", "gatorpride95@gmail.com", "John", "johnny95", "123 street", "Brownsville", "Texas", "USA", '2017-01-09T10:48:00.000Z') ;
-- insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("kablamo7", "hydrosam95@gmail.com", "Sammy", "sammyonwater", "123 street", "Los Fresnos", "Texas", "USA", '2018-03-19T12:24:00.000Z') ;
-- insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("secret03", "aalonzo03@gmail.com", "Alonzo", "lonzo95", "123 street", "Houston", "Texas", "USA", '2015-03-10T09:07:00.000Z') ;
-- insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("simpsons9", "csales94@gmail.com", "Conner", "csales94", "123 street", "San Antonio", "Texas", "USA", '2020-06-20T05:13:00.000Z') ;
-- insert into products (name, price, description, image_url) values ("frisbee", 2.32, "a yellow frisbee", "http://localhost:3000");
COMMIT;
