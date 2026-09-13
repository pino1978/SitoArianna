/**
 * Serializes data for embedding inside an HTML <script> element.
 *
 * JSON.stringify alone is unsafe in this context because a CMS value containing
 * `</script>` can terminate the element and inject arbitrary markup/script.
 */
export function serializeJsonForHtml(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003C")
    .replace(/>/g, "\\u003E")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
