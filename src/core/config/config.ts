const dev = {
  api: '',
};
const local = {
  api: '',
};
const mocked = {
  api: 'api',
};

export const getApi = () => {
  switch (process.env.REACT_APP_NODE_ENV) {
    case 'dev':
      return dev;
    case 'local':
      return local;
    default:
      return mocked;
  }
};
