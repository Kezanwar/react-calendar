import { cc, ConditionalClass } from './styles.util';

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
