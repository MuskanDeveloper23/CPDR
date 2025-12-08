import React, { useState } from 'react'
import './contact.css'
import Footer from '../../Footer/Footer'
const Contact = () => {
  const[form, setForm] = useState({
    name:"",
    email:"",
    message: "",
  });

  const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    alert("Your message has been sent!")
  };


  return (
    <div className='contact-page'>
    <div className='contact'>
     <h1>Get in touch with us for<br/> more information</h1>
     <p>Feel free to reach out to us for any help or queries.</p>
    </div>

    <div className='two-div'>

      <div className='contact-info'>

         <div className='contact-box'>
          <h4>Phone Number</h4>
          <i class="fa-solid fa-phone"></i> <span>+91 9911050439</span>
         </div>


          <div className='contact-box'>
          <h4>Email</h4>
          <i class="fa-solid fa-envelope"></i><span>chalochle@gmail.com</span><br/>
          <i class="fa-solid fa-envelope"></i><span>chalosath@gmail.com</span>
         </div>



           <div className='contact-box'>
          <h4>Location</h4>
          <i class="fa-solid fa-location-dot"></i><span>West Rajiv nager, gali no.6, gurugram Haryana</span>
         </div>
      </div>




      <div className='contact-form-container'>
        <form className='contact-form2' onSubmit={handleSubmit}>
          <div className='input-group'>
            <lable>Your Name</lable>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Enter your name'  />
          </div>

          <div className='input-group'>
            <lable>Your Email</lable>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Enter Your email' />
          </div>

          <div className='input-group'>
            <lable>Your Message</lable>
            <textarea name='message'value={form.message} onChange={handleChange} placeholder='Type Your message...' />
          </div>

          <button type='submit' className='form-send-btn'>Send Message</button>
        </form>
      </div>
    </div>
<Footer/>
    </div>
  )
}

export default Contact
