import React, { useState } from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useDispatch } from 'react-redux';

const initialState = {
    date:'',
    facebook:'',
    instagram:''
  };

const ServiceForm = () => {
    const dispatch = useDispatch();
    const [additionData, setAdditionData] = useState({ ...initialState });

    const handleAddition = e => {
        const { name, value } = e.target;
        setAdditionData({
          ...additionData,
          [name]: value
        });
      };
    


    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Additional data</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="date"
                label="date"
                name="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                value={additionData.date}
                onChange={e => 
                    handleAddition(e, {
                    type: 'editFormValue',
                    key: "date",
                    value: e.target.value
                })
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Service"
                name="service"
                variant="outlined"
                fullWidth
                value={additionData.service}
                onChange={e => 
                    handleAddition(e, {
                    type: 'editFormValue',
                    key: "service",
                    value: e.target.value
                })
            }
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Social Network?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="facebook"
                name="facebook"
                variant="outlined"
                fullWidth
                value={additionData.facebook}
                onChange={e => 
                    handleAddition(e, {
                    type: 'editFormValue',
                    key: "facebook",
                    value: e.target.value
                })
            }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="instagram"
                name="instagram"
                variant="outlined"
                fullWidth
                value={additionData.instagram}
                onChange={e => 
                    handleAddition(e, {
                    type: 'editFormValue',
                    key: "instagram",
                    value: e.target.value
                })
            }
            />
        </Grid>
    </>
}

export default ServiceForm;