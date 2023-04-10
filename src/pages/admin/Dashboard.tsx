import React from 'react'
import { Button, Card, Col, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';

const formatter = (value: number) => <CountUp end={value} separator="," />;

const Dashboard = () => {
    return (
        <div>
            <h1>Dash Board</h1>
            <Row style={{paddingBottom: 30, paddingTop: 30}}>
                <Col span={24}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} formatter={formatter} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
                            <Button style={{ marginTop: 16 }} type="primary">
                                Recharge
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{paddingBottom: 30, paddingTop: 30, placeItems: 'center'}}>
                <Col span={12}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} formatter={formatter} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card bordered={false}>
                                <Statistic
                                    title="Active"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    formatter={formatter}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bordered={false}>
                                <Statistic
                                    title="Idle"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    formatter={formatter}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
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