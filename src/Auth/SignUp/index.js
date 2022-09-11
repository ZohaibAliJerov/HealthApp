import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {RiUser3Line} from 'react-icons/ri'
import {BsBuilding} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLock2Line,RiEyeCloseFill} from 'react-icons/ri'
import {MdOutlinePeople, MdRemoveRedEye} from 'react-icons/md'
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
FormSelect,
FormOption,
FormButton,
SwitchCont,
SwitchPara,
SwitchSpan
} from './SignUpElements'
import LogoMain from '../Images/logo.jpg'

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  
  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont>
          <FormHead>
            Register A New Account
          </FormHead>
          <FormBody>
            <FormInputDiv><RiUser3Line style={SvgStyle}/><FormInput type="text" placeholder='Username'></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><RiUser3Line style={SvgStyle}/><FormInput type="text" placeholder='Surname'></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><BsBuilding style={SvgStyle}/><FormInput type="text" placeholder='Organization'></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput type="text" placeholder='Email Address'></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput type={showPassword ? "text" : "password"} placeholder='Password'></FormInput><Em style={SvgStyle}>{showPassword ? <MdRemoveRedEye onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)}/>}</Em></FormInputDiv>
            <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput type={showCPassword ? "text" : "password"}  placeholder='Confirm Password'></FormInput><Em style={SvgStyle}>{showCPassword ? <MdRemoveRedEye onClick={()=>setShowCPassword(!showCPassword)}/> : <RiEyeCloseFill onClick={()=>setShowCPassword(!showCPassword)}/>}</Em></FormInputDiv>
            <FormInputDiv><MdOutlinePeople style={SvgStyle}/><FormSelect>
              <FormOption>Male</FormOption>
              <FormOption>Female</FormOption>
              <FormOption>Other</FormOption>
            </FormSelect><Em style={SvgStyle}></Em></FormInputDiv>
          </FormBody>
          <FormButton>
            Sign Up
          </FormButton>
        </FormCont>
        <SwitchCont>
          <SwitchPara>Already having account? <Link to="/signin"><SwitchSpan> Log In Here</SwitchSpan></Link></SwitchPara>
        </SwitchCont>
      </Main>
    </>
  )
}


export default SignUp;