import Main from './pages/Main';
import Description from './pages/Description';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/description',
    exact: true,
    component: Description,
  },
];

export default routes;
