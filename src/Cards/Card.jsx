import React from 'react'
import './Card.css'
import Isrel from '../../src/assets/isrel.jpg'
import Bethak from '../../src/assets/bethak.jpg'
import Death from '../../src/assets/death.jpg'
import Hath from '../../src/assets/logo.PNG'
import Distory from '../../src/assets/bache-study.jpg'
import Hmaas from '../../src/assets/gaza-background.jpg'
const Card = () => {
  return (
    <div className='Cards'>
      <div className='Card-1'>
        <h1><a href='#'>Isrel President </a></h1>
        <div className='card-box'>
          <img src={Isrel} alt='' />
          <p>The president of Israel has shown no mercy, not even to the children of Gaza.
            His actions make it seem like his mission is to take complete control over Gaza.</p>

          </div>
                    <hr />
          <div className='card-pera'>
            <p>Europe has a new fear: China may 'stop its' buses right on roads</p>
            <div class="line"></div>
            <p>YouTube TV subscribers to get this premium feature free after Disney deal;</p>
          
        </div>
      </div>


      <div className='Card-2'>
        <h1><a href='#'>UN Approves US Plan </a></h1>
        <div className='card-box'>
          <img src={Bethak} alt='' />
          <p>UN Approves US Plan, Paves Way for American Control Over Gaza and Delays Palestinian Statehood.</p>

 </div>
          <hr />
          <div className='card-pera'>
            <p>New York (QNN) — The UN Security Council has approved a US-sponsored resolution on Gaza with 13 votes in favor, while Russia and China abstained.</p>
         <div class="line"></div>
            <p>he UN vote showed how hard it is to find consensus on the Gaza issue.</p>
          </div>
        </div>
     


      <div className='Card-3'>
        <h1><a href='#'>Also In News</a></h1>
        <div className='card-box'>
          <img src={Death} alt='' />
          <p>Polishing Genocide: Israel’s Desperate War to Erase History.</p>
         </div>
          <hr />
          <div className='card-pera'>
            <p>When schools and media become targets, it’s not just war — it’s a plan to erase history.</p>
             <div class="line"></div>
            <p>This entire effort seems to have one purpose — to polish their crimes and blur the victims’ stories.</p>
          </div>
        </div>



          <div className='Card-1'>
        <h1><a href='#'> Hamas Group</a></h1>
        <div className='card-box'>
          <img src={Hmaas} alt='' />
          <p>The president of Israel has shown no mercy, not even to the children of Gaza.
            His actions make it seem like his mission is to take complete control over Gaza.</p>

          </div>

                    <hr />
          <div className='card-pera'>
            <p>Europe has a new fear: China may 'stop its' buses right on roads</p>
            <div class="line"></div>
            <p>YouTube TV subscribers to get this premium feature free after Disney deal;</p>
          
        </div>
      </div>


      <div className='Card-2'>
        <h1><a href='#'>Power </a></h1>
        <div className='card-box'>
          <img src={Hath} alt='' />
          <p>UN Approves US Plan, Paves Way for American Control Over Gaza and Delays Palestinian Statehood.</p>

 </div>
          <hr />
          <div className='card-pera'>
            <p>New York (QNN) — The UN Security Council has approved a US-sponsored resolution on Gaza with 13 votes in favor, while Russia and China abstained.</p>
         <div class="line"></div>
            <p>he UN vote showed how hard it is to find consensus on the Gaza issue.</p>
          </div>
        </div>
     


      <div className='Card-3'>
        <h1><a href='#'>Education</a></h1>
        <div className='card-box'>
          <img src={Distory} alt='' />
          <p>Polishing Genocide: Israel’s Desperate War to Erase History.</p>
         </div>
          <hr />
          <div className='card-pera'>
            <p>When schools and media become targets, it’s not just war — it’s a plan to erase history.</p>
             <div class="line"></div>
            <p>This entire effort seems to have one purpose — to polish their crimes and blur the victims’ stories.</p>
          </div>
        </div>
      
    </div>



  )
}

export default Card
