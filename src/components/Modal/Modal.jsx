import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import "../../Styles/Modal/Modal.css"

function ModalContainer({ onClose, open, selectedproduct, totalPrice }) {
    return (
        <Modal open={open} onClose={onClose}
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
        >
            {selectedproduct.length === 0 ? <div>
                <div className='container' style={{ height: '700px', textAlign: 'left' }}>
                    <h1 className='cart-title'>My Cart</h1>
                    <p className='cart-subTitle'>Cart Summary</p>
                    <p className='cart-subTitle' style={{ textAlign: 'center' }}>Your cart is empty</p>
                    <div className='card-btn'>
                        <button className='btn-primary'>Review Cart</button>
                        <button className='btn-secondary'>Complete Checkout</button>
                    </div>
                </div>
            </div> : " "}
            {selectedproduct.map((item, index) => (
                <div key={index}>
                    <div className='container' style={{ height: '700px', textAlign: 'left' }}>
                        <h1 className='cart-title'>My Cart</h1>
                        <p className='cart-subTitle'>Cart Summary</p>
                        <div className='cart-item'>
                            <div>
                                <img src={`/images/${item.mainImage}`} alt="shirt" className='cart-image' />
                            </div>
                            <div>
                                <p className='cart-desc'>{item.title}</p>
                                <p className='cart-quantity'>Quantity: {item.quantity}</p>
                                <div className='card-box'>
                                    <p className='cart-currency'>{totalPrice}  {item.currency}</p>
                                    <button className='cart-remove'>Remove</button>
                                </div>
                            </div>
                        </div>
                        <p className='cart-total'>Total: {totalPrice} {item.currency}</p>
                        <div className='card-btn'>
                            <button className='btn-primary'>Review Cart</button>
                            <button className='btn-secondary'>Complete Checkout</button>
                        </div>
                    </div>
                </div>
            ))}
        </Modal>
    )
}

export default ModalContainer
