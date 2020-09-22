import React from 'react';
import {Form, Input, InputNumber, DatePicker, Space, Button} from "antd";


const layout = {
    // labelCol: {span: 4},
    // wrapperCol: {span: 8},
    layout: "vertical" as "vertical"
};
const tailLayout = {
    wrapperCol: {offset: 16},
};


function IncomeEntryForm(props) {

    const context = props.context

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            size={"middle"}
            {...layout}
            name="incomeForm"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Payer"
                name="payer"
                rules={[{required: true, message: 'Please input the payer'}]}>
                <Input placeholder={"Who is giving who this money?"}/>
            </Form.Item>

            <Form.Item
                label="Amount"
                name="amount"
                rules={[{required: true, message: 'Please input the expected amount'}]}>
                <InputNumber/>
            </Form.Item>

            <Form.Item
                label="Due Date"
                name="dueDate"
                rules={[{required: true, message: 'Please input when you expect to get this amount'}]}>
                <DatePicker/>
            </Form.Item>

            <Form.Item >
                <Button type="default" htmlType="reset" onClick={context.cancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default IncomeEntryForm;
