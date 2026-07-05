
// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = "mongodb+srv://coderArmy531:Vishnu@531@coddingadda.xv89mva.mongodb.net/"
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'CoderArmy';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());



const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/"
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  // const findResult = await collection.find({}).toArray();
  // const findResult = await collection.find({});
  // const findResult = collection.find({});
  // const findResult = collection.find({});

  // for await(const doc of findResult)
  //   console.log(doc)
  // const ans = findResult.toArray();
  // console.log('Found documents =>', findResult);
  // console.log('Found documents =>', ans);

  const insertResult = await collection.insertOne({name:"vishnu",age:40})
console.log('Inserted documents =>', insertResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());