const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seed = async () => {
        const createMany = await prisma.Card.createMany({
            data: [
            { name: 'Pikachu', id : '#0025' , type: 'electric', mode: 0},
            { name: 'Arbok', id : '#0024' , type: 'poison', mode: 0},
            { name: 'Seedot', id : '#0273' , type: 'grass', mode: 0},
            { name: 'Slowking', id : '#0199' , type: 'water/psychic', mode: 0},
            { name: 'Spewpa', id : '#0665' , type: 'bug', mode: 0},
            { name: 'Sneasel', id : '#0215' , type: 'dark/ice', mode: 0},
            { name: 'Meowstic', id : '#0678' , type: 'psychic', mode: 0},
            { name: 'Torterra', id : '#0389' , type: 'grass/ground', mode: 0},
            { name: 'Goomy', id : '#0704' , type: 'dragon', mode: 0},
            { name: 'Stoutland', id : '#0508' , type: 'normal', mode: 0},
            { name: 'Darumaka', id : '#0554' , type: 'fire', mode: 0},
            { name: 'Flaaffy', id : '#0180' , type: 'electric', mode: 0},
            { name: 'Yanma', id : '#0193' , type: 'bug/flying', mode: 0},
            { name: 'Nidoqueen', id : '#0031' , type: 'poison/ground', mode: 0},
            { name: 'Chimecho', id : '#0358' , type: 'pyschic', mode: 0}
            ],
            skipDuplicates: true
        })
}

seed()