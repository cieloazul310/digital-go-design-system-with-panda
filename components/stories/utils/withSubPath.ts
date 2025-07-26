export function withSubPath(href: string) {
  if (process.env.NODE_ENV === "production") {
    return `/digital-go-design-system-with-panda/${href}`;
  }
  return href;
}
