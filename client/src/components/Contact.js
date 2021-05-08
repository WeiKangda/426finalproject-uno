import React from 'react'
import GoogleMap from './Map'
import NavBar from './NavBar'
import ResultsAdd from './ResultsAdd'
function Contact() {
    return(
        <div>
            <NavBar/>
            <p class = 'contact'>Kangda Wei</p><br/>
            <p class = 'contact'>Email: kangda@live.unc.edu</p><br/>
            <p class = 'contact'>Phone: 919-904-5280</p>
            <ResultsAdd/>
            <GoogleMap />
        </div>
    );
}


export default Contact;