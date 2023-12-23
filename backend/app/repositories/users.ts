import { UsersModel } from "../models/Users";
import { Payload } from "../../config/utils/interface/usersInterface";

export default class UsersRepository {
	async postUser(param: Payload) {
		const username = param.username;
		const email = param.email;
		const password = param.password;

		return await UsersModel.query().insert({username, email, password}).returning("*");
	}

	async getUser(email: string) {
		return await UsersModel.query().findOne({email}).returning("*");
	}

	async getByPk(param: number | string) {
		return await UsersModel.query().findById(param).returning("*");
	}

	async removeUser(id: number) {
		return await UsersModel.query().deleteById(id).throwIfNotFound().returning("*");
	}
}