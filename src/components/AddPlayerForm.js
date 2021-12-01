import { useState } from "react"

export default function AddPlayerForm(props){

  //it holds whatever the user types
  const [ name, setName ] = useState("")

  //function to submit the form
  const handleSubmit = (event) => {
    //it prevents the form from refreshing the page
    event.preventDefault()
    props.addPlayer(name)
    setName("")
  }

  return(
    <div>
      <form>
        {/* input field always takes value and onChange */}
        <input 
          value={name} 
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit}>Add Player</button>
      </form>
    </div>
  )
}