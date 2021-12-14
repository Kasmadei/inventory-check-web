export const propertyOf = <TObj>(name: keyof TObj): keyof TObj => name;

export const delay = (ms: number): Promise<unknown> => {
  return new Promise((res) => setTimeout(res, ms));
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
