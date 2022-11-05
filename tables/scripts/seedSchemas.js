const fs = require('fs');
const seedUsers=fs.readFileSync('./tables/seed/seedUsers.sql').toString();
const seedProducts=fs.readFileSync('./tables/seed/seedProducts.sql').toString();
const seedCart=fs.readFileSync('./tables/seed/seedCart.sql').toString();
const seedCartItem=fs.readFileSync('./tables/seed/seedCartItem.sql').toString();
const seedOrders=fs.readFileSync('./tables/seed/seedOrders.sql').toString();
const seedOrderItem=fs.readFileSync('./tables/seed/seedOrderItem.sql').toString();

const seedSchemas= async(db)=>{
  console.log("seeding users:");
  await db.raw(seedUsers);

  console.log("seeding products:");
  await db.raw(seedProducts);

  console.log("seeding cart:");
  await db.raw(seedCart);

  console.log("seeding cartItem:");
  await db.raw(seedCartItem);

  console.log("seeding orders:");
  await db.raw(seedOrders);
  
  console.log("seeding orderItem:");
  await db.raw(seedOrderItem);  
}

module.exports={seedSchemas};