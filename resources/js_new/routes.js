import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import ManageUser from './pages/ManageUser';

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard'
  }
]