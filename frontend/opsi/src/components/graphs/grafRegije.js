import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import Title from './Title';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function GrafRegije(props) {
    

    var kaz = "Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča";
    var reg = "Obalno-kraška";
    var leto = 2020;
    
    const data5 = require("../data/migracije_regije.json");
    console.log(data5[0].num);
    const results = new Array();
    //var results = [];
    for ( var key in data5){
        if(props.regija==""){
            return(
                <React.Fragment>

                </React.Fragment>
            );
        }
        else{
        if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Indeks delovne migracije" && data5[key]["STATISTIČNA REGIJA"] === props.regija){
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
            results[key] = data5[key];
        }
    }
    }
    var filtered = results.filter(function (el){
      return el != null;
    })
    console.log(results);
    var ime = filtered[1].KAZALNIK;



    return (
      <React.Fragment>     
        
        <h2>Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča po regijah leta {props.leto}</h2>
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
            <XAxis dataKey="LETO" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="num"  name={ime} fill="#8884d8" />
           
            
          </BarChart>
            
        </div>
      </React.Fragment>
    );
  }

  
