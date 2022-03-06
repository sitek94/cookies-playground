export function parseCookies(cookies) {
  return Object.entries(cookies).map(([name, value]) => ({
    name,
    value,
  }))
}
