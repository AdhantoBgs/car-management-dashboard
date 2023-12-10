import { Row, Col, Layout } from "antd";
import Accordion from "../Accordion";
import { styLayoutSection } from '../../styles/Css';

const FAQ = () => {
    return (
        <Layout style={{background: "white"}}>
            <Row style={styLayoutSection} id="faq">
                <Col span={12}>
                    <h1 className="title-section">Frequently Asked Question</h1>
                    <p className="description">Beberapa pertanyaan terkait layanan kami</p>
                </Col>
                <Col span={12}>
                    <Accordion />
                </Col>
            </Row>
        </Layout>
    );
};

export default FAQ;