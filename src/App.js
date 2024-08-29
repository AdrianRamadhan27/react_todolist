import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';

const User = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>My Name is {name}</h1>
    </div>
  );
};

function App() {
  const [name] = useState('Adrian');

  return (
    <div className="App">
      <div>
        {/* <h1 className="title">React Component</h1>
        <User name={name} /> */}
        {/* <Counter initialCount={0} /> */}
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
