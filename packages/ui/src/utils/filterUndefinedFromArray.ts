export const filterUndefinedFromArray = <T extends unknown>(...args: T[]) =>
  args.length === 0 ? (args.filter((v) => v !== undefined) as Exclude<T, undefined>[]) : undefined;
