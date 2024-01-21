import React from 'react'
import { Container, Grid } from '@material-ui/core';

import Navbar from "../Navbar";
import UploadFiles from '../../components/files/UpoadFiles';
import ShowFiles from '../../components/files/ShowFiles';

function DashBoard() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
          <UploadFiles parentId='' />
          {/* <ShowFiles parentId='' /> */}

        </Grid>
        <Grid item xs={12}>
          <UploadFiles parentId='' />
        </Grid>
        <Grid item xs={12}>
          <ShowFiles parentId='' />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DashBoard
