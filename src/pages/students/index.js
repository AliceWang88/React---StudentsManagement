import React from 'react'
import StudentList from '../../container/StudentLIstContainer'
import SearBar from '../../container/StudentSearchBarContainer'

function Home() {
    return (
        <div>
            <SearBar />
            <StudentList />
        </div>
    )
}

Home.wrappers = ['@/wrappers/homeWrapper.js']

export default Home;
