import React from 'react';
import './App.css';
import Dashboard from '../dashboard/Dashboard';
import {styled} from 'styletron-react';
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Bills from "../bills/Bills";
import Income from "../income/Income";
import Savings from "../savings/Savings";
import Budget from "../budget/Budget";
import {DashboardOutlined, DollarOutlined, FallOutlined, PieChartOutlined, RiseOutlined} from '@ant-design/icons';

const {Header, Content} = Layout;

const StyledLayout = styled(Layout, {
  'margin': '10px',
  'height': '100vh',
  'background-color': 'inherit',
});

const StyledHeader = styled(Header, {
  "background-color": "#0a541b",
  "display": "flex",
  "flex-flow": "row wrap",
  "font-size": "calc(10px + 2vmin)",
  "color": "white",
  "margin-bottom": "5px",
  "padding-left": "10px",
  "height": "calc(inherit + 3vmin)",
  "border-radius": '15px'
});

const StyledContent = styled(Content, {
  "background-color": "inherit",
});

function App() {
  return (
      <StyledLayout>
        <StyledHeader>My Budget</StyledHeader>
        <StyledContent>
          <Router>
            <div>
              <Menu mode="horizontal" style={{borderRadius: '15px', backgroundColor: '#0a541b', color: 'white'}}>
                <Menu.Item key="dashboard" icon={<DashboardOutlined/>}>
                  <a style={{color: 'white'}} href="/">Dashboard</a>
                </Menu.Item>
                <Menu.Item key="income" icon={<RiseOutlined/>}>
                  <a style={{color: 'white'}} href="/income">Income</a>
                </Menu.Item>
                <Menu.Item key="bills" icon={<FallOutlined/>}>
                  <a style={{color: 'white'}} href="/bills">Bills</a>
                </Menu.Item>
                <Menu.Item key="savings" icon={<DollarOutlined/>}>
                  <a style={{color: 'white'}} href="/savings">Savings</a>
                </Menu.Item>
                <Menu.Item key="budget" icon={<PieChartOutlined/>}>
                  <a style={{color: 'white'}} href="/budget">Budget</a>
                </Menu.Item>
              </Menu>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/bills">
                  <Bills/>
                </Route>
                <Route path="/income">
                  <Income/>
                </Route>
                <Route path="/savings">
                  <Savings/>
                </Route>
                <Route path="/budget">
                  <Budget/>
                </Route>
                <Route path="/">
                  <Dashboard/>
                </Route>
              </Switch>
            </div>
          </Router>
        </StyledContent>
      </StyledLayout>
  );
}

export default App;
