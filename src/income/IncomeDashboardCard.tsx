import React from 'react';
import {allIncomings} from "./meta/income-data";
import BaseCard from "../components/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import IncomeIcon from "./meta/IncomeIcon";
import {DESCRIPTION, TITLE} from "./meta/income-labels";

function IncomeDashboardCard() {
  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<IncomeIcon/>}>
        <IncomeTable dataSource={allIncomings()} showSummary={true}/>
      </BaseCard>
  );
}

export default IncomeDashboardCard;
