import { PrismaClient } from "@prisma/client";
import styles from './styles/CardTemplate.module.scss'
const prisma = new PrismaClient();

export default async function Home() {
  const cards = await prisma.card.findMany();

  function cardLayout() {
    return cards.map((card, index) => {
      return <div key={index} className={styles.cardTemplate}>
        <h3 id="card-id">{card.name}</h3>
        <div className="percent-understood">
          <p>%</p>
        </div>
      </div>
    }) 
  }

  return (
    <main className="main-container">
      <h1>Dashboard</h1>
      <div className="description">
        <p>&emsp;&emsp;&emsp;Review your Pokemon types knowledge with these 
          flashcards! If you're restarting a playthrough of one
          of your favorite Pokemon games for that childlike
          nostalgia feeling, then you need to make sure 
          you remember the type advantages and disadvantages
          of the Pokemon you may encounter! Feel free to add 
          your own cards as you review, and test your 
          memory so that you don't run into any wild Pokemon 
          without being prepared!
        </p>
      </div>
      <h1>Review All Cards</h1>
      <div className="all-cards">
        {cardLayout()}
      </div>
    </main>
  );
}