import cn from '@/utils/cn';
import { createPortal } from 'react-dom';

const Dialog = ({
  open,
  dialogRef,
  className,
  children,
  portalId = 'rootPortal',
  onCancel,
  ...rest
}: DialogProps) => {
  className = cn(['bg-transparent backdrop:bg-black/40', className]);

  return createPortal(
    <dialog
      ref={dialogRef}
      open={open}
      className={className}
      onCancel={onCancel}
      {...rest}
    >
      {children}
    </dialog>,
    document.getElementById(portalId) as HTMLElement
  );
};

export type DialogProps = {
  dialogRef?: React.Ref<HTMLDialogElement>;
  portalId?: string;
  onCancel?: () => void;
} & React.HTMLProps<HTMLDialogElement>;

export default Dialog;
