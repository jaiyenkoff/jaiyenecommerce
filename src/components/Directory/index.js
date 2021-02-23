import React from 'react';
import { Link } from 'react-router-dom';
import FreshBrew from './../../assets/jaiyen-glass.png';
import ToGo from './../../assets/directory-2.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url('${FreshBrew}')`
            }}
          >
            <Link to="/store/Fresh%20Brew">
              Fresh Brew
            </Link>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${ToGo})`
            }}
          >
            <Link to="/store/togo">
              To-go
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Directory