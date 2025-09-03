import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

import { NO_TECH_ID } from '../constants';
import { useHanzhongTechsContext } from '../context';
import { HanzhongTechsTechCardImage } from '../HanzhongTechsTechCardImage';
import { useHanzhongContext } from '../../HanzhongContext';
import { generateLevelsToDisplay } from './generate-levels-to-display';
import { HanzhongTechsTechInfoLevel } from './level';
import Typography from '@mui/material/Typography';
import { HanzhongTechsTechInfoRequirements } from './InfoRequirements';
import type { HanzhongTechType } from '../TechType';
import type { HanzhongTechsTechLevelDisplayType } from '../TechsTechLevelDisplayType';
import { getTechById } from '../techs--data';

export type HanzhongTechsTechInfoProps = {
  onClose: () => void;
};

export const HanzhongTechsTechInfo = ({ onClose }: HanzhongTechsTechInfoProps) => {
  const { user } = useHanzhongContext();
  const { techId } = useHanzhongTechsContext();

  const tech: HanzhongTechType | null = getTechById(techId);

  if (tech === null) {
    return (
      <Dialog open={techId !== NO_TECH_ID} onClose={() => onClose()}>
        Unknown techId="${techId}".
      </Dialog>
    );
  }

  const levels = generateLevelsToDisplay(tech.levels, user[techId] ?? 0);

  const modalContent =
    levels.length === 0 ? (
      <Typography color="success">All completed.</Typography>
    ) : (
      levels.map((level: HanzhongTechsTechLevelDisplayType, idx: number) => (
        <HanzhongTechsTechInfoLevel key={`${techId}--${idx + 1}`} userLevel={user[techId] ?? 0} info={level} />
      ))
    );

  return (
    <Dialog
      open={techId !== NO_TECH_ID}
      onClose={() => onClose()}
      aria-labelledby="hanzhong--techs--tech--name"
      aria-describedby="hanzhong--techs--tech--description"
    >
      <DialogTitle
        id="hanzhong--techs--tech--name"
        sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '14px', md: '16px' }, p: { xs: 1, md: 2 } }}
      >
        <Box sx={{ width: { xs: '20px', md: '40px' }, pr: '5px' }}>
          <HanzhongTechsTechCardImage assetImage={tech.assetPath} />
        </Box>
        {tech.label}
      </DialogTitle>
      <DialogContent sx={{ fontSize: { xs: '13px', md: '15px' }, p: { xs: 1, md: 2 } }}>
        <DialogContentText id="hanzhong--techs--tech--description" sx={{ fontSize: { xs: '13px', md: '15px' } }}>
          <Typography variant="body1">{tech.description}</Typography>
          <HanzhongTechsTechInfoRequirements requirements={tech.requirements} />
        </DialogContentText>

        <Grid size={12} container sx={{ mt: '10px' }} spacing={1}>
          {modalContent}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
