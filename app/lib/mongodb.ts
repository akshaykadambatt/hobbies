import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI||"";

const options: MongoClientOptions = {
    maxPoolSize: 10,
    minPoolSize: 2,
    maxIdleTimeMS: 60000,
    waitQueueTimeoutMS: 60000,
};

let client = new MongoClient(uri, options);

let clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;
