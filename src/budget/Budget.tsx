import React from 'react';
import {PageHeader, Typography} from "antd";
import BillsDashboardCard from '../dashboard/BillsDashboardCard';

const {Title} = Typography;

function Bills() {
  return (
      <div>
        <PageHeader
            title={"Bills"}
            onBack={() => null}
        />
        <BillsDashboardCard/>
      </div>
  );
}

export default Bills;
