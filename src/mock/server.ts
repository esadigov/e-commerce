import { createServer, Model, Response } from 'miragejs';
import { collections } from './const';

createServer({
  models: {
    user: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/collections', () => ({ collections }));

    this.get('/users', (schema) => schema.all('user'));

    this.post('/register', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      schema.create('user', attrs);

      return new Response(201);
    });
  },
  seeds(server) {
    server.create('user', {
      displayName: 'eska',
      email: 'eska01@gmail.com',
      password: 'asjdhsasdkjalskdjalkdjaljdadskaljdalkjd',
    } as object);
  },
});
