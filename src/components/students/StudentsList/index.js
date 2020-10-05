import React from 'react';
import { columns } from './columns'
import { Table, Pagination } from 'antd';
import style from './index.css'

export default function StudentsList(props) {

    return (
        <div className={style.wrap}>
            <Table
                pagination={{
                    current: props.current,
                    pageSize: props.size,
                    total: props.total,
                    onChange: page => props.onPageChange(page),
                    showQuickJumper: true,
                    showSizeChanger: true,
                    onShowSizeChange: (current, size) => props.onSizeChange(current, size),
                    showTotal: total => `共：${total}条`,
                    pageSizeOptions: ['6', '10', '20', '50',]
                }}
                rowKey={record => record.id}
                size='small'
                columns={columns}
                dataSource={props.aStu}
                loading={props.loading}
            >
            </Table>
        </div >
    )
}
