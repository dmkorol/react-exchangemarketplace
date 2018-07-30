import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Button, Row, Col } from 'antd';
import { HomePage } from './pages/home.page';
import { ListPage } from './pages/list.page';
import { CategoriesPage } from './pages/categories.page';
import { ContactPage } from './pages/contacts.page';
import { NewItemPage } from './pages/new-item.page';
import { NotFound404Page } from './pages/not-found-404.page';
import { ItemPage } from './pages/item.page';

const { Header, Content, Footer } = Layout;

const MENU = [
    { url: '/list', title: 'ALL LISTINGS' },
    { url: '/categories', title: 'CATEGORIES' },
    { url: '/contacts', title: 'CONTACTS' },
];

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
                                    {MENU.map((item, key) =>
                                        <Menu.Item key={key}>
                                            <Link to={item.url}>{item.title}</Link>
                                        </Menu.Item>
                                    )}
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
                            <Route path="/list/:id" component={ItemPage}/>
                            <Route exact={true} path="/categories" component={CategoriesPage}/>
                            <Route exact={true} path="/contacts" component={ContactPage}/>
                            <Route path='/404' component={NotFound404Page} />
                            <Redirect from='*' to='/404' />
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