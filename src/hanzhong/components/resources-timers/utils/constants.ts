export const RESOURCES_TIMERS_KEY = 'hanzhong--resources-timers';
export const RESOURCES_TIMERS_KEYS = {
  SHOW_CLOCKS: `${RESOURCES_TIMERS_KEY}--show-clocks`,
  INVENTORY_LUMBER: `${RESOURCES_TIMERS_KEY}--inventory--lumber`,
  INVENTORY_GRAINS: `${RESOURCES_TIMERS_KEY}--inventory--grains`,
  INVENTORY_IRON: `${RESOURCES_TIMERS_KEY}--inventory--iron`,
} as const;

export const TIME_KEYS: Record<string, string> = {
  DONT_KNOW: '¯\\_(ツ)_/¯',
  RIGHT_NOW: 'NOW',
  MAX_LEVEL_REACHED: 'MAX_LEVEL_REACHED',
  TOO_LONG: '24h+',
} as const;
