import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import History from '../../History';
export default class LoginAction {
    static loginUser(loginObj) {
            return (dispatch)=>{
                console.log(loginObj);
                dispatch(loginRequest());
                dbConfig.auth().signInWithEmailAndPassword(loginObj.email, loginObj.password)
                .then(user=>{
                    History.replace('/map');
                    let obj={
                        name: user.displayName,
                        uid: user.uid,
                        email: user.email
                    }
                    dispatch(loginSucceed(obj));
                })
                .catch((error)=>{
                    dispatch(loginError(error.message));
                })
            }
        }

    static loadLocation(obj){
        return{
            type: actionTypes.LOAD_LOCATION,
            obj
        }
    }
    static closeErrorAlert(){
        return {
            type: actionTypes.CLOSE_ERROR_ALERT
        }
    }
}
// export 

function loginRequest(){
    return{
        type: actionTypes.LOGIN_PROGRESS
    }
}
function loginSucceed(data){
    return{
        type: actionTypes.LOGIN_SUCCEED,
        data
    }
}

function loginError(error){
    return{
        type: actionTypes.LOGIN_ERROR,
        error
    }
}