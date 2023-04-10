import { Request, Response } from "express";
import { Lineage } from "../protocols/Lineage.js";
import lineageRepository from "../repositories/lineageRepository.js";
import errors from "../errors/index.js";

async function create (newLineage: Lineage) {
    const {
        rows: [lineage],
    } = await lineageRepository.lineageByName(newLineage.name);
    if (lineage) throw errors.conflictError("Lineage already exists");

    await lineageRepository.newLineage(newLineage);
}

async function findAll() {
    const { rows, rowCount } = await lineageRepository.findAll();
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findById(id: string) {
    const { rows, rowCount } = await lineageRepository.findById(id);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

export default {
    create,
    findAll,
    findById
}