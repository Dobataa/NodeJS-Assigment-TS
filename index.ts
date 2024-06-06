import express, { Express } from "express";
import expressConfig from './src/config/express';
import routes from './routes';

const app: Express = express();

expressConfig(app);

app.use(routes);

app.listen(5000, () => console.log('Server is running on port 5000...'));