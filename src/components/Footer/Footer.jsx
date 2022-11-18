import React from 'react'
import "../../Styles/Footer/Footer.css"

const linkItem = [
  {
    title: <p>About Us</p>
  },
  {
    title: <p>Contact Us</p>
  },
  {
    title: <p>Track Order</p>
  },
  {
    title: <p>Terms & Conditions</p>
  },
  {
    title: <p>Privacy Policy</p>
  },
  {
    title: <p>Sell With Us</p>
  },
  {
    title: <p>Shipping And Returns</p>
  },
];

const socialItem = [
  {
    image: <img src="/images/Group1432.svg" alt="facebook" className='' />,
    title: <p>/YESHTERY</p>
  },
  {
    image: <img src="/images/Group1435.svg" alt="linkedln" className='' />,
    title: <p>/YESHTERY</p>
  },
  {
    image: <img src="/images/Group1433.svg" alt="instagram" className='' />,
    title: <p>/YESHTERY</p>
  },
  {
    image: <img src="/images/Group1434.svg" alt="twitter" className='' />,
    title: <p>/YESHTERY</p>
  },
];

const cashItem = [
  {
    image: <img src="/images/Rectangle586.png" alt="cashon" />,
  },
  {
    image: <img src="/images/Group1437.png" alt="visa" />,
  },
  {
    image: <img src="/images/Group1438.png" alt="master" />
  },
];

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='content'>
          <div className='description'>
            <img src="/images/Group1436.svg" alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              <br /><br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia <br /> <br /> m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            </p>
          </div>
          <div className='contact'>
            <p className='news-letter'>Subscribe to our newsletter</p>
            <div className='search-bar'>
              <input type="text" placeholder='Enter Your Mail' />
              <button className='subscribe'>
                <span>Subscribe</span>
                <img src="/images/Group1431.svg" alt="search" className='search-icon' />
              </button>
            </div>
            <div className='list'>
              <div>
                <ul>
                  {linkItem.map((item, index) => (
                    <li key={index}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {socialItem.map((item, index) => (
                    <li key={index} className='social'>
                      {item.image}
                      <span className='social-title'>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='copyrights'>
          <div>
            <p>© 2021 yeshtery, all rights reserved.</p>
          </div>
          <div className='cash'>
            {cashItem.map((item, index) => (
              <div key={index} className='cash-item'>
                {item.image}
              </div>
            ))}
          </div>
          <div className='powered'>
            <p className='powered-title'>Powered By</p>
            <img src="/images/Group1439.svg" alt="nasnav" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer