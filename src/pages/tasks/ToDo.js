import React from 'react'
import image from '../../assets/img/developer_activity.svg'
import { TasksList } from './TasksList';
import { TaskItem } from './TaskItem';
import { useLocalStorage } from '../../context/useLocalStorage';
import { Modal } from '../../modal/Modal';
import { TaskForm } from './TaskForm';
import './ToDo.css'
import '../../modal/Modal.css'
import { LoadingC } from './LoadingC';
import { CreateC } from './CreateC';
import { ErrorC } from './ErrorC';





function ToDo() {
  const {
          item: todos, 
          saveItem: saveTodos, 
          loading,
          error1,
        } = useLocalStorage('TODOS_V1', []);  
  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = []; 

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);    
  }
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  

  const onClickButton = () => {
    setOpenModal(!openModal)
  }

  const onSearchValueChange = (event) => {
    console.log(`Estas buscando ${event.target.value}`)
    setSearchValue(event.target.value)
  }


  const [newTodoValue, setNewTodoValue] = React.useState('')
  const changing = (event) => {
      setNewTodoValue(event.target.value);
  }

  const cancelling = () => {
    setOpenModal(false)    
  }

  const send = (event) => {      
      // event.preventDefault();
      addTodo(newTodoValue)
      setOpenModal(false)
  }

  return (
    <main className='task_container'>      

      <section className='tasker'>

        <section className="primaryContainer">
          
          <section className='box_creator'>

            <section className='createButtonSection'>
              {!openModal && <button className='CreateTodoButton' onClick={onClickButton} >+</button>}
              {!!openModal && <button className='CreateTodoButton-x' onClick={onClickButton} >x</button>}
            </section>           

            <section className='primaryContainerBoxTitle'>
              <h2 className='primaryContainerTitle'>Crea tu tarea</h2>
            </section>               
                    
          </section>

          <section className="svgTask">
              <img src={image} alt="" />
          </section>

        </section>

          <section className='secondaryContainer'>            
            <section>

              <section className='task_subcontainer'>

                <section className='TodoHeader'>
                  <h1 className='TodoTitle'>Mis Tareas</h1>        
                  <h2 className="TodoCounter" > Has completado {completedTodos} de {totalTodos} Actividades </h2>
                </section>

                <section className='TodoSearch'>
                  <input className='SearchBar' placeholder="Busca tu tarea" value={searchValue} onChange={onSearchValueChange} />
                </section>                

              </section>    

              <TasksList>

                <section className='loading-container'>
                  {/* <span className='loading-completeIcon'></span> */}
                    {error1 && <ErrorC/>}
                    {loading && <LoadingC/>}
                    {(!loading && !searchedTodos.length) && <CreateC/>}
                  {/* <span className='loading-deleteIcon'></span> */}
                </section>              

                

              {searchedTodos.map(todo => (
                  <TaskItem key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)} />
                ))} 

              </TasksList>

              {!!openModal && (
                <Modal className="ModalBackground">
                  <TaskForm 
                            key={todos.text}
                            text={todos.text}  
                            onCancel={cancelling}
                            onChange={changing}            
                            onSubmit={send} 
                   />
                </Modal>
              )}

           

              

            </section>
          </section>

      </section>  

    </main>

  )
}

export { ToDo }