import React from 'react'
import {Box, Grid, makeStyles, Typography} from '@material-ui/core'

import service1 from '../images/featuredProducts/service1.png'
import service2 from '../images/featuredProducts/service2.png'
import service3 from '../images/featuredProducts/service3.png'
import service4 from '../images/featuredProducts/service4.png'

import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

let FeaturedProducts = () => {

    const classes = useStyles();

    return (
            <Box id="featuredParent" className={classes.root} p={5}>
                <Box mt={5}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <h1 align="center">Featured Products</h1>
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
                        <ProductCard name="Nike SB Zoom Blazer Mid" img={service1}/>
                        <ProductCard name="Nike Air Max 2090" img={service2}/>
                        <ProductCard name="Nike Air Force 1 '07 LV8" img={service3}/>
                        <ProductCard name="Nike Stride Wild Run" img={service4}/>
                    </Grid>
                </Box>
            </Box>
    )
}

export default FeaturedProducts;