import React from 'react';

import './collection-item.scss';

export interface ICollectionItem{
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem: React.FC<ICollectionItem> = ({
  name, price, imageUrl,
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`${price}azn`}</span>
    </div>
  </div>
);
