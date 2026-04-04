import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [passType, setPasstype] = useState('password')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

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
    } else if (password.length < 8) {
      toast.error('Password Must be Greater Than 8 Character')
    } else if (ConfirmPassword.trim() === '') {
      toast.error('Confirm Passowrd is Required')
    } else if (ConfirmPassword !== password) {
      toast.error('Password Does Not Match')
    } else {
      setLoading(true)
      axios
        .post(
          'http://localhost:3000/api/auth/register',
          {
            username: username.trim(),
            email: email.trim(),
            password
          },
          {
            withCredentials: true
          }
        )
        .then(res => {
          toast.success('User Register Successfully')
          setUsername('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          navigate('/login')
          console.log(res.data)
        })
        .catch(error => {
          toast.error(error.response?.data?.message || 'Something Went Wrong')
        })
        .finally(() => {
          setLoading(false)
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
            name='username'
            id='username_input'
            value={username}
            onChange={text => {
              setUsername(text.target.value)
            }}
          />
          <br />
          <input
            type='email'
            placeholder='Email'
            name='email'
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
            name='password'
            id='password_input'
            value={password}
            onChange={text => {
              setPassword(text.target.value)
            }}
          />
          <input
            type='password'
            name='confirm_password'
            id='confirm_password_input'
            placeholder='Confirm Password'
            value={ConfirmPassword}
            onChange={text => {
              setConfirmPassword(text.target.value)
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
          <button disabled={loading} type='submit' className='register_btn'>
            {loading ? 'Registering....' : 'Register'}
          </button>
          <p className='login_para'>
            Already have an account ? <NavLink to={'/login'}>Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
