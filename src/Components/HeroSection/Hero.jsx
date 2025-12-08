import React from 'react'
import './Hero.css'
import ButtonImg from '../../assets/button-img.jpg'
import hunger from '../../assets/gaza.PNG'
const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='img-section'>
             <img src={hunger}/>
      </div>

      <div className='About-section'>
       

        <h2>Starving Children of Gaza Struggling for Life</h2>
        <p>Innocent children in Gaza are facing the harshest reality of hunger and deprivation.<br/>
             Their tiny hands reach for food that is scarce, and their eyes tell stories of pain, fear, and longing.<br/>
              Yet, even in the darkest moments, their courage shines through, <br/>
            reminding the world of resilience, hope, and the urgent need for support.</p>

            <p>The hungry children of Gaza dream of a life where they can study, grow, and follow their dreams.
                They do not have enough food, safety, or a proper school, yet their eyes still shine with hope.
                They want to become doctors, teachers, and builders of a better future.
                These children only need a chance — a chance to learn, to live without fear,
                and to shape a life where hunger and conflict do not decide their future.</p>

            <div className='button-img'>
               <h3>More Information </h3>
            </div>
            
      </div>
    </div>
  );
}

export default Hero
