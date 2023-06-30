const capitalizeWord = (word: string) => {
  const capital = word.charAt(0).toUpperCase();
  return capital + word.slice(1);
};

export const getFilterLabel = (str: string) => {
  return str
    .split('_')
    .map((word) => capitalizeWord(word))
    .join(' ');
};
