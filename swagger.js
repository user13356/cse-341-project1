const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']

};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//Generates swagger.json

swaggerAutogen(outputFile, endpointsFiles, doc);