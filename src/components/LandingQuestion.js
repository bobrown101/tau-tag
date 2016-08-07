import React from 'react';
import Typewriter from './Typewriter';
import CenteredContainer from './CenteredContainer';
import theaterJS from 'theaterJS';

let theater = theaterJS()

const LandingQuestion = React.createClass({
    componentDidMount: function(){

    },
    render () {



        return (
            <div id="landing-container" className="animated fadeIn">
                {/*<div id="background-image"></div>*/}
                <div id="landing" className="text-center">
                    <img id="large-logo" src={require('../images/tautaglogo.svg')} />

                    <Typewriter className="header-large-text animated fadeIn"
                    speed={1}
                    delay={100}
                    tag="h1"
                    text={`YOUR OPPONENT IS READY`}
                    randomSpeed={true} />
                    <Typewriter
                    speed={100}
                    delay={3000}
                    tag="h1"
                    text={`ARE YOU? ...`}
                    randomSpeed={true} />

                    <CenteredContainer>
                        <div className="landing-button animated fadeIn delay4">Register Now</div>
                    </CenteredContainer>

                    <CenteredContainer>
                        <div className="scroll-down animated">
                            <div className="scroll-down-arrow"></div>
                        </div>
                    </CenteredContainer>
                    

                </div>
            </div>
        );
    }
});

export default LandingQuestion;
