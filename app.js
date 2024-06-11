import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();
config({
    path:"./data/config.env",
});

///using middleware
app.use(express.json());
app.use(userRouter);
/////// for custom routing //////////
///////// here "/users" acts as a prefix ////////////
// app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("server working");
});

