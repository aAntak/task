import { Transition } from '@headlessui/react';
import { PropsWithChildren, ReactNode } from 'react';

type PageLayoutProps = {
  header?: ReactNode;
};

type PageLayoutAsideProps = {
  isVisible: boolean;
};

const PageLayout = ({
  header,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <div className="bg-black-12 h-full flex flex-col">
      {header}
      <div className="flex flex-row grow relative">{children}</div>
    </div>
  );
};

const PageLayoutAside = ({
  isVisible,
  children,
}: PropsWithChildren<PageLayoutAsideProps>) => {
  return (
    <Transition
      show={isVisible}
      enter="duration-200 cubic-bezier(0.65, 0.05, 0.36, 1)"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="duration-200 cubic-bezier(0.65, 0.05, 0.36, 1)"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="absolute inset-0 flex flex-1 px-2 pt-6 border-r border-black-18 md:max-w-[472px] md:static md:px-6">
        {children}
      </div>
    </Transition>
  );
};

const PageLayoutMain = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-1 px-2 pt-6 md:px-6">{children}</div>;
};

export { PageLayout, PageLayoutAside, PageLayoutMain };
