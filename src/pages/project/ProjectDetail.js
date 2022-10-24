import { Layout,Menu,Breadcrumb,Form,Input,Select,Button } from 'antd';
import React,{useState} from 'react'
import './ProjectDetail.css'
export default function ProjectDetail() {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
  return (
             <div className='project-box'>
                        <div className='project-section-title'>
                            New Project
                        </div>
                        <div className='project-form'>
                            <Form
                                labelCol={{
                                    span: 3,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                size={componentSize}
                                >
                                <Form.Item label="Proponent">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Address and Contact Person">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Name">
                                    <Input />
                                </Form.Item>
                            </Form>
                            <Form
                                labelCol={{
                                    span: 3,
                                }}
                                wrapperCol={{
                                    span: 7,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                size={componentSize}
                                >
                                <Form.Item label="Location">
                                    <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Sector" >
                                    <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                    {/* <a href='http://10.208.188.5:8091'>
                                        <Button type="primary" shape="circle" icon={<SendOutlined />} />
                                    </a> */}
                                </Form.Item>
                            </Form>
                            <Form
                                labelCol={{
                                    span: 3,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                size={componentSize}
                            >
                                <Form.Item name={['user', 'introduction']} label="Project Description">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="Capacity">
                                    <Input.TextArea />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='project-btn'>
                            <Button type="primary" style={{marginRight:"5px"}}>Continue</Button>
                            <Button>Reset</Button>
                        </div>
             </div>
  )
}
