import { useContext, useEffect, useState } from "react"
import TaskList, { MonContexte } from "./TaskList";
import Modal from "./Modal";

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

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        
    };

    const updateTask = (updatedTask)=>{
        setTaskList((prevList) => {
            return prevList.map((item) =>
                item.id === id ? { ...item, task: updatedTask } : item
            );
        });
    }
    return(
        <>
            <div className="flex justify-between w-96 p-6 rounded-lg bg-red-300">
            <div className="flex items-center">
                {checkbox ? (<i onClick={CheckboxToggle} className='bx bx-checkbox-checked mr-3 text-4xl cursor-pointer'></i>):(<i onClick={CheckboxToggle} className='bx bx-checkbox mr-3 text-4xl cursor-pointer'></i>)}
                <p>{task}</p>
            </div>
            <div className="flex">
                <button onClick={() => openModal()}><i class='bx bxs-pencil pr-3 text-blue-600'></i></button>
                <button onClick={() => removeItem(id)}><i class='bx bxs-trash-alt text-red-600'></i></button>
            </div>
            
            
            </div>
            <Modal closeModal = {closeModal} isOpen={isOpen} task={task} updateTask = {updateTask}/>
        </>
        
    )
}

export default TaskItem