import React, {useReducer} from 'react';
import {Button, Drawer} from "antd";
import IncomeEntryForm from "./IncomeEntryForm";
import {useIncomeData} from "./meta/IncomeDataContext";


function drawerReducer(state, action) {
  console.log("I have this action ", action)
  console.log("I have this state ", state)
  return action
}

function IncomeDrawer(props) {
  let initialState = true
  const [isVisible, showDrawer] = useReducer(drawerReducer, initialState)

  const incomeData = useIncomeData()[0]

  // const setIncomeData = useIncomeData()[1]

  function onClose() {
    // const data: IncomeData = new IncomeData(incomeData.allIncomings())
    // data.setDrawVisible(false)
    // setIncomeData(data)
    showDrawer(false)
  }

  return (
      <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={isVisible}
          bodyStyle={{paddingBottom: 80}}
          footer={
            <div style={{textAlign: 'right',}}>
              <Button onClick={onClose} style={{marginRight: 8}}>
                Cancel
              </Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </div>
          }
      >
        <IncomeEntryForm/>
      </Drawer>
  );
}

export default IncomeDrawer;
