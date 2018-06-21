import React from 'react';
import Navbar from './Navbar';
import Homes from './Home';
import Vedios from './Vedios';
import SignUp from './Signup';
import LogIn from './Login';

// const Signup = (props)=>{
//     return(
//         <Navbar>
//             <SignUp/>
//         </Navbar>
//     )
// }
// const Vedios = (props)=>{
//     // console.log('from exports ', props);
//     JSON.stringify(localStorage.setItem("props", props));
//     return(
//         <Navbar>
//             <Vedio/>
//         </Navbar>
//     )
// }
const Home = (props)=>{
    return(
        <Navbar>
            <Homes/>
        </Navbar>
    )
}

export{
    Home,
    Vedios,
    SignUp,
    LogIn
}