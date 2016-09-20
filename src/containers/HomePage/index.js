import React from 'react';
import {Link} from 'react-router';
import Section from '../../components/Section.js';
import CenteredContainer from '../../components/CenteredContainer.js';
import LandingQuestion from '../../components/LandingQuestion.js';
import CountTo from 'react-count-to';
import RegisterForm from '../../forms/register/index.js';



const HomePage = () => {

    function DayDiff(CurrentDate)
    {
      var TYear=CurrentDate.getFullYear();
            var TDay=new Date("October, 01, 2016");
            TDay.getFullYear(TYear);
            var DayCount=(TDay-CurrentDate)/(1000*60*60*24);
            DayCount=Math.round(DayCount);
        return(DayCount);
    }

    var z1 = DayDiff(new Date());
  return (
    <div>
      <LandingQuestion/>
      <Section>

        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={60000} speed={8000} /></h1>
          <h3 className="styled-header">Square Feet</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={100} speed={8000} /></h1>
          <h3 className="styled-header">Obstacles & Weapons</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number">FREE</h1>
          <h3 className="styled-header">Price</h3>
        </div>
      </Section>
      <Section inverted>
        <CenteredContainer>
          <h1 className="styled-header">T-minus {z1} days</h1>
          <h4>Oct 1st 2016</h4>
        </CenteredContainer>
      </Section>
      <Section>
        <CenteredContainer>
          <h4>Brought to you by:</h4>
          <h1 className="styled-header">PHI KAPPA TAU</h1>
          {/*<h4>Sponsored by:</h4> */}
        </CenteredContainer>
        {/*         <div className="row columns">
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                </div>
                <div className="row columns">
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                </div>
                <div className="row columns">
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                  <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
                </div>*/}
      </Section>
      <Section inverted>
        <CenteredContainer>
          <h1 id="details" className="styled-header">Details:</h1>
            <br/>
            <br/>
            <div className="small-8 small-offset-2">
            <h4 className="styled-header">Join us in turning the Gordon Field House into the ultimate laser tag battlefield!
            The brothers of Phi Kappa Tau will be hosting Tau Tag, a charity laser tag tounament filled with lights, music, and the best equipment around.
            Competitors will face off against other teams in a number of different game styles such as domination, capture the flag, and more.</h4>
            </div>
            <br/>
            <br/>
            <h3 className="styled-header">When:</h3>
            <h4>October 1st 2016</h4>
            <h4>Open Play: 2:00 PM - 8:00 PM</h4>

            <br/>
            <br/>

            <h3 className="styled-header">Where:</h3>
            <h4>Gordon Field House</h4>

            <br/>
            <br/>
            <h3 className="styled-header">The Cause:</h3>

            <h4>{"All proceeds go to the Serious Fun Children's Network"}</h4>

            <br/>
            <br/>
            <h3 className="styled-header">Cost:</h3>

            <h4>Free for open play (2:00-8:00)</h4>
            <h4>Spectators welcome</h4>

            <br/>
            <br/>

        </CenteredContainer>
      </Section>
      {/*       <Section>

              <h1 className="styled-header">Register Now</h1>
              <RegisterForm/>


            </Section> */}



    </div>
  );
};

export default HomePage;
