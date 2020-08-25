import React from "react";
import {Menu} from "antd";
import {BILLS_TITLE} from "./bills-labels";
import BillsIcon from "./BillsIcon";

function BillsMenuItem(props) {
  return (
      <Menu.Item {...props} icon={<BillsIcon/>}>{BILLS_TITLE}</Menu.Item>
  )
}

export default BillsMenuItem
