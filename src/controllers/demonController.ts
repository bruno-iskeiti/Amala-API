import { Request, Response } from "express";
import { Demon } from '../models';

export const getAllDemon = async (req: Request, res: Response) => {
    const demons = await Demon.findAll();
    res.json(demons)
};

export const getDemonById = (req: Request, res: Response) => {
    res.json({message: `dimonho do id${req.params.id}`})
}

export const createDemon = (req: Request, res: Response) => {
    const dimonho = req.body
    res.json({message: 'dimonho criado', dimonho})
}

