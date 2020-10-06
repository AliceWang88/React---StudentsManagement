import React from 'react'
import AddStudents from '@/components/addStudents'

function add() {
    return <AddStudents />
}
add.wrappers = ['@/wrappers/homeWrapper.js']

export default add;