import React from 'react';
import Typewriter from './Typewriter';
import CenteredContainer from './CenteredContainer';
import baffle from 'baffle';



const LandingQuestion = React.createClass({
    componentDidMount: function(){
        let gibberish = [
    '\u2588',
    '\u2593',
    '\u2592',
    '\u2591',
    '\u2588',
    '\u2593',
    '\u2592',
    '\u2591',
    '\u2588',
    '\u2593',
    '\u2592',
    '\u2591',
    '\u003c',
    '\u003e',
    '\u002f'
];
        baffle('.header-large-text')
        .set({
            characters: gibberish
        })
        .reveal(1500, 500);
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
