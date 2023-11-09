import { Model, ModelObject } from "objection";
import { type } from "os";

export class CarsModel extends Model {
    id!: number;
    name!: string;
    type!: string;
    year!: number;
    size!: string;
    price!: number;
    image_url!: string;

    static get tableName() {
        return "cars";
    }
}

export type Cars = ModelObject<CarsModel>;