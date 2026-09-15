import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nescia.app",
  appName: "Nescia",
  webDir: "public",
  server: {
    url: "https://nescia.vercel.app",
    cleartext: false,
  },
};

export default config;
