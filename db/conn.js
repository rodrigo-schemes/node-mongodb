const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://root:example@localhost:27017/nodemongodb?authSource=admin";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

run();

module.exports = client;