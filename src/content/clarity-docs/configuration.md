---
title: 'Configuration'
description: 'Adjust Clarity behavior through the config file and environment variables.'
order: 2
group: 'guide'
---

# Configuration

Clarity configuration is optional. The defaults are already production-optimized.

## Config file

```ts
// clarity.config.ts
import { defineConfig } from 'clarity';

export default defineConfig({
  routes: './src/pages',
  output: 'static',
});
```

## Environment variables

| Variable       | Default      | Description      |
| -------------- | ------------ | ---------------- |
| `CLARITY_ENV`  | `production` | Runtime mode     |
| `CLARITY_PORT` | `4321`       | Dev server port  |
