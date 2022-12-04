const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const {
  cartRouter,
  userRouter,
  productRouter,
  orderRouter,
} = require("./routes");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

const { resetDatabase } = require("./tables/scripts/resetDatabase");
const { auth } = require("./controllers");

const app = express();
//Routers
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/test", (req, res) => {
  res.send("test");
});

//Auth
app.post("/auth", (req, res) => {
  auth.handleLoginUser(req, res, knex, jwt);
});

app.listen(3001, async () => {
  console.log("starting on port 3001:");
  // await resetDatabase(knex)
});
