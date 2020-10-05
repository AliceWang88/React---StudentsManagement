import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            <h2>学生详情页</h2>
            <p>学号：{props.match.params.sNo}</p>

        </div>
    )
}
