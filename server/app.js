//  importing dependencies
import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// creating express application
const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

// logging to the console
app.use(logger('dev'));

// Parsing form data (request body inputs)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default route handler
app.get('*', (request, response) => {
  response.status(404).send({
    message: 'Page not found!'
  });
});

// setting application port
app.set('port', port);

// Creating HTTP server and running the server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
