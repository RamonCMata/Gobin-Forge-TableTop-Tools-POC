import React from 'react';
import '../App.css';
import { Button } from './Button';
import { RegisterButton } from './RegisterButton';
import { LoginButton } from './LoginButton';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome</h1>
            <p>Start Your Adventure Now</p>
            <div className="hero-btns">
                <RegisterButton className='regbtn' buttonStyle='btn--outline' buttonSize='btn--large'> Register </RegisterButton>
                <LoginButton className='loginbtn' buttonStyle='btn--outline' buttonSize='btn--large'>&nbsp; Login &nbsp; </LoginButton>
            </div>


        
        
             
        </div>
    )
}

export default HeroSection
