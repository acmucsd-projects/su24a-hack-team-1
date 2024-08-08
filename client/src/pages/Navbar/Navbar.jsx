import { useState } from 'react';
import { Layout } from 'antd';
import MenuList from '../../components/Menulist';

const{Header, Sider} = Layout;
function Navbar() {
  return (
    <Layout>
      <Sider className="sidebar">
        
      <div id="main">

          <div id="nav">
            <a href="#">Project<span className="text-purple">Up</span></a>
          </div>
          </div>
        <MenuList/>
      </Sider>
    </Layout>
  );
}
export default Navbar;