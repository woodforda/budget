import React from "react";
import {Menu} from "antd";
import DashboardIcon from "./DashboardIcon";
import {TITLE} from "./dashboard-labels";

function DashboardMenuItem(props) {
  return (
      <Menu.Item {...props} icon={<DashboardIcon/>}>{TITLE}</Menu.Item>
  )
}

export default DashboardMenuItem
