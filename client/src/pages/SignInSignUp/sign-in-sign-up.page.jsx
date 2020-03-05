import React from 'react'

import SignIn from '../../components/SignIn/sign-in.component'
import SignUp from '../../components/SignUp/sign-up.component'

import './sign-in-sign-up.styles.scss'

const SignInSignUp = () =>
  <SignInSignUp className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </SignInSignUp>

export default SignInSignUp
