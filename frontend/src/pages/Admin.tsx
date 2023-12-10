import Dashboard from '../components/Dashboard/Dashboard';
import MenuBar from '../components/Menu';
import Sidebar from '../components/Sidebar';
import './../styles/App.css';
import { Layout } from 'antd';

const Admin = () => {
  return (
    <div>
      <Layout>
        <Sidebar />
        <Layout>
          <MenuBar />
          <Dashboard />
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;