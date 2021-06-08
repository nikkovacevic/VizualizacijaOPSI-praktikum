import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Paper from '@material-ui/core/Paper';

import './css/styles.css'
import GrafIndeks from './graphs/grafObcine.js'
import GrafDelez from './graphs/delezObcine.js'
import GrafSpol from './graphs/SpolObcine.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }

}));

export default function MapObcine() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [viewport, setViewport] = useState({
        latitude: 46.1199444,
        longitude: 14.815333333333333,
        width: '100%',
        height: '70vh',
        zoom: 6.8,
        minZoom: 6.8
    });

    const [allData, setAllData] = useState(null);

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/obcinemini.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const data = useMemo(() => {
        return allData;
    }, [allData]);

    const layerStyle = {
        id: 'data',
        type: 'fill',
    };

    const [color, setColor] = useState('#ffffff')

    const [hoverInfo, setHoverInfo] = useState(null);
    const [clickInfo, setClickInfo] = useState(null);

    const onClick = useCallback(event => {

        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const clickedFeature = features && features[0];

        setClickInfo(
            clickedFeature
                ? {
                    feature: clickedFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );

        console.log(clickInfo);

    }, []);

    const onHover = useCallback(event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }

        } = event;

        const hoveredFeature = features && features[0];

        setHoverInfo(
            hoveredFeature
                ? {
                    feature: hoveredFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );
    }, []);

    const [show, setShow] = useState(true);


    return (

        <div>


            <main>





                <div>
                    <Container maxWidth="lg" className={classes.container}>

                        <Row>
                            <Alert show={show} variant="primary">
                                <Alert.Heading>Kratka navodila!</Alert.Heading>
                                <p>
                                    Pred vami je interkativni zemljevid. Če si želiti ogledat podrobneje statistiko za posamezno regijo samo pritisnite na njo in
                                    se vam bo prikazalo.
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => setShow(false)} variant="outline-primary">
                                        Zapri me!
                                    </Button>
                                </div>
                            </Alert>

                            {!show && <Button onClick={() => setShow(true)} variant="secondary">Prikaži opozorilo</Button>}
                        </Row>

                        <Row>
                            <h2>Zemljevid z obcinami</h2>
                        </Row>
                        <Row>
                            <Col sm={12} lg={8}>
                                <Paper className={classes.paper}>

                                    <ReactMapGL
                                        {...viewport}
                                        mapboxApiAccessToken={"pk.eyJ1Ijoibmlra292YWNldmljIiwiYSI6ImNrcDlwajBjaDBnbmEycmxsMDU5bHZtZWIifQ.7jC2o5D5GqDT7NCqCCkufQ"}
                                        mapStyle={"mapbox://styles/nikkovacevic/ckp9xo2vn1j0g17o7s9eealzm"}
                                        onViewportChange={viewport => {
                                            setViewport(viewport);
                                        }}
                                        interactiveLayerIds={['data']}
                                        onHover={onHover}
                                        onClick={onClick}
                                    >

                                        <Source id="sourcelayer" type="geojson" data={data}>
                                            <Layer {...layerStyle} paint={{ 'fill-color': color, 'fill-opacity': 0.3, 'fill-outline-color': "#45634d" }} />
                                        </Source>
                                        {hoverInfo && (
                                            <div className="tooltip123123" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
                                                <div>{hoverInfo.feature.properties.OB_UIME}</div>
                                            </div>
                                        )}
                                    </ReactMapGL>

                                </Paper>
                            </Col>

                            <Col sm={12} lg={4}>
                                <Paper className={classes.paper}>
                                    {clickInfo && (
                                        <>




                                            <GrafIndeks obcina={clickInfo.feature.properties.OB_UIME}></GrafIndeks>



                                        </>
                                    )}
                                </Paper>
                            </Col>

                        </Row>
                        <Row>


                            <Col sm={12} lg={6}>
                                <div className="div-gori">
                                    <Paper className={classes.paper}>
                                        {clickInfo && (
                                            <>

                                                <GrafSpol obcina={clickInfo.feature.properties.OB_UIME}></GrafSpol>


                                            </>
                                        )}
                                    </Paper>
                                </div>
                            </Col>
                            <Col sm={12} lg={6}>
                                <div className="div-gori">
                                    <Paper className={classes.paper}>
                                        {clickInfo && (
                                            <>


                                                <GrafDelez obcina={clickInfo.feature.properties.OB_UIME}></GrafDelez>


                                            </>
                                        )}
                                    </Paper>
                                </div>
                            </Col>

                        </Row>



                    </Container>
                </div>

            </main>

        </div>

    );
}
