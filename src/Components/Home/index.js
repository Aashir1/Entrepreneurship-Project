import React, { Component } from 'react';
import Pareshan from '../../Images/pareshanedit.jpg';
import Computersicence from '../../Images/computersicence.png';
import DataandState from '../../Images/dataandstat.png';
import Engineering from '../../Images/engineering.png';
import Finance from '../../Images/finance.png';
import Humanity from '../../Images/humanity.png';
import Business from '../../Images/business.png';
import Language from '../../Images/languages.png';
import Biology from '../../Images/biology.png';
import Topic from '../../Images/topic.png';
import Learning from '../../Images/learning3.png';
import LinkedIn from '../../Images/linkedin.png';
import Facebook from '../../Images/facebook.png';
import Twitter from '../../Images/twitter.png';
import Google from '../../Images/google.png';
import history from '../../History';



import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Lato:300,400,700', 'Varela Round:300,400,700', 'Acme:300,400,700', 'sans-serif'],
    }
});
const styles = {

}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engineering: "https://www.youtube.com/watch?v=8PR5dQqCOqc&list=PLR2FqYUVaFJon9BA8nKiI2R4gjNOrukxP",
            computer_science: "https://www.youtube.com/watch?v=FdNQXibEcoc&list=PLu9GhE09VuMzX25ACxVeEdwxvnz95wMdE",
            data_and_stat: "https://www.youtube.com/watch?v=BtLpqsTTqAA",
            finance: "https://www.youtube.com/watch?v=Xagt-41XfAg",
            humanity: "https://www.youtube.com/watch?v=xE-WXrXTYsw",

        }
    }
    navigate = (linkname) => {
        let url = this.state[`${linkname}`];
        if (linkname === "computer_science")
            return history.push(`/tutorials/${linkname}`, { name: 'Computer Science', url });
        else if (linkname === "engineering")
            return history.push(`/tutorials/${linkname}`, { name: 'Engineering', url });
        else if (linkname === "finance")
            return history.push(`/tutorials/${linkname}`, { name: 'Finance', url });
        else if (linkname === "humanity")
            return history.push(`/tutorials/${linkname}`, { name: 'Finance', url });
        else {
            return history.push(`/tutorials/${linkname}`, { name: 'Data & Statistics', url });
        }
    }
    render() {
        return (
            <div className="adf">
                <div className="image-wrapper">
                    <img className="image" src={Pareshan} alt="logo" />
                    <div className="h2parent">
                        <h2>
                            <span>
                                <span>
                                    Top Online Courses
                                </span>
                                <br />
                                <br />
                                <span>
                                    Advance Your Career. Improve Your Life.
                                </span>
                            </span>
                        </h2>
                    </div>
                </div>
                <section className="second-section">
                    <h3 className="subjects-heading">
                        POPULAR SUBJECT
                    </h3>
                    <div className="box-wrapper">
                        <div className="box" onClick={() => this.navigate('computer_science')}>
                            <img src={Computersicence} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Computer Science
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box" onClick={() => this.navigate('data_and_stat')}>
                            <img src={DataandState} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Data & Statistics
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box" onClick={() => this.navigate('engineering')}>
                            <img src={Engineering} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Engineering
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="box-wrapper">
                        <div className="box" onClick={() => this.navigate('finance')}>
                            <img src={Finance} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Finance
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box" onClick={() => this.navigate('humanity')}>
                            <img src={Humanity} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Humanity
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={Business} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Business
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* third row */}
                    <div className="box-wrapper">
                        <div className="box">
                            <img src={Language} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Language
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={Biology} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Biology
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={Engineering} alt="logo" />
                            <div className="box-text">
                                <h3>
                                    Engineering
                                </h3>
                                <p>
                                    Select Subjects, Add Qualification, Experience, Picture and tell why the student should hire you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorfull">
                    <div className="colordiv1">
                        <div>
                            <h1>
                                Topic Based Learning
                            </h1>
                            <p>
                                We provide a topic based learing that helps you to understande <br /> relevent topic devoid wasting of time.
                            </p>
                        </div>
                        <div>
                            <img src={Topic} alt="logo" />
                        </div>
                    </div>
                    <div className="colordiv2">
                        <div>
                            <img src={Learning} alt="logo" />
                        </div>
                        <div>
                            <h1>
                                Learning in native Language
                            </h1>
                            <p>
                                You can easily percive the concepte  <br /> that deliver to you.
                            </p>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footer-icons">
                        <img src={LinkedIn} alt="logo" />
                        <img src={Facebook} alt="logo" />
                        <img src={Google} alt="logo" />
                        <img src={Twitter} alt="logo" />
                    </div>
                    <div>
                        © CopyRight 2018. All Rights Reserved. Privacy Policy | Terms & Condition
                    </div>
                </footer>
            </div >
        )
    }
}
export default Home;