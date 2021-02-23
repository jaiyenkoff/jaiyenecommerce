/* eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

// components
import AdminToolbar from './components/AdminToolbar'; 



// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';


// layouts
import HomepageLayout from './layouts/HomepageLayout';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages 
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import StockProduct from './pages/Admin/StockProduct'
import Store from './pages/Store';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Order from './pages/Order'
import Policies from './pages/Policies';


// theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';


import './default.scss';


const App = props => {
  const dispatch = useDispatch();

  
 useEffect(() => {
  dispatch(checkUserSession());
  }, []); 
  
    

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
        <AdminToolbar />
          <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
          <Homepage />
          </HomepageLayout>
        )} />
        <Route exact path="/store" render={() => (
          <MainLayout>
            <Store /> 
          </MainLayout>
        )} />
        <Route path="/store/:filterType" render={() => (
          <MainLayout>
            <Store /> 
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails /> 
          </MainLayout>
        )} />
        <Route path="/bag" render={() => (
          <MainLayout>
            <Cart /> 
          </MainLayout>
        )} />
        <Route path="/payment" render={() => (
         <WithAuth>
         <MainLayout>
            <Payment /> 
          </MainLayout>
          </WithAuth>
        )} />
        <Route path="/registration" render={() =>   (
          <MainLayout>
          <Registration />
          </MainLayout>
        )} />
          <Route path="/login" render={() => (
          <MainLayout>
          <Login />
          </MainLayout>
        )} />
        <Route path='/recovery' render ={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path='/policies' render ={() => (
          <MainLayout>
            <Policies />
          </MainLayout>
        )} />
        <Route path='/dashboard' render ={() => (
          <WithAuth>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
          </WithAuth>
        )} />
       <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route path="/stockproduct" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <StockProduct />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAdminAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAdminAuth>
        )} />
        </Switch>
        </ThemeProvider>
      </div>
    );
  }

export default App;