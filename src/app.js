import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import routes from './routes'
import EnvironmentVariables from './modules/dotenv'

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*/*.js'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options);

let application;

const App = function () {
  if (!application) {
    // setting up the env variables
    EnvironmentVariables().init()

    application = express()

    // disabling the flag for security purposes
    application.disable('x-powered-by')

    // middlewares
    application.use(helmet())
    application.use(express.json())
    application.use(cors())
	application.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

    // initialize the routes
    routes(application)
  }

  return application
}

export default App()
