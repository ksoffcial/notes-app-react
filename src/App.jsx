import React, { useState } from 'react'

const App = () => {
  const [tittle, setTittle] = useState('')
  const [details, setDetails] = useState('')
  const [note,setNote] = useState([])


  const handletosumbit=(e)=>{
    e.preventDefault()
    // console.log("form sumbitted")
    let notecopy = [...note]
    notecopy.push({tittle,details})
    setNote(notecopy)
    // console.log(note)
    // console.log(notecopy)
    setTittle('')
    setDetails('')
  }

  const handletochange=(e)=>{
    setTittle(e.target.value)
  }
  const handletochange1=(e)=>{
    setDetails(e.target.value)
  }

  const handletoclick=(val)=>{
    console.log(val)
    let notecopy =[...note]
    notecopy.splice(val,1)
    setNote(notecopy)
  }
  return (
    <div  className='lg:flex p-8  m-4  rounded-2xl gap-4 items-start'>
      <div className='flex-1 bg-white lg:p-8 p-4 rounded-xl text-center'>
        <h1 className='text-4xl font-bold mb-4'>Add Task</h1>
        <form onSubmit={handletosumbit}>
          <input type="text" name="" required placeholder='Enter your Topic here.....' value={tittle} onChange={handletochange} className='border px-4 w-[70%] py-2 rounded-xl outline-none'/>
          <br />
          <br />
          <textarea name="" id="" required placeholder='Enter your details......' value={details} onChange={handletochange1} className='border px-4 w-[70%] py-1  rounded-xl outline-none'></textarea>
          <br />
          <button className='px-10 bg-green-700 text-white font-medium py-2 rounded-xl w-[70%] mt-3'>Add Task</button>
        </form>
      </div>

      <div className=' px-4 flex-1 bg-white lg:p-8 p-4 rounded-xl'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Remaining Task</h1>

        <div className='flex flex-wrap gap-4 overflow-auto '>
        {
          note.map((ele,id)=>(
            <div key={id} className='rounded-2xl flex flex-col p-4  bg-[#F0F4FF] h-70 w-60'>
              <h2 className='text-center text-[#6C63FF] text-xl font-bold'>Task :- {id+1}</h2>
              <h2 className='text-3xl mt-4 font-medium mb-4 text-[#2B2D42] underline'>{ele.tittle}</h2>
              <p> • {ele.details}</p>
              <button className='mt-auto bg-green-700 text-white font-medium py-2 rounded-xl cursor-pointer' onClick={()=>{handletoclick(id)}}>Delete</button>
            </div>
          ))
        }
        </div>
      </div>

    </div>
  )
}

export default App