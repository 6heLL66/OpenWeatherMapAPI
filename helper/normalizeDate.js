export default function normalizeDate(date, type, options) {
  return date
    .toLocaleString(type, options)
    .split(' ')
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(' ')
}
