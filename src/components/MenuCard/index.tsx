import React from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

import './menu-card.scss';

export interface IMenuCard {
    title: string,
    size?: string,
    imageUrl: string
    link?: string;
}

export const MenuCard: React.FC<IMenuCard> = ({
  size, imageUrl, title, link,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(link || '/')}
      onKeyDown={() => navigate(link || '/')}
      role="menuitem"
      tabIndex={0}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
