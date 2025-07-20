import { type Context, useContext } from 'react';

export class UseSafeContextError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UseSafeContextError';
  }
}

export const useSafeContext = <T>(contextObject: Context<T>) => {
  if (!contextObject.displayName) {
    throw new UseSafeContextError('Context.displayName must be set.');
  }

  const context = useContext<T>(contextObject);
  if (context === undefined) {
    const contextName = contextObject.displayName.replace(/Context$/, '');
    throw new UseSafeContextError(`use${contextName} must be inside of <${contextObject.displayName}.Provider>.`);
  }

  return context as NonNullable<T>;
};
