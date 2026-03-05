# Fading Moments V1.2

A multilingual static website for fading-moments.com

## Structure

```
/
├── index.html              # Root redirect with language detection
├── robots.txt
├── sitemap.xml
├── 404.html
├── assets/
│   ├── css/site.css
│   └── js/site.js
├── en/                     # English (default)
│   ├── index.html
│   ├── content.json
│   ├── essays/
│   │   ├── index.html
│   │   └── [slug]/index.html
│   ├── photos/
│   │   ├── index.html
│   │   └── [slug]/index.html
│   ├── stories/
│   │   ├── index.html
│   │   └── [series]/index.html
│   ├── videos/
│   │   └── index.html
│   ├── collections/
│   │   └── index.html
│   └── about/
│       └── index.html
├── de/                     # German
│   └── (same structure)
└── zh/                     # Chinese
    └── (same structure)
```

## Deployment

1. Push to GitHub repository
2. Enable GitHub Pages
3. Set custom domain: fading-moments.com
4. Configure Cloudflare DNS with GitHub Pages IPs

## Content Management SOP

### Adding a new Essay

1. Copy `/en/essays/template/` to `/en/essays/[slug]/`
2. Edit `index.html` with content
3. Add entry to `/en/content.json` essays array
4. Push to GitHub

### Adding a new Photo Exhibition

1. Copy `/en/photos/template/` to `/en/photos/[slug]/`
2. Add images to folder
3. Edit `index.html` with exhibition text
4. Add entry to `/en/content.json` photos array
5. Push to GitHub

### Adding a new Video

1. Add entry directly to `/en/content.json` videos array
2. No separate page needed unless desired

## Content.json Fields

See examples in `/en/content.json`, `/de/content.json`, `/zh/content.json`

Key fields:
- `type`: essay|photo|story|video
- `slug`: URL-friendly identifier
- `relationship`: translation|variant|exclusive
- `available_languages`: ["en","de","zh"] subset
- `category`: for videos (Essays Readings|Photo Stories|Life Clips)

## Mobile Testing

Use browser DevTools:
1. Open site
2. Press F12
3. Click device toolbar
4. Select iPhone SE (375px) or similar
5. Test navigation, language switch, scrolling

## Language Switching Logic

1. Root `/index.html` checks localStorage.fm_lang
2. If found, redirects to /en/, /de/, or /zh/
3. If not found, defaults to /en/
4. Header language links update localStorage
5. Fallback: if target page doesn't exist, goes to list page or home

## SEO

- Each page has unique title, description
- hreflang tags for available translations
- Open Graph meta tags
- Semantic HTML structure

## Responsive Breakpoints

- Mobile: <= 480px (single column)
- Tablet: 481px - 768px (2 columns)
- Desktop: > 768px (3-4 columns)
