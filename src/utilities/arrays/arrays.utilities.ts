export function accessNegativeIndexProxy<T>(arr: T[]): T[] {
  return new Proxy(arr, {
    get(target, prop) {
      let num = Number(prop);
      if (!isNaN(num)) {
        if (num < 0) {
          num += target.length;
        }
      }
      return target[num];
    }
  });
}
