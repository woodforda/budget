import React from 'react';
import {RiseOutlined} from "@ant-design/icons";
import {allIncomings} from "./IncomeData";
import BaseCard from "../components/BaseCard";
import IncomeTable from "./IncomeTable";

function IncomeDashboardCard() {
  return (
      <BaseCard title="Income"
                description={"Upcoming credits to your account"}
                icon={<RiseOutlined/>}>
        <IncomeTable dataSource={allIncomings()} showSummary={true}/>
      </BaseCard>
  );
}

export default IncomeDashboardCard;
