
const fs = require('fs');
const {deploySchemas} = require('./deploySchemas.js')
const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan = require('morgan');

const dataSql=fs.readFileSync('./deploySchemas.sql').toString();

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

app.listen(3001, async ()=> {
	console.log('starting on port 3001:')
	await knex.select(`*`).from('pg_catalog.pg_tables')
	.then(data=>{
		if(data.length){
			const output= data.filter(obj=>obj.schemaname==='public').map(obj=>obj.tablename)
			console.log('tables found: ',output)
			console.log('dropping tables...')
			output.forEach(async (table)=>{
				console.log(`dropping ${table}`)

				await knex.schema.dropTableIfExists(`${table}`)
			})
		}else{
			throw new Error('no tables found');
		}})
	.catch(err=>console.log(err))

	console.log('attempting to deploy schema...')
	await deploySchemas(knex)
	console.log('complete')
})