import React from 'react';
import {FallOutlined} from "@ant-design/icons";
import {allOutgoings} from "./BillsData";
import BillsTable from "./BillsTable";
import BaseCard from "../components/BaseCard";

function BillsDashboardCard() {
  return (
      <BaseCard title="Bills"
                description={"Upcoming bills to be paid"}
                icon={<FallOutlined/>}
      >
        <BillsTable dataSource={allOutgoings()} showSummary={true}/>
      </BaseCard>
  );
}

export default BillsDashboardCard;
