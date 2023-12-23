import jwt from "jsonwebtoken";
import { Payload } from "../interface/usersInterface";

const createToken = (param: Payload) => {
	/* istanbul ignore next */
	return jwt.sign(param, process.env.SIGNATURE_KEY || "Rahasia");
};

module.exports = createToken;