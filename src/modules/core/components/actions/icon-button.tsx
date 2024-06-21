import { Icon, IconMapMember } from '../icons';

enum IconButtonSize {
  M = 'size-8',
  L = 'size-12',
}

type IconButtonProps = {
  iconName: IconMapMember;
  size?: IconButtonSize;
  onClick?: () => void;
  active?: boolean;
};

const IconButton = ({
  iconName,
  size = IconButtonSize.M,
  active,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md transition-colors ${size} ${
        active ? 'bg-black-22' : ''
      }`}
    >
      <Icon name={iconName} />
    </button>
  );
};

export { IconButton };
export { IconButtonSize };
