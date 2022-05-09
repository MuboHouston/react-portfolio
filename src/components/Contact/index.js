import React, { useState } from "react";

function ContactForm() {
    //sets the initial state to empty strings
    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;
    
    //syncing the internal state of the component formState with the user input from the DOM. 
    function handleChange(e){
        //the name property of target refers to the name attribute of the form element
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    
    console.log(formState)

    //this function handles submission of the form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;