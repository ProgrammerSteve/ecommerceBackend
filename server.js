const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

const {
  cartRouter,
  userRouter,
  productRouter,
  orderRouter,
} = require("./routes");

const { resetDatabase } = require("./tables/scripts/resetDatabase");
const { auth } = require("./controllers");

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.clientID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google Profile;", profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();

//Middleware
app.use(helmet());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

// //Auth
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  }),
  (req, res) => {}
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false,
  }),
  (req, res) => {
    console.log("Google called this back");
  }
);

app.get("/auth/logout", (req, res) => {});

app.get("/failure", (req, res) => {
  return res.send("failed to log in");
});

//Routers
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("test");
});

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
