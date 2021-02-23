import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import {  selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

// Logo
import Logo from './../../assets/Jaiyen-logo.png';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faShoppingBag)

const mapState = (state) => ({
   currentUser: state.user.currentUser,
   totalNumCartItems: selectCartItemsCount(state)
 });

const Header = props => {
   const location = useLocation();
   const [activeMenu, setActiveMenu] = useState(false);
   const dispatch = useDispatch();
   const { currentUser, totalNumCartItems } = useSelector(mapState);
    
const signOut = () => {
   dispatch(signOutUserStart());
};

useEffect(() => {
   setActiveMenu(false);
 }, [location]);


    return (
    <header className="header">
    <div className="wrap">
     <div className="logo">
     <Link to="/"> 
        <img src={Logo} alt="" />
        </Link>   
     </div>

     <nav className={`mainMenu ${activeMenu ? 'active' : ''}`}>
      <ul>
      <li> 
      <Link to="/store">
         Our Menu
      </Link>
      </li>
      </ul>  
      </nav>
      
      <div className="callToActions">
      <ul>
      <li>  
         <Link to="/bag">
         My Bag ({totalNumCartItems})
         <i class="fas fa-shopping-bag"></i>
         </Link>
      </li>

      {currentUser && [
      <li key={1}>
      <Link to="/dashboard">
         MY ACCOUNT
         <i class="fas fa-user-circle"></i>
      </Link>
      </li>,  
      <li key={2}>
      <span onClick={() => signOut()}>
         LOGOUT
         <i class="fas fa-sign-out-alt"></i>
      </span>
      </li>
         ]}

         {!currentUser && [
              <li key={1} className="hideOnMobile">
                 <Link to="/registration">
                    REGISTER
                 </Link>
             </li>,
             <li key={2}>
                 <Link to="/login">
                    LOGIN
                    <i class="fas fa-user-circle"></i>
                 </Link>
             </li>
         ]}
         
         <li className="mobileMenu">
              <span onClick={() => setActiveMenu(!activeMenu)}>
                <i className="fas fa-bars"></i>
              </span>
            </li>

         </ul>


         
     </div>
    </div>
    </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;