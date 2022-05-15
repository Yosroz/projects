var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saknai");
  var myobj = { name: "test", address: "ashdod" };
  dbo.collection("people").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saknai");
  dbo.collection("people").findOne({name:"test"}, function(err, result) {
    if (err) throw err;
    console.log(result.address);
    db.close();
  });
});

