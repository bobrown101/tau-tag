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
            var TDay=new Date("September, 10, 2016");
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
          <h1 className="countup-number"><CountTo to={30000} speed={8000} /></h1>
          <h3 className="styled-header">Square Feet</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={360} speed={8000} /></h1>
          <h3 className="styled-header">Obstacles & Weapons</h3>
        </div>
        <div className="columns small-12 medium-4">
          <h1 className="countup-number"><CountTo to={37} speed={8000} /></h1>
          <h3 className="styled-header">Pre-registered Teams</h3>
        </div>
      </Section>
      <Section inverted>
        <CenteredContainer>
          <h1 className="styled-header">T-minus {z1} days</h1>
          <h4>Sep 19th 2016</h4>
        </CenteredContainer>
      </Section>
      <Section>
        <CenteredContainer>
          <h4>Brought to you by:</h4>
          <h1 className="styled-header">PHI KAPPA TAU</h1>
          <h4>Sponsored by:</h4>
        </CenteredContainer>
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
        </div>
        <div className="row columns">
          <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
          <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
          <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
          <div className="sponsor-container small-6 medium-3"><div className="sponsor"></div></div>
        </div>
      </Section>
      <Section inverted>
        <CenteredContainer>
          <h1 className="styled-header">Details:</h1>
          <ul>
            <li><h4>Open 12:00-20:00 hours - 9/19/16</h4></li>
            <li><h4>Open matches - 12:00-5:00 hours</h4></li>
            <li><h4>Bracketed Competition - 5:00-8:00 hours</h4></li>
          </ul>
        </CenteredContainer>
      </Section>
      <Section>
        <h1 className="styled-header">Register Now</h1>
        <RegisterForm/>

      </Section>


    </div>
  );
};

export default HomePage;
