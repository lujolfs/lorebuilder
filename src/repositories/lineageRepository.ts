import prisma from "../config/db.js";
import { Lineage } from "../protocols/Lineage.js";

async function newLineage(name: string, maxAge: number, adultAge:number, isPlayable: boolean, description: string) {
    await prisma.lineages.create({
        data: {
            name,
            maxAge,
            adultAge,
            isPlayable,
            description
        }
    })
}

async function lineageByName(name: string) {
    const data = await prisma.lineages.findFirst({
        where: {
            name,
        }
    })
    return data;
}

async function findAll() {
    const data = await prisma.lineages.findMany();
    return data;
}

/* async function findById(id: string) {
    return await configDatabase.query(
        `
        SELECT * FROM lineages
        WHERE id = $1;
        `,
        [id]
    );
} */

/* async function lineageUpdate (updatedLineage: Lineage) {
    return await configDatabase.query(
        `
            UPDATE lineages SET name=$1, "maxAge"=$2, "adultAge"=$3, "isPlayable"=$4, description=$5
            WHERE id=$6;
        `,
        [updatedLineage.name, updatedLineage.maxAge, updatedLineage.adultAge, updatedLineage.isPlayable, updatedLineage.description, updatedLineage.id]
    );
} */

/* async function deleteLineage (id: string) {
    return await configDatabase.query(
        `
            DELETE FROM lineages
            WHERE id=$1;
        `,
        [id]
    );
} */

export default {
    newLineage,
    lineageByName,
    findAll,
    //findById,
    //lineageUpdate,
    //deleteLineage
}