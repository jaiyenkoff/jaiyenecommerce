import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiInstance } from './../../Utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { saveOrderHistory } from './../../redux/Orders/orders.actions'
import { makeStyles } from '@material-ui/core/styles';
import TextfieldWrapper from './../FormsUI/Textfield';
import Button from './../forms/Button';
import {
    Typography,
    Grid,
    Paper,
    Modal,
    Fade,
    Backdrop
} from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
 KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import CustomizedCheckbox from './../FormsUI/Checkbox';


import './styles.scss';
import Policies from '../../pages/Policies';


const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
};


const style = makeStyles(theme => ({
  Button: {
      textAlign: "center",
      justifyContent: "space-around",
      margin: theme.spacing(1),
  },
  mainBox: {
      position: "relative",
      marginTop: "10px",
      borderBottomRightRadius: "4px",
      borderBottomLeftRadius: "4px",
      width: "100%",
      height: "100%",
      background: theme.palette.background.default
  },
  form: {
      display: "block",
      justifyContent: "space-around",
      maxWidth: "1450px",
      margin: "0 auto",
      width: "100%",
      fontSize: "18"
  },
  buttonWrapper: {
      justifyContent: "flex-end"
  },
 paper:{
      marginTop: "20",
      borderTop: "solid #DFCDB1 20px",
      fontSize: "18px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      background: theme.palette.background.default
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0, auto',
  },
}));


const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const PaymentDetails = () => {
  const classes = style();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard ] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);


  
  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };


  const handleBilling = evt => {
    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    });
  }
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = async evt => {
    evt.preventDefault();
    const cardElement = elements.getElement('card');

    if (
      !shippingAddress.line1 || !shippingAddress.city ||
      !shippingAddress.state || !shippingAddress.postal_code ||
       !billingAddress.line1 ||
      !billingAddress.city || !billingAddress.state ||
      !billingAddress.postal_code || 
      !recipientName || !nameOnCard || !phone
    ) {
      return;
    }

    apiInstance.post('/payments/create', {
      amount: total * 100,
      shipping: {
        name: recipientName,
        address: {
          ...shippingAddress
        }
      }
    }).then(({ data: clientSecret }) => {

      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: nameOnCard,
          address: {
            ...billingAddress
          }
        }
      }).then(({ paymentMethod }) => {

        stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id
        })
        .then(({ paymentIntent }) => {

          const configOrder = {
            orderTotal: total,
            orderItems: cartItems.map(item => {
              const { documentID, productThumbnail, productName,
                productPrice, quantity } = item;

              return {
                documentID,
                productThumbnail,
                productName,
                productPrice,
                quantity
              };
            })
          }

          dispatch(
            saveOrderHistory(configOrder)
          );
        });

      })


    });

  };


  const configCardElement = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true
};


  return (
    <div className={classes.mainBox}>
      <form onSubmit={handleFormSubmit} className={classes.form}>
      <Paper className={classes.paper} elevation={2}>
      <div className="paymentDetails">
      <Grid container 
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="center"
      >
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Contact Information</Typography>
            </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            required
            label="Full Name"
            name="recipientName"
            variant="outlined"
            fullWidth
            onChange={evt => setRecipientName(evt.target.value)}
            value={recipientName}
          />
          </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            required
            label="Phone Number"
            name="phone"
            variant="outlined"
            fullWidth
            onChange={evt => setPhoneNumber(evt.target.value)}
            value={phone}
          />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={12} justify="space-around">
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Order Date"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          </Grid>
          </MuiPickersUtilsProvider>
          </Grid>
    

      <Grid container 
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="center"
      >
                  <Grid item xs={12} sm={3}>
                <Typography variant="h6">Shipping Address</Typography>
            </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            required
            label="Address Line 1"
            name="line1"
            variant="outlined"
            fullWidth
            onChange={evt => handleShipping(evt)}
            value={shippingAddress.line1}
          />
          </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            label="Address Line 2"
            name="line2"
            variant="outlined"
            fullWidth
            onChange={evt => handleShipping(evt)}
            value={shippingAddress.line2}
          />
          </Grid>
          <Grid item xs={4}>
          <TextfieldWrapper
            required
            label="District"
            name="city"
            variant="outlined"
            fullWidth
            onChange={evt => handleShipping(evt)}
            value={shippingAddress.city}
          />
          </Grid>
          <Grid item xs={4}>
          <TextfieldWrapper
            required
            label="Province"
            name="state"
            variant="outlined"
            fullWidth
            onChange={evt => handleShipping(evt)}
            value={shippingAddress.state}
          />
          </Grid>
          <Grid item xs={4}>
          <TextfieldWrapper
            required
            label="Postal Code"
            name="postal_code"
            variant="outlined"
            fullWidth
            onChange={evt => handleShipping(evt)}
            value={shippingAddress.postal_code}
          />
          </Grid>
          </Grid>

      <Grid container 
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="center"
      >
                  <Grid item xs={12} sm={3}>
                <Typography variant="h6">Billing Address</Typography>
          </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            required
            label="Name on Card"
            name="nameOnCard"
            variant="outlined"
            fullWidth
            onChange={evt => setNameOnCard(evt.target.value)}
            value={nameOnCard}
          />
          </Grid>
          <Grid  item xs={12}>
          <TextfieldWrapper
            required
            label="Address Line 1"
            name="line1"
            variant="outlined"
            fullWidth
            onChange={evt => handleBilling(evt)}
            value={billingAddress.line1}
          />
          </Grid>
          <Grid item xs={12}>
          <TextfieldWrapper
            label="Address Line 2"
            name="line2"
            variant="outlined"
            fullWidth
            onChange={evt => handleBilling(evt)}
            value={billingAddress.line2}
          />
          </Grid>
          <Grid item xs={4}>
          <TextfieldWrapper
            required
            label="District"
            name="city"
            variant="outlined"
            fullWidth
            onChange={evt => handleBilling(evt)}
            value={billingAddress.city}
          />
          </Grid>
          <Grid item xs={4}>
          <TextfieldWrapper
            required
            label="Provine"
            name="state"
            variant="outlined"
            fullWidth
            onChange={evt => handleBilling(evt)}
            value={billingAddress.state}
          />
          </Grid>
           <Grid item xs={4}>
           <TextfieldWrapper
            required
            label="Postal Code"
            name="postal_code"
            variant="outlined"
            fullWidth
            onChange={evt => handleBilling(evt)}
            value={billingAddress.postal_code}
          />
          </Grid>
          </Grid>

      <Grid container 
      spacing={3}
      direction="row"
      justify="space-between"
      alignItems="center"
      >
                  <Grid item xs={12} sm={3}> 
          <Typography variant="h6">Card Details</Typography>
          </Grid>
          <Grid item xs={12}>
          <CardElement
            options={configCardElement}
          />
          </Grid>
        <div className="checkbox">
        <CustomizedCheckbox 
        required 
        />
        <span>
        I agree to Jaiyen Koffee's
        </span>
        <span style={{margin: "10px", cursor:"pointer"}} onClick={handleOpen} >Terms and Policies</span>
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        maxWidth={300}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Policies />
        </Fade>
      </Modal>
        <Button
          type="submit"
        >
          Pay Now
        </Button>
        </Grid>
        </div>
        </Paper>
      </form>
    </div>
  );
}
export default PaymentDetails;