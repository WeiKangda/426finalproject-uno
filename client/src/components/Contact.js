import React from 'react'
import GoogleMap from './Map'
import NavBar from './NavBar'

function Contact() {
    return(
        <div>
            <NavBar/>
            <p class = 'contact'>Kangda Wei</p><br/>
            <p class = 'contact'>Email: kangda@live.unc.edu</p><br/>
            <p class = 'contact'>Phone: 919-904-5280</p>
            <GoogleMap />
        </div>
    );
}


export default Contact;