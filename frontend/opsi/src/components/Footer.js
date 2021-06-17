//react
import React from 'react';

//styling
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './css/styles.css';

function Footer() {
  return (
    <div className="div-footer">

      <Box pt={2} pb={2} bgcolor="#d6d6d6">
        <Container fluid>
          <Row >
            <Col> 
            <div className="div-text">
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                  Vizualizacija OPSI
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
              </div>
            </Col>
          </Row>


          <Row>
            <Col>
             <a href="https://feri.um.si/" > <Image src={require('../img/logo-uni.png').default} rounded className="photo-feri" /></a>
             <a href="https://feri.um.si/" > <Image src={require('../img/logo-feri.png').default} rounded className="photo-feri" /></a>
            </Col>
          </Row>

        </Container>
      </Box>

    </div>
  );
}

export default Footer;