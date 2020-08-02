import React from 'react';
import {PageHeader} from "antd";
import {styled} from "styletron-react";
import IncomeDashboardCard from "../income/IncomeDashboardCard";
import BillsDashboardCard from "../bills/BillsDashboardCard";
import SavingsDashboardCard from "../savings/SavingsDashboardCard";
import BudgetDashboardCard from "../budget/BudgetDashboardCard";

const Cards = styled("div", {
  "display": "flex",
  "flex-flow": "row wrap",
  "font-size": "calc(10px + 2vmin)",
  "justify-content": "center",
});

function Dashboard() {
  return (
      <div>
        <PageHeader backIcon={false} title={"Dashboard"}/>
        <Cards>
          <IncomeDashboardCard/>
          <BillsDashboardCard/>
          <SavingsDashboardCard/>
          <BudgetDashboardCard/>
        </Cards>
      </div>
  );
}

export default Dashboard;
