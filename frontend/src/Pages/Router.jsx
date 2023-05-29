
import Loadable from '../components/Loadable'
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './Layout/DashboardLayout';
//import SimpleLayout from './layout/simple';
import DashboardAppPage from './Dashboard/Dashboard';
import BlogPage from './Dashboard/BlogPage';
import UserPage from './Dashboard/UserPage';
import ProductsPage from './Dashboard/ProductsPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: 'home', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'books', element: <ProductsPage /> },
        { path: 'addBook', element: <BlogPage /> },
      ],
    },
    
  ]);

  return routes;
}
