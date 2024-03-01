'use client'

import { TextField, TextFieldRoot } from '@radix-ui/themes'

const NewProductPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextFieldRoot>
            <TextField.Input placeholder='Product Name' />
        </TextFieldRoot>
        <TextFieldRoot>
            <TextField.Input placeholder='Price' />
        </TextFieldRoot>
        <button> Create new Product </button>
    </div>
  )
}

export default NewProductPage