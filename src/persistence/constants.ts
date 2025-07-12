export const DATABASE_NAME = '@danosaure--dynasty-legends-2';

export const STORE_NAMES = {
  USER_DATA: 'users_data',
} as const;

export const INDICES_NAMES = {
  [STORE_NAMES.USER_DATA]: {
    USERNAME: 'users_data--username',
  },
};
