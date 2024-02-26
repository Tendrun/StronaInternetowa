'use client'
import React from 'react'

const AddToCart = () => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('you clicked me')}> Add to Cart </button> 
        </div>
    )
}

export default AddToCart