import express from "express";
import path from "path";
import fs from "fs-extra";
import usersData from "./data/users.json" assert { type: "json" };

const rootDirectory = path.resolve();

console.log(rootDirectory);

const app = express();

app.use("/prash", express.static(path.join(rootDirectory, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.sendFile(rootDirectory + "/index.html");
});

app.get("/register", (_, res) => {
  res.sendFile(rootDirectory + "/register.html");
});

app.get("/forgotPassword", (_, res) => {
  res.sendFile(rootDirectory + "/forgotPassword.html");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.sendFile(rootDirectory + "/home.html");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.sendFile(rootDirectory + "/index.html");
});

app.get("/logout", (req, res) => {
  res.sendFile(rootDirectory + "/index.html");
});

// RESTful API
// endPoint = localhost:5000/api/v1/users

// CRUD

// Create a User
// Post

app.post("/api/v1/users", async (req, res) => {
  console.log(req.body);
  let { fullName, email, username, password } = req.body;

  let newUser = {
    id: usersData.length + 1,
    fullName,
    email,
    username,
    password,
  };

  usersData.push(newUser);

  await fs.writeFile("./data/users.json", JSON.stringify(usersData));

  console.log("Post user API");
  res.send("User Created");
});

// Read a User
// Get
app.get("/api/v1/users", async (req, res) => {
  const content = await fs.readFile("./data/users.json", "utf8");

  const data = JSON.parse(content);
  res.send(data);
});

// Get specific user
app.get("/api/v1/users/:id", async (req, res) => {
  console.log(req.params.id);
  res.send("User Found");
});

// Update a User
// Put
app.put("/api/v1/users/:id", async (req, res) => {
  const { fullName, email, userName, password } = req.body;
  const id = req.params.id;

  const user = usersData.find((user) => user.id === parseInt(id));

  if (!fullName || !email || !userName || !password) {
    console.log("All fields required");
  }

  Object.keys(req.body).forEach((key) => {
    user[key] = req.body[key];
  });

  await fs.writeFile("./data/users.json", JSON.stringify(usersData));

  console.log(user);
  console.log("put user API");
  res.send("put user api");
});

app.patch("/api/v1/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = usersData.find((user) => user.id === parseInt(id));

  console.log(req.query);

  if (!user) {
    console.log("User Doesn't exist");
    return;
  }
  Object.keys(req.query).forEach((key) => {
    user[key] = req.query[key];
  });

  await fs.writeFile("./data/users.json", JSON.stringify(usersData));

  res.send("User Updated");
});

// Delete a user
// Delete
app.delete("/api/v1/users/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  let newUserData = usersData.filter((user) => user.id !== parseInt(id));

  console.log(222, newUserData);

  await fs.writeFile("./data/users.json", JSON.stringify(newUserData));
  console.log("delete user api");
  res.send("delete user api");
});

app.listen(3000, () => {
  console.log(`App is listening at port http://localhost:3000`);
});
