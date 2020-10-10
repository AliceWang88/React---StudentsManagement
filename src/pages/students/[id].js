import React from 'react'
import Student from '@/components/students/addStudents'

export default function index(props) {
    return (
        <div>
            <Student sNo={props.match.params.id} />
        </div>
    )
}
