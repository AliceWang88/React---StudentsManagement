import React from 'react'
import style from './index.css'
import { Row, Col, Typography, Button, Icon } from 'antd';
const { Title } = Typography;
import { LogoutOutlined } from '@ant-design/icons'

export default function index(props) {
    return (
        <Row className={style.header} justify="space-between">
            <Col className={style.col}>
                <Title className={style.title}>学生管理后台</Title>
            </Col>
            <Col className={style.col}>
                <span>欢迎你</span>
                <span>{props.loginId}</span>
                <Button
                    size='small'
                    onClick={() => {
                        props.onLogout && props.onLogout();
                    }}
                    className={style.close}
                    shape="circle"
                    icon={<LogoutOutlined />}
                ></Button>
            </Col>
        </Row>
    )
}
