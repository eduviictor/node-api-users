const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Heloo');
});
routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.insert);
routes.delete('/users/:id', UserController.remove);
routes.put('/users/:id', UserController.update);

module.exports = routes;