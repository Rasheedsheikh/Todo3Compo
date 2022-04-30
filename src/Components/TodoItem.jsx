import React from 'react'

export const TodoItem = ({task}) => {
  
  return (
    <div>
        {task.map((item,index)=> { 
      return  <h1 key={index}>
       {item}
       </h1>

    })}
    </div>
  )
}
