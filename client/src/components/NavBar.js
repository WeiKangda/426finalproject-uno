import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

function NavBar() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

    return(
        <header>
        <div class="container">
          <h1 class="logo"></h1>
          <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/gamepage">Play a Game</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
                <button className='game-button orange'><Link to = "/">Log Out</Link></button>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default NavBar;