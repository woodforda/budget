import React from 'react';
import {allOutgoings} from "./meta/bills-data";
import BillsTable from "./meta/BillsTable";
import BaseCard from "../components/BaseCard";
import {BILLS_DESCRIPTION, BILLS_TITLE} from "./meta/bills-labels";
import BillsIcon from './meta/BillsIcon';

function BillsDashboardCard() {
  return (
      <BaseCard title={BILLS_TITLE}
                description={BILLS_DESCRIPTION}
                icon={<BillsIcon/>}>
        <BillsTable dataSource={allOutgoings()} showSummary={true}/>
      </BaseCard>
  );
}

export default BillsDashboardCard;
