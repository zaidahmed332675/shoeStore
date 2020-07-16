import React from 'react';
import {Box} from '@material-ui/core';

import banner from '../images/banner.png'

let Banner = () => {
    return (
        <Box className="imageBanner">
            <img src={banner} alt="banner"style={{backgroundSize:"cover",width:"100%"}} />
        </Box>
    )
}

export default Banner;