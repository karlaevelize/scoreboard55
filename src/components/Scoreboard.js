import { useState } from "react"
import PlayerCard from "./PlayerCard";

export default function Scoreboard(){

  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const incrementScore = (id) => {
    //mapping the players array
    const updatedPlayers = players.map(player => {
      //if it's the id we want to update, we do score + 1
      if (player.id === id){
        return {
          //... copying the player data
          ...player, // = name: player.name, id: player.id
          score: player.score + 1
        }
        //else we just return the player as it's
      } else {
        return player
      }
    })
    //updating 
    setPlayers(updatedPlayers)
  }

  return(
    <div>
      {players.map(player => <PlayerCard 
        key={player.id}
        name={player.name} 
        score={player.score}
        id={player.id}
        //callback props
        incrementScore={incrementScore}/>)}
    </div>
  )
}