import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logo from '../../Images/logo.png';
import './index.css';
import WebFont from 'webfontloader';
// import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from 'material-ui';
import history from '../../History';
import Background from '../../Images/background.jpg';
import { BounceLoader } from 'react-spinners';
import SignupAction from '../../store/action/signup';
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
class Signup extends Component {
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
        console.log('update');
    }

    signup = () => {
        let obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signupUser(obj);
    }
    render() {
        let { classes } = this.props;
        return (
            <div>

                <div style={style.formWrapper}>
                    {/* <span><img src={Background} width="200px" alt="logo" /></span> */}
                    <TextField
                        style={{ width: "100%", fontFamily: "Lato" }}
                        type="text"
                        onChange={(ev) => this.update('name', ev)}
                        label="Name"
                        placeholder="Name"
                        // className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        type="email"
                        style={{ width: "100%", fontFamily: "Lato" }}
                        onChange={(ev) => this.update('email', ev)}
                        label="Email"
                        placeholder="Email"
                        // className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        type="password"
                        style={{ width: "100%", fontFamily: "Lato" }}
                        onChange={(ev) => this.update("password", ev)}
                        label="Password"
                        placeholder="Password"
                        // className={classes.textField}
                        margin="normal"
                    />
                    <br />
                    <div style={style.btn}>
                        <p style={{ fontFamily: 'Lato', cursor: "pointer", color: "#434e69" }} onClick={() => history.push('./login')}>
                            Already have an account?
                            </p>
                        <Button onClick={this.signup} variant="raised" color="primary" style={{ background: "#00a0e3" }}>
                            Signup
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
    return {
        currentUser: state.applicationReducers.currentUser,
        isProgress: state.applicationReducers.isProgress,
        isError: state.applicationReducers.isError,
        errorText: state.applicationReducers.errorText

    }
}
function mapDispatchToProps(dispatch) {
    return {
        signupUser: (dataObj) => dispatch(SignupAction.signupUser(dataObj)),
        dispatchClose: () => dispatch(SignupAction.closeErrorAlert()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
