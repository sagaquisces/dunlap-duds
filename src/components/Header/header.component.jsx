import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon/cart-icon.component'
import CartDropdown from '../CartDropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, show }) =>
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
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
      }
      <CartIcon />

    </div>
    {
      (show && <CartDropdown />)
    }
  </div>

const mapStateToProps = ({ user: { currentUser }, cart: { show }}) => ({
  currentUser,
  show
})

export default connect(mapStateToProps)(Header)
