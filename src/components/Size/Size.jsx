import React from 'react'
import "../../Styles/Home/Home.css"

function Size({ title, largeStyle }) {
    return (
        <div className={`size-circle ${largeStyle} `}>{title}</div>
    )
}

export default Size