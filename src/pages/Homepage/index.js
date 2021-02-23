import React from 'react';
import { Link } from 'react-router-dom';
import FreshBrew from './../../assets/jaiyen-glass.png';
import ToGo from './../../assets/directory-2.jpg';

import {
    Typography,
    Box,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar
} from '@material-ui/core';

import Icon from '@material-ui/core/Icon';

import Typical from 'react-typical';
import Directory from './../../components/Directory';

import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';


const style = makeStyles(theme => ({
runText: {
  height: "100%",
  maxHeight: "500px"
},
gridList: {
  margin: "0 auto",
  padding: "20px"
},
gridList2: {
  margin: "0 auto",
  padding: "0",
  width: "100%"
}
}));


const Homepage = props => {
  const classes = style();

    return (
     <div className="homepage">
     <div className="welcometxt">
     <Typography className={classes.runText} component="div">
     <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
     <Typical
        steps={['Welcome To Jaiyen Koffee', 1000]}
        loop={Infinity}
        wrapper="h2"
      />
        <Typical
        steps={['An affordable premium coffee we would like to offer.', 500, 
        'With 100% specially selected Arabica beans.' , 1000, 'Creates various option that matches with your taste and style.', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </Box>
      </Typography>
    </div>
    <div className="grid">
    <Grid container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            maxWidth="auto"
    >
    <Grid item xs={3} className="item-1">
    <Typography component="div">
    <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-home" style={{ fontSize: 100 }} />
    <h4>Home Brewed</h4>
    </Box>
    <Box fontSize={18} m={1} textAlign="center">
    <p>At Jaiyen Koffee. We determined to brew the best taste coffee. Glass by glass.</p>
    </Box>
    </Typography>
    </Grid>  

    <Grid item xs={3} className="item-1">
    <Typography component="div">
    <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-coffee" style={{ fontSize: 100 }} />
    <h4>Selected Blends</h4>
    </Box>
    <Box fontSize={18} m={1} textAlign="center">
    <p>Various Thai 100% Arabica origins were specially selected to be matching with your favourite menu.</p>
    </Box>
    </Typography>
    </Grid>       

    <Grid item xs={3} className="item-1">
    <Typography component="div">
    <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-leaf" style={{ fontSize: 100 }} />
    <h4>More than coffee</h4>
    </Box>
    <Box fontSize={18} m={1} textAlign="center">
    <p>We also created another options for you. If you wanna take a break from coffee, We have another menus for you.</p>
    </Box>
    </Typography>
    </Grid>      

    <Grid item xs={3} className="item-1">
    <Typography component="div">
    <Box fontSize="h2.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-paper-plane" style={{ fontSize: 100 }} />
    <h4>Direct to you</h4>
    </Box>
    <Box fontSize={18} m={1} textAlign="center">
    <p>Just order and stay home.</p>
    </Box>
    </Typography>
    </Grid>   
    </Grid>
    </div>

<div className="grid-mobile">
    <Grid container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            maxWidth="auto"
    >
<Grid item xs={12} className="item-1">
    <Typography component="div">
    <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-home" style={{ fontSize: 60 }} />
    <h4>Home Brewed</h4>
    </Box>
    <Box fontSize={14} m={1} textAlign="center">
    <p>At Jaiyen Koffee. We determined to brew the best taste coffee. Glass by glass.</p>
    </Box>
    </Typography>
    </Grid>  

    <Grid item xs={12} className="item-1">
    <Typography component="div">
    <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-coffee" style={{ fontSize: 60 }} />
    <h4>Selected Blends</h4>
    </Box>
    <Box fontSize={14} m={1} textAlign="center">
    <p>Various Thai 100% Arabica origins were specially selected to be matching with your favourite menu.</p>
    </Box>
    </Typography>
    </Grid>       

    <Grid item xs={12} className="item-1">
    <Typography component="div">
    <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-leaf" style={{ fontSize: 60 }} />
    <h4>More than coffee</h4>
    </Box>
    <Box fontSize={14} m={1} textAlign="center">
    <p>We also created another options for you. If you wanna take a break from coffee, We have another menus for you.</p>
    </Box>
    </Typography>
    </Grid>      

    <Grid item xs={12} className="item-1">
    <Typography component="div">
    <Box fontSize="h4.fontSize" m={1} fontWeight="fontWeightBold" textAlign="center" color="#DFCDB1">
    <Icon class="fas fa-paper-plane" style={{ fontSize: 60 }} />
    <h4>Direct to you</h4>
    </Box>
    <Box fontSize={14} m={1} textAlign="center">
    <p>Just order and stay home.</p>
    </Box>
    </Typography>
    </Grid>   
    </Grid>
 </div>

 <div className="grid2">
 <Grid container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            maxWidth="auto"
    >
<Grid item xs={12} className="item-1">
<Typography component="div">
    <Box fontSize={48} m={1} mt={1} mb={3} fontWeight="fontWeightBold" textAlign="center" color="white">
    What we brew?
    </Box>   
    </Typography>
</Grid>

<Grid item xs={6} className="item-1">
<Typography component="div">
<Box fontSize={24} m={1} fontWeight="fontWeightBold" textAlign="center" color="white">
Fresh Brew
</Box>
<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Iced Americano 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Iced Caffè Latte
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
65 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Iced Dark Cocoa
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Iced Thai Milk Tea
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
60 ฿
</Box>
</GridListTile>
</GridList>

</Typography>
</Grid>

<Grid item xs={6} className="item-1">
<Typography component="div">
<Box fontSize={24} m={1} fontWeight="fontWeightBold" textAlign="center" color="white">
To-go
</Box>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Cold Brew Coffee
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
80 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Cold Brew Coffee With Milk
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
85 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Cold Brew Coffee With Almond Milk
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
90 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Dark Cocoa
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
Thai Milk Tea
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={18} m={1} mt={1}  textAlign="center" color="white" letterSpacing={10}>
60 ฿
</Box>
</GridListTile>
</GridList>

</Typography>
</Grid>



</Grid>
 </div>

 <div className="grid2-mobile">
 <Grid container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            maxWidth="auto"
    >
<Grid item xs={12} className="item-1">
<Typography component="div">
    <Box fontSize={32} m={1} mt={3} mb={3} fontWeight="fontWeightBold" textAlign="center" color="white">
    What we brew?
    </Box>   
    </Typography>
</Grid>

<Grid item xs={12} className="item-1">
<Typography component="div">
<Box fontSize={21} m={1} fontWeight="fontWeightBold" textAlign="center" color="white">
Fresh Brew
</Box>
<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Iced Americano 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Iced Caffè Latte
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
65 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Iced Dark Cocoa
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Iced Thai Milk Tea
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
60 ฿
</Box>
</GridListTile>
</GridList>

</Typography>
</Grid>

<Grid item xs={12} className="item-1">
<Typography component="div">
<Box fontSize={21} m={1} fontWeight="fontWeightBold" textAlign="center" color="white">
To-go
</Box>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Cold Brew Coffee
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
80 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Cold Brew Coffee With Milk
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
85 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Cold Brew Coffee With Almond Milk
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
90 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Dark Cocoa
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
60 ฿
</Box>
</GridListTile>
</GridList>

<GridList cellHeight='auto' className={classes.gridList} cols={3}>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
Thai Milk Tea
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
....... 
</Box>
</GridListTile>
<GridListTile>
<Box fontSize={14} m={1} mt={1}  textAlign="center" color="white" letterSpacing={1}>
60 ฿
</Box>
</GridListTile>
</GridList>

</Typography>
</Grid>


</Grid>
 </div>
 <div className="directory-l">

<Directory />


 </div>
 </div>
    );
};

export default Homepage