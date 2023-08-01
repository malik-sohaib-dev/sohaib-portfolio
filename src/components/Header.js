import React from 'react';
// images
import Logo from '../assets/logo.webp';
// CV
import CV from '../assets/#Sohaib Ahmad CV.pdf';

// link
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='logo' />
        </a>
        {/* button */}
        <a href={CV} download="#Sohaib-Ahmad-CV"
        target="_blank" rel="noreferrer">
          <button className='btn btn-sm'>Get My CV</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;