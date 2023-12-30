import cn from '@/utils/cn';

const AdminPage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(['grow', className])}>{children}</div>;
};

export default AdminPage;
