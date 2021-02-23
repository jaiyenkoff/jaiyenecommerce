import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@material-ui/core';

const style = makeStyles(theme => ({
    mainBox: {
        position: "relative",
        margin: "0 auto",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        width: "100%",
        height: "100%",
        maxWidth: "1450px",
        overflow: "scroll",
        background: theme.palette.background.default
    },
   paper:{
        margin: "1rem auto",
        borderBottom: "solid #dfcdb1 20px",
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
        background: theme.palette.background.default
    },
  }));

const Policies = () => {
    const classes = style();
    return (
        <div className={classes.mainBox}>
            <Grid container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
            maxWidth="auto"
            >
                <Paper className={classes.paper}>
                <Grid item xs={12}>
                <Typography component="div">
                <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#c8a978">
                        Our Policies
                </Box>
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography component="div">

                <Box fontSize="h3.fontSize" lineHeight={3} m={1} fontWeight="fontWeightBold" color="#c8a978">
                     Business Policy
                </Box>
                <Box fontSize={14} lineHeight={2} m={1} fontWeight={500}>
                Our product exchange and refund policy.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                1. We offer free product exchange or refund to the original payment method within 5 days of purchase. You don't need to return a product.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                2. Exchanged or refunded product means 
                    <Box fontSize={14} m={2}>
	                2.1 Product is in bad condition or damaged from manufacturing, packing and shipping processes.
                    </Box>
                    <Box fontSize={14} m={2}>
	                2.2 Incorrect received product from your order or store page.
                    </Box>
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                3. We reserve the right to not accept exchange and refund for following condition(s) 
                    <Box fontSize={14} m={2}>
	                3.1 Product is not match with your taste.
                    </Box>
                    <Box fontSize={14} m={2}>
	                3.2 Damage that cause by customer or after shipping process has been completed.
                    </Box>
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                4. For an additional information please contact directly to +6694-4561-957.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                5. To initiate an exchange or refund, please complete the following steps: 
                    <Box fontSize={14} m={2}>
	                5.1 Send an email to jaiyen.koff@gmail.com with attached files (Your order details page, Proof of payment and Proof of product condition you want to exchange/refund)
                    </Box>
                    <Box fontSize={14} m={2}>
	                5.2 We will take a consideration process within 2 days and continue exchange or refund process.
                    </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                We hereby regard and persist in the fundamental of consumer rights and determine to be transparent in every process. 
                <Box fontSize={14} lineHeight={2}>
                If there's any conflict or disagreement, We will put on our best effort to solve and compensate.
                </Box>
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                Jaiyen Koffee reserves the right to adjust / amend Terms of this exchange and refund policy Without prior notice.
                </Box>
                </Box>
                </Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography component="div">
                <Box fontSize="h3.fontSize" lineHeight={3} m={1} fontWeight="fontWeightBold" color="#c8a978">
                     Privacy Policy 
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                     Jaiyen Koffee (collectively, " Jaiyen Koffee ", "we", "us", and "our") respect your privacy. Please read the following to learn more about our Privacy Policy ("this Policy"). 
                This Policy applies to our website https://jaiyen-koffee.web.app, products, and services that display or provide links to this Policy.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1} fontWeight={500}>
                Collect and Use Your Personal Data
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                We may collect and use your following personal data:
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Your Name (First Name, Last Name)
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Email
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Address
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Phone Number
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Payment Information (e.g., Credit card number, Bank account number)
                </Box>
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                for the following purposes:
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Creating an account.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Complete product purchasing process on our website, including your personal information in ordering, delivering and payment process.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Contacting you with your consent; sending you information about products and services that may interest you; inviting you to participate in Our activities (including promotional activities), 
                market surveys, or satisfaction surveys; or sending you marketing information. If you do not want to receive these types of information, you can opt out at any time.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                •	Complying with and enforcing applicable legal requirements and our policies.
                </Box>
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                Your personal data will be secured, protected and will be only used within this website. 
                And we will retain your personal data for no longer than is necessary for the purposes stated in this Policy. 
                We will maintain your registration information as long as your account is necessary for service provision. You can choose to deregister your account. After you deregister your account, we will stop providing you with products and services through your account and delete your relevant personal data, provided that deletion is not otherwise stipulated by special legal requirements.
                </Box>
                <Box fontSize={14} lineHeight={2} m={1} fontWeight={500}>
                Control Your Personal Data
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                To the extent required by applicable law, you may (i) have the right to access certain personal data we maintain about you, 
                (ii) object or restrict to our use of your personal data, 
                and (iii) ask us to delete your personal data from our database. To exercise these rights please send email to jaiyen.koff@gmail.com
                </Box>
                <Box fontSize={14} lineHeight={2} m={1} fontWeight={500}>
                Contact Us
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                Tel: +6694-4561-957
                </Box>
                <Box fontSize={14} lineHeight={2} m={1}>
                Email: jaiyen.koff@gmail.com
                </Box>
                </Typography>
                </Grid>
            </Paper>
            </Grid>
        </div>
    )
}

export default Policies;