export class LeitnerSystemError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'LeitnerSystemError';
  }
}
