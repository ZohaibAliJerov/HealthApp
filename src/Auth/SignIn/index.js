import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLock2Line,RiEyeCloseFill} from 'react-icons/ri';
import { MdRemoveRedEye} from 'react-icons/md'
import {
  Main,
LogoCont,
Logo,
FormCont,
FormHead,
FormBody,
Em,
SvgStyle,
FormInputDiv,
FormInput,
FormPara,
FormButton,
SwitchCont,
SwitchPara,
SwitchButton,
SwitchSpan
} from './SignInElements'
import LogoMain from '../Images/logo.jpg'

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const HandleSignIn = () => {
    navigate('/')
  }
  
  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont>
          <FormHead>
           Login To Your Account
          </FormHead>
          <FormBody>
            <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput type="text" placeholder='Email Address'></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput type={showPassword ? "text" : "password"} placeholder='Password'></FormInput><Em style={SvgStyle}>{showPassword ? <MdRemoveRedEye onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)}/>}</Em></FormInputDiv>
          </FormBody>
          <FormPara>Forgot Password?</FormPara>
          <FormButton onClick={HandleSignIn}>
            Sign In
          </FormButton>
        <SwitchCont>
          <SwitchPara>Don't have an account?</SwitchPara>
          <SwitchButton><Link to="/signup"><SwitchSpan>Register Here</SwitchSpan></Link></SwitchButton>
        </SwitchCont>
        </FormCont>
      </Main>
    </>
  )
}

export default SignIn;