import React from 'react'
import { Link } from "react-router-dom";
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
                        <MenuItemLink>
                            <Link to='/'> Home</Link>                            
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink>
                            <Link to='/tasks'> Tasks</Link>  
                        </MenuItemLink>
                    </MenuItem>    

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink>
                            <Link to='/'> Login</Link>
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <MenuItemLink>
                            <Link to='/'> Register</Link>
                        </MenuItemLink>
                    </MenuItem>                  

                </Menu>

            </NavbarWrapper>


            </Header>
        </NavbarContainer>
      </>
    
  )
}

export { Navbar }