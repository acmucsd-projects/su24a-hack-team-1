import { useState } from 'react';
import { Layout } from 'antd';
import MenuList from '../../components/Mlist';

const{Header, Sider} = Layout;
function Profbar() {
  return (
    <Layout>
      <Sider className="sbar">
        
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
export default Profbar;