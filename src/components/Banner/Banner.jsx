import React from 'react'
import "../../Styles/Banner/Banner.css"
import { Link } from "react-router-dom";

const linkItem = [
  {
    link: <Link className='link' to='/'>Men</Link>,
  },
  {
    link: <Link className='link' to='/'>Woman</Link>,
  },
  {
    link: <Link className='link' to='/'>Unisex</Link>,
  },
  {
    link: <Link className='link' to='/'>kids</Link>,
  },
  {
    link: <Link className='link' to='/'>Best Sellers</Link>,
  },
  {
    link: <Link className='link' to='/'>New Arrivals</Link>,
  },
  {
    link: <Link className='link' style={{ color: 'red' }} to='/'>Offers</Link>,
  },
];

function Banner() {
  return (
    <div className='banner'>
      <div className='container'>
        <ul className='content'>
          {linkItem.map((item, index) => (
            <li key={index}>
              {item.link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Banner
