export function isCyrillic(char) {
  return (char >= "а" && char <= "я") || (char >= "А" && char <= "Я");
}

export const isNumber = (char) => char >= "0" && char <= "9";
