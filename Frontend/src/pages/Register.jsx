import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
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
    if (username.trim() === '') {
      toast.error('Username is Required')
    } else if (email.trim() === '') {
      toast.error('Email is Required')
    } else if (password.trim() === '') {
      toast.error('Password is Required')
    } else {
      axios
        .post('http://localhost:3000/api/auth/register', {
          username,
          email,
          password
        })
        .then(res => {
          toast.success('User Register Successfully')
          setUsername('')
          setEmail('')
          setPassword('')
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div className='register_main_box'>
      <form
        onSubmit={e => {
          submitHandler(e)
        }}
      >
        <div className='heading_box'>
          <h2 className='heading'>Register</h2>
        </div>
        <div className='input_box'>
          <input
            type='text'
            placeholder='Username'
            id='username_input'
            value={username}
            onChange={text => {
              setUsername(text.target.value)
            }}
          />
          <br />
          <input
            type='Email'
            placeholder='Email'
            id='email_input'
            value={email}
            onChange={text => {
              setEmail(text.target.value)
            }}
          />
          <br />
          <input
            type={passType}
            placeholder='Password'
            id='password_input'
            value={password}
            onChange={text => {
              setPassword(text.target.value)
            }}
          />
          {show_pass && (
            <span
              className='register_show_password'
              onClick={() => {
                if (passType === 'password') {
                  setPasstype('text')
                } else {
                  setPasstype('password')
                }
              }}
            >
              Show
            </span>
          )}
          <br />
          <button className='register_btn'>Register</button>
          <p className='login_para'>
            Already have an account ? <NavLink to={'/login'}>Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
