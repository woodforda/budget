import React from 'react';
import IncomeDashboardCard from "./IncomeDashboardCard";
import Page from "../components/Page";
import {TITLE} from "./meta/income-labels";

function Income() {
  return (
      <Page title={TITLE}>
        <IncomeDashboardCard/>
      </Page>
  );
}

export default Income;
