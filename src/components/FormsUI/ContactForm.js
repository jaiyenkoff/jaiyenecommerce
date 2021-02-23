import React, { useState } from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useDispatch } from 'react-redux';


const initialAddressState = {
    date: "",
    service: "",
    facebook: "",
    twitter: "",
    firstname: "",
    lastname: "",
    email: "",
    line1: "",
    line2: "",
    postal_code: "",
    city: "",
  };

const ContactForm = () => {
  const dispatch = useDispatch();
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [firstName, setFirstName] = useState({ ...initialAddressState });
  const [lastName, setLastName] = useState({ ...initialAddressState });
  const [email, setEmail] = useState({ ...initialAddressState });
  const [phone, setPhone] = useState({ ...initialAddressState });

  const handleShipping = e => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };


return <>
          <Grid item xs={12}>
            <Typography variant="h6">Contact information</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={firstName}
                onChange={e => dispatch(setFirstName(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                value={lastName}
                onChange={e => dispatch(setLastName(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Street Address 1"
                name="line1"
                variant="outlined"
                required
                fullWidth
                value={shippingAddress.line1}
                onChange={e => 
                    dispatch(handleShipping(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Street Address 2 (optional)"
                name="line2"
                variant="outlined"
                fullWidth
                value={shippingAddress.line2}
                onChange={e => dispatch(handleShipping(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Postal Code"
                name="postal_code"
                variant="outlined"
                required
                fullWidth
                value={shippingAddress.postal_code}
                onChange={e => dispatch(handleShipping(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="City"
                name="city"
                variant="outlined"
                required
                fullWidth
                value={shippingAddress.city}
                onChange={e => dispatch(handleShipping(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                type="number"
                label="Phone Number"
                name="phone"
                variant="outlined"
                required
                fullWidth
                value={phone}
                onChange={e => dispatch(setPhone(e.target.value))}
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Email Address"
                name="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={e => dispatch(setEmail(e.target.value))}
            />
        </Grid>
    </>
}

export default ContactForm;

const countries = [
    { name: 'Thailand', code: 'TH' }
]