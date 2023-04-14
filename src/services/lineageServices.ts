import { Lineage, LineageInfo } from "../protocols/Lineage.js";
import lineageRepository from "../repositories/lineageRepository.js";
import errors from "../errors/index.js";

async function create (newLineage: Lineage) {
    const data = await lineageRepository.lineageByName(newLineage.name);
    if (data) throw errors.conflictError("Lineage already exists");

    await lineageRepository.newLineage(newLineage.name, newLineage.maxAge, newLineage.adultAge, newLineage.isPlayable, newLineage.description);
}

async function findAll() {
    const data = await lineageRepository.findAll();
    if (!data) throw errors.notFoundError();
    return data;
}

async function findById(id: number) {
    const data = await lineageRepository.findById(id);
    if (!data) throw errors.notFoundError();
    return data;
}

async function update(id: number, updatedLineage: LineageInfo) {
    const data = await lineageRepository.findById(id);
    if (!data) throw errors.notFoundError();

    await lineageRepository.lineageUpdate(id, updatedLineage);
}

/* async function deleteLineage(id: string) {
    const { rowCount } = await lineageRepository.findById(id);
    if (!rowCount) throw errors.notFoundError();

    await lineageRepository.deleteLineage(id);
} */

export default {
    create,
    findAll,
    findById,
    update,
    //deleteLineage
}