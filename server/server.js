const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());

const USERS_DB = [];

app.get("/", (req, res) => {
  res.send("users");
});

app.get("/post", (req, res) => {
  res.send("users");
});

app.post("/post", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { email: req.body.email, password: hashedPassword };

    USERS_DB.push(user);
    console.log("USERS_DB", USERS_DB);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

app.post("/post/login", async (req, res) => {
  const user = USERS_DB.find(({ email }) => email === req.body.email);
  console.log("req", user);
});

app.listen(3030);
