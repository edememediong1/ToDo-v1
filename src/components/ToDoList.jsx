import { useState } from "react"

export default function ToDoLIst(){
    const [tasks, setTasks] = useState(["Do Bro Code","Finish ALX Milestone 6", "Do Datacamp", "Write Minutes", "Listen to GMS1"]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() != ""){
            setTasks(t => [...t, newTask])
            setNewTask("") 
        }
        
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i ) => i != index))
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <article className="to-do-list ">
            <h1>To Do List</h1>
            <section>
                <input type="text" value={newTask} placeholder="Enter a task..."  onChange={handleInputChange}/>

                <button className="add-button" onClick={addTask}>Add Task</button>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-task" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="task-up" onClick={() => moveTaskUp(index)}>☝️</button>
                            <button className="task-down" onClick={() => moveTaskDown(index)}>👇</button>
                        </li>)}
                </ol>
                
            </section>
        
        </article>
    )
}