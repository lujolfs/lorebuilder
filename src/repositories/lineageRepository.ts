import configDatabase from "../config/db.js";
import { Lineage } from "../protocols/Lineage.js";

async function newLineage(lineage: Lineage) {
    configDatabase.query(`
        INSERT INTO lineages (name, "maxAge", "adultAge", "isPlayable", description) VALUES ($1, $2, $3, $4, $5);
    `, [lineage.name, lineage.maxAge, lineage.adultAge, lineage.isPlayable, lineage.description])
}

async function lineageByName(name: string) {
    return await configDatabase.query(
        `
            SELECT * FROM lineages WHERE name = $1;
        `,
        [name]
    );
}

async function findAll() {
    return await configDatabase.query(
        `
            SELECT * FROM lineages;
        `
    );
}

async function findById(id: string) {
    return await configDatabase.query(
        `
        SELECT * FROM lineages
        WHERE id = $1;
        `,
        [id]
    );
}

export default {
    newLineage,
    lineageByName,
    findAll,
    findById
}