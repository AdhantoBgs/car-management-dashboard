import { CarsModel } from "../models/Cars";
import { Item } from "../../config/utils/interface/carsInterface";

export default class CarsRepository {
    async getAll() {
        return await CarsModel.query() || [];
    }

    async getById(id: number) {
        return await CarsModel.query().where("id", id).throwIfNotFound();
    }

    async postNewCar(param: Item) {
        const id = param.id;
        const name = param.name;
        const type = param.type;
        const size = param.size;
        const price = param.price;
        const image_url = param.image_url;

        return await CarsModel.query().insert({id, name, type, size, price, image_url}).returning("*");
    }

    async updateCars(param: Item) {
        const id = param.id;
        const name = param.name;
        const type = param.type;
        const size = param.size;
        const price = param.price;
        const image_url = param.image_url;

        return await CarsModel.query().update({name, type, size, price, image_url}).where("id", id).returning("*");
    }

    async deleteData(id: number) {
        return await CarsModel.query().deleteById(id).throwIfNotFound().returning("*");
    }
}