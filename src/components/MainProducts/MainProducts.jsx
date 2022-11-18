import React from 'react'
import MainProductItem from './MainProductItem';

function MainProducts({ data, handleIncrement, handleDecrement ,totalQuantity}) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <MainProductItem data={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} totalQuantity={totalQuantity}/>
                </div>
            ))}
        </div>
    )
}

export default MainProducts