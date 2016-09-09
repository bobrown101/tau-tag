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
          <h1 className="countup-number"><CountTo to={160000} speed={8000} /></h1>
          <h3 className="styled-header">Square Feet</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={360} speed={8000} /></h1>
          <h3 className="styled-header">Obstacles & Weapons</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={2} speed={8000} /></h1>
          <h3 className="styled-header">Pre-registered Teams</h3>
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
          <h1 className="styled-header">Details:</h1>
            <h4>Location: Gordon Field House</h4>
            <h4>Open Play: 2:00 PM - 4:00 PM</h4>
            <h4>Registered Team Tournament: 4:00 PM - 8:00 PM</h4>
            <br/>
            <br/>

            <h4>Individual - $16 per/person</h4>
            <h4>Individual Open Play Pass - $30 per/person (2 hours, guarantees at least 2 games)</h4>
            <br/>
            <br/>

            <h4>Registered Team Size: 6 People</h4>
            <h4>Teams - $90 ($15 per/person)</h4>
            <h4>Team registration open until all spots are full (20 teams max)</h4>




        </CenteredContainer>
      </Section>
      <Section>
        <h1 id="registration" className="styled-header">Registration will open: Sep 19th 2016</h1>
        {/* <h1 className="styled-header">Register Now</h1>
        <RegisterForm/>*/}


      </Section>


    </div>
  );
};

export default HomePage;
