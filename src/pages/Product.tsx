import React from 'react';
import { Col, Divider, Row, Card } from 'antd';

const { Meta } = Card;

const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };

const ProductPage = (props) => { // nhận props từ App.tsx

    return (
        <div>

            <Divider orientation="left">PRODUCT</Divider>
            <Row gutter={[16, 24]}>
                {props.products.map((item) => {
                return <Col key={item.id} className="gutter-row" span={6}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 300, margin: 'auto', padding: 5 }}
                            cover={<img alt="example" src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                        >
                            <Meta
                             title={item.name} description={item.price} 
                             />
                        </Card>
                    </div>
                </Col>
                })}
            </Row>
        </div>
    )
}

// {props.products.map((item) => {
//     return <div key={item.id}>
//         <h2>{item.name}</h2>
//     </div>

// })}

export default ProductPage