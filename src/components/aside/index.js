import React, { useState } from 'react'
import style from './index.css'
import { NavLink, withRouter } from 'umi';
import { Menu } from 'antd'
const { SubMenu } = Menu;

const arr = [
    { key: '/', title: "学生管理后台首页" },
    {
        key: 'studentManager', title: "学生管理", children: [
            { key: '/students', title: "学生查询" },
            { key: '/students/add', title: "添加学生" },
        ]
    },
]

function Index(props) {
    const menus = arr.map(item => {
        if (item.children) {
            return (
                <SubMenu key={item.key} title={item.title}>
                    {item.children.map(subItem=><Menu.Item key={subItem.key}><NavLink to={subItem.key}>{subItem.title}</NavLink></Menu.Item>)}
                </SubMenu> 
            )
        } 
        return <Menu.Item key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
    })

    const defaultOpenKey = [];
    for( var item in arr){
        if(arr[item].children){
            for(var subItem in arr[item].children){
                if(arr[item].children[subItem].key === props.location.pathname){
                    defaultOpenKey.push(arr[item].key)
                }
            }
        }
    }

    return (
        <Menu defaultOpenKeys={defaultOpenKey} theme='dark' mode="inline" selectedKeys={[props.location.pathname]}>
            {menus}
        </Menu>
    )
}

export default withRouter(Index)
