import React, { PropTypes } from 'react';
import Nav from "./Nav.js";

const App = (props) => {
  return (
    <div className="small-12 main-container">
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
