export function regexPassword(password) {
  const regexp = /^[a-zA-Z0-9@!#$*]+$/i;

  if (!regexp.test(value)) {
    return value.slice(0, -1);
  }

  return value;
}