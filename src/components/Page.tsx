import React from 'react';
import {PageHeader} from "antd";
import SavingsDashboardCard from './SavingsDashboardCard';

function Savings() {
  return (
      <>
        <PageHeader title={"Savings"} onBack={() => window.history.back()}/>
        <SavingsDashboardCard/>
      </>
  );
}

export default Savings;
