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
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/manage-user',
    component: ManageUser,
    name: 'manage-user'
  }
]