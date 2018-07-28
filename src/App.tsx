import * as React from 'react';

import { Breadcrumb, Layout, Menu, Button, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
    public render() {
        return (
            <Layout className="layout">
                <Header>
                    <Row justify='space-between'>
                      <Col span={4}>
                          <a href='/' className="logo">EXCHANGE</a>
                      </Col>
                      <Col span={16}>
                          <Menu
                              theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={['1']}
                              style={{ lineHeight: '64px' }}
                          >
                              <Menu.Item key="1">ALL LISTINGS</Menu.Item>
                              <Menu.Item key="2">CATEGORIES</Menu.Item>
                              <Menu.Item key="3">CONTACTS</Menu.Item>
                          </Menu>
                      </Col>
                        <Col span={4} className="add-button-wrapper">
                            <Button className="add-button" icon="plus" size={'large'}>ADD NEW</Button>
                        </Col>
                    </Row>


                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><a href="javascript:void(0);">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="javascript:void(0);">List</a></Breadcrumb.Item>
                        <Breadcrumb.Item>Item</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <p> ©2018 Created by <a href="https://github.com/dmkorol">dkorol</a>. This is an educational non-commercial project don't use any part of it in production.</p>
                </Footer>
            </Layout>
        );
    }
}

export default App;