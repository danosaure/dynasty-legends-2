import { useTheme } from '@mui/material/styles';

export type HanzhongSidePanelTabsItemLabelProps = {
  label: string;
  isActive: boolean;
};
export const HanzhongSidePanelTabsItemLabel = ({ label, isActive }: HanzhongSidePanelTabsItemLabelProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontWeight: isActive ? 'bold' : 'inherit',
        borderRight: isActive ? '5px solid' : 'none',
        color: isActive ? theme.palette.success.main : theme.palette.primary.main,
        width: '100%',
        paddingRight: '3px',
      }}
    >
      {label}
    </div>
  );
};
