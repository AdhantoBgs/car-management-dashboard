import { Layout, Breadcrumb, Flex } from 'antd';
import { stySubTitle } from '../../../styles/Css';
import TableOrder from '../../Table/Order';
import TableCar from '../../Table/Car';

const Dashboard = () => {
    return (
        <Layout className="dashboard-layout margin-top">
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'Dashboard',
                    },
                    {
                        title: 'Dashboard',
                    },
                ]}
            />
            <h2 className="dsh-title">Dashboard</h2>
            <Flex style={stySubTitle}>
                <a className='sub'></a>
                <p>List Order</p>
            </Flex>
            <TableOrder />
            <Flex style={stySubTitle}>
                <a className='sub'></a>
                <p>List Car</p>
            </Flex>
            <TableCar />
        </Layout>
        
    );
};

export default Dashboard;