const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seed = async () => {
        const createMany = await prisma.Card.createMany({
            data: [
            { name: 'Pikachu', id : '#0025' , type: 'electric'},
            { name: 'Arbok', id : '#0024' , type: 'poison'},
            { name: 'Seedot', id : '#0273' , type: 'grass'},
            { name: 'Slowking', id : '#0199' , type: 'water/psychic'},
            { name: 'Spewpa', id : '#0665' , type: 'bug'},
            { name: 'Sneasel', id : '#0215' , type: 'dark/ice'},
            { name: 'Meowstic', id : '#0678' , type: 'psychic'},
            { name: 'Torterra', id : '#0389' , type: 'grass/ground'},
            { name: 'Goomy', id : '#0704' , type: 'dragon'},
            { name: 'Stoutland', id : '#0508' , type: 'normal'},
            { name: 'Darumaka', id : '#0554' , type: 'fire'},
            { name: 'Flaaffy', id : '#0180' , type: 'electric'},
            { name: 'Yanma', id : '#0193' , type: 'bug/flying'},
            { name: 'Nidoqueen', id : '#0031' , type: 'poison/ground'},
            { name: 'Chimecho', id : '#0358' , type: 'pyschic'},
            ],
            skipDuplicates: true
        })
}

seed()