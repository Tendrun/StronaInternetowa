'use client'
import React, { useState, useEffect } from 'react';
import '@radix-ui/themes/styles.css';
import { TextField, Button, TextFieldRoot } from '@radix-ui/themes' 

export default function Home(){

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false); 


    useEffect(() => { 
        validateForm(); 
    }, [name, email, password]); 
    // Validate form 
    const validateForm = () => { 
        let errors = {}; 
  
        if (!name) { 
            errors.name = 'Name is required.'; 
        } 
  
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 
  
        if (!password) { 
            errors.password = 'Password is required.'; 
        } else if (password.length < 6) { 
            errors.password = 'Password must be at least 6 characters.'; 
        } 
  
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    };

    // Submit 
    const onsubmit = async () => { 

        if (isFormValid) { 
            console.log('Form submitted successfully!'); 
            
            const UserData = {
                name, email, password
            }
              
            const res = await fetch('http://localhost:3000/LoginPage', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(UserData)
                }
            );

            if(res.status === 201){
                router.refresh()
                router.push('/LoginPage');
            }

        } else { 
            console.log('Form has errors. Please correct them.'); 
        } 
    }; 


    return (
        <div className='position-login'> 
            <div className="border-login"> 
                <div className='h3-login'>Login Page</div> 
                <div className='marign-buttons-login'>
                <TextField.Input 
                    className="text-login"
                    placeholder="Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                /> 
                {errors.name && <p className='error-login'>{errors.name}</p>} 
                </div>
                <div className='marign-buttons-login'>
                <TextField.Input 
                    className="text-login"
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /> 
                {errors.email && <p className='error-login'>{errors.email}</p>} 
                </div>
                <div className='marign-buttons-login'>
                <TextField.Input
                    className="text-login" 
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password"
                /> 
                {errors.password && <p className='error-login'>{errors.password}</p>}
                </div>
                <div> 
                <button 
                    className='button-login'
                    //style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }} 
                    disabled={!isFormValid} 
                    onClick={onsubmit} 
                > 
                    Submit 
                </button> 
                </div>
            </div> 
        </div>   
    ); 
}

const styles = { 

    button: { 
        backgroundColor: 'green', 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: '16px', 
        padding: '12px', 
        border: 'none', 
        borderRadius: '10px', 
        cursor: 'pointer', 
        width: '40%', 
        transition: 'opacity 0.2s ease', 
    }, 
}; 