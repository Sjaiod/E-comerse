import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex gap-1 justify-center  items-center">
        <h2 className='mr-1'>This web was build and designed by Sajid </h2>
        <a
          href="https://www.fiverr.com/your-fiverr-account"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-green-500 hover:text-white mr-4"
        >
          <SiFiverr className="inline-block mr-1" />
          Fiverr
        </a>
        <a
          href="https://www.instagram.com/your-instagram-account"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#ee2a7b] hover:text-white"
        >
          <FaInstagram className="inline-block mr-1" />
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer
