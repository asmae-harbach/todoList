import { useState } from "react";

function Modal({isOpen, closeModal, task, updateTask}) {
    const [updatedTask, setUpdatedTask ] = useState(task)

    const handleSubmit = (e) => {

        e.preventDefault();

        updateTask(updatedTask)

        closeModal()

    };

   
    return (
        <div className="flex justify-center items-center p-2">

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                        <h2 className="text-2xl font-bold text-center mb-4">Modifier La tâche</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input onChange={(e)=>setUpdatedTask(e.target.value)} value={updatedTask} type="text" className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <button type="submit" className="px-4 py-2 mt-5 text-white bg-green-500 rounded hover:bg-red-700">Modifier</button>
                            <button onClick={closeModal} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Annuler</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
