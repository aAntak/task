import { PropsWithChildren } from 'react';

enum HeadlineLevel {
  'h1' = 'h1',
  'h2' = 'h2',
}

type HeadlineProps = {
  as?: HeadlineLevel;
};

const baseClass = 'font-roboto text-grey-92';

const headlineStyleClasses: Record<HeadlineLevel, string> = {
  [HeadlineLevel.h1]: `${baseClass} text-headlineLarge font-medium`,
  [HeadlineLevel.h2]: `${baseClass} text-headlineMedium font-medium pb-1`,
};

const Headline = ({
  as: Component = HeadlineLevel.h1,
  children,
}: PropsWithChildren<HeadlineProps>) => (
  <Component className={headlineStyleClasses[Component]}>{children}</Component>
);

export { Headline, HeadlineLevel };
