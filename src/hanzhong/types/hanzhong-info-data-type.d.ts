export type HanzhongInfoDataType = {
  /** ID used in the storage. */
  id: string;

  /** Label for the information to display */
  label: string;

  /** The current value. This value can be modified to satisfy the current state. */
  currentValue: number;

  /** Projected value. This value cannot be modified and shows what the value
   *  would be with the changes the user makes.
   */
  projectedValue: number;

  /** If any unit should be added after the value. It will be added to both
   *  the current value and the projected value.
   */
  unit?: string;
};
