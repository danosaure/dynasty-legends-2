import type { OfficerTypeType } from '../types';
import { OfficerSkill } from './OfficerSkill';

export type OfficerSkillsProps = {
  officerSkills: OfficerTypeType[];
};

export const OfficerSkills = ({ officerSkills }: OfficerSkillsProps) =>
  officerSkills.map((officerSkill) => <OfficerSkill key={officerSkill.name} officerSkill={officerSkill} />);
