import React from 'react'

import SignIn from '../../components/SignIn/sign-in.component'
import SignUp from '../../components/SignUp/sign-up.component'

import { SignInSignUpContainer } from './sign-in-sign-up.styles'

const SignInSignUp = () =>
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>

export default SignInSignUp
