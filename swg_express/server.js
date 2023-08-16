const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger options
const options = {
  definition: {
    openapi: '3.0.9',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      '/books': {
        get: {
          summary: 'Get all books',
          operationId: 'getAllBooks',
          responses: {
            '200': {
              description: 'Successful operation',
            },
          },
        },
        post: {
          summary: 'Trigger action on /books endpoint',
          operationId: 'triggerAction',
          responses: {
            '200': {
              description: 'Action triggered successfully',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated ID of the book',
            },
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            genre: {
              type: 'string',
              description: 'The genre of the book',
            },
          },
          example: {
            id: '1',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            genre: 'Fiction',
          },
        },
      },
    },
  },
  apis: ['./app.js'], // Path to your API route file(s)
};

const specs = swaggerJsdoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/books', (req, res) => {
  const book = {
    id: 'd5fE_asz',
    title: 'The New Turing Omnibus',
    author: 'Alexander K. Dewdney',
  };
  res.json(book);
});

app.post('/books', (req, res) =>{
  const book = {
    id: 'd5fE_asz',
    title: 'The New Turing Omnibus',
    author: 'Alexander K. Dewdney',
  };
  res.json(book);
    }
);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});