import React from 'react';
import { getCollections, IItem } from '../../core/services/directory-service/directory.service';
import { MenuCard } from '../MenuCard';

import './directory.scss';

export const Directory: React.FC = () => {
  const [collections, setCollections] = React.useState<IItem[]>([]);

  React.useEffect(() => {
    const fetchCollection = async () => {
      const fetchedCollections = await getCollections();

      if (fetchedCollections) { setCollections(fetchedCollections); }
    };

    fetchCollection();
  }, []);

  return (
    <div className="directory-menu">
      {collections.map(({
        size, title, imageUrl, id, link,
      }) => (
        <MenuCard key={id} size={size} title={title} imageUrl={imageUrl} link={link} />
      ))}
    </div>
  );
};
