import UsersRepository from "../repositories/users";
import { Payload } from "../../config/utils/interface/usersInterface";

export default class UsersService {
	#usersRepository: UsersRepository;

	constructor() {
		this.#usersRepository = new UsersRepository();
	}

	async postUser(param: Payload) {
		return await this.#usersRepository.postUser(param);
	}

	async getUser(email: string) {
		return await this.#usersRepository.getUser(email);
	}

	async getByPk(param: number | string) {
		return await this.#usersRepository.getByPk(param);
	}

	async removeUser(id: number) {
		return await this.#usersRepository.removeUser(id);
	}
}