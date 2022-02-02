// eslint-disable-next-line import/no-extraneous-dependencies
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
