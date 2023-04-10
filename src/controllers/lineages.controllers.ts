import { Request, Response, NextFunction } from "express";
import { Lineage } from "../protocols/Lineage.js";
import lineageServices from "../services/lineageServices.js"

async function create(req: Request, res: Response, next: NextFunction) {
    const newLineage = req.body as Lineage;

    try {
        await lineageServices.create(newLineage);
        return res.sendStatus(201);
    } catch (err) {
        next(err)
    }
}

async function findAll (req: Request, res: Response, next: NextFunction) {
    try {
        const lineages = await lineageServices.findAll();

        return res.send(lineages);
    } catch (err) {
        next(err);
    }
}

export default{
    create,
    findAll
}