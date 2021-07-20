import React, { useEffect, useState } from 'react'
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';

import memories from './images/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'

import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

function App() {
  
  const classes = useStyles()

  const dispatch = useDispatch()

  const [currentId,setCurrentId] = useState(null)

  useEffect(()=>{
      dispatch(getPosts)
  }, [  currentId , dispatch])

  return (
  <Container maxWidth='lg'>

    <AppBar className={classes.appBar} position='static' color='inherit' >
      <Typography variant='h2' align='center' className={classes.heading}>HCL Memories </Typography>
      <img src={memories} alt="icon" height='60' className={classes.image} />
    </AppBar>

      <Grow in>

        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3} className={classes.mainContainer}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
          </Grid>
        </Container>
   

      </Grow>

  </Container>
  );
}

export default App;
