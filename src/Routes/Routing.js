import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing