import { PropsWithChildren } from 'react';
import { Text, TextElementType, TextStyle } from '../typography';

enum LinkTarget {
  Blank = '_blank',
  Self = '_self',
}

type LinkProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  href: string;
  onClick?: () => void;
  target?: LinkTarget;
};

const Link = ({
  href,
  disabled,
  fullWidth,
  children,
  onClick,
  target = LinkTarget.Self,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      tabIndex={disabled ? -1 : 0}
      target={target}
      aria-disabled={disabled}
      rel={target === LinkTarget.Blank ? 'noopener' : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded bg-purple py-1.5 py-2 px-3 ${
        disabled ? 'opacity-40 pointer-events-none' : ''
      } ${fullWidth ? 'w-full' : ''}`}
    >
      <Text as={TextElementType.span} textStyle={TextStyle.SubtitleMedium}>
        {children}
      </Text>
    </a>
  );
};

export { Link, LinkTarget };
export type { LinkProps };
