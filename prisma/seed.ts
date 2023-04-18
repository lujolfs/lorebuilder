import prisma from "../src/config/db.js";

async function seedLineages() {
    await prisma.lineages.createMany({
        data:[
                {
                    "name": "Astral Elf",
                    "maxAge": 750,
                    "adultAge": 25,
                    "isPlayable": true,
                    "description": "Uma das linhagens mais raras em [mundo]. É um povo misterioso e que raramente é visto por outras pessoas. Vivem isolados em sua torre arcana."
                },
                {
                    "name": "Bugbear",
                    "maxAge": 70,
                    "adultAge": 15,
                    "isPlayable": true,
                    "description": "Chegaram ao mundo aproximadamente na mesma época que os humanos. Apesar disso, conseguem manipular energia arcana."
                },
                {
                    "name": "Deep Gnome",
                    "maxAge": 500,
                    "adultAge": 40,
                    "isPlayable": true,
                    "description": "Parentes próximos dos Anões, os Gnomos tendem a viver em colônias subterrâneas. Essas colônias são nômades e subsistem da fauna e da flora que existem no Subterrâneo. São grandes pesquisadores arcanos."
                },
                {
                    "name": "Firbolg",
                    "maxAge": 500,
                    "adultAge": 25,
                    "isPlayable": true,
                    "description": "Uma das linhagens originais de [mundo]. Suas tribos são famosas por suas criações de animais de trabalho. São conhecidos como os primeiros cavaleiros da História."
                }
        ]
    })
}

seedLineages()
.then(() => {
    console.log("The seed was successful.");
})
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () =>
prisma.$disconnect)

async function seedAlignments() {
    await prisma.alignments.createMany({
        data:[
            {
                "name": "Lawful Good"
            },
            {
                "name": "Lawful Neutral"
            },
            {
                "name": "Lawful Evil"
            },
            {
                "name": "Neutral Good"
            },
            {
                "name": "True Neutral"
            },
            {
                "name": "Neutral Evil"
            },
            {
                "name": "Chaotic Good"
            },
            {
                "name": "Chaotic Neutral"
            },
            {
                "name": "Chaotic Evil"
            }
        ]
    })
}

seedAlignments()
.then(() => {
    console.log("The seed was successful.");
})
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () =>
prisma.$disconnect)

async function seedOrganizations() {
    await prisma.organizations.createMany({
        data:[
            {
                "name": "The Dragon's Hoard",
                "mainBase": "Mountains of Fire",
                "members": 7,
                "alignmentId": 8,
                "description": "A group of dragonborn adventurers who seek to amass wealth and treasures from their perilous adventures."
            },
            {
                "name": "Order of the Silver Shield",
                "mainBase": "The Citadel of Light",
                "members": 12,
                "alignmentId": 1,
                "description": "A paladin order dedicated to protecting the innocent and fighting against evil in all its forms."
            },
            {
                "name": "The Shadow Blades",
                "mainBase": "The Shadowlands",
                "members": 5,
                "alignmentId": 9,
                "description": "A group of rogue assassins who operate in the shadows and carry out deadly missions for their dark masters."
            },
            {
                "name": "The Arcane Council",
                "mainBase": "The Tower of the Archmage",
                "members": 10,
                "alignmentId": 5,
                "description": "A group of powerful wizards who study magic and seek to expand their knowledge and power."
            },
            {
                "name": "The Fellowship of the Ring",
                "mainBase": "Rivendell",
                "members": 9,
                "alignmentId": 1,
                "description": "A group of heroes from different races who come together to destroy the One Ring and defeat the evil Sauron."
            }
        ]
    })
}

seedOrganizations()
.then(() => {
    console.log("The seed was successful.");
})
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () =>
prisma.$disconnect)

async function seedCharacters() {
    await prisma.characters.createMany({
        data:[
            {
                "name": "Eldonar Windrider",
                "lineageId": 3,
                "organizationId": 1
            },
            {
                "name": "Lorien Brightblade",
                "lineageId": 1,
                "organizationId": 4
            },
            {
                "name": "Thorngrim Stonefist",
                "lineageId": 1,
                "organizationId": 2
            },
            {
                "name": "Galadriel Moonwhisper",
                "lineageId": 2,
                "organizationId": 3
            },
            {
                "name": "Kazrik Ironhide",
                "lineageId": 4,
                "organizationId": 5
            }
        ]
    })
}

seedCharacters()
.then(() => {
    console.log("The seed was successful.");
})
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () =>
prisma.$disconnect)