// Lazy Loading Component https://router.vuejs.org/en/advanced/lazy-loading.html
const DashboardLayout = () => System.import(/* webpackChunkName: "dashboard-layout" */
  '../components/Dashboard/Layout/DashboardLayout.vue')
// GeneralViews
const NotFound = () => System.import(/* webpackChunkName: "not-found" */
  '../components/GeneralViews/NotFoundPage.vue')
const Login = () => System.import(/* webpackChunkName: "login" */
  '../components/GeneralViews/Login.vue')
// Admin pages
const Overview = () => System.import(/* webpackChunkName: "overview" */
  'src/components/Dashboard/Views/Overview.vue')
const UserProfile = () => System.import(/* webpackChunkName: "user-profile" */
  'src/components/Dashboard/Views/UserProfile.vue')
const Notifications = () => System.import(/* webpackChunkName: "notifications" */
  'src/components/Dashboard/Views/Notifications.vue')
const Icons = () => System.import(/* webpackChunkName: "icons" */
  'src/components/Dashboard/Views/Icons.vue')
const Maps = () => System.import(/* webpackChunkName: "maps" */
  'src/components/Dashboard/Views/Maps.vue')
const Typography = () => System.import(/* webpackChunkName: "typography" */
  'src/components/Dashboard/Views/Typography.vue')
const TableList = () => System.import(/* webpackChunkName: "table-list" */
  'src/components/Dashboard/Views/TableList.vue')
const Puma = () => System.import(/* webpackChunkName: "puma" */
  'src/components/Dashboard/Views/Puma.vue')

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/login'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      },
      {
        path: 'puma-member',
        name: 'puma member',
        component: Puma
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
