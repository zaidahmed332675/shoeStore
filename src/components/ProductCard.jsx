import React from 'react'
import {Box, Grid, Paper, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom';

import background from '../images/background2.png'

const useStyles = makeStyles((theme) => ({
    paper: {
        boxSizing:"border-box",
        textAlign: 'center',
        borderRadius:"10px",
        backgroundColor:"#315377",
    },
    innerPaper:{
        background:`url(${background}) no-repeat`,
        boxSizing:"border-box",
        color:"#2B435D",   
        padding:"20px 20px 0px 20px",
        margin:"0px",
        borderRadius:"10px 10px 30px 30px",
        backgroundColor:"#fff",
    },
    buttonStyle:{
        margin:"6% 0 6% 0",
        width:"60%",
        padding:"15px",
        borderRadius:"10px",
        border:"0px"
    },
    sizeColor:{
        justifyContent:"space-around",
    },
    link:{
        textDecoration:"none",
        color:"#333333",
        fontWeight:"600"
    },
    imageStyle:{
        width:"100%",
        transform:"translate(-10%,0%) rotate(-40deg)",
        zIndex:"-1000",
    },
    flexItem:{
        marginTop:"12%"
    },
    price:{
        marginTop:"10%"
    },
    nameStyle:{
        marginBottom:"15%",
        backgroundColor:"#315377",
        color:"#fff",
        borderRadius:"10px",
        padding:"10px"
    },
    scStyle:{
        width:"30%",
        height:"18px",
        borderRadius:"100%",
        border:'none',
        outline: "#4CAF50"
    }
  }));

export default function ProductCard({id,name,image,price,description,slug}){

    const classes = useStyles();

    return (
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={5} className={classes.paper}>
                    <Box className={classes.innerPaper}>
                        <h3 className={classes.nameStyle}>{name}</h3>
                        <img src={image} alt={image}  className={classes.imageStyle}/>
                        <Box className={classes.sizeColor} style={{display:"flex"}}>
                            <Box className={classes.flexItem}>
                                <span>Sizes</span>
                                <div style={{display:"flex",justifyContent:"space-around"}}>
                                    <button>7</button>
                                    <button>8</button>
                                    <button>9</button>
                                </div>
                            </Box>
                            <Box className={classes.flexItem}>
                                <span>Colors</span>
                                <div style={{display:"flex",justifyContent:"space-around"}}>
                                    <button className={classes.scStyle} style={{backgroundColor:"#A62B1F"}}></button>
                                    <button className={classes.scStyle} style={{backgroundColor:"#2E5624"}}></button>
                                    <button className={classes.scStyle} style={{backgroundColor:"#2A2C2C"}}></button>
                                </div>
                            </Box>
                        </Box>
                        <Box className={classes.price}>
                            <span >Price</span>
                            <span style={{display:"block",fontSize:"1.4rem",fontWeight:"600",paddingBottom:"10px"}}>$7,999</span> 
                        </Box>
                    </Box>
                    <button className={classes.buttonStyle}><Link className={classes.link} to={slug}>ADD TO CART</Link></button>
                </Paper>
            </Grid>
        )}