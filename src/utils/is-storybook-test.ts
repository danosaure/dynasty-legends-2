/**
 * Checks if the code is running in storybook. This is useful if we want to
 * avoid saving data to an external service.
 *
 * To make this work, this has been added to the `.storybook/preview.tsx`
 * (notice the name was changed from `.ts` to `.tsx` because I added a
 * decorator):
 *
 *    declare global {
 *      interface Window {
 *        IS_STORYBOOK?: boolean;
 *      }
 *    }
 *    window.IS_STORYBOOK = true;
 *
 * The `declare global` block was also added to the app starting point
 * (in `src/main.tsx`).
 *
 * @returns If the code is running in Storybook.
 */

export const isStorybookTest = (): boolean => window.IS_STORYBOOK === true;
