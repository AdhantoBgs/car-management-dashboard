import {Response, Request} from "express";
import {CarsModel, Cars} from "./../../models/Cars";

// const {v4: uuidv4} = require("uuid");

const getCars = async (req: Request, res: Response) => {
    const getCarAll = await CarsModel.query() || [];

    res.status(200).json(getCarAll);
};

const getCarsById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const filterById = await CarsModel.query().where("id", id).throwIfNotFound();

    res.status(200).json(filterById);
};

const postCars = async (req: Request, res: Response) => {
    const reqBody = req.body;
    const id = reqBody.id;
    const name = reqBody?.name;
    const type = reqBody?.type;
    const year = reqBody?.year;
    const size = reqBody?.size;
    const price = reqBody?.price;
    let image_url = reqBody?.image_url;

    if(req.file) {
        const url = `/uploads/${req.file.filename}`;
        image_url = url;

        const postNewCar = await CarsModel.query().insert({id, name, type, year, size, price, image_url}).returning("*");

        res.status(201).json(postNewCar);
    }

};

const putCars = async (req: Request, res: Response) => {
    const reqBody = req.body;
    const reqParam = req.params;
    const id = reqParam.id;
    const name = reqBody?.name;
    const type = reqBody?.type;
    const year = reqBody?.year;
    const size = reqBody?.size;
    const price = reqBody?.price;
    let image_url = reqBody?.image_url;

    if(req.file) {
        const url = `/uploads/${req.file.filename}`;
        image_url = url;

        const updateCars = await CarsModel.query().update({name, type, year, size, price, image_url}).where("id", id).returning("*");

        res.status(201).json(updateCars);
    }
};

const deleteCars = async (req: Request, res: Response) => {
    const id = req.params.id;

    const deleteData = await CarsModel.query().deleteById(id).throwIfNotFound().returning("*");

    res.status(201).json({
        message: "Successfully delete car data"
    });
};

module.exports = {
    getCars,
    getCarsById,
    postCars,
    putCars,
    deleteCars
};