import React from 'react';
import { CollectionPreview } from '../../components/CollectionPreview';

import { SHOP_DATA, IShopData } from '../../data/shop-collections';

export const ShopPage = () => {
  const [shopData, setShopData] = React.useState<IShopData[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
