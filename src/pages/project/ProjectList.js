import { Col, Row,Form,Input,Select,Button,DatePicker, Space,Image,Switch } from 'antd';
import { FormOutlined,DeleteOutlined,FileTextOutlined } from '@ant-design/icons';
import React from 'react'
import {Link } from 'react-router-dom';
import './ProjectList.css'
import Beijing from '../../assets/images/Beijing.jpg'

const { Option } = Select;
const { RangePicker } = DatePicker;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Project() {
  const [form] = Form.useForm();
  const tableData={
    inprogress:[
        {
            id: '01',
            name: "100 MW Combine Cycle Natural Gas Power Plant with 200 km of 132 kV Power Transmission Line",
            sector: 'Information and Communication Technology / IT Parks',
            createTime: '2022-09-10',
            status: 'in progress',
            description: "The project, supported by the Chinese government and located in Beijing's Chaoyang District,will benefit local residents when completed.",
            progress: '/projectDetail'
        },
        {
            id: '02',
            name: "100 MW Combine Cycle Natural Gas Power Plant with 200 km of 132 kV Power Transmission Line",
            sector: 'Information and Communication Technology / IT Parks',
            createTime: '2022-09-11',
            status: 'in progress',
            description: "The project, supported by the Chinese government and located in Beijing's Chaoyang District,will benefit local residents when completed.",
            progress: '/projectDetail'
        },
        {
            id: '03',
            name: "100 MW Combine Cycle Natural Gas Power Plant with 200 km of 132 kV Power Transmission Line",
            sector: 'Information and Communication Technology / IT Parks',
            createTime: '2022-09-12',
            status: 'in progress',
            description: "The project, supported by the Chinese government and located in Beijing's Chaoyang District,will benefit local residents when completed.",
            progress: '/projectDetail'
        },
    ],
    completed:[
        {
            id: '04',
            name: "100 MW Combine Cycle Natural Gas Power Plant with 200 km of 132 kV Power Transmission Line",
            sector: 'Information and Communication Technology / IT Parks',
            createTime: '2022-09-13',
            status: 'completed',
            description: "The project, supported by the Chinese government and located in Beijing's Chaoyang District,will benefit local residents when completed.",
            progress: '/report'
        },
    ]
  }
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

  return (
    <div className='project-container-box'>
       <div className='search-box'>
          <Form className='header-box' {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Row className='header-search' >
          <Col span={6}>
                <Form.Item
                    name="name"
                    label="Name:"
                  >
                    <Input 
                      placeholder="Please input project name"
                    />
                </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
                name="status"
                label="Status:"
              >
                <Select
                  placeholder="Select the project status"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Data:"
            >
              <Space className='space-box' direction="vertical" size={12}>
                <RangePicker className='rang-picker-box'/>
              </Space>
            </Form.Item>
          </Col>
          <Col span={4}>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
          </Col>
        </Row>
        </Form>
       </div>
       <div className='project-box'>
          <div className='project-box-button'>
            <Link to="/project">
              <Button type="primary" htmlType="submit">
                New Project 
              </Button>
            </Link>
            <div><span>Grid</span><Switch defaultChecked onChange={onChange} style={{margin:'0px 5px'}}/><span>List</span></div>
          </div>
          <div className='project-item-box'>
            <div className='project-item-title section-title'>
              inprogress
            </div>
            <Row className='project-item' gutter={10}>
              {
                tableData.inprogress.map((item,index)=>{
                return  <Col 
                          span={6} 
                          key={index}>
                            <div className='card-box'>
                                <Row gutter={10} className="card-top"> 
                                    <Col span={12}>
                                      <Image
                                        src={Beijing}
                                        className="card-header-image"
                                      />
                                    </Col>
                                    <Col span={12}>
                                      <div className="card-header-title content-overflow" >
                                          {item.name}
                                        </div>
                                        <div className="card-header-sector content-overflow">
                                            <div >
                                          {item.sector}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="card-bottom">
                                    <div className="card-footer-description">
                                        {item.description}
                                    </div>
                                    <div className="card-bottom-icon">
                                        <div className="card-footer-time">
                                            {item.createTime}</div>
                                        <div className="card-footer-operations">
                                            <FormOutlined className='cursor-pointer'/>
                                            <DeleteOutlined  className='cursor-pointer'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                      })
                      }
            </Row>
          </div>
          <div className='project-item-box'>
            <div className='project-item-title section-title'>
              completed
            </div>
            <Row className='project-item' gutter={10}>
              {
                tableData.completed.map((item,index)=>{
                return  <Col 
                          span={6} 
                          key={index}>
                            <div className='card-box'>
                                <Row gutter={10} className="card-top"> 
                                    <Col span={12}>
                                      <Image
                                        src={Beijing}
                                        className="card-header-image"
                                      />
                                    </Col>
                                    <Col span={12}>
                                      <div className="card-header-title content-overflow" >
                                          {item.name}
                                        </div>
                                        <div className="card-header-sector content-overflow">
                                            <div >
                                          {item.sector}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="card-bottom">
                                    <div className="card-footer-description">
                                        {item.description}
                                    </div>
                                    <div className="card-bottom-icon">
                                        <div className="card-footer-time">
                                            {item.createTime}</div>
                                        <div className="card-footer-operations">
                                          <FileTextOutlined className='cursor-pointer'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                      })
                      }
            </Row>
          </div>
       </div>
    </div>
  )
}
