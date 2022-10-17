import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => { //we wanna grab this list(menuList) and wanna map through each element.and then for each element we wanna grab the menuItem and wanna grab its key(its index)
              return(
                <MenuItem //and for each item we want to return a new div. menuItem will represent each pizza individually from MenuList
                  key={key} //put this otherwise react gives some weired bugs
                  image={menuItem.image}
                  name = {menuItem.name}
                  price = {menuItem.price}
                />
              );
            })}
        </div>
    </div>
  )
}

export default Menu