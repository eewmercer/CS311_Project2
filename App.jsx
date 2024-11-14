import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function percentUnderstood(cards, modeNumber, counter) {
  // - the card updates mode value for amount understood
  // easy = 75% + 20s / medium = 50% + 15s / hard = 20% + 10s

    const response = await prisma.card.update({
      whereUnique: {
        userId: cards[counter].id,
      },
      data: {
        mode: modeNumber
      }
    });
}


// - adds new card base on user input
export async function addNewCard(question, answer) {
  const response = await prisma.card.create({
    data: {
      id: 'madeUpID1',
      name: question,
      type: answer,
      mode: 0
    }
  });

  console.log(response)
}