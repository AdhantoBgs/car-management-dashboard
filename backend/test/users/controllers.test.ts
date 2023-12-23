import { Response, Request, NextFunction } from "express";
import UsersService from "../../app/services/users";
import jwt from "jsonwebtoken";
import axios from "axios";

const controllers = require("../../app/controllers/userControllers");
const encryptPass = require("../../config/utils/tools/encryptPass");
const checkPass = require("../../config/utils/tools/checkPass");
const createToken = require("../../config/utils/tools/createToken");

jest.mock("../../app/services/users");
jest.mock("../../config/utils/tools/encryptPass");
jest.mock("../../config/utils/tools/checkPass");
jest.mock("../../config/utils/tools/createToken");
jest.mock("axios");

describe("googleOAuth", () => {
	test("should respond with 201 from googleOAuth", async () => {
		const req = {
			headers: {authorization: "Bearer ValidToken"}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		const userInfo = {
			username: "John Doe", 
			email: "john.doe@example.com" 
		};

		(axios.get as jest.Mock).mockResolvedValue({data: userInfo});

		await controllers.googleOAuth(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ 
			status: 200, 
			message: userInfo 
		});
	});
});

describe("register", () => {
	test("should registration user w/ status 201", async () => {
		const req = {
			body: {
				username: "Admin",
				email: "admin@gmail.com",
				password: "admin12345"
			}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		(encryptPass as jest.Mock).mockResolvedValue("encryptedpassword");

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				postUser: jest.fn().mockResolvedValue({
					id: 1,
					username: "Admin",
					email: "admin@gmail.com",
					password: "encryptedpassword"
				})
			};
		});

		await controllers.register(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({
			status: 201,
			message: "Successful Registration!"
		});
	});
});

describe("login", () => {
	test("should respond with 404 if email is not found", async () => {
		const req = {
			body: {
				email: "nonexistent@example.com",
				password: "admin12345",
			},
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				getUser: jest.fn().mockResolvedValue(null)
			};
		});

		await controllers.login(req, res);

		expect(res.status).toHaveBeenCalledWith(404);
		expect(res.json).toHaveBeenCalledWith({
			status: 404,
			message: "Email not found, please try another email!"
		});
	});

	test("should respond with 401 if password is incorrect", async () => {
		const req = {
			body: {
				email: "admin@gmail.com",
				password: "wrongpassword",
			},
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		const user = {
			id: 1,
			email: "admin@gmail.com",
			password: "encryptedpassword"
		};

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				getUser: jest.fn().mockResolvedValue(user)
			};
		});

		(checkPass as jest.Mock).mockResolvedValue(false);

		await controllers.login(req, res);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({
			status: 401,
			message: "Incorrect password, please try again!",
			data: []
		});
	});
    
	test("should respond with 200 and a token if login is successful", async () => {
		const req = {
			body: {
				email: "admin@gmail.com",
				password: "admin12345",
			},
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		const user = {
			id: 1,
			email: "admin@gmail.com",
			password: "encryptedpassword"
		};

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				getUser: jest.fn().mockResolvedValue(user)
			};
		});

		(checkPass as jest.Mock).mockResolvedValue(true);
		(createToken as jest.Mock).mockReturnValue("token");

		await controllers.login(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			status: 200,
			message: "Successfully Logged In!",
			token: "token"
		});
	});
});

describe("profile", () => {
	test("should return 200 with the user", async () => {
		const req = {
			body: {user: {id: 1, username: "Admin", email: "admin@gmail.com"}}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn() 
		} as unknown as Response;

		await controllers.profile(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(req.body.user);
	});
});

describe("authorize", () => {
	test("should return 401 if there is an error with the token", async () => {
		const req = {
			headers: {authorization: "Bearer InvalidToken"} 
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn() 
		} as unknown as Response;

		const next = jest.fn() as NextFunction;

		jest.spyOn(jwt, "verify").mockImplementation(() => {
			throw new Error("Invalid token");
		});

		await controllers.authorize(req, res, next);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({ 
			status: 401, 
			message: "Unauthorize" 
		});
		expect(next).not.toHaveBeenCalled();
	});
});

describe("remove", () => {
	test("should delete user with status 201", async () => {
		const req = {
			params: {id: 1}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				removeUser: jest.fn().mockResolvedValue(true)
			};
		});

		await controllers.remove(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({
			status: 201,
			message: "Successfully delete user!"
		});
	});

	test("should respond with 404 if user id is not found", async () => {
		const req = {
			params: {id: 12345}
		} as unknown as Request;

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		} as unknown as Response;

		(UsersService as jest.Mock).mockImplementation(() => {
			return {
				removeUser: jest.fn().mockResolvedValue(false)
			};
		});

		await controllers.remove(req, res);

		expect(res.status).toHaveBeenCalledWith(404);
		expect(res.json).toHaveBeenCalledWith({
			status: 404,
			message: "User not found, please try another user!"
		});
	});
});