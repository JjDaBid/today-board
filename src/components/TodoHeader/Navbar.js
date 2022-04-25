import React from 'react'
import { Header, IconLogoMobile, LogoImage, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './NavbarContainer'
import logo from '../../assets/img/TodayBoard.png'


function Navbar() {

    const [click, setClick] = React.useState(false);
    const changeClick = () => {
        setClick(!click);
    }

  return (
      <>
        <NavbarContainer>

            <Header>

            <NavbarWrapper>

                <LogoImage>
                    <img src={logo} alt=''  style={{width: 300 + "px"}}/>
                </LogoImage>

                <IconLogoMobile onClick={() => changeClick()}>
                    {
                        click ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-bars" ></i>
                    }                
                </IconLogoMobile>

                <Menu click={click}>

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink href='/'>Home</MenuItemLink>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink href='/tasks'>Tasks</MenuItemLink>
                    </MenuItem>    

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink href='/'>Login</MenuItemLink>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink href='/'>Register</MenuItemLink>
                    </MenuItem>                  

                </Menu>

            </NavbarWrapper>


            </Header>
        </NavbarContainer>
      </>
    
  )
}

export { Navbar }