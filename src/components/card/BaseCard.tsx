import React, {useState} from 'react';
import {Avatar, Card} from "antd";

const {Meta} = Card;

function BaseCard(props) {
  let [selected, setSelected] = useState(false)
  return (
      <Card hoverable
            actions={props.actions}
            onPointerOver={() => setSelected(true)}
            onPointerLeave={() => setSelected(false)}
      >
        <div style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
        }}>
          <Meta title={props.title}
                description={props.description}
                avatar={props.icon != null ? <Avatar shape={"circle"} icon={props.icon} size={"default"}/> : null}
          />
          {/*<Button type={"default"} ghost={!selected} shape={"circle-outline"} icon={<EyeOutlined/>}  />*/}
        </div>
        {props.children}
      </Card>
  );
}

export default BaseCard;
