import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: '403',
    path: '/403',
    component: () => import('@/layouts/blank-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/_builtin/403/index.vue')
      }
    ],
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/layouts/blank-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/_builtin/404/index.vue')
      }
    ],
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: () => import('@/layouts/blank-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/_builtin/500/index.vue')
      }
    ],
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/home/sql.vue')
      },
      {
        name: 'home_sql',
        path: 'home_sql',
        component: () => import('@/views/home/sql.vue'),
        meta: {
          title: 'home_sql',
          hideInMenu: true
        }
      }
    ],
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mdi:monitor-dashboard',
      order: 1
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: () => import('@/layouts/blank-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/_builtin/login/index.vue')
      }
    ],
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'employees',
    path: '/employees',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/employees/index.vue')
      },
      {
        name: 'employees_detail',
        path: 'detail',
        component: () => import('@/views/employees/detail.vue'),
        meta: {
          title: 'employees_detail'
        }
      },
      {
        name: 'employees_history',
        path: 'history',
        component: () => import('@/views/employees/history.vue'),
        meta: {
          title: 'Employee History'
        }
      }
    ],
    meta: {
      title: 'Current Employees',
      icon: 'mdi:account-group',
      order: 2
    }
  },
  {
    name: 'titles',
    path: '/titles',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/titles/index.vue')
      },
      {
        name: 'titles_detail',
        path: 'detail',
        component: () => import('@/views/titles/detail.vue'),
        meta: {
          title: 'titles_detail'
        }
      }
    ],
    meta: {
      title: 'Titles',
      icon: 'mdi:briefcase',
      order: 3
    }
  },
  {
    name: 'departments',
    path: '/departments',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/departments/index.vue')
      },
      {
        name: 'departments_detail',
        path: 'detail',
        component: () => import('@/views/departments/detail.vue'),
        meta: {
          title: 'departments_detail'
        }
      }
    ],
    meta: {
      title: 'Departments',
      icon: 'mdi:office-building',
      order: 4
    }
  },
  {
    name: 'departments_manager',
    path: '/departments-manager',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/departments-manager/index.vue')
      },
      {
        name: 'departments_manager_history',
        path: 'history',
        component: () => import('@/views/departments-manager/history.vue'),
        meta: {
          title: 'Manager History'
        }
      },
      {
        name: 'departments_manager_detail',
        path: 'detail',
        component: () => import('@/views/departments-manager/detail.vue'),
        meta: {
          title: 'departments_manager_detail'
        }
      }
    ],
    meta: {
      title: 'Departments Manager',
      icon: 'mdi:account-tie',
      order: 5
    }
  },
  {
    name: 'departments_employees',
    path: '/departments-employees',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/departments-employees/index.vue')
      },
      {
        name: 'departments_employees_detail',
        path: 'detail',
        component: () => import('@/views/departments-employees/detail.vue'),
        meta: {
          title: 'departments_employees_detail'
        }
      }
    ],
    meta: {
      title: 'Departments Employees',
      icon: 'mdi:account-multiple',
      order: 6
    }
  },
  {
    name: 'salaries',
    path: '/salaries',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/salaries/index.vue')
      },
      {
        name: 'salaries_detail',
        path: 'detail',
        component: () => import('@/views/salaries/detail.vue'),
        meta: {
          title: 'salaries_detail'
        }
      }
    ],
    meta: {
      title: 'Salaries',
      icon: 'mdi:currency-usd',
      order: 7
    }
  },
  {
    name: 'charts',
    path: '/charts',
    component: () => import('@/layouts/base-layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/charts/headcount.vue')
      },
      {
        name: 'charts_headcount',
        path: 'headcount',
        component: () => import('@/views/charts/headcount.vue'),
        meta: {
          title: 'charts_headcount'
        }
      },
      {
        name: 'charts_current_employee_per_department',
        path: 'current-employee-per-department',
        component: () => import('@/views/charts/current-employee-per-department.vue'),
        meta: {
          title: 'Employee Number'
        }
      },
      {
        name: 'charts_salary_title',
        path: 'salary-title',
        component: () => import('@/views/charts/salary-title.vue'),
        meta: {
          title: 'Salary by Title'
        }
      },
      {
        name: 'charts_gender_role',
        path: 'gender-role',
        component: () => import('@/views/charts/gender-role.vue'),
        meta: {
          title: 'Gender Diversity'
        }
      },
      {
        name: 'charts_distribution',
        path: 'distribution',
        component: () => import('@/views/charts/distribution.vue'),
        meta: {
          title: 'Tenure Distribution'
        }
      }
    ],
    meta: {
      title: 'Charts',
      icon: 'mdi:chart-line',
      order: 8
    }
  }
];
