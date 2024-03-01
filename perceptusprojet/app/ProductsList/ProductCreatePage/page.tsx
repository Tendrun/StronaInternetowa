import React from 'react'
import { Button } from 'react-dom'
import Link from 'next/link';

const CreateProductPage = () => {

    return (
      <div><button><Link href='/ProductsList/NewProductPage'> Create New Product </Link></button></div>
    ) 
}

export default CreateProductPage