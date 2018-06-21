import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import Iframe from 'react-iframe'
import './index.css';
import WebFont from 'webfontloader';
import Navbar from '../Navbar';
import CS from '../../Images/cs.png';
import Fin from '../../Images/fi.jpeg';
import Mac from '../../Images/mac.jpg';
import Jazz from '../../Images/jazz.jpg';

WebFont.load({
    google: {
        families: ['Lato:300,400,700', 'Varela Round:300,400,700', 'Acme:300,400,700', 'sans-serif'],
    }
});
const styles = {
    heading: {
        fontFamily: 'Lato',
        color: '#7f8598',
        textAlign: 'center',
        fontSize: '45px'
    }
}
class Vedios extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        // this.props.location.state
    }
    render() {
        console.log(this.props);
        if (this.props.location.state.name === "Computer Science") {
            return (
                <div>
                    <Navbar />
                    <h1 style={styles.heading}>{this.props.location.state.name}</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/FdNQXibEcoc?list=PLu9GhE09VuMzX25ACxVeEdwxvnz95wMdE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <div>
                            <img src={CS} alt="logo" style={{ width: "300px" ,height:'400px'}} />
                        </div>
                    </div>

                </div>
            )
        }
        if (this.props.location.state.name === "Engineering") {
            return (
                <div>
                    <Navbar />
                    <h1 style={styles.heading}>{this.props.location.state.name}</h1>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/8PR5dQqCOqc?list=PLR2FqYUVaFJon9BA8nKiI2R4gjNOrukxP" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <img src={Mac} alt="logo" style={{ width: "300px" ,height:'400px'}} />
                    </div>
                </div>
            )
        }
        if (this.props.location.state.name === "Data & Statistics") {
            return (
                <div>
                    <Navbar />
                    <h1 style={styles.heading}>{this.props.location.state.name}</h1>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/BtLpqsTTqAA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <img src={Fin} alt="logo" style={{ width: "300px",height:'400px' }} />
                    </div>
                    {/* <iframe width="854" height="480" src="https://www.youtube.com/watch?v=BtLpqsTTqAA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
                </div>
            )
        }
        if (this.props.location.state.name === "Finance") {
            return (
                <div>
                    <Navbar />
                    <h1 style={styles.heading}>{this.props.location.state.name}</h1>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/Xagt-41XfAg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <img src={Jazz} alt="logo" style={{ width: "300px" ,height:'400px'}} />
                    </div>
                </div>
                // <iframe width="854" height="480" src="https://www.youtube.com/embed/xE-WXrXTYsw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            )
        }
        if (this.props.location.state.name === "Humanity") {
            return (
                <div>
                    <Navbar />
                    <h1 style={styles.heading}>{this.props.location.state.name}</h1>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <iframe width="854" height="480" src="https://www.youtube.com/embed/xE-WXrXTYsw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        {/* <img src={fin} alt="logo" /> */}
                    </div>
                </div>
            )
        }
    }
}
export default Vedios;