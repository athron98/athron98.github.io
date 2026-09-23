---
title: 'Hooks'
description: 'API reference for the built-in Clarity hooks.'
order: 4
group: 'api'
---

# Hooks

Hooks provide state and side effects in Clarity components.

## `useRoute()`

Returns the active route along with its params.

```ts
const { path, params } = useRoute();
```

## `useFetch()`

A fetch wrapper with automatic caching.

```ts
const { data, loading, error } = useFetch('/api/users');
```
