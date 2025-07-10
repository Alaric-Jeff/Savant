import fastify from "fastify";

declare module '@fastify/oauth2' {
  export const FACEBOOK_CONFIGURATION: {
    authorizeHost: string;
    authorizePath: string;
    tokenHost: string;
    tokenPath: string;
  };

  export const GITHUB_CONFIGURATION: {
    authorizeHost: string;
    authorizePath: string;
    tokenHost: string;
    tokenPath: string;
  };

  export const GOOGLE_CONFIGURATION: {
    authorizeHost: string;
    authorizePath: string;
    tokenHost: string;
    tokenPath: string;
  };
}