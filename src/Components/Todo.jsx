import React ,{ useState }from 'react'
import { Todolist } from './Todolist'

export const Todo = () => {
    const[todo,setNewTodo]=useState("")
    const[task,setNewTask]=useState([])
    // console.log(todo)
    const handleChange=(e)=>{
      setNewTodo(e.target.value)
        // console.log(e.target.value)


    }
    const handleClick=()=>{
       
 setNewTask( [...task,todo])
 setNewTodo("")
    }


  return (
    <div>


    <input type="text" value={todo} onChange={handleChange} />
    <button onClick={handleClick}>Add</button>
<Todolist task={task}/>

    </div>

  )
}
