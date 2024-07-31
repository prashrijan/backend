import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "20kb",
    type: "application/json"
}))

app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true,
    limit: 20
}))

app.use(cookieParser())

export default app