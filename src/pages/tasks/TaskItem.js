import React from 'react'
import './TaskItem.css'

function TaskItem(props) {

  return (
    <li className= {`TodoItem ${props.completed && 'TodoItem-complete'}`}>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
        <i className="fa-solid fa-check"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
      <i className="fa-solid fa-circle-xmark"></i>
      </span>
    </li>
  )
}

export { TaskItem }