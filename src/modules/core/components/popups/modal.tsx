import { PropsWithChildren } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { IconButton } from '../actions';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};
const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <Transition
      show={isOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black-18 bg-opacity-70 z-50 flex items-center justify-center">
          <DialogPanel className="w-full max-w-[600px] rounded-md bg-black-12">
            <div className="h-[44px] flex justify-end items-end px-2.5 pt-2.5 pb-2">
              <IconButton onClick={onClose} />
            </div>
            <div className="px-6 pb-10">{children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export { Modal };
