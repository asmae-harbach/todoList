import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className='md:flex justify-around'>
      <TaskList>
        <TaskForm/>
      </TaskList>
      
    </div>
  );
}

export default App;
