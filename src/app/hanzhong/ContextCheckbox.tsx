import { useEffect, useState, type ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { useHanzhongContext } from './HanzhongContext';
import { useTheme } from '@mui/material/styles';
import type { HanzhongUserSectionName } from './types';

export type HanzhongContextUserCheckboxProps = {
  section: HanzhongUserSectionName;
  id: string;
};

export const HanzhongContextUserCheckbox = ({ section, id }: HanzhongContextUserCheckboxProps) => {
  const theme = useTheme();
  const { getValue, onChange } = useHanzhongContext();

  const [checked, setChecked] = useState<boolean>(Boolean(getValue(section, id)));

  useEffect(() => {
    setChecked(Boolean(getValue(section, id)));
  }, [getValue, section, id]);

  const checkboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(section, id, e.target.checked ? 1 : 0);
    setChecked(e.target.checked);
  };

  return <Checkbox checked={checked} onChange={checkboxChanged} style={{ color: theme.palette.primary.main }} />;
};
