import React from 'react'

export default function TodoItem(props) {  
  
  return (
    <>
    <div className='container my-3'>
        <h3>{props.todo.id + "." + props.todo.title}</h3>
        <p>{props.todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>

    <hr />
    </>
  )
}
