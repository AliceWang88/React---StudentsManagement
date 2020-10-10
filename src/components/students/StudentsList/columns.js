import { Button, Popconfirm, message, Modal } from 'antd';
import { deleteStudent } from '../../../services/getStudends'
import Revise from '../revise'
import { history } from 'umi';

export const columns = [
    {
        title: '学号',
        dataIndex: 'sNo',
        key: 'sNo',
        align: 'center',
        className:'col'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: text => text === 0 ? '男' : '女',
        align: 'center',
        width: 50,
    },
    {
        title: '年龄',
        dataIndex: 'birth',
        align: 'center',
        key: 'birth',
        render: text => new Date().getFullYear() - (+text),
        sorter: (a, b) => (new Date().getFullYear() - (+a.birth)) - (new Date().getFullYear() - (+b.birth)),
        filters: [
            { text: '>20', value: '20' },
            { text: '>25', value: '25' },
            { text: '>30', value: '30' },
        ],
        filterMultiple: false,
        onFilter: (value, record) => (new Date().getFullYear() - (+record.birth)) >= value,
        width: 100,
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        align: 'center',

    },
    {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',


    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        align: 'center',
    },
    {
        title: '操作',
        dataIndex: 'sNo',
        key: 'detail',
        render: (text, record, index) => (
            <>
                {/* <Button type="link" size="small" href={`/students/${text}`} target='__blank'>详情</Button> */}
                <Revise sNo={text} />
                <Popconfirm
                    title='确认删除吗？'
                    cancelText='取消'
                    okText='确认'
                    onConfirm={() => handleDeleteConfirm(text)}
                >
                    <a href="#">删除</a>
                </Popconfirm>
            </>
        ),
        align: 'center',
        width:100,
        ellipsis:true,
    },
]

const handleDeleteConfirm = async (sNo) => {
    const resp = await deleteStudent(sNo);
    if (resp.status === 'success') {
        message.success(resp.msg);
        // 更新学生列表
        history.push('/students')
        return;
    }
    message.warning(resp.msg);
}

