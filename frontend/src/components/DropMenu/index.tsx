import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

const DropdownMenu = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/login");
    };

    const items: MenuProps['items']  = [
        {
            label: (<a href="#profile">
                        <Space>
                            <UserOutlined />
                            Profile
                        </Space>
                    </a>),
            key: '0',
        },
        {
            label: (<a href="#settings">
                        <Space>
                            <SettingOutlined />
                            Settings
                        </Space>
                    </a>),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (<a onClick={handleLogout}>
                        <Space>
                            <LogoutOutlined />
                            Logout
                        </Space>
                    </a>),
            key: '3',
            danger: true,
        },
    ];

    return (
        <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Avatar>U</Avatar>
                    User
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default DropdownMenu;