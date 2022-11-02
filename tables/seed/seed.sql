-- Seed data with a fake user for testing
insert into users (password,email,fullname,username,address,city,state,country,created_at) values ("123456", "email@email.com", "bryan", "bryan105", "123 street", "Brownsville", "Texas", "USA", '2018-01-01') ;
insert into products (name, price, description, image_url) values ("frisbee", 2.32, "a yellow frisbee", "http://localhost:3000");

