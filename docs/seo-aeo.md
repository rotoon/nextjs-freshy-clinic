# SEO, AEO, and GEO

The public canonical origin is `https://www.thefreshyclinic.com`. Each of the four public routes has its own title, description, canonical, Open Graph, and Twitter metadata. Social previews use the local 1200×630 clinic photo `public/images/og-clinic.jpg`; it avoids the old promotional image's conflicting opening hours.

`app/sitemap.ts` lists public pages only. It deliberately does not invent modification dates. `app/robots.ts` allows public crawling and advertises the sitemap. Admin routes emit `noindex, nofollow`; they remain crawlable so search engines can read that directive. This is indexing control, not access control.

`lib/site.ts` contains branch details shared by visible content and JSON-LD. The owner confirmed on 2026-10-28 that both branches are open daily: Chiang Mai 12:00–20:00, Chiang Rai 11:00–20:00. The existing addresses, phones, and social links come from the site's contact information. The owner also confirmed that the existing Chiang Rai map is correct despite its embedded place label. No new map coordinates are inferred.

The root emits Organization and WebSite data. The contact page emits a separate MedicalClinic for each branch, with stable IDs, postal addresses, phones, and opening hours. No ratings, prices, clinician credentials, or medical outcomes are invented. JSON-LD escapes `<` to prevent a value from closing the script element.

## Search intent and page coverage

These are content targets inferred from the clinic's services and locations, not measured search volumes or rankings.

| Page | Intended queries | Visible answer |
| --- | --- | --- |
| `/` | The Freshy Clinic, เดอะเฟรชชี่คลินิก, คลินิกเสริมความงาม เชียงใหม่ เชียงราย | Clinic identity, locations, recommended programs |
| `/about-us` | เกี่ยวกับ The Freshy Clinic, สาขาคลินิก | Clinic information and branch addresses/hours |
| `/service-programs` | บริการ The Freshy Clinic, โปรแกรมเสริมความงาม | CMS program names/descriptions and contact links |
| `/contact-us` | เบอร์โทร, ที่อยู่, เวลาเปิด, จองคิว The Freshy Clinic | Branch contacts, hours, maps, and visible questions/answers |

Headings distinguish page titles, sections, and program titles. Each public page renders one H1. Contact questions and answers are visible in the initial HTML; they are not crawler-only text. Program contact buttons are normal links.

## GEO: retrieval and citation references

GEO here means Generative Engine Optimization. It builds on the same visible branch facts, direct answers, canonical URLs, and entity identifiers as SEO/AEO. It does not establish that any particular AI system will retrieve or cite the site.

Each program has an addressable article at `/service-programs#program-{documentId}`. The title links to that fragment, including from home-page recommendations. References use Firestore document IDs, so programs with identical names have different targets and renaming or reordering a program does not change its link. Deleting and recreating a document creates a new identity; removing a program also removes its reference. These fragments identify parts of the catalog, not separate pages for indexing, and are not additional sitemap entries.

The catalog emits CollectionPage / ItemList / Service data from the **same fetched list** used to render the cards, with organization/website references matching the rest of the site. CMS saves/deletes invalidate the shared `public-content` cache, refreshing visible content and catalog data together. Only existing program names are represented: no prices are read from old promotional images, and no extra efficacy, availability-by-branch, review, or medical claims are generated. Stable references and consistent data improve document clarity; they are not a special AI ranking signal or a claim of a supported Google catalog rich result.

### Crawler access

The wildcard robots rule permits public pages for crawlers including OAI-SearchBot while excluding `/api/`. Public text, direct answers, program links, and JSON-LD are server-rendered and readable without JavaScript. Adding redundant per-bot allow rules is unnecessary. Local requests with crawler user agents verify application responses only; they cannot prove that real bot IP ranges pass Vercel's firewall or that an external crawler has indexed the pages.

[OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes OAI-SearchBot (ChatGPT search discovery) from GPTBot (potential model training); training access does not establish search visibility. This change does not alter training permissions. After deployment, inspect Vercel bot/firewall events for genuine crawler requests and consult each provider's current IP guidance before changing firewall rules. Do not disable firewall protections just to admit a spoofed user-agent header.

### Measuring GEO after publication

Run these as manual retrieval checks in ChatGPT Search, Google AI search features, and other engines you want to track. Record the date, product/model, exact prompt, whether web search was enabled, the answer, and **actual cited URL**. Separate correct answers with a first-party citation from correct answers without one, third-party-only citations, wrong answers, and no result. No engine checks or citation-rate baseline have been completed by this code change.

| Check prompt | Facts to compare | Expected first-party source |
| --- | --- | --- |
| The Freshy Clinic สาขาเชียงใหม่เปิดกี่โมง ติดต่ออย่างไร | Daily 12:00–20:00; 097 196 3312 | `/contact-us#chiang-mai` |
| The Freshy Clinic สาขาเชียงรายอยู่ที่ไหน เปิดกี่โมง | 66/42 ม.11 ต.สันทราย; daily 11:00–20:00 | `/contact-us#chiang-rai` |
| The Freshy Clinic มีโปรแกรมอะไรบ้าง | Compare with the current CMS catalog; do not infer prices | `/service-programs` and program fragments |

Also test unbranded location/service queries, but record the engines' observations rather than implying a guaranteed recommendation. Repeat the same prompts after re-crawling and content changes. Keep snapshots so changes in an engine's answer can be distinguished from changes to clinic information. A request to the site's HTML, a schema check, or an answer produced without retrieval is not an AI citation test.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) says standard SEO, accessible text, internal links, and structured data matching visible content remain relevant; special AI files are not required. Google also [retired FAQ rich results in May 2026](https://developers.google.com/search/updates). The visible questions are useful content, not a promise of a FAQ rich result or an AI citation. No `llms.txt`, hidden prompts, or mass-generated medical articles are added.

## Verification and remaining external work

Run `npm test`, `npm run lint`, and `npm run build`, then check production-mode rendered HTML for one H1, unique metadata, a self-canonical, JSON-LD, admin noindex, and successful sitemap/robots responses. Validate the deployed contact URL with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/); local JSON/schema checks do not prove external eligibility.

After publishing, submit `/sitemap.xml` in the verified Search Console property and inspect all four public URLs. Align both Google Business Profiles with the confirmed branch details. Search Console/Business Profile ownership and submissions have not been verified by this code change.

For the next content stage, obtain actual clinician names/credentials, service details, contraindications, aftercare information, and documented sources for existing experience/certification/safety claims. Have a qualified clinician review medical content before adding service guides. Individual program pages need stable CMS slugs and useful reviewed content before they are introduced. Current CMS content and this implementation do not establish keyword volumes, search positions, indexing, rich-result display, or AI citation performance.
