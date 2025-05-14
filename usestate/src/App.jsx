// import React, { useState } from 'react'
// import './index.css'

// const App = () => {
//   const[count,setCount]=useState(0)
//   const handleClickIncrement=()=>{
//     setCount(perv=>perv +1)
//   }
//    const handleClickReset=()=>{
//     setCount(0)
//   }
//   const handleClickDecrement=()=>{
//     setCount(perv=>perv -1)
//   }
//   return (
//     <div className='main'>
//       <h1>{count}</h1>
//       <button onClick={handleClickIncrement}>Increment (+)</button>
//       <button onClick={handleClickReset}>Reset (0)</button>
//       <button onClick={handleClickDecrement}>Decrement (-)</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const[state,setState]=useState(0)
  const handleCount=(xyz)=>{
    if(xyz==="reset"){
      setState(0)
    }
    else if(xyz==="increment"){
      setState(perv=>perv+1)
    }
    else if(xyz==="decrement"){
      setState(perv=>perv-1)
    }
   

  }
  return (
    <div className='main'>
       <h1>{state}</h1>
       <button onClick={()=>handleCount("increment")}>Increment (+)</button>
       <button onClick={()=>handleCount("reset")}>Reset (0)</button>
       <button onClick={()=>handleCount("decrement")}>Decrement (-)</button>
     </div>
  )
}

export default App

