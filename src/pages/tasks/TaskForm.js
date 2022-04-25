import React from 'react'
import image from '../../assets/img/pencil.png'
import './TaskForm.css'

function TaskForm(props) {

    


  return (
    <form className='form' onSubmit={props.onSubmit}>

        <section className='image'>
          <img id='image-img' src={image} alt="" />
        </section>

        <label className='activity-label'> Ingresa tu tarea o actividad</label>

        <section className='activity-section'>
          <textarea className='activity-box' onChange={props.onChange} placeholder='Ingresa tu tarea o actividad' ></textarea>
        </section>
        
        <section className='button-section'>
            <button className='accept-button' type='submit' onClick={props.onSubmit}>Aceptar</button>
            <button className='cancel-button' type='button' onClick={props.onCancel}>Cancelar</button>
        </section>
    </form>
  )
}

export { TaskForm }