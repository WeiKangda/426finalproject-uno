import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

function History() {
    return(
        <div className='Homepage'>
            <NavBar/>
            <div className='homepage-menu'>
                <Container>
                    <div>
                        <h id = 'history'>History of the Famous Game</h>
                        <p>The game was originally developed in 1971 by Merle Robbins in Reading, Ohio, a suburb of Cincinnati. When his family and friends began to play more and more, he spent $8,000 to have 5,000 copies of the game made. He sold it from his barbershop at first, and local businesses began to sell it as well. Robbins later sold the rights to UNO to a group of friends headed by Robert Tezak, a funeral parlor owner in Joliet, Illinois, for $50,000 plus royalties of 10 cents per game. Tezak formed International Games, Inc., to market UNO, with offices behind his funeral parlor. The games were produced by Lewis Saltzman of Saltzman Printers in Maywood, Illinois. In 1992, International Games became part of the Mattel family of companies.</p>
                    </div>
                </Container>
                <img src={require('../assets/logo.png').default} width='200px' />
                
            </div>
        </div>
        
    );
}

export default History;