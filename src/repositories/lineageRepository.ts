import prisma from "../config/db.js";
import { LineageInfo } from "../protocols/Lineage.js";

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

async function findById(id: number) {
    const data = await prisma.lineages.findUnique({
        where: {
            id
        }
    });
    return data;
}

async function lineageUpdate (id: number, updatedInfo: LineageInfo) {
    return await prisma.lineages.update({
        where: {
            id
        },
        data: {
            name: updatedInfo.name,
            maxAge: updatedInfo.maxAge,
            adultAge: updatedInfo.adultAge,
            isPlayable: updatedInfo.isPlayable,
            description: updatedInfo.description
        }
    })
}

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
    findById,
    lineageUpdate,
    //deleteLineage
}