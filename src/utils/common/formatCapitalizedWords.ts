export default function formatCapitalizedWords(key: string): string {
  const words = key.split('_')
  const capitalizedWords = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  return capitalizedWords
}
