import express from "express";
import userRouter from "./src/router/userRouter.js";

const PORT = 3000;

const app = express();

// make post data avaialble in request body
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is ready and listening at http://localhost:${PORT}`);
});
