import React from 'react'
import image from '../../assets/img/developer_activity.svg'
import './Home.css'

function Home() {
  return (
    <main className='container_cover'>
        <div className='cover'>
            <div className='text'>
                <h1>Planifica, Organiza y desarrolla todas tus tareas.</h1>
                
                <p>
                    Ahora tendrás a la mano el mejor organizador de tareas, que te ayudara a planificar tus días. 
                </p>

                <input type="button" value="Leer mas"/>
            </div>

            <div className="svg">
                <img src={image} alt="" />
            </div>

        </div>
    </main>
  )
}

export { Home }