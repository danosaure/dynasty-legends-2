import type { HanzhongTechResourceType } from '../../../types';
import { HanzhongTechsTechInfoLevelInfoItem } from './LevelInfoItem';
import { LABEL_BY_RESOURCE_ATTRIBUTE } from '../../constants';

export type HanzhongTechsTechInfoLevelResourcesProps = {
  resources: HanzhongTechResourceType;
};

export const HanzhongTechsTechInfoLevelResources = ({ resources }: HanzhongTechsTechInfoLevelResourcesProps) => {
  return (
    <>
      {[
        ['lumber', resources.lumber],
        ['grains', resources.grains],
        ['iron', resources.iron],
      ].map((info) => (
        <HanzhongTechsTechInfoLevelInfoItem key={info[0]} label={LABEL_BY_RESOURCE_ATTRIBUTE[info[0]]} value={info[1]} />
      ))}
    </>
  );
};
