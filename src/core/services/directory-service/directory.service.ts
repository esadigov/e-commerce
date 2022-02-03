import { HTTP } from '../../../http-client/index';

export interface IItem{
  id: number;
  title: string;
  imageUrl: string;
  size?: 'large';
  link?: string;
}

export const getCollections = async (): Promise<IItem[]> => {
  const res = await HTTP.client().get('/collections');

  const { data: { collections } } = res;

  return collections;
};
