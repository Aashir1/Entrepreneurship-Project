import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import History from '../../History';
export default class SignupAction {

    static signupUser(SignupObj) {
        console.log(SignupObj);
        return (dispatch) => {
            dispatch(signUpRequest());
            dbConfig.auth().createUserWithEmailAndPassword(SignupObj.email, SignupObj.password)
                .then(user => {
                    console.log('created user', user)
                    History.replace('/map');
                    return user.updateProfile({
                        displayName: SignupObj.name,
                    })
                        .then(() => {
                            console.log('newly created user: ', user);
                            let obj = {
                                name: user.displayName,
                                uid: user.uid,
                                email: user.email
                            }
                            dbConfig.database().ref(`/FYP/allUsers/${user.uid}`).set(obj)
                            dispatch(signUpSucceed(obj));
                        })
                })
                .catch((error) => {
                    dispatch(signUpError(error.message));
                    History.push('/signup');
                    // alert(error.message);
                })
        }
    }
    static closeErrorAlert() {
        return {
            type: actionTypes.CLOSE_ERROR_ALERT
        }
    }
}
function signUpRequest() {
    return {
        type: actionTypes.SIGNUP_PROGRESS
    }
}

function signUpSucceed(data) {
    return {
        type: actionTypes.SIGNUP_SUCCEED,
        data
    }
}
function signUpError(error) {
    return {
        type: actionTypes.SIGNUP_ERROR,
        error
    }
}
