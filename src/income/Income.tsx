import React from 'react';
import IncomeDashboardCard from "./IncomeDashboardCard";
import Page from "../components/Page";

function Income() {
  return (
      <Page title={"Income"}>
        <IncomeDashboardCard/>
      </Page>
  );
}

export default Income;
