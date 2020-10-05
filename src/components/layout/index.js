import React from 'react';
import style from './index.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default function index(props) {
    return (
        <div>
            <Layout>
                <Header className={style.header}>{props.header}</Header>
                <Layout className={style.main}>
                    <Sider>{props.aside}</Sider>
                    <Content  className={style.wrap}>{props.main}</Content>
                </Layout>
            </Layout>
        </div>
    )
}
