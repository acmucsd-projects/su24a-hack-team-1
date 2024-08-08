import { Menu } from 'antd';
import React from 'react'
import "./mlist.css"


const MenuList = () => {
  return (
    
    <Menu theme ="dark" mode = "inline" className= "menu-bar">
      <Menu.Item key = " name " > 1. Name
      </Menu.Item>
      <Menu.Item key = " resume "> 2. Resume Upload </Menu.Item>
      <Menu.Item key = " website "> 3. Website </Menu.Item>
      <Menu.Item key = " bio "> 4. Bio/Interests </Menu.Item>
      <Menu.Item key = " skills "> 5. Skills </Menu.Item>

    </Menu>
    

  );
};

export default MenuList;