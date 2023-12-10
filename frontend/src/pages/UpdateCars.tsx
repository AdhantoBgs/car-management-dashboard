import FormUpdate from '../components/FormUpdateCars';
import MenuBar from '../components/Menu';
import Sidebar from '../components/Sidebar';
import './../styles/App.css';
import { Layout } from 'antd';

const Update = () => {
  return (
    <div>
      <Layout>
        <Sidebar />
        <Layout>
          <MenuBar />
          <FormUpdate />
        </Layout>
      </Layout>
    </div>
  );
};

export default Update;