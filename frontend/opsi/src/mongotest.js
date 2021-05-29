var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/myDB";
var fs = require("fs");

MongoClient.connect(url, function (err, db){
  
    
    if (err) throw err;
  var dbo = db.db("mydb");
 
console.log("ena")

/*
  var file = fs.readFile("../../../data/json/migracije_regije.json", "utf8", function(err, data){
    console.log("dva");
    
    dbo.collection("regije").drop();
    dbo.collection("regije").insertMany(JSON.parse(data), function(err, docs){
      console.log("tri");
      if(err) throw err;
      console.log(docs.insertedCount);
      db.close();
      
    });
  });



  var file2 = fs.readFile("../../../data/json/migracije_obcine.json", "utf8", function(err, data2){
    console.log("dva2");
    
    dbo.collection("obcine").drop();
    dbo.collection("obcine").insertMany(JSON.parse(data2), function(err, docs2){
      console.log("tri2");
      if(err) throw err;
      console.log(docs2.insertedCount);
      db.close();
      
    });
  });
  
*/
  var file3 = fs.readFile("../../../data/json/delovno_aktivno.json", "utf8", function(err, data3){
    console.log("dva3");
    
    dbo.collection("prebivalci").drop();
    dbo.collection("prebivalci").insertMany(JSON.parse(data3), function(err, docs3){
      console.log("tri3");
      if(err) throw err;
      console.log(docs3.insertedCount);
      db.close();
      
    });
  });

 
}); 