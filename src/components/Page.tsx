import React from 'react';
import {PageHeader} from "antd";

function Page(props) {
  return (
      <>
        <PageHeader title={props.title} onBack={() => window.history.back()}/>
        {props.children}
      </>
  );
}

export default Page;
