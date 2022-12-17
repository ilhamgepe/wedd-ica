export default function truncate(str: string, num: number, truncateText?: any) {
  const optionTruncate = truncateText ?? "...";
  if (str.length > num) {
    return str.slice(0, num) + optionTruncate;
  } else {
    return str;
  }
}
