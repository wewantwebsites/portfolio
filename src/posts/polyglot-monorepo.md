---
published: false
id: b5bae549-0381-4edd-8c6b-bee0ba21654b
title: Making a Polyframework Monorepo
bannerSrc: /img/polyglot-monorepo_hero.png
imgSrc: /img/polyglot-monorepo_post.png
imgAlt: pixel art hero image with a bunch of windows for websites and applications, a cute bird is purched on one laptop while a cat is on another one.
description: |
  In this blog post I go over how to create a Monorepo using Nx and Pnpm workspaces
keywords:
  - Nx
  - Svelte
  - React
  - Remix
  - Vue
  - pnpm
  - Node
  - frontend development
date: 5/11/2024
categories:
  - Nx
  - Monorepo
  - pnpm
  - Frontend
---

Monorepos have been around for a long time, historically monolith and monorepo were hand-in-hand; you have one big application and it is in one code repository, makes sense and is easy. There eventually became issues with this approach as your code and application scale over time. Microservices & polyrepo architectures solved breaking up monoliths. But in the frontend layer that wasn't quite as desirable, sure MFEs (microfrontends) have come into the picture within the last 8 years, so there had to be a way to share code across multiple applications while still having boundaries? Yes! Lerna was the big player initially in the monorepo game and then Nrwl which eventually rebranded to [Nx](https://nx.dev)! Monorepos and mordern build tools give frontend developers speed, consistency in feature functionality, and flexibility in style. In this blog we will explore setting up a monorepo that uses Remix, Vue, SvelteKit, and bare-bones React. These applications will be consuming a basic ts utility package and a custom-elements package.

This isn't perfect, but it's also pretty good and you can always feel free to make your own changes, you're your own person and I'm not demanding anyone to do what I do!

## Nx & Pnpm Workspace

- setup Nx with Pnpm using the CLI
- configure this all for vite bc we aren't chumps who use webpack (a slow as molASSes piece of JS tooling)

## Shared Utilities

- creating a ts lib using vite
- types

### Package.json

- output dir for types and assets

## Setting up the Applications

- cli commands
- project structurs

### Nx & Pnpm CLI to Add Dependencies

- `pnpm add <package> --filter <app> --workspace`
- `nx run-many build -t` this will build everything and use the cache

## Create Custom Elements

- vite and svelte
- config for custom elements (web components)

### Build and Consume

- `nx build <package> && nx affected -t`
- ensure the package.json shows we got the workspace package added

## Dev Mode

- `pnpm --filter <app> dev` to start up the dev server
- `nx build <package> --watch` now when you save changes to your lib, the dev server will have it's src files updated and you r app will reflect the changes on reserve of the assets
