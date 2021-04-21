import { useHistory } from 'react-router-dom'
import React from 'react'
import { MarketNav } from "../components/MarketNav"
import Copyright from '../components/Copyright'
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";


export function Product(prop){

  return(
    <>
    <MarketNav/>
      <h3>
        {prop.post}
      </h3>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  )
}

export default Product;