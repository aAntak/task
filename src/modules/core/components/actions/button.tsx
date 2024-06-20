import { Button as HeadlessUIButton } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { Text, TextElementType, TextStyle } from '../typography';

type ButtonProps = {
  onClick?: () => void;
};

const Button = ({ onClick, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <HeadlessUIButton
      onClick={onClick}
      className="w-full	inline-flex items-center justify-center rounded bg-purple py-1.5 py-2 px-3"
    >
      <Text as={TextElementType.span} textStyle={TextStyle.SubtitleMedium}>
        {children}
      </Text>
    </HeadlessUIButton>
  );
};

export { Button };
export type { ButtonProps };
