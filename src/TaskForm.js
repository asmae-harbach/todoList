import React, { useContext, useState } from 'react';
import {MonContexte} from './TaskList';

function TaskForm(){
    const { taskList, setTaskList } = useContext(MonContexte);
    const [newTask, setNewTask] = useState("")


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!newTask) return;
        const newId = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1;

        setTaskList((prevTasks) => [...prevTasks, {id : newId, task : newTask}]);
        setNewTask("");

    };

    return(
        <>
            <form onSubmit={handleSubmit} className="bg-blue-400 h-96 py-28 px-5 md:w-[40%] m-5 rounded-lg flex flex-col">
                <input value={newTask} onChange={(e)=>setNewTask(e.target.value)} className="mb-9 p-2" type="text" placeholder="Ajoutez une tâche" />
                <button type='submit' className="bg-blue-800 w-1/3 p-2 rounded-lg self-center text-white">Ajouter</button>
            </form>
        </>
    )
}
export default TaskForm