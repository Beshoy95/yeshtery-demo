import React from 'react'
import "../../Styles/Home/Home.css"
import { starItem } from '../Home/HomeData';

function SimilarProductsItem({ data }) {

    return (
        <div>
            <div className='similar-product'>
                <div className='product-container'>
                    <img src={`/images/${data.image}`} alt="shirt" className='' />,
                    <p className='similar-text'>{data.title}</p>
                    <div className='related'>
                        <div>
                            <p className='amount-similar'>{data.price} <span className='amount-le'>{data.currency}</span></p>
                            <div className='related-price'>
                                <span className='price-similar'>{data.price} {data.currency}</span>
                                <span className='dicsount'>{data.discount}</span>
                            </div>
                        </div>
                        <div>
                            <img src={`/images/${data.brandImage}`} alt="adidas" className='' />
                        </div>
                    </div>
                    <div className='star-group'>
                        <div className='star'>
                            {starItem.map((item, index) => (
                                <div key={index}>
                                    {item.image}
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className='rates'>{data.rates}</span>
                        </div>
                    </div>
                    <div className='pickup'>
                        <p className='picked-from'>Pickup From: <span className='picked-text'>{data.mall}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimilarProductsItem