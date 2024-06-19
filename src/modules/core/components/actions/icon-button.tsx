import { Icon } from '../icons';

type IconButtonProps = {
  onClick?: () => void;
};

const IconButton = ({ onClick }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon />
    </button>
  );
};

export { IconButton };
