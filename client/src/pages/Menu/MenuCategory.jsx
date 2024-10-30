import React from 'react';
import MenuItemCard from '../Shared/MenuItemCard';

const MenuCategory = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-8">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
    );
};

export default MenuCategory;