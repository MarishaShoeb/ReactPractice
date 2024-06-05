import React from 'react'

const Card = ({ children, bg = "bg-gray-100" }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card
// This is a wrapper component being used in HomeCards component
// passing a default prop in bg
// make className a template literal to make it dynamic and to use the bg prop passed by it's parent "HomeCards" to it.