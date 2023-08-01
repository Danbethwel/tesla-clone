import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a> {/* Fixed duplicate Model X entry */}
      </Menu>
      <RightMenu>
        <a href=''>Shop</a>
        <a href=''>Tesla Account</a>
        <CustomMenu/>
      </RightMenu>
      <BurgerNav>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>


    </Container>
  )
}

export default header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px){
    display: none;
  }
`;

const RightMenu=styled.div`
display:flex;
align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right; 10px;
    padding: 0 10px;
  }
`;

const CustomMenu= styled(MenuIcon)`
  cursor: pointer;

`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  botton: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
`
