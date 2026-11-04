import type { NextConfig } from "next";
import { withUniformConfig } from "@uniformdev/next-app-router/config";

const nextConfig: NextConfig = {
  cacheComponents: true,
  async redirects() {
    // The Home composition lives at /home in the Uniform project map; Root ("/") is a placeholder.
    // Temporary (307) so "/" can serve a composition later without browsers caching the redirect.
    return [{ source: "/", destination: "/home", permanent: false }];
  },
};

export default withUniformConfig(nextConfig);
