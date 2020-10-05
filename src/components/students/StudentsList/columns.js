import { Link } from 'umi';
import { Button} from 'antd';

export const columns = [
    {
        title: 'sNo',
        dataIndex: 'sNo',
        key: 'sNo',
        align: 'center',
        fixed:true,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        fixed:true,
    },
    {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
        render: text => text === 0 ? '男' : '女',
        align: 'center',
        fixed:true,
    },
    {
        title: '年龄',
        dataIndex: 'birth',
        align: 'center',
        key:'birth',
        render: text => new Date().getFullYear() - (+text),
        sorter: (a, b) => (new Date().getFullYear()-(+a.birth)) - (new Date().getFullYear()-(+b.birth)) ,
        filters: [
            { text: '>20', value: '20' },
            { text: '>25', value: '25' },
            { text: '>30', value: '30' },
        ],
        filterMultiple: false,
        onFilter: (value, record) => (new Date().getFullYear()-(+record.birth)) >= value,
        fixed:true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        align: 'center',
        fixed:true,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
        fixed:true,

    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        align: 'center',
        fixed:true,
    },
    {
        title: 'Detail',
        dataIndex: 'sNo',
        key: 'detail',
        render: (text, record, index) => <Button type="link" size="small" href={`/students/${text}`} target='__blank'>详情</Button>,
        align: 'center',
        fixed:true,
    },
]