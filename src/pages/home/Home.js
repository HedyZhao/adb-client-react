import { Layout,Avatar } from 'antd';
import './Home.css';
import {Link,Route} from 'react-router-dom'
import Login from '../login/Login'
import Project from '../project/Project.js';
import ProjectList from '../project/ProjectList.js';
import PugHeader from '../../components/layout/PugHeader';
import ProjectDetail from '../project/ProjectDetail';

const { Header, Footer, Content } = Layout;

export default function Home(){
    const handleGoHome=()=>{

    }
    return(
        <Layout>
            <Header>
                <PugHeader></PugHeader>
            </Header>
            <Content className='home-layout-content' style={{position:"absolute",top:'68px'}}>
                <Route component={ProjectList} path='/'></Route>
                <Route component={Login} path='/login'></Route>
                <Route component={Project} path='/project'></Route>
            </Content>
        </Layout>
    )
}