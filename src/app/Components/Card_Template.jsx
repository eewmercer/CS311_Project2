'use client'

import React, { useState } from 'react'
import styles from '../styles/CardTemplate.module.scss'
import { PrismaClient } from "@prisma/client";
import {percentUnderstood} from '../../../App'
const prisma = new PrismaClient();

export default function Card_Template({cards}) {
  const [counter, setCounter] = useState(0)
  const [pokemonCard, setPokemonCard] = useState(cards[counter].name)
  const [percentage, setPercentage] = useState(0)

  const flipCard = () => {
    if (pokemonCard === cards[counter].name) {
      setPokemonCard(cards[counter].type)
    } else if (pokemonCard === cards[counter].type) {
      setPokemonCard(cards[counter].name)
    }
  }

  console.log(cards)

  function displayIndividualFlashcard() {
    return <div onClick={flipCard} className={styles.cardTemplate}>
      <div id="card-id" dangerouslySetInnerHTML={{ __html: pokemonCard }}></div>
      <div className="percent-understood">
        <p id='mode' dangerouslySetInnerHTML={{ __html: percentage }}></p>
      </div>
    </div>
  }

  const changeCard = () => {
    setPokemonCard(cards[counter+1].name)

    if (counter < (cards.length-2)) {
      setCounter(counter+1)
    }
  }

  return (
    <main>
      <div className='cards-display'>
        {displayIndividualFlashcard()}
        <button onClick={changeCard}>Next</button>
      </div>
      <div className='difficulty-description'>
        <p>How difficult is this card?</p>
      </div>
      <div className='level-buttons'>
        <button onClick={percentUnderstood(cards, 75, counter)} className='easy'>Easy</button>
        <button onClick={percentUnderstood(cards, 50, counter)} className='medium'>Medium</button>
        <button onClick={percentUnderstood(cards, 25, counter)} className='hard'>Hard</button>
      </div>
    </main>
  )
}

