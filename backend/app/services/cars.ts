import CarsRepository from "../repositories/cars";
import { Item } from "../../config/utils/interface/carsInterface";

export default class CarsService {
	#carsRepository: CarsRepository;

	constructor() {
		this.#carsRepository = new CarsRepository();
	}

	async getAll() {
		return await this.#carsRepository.getAll();
	}

	async getById(id: number) {
		return await this.#carsRepository.getById(id);
	}

	async postNewCar(param: Item) {
		return await this.#carsRepository.postNewCar(param);
	}

	async updateCars(param: Item) {
		return await this.#carsRepository.updateCars(param);
	}

	async deleteData(id: number) {
		return await this.#carsRepository.deleteData(id);
	}
}