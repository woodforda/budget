import React from 'react';
import {Button, Card, Space, PageHeader, Menu} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {styled} from "styletron-react";
import {Typography} from 'antd';

const {Title} = Typography;

const Text = styled("p", {color: "red"});

const Cards = styled("div", {
  "display": "flex",
  "flex-flow": "row wrap",
  "font-size": "calc(10px + 2vmin)",
  "max-height": "calc(100vh - 100vh)",
});

function DashboardCard(props: any) {
  return (<Card hoverable
                title={props.title}
                style={{
                  minWidth: '500px'
                }}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>,
                ]}>
    {props.children}
  </Card>)
}

function Dashboard() {
  return (
      <div>
        <PageHeader
            backIcon={false}
            title={<Title level={3}>Dashboard</Title>}
        />

        <Cards>
          <Space size={"small"} align={"baseline"}>
            <DashboardCard title="Upcoming Bills">
              Poodle was a winner
            </DashboardCard>

            <DashboardCard title="Savings">
              My home on the plains
            </DashboardCard>

            <DashboardCard title="Pay Rent">
              <Text>Overdue</Text>
            </DashboardCard>
          </Space>
        </Cards>
      </div>
  );
}

export default Dashboard;
