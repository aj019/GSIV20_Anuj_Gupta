import React from 'react'
import styled from 'styled-components'
import home from '../../assets/images/home.png'

const StyledHeader = styled.div`
  height: 50px;
  box-shadow: 2px 2px #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`

function Header(props) {
  return (
    <StyledHeader>
      {props.children}
      <button
        style={{
          background: `url(${home}) 50% 50% no-repeat`,
          backgroundSize: '50%',
          border: 'none',
          width: '50px',
          height: '100%'
        }}
        onClick={() => {
          window.location.href = '/'
        }}
      ></button>
    </StyledHeader>
  )
}

export default Header
