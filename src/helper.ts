export function formatId(idString: string) {
  return idString
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/:/g, "")
    .replace(/&/g, "and");
  // .replace(/./g, "")
}
// 4XWgV?mUi/(5hh/
