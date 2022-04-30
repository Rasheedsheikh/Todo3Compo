import React from 'react'
import { TodoItem } from './TodoItem'

export const Todolist = ({task}) => {
    console.log(task)
  return (
<div>
    {/* {task.map((item,index)=> { 
      return  <div key={index}>
       {item}
       </div>

    })} */}
    <TodoItem task={task}/>
    </div>
    
  )
}
