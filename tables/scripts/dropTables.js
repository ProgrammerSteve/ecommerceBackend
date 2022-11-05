async function dropTablesCommence(db) {
  try{await db.raw(`DROP TABLE IF EXISTS "products" CASCADE`);}catch(err){console.error(err.detail)}
  try{await db.raw(`DROP TABLE IF EXISTS "users" CASCADE`);}catch(err){console.error(err.detail)}
  try{await db.raw(`DROP TABLE IF EXISTS "orders" CASCADE`);}catch(err){console.error(err.detail)}
  try{await db.raw(`DROP TABLE IF EXISTS "cart" CASCADE`);}catch(err){console.error(err.detail)}
  try{await db.raw(`DROP TABLE IF EXISTS "cart_item" CASCADE`);}catch(err){console.error(err.detail)}
  try{await db.raw(`DROP TABLE IF EXISTS "order_item" CASCADE`);}catch(err){console.error(err.detail)}
 };

const dropTables=async(db)=>{
  console.log('dropping tables...')
  var tablecount=1
  var count=0
  while(tablecount>0){
    console.log(`iteration# ${count}`)
    await dropTablesCommence(db) 
    const tables= await db.select(`*`).from('pg_catalog.pg_tables')
    .then(data=>{
      if(data.length){
        let tables= data.filter(obj=>obj.schemaname==='public').map(obj=>obj.tablename)
        console.log('tables found: ',tables)
        return tables
      }else{
        console.log('no tables found')
        return [];
      }}).catch(err=>console.log(err))
    tablecount=tables.length
    count+=1;
  }
}
module.exports={dropTables};
