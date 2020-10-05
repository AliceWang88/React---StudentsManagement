import React from 'react'
import StudentList from '../../container/StudentLIstContainer'
import PagerAnt from '../../container/StudentPagerAntContainer'
import SearBar from '../../container/StudentSearchBarContainer'
import Loading from '../../container/loadingContainer'

function Home() {
    return (
        <div>
            <SearBar />
            <StudentList />
            {/* <Pager /> */}
            <PagerAnt />
            <Loading />
        </div>
    )
}

Home.wrappers = ['@/wrappers/homeWrapper.js']

export default Home;
