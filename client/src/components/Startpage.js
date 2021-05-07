import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'
import Login from './Login'


const Startpage = () => {
    const [roomCode, setRoomCode] = useState('')

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
                <img src={require('../assets/logo.png').default} width='200px' />
                <div>
                    <Login/>
                </div>
            </div>
        </div>
    )
}

export default Startpage
