const splitList = (value = "") => String(value)
  .split(",")
  .map((item) => item.trim().toLowerCase())
  .filter(Boolean);

export function authorizeAdmin(context) {
  const user = context?.clientContext?.user;
  if (!user) return { ok: false, statusCode: 401, error: "Accesso non autorizzato" };

  const roles = [
    ...(Array.isArray(user.app_metadata?.roles) ? user.app_metadata.roles : []),
    ...(Array.isArray(user.app_metadata?.role) ? user.app_metadata.role : [user.app_metadata?.role])
  ].filter(Boolean).map((role) => String(role).toLowerCase());
  const allowedRoles = splitList(process.env.ADMIN_ALLOWED_ROLES || "admin,editor");
  const allowedEmails = splitList(process.env.ADMIN_ALLOWED_EMAILS);
  const email = String(user.email || "").trim().toLowerCase();

  const roleAllowed = roles.some((role) => allowedRoles.includes(role));
  const emailAllowed = Boolean(email) && allowedEmails.includes(email);
  if (!roleAllowed && !emailAllowed) {
    return { ok: false, statusCode: 403, error: "Account non abilitato alla console" };
  }

  return { ok: true, user };
}
