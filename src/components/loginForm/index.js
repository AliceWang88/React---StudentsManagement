import React, { useState } from 'react'
import { Button, Input, Space, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import style from './index.css'


export default function LoginForm(props) {
    const [loginInfo, setloginInfo] = useState({
        loginId: '',
        loginPwd: ''
    })

    return (
        <div className={style.wrap}>
            <Space direction="vertical" size="middle">
                <Row align="middle">
                    账号：
                    <Col>
                        <Input
                            bordered={false}
                            style={{ border: '1px solid #ccc' }}
                            value={loginInfo.loginId}
                            onChange={e => setloginInfo({ ...loginInfo, loginId: e.target.value })}
                            suffix={<UserOutlined />}
                            placeholder="account"
                            onPressEnter={e => props.onLogin && props.onLogin(loginInfo)}
                        />
                    </Col>
                </Row>
                <Row align="middle">
                    密码：
                    <Col>
                        <Input.Password
                            bordered={false}
                            style={{ border: '1px solid #ccc' }}
                            value={loginInfo.loginPwd}
                            onChange={e => setloginInfo({ ...loginInfo, loginPwd: e.target.value })}
                            placeholder="password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            onPressEnter={e => props.onLogin && props.onLogin(loginInfo)}
                        />
                    </Col>
                </Row>

                <Button
                    type="primary"
                    block
                    onClick={(e) => props.onLogin && props.onLogin(loginInfo)}
                >
                    登录
                </Button>
            </Space>
        </div>
    )
}

{/* <div className={style.item}>
                <label>账号：
                    <input type="text" ref={textRef} />
                </label>
            </div>
            <div className={style.item}>
                <label>密码：
                    <input type="password" ref={passRef} />
                </label>
            </div> */}


