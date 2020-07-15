import React from 'react'
import {Box, Grid, Paper, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        height:"600px",
        textAlign: 'center',
        borderRadius:"10px",
        backgroundColor:"#2B435D",
    },
    innerPaper:{
        color:"#2B435D",   
        height:"500px",
        padding:"20px 20px 0px 20px",
        margin:"0px",
        borderRadius:"10px 10px 30px 30px",
        backgroundColor:"#fff",
    },
    buttonStyle:{
        marginTop:"6%",
        width:"60%",
        padding:"15px",
        borderRadius:"10px",
        border:"0px"
    },
    sizeColor:{
        justifyContent:"space-around",
        padding:"0px",
        marginTop:"30px",
    },
    link:{
        textDecoration:"none",
        color:"#333333"
    }

  }));

export default function ProductCard({name,img,price}){

    const classes = useStyles();

    return (
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={5} className={classes.paper}>
                    <Box className={classes.innerPaper}>
                        <h3>Nike SB Zoom Blazer Mid</h3>
                        <img src={img} alt={img}/>
                        <Box className={classes.sizeColor} style={{display:"flex"}}>
                            <Box>
                                <span>Sizes</span>
                                <div>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                </div>
                            </Box>
                            <Box>
                                <span>Colors</span>
                                <div>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                    <button className={classes.buttonStyle}><Link className={classes.link} to={name}>ADD TO CART</Link></button>
                </Paper>
            </Grid>
        )}