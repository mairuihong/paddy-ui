import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import Intro from './lib/intro'
import DialogDemo from './lib/dialog/dialog.demo';
import ButtonDemo from './lib/button/button.demo';
import LayoutDemo from './lib/layout/layout.demo';
import IconDemo from './lib/icon/icon.demo';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';
import {Icon} from './lib';

const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className={'site-page'}>
      <Header className={'site-header'}>
        <div className="logo">
          <img src={logo} alt="Paddy-UI"/>
          <span>paddy-UI</span>
        </div>
        <div className="link-wrapper">
          <a href="https://github.com/katawaredokiha/paddy-ui.git">
            <Icon name="github"/>Github
          </a>
          <a href="https://gitee.com/mairuihong/paddy-ui.git">
            <Icon name="gitee"/>Gitee
          </a>
        </div>
      </Header>
      <Layout>
        <Aside className={"site-aside"}>
          <h2>Paddy-UI</h2>
          <ul>
            <li>
              <NavLink to="/intro">介绍</NavLink>
            </li>
          </ul>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className={"site-main"}>
          <div className="main-wrapper">
            <Route path='/' exact render={()=> (
              <Redirect to='/intro'/>
            )}/>
            <Route path="/intro" component={Intro}/>
            <Route path="/icon" component={IconDemo}/>
            <Route path="/button" component={ButtonDemo}/>
            <Route path="/dialog" component={DialogDemo}/>
            <Route path="/layout" component={LayoutDemo}/>
          </div>
        </Content>
      </Layout>
      <Footer className="site-footer">
        <div className="link-wrapper">
          <a href="https://github.com/katawaredokiha/paddy-ui.git">
            <Icon name="github"/>Github
          </a>
          <a href="https://gitee.com/mairuihong/paddy-ui.git">
            <Icon name="gitee"/>Gitee
          </a>
        </div>
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));