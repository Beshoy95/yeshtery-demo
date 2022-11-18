import React from 'react'
import { starItem } from '../Home/HomeData';
import Size from './../Size/Size';
import "../../Styles/Home/Home.css";
import Image from "../../images/Group597.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MainProductItem({ data, handleIncrement, handleDecrement, totalQuantity }) {
    // <img src={`/images/${data.mainImage}`} alt="shirt" className='main-addidas' />
    return (
        <div className='container'>
            <div className='content'>
                <div>
                    <LazyLoadImage src={Image}
                        width={600} height={608}
                        alt="Image Alt"
                    />

                </div>
                <div className='product-photo'>
                    <img src="/images/Path347.svg" alt="arrow" className='product-image' />
                    <img src={`/images/${data.frontImage}`} alt="frontImage" className='product-image' />
                    <img src={`/images/${data.backImage}`} alt="backImage" className='product-image' />
                    <img src={`/images/${data.leftImage}`} alt="leftImage" className='product-image' />
                    <img src={`/images/${data.rightImage}`} alt="rightImage" className='' />
                    <img src="/images/Path346.svg" alt="arrow" className='photo-shirt' />
                </div>

            </div>
            <div className='description'>
                <div>
                    <img src="/images/Group346.svg" alt="adidas" className='' />
                    <p className='desc-item'>{data.title}</p>
                    <span className='desc-men'>{data.category}</span>
                    <div className='star'>
                        {starItem.map((item, index) => (
                            <div key={index}>
                                {item.image}
                            </div>
                        ))}
                        <span className='rates'>{data.rates}</span>
                        <span className='votes'>{data.votes}</span>
                    </div>
                    <div className='amount-item'>
                        <p className='amount'>{data.price} <span className='amount-le'>{data.currency} </span></p>
                        <span className='price'>{data.price} {data.currency}</span>
                        <span className='dicsount'>{data.discount}</span>
                    </div>
                    <hr style={{ opacity: 0.5 }} />
                    <div>
                        <p className='size'>Size</p>
                        <div className='circles'>
                            <Size title='Small' />
                            <Size title='Medium' />
                            <Size title='Large' largeStyle='size-large' />
                            <Size title='X Large' />
                            <Size title='XX Large' />
                        </div>
                    </div>
                    <hr style={{ opacity: 0.5, marginTop: '20px' }} />
                    <div>
                        <p className='size'>color</p>
                        <div className='circles'>
                            <img src="/images/Group354.png" alt="colour" className='colour-selected' />
                            <img src="/images/Group356.png" alt="colour" className='colour-pic' />
                        </div>
                    </div>
                    <hr style={{ opacity: 0.5, marginTop: '20px' }} />
                    <div>
                        <p className='size'>Quantity</p>
                        <div className='quantity'>
                            <div className='quantity-circle' onClick={() => handleDecrement(data)}>-</div>
                            <span>
                                {totalQuantity}
                            </span>
                            <div className='quantity-circle' onClick={() => handleIncrement(data)}>+</div>
                        </div>
                        <div className='btn-group'>
                            <button className='btn-primary' onClick={() => handleIncrement(data)}>Add To Cart</button>
                            <button className='btn-secondary'>Pickup From Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProductItem