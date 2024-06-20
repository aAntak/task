import { PropsWithChildren } from 'react';

enum TextStyle {
  BodyText = 'BodyText',
  Subtitle = 'Subtitle',
  SubtitleMedium = 'SubtitleMedium',
  SubtitleSmall = 'SubtitleSmall',
}

enum TextElementType {
  'p' = 'p',
  'span' = 'span',
}

// TODO: Ideally should support all colors from the theme. This should not live here as well.
enum TextColor {
  White = 'text-white',
  Yellow1 = 'text-yellow-1',
  Grey50 = 'text-grey-50',
}

type TextProps = {
  textStyle?: TextStyle;
  as?: TextElementType;
  color?: TextColor;
};

const baseClass = 'font-roboto';

const textStyleClasses: Record<TextStyle, string> = {
  [TextStyle.BodyText]: `${baseClass} text-body font-normal`,
  [TextStyle.Subtitle]: `${baseClass} text-subtitle font-normal pb-2.5`,
  [TextStyle.SubtitleMedium]: `${baseClass} text-subtitleMedium font-medium`,
  [TextStyle.SubtitleSmall]: `${baseClass} text-subtitleSmall font-medium`,
};

const Text = ({
  textStyle = TextStyle.BodyText,
  as: Component = TextElementType.p,
  color = TextColor.White,
  children,
}: PropsWithChildren<TextProps>) => (
  <Component className={`${textStyleClasses[textStyle]} ${color}`}>
    {children}
  </Component>
);

export { Text, TextStyle, TextElementType, TextColor };
