import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'COVID-19疫情信息平台', icon: 'dashboard' }
    }]
  },

  {
    path: '/line',
    component: Layout,
    redirect: '/line/china',
    name: 'Line',
    meta: {
      title: '疫情数据图表',
      icon: 'line'
    },
    children: [
      {
        path: 'chinaCase',
        component: () => import('@/views/line/china/index'),
        name: 'ChinaCase',
        meta: { title: '全国', icon: 'china' }
      },
      {
        path: 'hubeiCase',
        component: () => import('@/views/line/hubei/index'),
        name: 'HubeiCase',
        meta: { title: '湖北', icon: 'hubei' }
      },
      {
        path: 'wuhanCase',
        component: () => import('@/views/line/wuhan/index'),
        name: 'WuhanCase',
        meta: { title: '武汉', icon: 'han' }
      }
    ]
  },

  {
    path: '/time',
    component: Layout,
    redirect: '/time/provinceTrend',
    name: 'Time',
    meta: {
      title: '疫情发展趋势图',
      icon: 'trend'
    },
    children: [
      {
        path: 'provinceTrend',
        component: () => import('@/views/time/province/index'),
        name: 'ProvinceTrend',
        meta: { title: '全国', icon: 'china' }
      },
      {
        path: 'hubeiTrend',
        component: () => import('@/views/time/hubei/index'),
        name: 'HubeiTrend',
        meta: { title: '湖北', icon: 'hubei' }
      }
    ]
  },

  {
    path: '/aid',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Aid',
        component: () => import('@/views/aid/index'),
        meta: { title: '援鄂医疗队', icon: 'aid' }
      }
    ]
  },

  {
    path: '/move',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Move',
        component: () => import('@/views/move/index'),
        meta: { title: '离汉人口迁徙', icon: 'move' }
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Work',
        component: () => import('@/views/work/index'),
        meta: { title: '复工指数', icon: 'work' }
      }
    ]
  },
  {
    path: '/hospital',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'hospital',
        component: () => import('@/views/hospital/index'),
        meta: { title: '医疗机构', icon: 'hospital' }
      }
    ]
  },
  {
    path: '/economy',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Economy',
        component: () => import('@/views/economy/index'),
        meta: { title: '经济运行', icon: 'economy' }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Test',
        component: () => import('@/views/test/index'),
        meta: { title: '测试', icon: 'economy' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  mode: 'hash',
  base: '/ncov/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
