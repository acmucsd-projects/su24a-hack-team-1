import { Menu } from 'antd';
import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoNotifications } from "react-icons/io5";
import { PiChatTextFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Layout } from 'antd';
import "./menulist.css"


const MenuList = () => {
  return (
    
    <Menu theme ="dark" mode = "inline" className= "menu-bar">
      <Menu.Item key = " home " icon= { <TiHome size={35} style={{ fill: '#D3C2F8' }} /> }> Home 
      </Menu.Item>
      <Menu.Item key = " messages " icon= { <IoNotifications size={35} style={{ fill: '#D3C2F8' }} /> }> Notifications </Menu.Item>
      <Menu.Item key = " profile " icon= { <CgProfile size={35} style={{ color: '#D3C2F8' }} /> }> Profile </Menu.Item>

    </Menu>
    

  );
};

export default MenuList;