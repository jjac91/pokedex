import React from "react"
import "./Pokecard.css"
function Pokecard(props){
    const api = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let img = `${api}${props.id}.png`
    return(
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img src = {img} alt="a pokemon"></img>
            <div>Type: {props.type}</div>
            <div>Exp: {props.base_experience}</div>

        </div>
    )
}
export default Pokecard