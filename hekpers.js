export const getDescription = (text) => {
  console.log(text);
  if (text.length > 10) {
    return text.substring(0, 10) + "...";
  }
  return text;
}
