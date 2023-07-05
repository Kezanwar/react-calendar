import { cc, ConditionalClass, getColorByName } from './styles.util';

describe('cc', () => {
  it('returns a string with the non-empty values joined by a space', () => {
    const classes: ConditionalClass[] = [
      'class1',
      undefined,
      null,
      'class2',
      ''
    ];

    const result = cc(classes);

    expect(result).toBe('class1 class2');
  });

  it('returns an empty string if all values are empty', () => {
    const classes: ConditionalClass[] = [undefined, null, ''];

    const result = cc(classes);

    expect(result).toBe('');
  });

  it('returns an empty string if the input array is empty', () => {
    const classes: ConditionalClass[] = [];

    const result = cc(classes);

    expect(result).toBe('');
  });

  it('returns a single non-empty value as a string', () => {
    const classes: ConditionalClass[] = ['class1'];

    const result = cc(classes);

    expect(result).toBe('class1');
  });
});

describe('getColorByName', () => {
  it('should return the correct color classes for each letter', () => {
    expect(getColorByName('A')).toBe('bg-red-200 dark:bg-red-300 text-red-800');
    expect(getColorByName('N')).toBe('bg-red-200 dark:bg-red-300 text-red-800');
    expect(getColorByName('H')).toBe('bg-red-200 dark:bg-red-300 text-red-800');
    expect(getColorByName('L')).toBe('bg-red-200 dark:bg-red-300 text-red-800');
    expect(getColorByName('Q')).toBe('bg-red-200 dark:bg-red-300 text-red-800');

    expect(getColorByName('F')).toBe(
      'bg-yellow-200 dark:bg-yellow-300 text-yellow-800'
    );
    expect(getColorByName('G')).toBe(
      'bg-yellow-200 dark:bg-yellow-300 text-yellow-800'
    );
    expect(getColorByName('T')).toBe(
      'bg-yellow-200 dark:bg-yellow-300 text-yellow-800'
    );
    expect(getColorByName('I')).toBe(
      'bg-yellow-200 dark:bg-yellow-300 text-yellow-800'
    );
    expect(getColorByName('J')).toBe(
      'bg-yellow-200 dark:bg-yellow-300 text-yellow-800'
    );

    expect(getColorByName('K')).toBe(
      'bg-green-200 dark:bg-green-300 text-green-800'
    );
    expect(getColorByName('D')).toBe(
      'bg-green-200 dark:bg-green-300 text-green-800'
    );
    expect(getColorByName('Y')).toBe(
      'bg-green-200 dark:bg-green-300 text-green-800'
    );
    expect(getColorByName('B')).toBe(
      'bg-green-200 dark:bg-green-300 text-green-800'
    );
    expect(getColorByName('O')).toBe(
      'bg-green-200 dark:bg-green-300 text-green-800'
    );

    expect(getColorByName('P')).toBe(
      'bg-purple-200 dark:bg-purple-300 text-purple-800'
    );
    expect(getColorByName('E')).toBe(
      'bg-purple-200 dark:bg-purple-300 text-purple-800'
    );
    expect(getColorByName('R')).toBe(
      'bg-purple-200 dark:bg-purple-300 text-purple-800'
    );
    expect(getColorByName('S')).toBe(
      'bg-purple-200 dark:bg-purple-300 text-purple-800'
    );
    expect(getColorByName('U')).toBe(
      'bg-purple-200 dark:bg-purple-300 text-purple-800'
    );

    expect(getColorByName('V')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );
    expect(getColorByName('W')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );
    expect(getColorByName('X')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );
    expect(getColorByName('M')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );
    expect(getColorByName('Z')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );
    expect(getColorByName('C')).toBe(
      'bg-pink-200 dark:bg-pink-300 text-pink-800'
    );

    expect(getColorByName('')).toBe(
      'bg-cyan-200 dark:bg-cyan-300 text-cyan-800'
    );
  });
});
