import { ReactNode } from 'react';

type HeaderProps = {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

const Header = ({ leftContent, rightContent }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between md:justify-end pr-2.5 pl-1 h-14 shrink-0 border-b border-black-18 gap-1.5">
      <div>{leftContent}</div>
      <div className="flex min-w-0">{rightContent}</div>
    </header>
  );
};

export { Header };
