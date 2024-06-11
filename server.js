import { app } from "../NODEAPI/app.js";
import { connectDB } from "./data/database.js";

connectDB();
console.log("Port number is" , process.env.PORT);
app.listen(process.env.PORT, () => {
    console.log("server is working");
});