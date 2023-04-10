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

export default {
    create
}