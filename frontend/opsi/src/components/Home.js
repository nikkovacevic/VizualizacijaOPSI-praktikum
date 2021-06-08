import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
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
              <Card.Title>Zemljevidi migracij</Card.Title>
              <Card.Text>
                Preglejte statistiko delovnih migracij s pomočjo interaktivnega zemljevida. Možnost je izbiranja med karto z statističnimi regijami in karto občin v Sloveniji.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" href="/regije">
                Na stran z zemljevidi
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../img/stats.png').default} alt='img2' />
            <Card.Body>
              <Card.Title>Statistika migracij v Sloveniji</Card.Title>
              <Card.Text>
                Preglejte statistiko delovnih migracij v Sloveniji. Na strani so prikazani splošni podatki.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="secondary" size="sm" href="/statistika">
                Na stran o statistiki
    </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require('../img/opsilogo.png').default} alt='img3' className="opsi-photo"/>
            <Card.Body>
              <Card.Title>Odprti podatki Slovenije</Card.Title>
              <Card.Text>
                Podatki na naši strani so bili črpani s strani OPSI. Preglejt stran:
      </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="secondary" size="sm" href="https://podatki.gov.si/" target="_blank">
                Na spletno mesto OPSI
            </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>





    </Container>



  );
};

export default Home;