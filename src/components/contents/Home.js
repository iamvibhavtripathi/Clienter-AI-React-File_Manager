import React from 'react'
import Navbar from '../Navbar'
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import homeLogo from "../../assets/images/homelogo.png";
import Footer from "../Footer";


function Home() {
  return (
    <>
    <div>
            <Navbar/>
    </div>
    <div >
      <Container className="mx-auto h-full">
        <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ marginTop: '200px' }}>
          {/* Left div with centered text */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h3" component="h2" className="text-7xl font-medium italic mx-4">
               <p>Hi, There! {" "} 
               <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>

               </p>
                Welcome to File Management system
              </Typography>
            </Box>
          </Grid>

          {/* Right div with a centered image */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={homeLogo}
                alt="image"
                style={{ width: '70%', height: '100%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* DESIGNED FOOTER*/}
      <Footer/>
    </div>

    </>
  )
}

export default Home
