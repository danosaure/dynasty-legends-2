import { useEffect, useState, type ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { useHanzhongContext } from './HanzhongContext';

export type HanzhongContextUserCheckboxProps = {
  id: string;
};

export const HanzhongContextUserCheckbox = ({ id }: HanzhongContextUserCheckboxProps) => {
  const { user, onChange } = useHanzhongContext();

  const [checked, setChecked] = useState<boolean>(Boolean(user[id] ?? 0));

  useEffect(() => {
    setChecked(Boolean(user[id] ?? 0));
  }, [user, id]);

  const checkboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.checked ? 1 : 0);
    setChecked(e.target.checked);
  };

  return <Checkbox checked={checked} onChange={checkboxChanged} />;
};
