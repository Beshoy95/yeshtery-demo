import React from 'react'
import { Link } from "react-router-dom";
import "../../Styles/Path/Path.css"

const linkItem = [
    {
        title: <Link className='link' to='/' style={{ marginLeft: '0' }}>Men</Link>,
        text: <span>/</span>
    },
    {
        title: <Link className='link' to='/'>Clothing</Link>,
        text: <span>/</span>
    },
    {
        title: <Link className='link' to='/'>Tops</Link>,
        text: <span>/</span>
    },
    {
        title: <Link className='link' to='/'>Adidas</Link>,
        text: <span>/</span>
    },
    {
        title: <Link className='link' to='/' style={{ textDecoration: 'none' }}>Adidas Black T-Shirt</Link>,
        text: <span></span>
    },
];

function Path() {
    return (
        <div className='path'>
            <div className='container'>
                {linkItem.map((item, index) => (
                    <div key={index}>
                        {item.title}
                        {item.text}
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default Path
