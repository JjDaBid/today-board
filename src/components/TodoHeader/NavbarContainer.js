import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 110px;
    margin-top: 20px;
    position: fixed;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 
    0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 
    0px 30px 60px -30px, 
    rgba(10, 37, 64, 0.35) 
    0px -2px 6px 0px inset;    
`
export const Header = styled.div`  
    max-width: 100%;
    height: 100%;
    margin: auto;
    display: fixed;
    justify-content: space-between;
    color: azure;    
    z-index: 1;
`
export const NavbarWrapper = styled.div`
    margin: auto;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;   
`
export const LogoImage = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    z-index: 1;
`
export const Menu = styled.ul`
    height: 50px;
    display: flex;
    margin: 30px;

    @media screen and (max-width: 900px) {   
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 100px;
        left: ${({click}) => click ? 0 : "-100% "};
        flex-direction: column;
        transition: 0.6s all case-in;
        background-color: black;
        text-align: center;        
      }
`
export const MenuItem = styled.li`
    height: 30px;
    padding: 0.2rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
    list-style: none;
    margin: auto;

    &:hover{
        height: 50px;  
        background-color: cyan;  
        font-size: 1.5rem;
        border-bottom: 0.3rem solid darkcyan;
        transition: 0.3s ease-in;
        box-shadow: rgba(50, 50, 93, 0.25) 
        0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 
        0px 30px 60px -30px, 
        rgba(10, 37, 64, 0.35) 
        0px -2px 6px 0px inset;
    }

    @media screen and (max-width: 900px) {
        margin-top: 5px;
        margin-bottom 5px;   
        width: 100%;
        height: 70px;
    }`

export const MenuItemItem = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: darkcyan;
    text-transform: uppercase;

      &:hover{
        text-decoration: none;
        color:azure;
        font-size: 1.3rem;
    }
`
export const IconLogoMobile = styled.div`
    display: none;
    @media screen and (max-width: 900px) {   
          display: flex;
          color: turquoise;
          font-size: 2rem;
          font-weight: 800;
          padding-right: 1rem;    
        }
    }
`