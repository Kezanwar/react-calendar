export type ConditionalClass = string | undefined | null;

export const cc = (classes: ConditionalClass[]): string => {
  return classes.filter(Boolean).join(' ');
};
