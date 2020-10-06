import style from './index.css'
import { Form, Input, Button, Radio, Select, Switch } from 'antd';

import React from 'react'

export default function index() {



    return (
        <div className={style.wrap}>
            <Form
                name='form'
                initialValues={{
                    sex: 0
                }}
            >
                <Form.Item
                    label="学号"
                    name='sNo'
                    hasFeedback
                    rules={[
                        { required: true, message: '请输入学号' }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="姓名"
                    name='name'
                    rules={[
                        { required: true, message: '请输入姓名' }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='性别'
                    name='sex'
                    rules={[
                        { required: true, message: '请选择性别' }
                    ]}
                >
                    <Radio.Group>
                        <Radio value='0'>男</Radio>
                        <Radio value='1'>女</Radio>
                    </Radio.Group>
                </Form.Item>


                <Form.Item
                    label="出生日期"
                    name='birth'
                    rules={[
                        { required: true, messag: '请选择出生日期' }
                    ]}
                >
                    <Select
                        placeholder="请选择出生年份"
                    >
                        <Select.Option value='1999'>1999</Select.Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    label='邮箱'
                    name='email'
                    rules={[
                        { required: true, messag: '请输入邮箱' }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='电话'
                    name='phone'
                    rules={[
                        { required: true, messag: '请输入电话' }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='地址'
                    name='address'
                >
                    <Input.TextArea></Input.TextArea>
                </Form.Item>

                <Form.Item
                    label='是否班长'
                    name='isMonitor'
                    valuePropName='checked'
                >
                    <Switch />
                </Form.Item>

                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>

            </Form>
        </div>
    )
}
