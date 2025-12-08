import React from 'react'
import './box.css' 
import Ship from '../../src/assets/50-ship.jpg'
const box = () => {
  return (
    
      <div className='container'>
       <div className='box'>
         <h2>SUMUD FLOTILLA</h2>
         <p>The Sumud Flotilla is a peaceful solidarity mission sent to support the people of Gaza. 
          “Sumud” means steadfastness — standing firm even in suffering. This flotilla carries activists,
           humanitarian voices, and a message of hope for those living under blockade. Its purpose is not to fight, 
           but to reach Gaza’s shores with dignity, break the silence, 
          and remind the world that every life deserves freedom, safety, and justice.</p>
           
       </div>
       

       <div className='box-img'>
        <img src={Ship}/>
       </div>
      </div>
    
  )
}

export default box
