import { useContext, useEffect, useState } from "react"
import { MonContexte } from "./TaskList";

function TaskItem({id, task}){
    const { setTaskList } = useContext(MonContexte);
    const localCheckbox = JSON.parse(localStorage.getItem(`checkbox-${id}`)) || false
    const [checkbox, setCheckbox] = useState(localCheckbox)

    useEffect(() => {
            localStorage.setItem(`checkbox-${id}`, JSON.stringify(checkbox));
    }, [checkbox, id]);

    const CheckboxToggle = () => {

        setCheckbox(!checkbox)

    };
    const removeItem = (itemToRemove) => {
        setTaskList((prevList) => prevList.filter(item => item.id !== itemToRemove));
    };
    return(
        <div className="flex justify-between w-96 p-6 rounded-lg bg-red-300 m-5">
            <div className="flex items-center">
                {checkbox ? (<i onClick={CheckboxToggle} className='bx bx-checkbox-checked mr-3 text-4xl cursor-pointer'></i>):(<i onClick={CheckboxToggle} className='bx bx-checkbox mr-3 text-4xl cursor-pointer'></i>)}
                <p>{task}</p>
            </div>
            
            <button onClick={() => removeItem(id)}><i class='bx bxs-trash-alt text-red-600'></i></button>
        </div>
    )
}

export default TaskItem