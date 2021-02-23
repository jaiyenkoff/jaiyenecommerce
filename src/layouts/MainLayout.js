import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

import { ThemeProvider } from '@material-ui/styles';
import theme from './../components/Theme';

const MainLayout = props => {
    return (   
        <ThemeProvider theme={theme}>
        <div className="mainLayout">
        <div className="fullheight">
        <div className="hero2">
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

export default MainLayout;