import { useState } from 'react';
import { Layout } from 'antd';
import MenuList from '../../components/Menulist';

const{Header, Sider} = Layout;
function Navbar() {
  return (
    <Layout>
      <Sider className="sidebar">
        
      <div id="nav">
                <a href="#"><span class="text-white">Project</span><span class="text-purple">Up</span></a>
            </div>
        <MenuList/>
      </Sider>
    </Layout>
  );
}
export default Navbar;