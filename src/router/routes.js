import App from '../App'
const routes = [
    {
        path: '/',
        name: 'Home',
        meta:{
            title:'Home'
        },
        component: () =>
            import('../views/home/Home.vue'),
        children: [
             {
                path: '/login',
                name: 'Login',
                meta:{
                    title:'Login in'
                },
                component: () =>
                    import('../views/login/Login.vue')
            },
            {
                path: '/',
                name: 'Home',
                meta:{
                    title:'Home'
                },
                component: () =>
                    import('../views/project/ProjectList.vue')
            },
             {
                path: '/projectDetail',
                name: 'New Project',
                meta:{
                    title:'New Project'
                },
                component: () =>
                    import('../views/project/Project.vue'),
                children:[
                     {
                        path: '/projectDetail',
                        name: 'Project detail',
                        meta:{
                            title:'Project detail'
                        },
                        component: () =>
                            import('../views/project/ProjectDetail.vue'),
                    },
                    {
                        path: '/baselineConditions',
                        name: 'Baseline Conditions',
                        meta:{
                            title:'Baseline Conditions'
                        },
                        component: () =>
                            import('../views/baselineConditions/BaselineConditions.vue'),
                        children:[
                            {
                                path: '/baselineConditions',
                                name: 'Section 1',
                                meta:{
                                    title:'Section 1'
                                },
                                component: () =>
                                    import('../views/baselineConditions/FirstConditions.vue'),
                            },
                            {
                                path: '/secondConditions',
                                name: 'Section 2',
                                meta:{
                                    title:'Section 2'
                                },
                                component: () =>
                                    import('../views/baselineConditions/SecondConditions.vue'),
                            },
                        ]
                    },
                    {
                        path: '/characteristics',
                        name: 'Characteristics',
                        meta:{
                            title:'Characteristics'
                        },
                        component: () =>
                            import('../views/characteristics/Characteristics.vue'),
                        children:[
                            {
                                path: '/section_1',
                                name: 'Section 1 ',
                                meta:{
                                    title:'Section 1'
                                },
                                component: () =>
                                    import('../views/characteristics/FirstCharacteristics.vue'),
                            },
                            {
                                path: '/section_2',
                                name: 'Section 2 ',
                                meta:{
                                    title:'Section 2'
                                },
                                component: () =>
                                    import('../views/characteristics/SecondCharacteristics.vue'),
                            },
                            {
                                path: '/section_3',
                                name: 'Section 3 ',
                                meta:{
                                    title:'Section 3'
                                },
                                component: () =>
                                    import('../views/characteristics/ThirdCharacteristics.vue'),
                            },
                            {
                                path: '/section_4',
                                name: 'Section 4 ',
                                meta:{
                                    title:'Section 4'
                                },
                                component: () =>
                                    import('../views/characteristics/ForthCharacteristics.vue'),
                            },
                        ]
                        
                    },
                    {
                        path: '/impactAssessment',
                        name: 'impact Assessment',
                        meta:{
                            title:'impact Assessment'
                        },
                        component: () =>
                            import('../views/impactAssessment/impactAssessment.vue')
                    },
                    {
                        path: '/report',
                        name: 'Report',
                        meta:{
                            title:'Report'
                        },
                        component: () =>
                            import('../views/report/Report.vue')
                    },
                ]
            },
        ]
    }

]
export {routes}