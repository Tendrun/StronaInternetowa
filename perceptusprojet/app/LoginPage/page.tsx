'use client'
import React, { useState, useEffect } from 'react';
import '@radix-ui/themes/styles.css';
import { TextField, Button, TextFieldRoot } from '@radix-ui/themes' 
import { useForm } from 'react-hook-form';
import axios from "axios"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

interface LoginForm{
    Pesel: Number,
    Email: string,
    Name: string,
    Second_name: string,
    Password: string,
}


export default function Home() {
    const router = useRouter();
    const {register, handleSubmit} = useForm<LoginForm>();

    const[error, setError] = useState('');
    
    

    return (

        
        <form className='position-login' 
        onSubmit={handleSubmit(async (data) => {

            try {
                await axios.post('/api/Login', data);
                router.push('/LoginPage');
                
            } catch (error) {
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
                    </div>
                    
                    <div className='marign-buttons-login'>
                    <TextField.Input 
                        className="text-login"
                        placeholder='Second name'
                        {...register('Second_name')}
                    /> 
                    </div>

                    <div className='marign-buttons-login'>
                    <TextField.Input 
                        className="text-login"
                        placeholder='Email'
                        {...register('Email', )}
                    /> 
                    </div>

                    <div className='marign-buttons-login appearance-none -web'>
                    <TextField.Input 
                        className="text-login"
                        inputMode="numeric"
                        placeholder='Pesel'
                        {...register('Pesel', {valueAsNumber: true })}
                    /> 
                    </div>

                    <div className='marign-buttons-login'>
                    <TextField.Input
                        className="text-login" 
                        placeholder='Password'
                        {...register('Password')}
                        type="password"
                    /> 
                    </div>
                    <div> 
                    <button 
                        className='button-login'
                    > 
                        Submit 
                    </button> 
                    </div>
            </div> 
        </form>   
    ); 
}
