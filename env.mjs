// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    BUILD_MODE: z.boolean(),
    APP_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(32),
    USER_SETTINGS_JWT_SECRET: z.string().min(32),

    STRAPI_API_URL: z.string().url(),
    STRAPI_API_TOKEN: z.string().length(256),
    STRAPI_CDN_PROTOCOL: z.string().min(1),
    STRAPI_CDN_HOST: z.string().min(1),
    STRAPI_CDN_PORT: z.string().min(1),
    STRAPI_CDN_PATHNAME: z.string().min(1),

    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.string().min(1),
    SMTP_USER: z.string().min(1),
    SMTP_PASS: z.string().min(1),
    SES_VERIFIED_SENDER: z.string().email(),

    STRIPE_MONERO_SECRET_KEY: z.string().min(1),
    STRIPE_MONERO_WEBHOOK_SECRET: z.string().min(1),
    STRIPE_FIRO_SECRET_KEY: z.string().min(1),
    STRIPE_FIRO_WEBHOOK_SECRET: z.string().min(1),
    STRIPE_PRIVACY_GUIDES_SECRET_KEY: z.string().min(1),
    STRIPE_PRIVACY_GUIDES_WEBHOOK_SECRET: z.string().min(1),
    STRIPE_GENERAL_SECRET_KEY: z.string().min(1),
    STRIPE_GENERAL_WEBHOOK_SECRET: z.string().min(1),

    KEYCLOAK_URL: z.string().url(),
    KEYCLOAK_CLIENT_ID: z.string().min(1),
    KEYCLOAK_CLIENT_SECRET: z.string().min(1),
    KEYCLOAK_REALM_NAME: z.string().min(1),

    BTCPAY_URL: z.string().url(),
    BTCPAY_EXTERNAL_URL: z.string().url(),
    BTCPAY_API_KEY: z.string().min(1),
    BTCPAY_STORE_ID: z.string().min(1),
    BTCPAY_WEBHOOK_SECRET: z.string().min(1),

    PRINTFUL_WEBHOOK_SECRET: z.string().min(32),

    MONERO_APPLICATION_RECIPIENT: z.string().email(),
    FIRO_APPLICATION_RECIPIENT: z.string().email(),
    PRIVACY_GUIDES_APPLICATION_RECIPIENT: z.string().email(),
    GENERAL_APPLICATION_RECIPIENT: z.string().email(),

    PRINTFUL_API_KEY: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_STRAPI_URL:
      process.env.NODE_ENV === 'production' ? z.string().url().optional() : z.string().url(),
    NEXT_PUBLIC_MONERO_APPLICATION_RECIPIENT: z.string().email(),
    NEXT_PUBLIC_FIRO_APPLICATION_RECIPIENT: z.string().email(),
    NEXT_PUBLIC_PRIVACY_GUIDES_APPLICATION_RECIPIENT: z.string().email(),
    NEXT_PUBLIC_GENERAL_APPLICATION_RECIPIENT: z.string().email(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    BUILD_MODE: !!process.env.BUILD_MODE,
    APP_URL: process.env.APP_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    USER_SETTINGS_JWT_SECRET: process.env.USER_SETTINGS_JWT_SECRET,

    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    STRAPI_API_URL: process.env.STRAPI_API_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,

    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SES_VERIFIED_SENDER: process.env.SES_VERIFIED_SENDER,

    STRIPE_MONERO_SECRET_KEY: process.env.STRIPE_MONERO_SECRET_KEY,
    STRIPE_MONERO_WEBHOOK_SECRET: process.env.STRIPE_MONERO_WEBHOOK_SECRET,
    STRIPE_FIRO_SECRET_KEY: process.env.STRIPE_FIRO_SECRET_KEY,
    STRIPE_FIRO_WEBHOOK_SECRET: process.env.STRIPE_FIRO_WEBHOOK_SECRET,
    STRIPE_PRIVACY_GUIDES_SECRET_KEY: process.env.STRIPE_PRIVACY_GUIDES_SECRET_KEY,
    STRIPE_PRIVACY_GUIDES_WEBHOOK_SECRET: process.env.STRIPE_PRIVACY_GUIDES_WEBHOOK_SECRET,
    STRIPE_GENERAL_SECRET_KEY: process.env.STRIPE_GENERAL_SECRET_KEY,
    STRIPE_GENERAL_WEBHOOK_SECRET: process.env.STRIPE_GENERAL_WEBHOOK_SECRET,

    KEYCLOAK_URL: process.env.KEYCLOAK_URL,
    BTCPAY_EXTERNAL_URL: process.env.BTCPAY_EXTERNAL_URL,
    KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
    KEYCLOAK_CLIENT_SECRET: process.env.KEYCLOAK_CLIENT_SECRET,
    KEYCLOAK_REALM_NAME: process.env.KEYCLOAK_REALM_NAME,

    BTCPAY_URL: process.env.BTCPAY_URL,
    BTCPAY_API_KEY: process.env.BTCPAY_API_KEY,
    BTCPAY_STORE_ID: process.env.BTCPAY_STORE_ID,
    BTCPAY_WEBHOOK_SECRET: process.env.BTCPAY_WEBHOOK_SECRET,

    PRINTFUL_WEBHOOK_SECRET: process.env.PRINTFUL_WEBHOOK_SECRET,

    MONERO_APPLICATION_RECIPIENT: process.env.MONERO_APPLICATION_RECIPIENT,
    FIRO_APPLICATION_RECIPIENT: process.env.FIRO_APPLICATION_RECIPIENT,
    PRIVACY_GUIDES_APPLICATION_RECIPIENT: process.env.PRIVACY_GUIDES_APPLICATION_RECIPIENT,
    GENERAL_APPLICATION_RECIPIENT: process.env.GENERAL_APPLICATION_RECIPIENT,

    PRINTFUL_API_KEY: process.env.PRINTFUL_API_KEY,

    NEXT_PUBLIC_MONERO_APPLICATION_RECIPIENT: process.env.NEXT_PUBLIC_MONERO_APPLICATION_RECIPIENT,
    NEXT_PUBLIC_FIRO_APPLICATION_RECIPIENT: process.env.NEXT_PUBLIC_FIRO_APPLICATION_RECIPIENT,
    NEXT_PUBLIC_PRIVACY_GUIDES_APPLICATION_RECIPIENT:
      process.env.NEXT_PUBLIC_PRIVACY_GUIDES_APPLICATION_RECIPIENT,
    NEXT_PUBLIC_GENERAL_APPLICATION_RECIPIENT:
      process.env.NEXT_PUBLIC_GENERAL_APPLICATION_RECIPIENT,

    NEXT_PUBLIC_STRAPI_CDN_URL: process.env.NEXT_PUBLIC_STRAPI_CDN_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.BUILD_MODE,
})
