import styled from 'styled-components'
import CustomButton from '../CustomButton/custom-button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 60px;
  z-index: 5;
`

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
