// import React from 'react'
// // import classes from './page.module.css';

// const Home = () => {
//   return (
//     <div>
//       <h1>Hello ji</h1>

//       <button className={classes.btn}>Login</button>
//       <button className='btn'>global</button>
//     </div>
//   )
// }

// export default Home

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [marks, setMarks] = useState(80)
//   return (
//     <div>
//       <h3>My marks were {marks}</h3>
//       <button onClick={()=>{
//         setMarks(66)
//       }}>Update</button>
//     </div>
//   )
// }

// export default page





//  update to random number
"use client"
import React, { useState } from 'react'

const page = () => {
  const [marks, setMarks] = useState(80)
  return (
    <div>
      <h3>My marks were {marks}</h3>
      <button onClick={()=>{
        if (marks<10000) {
          setMarks(Math.random)
        }else {
          setMarks("greater than 10,000")
        }
      }}>update</button>
    </div>
  )
}

export default page


