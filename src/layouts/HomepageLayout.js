import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

import { ThemeProvider } from '@material-ui/styles';
import theme from './../components/Theme';

const HomepageLayout = props => {
  return (
    <ThemeProvider theme={theme}>
    <div className="homeLayout">
    <div className="fullHeight">
    <div className="hero">
      <Header {...props} />
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

export default HomepageLayout;