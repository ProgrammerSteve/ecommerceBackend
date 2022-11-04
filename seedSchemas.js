const fs = require('fs');
const seed=fs.readFileSync('./tables/seed/seed.sql').toString();

const seedSchemas= async(db)=>{
  console.log("seeding schema:");
  await db.raw(seed);
}

module.exports={seedSchemas};