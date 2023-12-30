import { Outlet } from 'react-router-dom';
import AdminHeader from '../pages/admin/components/AdminHeader';
import AdminSidebar from '../pages/admin/components/AdminSidebar';

export default function AdminLayout() {
  return (
    <>
      <div
        id='rootContent'
        className='min-h-screen bg-f1-dark-bg text-neutral-100 relative'
      >
        <AdminSidebar />
        <div className='flex flex-col ml-64'>
          <AdminHeader />
          <main className='grow flex mt-16'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
