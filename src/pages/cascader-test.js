import React, { useEffect, useState } from 'react'
import { getCities } from '@/services/getCities'
import { Cascader, Button, Divider } from 'antd';

// 重整数组对象里的内容
function getFormateArr(arr) {
    return arr.map(it => ({
        value: it.id,
        label: it.simpleName,
        isLeaf: it.level === 4, // 根据level判断是否是末端（是否显示：>）
    }))
}

export default function cascader() {

    const [options, setoptions] = useState([]);
    const [choosed, setchoosed] = useState([]);



    useEffect(() => {
        // 一开始获取省级数据
        getCities().then(resp => {

            // 重整数据格式内容
            resp = getFormateArr(resp);
            // 设置
            setoptions(resp);
        })
    }, [])


    function onChange(value, selectedOptions) {

        setchoosed(value);   // ["zhejiang", "hangzhou", "xihu"] 
    }

    const handleLoadData = async selectedOptions => {

        // 拿到：已选中的最后一项的id
        const len = selectedOptions.length;
        const targetObj = selectedOptions[len - 1];
        const id = selectedOptions[len - 1].value;
        // 加载中
        targetObj.loading = true;

        // 根据id 请求数据
        let data = await getCities(id);

        // 重整数据格式内容
        data = getFormateArr(data);
        // 加载完成
        targetObj.loading = false;

        // 新数据添加到老数据里
        targetObj.children = data;

        const newOp = options.filter(it => {
            return it.value !== id
        })

        setoptions([...newOp, targetObj])

    }

    function filter(inputValue, path) {
        console.log(inputValue, path)
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }



    return (
        <div style={{ padding: 30 }}>

            <Cascader
                options={options}
                onChange={onChange}
                loadData={handleLoadData}
                placeholder="Please select"
            />

            <Button
                type='primary'
                style={{ marginLeft: 10 }}
                onClick={e => { console.log(choosed) }}
            >获取选中值</Button>

        </div>
    )
}

