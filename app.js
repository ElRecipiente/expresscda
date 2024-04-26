import express from 'express';
import appointmentRouter from './routes/appointment-routes.js';
import configRouter from './routes/config-routes.js';
import infoRouter from './routes/info-routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yaml';
import fs from 'fs';

// Express config
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const version = process.env.VERSION || "v1";
const uri = process.env.CONNECT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Connect to db
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        console.log("Test connexion : ", process.env.CONNECT);
    }
}
run().catch(console.dir);
console.log(new Date);

// Swagger config
const file = fs.readFileSync('./swagger.yml', 'utf8')
const swaggerDocument = YAML.parse(file)

// Config CORS
app.use(cors());

// Middleware for API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware for API routes
app.use(`/api/${version}/appointment`, appointmentRouter);
app.use(`/api/${version}/config`, configRouter);
app.use(`/api/${version}/info`, infoRouter)

app.listen(port, () => {
    console.log(`CORS enabled, listening on port ${port}`)
});

