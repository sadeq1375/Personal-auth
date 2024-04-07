/**
 * an array of routs accessible to public
 * @TYPE {STRING[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * an array of routs for authentication
 * @TYPE {STRING[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The prefix for api authentication routes
 * @TYPE {STRING}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect after login
 * @TYPE {STRING}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
