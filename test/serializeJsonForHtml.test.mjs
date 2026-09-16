import assert from "node:assert/strict";
import test from "node:test";

import { serializeJsonForHtml } from "../src/utils/serializeJsonForHtml.mjs";

test("keeps ordinary CMS content valid and round-trippable", () => {
  const content = { title: "Arianna · Yīng", nested: ["Sanda", 16, true] };
  const serialized = serializeJsonForHtml(content);

  assert.deepEqual(JSON.parse(serialized), content);
});

test("cannot terminate the embedding script element", () => {
  const payload = {
    title: '</script><script>alert("cms-xss")</script>',
    detail: "A&B > C < D\u2028next\u2029last",
  };
  const serialized = serializeJsonForHtml(payload);

  assert.equal(serialized.includes("<"), false);
  assert.equal(serialized.includes(">"), false);
  assert.equal(serialized.includes("&"), false);
  assert.equal(serialized.includes("\u2028"), false);
  assert.equal(serialized.includes("\u2029"), false);
  assert.deepEqual(JSON.parse(serialized), payload);
});
