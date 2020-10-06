import style from './index.css'
import { Form, Input, Button, Radio, Select, Switch } from 'antd';

import React from 'react'

export default function index() {

    const [form] = Form.useForm();
    console.log(form)

    const validateMessages = {
        required: '${name} is required!',
        types: {
          email: '${name} is not validate email!',   //  输入时，不符合要求时，提醒
          radio: '!!!!!!!!!!!!!!',
          number:'88888888888888'
        },
   };


    return (
        <div className={style.wrap}>
            <Form
                form={form}
                name='form-wrap'
                initialValues={{
                    sex: 0,
                    isMonitor:false,
                    name:'Alice'
                  }}
                  validateMessages={validateMessages}
            >
                <Form.Item
                    label="学号"
                    name='sNo'
                    hasFeedback
                    rules={[
                        { required: true }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="姓名"
                    name='name'
                    hasFeedback
                    rules={[
                        { required: true}
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='性别'
                    name='sex'
                    hasFeedback
                    rules={[
                        { required: true,type:'radio'}
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
                    hasFeedback
                    rules={[
                        { required: true, message: '请选择出生日期' }
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
                    hasFeedback
                    rules={[
                        { required: true,types:'email'}
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='电话'
                    name='phone'
                    hasFeedback
                    rules={[
                        { required: true,types:'number' }
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label='地址'
                    name='address'
                    hasFeedback
                >
                    <Input.TextArea></Input.TextArea>
                </Form.Item>

                <Form.Item
                    label='是否班长'
                    name='isMonitor'
                    valuePropName='checked'
                    hasFeedback
                    rules={[
                        { required: true, message: '请选择' }
                    ]}
                >
                    <Switch />
                </Form.Item>

                <Form.Item
                >
                    <Button type="primary" htmlType="submit"
                        onClick={e=>{
                            console.log(form.getFieldsValue());
                            console.log(form.setFieldsValue(1))
                        }}
                    >
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}
