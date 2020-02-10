import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials( { ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account.</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={temail}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'>
            Sign In : Email
          </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In : Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
