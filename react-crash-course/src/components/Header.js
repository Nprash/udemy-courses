import React from 'react';
import  "../App.css";

const Header = () => {
  
  return (
    <div>
      <nav >
        <img alt='logo' src='https://source.unsplash.com/100x50/?star'/>
        <ul >
            <li >
                <a  href='https://translate.google.co.in/?sl=en&tl=te&text=deprived&op=translate'>Home</a>
            </li>
            <li>
                <a href='https://translate.google.co.in/?sl=en&tl=te&text=deprived&op=translate'>About</a>
            </li>
            <li>
                <a href='https://translate.google.co.in/?sl=en&tl=te&text=deprived&op=translate'>Contact us</a>
            </li>
            <li>
                <a href='https://translate.google.co.in/?sl=en&tl=te&text=deprived&op=translate'>Services</a>
            </li>
        </ul>

      </nav>
    </div>
  )
}

export default Header
