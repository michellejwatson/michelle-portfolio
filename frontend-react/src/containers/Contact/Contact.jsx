import React, { useState } from 'react';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import { FaEnvelope, FaMobile } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = form;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contactMe = {
      _type: 'contactMe',
      name: name,
      email: email,
      message: message,
    }

    client.create(contactMe)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setForm({ name: '', email: '', message: '' }); // Reset the form fields
      })
  }
 
  return (
    <>
      <h1 className='head-text'>Contact Me</h1>
      <div className='app__contact-cards'>
        <div className='app__contact-card'>
          <FaEnvelope />
          <a href='mailto:michellejwatson1@gmail.com' className='p-text'>michellejwatson1@gmail.com</a>
        </div>
        <div className='app__contact-card'>
          <FaMobile />
          <a href='tel: +1 (647)464-0526' className='p-text'>+1 (647)464-0526</a>
        </div>
      </div>

      {isFormSubmitted && 
        <div className='app__contact-cards'>
          <div className='app__contact-card'>
            <h2>
              Thank you for reaching out!<br />
              Your message has been sent.
            </h2>
          </div>
        </div>
      }

      {!isFormSubmitted &&
        <div className='app__contact-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Enter your name here.' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Enter your email here.' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <textarea className='p-text' placeholder='Enter your message here.' name='message' value={message} onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'}</button>
        </div>
      }
      
    </>
  )
}

export default AppWrap(Contact, 'contact');