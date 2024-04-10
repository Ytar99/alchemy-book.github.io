export function isArraysEqual(arrayA, arrayB) {
  const a = [...arrayA];
  const b = [...arrayB];

  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}