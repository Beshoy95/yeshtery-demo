import React, { Component } from 'react'
import "../../Styles/Navbar/Navbar.css"
import ModalContainer from './../Modal/Modal';

class Navbar extends Component {
  state = {
    openModal: false
  }
  onClickButton = e => {
    e.preventDefault()
    this.setState({ openModal: true })
  }
  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='content'>
            <div className='search-bar'>
              <img src="/images/Path774.svg" alt="search" className='search-icon' />
              <input type="text" placeholder='Search' />
            </div>
            <img src="/images/Group745.svg" alt="adidas" className='sport-icon' />
            <div>
              <ul>
                <li>
                  <>
                    <img onClick={this.onClickButton} src="/images/Path772.svg" alt="cart" className='icon2' style={{ cursor: 'pointer' }} />,
                    <p>Cart</p>
                    <div className='cart-icon'>{this.props.totalQuantity}</div>
                    <ModalContainer open={this.state.openModal} onClose={this.onCloseModal} selectedproduct={this.props.selectedproduct} totalPrice={this.props.totalPrice} />
                  </>
                </li>
                <li>
                  <img src="/images/Path771.svg" alt="wishlist" className='icon2' />,
                  <p>Wishlist</p>
                </li>
                <li>
                  <img src="/images/Path773.svg" alt="login" className='icon2' />
                  <p>Login</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
