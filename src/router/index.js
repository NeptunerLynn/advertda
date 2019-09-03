import Menu from '@/components/menu'
import Dashboard from '@/views/dashboard'
import SidebarType from '@/views/sidebarType'
import PageLayouts from '@/views/pageLayouts'
import Inbox from '@/views/inbox'
import Ticket from '@/views/ticket'
import Extra from '@/views/extra'


let routes = [
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-menu',
    children: [
      { path: '/dashboard', component: Dashboard, name: 'Dashboard' }
    ]
  },
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-s-operation',
    children: [
      { path: '/sidebar_type', component: SidebarType, name: 'Sidebar Type' }
    ]
  },
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-document-copy',
    children: [
      { path: '/page_layouts', component: PageLayouts, name: 'Page Layouts' }
    ]
  },
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-takeaway-box',
    children: [
      { path: '/inbox', component: Inbox, name: 'Inbox' }
    ]
  },
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-collection-tag',
    children: [
      { path: '/ticket', component: Ticket, name: 'Ticket' }
    ]
  },
  {
    path: '/',
    component: Menu,
    name: '',
    leaf: true,//只有一个节点
    icon: 'el-icon-data-line',
    children: [
      { path: '/extra', component: Extra, name: 'Extra' }
    ]
  }
]

export default routes
