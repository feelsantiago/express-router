import express from 'express';
import { urlencoded, json } from 'body-parser';
import { initRoutes } from './router';
import routes from './routes';

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

initRoutes(routes);

app.listen(3000, function() {
	console.log('Server listening on port 3000!');
});
