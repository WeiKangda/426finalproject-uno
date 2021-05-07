import React from 'react'
import GoogleMap from './Map'
import NavBar from './NavBar'

function Contact() {
    return(
        <div>
            <NavBar/>
            <h>Kangda Wei</h><br/>
            <h>Email: kangda@live.unc.edu</h><br/>
            <h>Phone: 919-904-5280</h>
            <GoogleMap />
        </div>
    );
}


export default Contact;