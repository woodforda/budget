import React, {useState} from 'react';
import {Menu} from 'antd';
import {useHistory} from "react-router-dom";
import BillsMenuItem from '../bills/meta/BillsMenuItem';
import BudgetMenuItem from "../budget/meta/BudgetMenuItem";
import DashboardMenuItem from "../dashboard/meta/DashboardMenuItem";
import IncomeMenuItem from "../income/meta/IncomeMenuItem";
import SavingsMenuItem from "../savings/meta/SavingsMenuItem";

function MenuBar() {
  const history = useHistory();
  const [selected, setSelected] = useState(history.location.pathname)

  function selectMenu(key: string) {
    history.push(key)
    setSelected(key)
  }

  return (
      <Menu mode="horizontal"
            theme={"dark"}
            onSelect={(selectInfo) => selectMenu(selectInfo.key as string)}
            defaultSelectedKeys={["/"]}
            selectedKeys={[selected]}>
        <DashboardMenuItem key={"/"}/>
        <IncomeMenuItem key={"/income"}/>
        <BillsMenuItem key="/bills"/>
        <SavingsMenuItem key={"/savings"}/>
        <BudgetMenuItem key={"/budget"}/>
      </Menu>
  );
}

export default MenuBar;
