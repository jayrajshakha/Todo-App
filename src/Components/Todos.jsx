

function Todos({data, del, edit} ) {

  

    

  return (
<div>


      <h1 className="text-center text-white text-2xl p-2 m-2 font-medium mt-4">Todos</h1>

           
        {
            data.map((i) => (

                <ul key={i.id} className="flex justify-around p-2 mx-auto ">

                <li className="bg-[#ffffff] w-[70%] text-black rounded-md m-2 p-2 ">{i.todo}</li>
                <button 
                type="button" 

                onClick={() => del(i.id)}
                className=" md:w-[20%] sm:w-[20px] outline-none border-none p-2 bg-white text-black rounded-lg m-2 hover:bg-red-700 hover:text-white active:bg-white active:text-black">Remove
                </button>
                <button 
                type="button" 

                onClick={() => edit(i)}
                className=" md:w-[20%] sm:w[20px] outline-none border-none p-2 bg-white text-black rounded-lg m-2 hover:bg-green-500 hover:text-white active:bg-white active:text-black">Edit
                </button>
            </ul>

            


            ))
        }

            
           {/* <ul className="flex justify-around p-2 mx-auto ">
                <li className="bg-[#ffffff] w-[70%] text-black rounded-md m-2 p-2 ">edfdf </li>
                <button type="button" className=" w-[20%]outline-none border-none p-2 bg-white text-black rounded-lg m-2 hover:bg-red-700 hover:text-white active:bg-white active:text-black">Remove
                </button>
            
            </ul>*/}
 
    </div>
  )
}

export default Todos;
