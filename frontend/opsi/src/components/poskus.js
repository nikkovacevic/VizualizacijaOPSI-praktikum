import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import './css/styles.css'

import x from './data/r_kopija.json'
import y from './data/aa.json'
import z from './data/regije_zdruzen.json'
import { Card } from '@material-ui/core';

//<   >


function Poskus() {

    let gg = '2002'
    const listItems = x.map((x) =>
    <li>{x.type}</li>
    );
    return x.map(x =>
        <div>
          <h3>{x.properties.OB_UIME}</h3>
          <ul>
            {x.podatki_obcine.filter(x => x.LETO==='2001').map(x => 
              <li>LETO:{x.LETO} || NUM:{x.num} || KAZALNIK:{x.KAZALNIK}</li>
            )}
          </ul>
        </div>
      );
  }


export default Poskus;