import react from "react";
import './App.css';
import Header from "./components/Header";
import Post from "./components/Post";
import Create from './create';
import Read from './read';
import Update from './update';

import { BrowserRouter as Router,Routes , Route } from 'react-router-dom'

function App() {
  return (
   
   <Router>
      <Routes>
      <Route exact path='/' element={<Header/>} />
          <Route exact path='/create' element={<Create/>} />
        
        
          <Route exact path='/read' element={<Read/>} />
        
        <Route path='/update' element={<Update/>}/>
    
    </Routes>
  </Router>
  );
}

export default App;
