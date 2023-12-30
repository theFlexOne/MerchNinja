import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <div id='rootPortal' className='absolute inset-0 -z-10' />
    </>
  );
};

export default RootLayout;
