import { UserOutlined,GlobalOutlined } from '@ant-design/icons';
import { Layout,Avatar } from 'antd';
import './Home.css';
import {Link,Route} from 'react-router-dom'
import Login from '../login/Login'
import Project from '../project/Project.js';
import ProjectList from '../project/ProjectList.js';

const { Header, Footer, Content } = Layout;

export default function Home(){
    const handleGoHome=()=>{

    }
    return(
        <Layout>
            <Header>
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
            </Header>
            <Content>
                <Route component={Login} path='/login'></Route>
                <Route component={Project} path='/project'></Route>
                <Route component={ProjectList} path='/'></Route>
            </Content>
        </Layout>
    )
}