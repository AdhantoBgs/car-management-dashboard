import React from "react";
import { Card, Col, Row } from "antd";
import { LikeOutlined, TagOutlined, ClockCircleOutlined, CrownOutlined } from "@ant-design/icons";
import { styCard } from "../../styles/Css";

const CardList = () => {
	return (
		<Row>
			<Col style={styCard}>
				<Card>
					<LikeOutlined className='styIcon thumb' />
					<h3>
                        Mobil Lengkap
					</h3>
					<p className='card-desc'>
                        Tersedia banyak pilihan mobil, 
                        kondisi masih baru, bersih dan terawat 
					</p>
				</Card>
			</Col>
			<Col style={styCard}>
				<Card>
					<TagOutlined className='styIcon tag' />
					<h3>
                        Harga Murah
					</h3>
					<p className='card-desc'>
                        Harga murah dan bersaing, 
                        bisa bandingkan harga kami dengan rental mobil lain 
					</p>
				</Card>
			</Col>
			<Col style={styCard}>
				<Card>
					<ClockCircleOutlined className='styIcon clock' />
					<h3>
                        Layanan 24 Jam
					</h3>
					<p className='card-desc'>
                        Siap melayani kebutuhan Anda selama 24 jam nonstop. 
                        Kami juga tersedia di akhir minggu  
					</p>
				</Card>
			</Col>
			<Col style={styCard}>
				<Card>
					<CrownOutlined className='styIcon award' />
					<h3>
                        Sopir Profesional
					</h3>
					<p className='card-desc'>
                        Sopir yang profesional, berpengalaman, jujur, 
                        ramah dan selalu tepat waktu 
					</p>
				</Card>
			</Col>
		</Row>
	);
};

export default CardList;