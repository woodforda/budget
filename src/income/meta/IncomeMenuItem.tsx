import React from "react";
import {Menu} from "antd";
import {TITLE} from "./income-labels";
import IncomeIcon from "./IncomeIcon";

function IncomeMenuItem(props) {
  return (
      <Menu.Item {...props} icon={<IncomeIcon/>}>{TITLE}</Menu.Item>
  )
}

export default IncomeMenuItem
