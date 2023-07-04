export type ConditionalClass = string | undefined | null;

export const cc = (classes: ConditionalClass[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getColorByName = (letter: string) => {
  const l = letter.toUpperCase();

  const colorByName = () => {
    if (['A', 'N', 'H', 'L', 'Q'].includes(l)) return 'bg-red-200 text-red-800';
    if (['F', 'G', 'T', 'I', 'J'].includes(l))
      return 'bg-yellow-200 text-yellow-800';
    if (['K', 'D', 'Y', 'B', 'O'].includes(l))
      return 'bg-green-200 text-green-800';
    if (['P', 'E', 'R', 'S', 'U'].includes(l))
      return 'bg-purple-200 text-purple-800';
    if (['V', 'W', 'X', 'M', 'Z'].includes(l))
      return 'bg-pink-200 text-pink-800';
    return 'default';
  };

  return colorByName();
};
