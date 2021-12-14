import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function () {
  return (
    <div>
      <Layout style={{height: 500, width: 500}}>
        <Header className="x">header</Header>
        <Content className="y">content</Content>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
}