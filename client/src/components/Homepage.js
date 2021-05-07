import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'
import NavBar from './NavBar'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')

    return (
        <div className='Homepage'>
            <NavBar/>
            <div className='homepage-menu'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_CvaIyRE1Tw" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
        </div>
    )
}

export default Homepage
