import { User } from "../models/user.js";

//////// read all users /////////
export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    // await User.find({});

    ////////// for params /////////////
    // console.log(req.query);

    ////////// for accessing specific param //////////////
    // const keyword = req.query.keyword;
    // console.log(keyword);

    res.json({
        success: true,
        users,
    });
};

//////// create new user ////////
export const createNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        // name: "hussain",
        // email: "hussain@gmail.com",
        // password: "asgdgsadgsah"
        name,
        email,
        password,
    });

    /////////for cookie////////////
    // res.status(201).cookie("tempi","new Cookie").json({

    res.status(201).json({
        success: true,
        message: "Registered Successfully"
    });
};

/////////for one user/////////////
export const getSingleUser = async (req, res) => {
    // const { id } = req.body;
    const { id } = req.query;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    });
};

///////////for dynamic user/////////////
export const getDynamicUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    });
};