import React from 'react'
import { Button, Col, Row, Statistic } from 'antd';

const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                            <Button style={{ marginTop: 16 }} type="primary">
                                Recharge
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} loading />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
        </div>
    )
}

export default Dashboard