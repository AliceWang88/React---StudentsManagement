/**
 * 要求：
 * 1. 只能上传1张图片；
 * 2. 1张图片后，上传按钮消失；
 * 3. 限制上传格式与大小(jpeg,png)，并提示用户
 */

import React, { useState } from 'react';
import { Upload, Button, message,Empty } from 'antd';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

export default function Avatar(props) {

  // 默认展示图片
  const [fileList, setfileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: <Empty />,
    // },
  ])

  // 限制上传文件数量
  const handleChange = info => {

    // 拿到已经上传的文件
    let fileList = [...info.fileList];
    // 限制数量为：最新的那一个
    fileList = fileList.slice(-1);

    fileList = fileList.map(file => {
      if (file.response) {
        // 之前以base64展示，现在是http://
        file.url = file.response.path;
      }
      return file;
    })

    setfileList(fileList)
  }

  // 上传前判断图片格式和大小
  const handleBeforeUpload = file => {

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('亲，只能上传 JPG/PNG 格式的图片!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('亲，请上传小于2M的图片!');
    }

    return isJpgOrPng && isLt2M;
  }


  const options = {
    listType: "picture-card",
    accept: ".jpg,.jpeg,.png",  // 选择文件时，不显示其他格式文件
    action: '/api/upload',
    name: "imagefile",
    onChange: handleChange,
    fileList: fileList,
    beforeUpload: handleBeforeUpload,
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  )


  return (
    <div>
      <Upload {...options}>

        {/* 上传一张图片后，上传按钮消失 */}
        {fileList.length === 1 ? null : uploadButton}
        
      </Upload>
    </div>
  )
}
