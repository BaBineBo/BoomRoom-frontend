// https://stackoverflow.com/questions/49296458/capitalize-first-letter-of-a-string-using-angular-or-typescript
export const titleCaseWord = (word: string) => {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
};
