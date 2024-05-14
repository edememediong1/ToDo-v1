import { useState } from "react"

export default function ToDoLIst(){
    const [tasks, setTasks] = useState(["Do Bro Code","Finish ALX Milestone 6", "Do Datacamp", "Write Minutes", "Listen to GMS1"]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        setTasks(tasks => [...tasks, newTask])
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i ) => i != index))
    }

    function moveTaskUp(index){

    }
    
    function moveTaskDown(index){

    }

    return(
        <article className="to-do-list ">
            <h1>To Do List</h1>
            <section>
                <input type="text"  placeholder="Enter a task..."  onChange={handleInputChange}/>

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