import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './home';
import About from './about';
import Basic from './basic/Basic';

import ViewControl from './components/viewControl';

import './App.css';
import WithViewControl from './basic/WithViewControl';
import WithToolbar from './basic/WithToolbar';
import Toolbar from './components/toolbar';

const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const App = () => (
  <Layout className="app-main">
    <Sider width={256} collapsible>
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="basic">
            <Link to="/basic">Basic</Link>
          </Menu.Item>
          <Menu.Item key="withViewControl">
            <Link to="/withViewControl">WithViewControl</Link>
          </Menu.Item>
          <Menu.Item key="withToolbar">
            <Link to="/withToolbar">WithToolbar</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Components</span>
            </span>
          }
        >
          <Menu.Item key="viewControl">
            <Link to="/components/viewControl">View Control</Link>
            <Link to="/components/toolbar">Toolbar</Link>
          </Menu.Item>

          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Content className="content-main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/basic" component={Basic} />
        <Route exact path="/withViewControl" component={WithViewControl} />
        <Route exact path="/withToolbar" component={WithToolbar} />
        <Route exact path="/components/viewControl" component={ViewControl} />
        <Route exact path="/components/toolbar" component={Toolbar} />
        <Route path="/about" component={About} />
      </Switch>
    </Content>
  </Layout>
);

export default App;
