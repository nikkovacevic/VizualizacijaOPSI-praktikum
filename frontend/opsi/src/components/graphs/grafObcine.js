import React from 'react';


import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';



export default function GrafObcine(props) {


  const data5 = require("../data/migracije_obcine.json");
  //console.log(data5[0].num);
  const results = [];
  //var results = [];
  for (var key in data5) {
    if (props.regija === "") {
      return (
        <React.Fragment>

        </React.Fragment>
      );
    }
    else {
      if (data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Indeks delovne migracije" && data5[key].OBČINE === props.obcina) {
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
        results[key] = data5[key];
      }
    }
  }
  var filtered = results.filter(function (el) {
    return el != null;
  })
  //console.log(results);
  

  for (var i = 0; i < results.length; i++) {
    var obj = results[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
        obj[prop] = +obj[prop];
      }
    }
  }



  return (
    <React.Fragment>

      <h3>{props.obcina}</h3>

      <div>

        <LineChart
          layout="vertical"
          width={300}
          height={555}
          data={filtered}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}

        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis domain={("dataMin", "dataMax")} type="number" />
          <YAxis dataKey="LETO" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="num" name={"Indeks"} stroke="#5A7362" />


        </LineChart>

      </div>
      <p>Indeks predstavlja delež prebivalstva, ki dela v občini, kjer živi</p>
    </React.Fragment>
  );
}


