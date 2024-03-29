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

async function findById (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
        const lineage = await lineageServices.findById(id);
        return res.send(lineage);
    } catch (err) {
        next(err);
    }
}

async function update (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const updatedLineage = req.body as Lineage;
    try {
        await lineageServices.update(id, updatedLineage);
        const lineage = await lineageServices.findById(id);
        return res.send(lineage).status(200);
    } catch (err) {
        next (err)
    }
}

async function deleteLineage (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
        await lineageServices.deleteLineage(id);
        const lineages = await lineageServices.findAll();
        return res.send(lineages).status(200);
    } catch (err) {
        next (err)
    }
}

export default {
    create,
    findAll,
    findById,
    update,
    deleteLineage
}