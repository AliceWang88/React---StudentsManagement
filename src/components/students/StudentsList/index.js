import React from 'react';
import {columns} from './columns'
import { Table, Pagination } from 'antd';
import style from './index.css'

export default function StudentsList(props) {


    return (
        <div className={style.wrap}>
            <Table
                pagination={false}
                rowKey={record => record.id}
                size='small'
                columns={columns}
                dataSource={props.aStu}>
            </Table>

        </div>
    )
}
