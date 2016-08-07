import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
    getInitialState: function(){
        return{
            navOpen: false
        };
    },
    toggleHamburger(){
        this.setState({navOpen: !this.state.navOpen}); // eslint-disable-line
    },
    render () {
      let currentLocation = window.location.pathname;
      console.log("from nav: ", currentLocation);
      currentLocation = currentLocation.replace("/", "-");
      let topBarClass = this.state.navOpen ? "top-bar animated fadeIn open" : "top-bar animated fadeIn";
      topBarClass = topBarClass + " " + currentLocation;
      let emailButtonClass = "button email-button ";
      emailButtonClass = emailButtonClass + currentLocation;
        return (
            <div className={topBarClass}>
                <div onClick={this.toggleHamburger} className="mobile-hamburger-container">
                    <div className={this.state.navOpen ? "mobile-hamburger open" : "mobile-hamburger"}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="left-right-container">
                    <div className="item-container item-container-left">
                        <div className="item animated fadeIn">
                            <IndexLink to="/" onClick={this.toggleHamburger} className="link">Home</IndexLink>
                        </div>
                        <div className="item animated fadeIn">
                            <Link to="/local-history" onClick={this.toggleHamburger} className="link">Local History</Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default Nav;
