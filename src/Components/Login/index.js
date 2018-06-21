import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import './index.css';
import WebFont from 'webfontloader';
// import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from 'material-ui';
import Background from '../../Images/background.jpg';
import history from '../../History';
import LoginAction from '../../store/action/login';
import { BounceLoader } from 'react-spinners';
import {connect} from 'react-redux';

WebFont.load({
    google: {
        families: ['Lato:300,400,700', 'Varela Round:300,400,700', 'Acme:300,400,700', 'sans-serif'],
    }
});

const style = {
    formWrapper: {
        margin: '60px 0px 0px 100px',
        width: "350px"
    },
    btn: {
        // textAlign:'right',
        // width: '100%'
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between"
    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    update = (name, ev) => {
        let obj = {};
        obj[name] = ev.target.value;
        this.setState(obj);
    }

    login = () => {
        let obj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(obj);
    }
    render() {
        let { classes } = this.props;
        return (
            <div>
                <div style={style.formWrapper}>
                    <TextField
                        type="email"
                        style={{ width: "100%", fontFamily: "Lato" }}
                        onChange={(ev) => this.update('email', ev)}
                        label="Email"
                        placeholder="Email"
                        margin="normal"
                    />
                    <br />
                    <TextField
                        type="password"
                        style={{ width: "100%", fontFamily: "Lato" }}
                        onChange={(ev) => this.update("password", ev)}
                        label="Password"
                        placeholder="Password"
                        margin="normal"
                    />
                    <br />
                    <div style={style.btn}>
                        <p style={{ fontFamily: 'Lato', cursor: "pointer", color: "#434e69" }} onClick={() => history.push('./signup')}>
                            Dont have an account?
                            </p>
                        <Button onClick={this.login} variant="raised" color="primary" style={{ background: "#00a0e3" }}>
                            Login
                        </Button>
                    </div>
                    {
                        this.props.isProgress ? (
                            <BounceLoader
                                color={'#123abc'}
                                loading={this.props.isProgress}
                            />
                        )
                        :
                        null
                    }

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        currentUser: state.applicationSignInReducer.currentUser,
        isProgress: state.applicationSignInReducer.isProgress,
        isError: state.applicationSignInReducer.isError,
        errorText: state.applicationSignInReducer.errorText
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginUser: (dataObj) => dispatch(LoginAction.loginUser(dataObj)),
        // dispatchClose: () => dispatch(LoginAction.closeErrorAlert()),
        // socialLogin: (obj) => dispatch(LoginAction.socialLogin(obj)),
        // loadLocation: (obj) => dispatch(LoginAction.loadLocation(obj)),
        // closeAlert : () => dispatch(loginErrorAlert())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);