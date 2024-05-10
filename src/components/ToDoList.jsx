import { useState } from "react"

export default function ToDoLIst(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){

    }

    function addTask(index){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }
    
    function moveTaskDown(index){

    }

    return(
        <article className="to-do-list ">
            <h1>To Do List</h1>
            <section>
                <></>

                
            </section>
        
        </article>
    )
}