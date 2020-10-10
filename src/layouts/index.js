import React from 'react';
import Layout from '../components/layout'
import Header from '../container/HeaderContainer'
import Aside from '../components/aside'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function index(props) {
    if (props.location.pathname === '/login') {
        return props.children
    }
    return (
        <ConfigProvider locale={zhCN}>
            <div>
                <Layout
                    header={<Header />}
                    aside={<Aside />}
                    main={props.children}
                />
            </div>
        </ConfigProvider>
    )
}
