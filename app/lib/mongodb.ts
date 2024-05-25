import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI||"";

const options: MongoClientOptions = { };
let client = new MongoClient(uri, options);

let clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;
