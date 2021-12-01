export default function PlayerCard(props){

  const handleClick = () => {
    props.incrementScore(props.id)
  }

  return(
    <div>
      <ul>
        <li>
            {props.name} <b>score:</b> 
            {props.score} 
            <button onClick={handleClick}>+ 1</button></li> 
      </ul>
    </div>
  )
}