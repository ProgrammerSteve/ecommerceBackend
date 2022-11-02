const fs = require('fs');
const removeForeignKeysSql=fs.readFileSync('./tables/remove_foreign_keys.sql').toString();

const removeForeignKeys= async(db)=>{
  await db.raw(removeForeignKeysSql);
}

module.exports={removeForeignKeys};