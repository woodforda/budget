import React from 'react';
import Page from "../components/Page";
import BillsRecurringCard from "./BillsRecurringCard";
import {Cards} from '../components/Cards';
import BillsCard from "./BillsCard";

function Bills() {
  return (
      <Page title={"Bills"}>
        <Cards>
          <BillsRecurringCard/>
          <BillsCard/>
        </Cards>
      </Page>
  );
}

export default Bills;
