/* eslint-disable @typescript-eslint/no-explicit-any */
const request = require("supertest");
const appTest = require("../../app/index");

describe("POST /v1/users/googleOAuth", () => {
	test("should handle Google OAuth", (done) => {
		request(appTest)
			.post("/v1/users/googleOAuth")
			.set("Authorization", "Bearer mockAccessToken")
			.expect((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.message).toEqual({
					status: 200,
					message: res.data
				});
			})
			.end(done());
	});
});

describe("POST /v1/users/register", () => {
	test("should create user w/ response status 201", (done) => {
		request(appTest)
			.post("/v1/users/register")
			.send({
				id: 1, 
				username: "Admin", 
				email: "admin@gmail.com", 
				password: "admin12345"
			})
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(201);
				expect(res.body.message).toEqual({
					status: 201,
					message: "Successful Registration!"
				});
			})
			.end(done());
	});
});

describe("POST /v1/users/login", () => {
	test("should respond with 404 if email is not found", (done) => {
		request(appTest)
			.post("/v1/users/login")
			.send({
				email: "nonexistent@example.com", 
				password: "admin12345"
			})
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(404);
				expect(res.body.message).toEqual({
					status: 404,
					message: "Email not found, please try another email!",
				});
			})
			.end(done());
	});

	test("should respond with 401 if password is incorrect", (done) => {
		request(appTest)
			.post("/v1/users/login")
			.send({
				email: "admin@gmail.com", 
				password: "wrongpassword"
			})
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(404);
				expect(res.body.message).toEqual({
					status: 404,
					message: "Incorrect password, please try again!",
					data: [],
				});
			})
			.end(done());
	});

	test("should respond with 200 and a token if login is successful", (done) => {
		request(appTest)
			.post("/v1/users/login")
			.send({
				email: "admin@gmail.com", 
				password: "admin12345"
			})
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(404);
				expect(res.body.message).toEqual({
					status: 200,
					message: "Successfully Logged In!",
				});
				expect(res.body).toHaveProperty("token");
			})
			.end(done());
	});
});

describe("GET /v1/users/profile", () => {
	test("should authorize and set user", (done) => {
		request(appTest)
			.get("/v1/users/profile")
			.set("Authorization", "Bearer mockAccessToken")
			.expect((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body).toEqual(res.data);
			})
			.end(done());
	});

	test("should handle authorization errors", (done) => {
		request(appTest)
			.get("/v1/users/profile")
			.set("Authorization", "Bearer mockAccessToken")
			.expect((res: any) => {
				expect(res.statusCode).toBe(401);
				expect(res.body.message).toBe({
					status: 401,
					message: "Unauthorize",
				});
			})
			.end(done());
	});
});

describe("DELETE /v1/users/remove/:id", () => {
	test("should remove a user by id", (done) => {
		request(appTest)
			.delete("/v1/users/remove/:id")
			.set("Content-Type", "application/json")
			.expect((res: any) => {
				expect(res.statusCode).toBe(201);
				expect(res.body.message).toEqual({
					status: 201,
					message: "Successfully delete user!",
				});
			})
			.end(done());
	});
});