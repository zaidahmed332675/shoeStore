import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import { Grid, Box,makeStyles } from '@material-ui/core';
import {GlobalData} from '../context/ContextApi'
import background from '../images/background2.png'

let useStyles = makeStyles((theme) => (
  {
    buttonStyle:{
      display:"inline-block",
      margin:"6% 0 6% 0",
      width:"40%",
      padding:"15px",
      borderRadius:"10px",
      border:"0px"

    },
    link:{
      textDecoration:"none",
      color:"#333333",
      fontWeight:"600"
    },
  }
))

let ProductDetail = () => {

    const classes = useStyles();

    let {shoes,featuredShoes} = useContext(GlobalData)
    
    let {shoe:shoeSlug} = useParams();

    let finalData = shoes.filter(val => val.slug === shoeSlug);
    if(finalData.length == 0)
      finalData = featuredShoes.filter(val => val.slug === shoeSlug);

    return ( 
      <Box my={10} px={14} align="center">
        <Grid container>

          <Grid item xs={12} sm={6} md={6}>
            <Box style={{height:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <Box style={{background:"#0c739b",width:"80%",height:"200px",backgroundImage:`url(${background})`}}>
                  <img src={finalData[0].image} alt={finalData[0].image} style={{width:"120%",transform:"rotate(-28deg) translateX(-20%) translateY(-20%)"}} />
                </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box px={5} py={2} align="left" style={{background:"wheat"}}>

              <span style={{fontSize:"24px",fontWeight:"600",letterSpacing:"2px"}}>{finalData[0].shoeName}</span><br />
              <span>{"Men's Runnung Shoes"}</span>
              
              <hr />
              
              <span>PRODUCT INFO</span><br />
              <span>{finalData[0].description}</span>
              
              <hr />
              
              <span>COLOR</span>
              <br />
              <button style={{backgroundColor:"#A62B1F"}}></button>
              <button style={{backgroundColor:"#2E5624"}}></button>
              <button style={{backgroundColor:"#2A2C2C"}}></button>

              <hr />

              <span>SIZE</span>
              <br />
              <button style={{backgroundColor:"#A62B1F"}}></button>
              <button style={{backgroundColor:"#2E5624"}}></button>
              <button style={{backgroundColor:"#2A2C2C"}}></button>

              <hr />

              <Box stlye={{display:"flex",justifyContent:"space-around"}}>
                <button className={classes.buttonStyle}><Link className={classes.link} to={finalData[0].slug}>ADD TO CART</Link></button>
                {/* <p>$7,999</p>  */}
              </Box>
              
            </Box>
          </Grid>

        </Grid>
      </Box>
    )}
  
export default ProductDetail;