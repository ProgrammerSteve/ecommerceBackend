const fs = require('fs');
const {deploySchemas} = require('./deploySchemas.js')
const {removeForeignKeys}=require('./removeForeignKeys.js')

const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan = require('morgan');
// const dataSql=fs.readFileSync('./deploySchemas.sql').toString();


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
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.get("/",(req,res)=>{res.send('Backend Server Started')});

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


//Create User
app.post("/user",async (req,res)=>{
	const handleCreateUser=async (req,res,db)=>{
		const {password,email,fullname,username,address,city,state,country}=req.body
		const created_at=new Date();
		const user={
			password,
			email,
			fullname,
			username,
			address,
			city,
			state,
			country,
			created_at
		}
		const isEmailUsed= await db.select('*')
			.from('users')
			.where({email})
			.then(user=>user.length?true:false)
			.catch(err=>res.status(400).json('error verifying user email'));
		const isUsernameUsed= await db.select('*')
			.from('users')
			.where({username})
			.then(user=>user.length?true:false)
			.catch(err=>res.status(400).json('error verifying user username'));
		if(!isEmailUsed){
			if(!isUsernameUsed){
				await db.insert(user).into('users').returning('email').then(email=>console.log('account created for: ', {email}))
				res.send(user)
			}else{
				res.status(400).json('username already in use')
			}
		}else{
			res.status(400).json('email already in use')
		}
	}
	await handleCreateUser(req,res,knex)
})





//Read User
app.get("/user/:user_id",(req,res)=>{
	const handleGetUser=(req,res,db)=>{
		const {user_id}=req.params;
		db.select('*').from('users').where({user_id})
		.then(user=>{
			if(user.length){
				res.json(user[0]);
			}else{
				res.status(400).json('Not Found')
			}
		})
		.catch(err=>res.status(400).json('error getting user'))
	};
	handleGetUser(req,res,knex);
})

//Update 
app.post("/user/:user_id",(req,res)=>{
	const handleUserUpdate=(req,res,db)=>{
		const {user_id}= req.params;
		const {
			password,
			email,
			fullname,
			username,
			address,
			city,
			state,
			country
		}=req.body;

		db('users')
			.where({user_id})
			.update({
				password,
				email,
				fullname,
				username,
				address,
				city,
				state,
				country
			})
			.then(resp=>{
				if(resp){
					res.json("success")
				}else{
					res.status(400).json("Unable to update")
				}
			})
			.catch(e=>{
				res.status(400).json('error updating user');
			})
	}	
	handleUserUpdate(req,res,knex)
})

//Delete User










//Create Cart
//Read Cart
//update Cart
	//Add cart item to cart
	//remove cart item from cart
//Delete Cart

//Create Order
//Read Order
//Update Order
//Delete Order

























// app.get("/",(req,res)=>{
//   const output=knex.select('blah').from('users')	
//   .then(data=>{
// 		if(data.length){
//       console.log(data[0])
// 			res.json(data[0]);
// 		}else{
// 			res.status(400).json('Not Found')
// 		}
// 	})
// 	.catch(err=>res.status(400).json('error getting data'))
// });

// app.get("/tables",(req,res)=>{

// Gets the table names

  // knex.select(`*`).from('pg_catalog.pg_tables')//.where('tablename','=','public')
  // .then(data=>{
	// 	if(data.length){
  //     const output= data.filter(obj=>obj.schemaname==='public').map(obj=>obj.tablename)
  //     console.log(output)
	// 		res.json(output);
	// 	}else{
	// 		res.status(400).json('Not Found')
	// 	}
	// })
	// .catch(err=>res.status(400).json('error getting data'))

// get columns from the tables, look out for when there is an empty table. also go for 

  // knex.select(`*`).from('information_schema.columns')//.where('tablename','=','public')
  // .then(data=>{
	// 	if(data.length){
  //     const output= data.filter(obj=>obj.table_schema==='public').map(obj=>{
  //           return(
  //             {
  //               table: obj.table_name, 
  //               column: obj.column_name,
  //               datatype: obj.data_type
  //             })})
  //     console.log(output)
	// 		res.json(output);
	// 	}else{
	// 		res.status(400).json('Not Found')
	// 	}
	// })
	// .catch(err=>res.status(400).json('error getting data'))

  //loops through table 

// });

// app.listen(3001,()=>{console.log('started on port 3001')});



app.listen(3001, async ()=> {
	console.log('starting on port 3001:')

	// console.log('Removing foreign keys')
	// await removeForeignKeys(knex);
	// console.log('keys removed')



	// await knex.select(`*`).from('pg_catalog.pg_tables')
	// .then(data=>{
	// 	if(data.length){
	// 		const output= data.filter(obj=>obj.schemaname==='public').map(obj=>obj.tablename)
	// 		console.log('tables found: ',output)
	// 		console.log('dropping tables...')
	// 		output.forEach(async (table)=>{
	// 			console.log(`dropping ${table}`)
	// 			await knex.schema.dropTableIfExists(`${table}`)
	// 		})
	// 	}else{
	// 		throw new Error('no tables found');
	// 	}})
	// .catch(err=>console.log(err))




	// console.log('attempting to deploy schema...')
	// await deploySchemas(knex)
	// console.log('complete')



})