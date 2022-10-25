import Login from '../pages/login/Login.js'
import Home from '../pages/home/Home.js'
import ProjectList from '../pages/project/ProjectList.js';

const router = [
  {
    path: '/',
    name: "Login",
    auto: false,
    component: Login,
  },{
    redirect: '/home',
    path: '/home',
    component: Home,
    name: "Home",
    auto: true,
    children: [
      {
        path: "/home/projectList",
        name: "Project List",
        auto: true,
        component: ProjectList,
      },
    ]
  }
]
 
export default router;