function isEmail(email) {
  const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!regexp.test(email)) {
    return false;
  }

  return true;
}
