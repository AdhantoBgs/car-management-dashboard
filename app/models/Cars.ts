import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
    id!: number;
    name!: string;
    type!: string;
    size!: string;
    price!: number;
    image_url!: string;

    static get tableName() {
        return "cars";
    }
}

export type Cars = ModelObject<CarsModel>;