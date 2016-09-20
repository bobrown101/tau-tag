import React from 'react';
import Typewriter from './Typewriter';
import CenteredContainer from './CenteredContainer';

const LandingQuestion = React.createClass({
    componentDidMount: function(){

    },
    scrollDown: function() {
      var myDiv = document.getElementById('details');
      // console.log(myDiv);
      // window.scrollBy(myDiv, 0,100)
      myDiv.scrollIntoView();
    },
    render () {



        return (
            <div id="landing-container" className="animated fadeIn">
                {/*<div id="background-image"></div>*/}
                <div id="landing" className="text-center">
                    <img id="large-logo" src={require('../images/tautaglogo-new.svg')} />

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
                        <div onClick={this.scrollDown}className="landing-button animated fadeIn delay4">Find Out More</div>
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
