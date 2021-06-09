import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




export default function GrafRegijeStat(props) {
    //const classes = useStyles();
    
    const data5 = require("../data/migracije_regije.json");
    
    //console.log(data5[0].num);
    const results = [];
    //var results = [];
    for ( var key in data5){
        if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === props.kaz && data5[key].LETO === props.leto){
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
            results[key] = data5[key];
            
            
        }
    }
    var filtered = results.filter(function (el){
      return el != null;
    })
    //console.log(results);
    //console.log(filtered[1].num);
    //console.log(filtered[1].num*2);
    var ime = props.kaz;



    return (
      <React.Fragment>     
        
        
        <div>
       
          <BarChart
            width={1000}
            height={300}
            data={filtered}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
           
          > 
  
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="STATISTIČNA REGIJA" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="num"  name={ime} fill="#b36710" />
           
            
          </BarChart>
            
        </div>
      </React.Fragment>
    );
  }

  
