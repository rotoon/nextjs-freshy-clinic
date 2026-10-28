This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use Node.js 20.9 or newer. The admin uses FireCMS 3.5.1 with Firebase 12 and React 18.3. Keep the `@firecms/*` packages on the same version.

Install dependencies with `npm ci`. Before releasing, run `npm run lint`, `npm test`, and `npm run build`; Next.js 16 does not run ESLint during builds. Run the production build locally with `npm run start`.

The home and service-programs pages cache their public API responses and rendered pages for 24 hours. After that interval, the next visit receives the cached page while Next.js refreshes it in the background. CMS saves, inline edits, and deletes call `POST /api/revalidate` to expire the `public-content` tag immediately; the next page request waits for fresh data. The endpoint verifies the Firebase ID token signature, project, issuer, expiry, and the existing CMS access rule. It needs no service-account key. If invalidation fails after a successful mutation, the CMS shows a retry button without repeating the write. Edits made outside this CMS rely on the 24-hour refresh. Check cache behavior with `npm run build` and `npm run start`, since development mode behaves differently.

Slides and program images use the Next.js image optimizer with a minimum 30-day cache. New CMS uploads also receive 30-day Storage cache metadata; existing Storage objects are unchanged. Replacing an image must produce a new upload URL: invalidating page data does not purge optimized images for an unchanged URL. Responsive slide sources keep the hidden viewport's images from downloading, and program cards use lazy loading.

Existing program images have optimized WebP copies in `public/images/programs`, selected by their exact Firebase URL in `lib/program-images.ts`. The copies preserve aspect ratio and are at most 1200px in either dimension. They avoid downloading the old 6–7.4 MB originals on an image-cache miss. New CMS upload URLs automatically use the remote optimizer, so replacing an image through the CMS still works. Do not overwrite a Storage object while retaining its URL; use a new upload URL to replace an image.

Public fonts retain their original families, with WOFF2 copies in `public/fonts/optimized`. The Thai and body fonts are preloaded in the root HTML. Content hashes in the filenames allow a one-year immutable cache; regenerate the filename hash and update the CSS/preload URLs when changing a font. Chakra uses the same body family during SSR and hydration to avoid switching from the system font after refresh.

The separate `functions` package targets Node.js 22 and uses Firebase Admin 13 / Functions 7, retaining the v1 HTTP functions and region. Install it with `cd functions && npm ci`. Deploying these changes requires a separate Functions deployment as well as the Next.js deployment.

Security patches include compatible gRPC, selector-parser, and UUID overrides. The remaining root audit findings come from React Router 6: FireCMS 3.5.1 requires that major, while the advisory fixes require Router 7.18+. Do not force the incompatible upgrade. The unused `firebase-functions-test` scaffold was removed; the actual regression suite runs via the root `npm test` script. Check both `npm audit` and `cd functions && npm audit`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
