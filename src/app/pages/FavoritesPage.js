import React, { } from 'react';


import  FavoriteItem  from './componentsPages/FavoriteItem';

const FavoritesPage = () => {

  return (
    <div className="favoritesPage">
      <section className="">
        <div className="container">
            <FavoriteItem />
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;