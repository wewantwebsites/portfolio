---
id: 4f45ace8-d7a1-40ee-b9eb-35a30e87d907
title: 'Building My Portfolio Site: A Journey with SvelteKit, TailwindCSS, and Markdown'
description: |
  In this informative blog post, I share my journey of creating a stunning portfolio site using cutting-edge technologies. From the initial design inspiration to the technical implementation, I delve into the details of how I crafted a personalized showcase for my skills and projects.
date: 04/28/2024
imgSrc: /img/portfolio_pixel-showcase.png
imgAlt: |
  A visually striking portfolio website displayed on a computer screen, with vibrant colors and dynamic layouts showcasing various projects and skills. The site features modern, cutting-edge design elements that reflect a seamless blend of creativity and technical prowess.
keywords:
  - Portfolio
  - Web Development
  - SvelteKit
  - TailwindCSS
  - Markdown
  - Responsive Design
  - API Integration
  - Minimalistic Design
  - Personal Branding
  - mdsvex
  - Skeleton UI
  - Reusable Components
  - Frontend Development
  - Web Frameworks
  - Code Splitting
  - Server-Side Rendering
  - Web Design Trends
  - Clean Aesthetics
  - Flexibility
  - Modern CSS
  - Loading Animations
  - Content Management
  - User Experience
categories:
  - development
  - frontend
  - ui
  - tailwind
  - svelte
---

## Introduction

As a developer, having a well-crafted portfolio site is essential. It showcases your skills, projects, and personality to potential clients and employers. In this blog post, I'll walk you through how I built my portfolio site using a combination of powerful tools and technologies.

## The Initial Design: v0.dev

I started my journey by exploring various design options. After some research, I stumbled upon [v0.dev](https://v0.dev), an AI platform that generates designs allowing you to copy-pasta [TailwindCSS](https://tailwindcss.com) with [React](https://react.dev) or barebones HTML. Using something like `beautiful blog & portfolio design` and _3 paths_(images) are available for me to choose. After choosing one, I realized I only really wanted a `Blog Card` for showing my posts from the home page. So I ripped that and moved on.

Overall I think it's a solid tool to get you started or to brainstorm. Often you generate for inspiration and then tweak to your choosing, [or not](https://youtu.be/OBV2bSwuNGo?si=vl9E0D-HvGomFprd&t=20). There are other tools around that are free and don't require credits, [Rapidpages](https://www.rapidpages.com/) is one that I have used before. You can clone their repo down and use your own `GPT_API_KEY` or simply use their site. I'll cover prompt designing in another blog.

## The Tech Stack

### 1. SvelteKit

SvelteKit is a modern web framework based on Svelte. It offers a delightful development experience with features like server-side rendering, routing, and automatic code splitting. I appreciated its simplicity and flexibility, making it an excellent choice for my portfolio.

I opted to use svelte5 so that I could use `runes`. I'm not doing anything crazy with them right now, it was mostly a decision to embrace the future.

```js
let { children } = $props();

{@render children()}
```

While I use React as my dail driver, opting into this syntax does make things easier for me. I can only imagine that if you _truly love_ React this kind of change makes svelte seem less scary right?

![Anakin & Padme meme where Padme asks if Anakin is going to stop crying about React, spoiler alert: he won't](/img/anakin-padme-react-jsx.png)

The SSR feature and built-in api with `routes/api/posts` made it very easy to host my files in a subdir and then use this node API to handle everything else for me. Since Kit uses Vite under the hood I could glob the dir and then use the slug as a key to get the file, it's metadata, and it's contents.

### 2. TailwindCSS

TailwindCSS is a utility-first CSS framework. It allows you to build responsive and consistent designs by composing classes directly in your HTML. I leveraged its extensive utility classes to style my components efficiently. I pretty much have to use this with Skeleton UI though so it's a non-negotiable.

### 3. Skeleton UI

Skeleton UI provided my components, a bunch of classes integrated into TW for me, and then a theme generator. I'm a huge fan of theme generators since they get you 90-100% of what you want. I'm using their Avatar, buttons, and Tabl of Contents components. The ToC is a nice touch and on mobile I think it's paramount.

To be completely honest though, this is overkill. I don't _need_ more than half of these components so I can only imagine I'll be switching to just a hand-rolled css and component solution for this blog only. **OR** maybe I go through setting up a monorepo. Maybe the monorepo will also be able to use React and Vite components who knows, stick around and find out.

### 4. mdsvex

Mdsvex allowed me to seamlessly integrate Markdown files into my Svelte components. I stored my project descriptions, blog posts, and other content in Markdown format. The ability to fetch this content from an API made updating my site a breeze.

## Project Structure

My portfolio site followed a straightforward structure:

1. **Routes**: I organized my routes using SvelteKit's file-based routing system. Each page had its own Svelte component. There is a `routes/+page.svelte` for Home, `routes/about/+page.svelte` for About, `routes/blog/[slug]` for any of the blogs.

2. **Components**: I created components for the blog posts, a nav, and a header. Since I'm using mdsvex I can bring more feature rich components as my blogs get more advanced. For example bringing in a code snippet.

3. **Markdown Content**: All my project descriptions and blog posts were stored as Markdown files in a dedicated directory. mdsvex converted these files into Svelte components during build time. For the API `/api/posts` I glob the directory and use the slug to grab the file and then we can get the metadata for the post.

## Conclusion

This was my first time building a blog this way. In the past I had worked with Wordpress, Joomla, and Drupal to quickly create blogs for clients. Seeing as I wasn't going to need a CMS I decided to give this pattern a try and I found it to be rewarding. First blog post is done, see ya!
