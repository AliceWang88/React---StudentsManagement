import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import AddStudents from '../addStudents'

export default function Revise(props) {

    const [visible, setvisible] = useState(false)

    const showModal = () => {
        setvisible(true);
    }

    const handleCancel = ()=>{
        setvisible(false)
    }

    const onSubmit = (feedback) =>{
        // 信息修改成功后，modal再消失
        if(feedback.status === 'success'){
            setvisible(false);
        }
    }

    return (
        <>
            <Button type="link" size="small" onClick={showModal}>修改</Button>
            <Modal
                title="修改学生信息"
                visible={visible}
                onCancel={handleCancel}
                centered
                footer={null}
            >
                <AddStudents sNo={props.sNo} onSubmit={onSubmit}/>
            </Modal>
        </>
    )
}
