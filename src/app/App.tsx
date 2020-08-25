import React from 'react';
import './App.less';
import Dashboard from '../dashboard/Dashboard';
import {Layout} from 'antd';
import {Switch} from "react-router";
import Bills from "../bills/Bills";
import Income from "../income/Income";
import Savings from "../savings/Savings";
import Budget from "../budget/Budget";
import MenuBar from "./MenuBar";
import {BrowserRouter as Router, Route} from "react-router-dom";

const {Header, Content} = Layout;

function App() {
  return (
      <Layout>
        <Header>My Budget</Header>
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
