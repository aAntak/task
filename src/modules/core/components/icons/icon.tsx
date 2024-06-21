import { ReactComponent as Exit } from './assets/exit.svg';
import { ReactComponent as Schedule } from './assets/schedule.svg';

// TODO: This should support more icons
const iconMap = {
  exit: Exit,
  schedule: Schedule,
};

type IconMapMember = keyof typeof iconMap;

type IconProps = {
  name: IconMapMember;
};

const Icon = ({ name }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent className="color-grey-50" />;
};

export { Icon, iconMap };
export type { IconMapMember };
