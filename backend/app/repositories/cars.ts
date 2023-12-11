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
        const capacity = param.capacity;
        const transmission = param.transmission;
        const year = param.year;
        const price = param.price;
        const availableat = param.availableat;
        const drivertype = param.drivertype;
        const image_url = param.image_url;
        const description = param.description;

        return await CarsModel.query()
            .insert({id, name, type, capacity, transmission, year, price, availableat, drivertype, image_url, description})
            .returning("*");
    }

    async updateCars(param: Item) {
        const id = param.id;
        const name = param.name;
        const type = param.type;
        const capacity = param.capacity;
        const transmission = param.transmission;
        const year = param.year;
        const price = param.price;
        const availableat = param.availableat;
        const drivertype = param.drivertype;
        const image_url = param.image_url;
        const description = param.description;

        return await CarsModel.query()
            .update({id, name, type, capacity, transmission, year, price, availableat, drivertype, image_url, description})
            .where("id", id)
            .returning("*");
    }

    async deleteData(id: number) {
        return await CarsModel.query().deleteById(id).throwIfNotFound().returning("*");
    }
}