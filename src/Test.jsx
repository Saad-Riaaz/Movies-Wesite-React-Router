// import axios from "axios"
// import { useEffect, useState } from "react"
// export const ApiData = () =>{
//     const [data , setData] = useState([])


// const Api = async () => {
//  const res = await axios.get(
//     "http://localhost:5000/api/movies"
//  )
//  try {
//      console.log(res);
//      console.log(res.data);
//      setData(res.data)
//  } catch (error) {
//     console.log(error);


//  }



// }
// useEffect(()=>{
// Api()
// },[])

// return (
//     <ul>
//         {data.map((curElem , index) =>{
//             return (
//                 <li key={index}>
//                     <p>{index + 1}</p>
//                     <p>{curElem.title}</p>
//                 </li>
//             )
//         })}
//     </ul>
// )

// }

// import axios from "axios";
// import { useState } from "react";

// export const ApiData = () => {

//     const [title, setTitle] = useState("");

//     const addMovie = async () => {

//         const res = await axios.post(
//             "http://localhost:5000/api/movies",
//             {
//                 title: title
//             }
//         );

//         console.log(res.data);
//     };

//     return (
//         <div>

//             <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter movie title"
//             />

//             <button onClick={addMovie}>
//                 Add Movie
//             </button>

//         </div>
//     );
// };





import axios from "axios";
import { useState } from "react";

const ApiData = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async () => {

        const res = await axios.post(
            "http://localhost:5000/api/register",
            {
                email: email,
                password: password
            }
        );

        console.log(res.data);
    };

    return (
        <div>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={registerUser}>
                Register
            </button>

        </div>
    );
};

export default ApiData;
