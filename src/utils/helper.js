export const camelCaseToCapitalize = word => {
  return word
    .split(/(?=[A-Z])/)
    .map(s => s[0].toUpperCase() + s.slice(1) + ' ')
    .join('');
};
