import style from './index.css'
import { Form, Input, Button, Radio, Select, Switch, message, Spin, Cascader } from 'antd';
import { addStudent, getInfoBySNo, modifyStudentInfo } from '@/services/getStudends'
import { withRouter } from 'umi';
import Avatar from '@/components/avatar'


import React, { useState } from 'react'

/**
 * 约定，如有传sNO过来，代表修改学生信息，不然是添加学生信息
 * @param {*} props 
 */
function Students(props) {

    const [isLoading, setisLoading] = useState(false)

    const [form] = Form.useForm();

    // 修改学生信息： 将学生信息展示到表格上
    if (props.sNo) {
        // 获取该学生信息
        getInfoBySNo(props.sNo).then(res => {
            delete res.appkey;
            delete res.ctime;
            delete res.utime;
            delete res.id;

            // 信息展示到表格里
            form.setFieldsValue(res)
        });

    }


    // 布局
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };
    const tailLayout = {
        wrapperCol: { offset: 6 },
    };



    // 校验信息设置
    const validateMessages = {
        required: '${label} 是必选字段',
        // types: {
        //     //   email: '${name} is not validate email!',   //  输入时，不符合要求的提醒  默认也是这个
        // },
    };


    // 组件数组
    const getSelectoptions = () => {
        let newArr = [];
        for (let i = 1980; i < 2010; i++) {
            newArr.push(<Select.Option key={i} value={i}>{i}年</Select.Option>)
        }
        return newArr;
    }

    // 填完表后：添加新学生信息 或 修改
    const handleFormFinish = async () => {

        setisLoading(true);

        // 获取到填写内容
        let data = form.getFieldsValue();
        let resp;
        // 远程添加或修改学生信息
        if (props.sNo) {
            resp = await modifyStudentInfo(data);
        } else {
            resp = await addStudent(data);
        }

        setisLoading(false);

        props.onSubmit && props.onSubmit(resp)

        if (resp.status === 'success') {
            message.success(resp.msg,1,  () => {
                // 重置表单为空
                form.resetFields();
                // 跳转到学生列表页
                props.history.push('/students');
            })
        } else {
            message.warning(resp.msg);
        }
    }


    return (
        <Spin spinning={isLoading} tip="请稍后..." >
            <div className={style.wrap}>

                <Form
                    {...layout}
                    form={form}
                    name='form-wrap'
                    initialValues={{
                        sex: 0,
                    }}
                    validateMessages={validateMessages}
                    onFinish={handleFormFinish}
                    size='small'
                >

                    <Form.Item
                        label="头像"
                        name='avatar'
                    >
                        <div className={style.avatar} >
                            <Avatar />
                        </div>
                    </Form.Item>


                    <Form.Item
                        label="学号"
                        name='sNo'
                        rules={[
                            { required: true },
                            { pattern: /\d{4,16}/, message: '请输入4-16位数字学号' }
                        ]}
                    >
                        <Input disabled={props.sNo} />
                    </Form.Item>


                    <Form.Item
                        label="姓名"
                        name='name'
                        rules={[
                            { required: true },
                            {
                                pattern: /[A-Za-z]{1,}|[\u4e00-\u9fa5]+/,
                                message: '姓名不能是数字和符号'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label='性别'
                        name='sex'
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Radio.Group >
                            <Radio value={0}>男</Radio>
                            <Radio value={1}>女</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Form.Item
                        label="出生日期"
                        name='birth'
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Select
                            placeholder="请选择出生年份"
                        >
                            {getSelectoptions()}
                        </Select>
                    </Form.Item>


                    <Form.Item
                        label='邮箱'
                        name='email'
                        rules={[
                            { required: true, type: 'email', pattern: /\w+@\w+(\.\w+){1,2}/, }
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label='电话'
                        name='phone'
                        rules={[
                            { required: true },
                            { pattern: /^1\d{10}$/, message: '请输入11位电话号码' }
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label='地址'
                        name='address'
                        rules={[
                            { required: true }
                        ]}
                    >
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>


                    <Form.Item
                        {...tailLayout}
                        labelCol={{ offset: 2 }}
                    >
                        <Button type="primary" htmlType="submit">
                            提交
                    </Button>
                    </Form.Item>

                </Form>
            </div>
        </Spin>
    )
}

export default withRouter(Students);
