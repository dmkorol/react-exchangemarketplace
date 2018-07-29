import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Button, Row, Col } from 'antd';
import { HomePage } from './pages/home';
import { ListPage } from './pages/list';
import { CategoriesPage } from './pages/categories';
import { ContactPage } from './pages/contacts';
import { NewItemPage } from './pages/new-item';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
    public render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header className="header">
                        <Row justify='space-between'>
                            <Col span={4}>
                                <Link to="/" className="logo">EXCHANGE</Link>
                            </Col>
                            <Col span={16}>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['0']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">
                                        <Link to="/list">ALL LISTINGS</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/categories">CATEGORIES</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="/contacts">CONTACTS</Link>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={4} className="add-button-wrapper">
                                <Link to="/list/new">
                                    <Button className="add-button" icon="plus" size={'large'}>
                                        ADD NEW
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Header>
                    <Content className="main-container">
                        <Switch>
                            <Route exact={true} path="/" component={HomePage}/>
                            <Route exact={true} path="/list" component={ListPage}/>
                            <Route exact={true} path="/list/new" component={NewItemPage}/>
                            <Route path="/list/:id" component={ListPage}/>
                            <Route exact={true} path="/categories" component={CategoriesPage}/>
                            <Route exact={true} path="/contacts" component={ContactPage}/>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <p> ©2018 Created by <a href="https://github.com/dmkorol">dkorol</a>. This is an educational
                            non-commercial project don't use any part of it in production.</p>
                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;