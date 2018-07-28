import * as React from 'react';

import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
    public render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo">EXCHANGE</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
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