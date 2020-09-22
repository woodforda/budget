import React from 'react';
import {withStyleDeep} from "styletron-react";
import {Cards} from '../components/card/Cards';
import IncomeDashboardCard from "../income/IncomeDashboardCard";
import BillsDashboardCard from "../bills/BillsDashboardCard";
import SavingsDashboardCard from "../savings/SavingsDashboardCard";
import BudgetDashboardCard from "../budget/BudgetDashboardCard";
import {TITLE} from "./meta/dashboard-labels";
import Page from "../components/Page";
import {BillDataProvider} from "../bills/meta/BillDataContext";
import {SavingsDataProvider} from "../savings/meta/SavingsDataContext";
import {BudgetDataProvider} from "../budget/meta/BudgetDataContext";
import DashboardIcon from "./meta/DashboardIcon";

const DashboardCards = withStyleDeep(Cards, {
  justifyContent: 'center',
  alignItems: 'stretch',
  flexFlow: "row wrap",
})

function Dashboard() {
  return (
      <Page title={TITLE} icon={<DashboardIcon/>}>
        <DashboardCards>
          <IncomeDashboardCard/>
          <BillDataProvider><BillsDashboardCard/></BillDataProvider>
          <SavingsDataProvider><SavingsDashboardCard/></SavingsDataProvider>
          <BudgetDataProvider><BudgetDashboardCard/></BudgetDataProvider>
        </DashboardCards>
      </Page>
  );
}

export default Dashboard;
