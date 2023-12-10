import { Response, Request, NextFunction } from "express";
import UsersService from "../services/users";
import jwt, { JwtPayload } from "jsonwebtoken";
import axios from "axios";

const encryptPass = require("../../config/utils/tools/encryptPass");
const checkPass = require("../../config/utils/tools/checkPass");
const createToken = require("../../config/utils/tools/createToken");

const googleOAuth = async (req: Request, res: Response) => {
    const reqAuthHeaders = req.headers.authorization || "";
    const options = { headers: { Authorization: reqAuthHeaders } };
    const response = await axios.get(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        options
    );

    return res.status(200).json({
        status: 201,
        message: response.data
    });
};

const register = async (req: Request, res: Response) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password || "";

    const encryptedPassword = await encryptPass(password);

    const regiteredUser = await new UsersService().postUser({
        username, 
        email, 
        password: encryptedPassword
    });

    return res.status(201).json({
        status: 201,
        message: "Successful Registration!"
    });
};

const login = async (req: Request, res: Response) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password || "";

    const user = await new UsersService().getUser(email);

    if(!user) {
        return res.status(404).json({
            status: 404,
            message: "Email not found, please try another email!"
        })
    }

    const passCheck = await checkPass(user.password, password);

    if(!passCheck) {
        return res.status(401).json({
            status: 401,
            message: "Incorrect password, please try again!",
            data: []
        })
    }

    const token = createToken({
        id: user.id,
        email: user.email
    });

    return res.status(200).json({
        status: 200,
        message: "Successfully Logged In!",
        token
    });
};

const profile = async (req: Request, res: Response) => {
    return res.status(200).json(req.body.user);
};

const authorize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken?.split("Bearer ")?.[1] || "";
        const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia") as JwtPayload;

        req.body.user = await new UsersService().getByPk(tokenPayload.id);

        next();
    } catch (error) {
        res.status(401).json({
            message: "Unauthorize"
        });
    }
};

const remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const deleteUser = await new UsersService().removeUser(id);

    res.status(201).json({
        status: 201,
        message: "Successfully delete user!"
    });
};

module.exports = {
    googleOAuth,
    register,
    login,
    profile,
    authorize,
    remove,
};