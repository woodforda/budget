import React from "react";
import {Menu} from "antd";
import {TITLE} from "./budget-labels";
import BudgetIcon from "./BudgetIcon";

function BudgetMenuItem(props) {
  return (
      <Menu.Item {...props} icon={<BudgetIcon/>}>{TITLE}</Menu.Item>
  )
}

export default BudgetMenuItem
