import React from 'react';
import Layout from '../components/layout'
import Header from '../container/HeaderContainer'
import Aside from '../components/aside'

export default function index(props) {
    if(props.location.pathname === '/login'){
        return props.children
    }
    return (
        <div>
           <Layout
           header={<Header />}
           aside={<Aside />}
           main={props.children}
           />
        </div>
    )
}
