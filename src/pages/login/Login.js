import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout,Avatar,Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import './Login.css';

 const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

export default function Home(){
    return(
        <div className="container-box">
            <div className="login-box">
                <h2 className="login-title">Welcome Back</h2>
                <div className="login-form">
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                       <Link to="/projectList">
                         <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                       </Link>
                    </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}