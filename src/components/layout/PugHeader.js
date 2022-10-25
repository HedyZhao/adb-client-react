import {Avatar} from 'antd'
import { UserOutlined,GlobalOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom'
import React from 'react'
import './PugHeader.css'
export default function PugHeader() {
  return (
          <div className="container-header">
              <Link to="/projectList">
                <div className="header-title" style={{color:"white",fontSize:"20px"}}>
                    ADB IAT Scoping Toolkit
                </div>
              </Link>
              <div className="header-setting">
                  <Avatar className="user-avatar" size="large" icon={<UserOutlined />} />
                  <GlobalOutlined className="toggle-language"/>
              </div>
              {/* <div class="user-settings">
                  <ul className="font-family">
                      <li >Home</li>
                      <li ><a href="http://10.208.188.5:8089/login">Admin</a></li>
                      <li>Login/Logout</li>
                  </ul>
              </div> */}
          </div>
  )
}
