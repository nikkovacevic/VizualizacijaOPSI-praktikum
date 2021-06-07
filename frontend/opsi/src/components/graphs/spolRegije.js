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
import { PieChart, Pie, Sector } from 'recharts';





export default function Graf4(props) {
    //const classes = useStyles();

    
    
    const data5 = require("../data/migracije_regije.json");
    
    //console.log(data5[0].num);
    const results = new Array();
    //var results = [];
    for ( var key in data5){
        if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Delovni migranti [brez kmetov], ki delajo zunaj regije prebivališča" && data5[key]['STATISTIČNA REGIJA'] === props.regija && data5[key].LETO === props.leto){
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
            results[key] = data5[key];
            for(var key2 in data5){
                if(data5.hasOwnProperty(key2) && data5[key2]["STATISTIČNA REGIJA"] === results[key]["STATISTIČNA REGIJA"] && data5[key2].KAZALNIK === "Delovno aktivno prebivalstvo [brez kmetov], ki delajo v regiji prebivališča"){
                    
                    results[key].znotraj = data5[key2].num;
                    
                }
            }
            
            
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
       
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={filtered} dataKey="num" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={filtered} dataKey="znotraj" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
            
        </div>
      </React.Fragment>
    );
  }

  
