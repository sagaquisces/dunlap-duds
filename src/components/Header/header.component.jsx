import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon/cart-icon.component'
import CartDropdown from '../CartDropdown/cart-dropdown.component'
import { selectCartShow } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles'

const Header = ({ currentUser, show }) =>
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
        :
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
      }
      <CartIcon />

    </OptionsContainer>
    {
      (show && <CartDropdown />)
    }
  </HeaderContainer>

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  show: selectCartShow
})

export default connect(mapStateToProps)(Header)
