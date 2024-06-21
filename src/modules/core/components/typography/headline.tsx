import { PropsWithChildren } from 'react';

enum HeadlineLevel {
  'h1' = 'h1',
  'h2' = 'h2',
}

type HeadlineProps = {
  as?: HeadlineLevel;
};

const headlineStyleClasses: Record<HeadlineLevel, string> = {
  [HeadlineLevel.h1]: `text-headline-large`,
  [HeadlineLevel.h2]: `text-headline-medium pb-1`,
};

const Headline = ({
  as: Component = HeadlineLevel.h1,
  children,
}: PropsWithChildren<HeadlineProps>) => (
  <Component
    className={`font-roboto text-grey-92 ${headlineStyleClasses[Component]}`}
  >
    {children}
  </Component>
);

export { Headline, HeadlineLevel };
