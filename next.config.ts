import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ['192.168.1.16']
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
