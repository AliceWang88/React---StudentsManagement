import React, { Component } from 'react'
import { Input, Radio,Row, Col } from 'antd'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import style from './index.css'


export default class StudentSearchBar extends Component {

    static defaultProps = {
        search: '123',
        sex: -1,
    }

    state = {
        key: this.props.search,
        sex: this.props.sex,
    }


    handleRadioChange = e => {
        this.setState({
            sex: +e.target.value,
        })
    }

    render() {
        return (
            <div className={style.wrap}>
                <Row align='middle'>

                    关键字：
                    <Col style={{ marginRight: 20 }}>
                        <Input
                            bordered={false}
                            style={{border:'1px solid #ccc',background:'#fff'}}
                            allowClear
                            value={this.state.key}
                            onChange={e => {
                                this.setState({
                                    key: e.target.value
                                })
                            }}
                        ></Input>
                    </Col>

                 性别：
                 <Radio.Group defaultValue='-1' onChange={this.handleRadioChange}>
                        <Radio value='-1' checked={this.state.sex === -1}>不限</Radio>
                        <Radio value='0' checked={this.state.sex === 0}>男</Radio>
                        <Radio value='1' checked={this.state.sex === 1}>女</Radio>
                    </Radio.Group>
                    <Button
                    type="primary"
                    icon={<SearchOutlined />}
                     onClick={() => {
                        this.props.onSearch && this.props.onSearch(this.state);
                    }}>查询</Button
                    >
                </Row>
            </div>
        )
    }
}
