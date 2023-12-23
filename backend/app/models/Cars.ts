import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
	id!: number;
	name!: string;
	type!: string;
	capacity!: string;
	transmission!: string;
	year!: number;
	price!: number;
	availableat!: string;
	drivertype!: string;
	image_url!: string;
	description!: string;

	static get tableName() {
		return "cars";
	}
}

export type Cars = ModelObject<CarsModel>;