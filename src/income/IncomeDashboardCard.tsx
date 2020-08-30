import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import IncomeIcon from "./meta/IncomeIcon";
import {DESCRIPTION, TITLE} from "./meta/income-labels";
import {useIncomeData} from "./meta/IncomeDataContext";

function IncomeDashboardCard() {
  const incomeData = useIncomeData()[0]
  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<IncomeIcon/>}>
        <IncomeTable dataSource={incomeData.allIncomings()} showSummary={true}/>
      </BaseCard>
  );
}

export default IncomeDashboardCard;
