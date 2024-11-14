'use client'

import React, { useState } from 'react'
import styles from '../styles/CardTemplate.module.scss'

export default function Card_Template({cards}) {
  const [counter, setCounter] = useState(0)
  const [pokemonCard, setPokemonCard] = useState(cards[counter].name)
  const [easyMode, setEasyMode] = useState()
  const [mediumMode, setMediumMode] = useState()
  const [hardMode, setHardMode] = useState()

  const flipCard = () => {
    if (pokemonCard === cards[counter].name) {
      setPokemonCard(cards[counter].type)
    } else if (pokemonCard === cards[counter].type) {
      setPokemonCard(cards[counter].name)
    }
  }

  function displayIndividualFlashcard() {
    return <div onClick={flipCard} className={styles.cardTemplate}>
      <div id="card-id" dangerouslySetInnerHTML={{ __html: pokemonCard }}></div>
      <div className="percent-understood">
        <p>%</p>
      </div>
    </div>
  }

  const changeCard = () => {
    setPokemonCard(cards[counter+1].name)

    if (counter < (cards.length-2)) {
      setCounter(counter+1)
    }
  }

  function percentUnderstood(percent) {

  }

  // TODO:
  // - click easy/medium/hard button to update the individual card
  // - the card's updates: % for amount understood AND scheduled time
  // easy = 75% + 20s / medium = 50% + 15s / hard = 20% + 10s

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
        <button onClick={percentUnderstood(.75)} className='easy'>Easy</button>
        <button onClick={percentUnderstood(.5)} className='medium'>Medium</button>
        <button onClick={percentUnderstood(.25)} className='hard'>Hard</button>
      </div>
    </main>
  )
}

