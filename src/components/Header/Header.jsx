import React from 'react'
import "../../Styles/Header/Header.css"

const linkItem = [
  {
    image: <img src="/images/Group756.svg" alt="phone" className='icon2' />,
    title: <p>Contact Us</p>
  },
  {
    image: <img src="/images/Group758.svg" alt="phone" className='icon2' />,
    title: <p>Track Order</p>
  },
  {
    image: <img src="/images/Group753.svg" alt="location" className='icon2' />,
    title: <p>Find A Store</p>
  },
];

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='content'>
          <img src="/images/Group770.svg" alt="logo" className='icon' />
          <img src="/images/Group769.svg" alt="yeshtery" />
          <div className='quote'>
            <img src="/images/Path797.svg" alt="arrow" className='arrow' />
            <p>Valentine’s Day Offers! Buy Two Get One Free <span className='shop'>Shop Now</span></p>
            <img src="/images/Path796.svg" alt="arrow" className='arrow' />
          </div>
          <div>
            <ul>
              {linkItem.map((item, index) => (
                <li key={index}>
                  {item.image}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
