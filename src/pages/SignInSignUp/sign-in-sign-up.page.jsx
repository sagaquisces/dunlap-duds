import React from 'react'

import SignIn from '../../components/SignIn/sign-in.component'
import SignUp from '../../components/SignUp/sign-up.component'

import './sign-in-sign-up.styles.scss'

const SignInSignUp = () =>
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>

export default SignInSignUp
