import React from 'react';
import {Button, Drawer} from "antd";
import IncomeEntryForm from "./IncomeEntryForm";
import {useIncomeData} from "./meta/IncomeDataContext";
import {IncomeData} from "./meta/model";


function IncomeDrawer(props) {
  const incomeData = useIncomeData()[0]
  const setIncomeData = useIncomeData()[1]

  function onClose() {
    const data: IncomeData = new IncomeData(incomeData.allIncomings())
    data.setDrawVisible(false)
    setIncomeData(data)
  }

  return (
      <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={incomeData.isDrawerVisible()}
          bodyStyle={{paddingBottom: 80}}
          footer={
            <div
                style={{
                  textAlign: 'right',
                }}
            >
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
