import React from 'react';
import {Button, Form, Input, InputNumber,} from "antd";


const layout = {
    layout: "vertical" as "vertical"
};

function IncomeEntryForm(props) {

    const context = props.context

    const [myForm] = Form.useForm()

    const onFinish = (record) => context.save(record)

    const onCancel = () => {
        myForm.resetFields()
        context.cancel()
    }


    return (
        <Form
            form={myForm}
            size={"middle"}
            {...layout}
            name="incomeForm"
            initialValues={context.state.target}
            onFinish={onFinish}
        >
            <Form.Item
                label="Payer"
                name="payer"
                rules={[{required: true, message: 'Please input the payer'}]}>
                <Input placeholder={"Who is giving you this money?"}/>
            </Form.Item>

            <Form.Item
                label="Amount"
                name="amount"
                rules={[{required: true, message: 'Please input the expected amount'}]}>
                <InputNumber/>
            </Form.Item>

            <Form.Item
                label="Due Date"
                name="dueDate">
                <Input placeholder={"oh oh"}/>
            </Form.Item>

            {/*<Form.Item*/}
            {/*    label="Due Date"*/}
            {/*    name="dueDate"*/}
            {/*    rules={[{required: true, message: 'Please input when you expect to get this amount'}]}>*/}
            {/*    <DatePicker/>*/}
            {/*</Form.Item>*/}

            <Form.Item>
                <Button type="default" htmlType="reset" onClick={onCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
    );
}

export default IncomeEntryForm;
