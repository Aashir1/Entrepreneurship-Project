import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import History from '../../History';
export class LogoutAction {
    static logout(){
        return (dispatch)=>{
                    dbConfig.auth().signOut()
                  .then(()=>{
                      History.replace('/login');
                      dispatch(logoutSucceed());
                    }
                  )
                  .catch((error)=>{
                    console.log(error.message);
                  })
            
                } 
    }
}
// export function logoutRequestAsync(){
//     return (dispatch)=>{
//         // console.log(logoutObj);
//         // dispatch(logoutRequest());
//         dbConfig.auth().signOut()
//       .then(()=>{
//           History.replace('/');
//           dispatch(logoutSucceed());
//         }
//       )
//       .catch((error)=>{
//         console.log(error.message);
//       })

//     }
// }

// // function logoutRequest(){
// //     return{
// //         type: actionTypes.logout_REQUEST
// //     }
// // }
function logoutSucceed(){
    console.log();
    return{
        type: actionTypes.LOGOUT_SUCCEED,
        
    }
}

