function removeAccents(val: string) {
  return val.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function formatarString(val: string) {
  let stringFormat = removeAccents(val);

  stringFormat = stringFormat.replace(/[^a-zA-Z0-9 ]/g, "");

  stringFormat = stringFormat.toLowerCase();

  stringFormat = stringFormat.replace(/\s+/g, "-");

  stringFormat = stringFormat.replace(/^-/, "");

  return stringFormat;
}
