import React from 'react';
import './App.less';
import Dashboard from '../dashboard/Dashboard';
import {Avatar, Button, Card, Layout, PageHeader, Popover} from 'antd';
import {Switch} from "react-router";
import Bills from "../bills/Bills";
import Income from "../income/Income";
import Savings from "../savings/Savings";
import Budget from "../budget/Budget";
import MenuBar from "./MenuBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {QuestionCircleOutlined, SettingOutlined, TagsOutlined} from "@ant-design/icons";

const {Header, Content} = Layout;


const {Meta} = Card

function content() {
    return (
        <Card bordered={false} style={{maxWidth: '500px'}}>
            <Meta title={"About"}
                  avatar={<Avatar icon={<TagsOutlined/>}/>}/>
            <div style={{marginTop: '20px'}}>
                Author: Andrew Woodford<br/>
                Version: 1.0.0-beta
            </div>
        </Card>
    );
}


function App() {
    return (
        <Layout>
            <Header>
                <PageHeader title={"My Budget"}
                            backIcon={false}
                            onBack={undefined}
                            className={"app-page-header-heading-title"}
                            extra={[
                                <Button type={"primary"}
                                        icon={<SettingOutlined/>}
                                        size={"middle"}
                                        shape={"round"}/>,

                                <Popover trigger="click" content={content} placement={"left"}>
                                    <Button type={"primary"}
                                            icon={<QuestionCircleOutlined/>}
                                            size={"middle"}
                                            shape={"round"}/>
                                </Popover>
                            ]}
                />
            </Header>
            <Content>
                <div>
                    <Router>
                        <MenuBar/>
                        <Switch>
                            <Route path="/bills" component={Bills}/>
                            <Route path="/income" component={Income}/>
                            <Route path="/savings" component={Savings}/>
                            <Route path="/budget" component={Budget}/>
                            <Route path="/" exact component={Dashboard}/>
                        </Switch>
                    </Router>
                </div>
            </Content>
        </Layout>
    );
}

export default App;
