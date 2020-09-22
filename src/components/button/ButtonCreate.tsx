import React from 'react';
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const ButtonCreate = (props) => <Button type={"default"} shape={"circle-outline"} icon={<PlusOutlined/>} {...props}/>
export default ButtonCreate;
