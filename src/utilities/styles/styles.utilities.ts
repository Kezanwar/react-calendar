type ConditionalClass = string | undefined | null;

export const cndClass = (classes: ConditionalClass[]): string => {
  return classes.filter(Boolean).join(' ');
};
