import React from 'react';
import BillsTable from "./meta/BillsTable";
import BaseCard from "../components/card/BaseCard";
import {BILLS_DESCRIPTION, BILLS_TITLE} from "./meta/bills-labels";
import BillsIcon from './meta/BillsIcon';
import {useBillData} from "./meta/BillDataContext";

function BillsDashboardCard() {
  const billData = useBillData()[0]
  return (
      <BaseCard title={BILLS_TITLE}
                description={BILLS_DESCRIPTION}
                icon={<BillsIcon/>}>
        <BillsTable dataSource={billData.allOutgoings()} showSummary={true}/>
      </BaseCard>
  );
}

export default BillsDashboardCard;
