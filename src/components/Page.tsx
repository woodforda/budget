import React from 'react';
import {Avatar, Button, Card, PageHeader, Popover} from "antd";
import {QuestionCircleOutlined, SettingFilled, TagsOutlined} from '@ant-design/icons';

const {Meta} = Card

function content() {
  return (
      <Card bordered={false} style={{maxWidth: '500px'}}>
        <Meta title={"About"}
              avatar={<Avatar icon={<TagsOutlined/>}/>}/>
        <div style={{marginTop: '20px'}}>
          Author: Andrew Woodford<br/>
          Version: 1.0.0-beta
        </div>
      </Card>
  );
}

function Page(props) {
  return (
      <>
        <PageHeader title={props.title} backIcon={null} extra={
          [
            <Button key={"mrMiaggi"} type={"ghost"} ghost={false} icon={<SettingFilled/>} size={"large"}
                    shape={"round"}/>,
            <Popover key={"bugg"} trigger="click" content={content} placement={"left"}>
              <Button key={"Karate"} type={"ghost"} ghost={false} icon={<QuestionCircleOutlined/>} size={"large"}
                      shape={"round"}/>
            </Popover>
          ]
        }/>
        {props.children}
      </>
  );
}

export default Page;
