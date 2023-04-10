import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input, Select, Upload, UploadProps, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadFile } from 'antd/es/upload';
import TextArea from 'antd/es/input/TextArea';

interface IProps {
    onAdd: (product: IProduct) => void
}

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const AddProductPage = (props: IProps) => { 

    const navigate = useNavigate()
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);


    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    
    const handleUpload = (file: RcFile) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
        return false;
      };

    function handleRemove(file: UploadFile<any>): boolean | void | Promise<boolean | void> {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
            <h1>Add New Products</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 1000, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Image'
                    name='image'
                    rules={[{ required: true, message: 'Ảnh không được bỏ trống' }]}
                >
                    <Upload
                        accept='image/*'
                        listType='picture-card'
                        showUploadList={false}
                        beforeUpload={handleUpload}
                        onRemove={handleRemove}
                    >
                        {imageUrl ? (
                            <img src={imageUrl} alt='product' style={{ width: '100%' }} />
                        ) : (
                            <div>
                                <UploadOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="desc"
                    rules={[{ required: true, message: 'Please input description!' }]}
>
                    <TextArea rows={6} />
                </Form.Item>

                <Form.Item>
                    {/* <Select
                        showSearch
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                        ]}
                    /> */}
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage