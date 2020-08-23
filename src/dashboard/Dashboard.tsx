import React from 'react';
import {PageHeader} from "antd";
import {withStyleDeep} from "styletron-react";
import {Cards} from '../components/Cards';
import IncomeDashboardCard from "../income/IncomeDashboardCard";
import BillsDashboardCard from "../bills/BillsDashboardCard";
import SavingsDashboardCard from "../savings/SavingsDashboardCard";
import BudgetDashboardCard from "../budget/BudgetDashboardCard";

const DashboardCards = withStyleDeep(Cards, {
  justifyContent: 'center',
  alignItems: 'stretch',
})

function Dashboard() {
  return (
      <div>
        <PageHeader title={"Dashboard"} backIcon={false} />
        <DashboardCards>
          <IncomeDashboardCard/>
          <BillsDashboardCard/>
          <SavingsDashboardCard/>
          <BudgetDashboardCard/>
        </DashboardCards>
      </div>
  );
}

export default Dashboard;
