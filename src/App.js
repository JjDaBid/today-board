import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/TodoHeader/Navbar";
import { Home } from "./pages/home/Home"
import { ToDo } from "./pages/tasks/ToDo";


// import './App.css';

function App() {
  return (
    
    <React.Fragment>

      <Router>
        <Navbar/> 

        <Routes>
            <Route path="https://jjdabid.github.io/today-board/" element={<Home /> } />            
        </Routes>
  
        <Routes>
            <Route path="https://jjdabid.github.io/today-board/tasks" element={<ToDo/> } />            
        </Routes>         
               
      </Router>

    </React.Fragment>

  );
}

export default App;