import express from "express";
import path from "path";

const rootDirectory = path.resolve();

console.log(rootDirectory);

const app = express();

app.get("/", (req, res) => {
  res.sendFile(rootDirectory + "/index.html");
});

app.get("/prash", (req, res) => {
  res.send("from prashrijan");
});

app.listen(3000, () => {
  console.log(`App is listening at port http://localhost:3000`);
});
