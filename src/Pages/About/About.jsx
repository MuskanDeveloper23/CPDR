import React, { useEffect, useRef } from 'react'
import './About.css'
import Footer from '../../Footer/Footer'
import Img from '../../assets/group2.jpg'
import PDF from '../../assets/PDF/manifesto_cpdrtn.pdf'

const About = () => {

  const headlineRef = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) =>{
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        });
      },
      {threshold : 0.3}
    );
    if(headlineRef.current){
      observer.observe(headlineRef.current);
    }
  }, []);
  return (
    <div className='About-us'>
     <div className='main-box-container'>
     </div>
     <div className='About-headline' ref={headlineRef}>
      <h1>About Us</h1>
     </div>
    
    <div className='information'>
      <div className='Text-content'>
        <h1>What is CPDR</h1>
        <p>CPDR (Committee for Protection of Democratic Rights)
            is a people’s collective that works to protect democratic rights, civil liberties, and human dignity.
            It raises its voice against injustice, discrimination, state violence, and the misuse of power.</p>
          <p>CPDR-TN investigates rights violations, supports affected communities, creates public awareness, and promotes peaceful democratic action.
             The organisation stands with individuals and groups whose voices are ignored or suppressed, ensuring that justice, equality, and freedom remain accessible to everyone.</p>

          <a href={PDF
          } target="_blank" rel="noopener noreferrer">
           <button>Read Full Manifesto</button>
           </a>
      </div>
      

      <div className='Image-box'>
        <img src={Img} alt=''/>
      </div>
    </div>

    <div className='pera-text-box'>
      <h1>Our Mission</h1>
      <hr/>
      <p>We, the members of CPDR-TN, are committed to protecting democratic rights and civil liberties for all people.
         We take it as our responsibility to stay alert against any form of injustice, discrimination, 
         or violation of fundamental rights. We actively work to create public awareness, 
         educate citizens about their constitutional rights, and support movements that fight for justice and equality. 
         We participate in fact-finding missions, offer legal assistance, engage in public discussions,
          and stand with people during their struggles. Our collective aim is to build a society where justice, equality, 
        and freedom are not just written principles, but real and accessible to every individual.</p>





         <h1 className='right-heading'>Our Role and Responsibility</h1>
          <hr/>
      <p className='right-pera'>We believe it is our responsibility to stand with people whose voices are ignored or suppressed.
         As members of CPDR-TN, we work together to defend human dignity, support democratic values,
          and challenge any abuse of power. We engage with communities, listen to their struggles,
           and bring their issues to public attention. Through our collective efforts—awareness programs,
            investigations, legal support, and peaceful action—we aim to ensure that every individual receives fair treatment,
             equal opportunity, and the right to express themselves without fear.
         Our role is not just to observe, but to act with courage, unity, and commitment.</p>

                  <h1>Our Commitment to Change</h1>
                   <hr/>
      <p>At CPDR-TN, we are committed to transforming awareness into action. 
        We believe that meaningful change arises when communities are empowered,
         injustices are confronted, and voices long silenced are amplified. 
         Our efforts focus on education, advocacy, and collaboration with local and national partners to create a society
          where fairness, transparency, and respect for human rights are the norm. 
        Every initiative we undertake reflects our dedication to building a future where equality and justice are accessible 
        to all.</p>



        <h1 className='right-heading'>Building a Future Together</h1>
         <hr/>
      <p className='right-pera'>At CPDR-TN, we are committed to transforming awareness into action. 
        We believe that meaningful change arises when communities are empowered,
         injustices are confronted, and voices long silenced are amplified. 
         Our efforts focus on education, advocacy, and collaboration with local and national partners to create a society
          where fairness, transparency, and respect for human rights are the norm. 
        Every initiative we undertake reflects our dedication to building a future where equality and justice are accessible 
        to all.</p>
    </div>



  

   
      <div className='contact-container'>
        <h2>Get in Touch</h2>
        
        <form className='contact-form'>
          <div className='input-group'>
            <input type='text' placeholder='Your Name' required />
          </div>

          <div className='input-group'>
            <input type='email' placeholder='Your Email' required />
          </div>

          <div className='input-group'>
            <textarea placeholder='Your Message' rows='5' required ></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>

      
    </div>

    <div className='Social_links'>

    </div>

     <Footer/>
    </div>
  )
}

export default About
