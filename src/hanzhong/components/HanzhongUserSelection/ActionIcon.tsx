import { HanzhongUserSelectionIcon } from './icon';

export type HanzhongUserSelectionActionIconProps = {
  username: string;
};

export const HanzhongUserSelectionActionIcon = ({ username }: HanzhongUserSelectionActionIconProps) => {
  return (
    <>
      {username}
      <HanzhongUserSelectionIcon label="Select user" withTooltip />;
    </>
  );
};
