import { createContext, useEffect, useState } from "react"
import TaskItem from "./TaskItem"


const MonContexte = createContext();
 function TaskList ({children}){
    const savedTasks = JSON.parse(localStorage.getItem('taskList')) || []
    const [taskList, setTaskList] = useState(savedTasks) 

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    return(
    <MonContexte.Provider value={{ taskList, setTaskList }}>
        <div className="flex flex-col">
            {taskList.map(task=>(
                <TaskItem id={task.id} task={task.task} />
            ))}
        </div>
        {children}  
    </MonContexte.Provider>
    )
}
 export default TaskList;
 export { MonContexte };