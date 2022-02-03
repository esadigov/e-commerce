import { createServer } from 'miragejs';
import { collections } from './const';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/collections', () => ({
      collections,
    }));
  },
});
