import { AppstoreOutlined,FileTextOutlined,TagOutlined,EditOutlined,ContainerOutlined } from '@ant-design/icons';
import { Layout,Menu,Breadcrumb } from 'antd';
import React, { useState } from 'react';
import {  Route } from "react-router-dom";
import FirstConditions from '../baselineConditions/FirstConditions';
import './Project.css'
import ProjectDetail from './ProjectDetail.js';
import ThirdCharacteristics from '../report/Report.js'
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Project detail', 'sub1', <ContainerOutlined />),
  getItem('Baseline Conditions', 'sub2', <AppstoreOutlined />, [
    getItem('Section 1', '1'),
    getItem('Section 2', '2'),
  ]),
  getItem('Characteristics', 'sub3', <TagOutlined />, [
    getItem('Section 1', '3'),
    getItem('Section 2', '4'),
    getItem('Section 3', '5'),
    getItem('Section 4', '6'),
  ]),
   getItem('impact Assessment', 'sub4', <EditOutlined />),
   getItem('Report', 'sub5', <FileTextOutlined />),
];

const { Header, Footer, Sider, Content } = Layout;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default function Project() {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <Layout>
        <Sider>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: 256,
                }}
                items={items}
                />
        </Sider>
        <Layout>
            <Content className='project-layout-content'>
                <div className='project-detail-box'>
                    <div className='breadcrumb-box'>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>
                            <a href="">Project Detail</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <Route component={ThirdCharacteristics} path='/project'></Route>
            </Content>
        </Layout>
        </Layout>
    )
}
