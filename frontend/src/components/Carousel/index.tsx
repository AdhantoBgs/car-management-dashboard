import React from "react";
import { Carousel, Layout, Rate, Flex } from "antd";
import { contentStyle, styImg } from "../../styles/Css";

const { Content } = Layout;

const SlideTesti = () => {
	return (
		<Carousel autoplay>
			<div>
				<Content style={contentStyle}>
					<Flex>
						<div style={styImg}>
							<img src='https://i.ibb.co/hLMLwxw/img-photo-1.png' alt='img-person' />
						</div>
						<Flex vertical>
							<Rate disabled defaultValue={5} />
							<p className='testimoni-desc'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod”
							</p>
							<p>John Dee 32, Bromo</p>
						</Flex>
					</Flex>
				</Content>
			</div>
			<div>
				<Content style={contentStyle}>
					<Flex>
						<div style={styImg}>
							<img src='https://i.ibb.co/hLMLwxw/img-photo-1.png' alt='img-person' />
						</div>
						<Flex vertical>
							<Rate disabled defaultValue={5} />
							<p className='testimoni-desc'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod”
							</p>
							<p>Perenelle Flamel 108, City</p>
						</Flex>
					</Flex>
				</Content>
			</div>
			<div>
				<Content style={contentStyle}>
					<Flex>
						<div style={styImg}>
							<img src='https://i.ibb.co/hLMLwxw/img-photo-1.png' alt='img-person' />
						</div>
						<Flex vertical>
							<Rate disabled defaultValue={5} />
							<p className='testimoni-desc'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod”
							</p>
							<p>Eddie Frank 119, West</p>
						</Flex>
					</Flex>
				</Content>
			</div>
		</Carousel>
	);
};

export default SlideTesti;