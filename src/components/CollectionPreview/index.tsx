import React from 'react';
import { IItem } from '../../data/shop-collections';
import { CollectionItem } from '../CollectionItem';

import './collection-preview.scss';

export interface ICollectionPreview{
  title: string;
  items: IItem[];
}

export const CollectionPreview: React.FC<ICollectionPreview> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
