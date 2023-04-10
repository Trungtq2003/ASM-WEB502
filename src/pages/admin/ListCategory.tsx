import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICategory } from '../../types/category';
import { Link } from 'react-router-dom'

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}
interface IProps {
    category: ICategory[],
    onRemove: (id: number) => void
}

const ListCategoryPage = (props: IProps) => {
    const removeCategory = (id: number) => {
        const result = confirm("bạn có muốn xóa không");
        if (result == true){
            props.onRemove(id)
        }else {

        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.id)}>Remove</Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.category.map((item: ICategory) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            {/* <Button type='primary'><Link to={'/admin/category/add'}>Add New Category</Link></Button>
            <Button type='primary'><Link to={'/admin/products'}>Back To Products Managerment</Link></Button> */}
            <h1>List Category</h1>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ListCategoryPage