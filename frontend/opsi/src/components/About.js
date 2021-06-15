import React from 'react';
import Container from 'react-bootstrap/Container';


const About = () => {
    return (
    
    <Container>
    <div style={{ padding: 20 }}>
     

      <h2>Ideja</h2>
      <p>Pri nalogi smo uporabili odprte podatke Slovenije ter se osredotočili na njihovo  agregacijo in vizualizacijo.
      Omejiti smo se morali na področje mobilnosti (ljudi) - turizem, šolstvo, delo in podobno. Za našo nalogo smo se odločili za delovne migracije po vsej Sloveniji. 
      Zeleli smo prikazati podrobno sliko migracij ljudi, kako se te spreminjajo po občinah in regijah skozi leta.</p>
      <br></br>
      <h2>O projektu</h2>
      <p>Na podlagi podatkov o migracijah ljudi katere smo pridobili iz spletnega mesta <a href="https://podatki.gov.si/">OPSI</a> smo se odličili za vizualizacijo
      migracij s pomočjo interaktivnih zemljevidov ter dinamičnih grafov. 
      </p>
      <br/>
      <h3>Uporabljene tehnologije</h3>
      <p>
      <li>Front-end: React JS verzija:17.0.2
    <ul>
      <li>react-map-gl verzija:6.1.15</li>
      <li>mapbox-gl verzija:2.3.0</li>
      <li>recharts verzija:2.0.9</li>
    </ul>
  </li>
  <li>Upravljanje s podatki: Python</li>
  <br/>
  <h2>O nas</h2>
  <p>
  Smo študenti drugega letnika študijskega programa Informatika ter tehnologije komuniciranja na Fakulteti za elektrotehniko, računalništvo in informatiko Univerze v Mariboru. 

  -Nareji 3 kartice za vsakeka kaj je kdo delal ..
  -Timotej: Pune strokovnjak za grafe
  -Nik: React senior engineer
  -Aljaz: Podatkovni rudar
  -Luka: Svetovalec za odnose z javnostmi, bootstrap, css 

  </p>
    </p>
    </div>

    </Container>
  );
};

export default About;  