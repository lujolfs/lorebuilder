import { Lineage } from "../protocols/Lineage.js";
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

/* async function findById(id: string) {
    const { rows, rowCount } = await lineageRepository.findById(id);
    if (!rowCount) throw errors.notFoundError();
    return rows;
} */

/* async function update(updatedLineage: Lineage) {
    const {
        rows: [lineage],
    } = await lineageRepository.findById(updatedLineage.id);
    if (!lineage) throw errors.notFoundError();

    await lineageRepository.lineageUpdate(updatedLineage);
} */

/* async function deleteLineage(id: string) {
    const { rowCount } = await lineageRepository.findById(id);
    if (!rowCount) throw errors.notFoundError();

    await lineageRepository.deleteLineage(id);
} */

export default {
    create,
    findAll,
    //findById,
    //update,
    //deleteLineage
}