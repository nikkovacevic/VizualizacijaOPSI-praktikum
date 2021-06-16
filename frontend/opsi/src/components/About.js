import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import './css/styles.css';
import Card from 'react-bootstrap/Card'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {
  return (

    <Container>
      <div style={{ padding: 20 }}>


        <h2>Ideja</h2>
        <p>Pri nalogi smo uporabili odprte podatke Slovenije ter se osredotočili na njihovo  agregacijo in vizualizacijo.
          Omejiti smo se morali na področje mobilnosti (ljudi) - turizem, šolstvo, delo in podobno. Za našo nalogo smo se odločili za delovne migracije po vsej Sloveniji.
          Želeli smo prikazati podrobno sliko migracij ljudi, kako se te spreminjajo po občinah in regijah skozi leta.</p>
        <br></br>
        <h2>O projektu</h2>
        <p>Na podlagi podatkov o migracijah ljudi katere smo pridobili iz spletnega mesta <a href="https://podatki.gov.si/">OPSI</a> smo se odličili za vizualizacijo
          migracij s pomočjo interaktivnih zemljevidov ter dinamičnih grafov.
        </p>
        <br />
        <h3>Uporabljene tehnologije</h3>
        <div>
          <li>Front-end: React JS verzija:17.0.2  <Image src={require('../img/react-logo.svg').default} rounded className="photo-react" />
            <ul>
              <li>react-map-gl verzija:6.1.15</li>
              <li>mapbox-gl verzija:2.3.0</li>
              <li>recharts verzija:2.0.9</li>
            </ul>
          </li>
          <li>Upravljanje s podatki: Python <Image src={require('../img/phytone-logo.png').default} rounded className="photo-react" /> </li>
          <br />
          <h2>O nas</h2>
          <p>
            Smo študenti drugega letnika študijskega programa Informatika ter tehnologije komuniciranja na Fakulteti za elektrotehniko, računalništvo in informatiko Univerze v Mariboru.



          </p>
        </div>
        <Card>
          <Card.Header>  
           <Row> 
             <Col lg={0.5}>
            <Avatar  alt="Nik Kovačević" src={require('../img/nik-pfp.jpg').default} className="avatarcek" /> 

            </Col>
            <Col>
            <p className="p-cards">Nik Kovačević</p>
            </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Header>
          <Row> 
             <Col lg={0.5}>
            <Avatar  alt="Timotej Vošinek" src={require('../img/timi-pfp.jpg').default} className="avatarcek" /> 

            </Col>
            <Col>
            <p className="p-cards">Timotej Vošinek</p>
            </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Header>
          <Row> 
             <Col lg={0.5}>
            <Avatar  alt="Aljaž Neuberg" src={require('../img/aljaz-pfp.png').default} className="avatarcek" /> 

            </Col>
            <Col>
            <p className="p-cards">Aljaž Neuberg</p>
            </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Header>
          <Row> 
             <Col lg={0.5}>
            <Avatar  alt="Luka Ogrizek" src={require('../img/luka-pfp.jpg').default} className="avatarcek" /> 

            </Col>
            <Col>
            <p className="p-cards">Luka Ogrizek</p>
            </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>




      </div>

    </Container>
  );
};

export default About;