import React, {useState} from 'react';
import {Avatar, Card, Space} from "antd";

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
                      avatar={props.icon != null ? <Avatar shape={"circle"} icon={props.icon} size={"large"} className={"app-card-meta-avatar"}/> : null}
                />
                <Space align={"start"}>
                    {props.metaActions}
                </Space>
            </div>
            {props.children}
        </Card>
    );
}

export default BaseCard;
