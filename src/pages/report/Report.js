import {Form,Input,Select,Button,Table} from 'antd'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Report.css'

const columns = [
  {
    title: 'Section',
    dataIndex: 'section',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Result',
    dataIndex: 'result',
  }
];
const data = [
  {
    key: '1',
    section: 'Baseline Conditions',
    result: 'Category A-Potential environmental impacts are likely to be significant if they are irreversible, diverse, or unprecedented and may affect an area larger than the sites or facilities subject to physical works.',
  },
  {
    key: '2',
    section: 'Characteristics',
    result: 'Category B-Potential environmental impacts are less adverse than those of category A and are site-specific, few if any of them are irreversible, and in most cases, mitigation measures can be designed more readily.',
  },
  {
    key: '3',
    section: 'impact Assessment',
    result: 'Category C-Potential environmental impacts are likely to have minimal or no adverse environmental impacts.',
  },

];

export default function Report() {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
  return (
    <div className='report-box'>
        <div className='project-info-box'>
            <div className='content-title'>
                Project Information
            </div>
            <div className='content-form'>
                <Form
                        labelCol={{
                            span: 4,
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
                            span: 4,
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
                            span: 4,
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
        </div>
        <div className='assessment-result-box'>
            <div className='content-title'>
                Assessment Result
            </div>
            <div className='content-form'>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                />
            </div>
        </div>
        <div className='project-btn'>
            <Button type="primary" style={{marginRight:"5px"}}>Download</Button>
            <Link to='/projectList'><Button>Go Home</Button></Link>
        </div> 
    </div>
  )
}
