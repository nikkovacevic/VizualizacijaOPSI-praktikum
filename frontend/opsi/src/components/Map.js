import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import './css/styles.css'
import Poskus from './poskus';

import nasData from './data/regije_zdruzen.json';


export default function MapRegije() {

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
            'https://raw.githubusercontent.com/KovacevicNik/OPSI-geojson-storage/main/regije_zdruzen.geojson'
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

            //console.log(clickInfo);

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



    return (
       
        <>
               
            <div>
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
                      
                            <div>{hoverInfo.feature.properties.SR_UIME}</div>
                        </div>
                    )}
                </ReactMapGL>
            </div>

            {clickInfo && (
                <div>{clickInfo.feature.properties.SR_UIME}</div>
            )}
          
            
            </>
              
    
    );
}
