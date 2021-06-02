import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import bgimage from '../img/trans5.jpg'
import './css/styles.css'





const Home = () => {
/*style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}*/

  return (

    <Container >
     <div>
      <Jumbotron className="graid" >
        
        <h2 style={{color: "black"}}>Dobrodošli na spletni strani z evidenco delovnih migracij!</h2>
        <p style={{color: "black"}}>
          Stran je namenjena vizualizaciji podatkov o delovnih migracijah med leti 2000 in 2020. 
        </p>
        <p>
           
          <Button variant="info" href="/oprojektu" >O projektu</Button>
        </p>
        
      </Jumbotron>
      </div>
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={require('../img/map.svg').default} alt='img1' />
            <Card.Body>
              <Card.Title>Karte migracij</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" href="/regije">
                Na karte
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../img/stats.png').default} alt='img2' />
            <Card.Body>
              <Card.Title>Statistika migracij</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="secondary" size="sm" href="/statistika">
                Na statistiko
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>





    </Container>



  );
};

export default Home;