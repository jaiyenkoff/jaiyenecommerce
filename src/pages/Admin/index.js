import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions'
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import CloseButton from './../../components/forms/CloseButton';
import LoadMore from './../../components/LoadMore';
import CKEditor from 'ckeditor4-react';

// Material Ui
import { Icon } from '@material-ui/core';

// scss
import './styles.scss';



const Admin = () => {
  return (
    <div className="admin">
      <div className="header">
        <h2>Admin Management</h2>
      </div>
      <div className="nav">
        <div className="nav-item">
          <Icon style={{fontSize: 50}} class="fas fa-coffee" />
          <h4>Product Management</h4>
          <Link to="/stockproduct">
          <Button> Use Portal </Button>
          </Link>
        </div>
        <div className="nav-item">
          <Icon style={{fontSize: 50}} class="fas fa-box" />
          <h4>Material Management</h4>
          <Link to="/stockproduct">
          <Button> Use Jump Pad </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;