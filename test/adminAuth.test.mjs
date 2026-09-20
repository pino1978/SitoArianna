import test from "node:test";
import assert from "node:assert/strict";
import { authorizeAdmin } from "../netlify/functions/_admin-auth.mjs";

const context = (user) => ({ clientContext: user ? { user } : {} });

test("rifiuta richieste anonime con 401", () => {
  assert.equal(authorizeAdmin(context()).statusCode, 401);
});

test("rifiuta utenti autenticati senza ruolo o allowlist con 403", () => {
  const result = authorizeAdmin(context({ email: "guest@example.test", app_metadata: {} }));
  assert.equal(result.statusCode, 403);
});

test("accetta i ruoli editoriali configurati", () => {
  const result = authorizeAdmin(context({ email: "editor@example.test", app_metadata: { roles: ["editor"] } }));
  assert.equal(result.ok, true);
});

test("accetta una email presente nella allowlist", () => {
  const previous = process.env.ADMIN_ALLOWED_EMAILS;
  process.env.ADMIN_ALLOWED_EMAILS = "owner@example.test";
  try {
    const result = authorizeAdmin(context({ email: "OWNER@example.test", app_metadata: {} }));
    assert.equal(result.ok, true);
  } finally {
    if (previous === undefined) delete process.env.ADMIN_ALLOWED_EMAILS;
    else process.env.ADMIN_ALLOWED_EMAILS = previous;
  }
});
