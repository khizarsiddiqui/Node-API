import express from "express";
import {
    getAllUsers,
    createNewUser,
    getSingleUser,
    getDynamicUser,
} from "../controllers/user.js";


const router = express.Router();

//////// read /////////
router.get("/user/all", getAllUsers);

//////// create ////////
router.post("/user/new", createNewUser);

/////////for one user/////////////
router.get("/userid", getSingleUser);

///////////for dynamic user/////////////
router.get("/userid/:id", getDynamicUser);

export default router;