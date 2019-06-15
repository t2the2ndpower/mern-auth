module.exports = {
  mongoURI: "mongodb+srv://technoladie_db:M6JS0QjaS57x5w8o@ids3g0-usoyv.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: "secret"
  // mongo "mongodb+srv://ids3g0-usoyv.mongodb.net/test" --username technoladie_db
  // or
  // mongodb+srv://technoladie_db:M6JS0QjaS57x5w8o@ids3g0-usoyv.mongodb.net/test?retryWrites=true&w=majority
  //  the api key 48cd31d1-b992-43af-bda4-5a603488d291


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://technoladie_db:<password>@ids3g0-usoyv.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

};
