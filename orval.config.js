import { defineConfig } from 'orval';

export default defineConfig({
  'car-insurance': {
    input: './openapi.yaml',
    output: {
      target: './src/core/api/inquiry',
      client: 'react-query',
      httpClient: 'axios',
      clean: true,
      mode: "tags-split",
      override: {
        mutator: {
          path: "./src/core/api/httpClient.ts",
          name: "httpClient",
        },
        reactQuery: {
          version: 5,
        },
      },
    },
  },
});
