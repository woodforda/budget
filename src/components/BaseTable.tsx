import React from 'react';
import {Table} from "antd";

function BaseTable(props) {
  return (
      <Table dataSource={props.dataSource}
             columns={props.columns}
             summary={props.summary}
             bordered={false}
             pagination={false}
             size={"small"}
      />
  );
}

export default BaseTable
