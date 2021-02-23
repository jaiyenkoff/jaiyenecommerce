import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Box,
    Grid,
    Typography,
    CircularProgress,
} from '@material-ui/core';
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import StepIcons from "./StepIcons";
import StepConnector from './StepConnector'
import ContactForm from "./../FormsUI/ContactForm";
import ServiceForm from "./../FormsUI/ServiceForm";
import PaymentForm from "./../FormsUI/PaymentForm";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const style = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%"
    },
}));

const StepContent = ({ step }) => {
    switch (step) {
        case 0:
            return <ContactForm />;
        case 1:
            return <ServiceForm />;
        case 2:
            return <PaymentForm />;
        default:
            return <></>;
    }
}

const Steppers = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = style();
    const stripe = useStripe();
    const elements = useElements();
    const [cardStatus, setCardStatus] = useState(true);
    const [cardMessage, setCardMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

      return <>
<Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
            {/* Change the number of loops here based on StepContent */}
            {[1, 2, 3].map(e =>
                <Step key={e}>
                    <StepLabel StepIconComponent={StepIcons} />
                </Step>
            )}
        </Stepper>
        <Box className={classes.mainBox}>
            <Grid
                container
                spacing={3}
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "400px" }}
            >
                {activeStep === 3
                    ?
                    <>
                        {cardStatus
                            ?
                            <SentimentVerySatisfied fontSize="large" color="primary" />
                            :
                            <SentimentVeryDissatisfied fontSize="large" color="error" />
                        }
                        <Typography variant="h4">
                            {cardMessage}
                        </Typography>
                        <Button onClick={cardStatus ? handleReset : handleBack} className={classes.button}>
                            {cardStatus ? "Reset" : "Back"}
                        </Button>
                    </>
                    :
                    <form className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3}>
                            <StepContent step={activeStep} />
                            <Grid container item justify="flex-end">
                                <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ?
                                            <CircularProgress size={24} />
                                            :
                                            activeStep === 2 ? 'Pay' : 'Next'
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Grid>
        </Box>
    </>
}

export default Steppers;