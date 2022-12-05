const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");

const {
  cartRouter,
  userRouter,
  productRouter,
  orderRouter,
} = require("./routes");

const { resetDatabase } = require("./tables/scripts/resetDatabase");
const { auth } = require("./controllers");

const app = express();

//Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

//Routers
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.get("/test", (req, res) => {
  res.send("test");
});

// //Auth
// app.post("/auth", (req, res) => {
//   auth.handleLoginUser(req, res, knex, jwt);
// });

// app.listen(3001, async () => {
//   console.log("starting on port 3001:");
//   // await resetDatabase(knex)
// });

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(3001, async () => {
    console.log("starting on port 3001:");
  });
