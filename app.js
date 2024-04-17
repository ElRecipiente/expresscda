import express from 'express';
import router from './routes/appointment-routes.js';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yaml';
import fs from 'fs';

// Express config
const user = configDotenv().parsed.TB_DB_USER;
const password = configDotenv().parsed.TB_DB_PASSWORD;
const app = express();
const port = 3333;
const version = "v1";
const uri = `mongodb+srv://${user}:${password}@truckbusters.wivntqs.mongodb.net/?retryWrites=true&w=majority&appName=Truckbusters`;

// Swagger config
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

// Middleware for API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware for API routes
app.use(`/api/${version}/appointment`, router);

// 
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Test listening on port ${port}`)
});

