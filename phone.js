function inputPhone(phone) {
  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/(\d{2})/, '($1) ');

  const isMobilePhone = /^[(][0-9][0-9][)][\s][9]/.test(phone);

  if (isMobilePhone) {
    const typePhone = phone.length <= 13 ? '($1) $2' : '($1) $2 ';

    phone = phone.replace(/\D/g, '');
    phone = phone.replace(/(\d{2})(\d{1})/, typePhone);
    phone = phone.replace(/(\d{4})/, '$1-');
    phone = phone.replace(/(\d{4})/, '$1');

  } else {
    phone = phone.replace(/(\d{4})/, '$1-');
    phone = phone.replace(/(\d{4})/, '$1');
  }

  if(phone.slice(-1) == '-') {
    phone = phone.slice(0, -1);
  }

  return phone;
}