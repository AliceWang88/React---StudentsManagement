import React from 'react'

export default function index(props) {
    return (
        <div>
            修改学生信息页面，id号：{props.match.params.id}
        </div>
    )
}
