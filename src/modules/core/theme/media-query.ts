import { ScreenSize } from './theme';

function getMediaQuery(screenSize: ScreenSize): string {
  const screenSizeMatch = Number(screenSize.replace('px', ''));
  return `screen and (min-width: ${screenSizeMatch}px)`;
}

export { getMediaQuery };
