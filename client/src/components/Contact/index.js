import React, { useRef, useState } from "react";
import { validateEmail } from '../../utils/helpers'
import { useMutation } from '@apollo/client'
import { ADD_CONTACT } from '../utils/mutations'
import emailjs from 'emailjs-com'

function ContactForm() {
    //errorMessage hook- the initial error message is an empty string
    const[errorMessage, setErrorMessage] = useState('')

    //formState hook- sets the initial state to empty strings
    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [addContact] = useMutation(ADD_CONTACT)
    const form = useRef();
    
    //syncing the internal state of the component formState with the user input from the DOM. 
    function handleChange(e){
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)

            //isValid conditional statement 
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            //no validation needed for message or name inputs, so just checks that something was inputted in those two fields. If not, then an error message will appear
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
            console.log('errorMessage', errorMessage);
        }

        //wrapped in a conditional, so that the state only updates if the form data passed the quality tests
        if(!errorMessage) {
            //the name property of target refers to the name attribute of the form element
            setFormState({...formState, [e.target.name]: e.target.value}
            )
        }
    }   
    
    // console.log(formState)

    //this function handles submission of the form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState)

        await emailjs.sendForm('gmail', 'template_dmppl69', form.current, 'YUzjj4QzlrQbGtNnp')
        .then((result) => {
            alert("Message sent! Talk soon :)") 
            addContact({
                variables: {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message
                }
            })
            setFormState({name: '', email: '', message: ''})
            window.location.assign('/')
            console.log(result.text, formState);
        }, (error) => {
            console.log(error.text);
        });                                                                                                             
    }

    return(
        <section className="contact">
            <div>
                <h1 className="section-title">Contact Me</h1>
            </div>
            <div id="contact-form">
                <p>
                    Got a question, proposal, or just want to say hello?<br />
                    <span>Go ahead.</span>
                </p>
                <form ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>    
        </section>
    )
}

export default ContactForm;