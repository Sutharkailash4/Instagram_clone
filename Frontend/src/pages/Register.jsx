import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (username.trim() === '') {
      toast.error('Username is Required')
    } else if (email.trim() === '') {
      toast.error('Email is Required')
    } else if (password.trim() === '') {
      toast.error('Password is Required')
    } else {
        
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
            type='password'
            placeholder='Password'
            id='password_input'
            value={password}
            onChange={text => {
              setPassword(text.target.value)
            }}
          />
          <br />
          <button className='register_btn'>Register</button>
          <p className='login_para'>Already have an account ? Login</p>
        </div>
      </form>
    </div>
  )
}

export default Register
