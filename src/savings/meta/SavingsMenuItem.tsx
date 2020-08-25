import React from "react";
import {Menu} from "antd";
import {TITLE} from "./savings-labels";
import SavingsIcon from "./SavingsIcon";

function SavingsMenuItem(props) {
  return (
      <Menu.Item {...props} icon={<SavingsIcon/>}>{TITLE}</Menu.Item>
  )
}

export default SavingsMenuItem
