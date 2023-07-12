import React from 'react';
import 'tailwindcss/tailwind.css';
import Logo from '../../assets/Logos/Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return(
    <footer class="bg-black pb-5">
    <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-300 sm:justify-start">
      <Link to='/'>
        <img className=" pl-8 flex justify-between w-40 cursor-pointer" src={Logo} alt="logo"/>
        </Link>
      </div>

      <p class="mt-4 text-sm text-center text-white lg:text-right lg:mt-0">
        T&C &nbsp; Developers; Privacy & Policy &nbsp; Developers
      </p>
    </div>
    </div>
     </footer>  
  )
} 

export default Footer;
