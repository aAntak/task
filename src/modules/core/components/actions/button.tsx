import { Button as HeadlessUIButton } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { Text, TextElementType, TextStyle } from '../typography';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button = ({
  disabled,
  onClick,
  children,
  fullWidth,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <HeadlessUIButton
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded bg-purple py-1.5 py-2 px-3 disabled:opacity-40 ${
        fullWidth ? 'w-full' : ''
      }`}
      disabled={disabled}
    >
      <Text as={TextElementType.span} textStyle={TextStyle.SubtitleMedium}>
        {children}
      </Text>
    </HeadlessUIButton>
  );
};

export { Button };
export type { ButtonProps };
