import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:4182",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 4182",
    url: "http://127.0.0.1:4182",
    reuseExistingServer: false,
  },
});
