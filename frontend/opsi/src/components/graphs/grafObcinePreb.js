import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default function Graf5(props) {
    //const classes = useStyles();

    var kaz = "Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča";
    var reg = "Obalno-kraška";
    var leto = 2020;
    
    const data5 = require("../data/migracije_obcine.json");
    const data6 = require("../data/delovno_aktivno_leto.json");
    //console.log(data5[0].num);
    const results = new Array();
    //var results = [];
    for ( var key in data5){
        if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === props.kaz && data5[key].LETO === props.leto && data5[key].OBČINE !== "SLOVENIJA"){
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
            results[key] = data5[key];
            for(var key2 in data6){
                if(data6.hasOwnProperty(key2) && data6[key2].OBČINE === results[key].OBČINE && data6[key2].MESEC === (data5[key].LETO + "M12") && data6[key2].SPOL === "Spol - SKUPAJ"){
                    results[key].prebivalci = Math.round((data6[key2].num * results[key].num)/100);
                }
            }
            
        }
    }
    var filtered = results.filter(function (el){
      return el != null;
    })
    console.log(results);
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
            <XAxis dataKey="OBČINE" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="prebivalci"  name={ime} fill="#8884d8" />
           
            
          </BarChart>
            
        </div>
      </React.Fragment>
    );
  }

  
