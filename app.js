const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('yamljs').load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require('./auth'));

app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Listening on port 3000'));
