var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/myDB";
var fs = require("fs");

MongoClient.connect(url, function (err, db){
    /*if (err) throw err;
    console.log("Database created");
    db.close();
    db.collection("osebe", function (err, collection){
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });

    });*/
    
    if (err) throw err;
  var dbo = db.db("mydb");
  /*
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38', imena: [{prvo: "janez", drugo: "nejanez"}]},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  var obcine = [
    {občina: "Slovenija",
    2000: [{"Delovni migranti moški": 40, "delovni migranti ženske": 37.86}],
    2001: [{"Delovni migranti moški": 38.75, "delovni migranti ženske": 37.86}]
    }

  ];*/
/*console.log("ena")
  var file = fs.readFile("../../../data/json/migracije_regije.json", "utf8", function(err, data){
    console.log("dva");
    
    dbo.collection("regije").drop();
    dbo.collection("regije").insertOne(JSON.parse(data), function(err, docs){
      console.log("tri");
      if(err) throw err;
      console.log(docs.insertedCount);
      db.close();
    });
  });*/

  console.log("ena")
  var file = fs.readFile("test.json", "utf8", function(err, data){
    console.log("dva");
    
    dbo.collection("regijetest").drop();
    dbo.collection("regijetest").insertMany(JSON.parse(data), function(err, docs){
      console.log("tri");
      if(err) throw err;
      console.log(docs.insertedCount);
      db.close();
    });
  });
  
  /*dbo.collection("tri").insertMany(obcine, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    dbo.collection("tri").close();
  });


*/
}); 