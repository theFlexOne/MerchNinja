import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/app/home/Home';
import Login from '../pages/app/login/Login';
import Register from '../pages/app/register/Register';
import ShopPage from '../pages/app/shop/ShopPage';
import AdminRoutes from './AdminRoutes';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import AdminLayout from '../layouts/AdminLayout';
import NotFoundPage from '../pages/PageNotFound';
import CreateProduct from '../pages/admin/products/pages/CreateProduct';
import ProductsCatalog from '../pages/admin/products/ProductsCatalog';
import TestPage from '@/pages/TestPage';
import TestPage2 from '@/pages/TestPage2';
import RootLayout from '@/layouts/RootLayout';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/register',
            element: <Register />,
          },
          {
            path: '/shop',
            element: <ShopPage />,
          },
        ],
      },
      {
        element: <AdminRoutes />,
        path: '/admin',
        children: [
          {
            element: <AdminLayout />,
            children: [
              {
                index: true,
                element: <Navigate to='dashboard' />,
              },
              {
                path: 'dashboard',
                element: <Dashboard />,
              },
              {
                path: 'products',
                element: <ProductsCatalog />,
              },
              {
                path: 'products/add',
                element: <CreateProduct />,
              },
            ],
          },
        ],
      },
      {
        path: '/test',
        element: <TestPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
