import React from 'react';

const Header = React.createClass({
    render () {
        return (
            <div id="header-container" className="animated fadeIn">
                {/*<div id="background-image"></div>*/}
                <div id="header" className="text-center">
                    <h1 className="header-large-text animated fadeInDown">YOUR OPPONENT IS READY</h1>
                    <h1 className="header-large-text animated fadeInUp fadeIn">ARE YOU?</h1>

                </div>
            </div>
        );
    }
});

export default Header;
