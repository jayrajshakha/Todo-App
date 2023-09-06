

import { useState } from "react"
import Todos from "./Todos";




function Navbar() {

    const [todo , setTodo] =useState('');

    const [allTodos, setAllTodos] = useState([])

    const [editId , setEditId] = useState(null)
 
    //console.log(todo);

    function submitBtn(e){

      e.preventDefault();


      if(editId){

        const newalltodos = allTodos.map((e) => (

          e.id === editId ? { id : editId, todo}  : e  




        ))

        setAllTodos(newalltodos)
        setTodo('')
        setEditId(null)

      }



      else {


        setAllTodos([...allTodos,{ id : Date.now(),  todo}]);
        setTodo('')
      }

      localStorage.setItem('td' , JSON.stringify(allTodos))

    }

    function del(t){
          
       
      setAllTodos( allTodos.filter( (e) =>  (
        
        e.id !== t)
        )
        )
      
    }

  function edit(d){

    

    setTodo(d.todo)
    setEditId(d.id)


  }

  return (
    <div className='w-[600px] h-[550px] mx-auto mt-10 bg-[#643371] rounded-lg'>
        <form
        onSubmit={submitBtn} 
        className='flex justify-around m-2 mt-3'> 
            <input 
            className='hover:bg-yellow-300 w-[70%] border-2 outline-none rounded-lg cursor-pointer p-2 ' type="text" 
            placeholder='Add Todos' 
            onChange={(e) =>  setTodo(e.target.value)}
            value={todo}
            />
            <button className='w-[20%] outline-none border-none rounded-lg p-2 bg-[#e3e3e3] hover:bg-yellow-300 active:bg-transparent active:text-white ' 
            type="submit"> Add </button>
        </form>

        <Todos edit={edit} del={del} data ={allTodos}/>
       
    </div>
  )
}

export default Navbar
