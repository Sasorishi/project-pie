export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const toLowerCase = (str: string): string => {
  return str.toLowerCase();
};
