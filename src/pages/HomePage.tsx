import React from 'react'
import { Card, Carousel, Divider } from 'antd';
import { Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';

const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const HomePage = (props) => {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}><img src="https://picsum.photos/1920/300" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="https://picsum.photos/1920/300" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="https://picsum.photos/1920/300" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="https://picsum.photos/1920/300" alt="" /></h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
            <Divider style={{ paddingTop: 30 }} orientation="left">Categories</Divider>
            {props.category.map((item) => {
                return <Col key={item.id} lassName="gutter-row" span={6}>
                    <h1>{item.name}</h1>
                </Col>
            })}
            </Row>
            <Divider orientation="left">Bew Product</Divider>
            <Row gutter={[16, 24]}>
                {props.products.map((item: any) => {
                return <Col key={item.id} className="gutter-row" span={6}>
                    <div style={style}>
                    <Link to={`/products/${item.id}`}>
                        <Card
                            hoverable
                            style={{ width: 300, margin: 'auto', padding: 5 }}
                            cover={<img alt="example" src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                        >
                            <Meta
                             title={item.name} description={item.price} 
                             />
                        </Card>
                        </Link>
                    </div>
                </Col>
                })}
            </Row>
        </div>
    )
}

export default HomePage