import React from "react";

export default function Board ({count, lastPlay, gameStatus}) {
 return ( 
    <>
        <h1>Game Score: {count}</h1>
        <p>You win at +10 points and lose at -10 points</p>
        <p>Last Play: {lastPlay}</p>
        <h3>Game status: {gameStatus}</h3>
    </>
 ); 
}