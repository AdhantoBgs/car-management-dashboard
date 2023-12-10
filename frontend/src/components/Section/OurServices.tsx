import { Row, Col, List, Space } from "antd";
import { CheckOutlined } from '@ant-design/icons';
import { styLayoutSection, styBullet } from '../../styles/Css';

const OurServices = () => {
    return (
        <Row style={styLayoutSection} id="ourservices">
            <Col span={12}>
                <img src='https://i.ibb.co/4tKwC6G/img-service.png' alt='img-service' />
            </Col>
            <Col span={12}>
                <div>
                    <h1 className="title-section">
                        Best Car Rental for any kind of trip in (Lokasimu)!
                    </h1>
                    <p className="description">
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
                        dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik
                        untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </p>
                    <List>
                        <List.Item>
                            <Space>
                                <CheckOutlined style={styBullet} />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </Space>
                        </List.Item>
                        <List.Item>
                            <Space>
                                <CheckOutlined style={styBullet} />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </Space>
                        </List.Item>
                        <List.Item>
                            <Space>
                                <CheckOutlined style={styBullet} />
                                Sewa Mobil Jangka Panjang Bulanan
                            </Space>
                        </List.Item>
                        <List.Item>
                            <Space>
                                <CheckOutlined style={styBullet} />
                                Gratis Antar - Jemput Mobil di Bandara
                            </Space>
                        </List.Item>
                        <List.Item>
                            <Space>
                                <CheckOutlined style={styBullet} />
                                Layanan Airport Transfer / Drop In Out
                            </Space>
                        </List.Item>
                    </List>
                </div>
            </Col>
        </Row>
    );
};

export default OurServices;