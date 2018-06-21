import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import './index.css';
import WebFont from 'webfontloader';
import history from '../../History';
import { LogoutAction } from '../../store/action/logout';
import { connect } from 'react-redux';

WebFont.load({
    google: {
        families: ['Lato:300,400,700', 'Varela Round:300,400,700', 'Acme:300,400,700', 'sans-serif'],
    }
});
class Navbar extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.currentUser);
    }
    render() {
        return (
            <div>

                <div className="navbar">
                    <div className="logo-wrapper">
                        <img className="logo" src={Logo} alt="logo" />
                        <span className="logo-text-wrapper">
                            <span style={{ fontFamily: "Acme" }} className="topic">Topic</span>
                            <span className="tutor" style={{ fontFamily: "Acme" }}>Tutor</span>
                        </span>
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn-signin" onClick={() => history.push("/login")}>Sign In</button>
                        <button className="btn-register" onClick={() => history.push("/signup")}>Register</button>
                        {/* {
                            (this.props.currentUser !== {}) ? (
                                <div>
                                </div>
                            )
                                : (
                                    <button className="tn-register" onClick={() => this.props.logout}>Logout</button>

                                )
                        } */}
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        currentUser: state.applicationReducers.currentUser,
        isProgress: state.applicationReducers.isProgress,
        isError: state.applicationReducers.isError,
        errorText: state.applicationReducers.errorText

    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(LogoutAction.logout())
        // signupUser: (dataObj) => dispatch(SignupAction.signupUser(dataObj)),
        // dispatchClose: () => dispatch(SignupAction.closeErrorAlert()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);