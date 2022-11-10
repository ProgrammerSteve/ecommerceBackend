const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const knex = require('knex')({
	client: "pg",
	connection: {
		host: process.env.HOST,
    port: process.env.PORT,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	},
});

const {resetDatabase} = require('./tables/scripts/resetDatabase')
const {user,orders,cart,products}=require('./controllers')

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get("/test",(req,res)=>{res.send('test')});

//User
app.post("/user", (req,res)=>{user.handleCreateUser(req,res,knex)})
app.get("/user/:user_id",(req,res)=>{user.handleGetUser(req,res,knex);})
app.post("/user/:user_id",(req,res)=>{user.handleUpdateUser(req,res,knex)})
app.delete("/user/:user_id", (req,res)=>{user.handleDeleteUser(req,res,knex)})




//Cart
app.post("/cart/:id", (req,res)=>{cart.handleCreateCart(req,res,knex)})
app.get("/cart/:id",(req,res)=>{products.handleGetCart(req,res,knex);})
app.delete("/cart/:id", (req,res)=>{cart.handleDeleteCart(req,res,knex)})

app.post("/cart/add/:id/:quantity", (req,res)=>{cart.handleAddOrUpdateItemInCart(req,res,knex)})
app.post("/cart/remove/:id", (req,res)=>{cart.handleRemoveItemFromCart(req,res,knex)})
app.post("/cart/increment/:id", (req,res)=>{cart.handleIncrementQuantity(req,res,knex)})
app.post("/cart/decrement/:id", (req,res)=>{cart.handleDecrementQuantity(req,res,knex)})



//Products
app.post("/product",(req,res)=>{products.handleAddProduct(req,res,knex)})
app.get("/product/:product_id",(req,res)=>{products.handleGetProduct(req,res,knex);})
app.get("/product",(req,res)=>{products.handleGetProducts(req,res,knex);})
app.post("/product/:product_id",(req,res)=>{products.handleUpdateProduct(req,res,knex)})
app.delete("/product/:product_id",(req,res)=>{products.handleDeleteProduct(req,res,knex);})

//Orders
app.post("/order/:user_id",(req,res)=>{orders.handleCreateOrder(req,res,knex)})
app.get("/order/:user_id",(req,res)=>{orders.handleGetOrder(req,res,knex);})
app.get("/order",(req,res)=>{orders.handleGetOrders(req,res,knex);})
app.post("/order/:order_id",(req,res)=>{orders.handleUpdateOrder(req,res,knex)})
app.delete("/order/:order_id",(req,res)=>{orders.handleDeleteOrder(req,res,knex);})

app.listen(3001, async ()=> {
	console.log('starting on port 3001:')
	// await resetDatabase(knex)
})

	// db.transaction(trx => {
	// 	trx.insert({
	// 		hash: hash,
	// 		email: email
	// 	})
	// 	.into('login')
	// 	.returning('email')
	// 	.then(loginEmail => {
	// 		console.log('login user was submitted...');
	// 		return trx('users')
	// 			.returning('*')
	// 			.insert({
	// 				email: loginEmail[0],
	// 				name: name,
	// 				joined: new Date()
	// 			})
	// 			.then(user => {
	// 				console.log(user[0]);
	// 				res.json(user[0]);
	// 			})
	// 	})
	// 	.then(trx.commit)
	// 	.catch(trx.rollback)
	// })
	// .catch(err => res.status(400).json('unable to register'))