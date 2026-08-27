import { AppCard } from "./AppCards"
import "./Playstore.css"
import { useState } from "react"

export const PlayStore = () =>{
    const [input , setInput] = useState("")
    return(
        <section className="Container">
        <header >
            <div className="head">
            <h1>PlayStore</h1>
            </div>
            <div className="input">
            <form >
                <input 
                type="text" 
                placeholder="Enter Any App And Game" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            </form>
            </div>
        </header>

<section className="cardDetail">
<section className="content">
    <h3>HOME</h3>
    <h3>GAME</h3>
    <h3>APP</h3>
    <h3>MOVIE</h3>
    <h3>BOOKS</h3>
</section>

<AppCard/>
</section>
        </section>
    )
}