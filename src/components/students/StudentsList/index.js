import React from 'react';
import { columns } from './columns'
import { Table } from 'antd';
import style from './index.css'

export default function StudentsList(props) {

    return (    
        <div className={style.wrap}>
            <Table
                tableLayout='fixed'
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
                dataSource={props.aStu.length > props.size? props.aStu.slice(0,props.size):props.aStu}
                loading={props.loading}
                scroll={{ y:350 }}
                align='left'
            >
            </Table>
        </div >
    )
}
