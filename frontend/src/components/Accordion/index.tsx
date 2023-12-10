import { DownOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import type { CSSProperties } from 'react';

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum. 
`;

const getItems = (panelStyle: CSSProperties) => [
  {
    key: '1',
    label: 'Apa saja syarat yang dibutuhkan?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Berapa hari minimal sewa mobil lepas kunci?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Apakah Ada biaya antar-jemput?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: 'Bagaimana jika terjadi kecelakaan?',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const Accordion = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 16,
    border: 'none',
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
      expandIconPosition='right'
      style={{background: token.colorBgContainer}}
      items={getItems(panelStyle)}
    />
  );
};

export default Accordion;