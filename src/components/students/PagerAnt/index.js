import { Pagination } from 'antd';
import style from './index.css'

import React from 'react'

export default function index(props) {

    return (
        <div className={style.wrap}>
            <Pagination 
            current={props.current}
            pageSize={props.size}
            total={props.total} 
            onChange={page=>props.onPageChange(page)}
            showQuickJumper
            showSizeChanger
            onShowSizeChange={(current,size)=>props.onSizeChange(current,size)}
            showTotal={total=>`共：${total}条`}
            >
                
            </Pagination>
        </div>
    )
}
