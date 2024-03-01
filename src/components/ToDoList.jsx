import React, { useState } from 'react'

function Todolist() {
  const[task ,setask] =useState(["Eat breakfast","Take a shower","Run for five miles"]);
  const[newTask,setNewTask] =useState("");
  function handleInputChange(event){
    setNewTask(event.target.value)
    
  }
  function addTask(){
   if(newTask.trim()!==""){
    setask(t=>[...t,newTask]);
    setNewTask("")
   }

  }
  function deleteTask(index){
    const UpdatedTask=task.filter((element,i)=>i!==index);
    setask(UpdatedTask)
    
  }
  function moveTaskUp(index){
if(index>0){
  const UpdatedTask=[...task];
  [UpdatedTask[index],UpdatedTask[index-1]]=
  [UpdatedTask[-1],UpdatedTask[index]]
  setask(UpdatedTask)
}
  }
  function moveTaskDown(index){
    if(index<task.length-1){
      const UpdatedTask=[...task];
      [UpdatedTask[index],UpdatedTask[index+1]]=
      [UpdatedTask[+1],UpdatedTask[index]]
      setask(UpdatedTask)
    }

  }


  return (<> 
  <div className='to-do-list'>
    <h1>To-Do-List</h1>
    <div>
    <input type="text"
    placeholder='enter a task..'
    value={newTask}
    onChange={handleInputChange}/>
    <button className='add-button'  onClick={addTask}>
      Add
    </button>
    </div>
    <ol>
      {task.map((task,index)=>
      <li key={index}>
      <span className='text'>{task}</span>
      <button className='delete-button'  onClick={()=>deleteTask(index)}>
        delete
      </button>
      <button className='move-button'  onClick={()=> moveTaskUp(index)}>
      ☝
      </button>
      <button className='move-button' onClick={()=>moveTaskDown(index)}> 
      👇
      </button>
      </li>
      )}
    </ol>
  </div>
  </>
 
  )
}

export default Todolist


