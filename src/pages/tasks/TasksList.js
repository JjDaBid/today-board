import React from 'react'
import './TaskList.css'

function TasksList(props) {
  return (
    <section>
        <ul>
            { props.children }
        </ul>
    </section>
  )
}

export  { TasksList }