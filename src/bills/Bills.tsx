import React from 'react';
import Page from "../components/Page";
import BillsRecurringCard from "./BillsRecurringCard";
import {Cards} from '../components/card/Cards';
import BillsCard from "./BillsCard";
import {BILLS_TITLE} from "./meta/bills-labels";
import {BillDataProvider} from "./meta/BillDataContext";

function Bills() {
  return (
      <Page title={BILLS_TITLE}>
        <BillDataProvider>
          <Cards>
            <BillsRecurringCard/>
            <BillsCard/>
          </Cards>
        </BillDataProvider>
      </Page>
  );
}

export default Bills;
