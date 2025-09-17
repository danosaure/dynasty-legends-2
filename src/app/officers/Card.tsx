import { getFactionById } from '../data';
import { CardWrapper } from '../shared';
import type { OfficerType } from '../types';
import { Officer } from '../profiles/Officer';
import { useAppContext } from '../Context';

export type OfficerCardProps = {
  officer: OfficerType;
  selectedFaction: string;
  selectedAptitude: string;
  selectedOfficerType: string;
};

export const OfficerCard = ({ officer, selectedFaction, selectedAptitude, selectedOfficerType }: OfficerCardProps) => {
  const { user } = useAppContext();

  const roster = user.officers ?? {};

  const faction = getFactionById(officer.factionId);
  const isVisible =
    (selectedFaction === '' || selectedFaction === officer.factionId) &&
    (selectedAptitude === '' || selectedAptitude === officer.aptitudeId) &&
    (selectedOfficerType === '' || officer.officerTypeIds.includes(selectedOfficerType));

  const inRoster = roster[officer.id];
  const rosterOpacity = inRoster ? 1 : 0.75;
  const opacity = isVisible ? rosterOpacity : 0.2;

  return (
    <CardWrapper sx={{ backgroundColor: faction.color, opacity }}>
      <Officer id={officer.id} inCard />
    </CardWrapper>
  );
};
