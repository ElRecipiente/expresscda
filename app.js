import express from 'express';
import router from './routes/appointment-routes.js';
const app = express();
const port = 3001;
const version = "v1";

app.use(`/api/${version}/appointment`, router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})