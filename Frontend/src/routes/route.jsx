import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home'
import Register from '../features/authentication/pages/register'
import Login from '../features/authentication/pages/login'
import Page_Not_Found from '../components/page_not_found'

const All_Routes = () => {
  return (
    <div className='routes-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Page_Not_Found />} />
      </Routes>
    </div>
  )
}

export default All_Routes