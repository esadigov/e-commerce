import { HTTP } from '../../http-client/index';

export interface IItem{
  id: number;
  title: string;
  imageUrl: string;
  size?: 'large';
  link?: string;
}

export interface IUser {
  displayName: string;
  email: string;
  password: string;
}

export const getCollections = async (): Promise<IItem[]> => {
  const res = await HTTP.client().get('/collections');

  const { data: { collections } } = res;

  return collections;
};

export const getUsers = async () => {
  const res = await HTTP.client().get('/users');

  return res.data;
};

export const register = async (user: IUser) => {
  const res = await HTTP.client().post('/register', user);

  return res;
};
