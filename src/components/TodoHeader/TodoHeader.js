import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/TodayBoard.png'
import './TodoHeader.css'

function TodoHeader() {

    const [mobileMenu, setMobileMenu] = React.useState(false)  

    const menuDisplayed = () => {
        
        setMobileMenu(("Acabas de desplegar el menu expandible"))
    }

  return (
    <header >
        
        <section className='container_menu'>

            <section className='logo'>
                <img src={logo} alt=''/>
            </section>

            <section className='menu'>

                <i class="fa-solid fa-bars" id='bars' onClick={menuDisplayed}></i>

                <div className={mobileMenu ? "back_menu_mobile" : !"back_menu_mobile"} id='back_menu'>

                </div>
  
                <nav>

                    <img src={logo} alt=''/>

                <ul className='list'>

                        <li>
                            <Link to='/' id='selected'>
                                Inicio 
                            </Link>                                                             
                        </li>
                        <li>
                            <Link to='/tasks'>
                                Tareas 
                            </Link>                                                             
                        </li>
                        <li>
                            <Link to='/'>
                                Login 
                            </Link>                                                             
                        </li>
                        <li>
                            <Link to='/'>
                                Registro 
                            </Link>                                                             
                        </li>
                    </ul>

                </nav>
                
            </section>

        </section>

    </header>
  )
}

export {TodoHeader}