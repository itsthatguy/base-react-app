import React                          from 'react';
import PropTypes                      from 'prop-types';
import { Provider }                   from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store:    PropTypes.object,
};

export default Root;
