'use client'
import { useEffect, useState } from "react"
import styles from '../styles/CardTemplate.module.scss'

export default function All_Cards({cards}) {
    const [flippedCards, setFlippedCards] = useState({});

    const flipCard = (card) => {
        setFlippedCards((prevFlippedCards) => ({
            ...prevFlippedCards,
            [card.id]: !prevFlippedCards[card.id]
        }));
    };

    const cardLayout = () => {
        return cards.map((card, index) => {
            const isFlipped = flippedCards[card.id];

            return (
                <div
                    onClick={() => flipCard(card)}
                    key={index}
                    className={styles.cardTemplate}
                >
                    {isFlipped ? (
                        <h3 dangerouslySetInnerHTML={{ __html: card.type }} />
                    ) : (
                        <h3 dangerouslySetInnerHTML={{ __html: card.name }} />
                    )}
                </div>
            );
        });
    };

    return (
        <main>
            {cardLayout()}
        </main>
    );

}