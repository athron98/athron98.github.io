---
title: 'Components'
description: 'API reference for the built-in Clarity components.'
order: 3
group: 'api'
---

# Components

Clarity components are pure functions that accept props and return static markup.

## `<Route />`

Declares a route along with its handler.

```tsx
<Route path="/users" handler={listUsers} />
```

## `<ErrorBoundary />`

Catches render errors within a specific subtree.

```tsx
<ErrorBoundary fallback={<ErrorPage />}>
  <Dashboard />
</ErrorBoundary>
```
