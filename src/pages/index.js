import React from 'react'

function Home() {
    return (
        <div style={{padding:30}}>
            首页
        </div>
    )
}

Home.wrappers = ['@/wrappers/homeWrapper.js']

export default Home;