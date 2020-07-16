import React, { useContext } from 'react';
import {Box, Grid, makeStyles, Typography} from '@material-ui/core'

import ProductCard from './ProductCard'

import {GlobalData} from '../context/ContextApi'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

let Products = () => { 

    let {data} = useContext(GlobalData);

    const classes = useStyles();

    return ( 
        <Box id="featuredParent" className={classes.root} p={5}>
            <Box mt={5}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h1 align="center">ALL PRODUCTS</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Typography>        
                        <Typography variant="subtitle1" align="center">Protect yourself and others around you by knowing the facts and taking appropriate precautions</Typography>        
                        <br/>
                        <Typography variant="h6" align="center">Follow advice provided by your local health authority.</Typography>        
                    </Grid>
                </Grid>
            </Box>
            <Box mt={5}>
                <Grid container spacing={4}>
                        {data.map((value,index) => (
                            <ProductCard key={index} id={value.id} name={value.shoeName} image={value.image} price={value.price} description={value.description} slug={value.slug} />
                        ))}
                </Grid>
            </Box>
      </Box>
      )}

  export default Products;