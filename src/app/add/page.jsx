import React from 'react'
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export default async function AllCards() {
//   const cards = await prisma.card.findMany();

  return (
    <main className='main-container'>
      <h1>Add Your Own Cards</h1>
    </main>
  )
}
