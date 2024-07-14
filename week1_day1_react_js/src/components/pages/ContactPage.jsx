import React from 'react'
import ContactTextView from '../views/contactViews/ContactTextView'
import ContactFormView from '../views/contactViews/ContactFormView'

const ContactPage = () => {
    return (
        <>
            <h1>Contact form will display 2 views components</h1>
            <ContactTextView/>
            <ContactFormView/>
        </>
    )
}

export default ContactPage