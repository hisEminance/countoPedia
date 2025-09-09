import React, { useState } from "react";
import attack from './images/attack.png';
import defence from './images/defend.png';
import Board from "./Components/Board";
import Img from "./Components/Img";
import Button from "./Components/Button";

  const defaultState = {
    count: 10,
    lastPlay: "",
    gameStatus: ""
  };


export default function Counter() {
  const [state, setState] = useState(defaultState);

  const handleAttack = () => {
    const newCount = state.count + Math.round(Math.random() * 10);
    setState({
      count: newCount,
      lastPlay: "Attack",
      gameStatus: newCount > 10 ? "You won" : state.count,
    });
  };
  

  const handleDefence = () => {
    const newCount = state.count - Math.round(Math.random() * 10);
    setState({
      count: newCount,
      lastPlay: "Defence",
      gameStatus: newCount < 10 ? "You lose" : state.count,
    });
  };

  const handleRandomPlay = () => {
    const playMode = Math.round(Math.random());
    playMode == 0 ? handleAttack() : handleDefence();
  };

  const handleReset = () => {
    setState(defaultState);
   };
   
  return (
        <div className="row text-white">
          <Board
           count = {state.count}
           lastPlay = {state.lastPlay}
           gameStatus = {state.gameStatus}
          />
          <div className="col-6 col-md-3 offset-md-3">
            <Img alt = "attack" src = {attack} borderColor="green" onClick={handleAttack}/>
            <Img alt = "defend" src = {defence} borderColor="red" onClick={handleDefence}/>
          </div>

          <div className="col-12 col-md-4 offset-md-4">
              <Button label = "Reset" onClick={handleReset} className="btn btn-warning" />
              <Button label = "Random Play" onClick={handleRandomPlay} className="btn btn-secondary" />
          </div>
        </div>
    )
  };
