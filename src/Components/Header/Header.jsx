import React from 'react'
import './Header.css'
import Img1 from '../../assets/pl.jpeg'
const Header = () => {
  return (
    <div className='header'>
        <div className='text-item'>
            <h1>Relentless attacks on Palestine have taken<br/> innocent lives and left the region in deep sorrow.</h1>
            <p>Gaza has been living through years of fear and loss. Homes are gone, families are torn, 
              and innocent lives have been taken. Yet the people continue to stand with courage,
               holding on to hope even in the darkest moments.
               Their struggle is a reminder of strength, pain, and the desire for peace.</p>

           <button><a href='#'>Show More</a></button>
        </div>

        <div className='header-img'>
         
        </div>
    </div>
  )
}

export default Header