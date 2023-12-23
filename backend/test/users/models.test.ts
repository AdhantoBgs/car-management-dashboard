import { UsersModel, Users } from "../../app/models/Users";

describe("UsersModel", () => {
	test("should create a UsersModel instance", () => {
		const usersInstance = new UsersModel();

		expect(usersInstance).toBeInstanceOf(UsersModel);
	});

	test("should have correct table name", () => {
		expect(UsersModel.tableName).toBe("users");
	});

	test("should create a UsersModel object with correct properties", () => {
		const usersData: Users = {
			id: 1, 
			username: "Admin", 
			email: "admin@gmail.com", 
			password: "admin12345"
		};

		const usersInstance = UsersModel.fromJson(usersData);

		expect(usersInstance).toMatchObject(usersData);
	});
});