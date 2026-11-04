import type { NextConfig } from "next";
import { withUniformConfig } from "@uniformdev/next-app-router/config";

const nextConfig: NextConfig = {
  cacheComponents: true,
};

export default withUniformConfig(nextConfig);
