import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [bio, setBio] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false)
  const [passwordShow, setPasswordShow] = useState('password')
  const [bioCharCount, setBioCharCount] = useState(0)

  const [publicCheck, setPublic] = useState(false)
  const [privateCheck, setPrivate] = useState(false)
  const [termsCheck, setTermsCheck] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/
    if (username.trim() === '') {
      toast.error('Username is Required')
    } else if (email.trim() === '') {
      setEmailValid(true)
    } else if (password.trim() === '') {
      toast.error('Password is Required')
    } else if (password.length < 8) {
      toast.error('Password must be 8 charcter')
    } else if (!passwordRegex.test(password)) {
      toast.error('Password must conatin 1 number & 1 symbol')
    } else if (password !== confirmPassword) {
      setConfirmPasswordValid(true)
    } else if (bio.trim() === '') {
      toast.error('Bio is Required')
    } else if (bio.length < 150) {
      toast.error('Please Enter Above 150 Character')
    } else if (!publicCheck && !privateCheck) {
      toast.error('Please Select Your Account Type')
    } else if (!termsCheck) {
      toast.error('Please Agree Terms and Condition')
    } 
  }

  return (
    <div className='register-container'>
      <h2 className='heading'>Register</h2>
      <p className='para-heading'>Register to create an account</p>
      <form
        onSubmit={e => {
          submitHandler(e)
        }}
      >
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='register-username'
          placeholder='Username'
          value={username}
          onChange={text => [setUsername(text.target.value)]}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='register-email'
          placeholder='Email'
          value={email}
          onChange={text => [setemail(text.target.value)]}
          onInput={() => {
            setEmailValid(false)
          }}
        />
        {emailValid && (
          <p className='valid_check'>Please enter a valid email</p>
        )}
        <label htmlFor='password'>Password</label>
        <input
          type={passwordShow}
          name='password'
          id='register-password'
          placeholder='Password'
          value={password}
          onChange={text => [setPassword(text.target.value)]}
        />
        <p
          className='show-hide-password'
          onClick={() => {
            if (passwordShow === 'password') {
              console.log('Text')
              setPasswordShow('text')
            } else {
              console.log('Password')
              setPasswordShow('password')
            }
          }}
        >
          {passwordShow === 'password' ? 'Show' : 'Hide'}
        </p>
        <ul>
          <li>At least 8 character</li>
          <li>1 Numebr & 1 Symbol</li>
        </ul>
        <label htmlFor='confirm-passsword'>Confirm Password</label>
        <input
          type='password'
          name='confirm-password'
          id='register-confirm-password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={text => {
            setConfirmPassword(text.target.value)
            setConfirmPasswordValid(false)
          }}
        />
        {confirmPasswordValid && (
          <p className='valid_check'>Password Do Not Match</p>
        )}
        <label htmlFor='profile-image'>Profile Picture</label>
        <input type='file' name='profile-image' id='register-profile-image' />
        <label htmlFor='bio'>Bio</label>
        <div className='textarea-box'>
          <textarea
            name='bio'
            id='register-bio'
            placeholder='Tell us About Yourself'
            onChange={text => [setBio(text.target.value)]}
            onInput={text => {
              setBioCharCount(bioCharCount + 1)
            }}
          ></textarea>
          <p className='bio-char-count'>{bioCharCount} / 150</p>
        </div>
        <div className='account-type-container'>
          <label htmlFor='account-type'>Account Type</label>
          <br />
          <input
            type='checkbox'
            name='public'
            id='register-public'
            className='check'
            checked={publicCheck}
            onClick={e => {
              setPublic(true)
              setPrivate(false)
            }}
          />
          <label htmlFor='register-public'>Public</label>
          <input
            type='checkbox'
            name='private'
            id='register-private'
            className='check'
            checked={privateCheck}
            onClick={() => {
              setPrivate(true)
              setPublic(false)
            }}
          />
          <label htmlFor='register-private'>Private</label>
        </div>
        <div className='agree-terms-container'>
          <input
            type='checkbox'
            name='agree'
            id='agree'
            className='check'
            checked={termsCheck}
            onChange={e => {
              if (!termsCheck) {
                setTermsCheck(true)
              } else {
                setTermsCheck(false)
              }
            }}
          />
          <label htmlFor='agree'>I agree t the Terms and Condition</label>
        </div>
        <button type='submit' className='register-btn'>
          Register
            <div className='spinner'></div>
        </button>
        <p className='register_login_toggle'>
          Already have an account ? Log in
        </p>
      </form>
    </div>
  )
}

export default Register
