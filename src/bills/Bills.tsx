import React from 'react';
import Page from "../components/Page";
import BillsRecurringCard from "./BillsRecurringCard";
import {Cards} from '../components/Cards';
import BillsCard from "./BillsCard";
import {BILLS_TITLE} from "./meta/bills-labels";

function Bills() {
  return (
      <Page title={BILLS_TITLE}>
        <Cards>
          <BillsRecurringCard/>
          <BillsCard/>
        </Cards>
      </Page>
  );
}

export default Bills;
