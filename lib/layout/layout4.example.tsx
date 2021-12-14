import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <div>
      <Layout style={{height: 500, width: 500}}>
        <Aside className="z">aside</Aside>
        <Layout>
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}