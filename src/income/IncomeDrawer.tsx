import React from 'react';
import {Button, Drawer} from "antd";
import IncomeEntryForm from "./IncomeEntryForm";
import BaseCard from "../components/card/BaseCard";

function IncomeDrawer(props) {

    let context = props.context
    let state = context.state

    const onCancel = context.cancel
    const onSave = context.save

    const isVisible = () => {
        return state.mode === 'CREATE' || state.mode === 'EDIT'
    }



    return (
        <Drawer
            title="Create a new incoming"
            width={'45%'}
            onClose={onCancel}
            visible={isVisible()}
            closeIcon={false}
            bodyStyle={{paddingBottom: 80}}
            maskClosable={false}
            // footer={
            //     <div style={{textAlign: 'right',}}>
            //         <Button onClick={onCancel} style={{marginRight: 8}}>
            //             Cancel
            //         </Button>
            //         <Button onClick={onSave} type="primary">
            //             Save
            //         </Button>
            //     </div>
            // }
        >
            {/*<BaseCard hoverable={false}>*/}
                <IncomeEntryForm context={context}/>
            {/*</BaseCard>*/}
        </Drawer>
    );
}

export default IncomeDrawer;
