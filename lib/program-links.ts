export function programLink(id: string) {
  const anchor = `program-${id}`
  return { anchor, path: `/service-programs#${encodeURIComponent(anchor)}` }
}
