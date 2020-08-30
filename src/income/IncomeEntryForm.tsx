import React from 'react';
import {Button, Form, Input, InputNumber, Space} from "antd";


const layout = {
  // labelCol: {span: 4},
  // wrapperCol: {span: 8},
  layout: "vertical" as "vertical"
};
const tailLayout = {
  wrapperCol: {offset: 20},
};


function IncomeForm() {

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Form
          {...layout}
          name="basic"
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

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="default" htmlType="reset">Cancel</Button>
            <Button type="primary" htmlType="submit">Save</Button>
          </Space>
        </Form.Item>
      </Form>
  );
}

export default IncomeForm;
