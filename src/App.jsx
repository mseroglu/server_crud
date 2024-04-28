import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ListItem from './components/ListItem';
import axios from "axios";
//import { ToastContainer, toast } from 'react-toastify';
import Loader from './components/Loader';

function App() {
  const [todos, setTodos] = useState(null)
  useEffect(() => {    
    axios.get("http://localhost:3051/todos/")
    .then((res) => setTodos(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container p-3">
      <h1 className='text-center'>
        Server <span className='text-warning'>Crud</span>
      </h1>
      <Form setTodos={setTodos} />
      <ul className='list-group'>
        {!todos && <Loader />}
        {todos?.map((todo) => <ListItem key={todo.id} todo={todo} allTodos={todos} setTodos={setTodos}/>)}        
      </ul>
    </div>
  );
}

export default App;
