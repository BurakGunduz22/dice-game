import React, { useState } from 'react';
import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';
const dices =[dice1,dice2,dice3,dice4,dice5,dice6];
const style = {
  padding : 100,
}
function DiceRoller() {
  const [FirstdiceValue, setFirstDiceValue] = useState(1);
  const [SeconddiceValue, setSecondDiceValue] = useState(1);
  function rollDice() {
    const FirstDiceValue = Math.floor(Math.random() * 6) + 1;
    const SecondDiceValue = Math.floor(Math.random() * 6) + 1;
    setFirstDiceValue(FirstDiceValue);
    setSecondDiceValue(SecondDiceValue);
  }

  return (
    <div style={style}>
      <h2>Dice Roller</h2>
      <img src = {dices[FirstdiceValue-1]}/>
      <img src = {dices[SeconddiceValue-1]}/>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
