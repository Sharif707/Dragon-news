import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col items-center gap-5'>
          <div>
            <img className='w-[350px]' src={logo} alt="" />
            
          </div>
          <p className='text-gray-500'>
          Journalism Without Fear or Favour
          </p>
          <p>
            {
                moment().format("dddd, MMMM Do YYYY")
            }
          </p>
            
        </div>
    );
};

export default Header;