import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import './index.css';
import WebFont from 'webfontloader';
import Background from '../../Images/background.jpg';
// import {SignUp} from '../../Components';
import LogIn from '../../Components/Login';
WebFont.load({
    google: {
        families: ['Lato:300,400,700', 'Varela Round:300,400,700', 'Acme:300,400,700', 'sans-serif'],
    }
});

const style = {
    header: {
        background: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: `url(${Background})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
    }
}
class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { classes } = this.props;
        return (
            <div>
                <div style={style.header}>
                    <LogIn/>
                </div>
            </div>
        )
    }
}
export default Login;