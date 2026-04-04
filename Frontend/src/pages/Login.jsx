import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [passType, setPasstype] = useState('password')

  let show_pass = false

  if (password.trim() === '') {
    show_pass = false
  } else {
    show_pass = true
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className='login_main_box'>
      <form
        onSubmit={e => {
          submitHandler(e)
        }}
      >
        <div className='heading_box'>
          <h2 className='heading'>Login</h2>
        </div>
        <div className='input_box'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            id='login_username_input'
            onChange={text => {
              setusername(text.target.value)
            }}
          />
          <input
            type={passType}
            placeholder='Password'
            value={password}
            id='login_password_input'
            onChange={text => {
              setPassword(text.target.value)
            }}
          />
          {show_pass && <span className='login_show_pass'>Show</span>}
          <button className='login_btn'>Login</button>
          <p className='register_para'>
            Don't have an account ? <NavLink to={'/register'}>Register</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login