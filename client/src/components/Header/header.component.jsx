import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'
import { default as CartIcon } from '../CartIcon/cart-icon.container'
import { default as CartDropdown } from '../CartDropdown/cart-dropdown.container'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, show }) => {
  console.log("Current User from Header: ", currentUser )
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )
        }
        <CartIcon />

      </div>
      {
        (show && <CartDropdown />)
      }
    </div>
  )
}


export default Header
