import React from 'react'
import "../../Styles/Home/Home.css"
import SimilarProductsItem from './SimilarProductsItem';

function SimilarProducts({ data }) {
    return (
        <div className='container'>
            <div>
                <h2 className='similar-title'>Similar Products</h2>
                <p className='similar-subTitle'>You may like these products also</p>
                <div className='similar-product'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <SimilarProductsItem data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SimilarProducts