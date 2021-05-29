import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';



const Home = () => {

 
    return (
    
    <Container>
        <Jumbotron>
        <h1>Dobrodošli na spletni strani z evidenco delovni migracij!</h1>
        <p>
            Tukaj pride nek text o nas
        </p>
        <p>
          <Button variant="info">Več o nas</Button>
        </p>
      </Jumbotron>
   




    </Container>


    
  );
};

export default Home;  