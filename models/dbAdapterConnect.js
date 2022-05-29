const {MongoClient} = require("mongodb")

const uri = "mongodb+srv://yosi:rozenberg@cluster0.drdek.mongodb.net/test";

const client = new MongoClient(uri);

async function findMongoDoc(name) {
    
    //connect

    await client.connect();
    console.log("connected successfuly!");
    //check
    await client.db("admin").command({ping : 1})
    //find one
    const myResult = await client
    .db("saknai")
    .collection("people")
    .findOne({name : `${name}` })
    //close
    await client.close()
}

exports.findColor = findMongoDoc;