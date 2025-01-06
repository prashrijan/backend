import express from "express";
import path from "path";

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

app.listen(3000, () => {
  console.log(`App is listening at port http://localhost:3000`);
});
