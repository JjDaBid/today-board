import React from 'react'
import { Link } from "react-router-dom";
import { Header, IconLogoMobile, LogoImage, Menu, MenuItem, NavbarContainer, NavbarWrapper, } from './NavbarContainer'
import logo from '../../assets/img/TodayBoard.png'
import './Navbar.css'


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
                        <section className='Linkto'>
                            <Link className='Linkto' to='today-board/'>Home</Link>                            
                        </section>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <section className='Linkto'>
                            <Link className='Linkto' to='today-board/tasks'>Tasks</Link>  
                        </section>
                    </MenuItem>    

                    <MenuItem onClick={() => changeClick()}>
                        <section className='Linkto'>
                            <Link className='Linkto' to='today-board/'>Login</Link>
                        </section>
                    </MenuItem>

                    <MenuItem onClick={() => changeClick()}>
                        <section className='Linkto'>
                            <Link className='Linkto' to='today-board/'>Register</Link>
                        </section>
                    </MenuItem>                  

                </Menu>

            </NavbarWrapper>


            </Header>
        </NavbarContainer>
      </>
    
  )
}

export { Navbar }