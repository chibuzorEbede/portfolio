export function formatString(s) {
  //given a string return the string if the number of characters is less than 118 else return the initial 118 chars with trailing ...
  let text = s;
  text.length > 118 ? (text = text.slice(0, 118) + "...") : text;

  return text;
}

export function obfuscateEmail() {
  const email = "chibuzorebede";
  let part1 = btoa(email);
  return atob(part1);
}

export const hardCodeMail = "Y2hpYnV6b3JlYmVkZQ==";
