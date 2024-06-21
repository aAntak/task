import { Color } from '../../../core/theme';
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

type TextProps = {
  textStyle?: TextStyle;
  as?: TextElementType;
  color?: Color;
};

const textStyleVariants: Record<TextStyle, string> = {
  [TextStyle.BodyText]: `text-body`,
  [TextStyle.Subtitle]: `text-subtitle`,
  [TextStyle.SubtitleMedium]: `text-subtitle-medium`,
  [TextStyle.SubtitleSmall]: `text-subtitle-small`,
};

const textColorVariants: Record<Color, string> = {
  [Color.White]: 'text-white',
  [Color.Yellow1]: 'text-yellow-1',
  [Color.Yellow2]: 'text-yellow-2',
  [Color.Grey50]: 'text-grey-50',
  [Color.Grey92]: 'text-grey-92',
  [Color.Purple]: 'text-purple',
  [Color.LightPurple]: 'text-light-purple',
  [Color.Red]: 'text-red',
  [Color.Black26]: 'text-black-26',
  [Color.Black22]: 'text-black-22',
  [Color.Black18]: 'text-black-18',
  [Color.Black15]: 'text-black-15',
  [Color.Black12]: 'text-black-12',
};

const Text = ({
  textStyle = TextStyle.BodyText,
  as: Component = TextElementType.p,
  color = Color.White,
  children,
}: PropsWithChildren<TextProps>) => (
  <Component
    className={`font-roboto ${textStyleVariants[textStyle]} ${textColorVariants[color]}`}
  >
    {children}
  </Component>
);

export { Text, TextStyle, TextElementType };
