import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../redux/User/user.actions';

import Header from '../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from '../components/Footer';

import { ThemeProvider } from '@material-ui/styles';
import theme from './../components/Theme';

const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  My Account - Dashboard
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default DashBoardLayout;