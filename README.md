This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## About

This project implements DrawingCanvas component which supports different markers, fade and also recording and streaming the changes that are being drawn on the canvas.

This repository in particular, implements recording feature. After clicking the "Start recording" button, Canvas records the changes. Click "Stop recording", to preview the recording video. This can be downloaded as well.

Here's the demo:

![Video demo](2025-11-20%2001-03-45.mp4)