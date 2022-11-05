	const {dropTables}=require('./dropTables')
	const {deploySchemas}=require('./deploySchemas')
	const {seedSchemas}=require('./seedSchemas')

  const resetDatabase=async(db)=>{
    console.log("dropping current tables in database...")
    await dropTables(db)
    console.log('complete')
  
    console.log('attempting to deploy schema...')
    await deploySchemas(db)
    console.log('complete')
  
    console.log('seeding schemas')
    await seedSchemas(db)
    console.log('complete')
}

module.exports={resetDatabase};
