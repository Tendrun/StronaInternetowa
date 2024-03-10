'use client'
import React, { useState, useEffect } from 'react';
import '@radix-ui/themes/styles.css';
import { TextField, Button, TextFieldRoot, CalloutRoot, CalloutText } from '@radix-ui/themes' 
import { useForm } from 'react-hook-form';
import axios from "axios"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { CreateAccountSchema } from '../api/ValidationSchemas';
import { z } from 'zod';
import ErrorMessage from '../Components/ErrorMessage';
import { blob } from 'stream/consumers';
import Spinner from '../Components/Spinner' ;

type AccountForm = z.infer<typeof CreateAccountSchema>;


export default function Home() {
    const router = useRouter();
    const {register, handleSubmit, formState: { errors, isValid }} = useForm<AccountForm>({
        resolver: zodResolver(CreateAccountSchema)
    });

    const[error, setError] = useState('');

    const[isSubmitting, SetSubmitting] = useState(false);

    return (
        
        <div>
            
            <form className='position-login' 
            onSubmit={handleSubmit(async (data) => {

                try {
                    SetSubmitting(true);
                    await axios.post('/api/Login', data);
                    router.push('/');
                    
                } catch (error) {
                    SetSubmitting(false);
                    setError('An unexpected error occurred');
                }
            })}> 


                <div className="border-login"> 
                        <div className='h3-login'>Login Page</div> 

                        <div className='marign-buttons-login'>
                        <TextField.Input 
                            className="text-login"
                            placeholder='Name'
                            {...register('Name')}
                        /> 
                        {<ErrorMessage>{errors.Name?.message}</ErrorMessage>}
                        </div>
                    
                        <div className='marign-buttons-login'>
                        <TextField.Input 
                            className="text-login"
                            placeholder='Second name'
                            {...register('Second_name')}
                        /> 
                        {<ErrorMessage>{errors.Second_name?.message}</ErrorMessage>}
                        </div>

                        <div className='marign-buttons-login'>
                        <TextField.Input 
                            className="text-login"
                            placeholder='Email'
                            {...register('Email', )}
                        /> 
                        {<ErrorMessage>{errors.Email?.message}</ErrorMessage>}
                        </div>

                        <div className='marign-buttons-login appearance-none -web'>
                        <TextField.Input 
                            className="text-login"
                            inputMode="numeric"
                            placeholder='Pesel'
                            {...register('Pesel', {valueAsNumber: true })}
                        /> 
                        {<ErrorMessage>{errors.Pesel?.message}</ErrorMessage>}
                        </div>

                        <div className='marign-buttons-login'>
                        <TextField.Input
                            className="text-login" 
                            placeholder='Password'
                            {...register('Password')}
                            type="password"
                        /> 
                        {<ErrorMessage>{errors.Password?.message}</ErrorMessage>}
                        </div>
                        {!isSubmitting && <div> 
                            <button 
                                className='button-login'
                                disabled={isSubmitting}
                            > 
                                Submit                           
                            </button> 
                        </div> }
                        <div>       
                        {isSubmitting && <Spinner /> }
                        </div>
                </div> 
            </form>   
        </div>
    ); 
}
