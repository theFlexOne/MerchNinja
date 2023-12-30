const TestPage = () => {
  return (
    <div className='min-h-screen bg-f1-dark-bg relative flex'>
      <div className='flex flex-col fixed inset-y-0 left-0 w-80 bg-fuchsia-800/80'>
        Sidebar
      </div>
      <div className='flex flex-col h-[40000px]'>
        <div className='bg-teal-800/80 fixed top-0 left-80 right-0 p-8'>
          Header
        </div>
      </div>
    </div>
  );
};

export default TestPage;
